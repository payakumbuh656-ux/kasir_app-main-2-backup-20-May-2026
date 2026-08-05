import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface OwnerCardProps {
  ownerName: string;
  ownerEmail: string;
  storeName: string;

  children?: React.ReactNode;
}

export default function OwnerCard({ ownerName, ownerEmail, storeName, children }: OwnerCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{ownerName || "Owner"}</h3>

          <p className="mt-1 text-sm text-slate-500">{ownerEmail}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-200"
          >
            Settings
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">Online</span>
        </div>
      </div>

      {expanded && <div className="mt-5">{children}</div>}
    </div>
  );
}
