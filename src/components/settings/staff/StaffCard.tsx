import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Staff } from "../../../modules/staff";
import StaffPermissionPanel from "./StaffPermissionPanel";

interface StaffCardProps {
  staff: Staff;

  onUpdatePermissions: (staffId: string, permissions: Staff["permissions"]) => Promise<void>;
}

export default function StaffCard({ staff, onUpdatePermissions }: StaffCardProps) {
  const [expanded, setExpanded] = useState(false);
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
              staff.active ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"
            }`}
          >
            {staff.active ? "Aktif" : "Nonaktif"}
          </span>
        </div>
      </div>
    </div>
  );
}
