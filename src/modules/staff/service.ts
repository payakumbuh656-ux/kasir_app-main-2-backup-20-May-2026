import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Staff, StaffPermissions, DEFAULT_STAFF_PERMISSIONS } from "./types";
import { hashPin } from "./hash";

export async function getStaffList(ownerUid: string) {
  const snapshot = await getDocs(collection(db, "users", ownerUid, "staff"));

  return snapshot.docs.map((docItem) => {
    const data = docItem.data();

    return {
      id: docItem.id,
      ...data,

      permissions: {
        ...DEFAULT_STAFF_PERMISSIONS,
        ...data.permissions,
      },
    } as Staff;
  });
}

export function subscribeStaff(ownerUid: string, callback: (staffs: Staff[]) => void) {
  const staffRef = collection(db, "users", ownerUid, "staff");

  return onSnapshot(staffRef, (snapshot) => {
    const staffs = snapshot.docs.map((docItem) => {
      const data = docItem.data();

      return {
        id: docItem.id,
        ...data,

        permissions: {
          ...DEFAULT_STAFF_PERMISSIONS,
          ...data.permissions,
        },
      } as Staff;
    });

    callback(staffs);
  });
}

export async function createStaff(ownerUid: string, staff: Staff) {
  await setDoc(doc(db, "users", ownerUid, "staff", staff.id), staff);
}

export async function updateStaff(ownerUid: string, staffId: string, data: Partial<Staff>) {
  await updateDoc(doc(db, "users", ownerUid, "staff", staffId), data);
}

export async function updateStaffPermissions(ownerUid: string, staffId: string, permissions: StaffPermissions) {
  await updateDoc(doc(db, "users", ownerUid, "staff", staffId), {
    permissions,
    updatedAt: new Date(),
  });
}

export async function deleteStaff(ownerUid: string, staffId: string) {
  await deleteDoc(doc(db, "users", ownerUid, "staff", staffId));
}

export async function updateStaffPin(ownerUid: string, staffId: string, pin: string) {
  const pinHash = await hashPin(pin);

  await updateDoc(doc(db, "users", ownerUid, "staff", staffId), {
    pinHash,
    updatedAt: new Date(),
  });
}

export async function verifyStaffPin(ownerUid: string, staffId: string, pin: string) {
  const snap = await getDoc(doc(db, "users", ownerUid, "staff", staffId));

  if (!snap.exists()) {
    return false;
  }

  const data = snap.data() as Staff;

  const pinHash = await hashPin(pin);

  return data.pinHash === pinHash;
}
