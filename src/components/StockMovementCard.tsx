import { ArrowDown, ChevronDown, FileText } from "lucide-react";
import { movementConfig } from "./movementConfig";
import { forwardRef } from "react";
type FieldChange = {
  before: unknown;
  after: unknown;
};

type StockMovement = {
  id: string;

  type: string;

  productName?: string;

  qty: number;

  unit?: string;

  previousStock: number;

  currentStock: number;

  supplier?: string;

  note?: string;

  changes?: Record<string, FieldChange>;

  createdBy?: any;

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

const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function getFieldLabel(field: string) {
  const labels: Record<string, string> = {
    name: "Nama Barang",
    barcode: "Barcode",
    category: "Kategori",
    supplier: "Supplier",
    modal: "Modal",
    hargaJual: "Harga Jual",
    stock: "Stok",
    minStock: "Minimum Stok",
    unit: "Satuan",
    description: "Deskripsi",
  };

  return labels[field] ?? field;
}

function formatChangeValue(field: string, value: unknown) {
  if (value === null || value === undefined) {
    return "-";
  }

  const currencyFields = new Set([
    "modal",
    "price",
    "harga",
    "hargaBeli",
    "hargaJual",
  ]);

  if (currencyFields.has(field) && typeof value === "number") {
    return rupiahFormatter.format(value);
  }

  return String(value);
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
        : movement.type === "ADJUSTMENT"
          ? "Alasan Penyesuaian"
          : "";

  const referenceValue =
    movement.type === "RESTOCK"
      ? movement.supplier
      : movement.type === "SALE"
        ? movement.invoice
        : movement.type === "ADJUSTMENT"
          ? movement.reason
          : "";

  const staffName = movement.staffName ?? "-";
  const staffRole = movement.staffRole ?? "Belum diketahui";
  const { short, full } = formatCardTime(movement.createdAt);

  const changeEntries = Object.entries(movement.changes ?? {});
  const unit = (movement.unit ?? "PCS").toUpperCase();

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

            <p
              title={full}
              className="mt-1 flex flex-col text-xs font-medium text-slate-400"
            >
              <span>
                {new Date(
                  movement.createdAt?.toDate?.() ?? Date.now(),
                ).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span>{short} WIB</span>
            </p>
          </div>
        </div>

        {movement.type !== "EDIT" && (
          <span
            className={`rounded-2xl px-4 py-2 text-sm font-black ${color.badge}`}
          >
            {config.sign}
            {movement.qty} {unit}
          </span>
        )}
      </div>

      {movement.type !== "EDIT" && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-black text-slate-700">
                {movement.previousStock}
              </span>

              <span className="mb-1 text-xs font-semibold uppercase text-slate-400">
                {unit}
              </span>
            </div>

            <ArrowDown size={18} className="-rotate-90 text-slate-400" />

            <div className="flex items-end gap-1">
              <span className="text-2xl font-black text-indigo-600">
                {movement.currentStock}
              </span>

              <span className="mb-1 text-xs font-semibold uppercase text-indigo-400">
                {unit}
              </span>
            </div>
          </div>

          <div />
        </div>
      )}

      <div
        className={`${
          movement.type === "REDUCE"
            ? "mt-3"
            : "mt-5 border-t border-slate-100 pt-5"
        }`}
      >
        {movement.type !== "REDUCE" && (
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {referenceLabel}
          </p>
        )}

        {movement.type !== "EDIT" && movement.type !== "REDUCE" && (
          <p className="mt-2 font-semibold text-slate-800">
            {referenceValue || "-"}
          </p>
        )}

        {movement.type !== "EDIT" && (
          <div
            className={`border-t border-slate-100 ${
              movement.type === "REDUCE" ? "mt-0 pt-0" : "mt-5 pt-5"
            }`}
          >
            <div className="mt-2 flex items-center gap-2">
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

                <p className="mt-2 text-3xl font-black tracking-tight text-slate-700">
                  {movement.previousStock}
                </p>

                <p className="text-xs text-slate-400">{unit}</p>
              </div>

              <ArrowDown
                size={18}
                className="shrink-0 -rotate-90 text-slate-400"
              />

              <div className="flex-1 rounded-2xl border border-indigo-100 bg-indigo-50 p-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-500">
                  Sekarang
                </p>

                <p className="mt-2 text-3xl font-black tracking-tight text-indigo-600">
                  {movement.currentStock}
                </p>

                <p className="text-xs text-indigo-400">{unit}</p>
              </div>
            </div>
          </div>
        )}

        {movement.type === "EDIT" && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            {movement.type === "EDIT" ? (
              <>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Perubahan Data
                </p>

                <div className="mt-4 space-y-3">
                  {changeEntries.length === 0 ? (
                    <p className="text-sm text-slate-500">
                      Tidak ada perubahan yang tercatat.
                    </p>
                  ) : (
                    changeEntries.map(([field, change]) => (
                      <div
                        key={field}
                        className="rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <p className="text-xs font-bold uppercase text-slate-500">
                          {getFieldLabel(field)}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span
                            className="max-w-full break-all rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
                            title={String(change.before)}
                          >
                            {formatChangeValue(field, change.before)}
                          </span>

                          <ArrowDown
                            size={14}
                            className="-rotate-90 shrink-0 text-slate-400"
                          />

                          <span
                            className="max-w-full break-all rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-600"
                            title={String(change.after)}
                          >
                            {formatChangeValue(field, change.after)}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : (
              <p className="text-sm text-slate-500">
                Detail aktivitas untuk tipe{" "}
                <span className="font-semibold">{movement.type}</span> akan
                ditambahkan pada sprint berikutnya.
              </p>
            )}
          </div>
        )}

        <div className="mt-5 border-t border-slate-100 pt-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Catatan
          </p>

          {movement.note?.trim() ? (
            <p className="mt-3 text-[15px] leading-7 text-slate-600 whitespace-pre-wrap">
              {movement.note}
            </p>
          ) : (
            <p className="mt-3 text-sm italic text-slate-400">
              Tidak ada catatan.
            </p>
          )}
        </div>

        <div className="mt-5 border-t border-slate-100 pt-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Staff
          </p>

          <div className="mt-2">
            <p className="font-semibold text-slate-800">{staffName}</p>

            <p className="text-sm text-slate-500">{staffRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
