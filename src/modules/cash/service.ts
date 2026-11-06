import { collection, doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { canAccess } from "../staff/permissions";
import { getCurrentActor } from "../staff/actor";
import { cashDayKey } from "./calculations";
import type { CashFormValues } from "./types";

export function assertCashAccess(userId: string, dayKey: string) {
  if (auth.currentUser?.uid !== userId || !canAccess("dashboard"))
    throw new Error("Sesi berubah atau akses Dashboard tidak tersedia. Buka kembali formulir kas.");
  if (cashDayKey() !== dayKey)
    throw new Error("Tanggal sudah berganti. Tutup formulir dan buka kembali untuk hari ini.");
  if (!navigator.onLine) throw new Error("Hubungkan internet untuk menyimpan catatan kas.");
}
export function cashRequestId(userId: string, dayKey: string): string {
  return doc(collection(db, "users", userId, "cashDays", dayKey, "entries")).id;
}
function actor() {
  const current = getCurrentActor();
  return {
    actorId: current.actorId,
    actorName: current.actorName,
    actorType: current.actorType,
    actorRole: current.actorRole,
  };
}
export function validateCashValues(values: CashFormValues, opening: boolean) {
  if (!Number.isSafeInteger(values.amount) || values.amount < 0 || (!opening && values.amount === 0))
    throw new Error(
      opening ? "Kas awal harus berupa nominal Rupiah yang valid, minimal Rp 0." : "Nominal kas harus lebih dari Rp 0."
    );
  if (!opening && values.kind !== "IN" && values.kind !== "OUT") throw new Error("Pilih kas masuk atau kas keluar.");
  if (!values.note.trim() || values.note.trim().length > 160) throw new Error("Isi keterangan maksimal 160 karakter.");
}
export async function saveOpeningCash(
  userId: string,
  dayKey: string,
  requestId: string,
  expectedRevision: number,
  values: CashFormValues
): Promise<void> {
  assertCashAccess(userId, dayKey);
  validateCashValues(values, true);
  const dayRef = doc(db, "users", userId, "cashDays", dayKey);
  const correctionRef = doc(collection(dayRef, "openingCorrections"), requestId);
  const updatedBy = actor();
  await runTransaction(db, async (transaction) => {
    assertCashAccess(userId, dayKey);
    const previous = await transaction.get(dayRef);
    const correction = await transaction.get(correctionRef);
    assertCashAccess(userId, dayKey);
    if (correction.exists()) {
      if (correction.data().openingBalance !== values.amount || correction.data().note !== values.note.trim())
        throw new Error("Koreksi ini sudah tersimpan. Muat ulang sebelum membuat koreksi lain.");
      return;
    }
    const data = previous.data();
    const revision = Number(data?.openingRevision ?? 0);
    if (revision !== expectedRevision)
      throw new Error("Kas awal telah diubah pengguna lain. Tutup formulir, periksa nominal terbaru, lalu coba lagi.");
    transaction.set(
      dayRef,
      {
        dayKey,
        openingBalance: values.amount,
        openingRevision: revision + 1,
        updatedBy,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
    transaction.set(correctionRef, {
      previousBalance: Number(data?.openingBalance ?? 0),
      openingBalance: values.amount,
      note: values.note.trim(),
      createdBy: updatedBy,
      createdAt: serverTimestamp(),
      date: Date.now(),
    });
  });
}
export async function saveCashEntry(
  userId: string,
  dayKey: string,
  requestId: string,
  values: CashFormValues
): Promise<void> {
  assertCashAccess(userId, dayKey);
  validateCashValues(values, false);
  const entryRef = doc(db, "users", userId, "cashDays", dayKey, "entries", requestId);
  const createdBy = actor();
  await runTransaction(db, async (transaction) => {
    assertCashAccess(userId, dayKey);
    const existing = await transaction.get(entryRef);
    assertCashAccess(userId, dayKey);
    if (existing.exists()) {
      const data = existing.data();
      if (data.kind !== values.kind || data.amount !== values.amount || data.note !== values.note.trim())
        throw new Error("Catatan ini sudah tersimpan. Buka formulir baru untuk mencatat kas berikutnya.");
      return;
    }
    transaction.set(entryRef, {
      kind: values.kind,
      amount: values.amount,
      note: values.note.trim(),
      date: Date.now(),
      dayKey,
      createdBy,
      createdAt: serverTimestamp(),
    });
  });
}
