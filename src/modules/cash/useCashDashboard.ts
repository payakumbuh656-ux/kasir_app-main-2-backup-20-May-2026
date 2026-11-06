import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { cashBounds, cashDayKey } from "./calculations";
import type { CashDay, CashEntry, CashRefund, CashTransaction, DashboardPeriod } from "./types";

type Slot = "day" | "entries" | "transactions" | "refunds";
type State = {
  scope: string;
  day: CashDay | null;
  entries: CashEntry[];
  transactions: CashTransaction[];
  refunds: CashRefund[];
  ready: Partial<Record<Slot, boolean>>;
  cached: Partial<Record<Slot, boolean>>;
  errors: Partial<Record<Slot, string>>;
};
const empty = (scope: string): State => ({
  scope,
  day: null,
  entries: [],
  transactions: [],
  refunds: [],
  ready: {},
  cached: {},
  errors: {},
});
export function useCashDashboard(userId: string, period: DashboardPeriod) {
  const [dayKey, setDayKey] = useState(() => cashDayKey());
  const scope = `${userId}:${dayKey}:${period}`;
  const [state, setState] = useState<State>(() => empty(scope));
  useEffect(() => {
    const refresh = () => setDayKey(cashDayKey());
    refresh();
    const timer = window.setInterval(refresh, 30_000);
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);
  useEffect(() => {
    let active = true;
    setState(empty(scope));
    const update = (slot: Slot, data: Partial<State>, fromCache: boolean) => {
      if (!active) return;
      setState((previous) => {
        const current = previous.scope === scope ? previous : empty(scope);
        return {
          ...current,
          ...data,
          ready: { ...current.ready, [slot]: true },
          cached: { ...current.cached, [slot]: fromCache },
          errors: { ...current.errors, [slot]: "" },
        };
      });
    };
    const fail = (slot: Slot) => (error: unknown) => {
      console.error("CASH DASHBOARD", slot, error);
      if (active)
        setState((previous) => ({
          ...previous,
          ready: { ...previous.ready, [slot]: true },
          errors: {
            ...previous.errors,
            [slot]: "Data kas belum dapat dimuat. Periksa koneksi dan izin akses, lalu muat ulang halaman.",
          },
        }));
    };
    const { start, end } = cashBounds(dayKey, period);
    const dayRef = doc(db, "users", userId, "cashDays", dayKey);
    const unsubscribe = [
      onSnapshot(
        dayRef,
        { includeMetadataChanges: true },
        (snapshot) =>
          update("day", { day: snapshot.exists() ? (snapshot.data() as CashDay) : null }, snapshot.metadata.fromCache),
        fail("day")
      ),
      onSnapshot(
        collection(dayRef, "entries"),
        { includeMetadataChanges: true },
        (snapshot) => {
          const entries = snapshot.docs
            .map((entry) => ({ ...entry.data(), id: entry.id }) as CashEntry)
            .sort((a, b) => b.date - a.date);
          update("entries", { entries }, snapshot.metadata.fromCache);
        },
        fail("entries")
      ),
      // Same query as V1's transaction listener; the SDK can share its existing watch.
      onSnapshot(
        query(collection(db, "users", userId, "transactions"), orderBy("date", "desc")),
        { includeMetadataChanges: true },
        (snapshot) => {
          update(
            "transactions",
            {
              transactions: snapshot.docs.map(
                (transaction) => ({ ...transaction.data(), id: transaction.id }) as CashTransaction
              ),
            },
            snapshot.metadata.fromCache
          );
        },
        fail("transactions")
      ),
      onSnapshot(
        query(collection(db, "users", userId, "returns"), where("date", ">=", start), where("date", "<", end)),
        { includeMetadataChanges: true },
        (snapshot) => {
          update(
            "refunds",
            { refunds: snapshot.docs.map((refund) => ({ ...refund.data(), id: refund.id }) as CashRefund) },
            snapshot.metadata.fromCache
          );
        },
        fail("refunds")
      ),
    ];
    return () => {
      active = false;
      unsubscribe.forEach((stop) => stop());
    };
  }, [userId, dayKey, period, scope]);
  const current = state.scope === scope ? state : empty(scope);
  return {
    ...current,
    dayKey,
    loading: ["day", "entries", "transactions", "refunds"].some((slot) => !current.ready[slot as Slot]),
    error: Object.values(current.errors).find(Boolean) ?? "",
    syncing: Object.values(current.cached).some(Boolean),
  };
}
