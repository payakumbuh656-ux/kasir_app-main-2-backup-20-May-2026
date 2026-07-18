import { ArrowDown, ChevronDown, FileText } from "lucide-react";
import { movementConfig } from "./movementConfig";
import { forwardRef, useState } from "react";
type StockMovement = {
  id: string;

  type: string;

  qty: number;

  previousStock: number;

  currentStock: number;

  supplier?: string;

  note?: string;

  staffName?: string;

  staffRole?: string;

  invoice?: string;

  reason?: string;

  branch?: string;

  device?: string;

  createdAt?: any;
};

type Props = {
  movement: StockMovement;
  highlighted?: boolean;
};

function formatCardTime(createdAt: any) {
  if (!createdAt?.toDate) {
    return {
      short: "--:--",
      full: "Tanggal tidak tersedia",
    };
  }

  const date = createdAt.toDate();

  return {
    short: date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    full: date.toLocaleString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
}

export default function StockMovementCard({
  movement,
  highlighted = false,
}: Props) {
  const config =
    movementConfig[movement.type as keyof typeof movementConfig] ??
    movementConfig.ADJUSTMENT;

  const Icon = config.icon;

  const colorClass = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700",
    },

    red: {
      bg: "bg-red-100",
      text: "text-red-600",
      badge: "bg-red-100 text-red-700",
    },

    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      badge: "bg-amber-100 text-amber-700",
    },

    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
    },
  } as const;

  const color =
    colorClass[config.color as keyof typeof colorClass] ?? colorClass.amber;

  const referenceLabel =
    movement.type === "RESTOCK"
      ? "Supplier"
      : movement.type === "SALE"
        ? "Invoice"
        : "Referensi";

  const referenceValue =
    movement.type === "RESTOCK"
      ? movement.supplier
      : movement.type === "SALE"
        ? movement.invoice
        : movement.reason;

  const staffName = movement.staffName ?? "-";
  const staffRole = movement.staffRole ?? "Belum diketahui";
  const [expanded, setExpanded] = useState(false);
  const { short, full } = formatCardTime(movement.createdAt);

  return (
    <div
      id={`movement-${movement.id}`}
      className={`border-b border-slate-100 px-6 py-5 transition-all duration-500 hover:bg-slate-50 ${
        highlighted ? "bg-indigo-50 ring-2 ring-indigo-300" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color.bg}`}
          >
            <Icon size={22} className={color.text} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-black text-slate-900">
              {config.title}
            </h3>

            <p title={full} className="mt-1 text-xs font-medium text-slate-400">
              {short} WIB
            </p>
          </div>
        </div>

        <span
          className={`rounded-2xl px-4 py-2 text-sm font-black ${color.badge}`}
        >
          {config.sign}
          {movement.qty} pcs
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
          <span>{movement.previousStock} pcs</span>

          <ArrowDown size={14} className="-rotate-90 text-slate-400" />

          <span className="text-indigo-600">{movement.currentStock} pcs</span>
        </div>

        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </div>

      <div className="mt-5 border-t border-slate-100 pt-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Staff
        </p>

        <div className="mt-2">
          <p className="font-semibold text-slate-800">{staffName}</p>

          <p className="text-sm text-slate-500">{staffRole}</p>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2">
            <FileText size={15} className="text-slate-400" />

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {referenceLabel}
            </p>
          </div>

          <p className="mt-2 font-semibold text-slate-800">
            {referenceValue || "-"}
          </p>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2">
            <ArrowDown size={15} className="text-slate-400" />

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Stock Flow
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Sebelumnya
              </p>

              <p className="mt-2 text-xl font-black text-slate-700">
                {movement.previousStock}
              </p>

              <p className="text-xs text-slate-400">pcs</p>
            </div>

            <ArrowDown
              size={18}
              className="shrink-0 -rotate-90 text-slate-400"
            />

            <div className="flex-1 rounded-2xl border border-indigo-100 bg-indigo-50 p-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-500">
                Sekarang
              </p>

              <p className="mt-2 text-xl font-black text-indigo-600">
                {movement.currentStock}
              </p>

              <p className="text-xs text-indigo-400">pcs</p>
            </div>
          </div>
        </div>

        {movement.note && (
          <div className="mt-5 border-t border-slate-100 pt-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Catatan
            </p>

            <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3">
              <p className="text-sm leading-6 text-slate-600">
                {movement.note}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
