import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Staff } from "../../../modules/staff";
import StaffPermissionPanel from "../../../modules/staff/StaffPermissionPanel";
import AccountSettingsPanel from "../shared/AccountSettingsPanel";
import RenameModal from "../modals/RenameModal";
import PinModal from "../modals/PinModal";
import DeleteStaffModal from "../modals/DeleteStaffModal";

interface StaffCardProps {
  staff: Staff;

  onUpdatePermissions: (staffId: string, permissions: Staff["permissions"]) => Promise<void>;
  onRenameStaff: (staffId: string, newName: string) => Promise<void>;
  onChangeStaffPin: (staffId: string, pin: string) => Promise<void>;
  onDeleteStaff: (staffId: string) => Promise<void>;
  showToast: (message: string) => void;
}

export default function StaffCard({
  staff,
  onUpdatePermissions,
  onRenameStaff,
  onChangeStaffPin,
  onDeleteStaff,
  showToast,
}: StaffCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const [isPinOpen, setIsPinOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [draftPermissions, setDraftPermissions] = useState(staff.permissions);

  useEffect(() => {
    setDraftPermissions(staff.permissions);
  }, [staff.permissions]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{staff.name}</h3>

          <p className="mt-1 text-sm text-slate-500">{staff.role}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSettingsExpanded(!settingsExpanded)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-200"
          >
            Settings
            {settingsExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 transition-all hover:bg-indigo-100"
          >
            Permissions
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <span
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              staff.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
            }`}
          >
            {staff.active ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {settingsExpanded && (
        <div className="mt-5">
          <AccountSettingsPanel
            accountType="staff"
            accountName={staff.name}
            role={staff.role}
            onRename={() => {
              setIsRenameOpen(true);
            }}
            onChangePin={() => {
              setIsPinOpen(true);
            }}
            onDelete={() => {
              setIsDeleteOpen(true);
            }}
          />
        </div>
      )}

      {expanded && (
        <div className="mt-5">
          <StaffPermissionPanel permissions={draftPermissions} onChange={setDraftPermissions} />

          <button
            onClick={() => onUpdatePermissions(staff.id, draftPermissions)}
            className="mt-5 w-full rounded-2xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
          >
            Simpan Perubahan
          </button>
        </div>
      )}
      <RenameModal
        open={isRenameOpen}
        currentName={staff.name}
        onClose={() => setIsRenameOpen(false)}
        onSave={async (newName) => {
          await onRenameStaff(staff.id, newName);

          setIsRenameOpen(false);
        }}
      />
      <PinModal
        open={isPinOpen}
        onClose={() => setIsPinOpen(false)}
        showToast={showToast}
        onSave={async (pin) => {
          await onChangeStaffPin(staff.id, pin);

          setIsPinOpen(false);
        }}
      />
      <DeleteStaffModal
        open={isDeleteOpen}
        staffName={staff.name}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={async () => {
          await onDeleteStaff(staff.id);

          setIsDeleteOpen(false);
        }}
      />
    </div>
  );
}
