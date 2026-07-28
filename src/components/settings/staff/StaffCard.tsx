import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Staff } from "../../../modules/staff";
import StaffPermissionPanel from "../../../modules/staff/StaffPermissionPanel";

interface StaffCardProps {
  staff: Staff;

  onUpdatePermissions: (staffId: string, permissions: Staff["permissions"]) => Promise<void>;
}

export default function StaffCard({ staff, onUpdatePermissions }: StaffCardProps) {
  const [expanded, setExpanded] = useState(false);

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
    </div>
  );
}
