import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
type Props = {
  open: boolean;
  onClose: () => void;

  qty: string;
  setQty: React.Dispatch<React.SetStateAction<string>>;

  reason: string;
  setReason: React.Dispatch<React.SetStateAction<string>>;

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

  reason,
  setReason,

  note,
  setNote,

  currentStock,
  currentUnit,
  productName,

  suppliers,

  onSave,
}: Props) {
  if (!open) return null;
  const [baseStock, setBaseStock] = useState(currentStock);
  useEffect(() => {
    if (open) {
      setBaseStock(currentStock);
    }
  }, [open]);

  const physicalStock = qty === "" ? baseStock : Number(qty);

  const difference = physicalStock - baseStock;
  const unit = (currentUnit ?? "PCS").toUpperCase();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 overflow-hidden">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-[500px] rounded-[28px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
          <div className="relative overflow-hidden rounded-t-[28px] rounded-b-[18px] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-500 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

            <div className="relative px-7 pt-5 pb-5">
              <div className="flex items-center gap-5">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
                  <Scale size={32} strokeWidth={2.2} className="text-white" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-[36px] font-black leading-none tracking-[-0.02em] text-white">
                    Penyesuaian Stok
                  </h2>

                  <p className="mt-1 truncate text-[15px] font-medium text-white/85" title={productName}>
                    {productName}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-4 pt-4 space-y-3">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 px-5 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-500">STOCK SEKARANG</p>

              <div className="mt-1 flex items-end gap-2">
                <span className="text-[34px] leading-none font-black text-indigo-600">{baseStock}</span>

                <span className="mb-1 text-base font-bold text-indigo-500">{unit}</span>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Stok Fisik</label>

              <input
                type="text"
                inputMode="numeric"
                value={qty}
                onChange={(e) => setQty(e.target.value.replace(/\D/g, ""))}
                placeholder="Contoh: 25"
                className="mt-1.5 w-full rounded-2xl border px-4 py-2.5"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Alasan</label>

              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border px-4 py-2.5 bg-white"
              >
                <option value="">Pilih Alasan</option>
                <option value="Stock Opname">Stock Opname</option>
                <option value="Barang Rusak">Barang Rusak</option>
                <option value="Barang Hilang">Barang Hilang</option>
                <option value="Koreksi Sistem">Koreksi Sistem</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Catatan</label>

              <textarea
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={reason === "Lainnya" ? "Alasan penyesuaian..." : "Catatan (opsional)"}
                className="mt-1.5 w-full rounded-2xl border px-4 py-2.5 resize-none"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Selisih Stok</p>

              <div className="mt-2 flex items-end gap-2">
                <span
                  className={`text-[34px] leading-none font-black ${
                    difference > 0 ? "text-green-600" : difference < 0 ? "text-red-600" : "text-slate-600"
                  }`}
                >
                  {difference > 0 ? "+" : ""}
                  {difference}
                </span>

                <span
                  className={`mb-1 text-base font-bold ${
                    difference > 0 ? "text-green-500" : difference < 0 ? "text-red-500" : "text-slate-500"
                  }`}
                >
                  {unit}
                </span>
              </div>

              <div className="mt-3 border-t border-slate-200 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Produk</p>

                <p className="mt-1 truncate text-[15px] font-semibold text-slate-700" title={productName}>
                  📦 {productName}
                </p>

                <p
                  className={`mt-2 flex items-center gap-2 text-[14px] font-medium ${
                    difference > 0 ? "text-green-600" : difference < 0 ? "text-red-600" : "text-slate-500"
                  }`}
                >
                  <span>{difference > 0 ? "⬆" : difference < 0 ? "⬇" : "➖"}</span>

                  <span>
                    {difference > 0
                      ? "Stok akan bertambah."
                      : difference < 0
                        ? "Stok akan berkurang."
                        : "Tidak ada perubahan stok."}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={onClose}
                className="flex-1 rounded-2xl border border-slate-200 bg-white py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                Batal
              </button>

              <button
                onClick={onSave}
                className="flex-1 rounded-2xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
