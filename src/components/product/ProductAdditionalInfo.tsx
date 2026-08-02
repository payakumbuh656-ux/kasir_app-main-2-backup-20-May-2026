import { ChevronDown, ChevronUp } from "lucide-react";

type ProductAdditionalInfoProps = {
  expanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
};

export default function ProductAdditionalInfo({ expanded, onToggle, children }: ProductAdditionalInfoProps) {
  return (
    <div className="py-2">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between border-t border-slate-200 pt-4 transition-all duration-200"
      >
        <span className="text-sm font-semibold text-slate-600 transition-colors group-hover:text-indigo-600">
          Informasi Tambahan
        </span>

        {expanded ? (
          <ChevronUp size={18} className="text-slate-400 transition-colors group-hover:text-indigo-600" />
        ) : (
          <ChevronDown size={18} className="text-slate-400 transition-colors group-hover:text-indigo-600" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          expanded ? "opacity-100 pt-5" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {expanded && <div className="max-h-40 overflow-y-auto pr-2">{children}</div>}
      </div>
    </div>
  );
}
