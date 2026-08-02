import { useEffect, useState } from "react";
import { Package } from "lucide-react";
type Props = {
  open: boolean;
  onClose: () => void;

  qty: string;
  setQty: React.Dispatch<React.SetStateAction<string>>;

  supplier: string;
  setSupplier: React.Dispatch<React.SetStateAction<string>>;

  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;

  currentStock: number;
  currentUnit?: string;
  productName: string;

  suppliers: string[];

  onSave: () => void;
};

export default function RestockModal({
  open,
  onClose,

  qty,
  setQty,

  supplier,
  setSupplier,

  note,
  setNote,

  currentStock,
  currentUnit,
  productName,

  suppliers,

  onSave,
}: Props) {
  const [baseStock, setBaseStock] = useState(currentStock);

  useEffect(() => {
    if (open) {
      setBaseStock(currentStock);
    }
  }, [open]);

  if (!open) return null;

  const previewStock = baseStock + Number(qty || 0);
  const hasInput = qty.trim() !== "";
  const unit = (currentUnit ?? "PCS").toUpperCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6 backdrop-blur-sm md:p-10">
      <div className="w-full max-w-[500px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
        <div className="relative overflow-hidden rounded-t-[28px] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-500">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="relative px-7 pt-5 pb-5">
            <div className="flex items-center gap-5">
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
                <Package size={32} strokeWidth={2.2} className="text-white" />
              </div>

              <div className="min-w-0">
                <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-white">Restock Barang</h2>

                <p className="mt-1 truncate text-[15px] font-medium text-white/85" title={productName}>
                  {productName}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-6 pt-4 pb-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">STOCK SEKARANG</p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-[34px] font-black leading-none text-emerald-700">{baseStock}</span>

                <span className="pb-1 text-[22px] font-bold text-emerald-600">{unit}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-5 py-4">
              <p className="flex items-start gap-2 text-[13px] leading-6 text-slate-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                Stock akan ditambahkan sesuai jumlah yang Anda masukkan.
              </p>
            </div>
          </div>

          <div>
            <label className="text-xs uppercase font-bold text-slate-400">Tambah Stock</label>

            <input
              type="text"
              inputMode="numeric"
              value={qty}
              onChange={(e) => setQty(e.target.value.replace(/\D/g, ""))}
              placeholder="Contoh: 25"
              className="mt-2 w-full rounded-xl border px-4 py-2.5"
            />
          </div>

          <div>
            <label className="text-xs uppercase font-bold text-slate-400">Supplier</label>

            <input
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-2.5"
            />
          </div>

          <div>
            <label className="text-xs uppercase font-bold text-slate-400">Catatan</label>

            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-2.5 resize-none"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">STOCK SETELAH RESTOCK</p>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-[30px] font-black leading-none text-slate-800">
                {baseStock}
                <span className="ml-1 text-[18px] font-bold">{unit}</span>
              </span>

              <span className="text-[26px] font-light text-slate-400">→</span>

              <span
                className={`text-[30px] font-black leading-none ${hasInput ? "text-emerald-600" : "text-slate-500"}`}
              >
                {previewStock}
                <span className="ml-1 text-[18px] font-bold">{unit}</span>
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 rounded-2xl border py-2.5 font-semibold">
              Batal
            </button>

            <button
              onClick={onSave}
              className="flex-1 rounded-2xl bg-indigo-600 text-white py-2.5 font-semibold hover:bg-indigo-700"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
