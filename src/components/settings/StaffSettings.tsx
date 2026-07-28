import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Plus, Users } from "lucide-react";

import { auth } from "../../lib/firebase";
import { getStaffList, updateStaffPermissions } from "../../modules/staff";
import type { Staff } from "../../modules/staff";
import StaffList from "./staff/StaffList";
import StaffModal from "./staff/StaffModal";

interface StaffSettingsProps {
  showToast: (message: string) => void;
}

export default function StaffSettings({ showToast }: StaffSettingsProps) {
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  async function handleUpdatePermissions(staffId: string, permissions: Staff["permissions"]) {
    const user = auth.currentUser;

    if (!user) return;

    await updateStaffPermissions(user.uid, staffId, permissions);

    showToast("Permission staff berhasil diperbarui.");
  }

  async function loadStaff(ownerUid: string) {
    setLoading(true);

    try {
      const list = await getStaffList(ownerUid);

      setStaffs(list);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setStaffs([]);
        setLoading(false);
        return;
      }

      try {
        await loadStaff(user.uid);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

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
              <p className="text-sm font-medium text-slate-500">Total Staff</p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-slate-800">{staffs.length}</span>

                <span className="pb-1 text-lg font-semibold text-slate-500">Staff</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Staff aktif yang memiliki akses ke sistem POS toko Anda.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-100">
              <Users size={42} className="text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Staff List */}
        <StaffList
          staffs={staffs}
          onAddStaff={() => setIsAddStaffOpen(true)}
          onUpdatePermissions={handleUpdatePermissions}
        />

        <StaffModal
          open={isAddStaffOpen}
          ownerUid={auth.currentUser?.uid ?? ""}
          onClose={() => setIsAddStaffOpen(false)}
          showToast={showToast}
          onSaved={async () => {
            const user = auth.currentUser;

            if (!user) return;

            await loadStaff(user.uid);

            setIsAddStaffOpen(false);
          }}
        />
      </section>
    </div>
  );
}
