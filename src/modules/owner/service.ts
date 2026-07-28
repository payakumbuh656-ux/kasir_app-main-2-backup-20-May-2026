import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { hashPassword, verifyPassword } from "../../modules/security/password";

export async function setOwnerPin(ownerUid: string, pin: string) {
  const pinHash = await hashPassword(pin);

  await updateDoc(doc(db, "users", ownerUid), {
    ownerPinHash: pinHash,
    ownerPinType: "bcrypt",
    ownerPinUpdatedAt: new Date(),
  });
}

export async function hasOwnerPin(ownerUid: string) {
  const snap = await getDoc(doc(db, "users", ownerUid));

  if (!snap.exists()) {
    return false;
  }

  const data = snap.data();

  return Boolean(data.ownerPinHash);
}

export async function verifyOwnerPin(ownerUid: string, pin: string) {
  const snap = await getDoc(doc(db, "users", ownerUid));

  if (!snap.exists()) {
    return false;
  }

  const data = snap.data();

  if (!data.ownerPinHash) {
    return false;
  }

  return await verifyPassword(pin, data.ownerPinHash);
}
