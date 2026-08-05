import type { Staff } from "../../../modules/staff";
import StaffCard from "./StaffCard";
import { Plus } from "lucide-react";

interface StaffListProps {
  staffs: Staff[];
  onAddStaff: () => void;

  onUpdatePermissions: (staffId: string, permissions: Staff["permissions"]) => Promise<void>;

  onRenameStaff: (staffId: string, newName: string) => Promise<void>;

  onChangeStaffPin: (staffId: string, pin: string) => Promise<void>;

  onDeleteStaff: (staffId: string) => Promise<void>;
}

export default function StaffList({
  staffs,
  onAddStaff,
  onUpdatePermissions,
  onRenameStaff,
  onChangeStaffPin,
  onDeleteStaff,
}: StaffListProps) {
  if (staffs.length === 0) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
          <span className="text-4xl">👤</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-800">Belum Ada Staff</h3>

        <p className="mt-3 max-w-md text-slate-500">
          Tambahkan staff pertama untuk mulai menggunakan sistem POS dan mengatur hak akses pegawai.
        </p>
        <button
          onClick={onAddStaff}
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50 px-5 font-semibold text-indigo-700 transition-all duration-200 hover:bg-indigo-100 hover:shadow-sm"
        >
          <Plus size={18} />
          Tambah Staff
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {staffs.map((staff) => (
        <StaffCard
          key={staff.id}
          staff={staff}
          onUpdatePermissions={onUpdatePermissions}
          onRenameStaff={onRenameStaff}
          onChangeStaffPin={onChangeStaffPin}
          onDeleteStaff={onDeleteStaff}
        />
      ))}
    </div>
  );
}
