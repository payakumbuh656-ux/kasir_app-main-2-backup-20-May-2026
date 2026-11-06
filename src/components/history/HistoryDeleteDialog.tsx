import { useId } from "react";
import { Loader2, Trash2 } from "lucide-react";
import HistoryDialog from "./HistoryDialog";

export default function HistoryDeleteDialog({
  invoice,
  darkMode,
  busy,
  error,
  onCancel,
  onConfirm,
}: {
  invoice: string;
  darkMode: boolean;
  busy: boolean;
  error: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const labelId = useId();
  return (
    <HistoryDialog labelId={labelId} darkMode={darkMode} onClose={onCancel} busy={busy}>
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${darkMode ? "bg-red-500/15 text-red-400" : "bg-red-50 text-red-500"}`}
      >
        <Trash2 size={22} />
      </div>
      <h2 id={labelId} className="text-lg font-bold">
        Hapus transaksi ini?
      </h2>
      <p className="mt-2 break-all text-sm font-semibold">{invoice}</p>
      <p className={`mt-3 text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
        Transaksi akan dihapus dari riwayat dan perhitungan laporan. Tindakan ini tidak dapat dibatalkan. Stok tidak
        dikembalikan; gunakan Retur untuk pengembalian barang.
      </p>
      {error && (
        <p role="alert" className="mt-3 text-sm text-red-500">
          {error}
        </p>
      )}
      <div className="mt-6 flex justify-end gap-2">
        <button
          autoFocus
          type="button"
          onClick={onCancel}
          disabled={busy}
          className={`rounded-2xl border px-4 py-2.5 text-sm font-semibold disabled:opacity-50 ${darkMode ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`}
        >
          Batal
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:cursor-wait disabled:opacity-60"
        >
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
          {busy ? "Menghapus…" : "Hapus Transaksi"}
        </button>
      </div>
    </HistoryDialog>
  );
}
