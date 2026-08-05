import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { Plus, Users } from "lucide-react";

import { auth } from "../../lib/firebase";
import { setOwnerPin } from "../../modules/owner";
import { subscribeStaff, updateStaff, updateStaffPermissions, updateStaffPin, deleteStaff } from "../../modules/staff";
import { getCurrentMode } from "../../modules/staff/session";
import type { Staff } from "../../modules/staff";
import StaffList from "./staff/StaffList";
import OwnerCard from "./owner/OwnerCard";
import StaffModal from "./staff/StaffModal";
import PinModal from "./modals/PinModal";

import AccountSettingsPanel from "./shared/AccountSettingsPanel";
import RenameModal from "./modals/RenameModal";

interface StaffSettingsProps {
  showToast: (message: string) => void;
}

export default function StaffSettings({ showToast }: StaffSettingsProps) {
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [isRenameOwnerOpen, setIsRenameOwnerOpen] = useState(false);
  const [isOwnerPinOpen, setIsOwnerPinOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const owner = auth.currentUser;
  async function handleUpdatePermissions(staffId: string, permissions: Staff["permissions"]) {
    const user = auth.currentUser;

    if (!user) return;

    await updateStaffPermissions(user.uid, staffId, permissions);

    setStaffs((prev) =>
      prev.map((staff) =>
        staff.id === staffId
          ? {
              ...staff,
              permissions,
            }
          : staff
      )
    );

    showToast("Permission staff berhasil diperbarui.");
  }

  async function handleRenameStaff(staffId: string, newName: string) {
    const user = auth.currentUser;

    if (!user) return;

    const name = newName.trim();

    if (!name) {
      showToast("Nama tidak boleh kosong.");
      return;
    }

    await updateStaff(user.uid, staffId, {
      name,
      updatedAt: new Date(),
    });

    showToast("Nama staff berhasil diperbarui.");
  }

  async function handleChangeStaffPin(staffId: string, pin: string) {
    const user = auth.currentUser;

    if (!user) return;

    await updateStaffPin(user.uid, staffId, pin);

    showToast("PIN staff berhasil diperbarui.");
  }

  async function handleDeleteStaff(staffId: string) {
    const user = auth.currentUser;

    if (!user) return;

    await deleteStaff(user.uid, staffId);

    showToast("Staff berhasil dihapus.");
  }

  async function handleRenameOwner(newName: string) {
    const user = auth.currentUser;

    if (!user) return;

    const name = newName.trim();

    if (!name) {
      showToast("Nama tidak boleh kosong.");
      return;
    }

    await updateProfile(user, {
      displayName: name,
    });

    setOwnerName(name);

    showToast("Nama owner berhasil diperbarui.");
  }

  useEffect(() => {
    let unsubStaff: (() => void) | undefined;

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setStaffs([]);
        setLoading(false);

        if (unsubStaff) {
          unsubStaff();
          unsubStaff = undefined;
        }

        return;
      }
      setOwnerName(user.displayName ?? "Owner");
      setLoading(true);

      if (unsubStaff) {
        unsubStaff();
      }

      unsubStaff = subscribeStaff(user.uid, (list) => {
        setStaffs(list);
        setLoading(false);
      });
    });

    return () => {
      unsubAuth();

      if (unsubStaff) {
        unsubStaff();
      }
    };
  }, []);

  const mode = getCurrentMode(auth.currentUser?.uid ?? "");

  if (mode !== "OWNER") {
    return <div className="p-6 text-center text-slate-500">Anda tidak memiliki akses ke Staff Management.</div>;
  }

  if (loading) {
    return <div className="p-6">Loading staff...</div>;
  }

  return (
    <div className="p-8">
      <section className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800">Staff Management</h2>

            <p className="mt-2 text-slate-500">Kelola pegawai dan hak akses sistem POS.</p>
          </div>

          <button
            onClick={() => setIsAddStaffOpen(true)}
            className="inline-flex h-12 items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 font-semibold text-white shadow-[0_10px_25px_rgba(79,70,229,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(79,70,229,0.38)] active:scale-95"
          >
            <Plus size={18} />
            Tambah Staff
          </button>
        </div>

        {/* Summary Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-slate-800">1 Owner, {staffs.length} Staff</h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Pengguna aktif yang memiliki akses ke sistem POS toko Anda.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-100">
              <Users size={42} className="text-indigo-600" />
            </div>
          </div>
        </div>

        <OwnerCard ownerName={ownerName || owner?.displayName || "Owner"} ownerEmail={owner?.email || "-"} storeName="">
          <AccountSettingsPanel
            accountType="owner"
            accountName={ownerName || owner?.displayName || "Owner"}
            accountEmail={owner?.email || ""}
            storeName="-"
            onRename={() => setIsRenameOwnerOpen(true)}
            onChangePin={() => setIsOwnerPinOpen(true)}
          />
        </OwnerCard>

        {/* Staff List */}
        <StaffList
          staffs={staffs}
          onAddStaff={() => setIsAddStaffOpen(true)}
          onUpdatePermissions={handleUpdatePermissions}
          onRenameStaff={handleRenameStaff}
          onChangeStaffPin={handleChangeStaffPin}
          onDeleteStaff={handleDeleteStaff}
          showToast={showToast}
        />

        <StaffModal
          open={isAddStaffOpen}
          ownerUid={auth.currentUser?.uid ?? ""}
          onClose={() => setIsAddStaffOpen(false)}
          showToast={showToast}
          onSaved={() => {
            setIsAddStaffOpen(false);
          }}
        />
        <RenameModal
          open={isRenameOwnerOpen}
          currentName={ownerName || owner?.displayName || ""}
          onClose={() => setIsRenameOwnerOpen(false)}
          onSave={async (newName) => {
            await handleRenameOwner(newName);

            setIsRenameOwnerOpen(false);
          }}
        />
        <PinModal
          open={isOwnerPinOpen}
          onClose={() => setIsOwnerPinOpen(false)}
          onSave={async (pin) => {
            const user = auth.currentUser;

            if (!user) return;

            await setOwnerPin(user.uid, pin);

            showToast("PIN owner berhasil diperbarui.");

            setIsOwnerPinOpen(false);
          }}
        />
      </section>
    </div>
  );
}
