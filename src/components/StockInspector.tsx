import StockMovementTimeline from "./StockMovementTimeline";
import React, { useMemo, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import {
  Activity,
  BadgeDollarSign,
  Boxes,
  Building2,
  Clock3,
  ChevronDown,
  ChevronUp,
  Edit2,
  Package,
  Tag,
  Trash2,
  TrendingUp,
  Wallet,
  FileText,
  X,
} from "lucide-react";

type Product = {
  id?: string;
  barcode?: string;
  name?: string;
  supplier?: string;
  category?: string;

  unit?: string;

  modal?: number;
  price?: number;
  stock?: number;

  invoiceDate?: string;
  invoiceNumber?: string;
  invoiceNote?: string;

  createdAt?: any;
  updatedAt?: any;
};

type Props = {
  selectedProduct: Product | null;

  movements: StockMovement[];

  onClose: () => void;
  onEdit: () => void;
  onRestock: () => void;
  onReduceStock: () => void;
  onDelete: () => void;
  onAdjustment?: () => void;
  onInvoiceDateChange?: () => void;
};

type StockMovement = {
  id: string;
  type: string;
  qty: number;
  previousStock: number;
  currentStock: number;
  supplier?: string;
  note?: string;
  changes?: any;
  createdAt?: any;
};

export default function StockInspector({
  selectedProduct,

  movements,

  onClose,
  onEdit,
  onRestock,
  onReduceStock,
  onDelete,
  onAdjustment,
  onInvoiceDateChange,
}: Props) {
  if (!selectedProduct) {
    return null;
  }

  const modal = selectedProduct.modal ?? 0;
  const price = selectedProduct.price ?? 0;
  const stock = selectedProduct.stock ?? 0;

  const unit = selectedProduct.unit ?? "PCS";

  const inventoryValue = modal * stock;
  const profit = price - modal;
  const margin = modal > 0 ? (profit / modal) * 100 : 0;

  const [showTimeline, setShowTimeline] = useState(false);

  const invoiceDateInputRef = useRef<HTMLInputElement>(null);

  const PRODUCT_FIELD_LABELS: Record<string, string> = {
    name: "Nama Barang",
    barcode: "Barcode",
    supplier: "Supplier",
    category: "Kategori",
    modal: "Harga Modal",
    price: "Harga Jual",
  };

  const latestEditMovement = useMemo(() => {
    const editMovements = movements.filter((movement) => movement.type === "EDIT");

    if (editMovements.length === 0) {
      return undefined;
    }

    return [...editMovements].sort((a, b) => {
      const aTime = a.createdAt?.toDate?.().getTime?.() ?? new Date(a.createdAt).getTime();

      const bTime = b.createdAt?.toDate?.().getTime?.() ?? new Date(b.createdAt).getTime();

      return bTime - aTime;
    })[0];
  }, [movements]);

  const changedFields = useMemo(() => {
    if (!latestEditMovement?.changes) {
      return [];
    }

    return Object.keys(latestEditMovement.changes);
  }, [latestEditMovement]);

  const latestEditDate = latestEditMovement?.createdAt?.toDate();

  const getChangedFieldLabel = (field: string) => PRODUCT_FIELD_LABELS[field] ?? field;

  const stockStatus =
    stock === 0
      ? {
          label: "Stock Habis",
          badge: "bg-red-100 text-red-700",
          bar: "bg-red-500",
          width: "5%",
          message: "Produk sedang habis! Segera lakukan restock agar penjualan tidak terganggu.",
        }
      : stock < 10
        ? {
            label: "Stock Menipis",
            badge: "bg-amber-100 text-amber-700",
            bar: "bg-amber-500",
            width: "35%",
            message: "Stok mulai menipis! Segera melakukan pembelian ulang agar stok tetap aman!",
          }
        : {
            label: "Stok Aman",
            badge: "bg-emerald-100 text-emerald-700",
            bar: "bg-emerald-500",
            width: "100%",
            message: "Stok dalam kondisi aman.",
          };

  return (
    <aside
      key={selectedProduct.id}
      className="h-screen overflow-y-auto overscroll-contain bg-white shadow-2xl pd-10 will-change-scroll [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch]"
    >
      {" "}
      {/* ================= HEADER ================= */}
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-600">
              <Package size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.25em]">Detail Barang</span>
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900">{selectedProduct.name}</h2>

            <p className="mt-1 font-mono text-sm text-slate-500">{selectedProduct.barcode || "-"}</p>
          </div>

          <button onClick={onClose} className="rounded-xl p-2 transition hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className={`rounded-full px-4 py-1 text-xs font-bold ${stockStatus.badge}`}>{stockStatus.label}</span>

          <span className="text-sm font-semibold text-slate-500">
            {stock} {unit}
          </span>
        </div>
      </div>
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100">Nilai Inventaris</p>

        <h1 className="mt-3 text-4xl font-black">Rp {inventoryValue.toLocaleString("id-ID")}</h1>

        <p className="mt-2 text-sm text-indigo-100">Total inventory asset based on current stock.</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-indigo-100">
              <Wallet size={16} />

              <span className="text-xs uppercase">Harga Modal</span>
            </div>

            <h3 className="mt-3 text-lg font-bold">Rp {modal.toLocaleString("id-ID")}</h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-indigo-100">
              <BadgeDollarSign size={16} />

              <span className="text-xs uppercase">Harga Jual</span>
            </div>

            <h3 className="mt-3 text-lg font-bold">Rp {price.toLocaleString("id-ID")}</h3>
          </div>
        </div>
      </div>
      {/* ================= BUSINESS METRICS ================= */}
      <div className="border-b border-slate-200 p-6">
        <div className="mb-5 flex items-center gap-2">
          <Activity size={18} className="text-indigo-600" />

          <h3 className="font-bold text-slate-900">Analisis Keuntungan</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Keuntungan/{unit}</p>

            <h3 className="mt-2 text-xl font-black text-emerald-600">Rp {profit.toLocaleString("id-ID")}</h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Margin</p>

            <h3 className="mt-2 text-xl font-black text-indigo-600">{margin.toFixed(1)}%</h3>
          </div>
        </div>
      </div>
      {/* ================= PRODUCT INFORMATION ================= */}
      <div className="border-b border-slate-200 p-6">
        <div className="mb-5 flex items-center gap-2">
          <Boxes size={18} className="text-indigo-600" />

          <h3 className="font-bold text-slate-900">Informasi Barang</h3>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Building2 size={18} className="text-slate-400" />

            <div>
              <p className="text-xs uppercase text-slate-400">Supplier</p>

              <p className="font-semibold text-slate-900">{selectedProduct.supplier || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Tag size={18} className="text-slate-400" />

            <div>
              <p className="text-xs uppercase text-slate-400">Category</p>

              <p className="font-semibold text-slate-900">{selectedProduct.category || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock3 size={18} className="text-slate-400" />

            <div>
              <p className="text-xs uppercase text-slate-400">Tanggal Input Barang</p>

              <p className="font-semibold text-slate-900">
                {selectedProduct.createdAt?.toDate
                  ? selectedProduct.createdAt.toDate().toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "-"}
              </p>

              <p className="text-sm text-slate-500">
                {selectedProduct.createdAt?.toDate
                  ? selectedProduct.createdAt.toDate().toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }) + " WIB"
                  : ""}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText size={18} className="mt-1 text-slate-400" />

            <div className="flex-1">
              <p className="text-xs uppercase text-slate-400">Tanggal Berdasarkan Faktur</p>

              <div className="relative mt-1">
                <button
                  type="button"
                  onClick={onInvoiceDateChange}
                  className={`w-full cursor-pointer rounded-lg border border-slate-200 px-3 py-2.5 text-left transition hover:border-indigo-500 ${
                    selectedProduct.invoiceDate ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {selectedProduct.invoiceDate || "MM/DD/YY"}
                </button>
              </div>
              <input ref={invoiceDateInputRef} type="date" className="hidden" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Package size={18} className="text-slate-400" />

            <div>
              <p className="text-xs uppercase text-slate-400">Stok saat Ini</p>

              <p className="font-semibold text-indigo-600">
                {stock} {unit}
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-5">
            <div className="mb-4 flex items-center gap-2">
              <Clock3 size={18} className="text-indigo-600" />

              <h4 className="font-semibold text-slate-900">Perubahan Terakhir</h4>
            </div>

            {!latestEditMovement ? (
              <p className="text-sm text-slate-500">Belum ada riwayat perubahan.</p>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Tanggal Perubahan</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {latestEditDate?.toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-sm text-slate-500">
                    {latestEditDate?.toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    WIB
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Field yang Diubah</p>

                  {changedFields.length === 0 ? (
                    <p className="mt-2 text-sm text-slate-500">Tidak ada detail perubahan.</p>
                  ) : (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {changedFields.map((field) => (
                        <span
                          key={field}
                          className="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 transition-colors"
                        >
                          {getChangedFieldLabel(field)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ================= INVENTORY HEALTH ================= */}
      <div className="border-b border-slate-200 p-6">
        <div className="mb-5 flex items-center gap-2">
          <TrendingUp size={18} className="text-indigo-600" />

          <h3 className="font-bold text-slate-900">Kesehatan Barang</h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">Kondisi Stok</span>

            <span className={`rounded-full px-3 py-1 text-xs font-bold ${stockStatus.badge}`}>{stockStatus.label}</span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`${stockStatus.bar} h-full rounded-full transition-all duration-500`}
              style={{
                width: stockStatus.width,
              }}
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">{stockStatus.message}</p>
        </div>
      </div>
      {/* ================= STOCK MOVEMENT ================= */}
      <div className="border-t border-slate-200">
        <button
          type="button"
          onClick={() => setShowTimeline((prev) => !prev)}
          className="group flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-200 hover:bg-slate-50"
        >
          <div>
            <div className="flex items-center gap-2">
              <Clock3 size={18} className="text-indigo-600" />
              <h3 className="font-bold text-slate-900">Riwayat Pergerakan Stok</h3>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {movements.length === 0 ? "Belum ada aktivitas" : `${movements.length} aktivitas tercatat`}
            </p>
          </div>

          <ChevronDown
            size={20}
            className={`text-slate-400 transition-all duration-200 group-hover:text-indigo-600 group-hover:scale-110 ${
              showTimeline ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showTimeline ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <StockMovementTimeline movements={movements} />
        </div>
      </div>
      {/* ================= QUICK ACTION ================= */}
      <div className="p-6">
        <h3 className="mb-4 font-bold text-slate-900">Quick Actions</h3>

        <div className="space-y-3">
          <button
            onClick={onEdit}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3.5 font-semibold text-white transition duration-200 hover:bg-indigo-700"
          >
            <Edit2 size={18} />
            Edit Barang
          </button>

          <button
            onClick={onRestock}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 font-semibold text-white transition duration-200 hover:bg-emerald-700"
          >
            <TrendingUp size={18} />
            Restock Barang
          </button>

          <button
            onClick={onReduceStock}
            className="w-full rounded-xl border border-red-200 bg-red-50 py-2.5 font-semibold text-red-600 hover:bg-red-100 transition-colors"
          >
            Kurangi Stok
          </button>

          <button
            onClick={onAdjustment}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3.5 font-semibold text-slate-700 transition duration-200 hover:bg-slate-50"
          >
            <Activity size={18} />
            Penyesuaian Stok
          </button>

          <button
            onClick={onDelete}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 py-3.5 font-semibold text-white transition duration-200 hover:bg-red-600"
          >
            <Trash2 size={18} />
            Hapus Barang
          </button>
        </div>
      </div>
    </aside>
  );
}
