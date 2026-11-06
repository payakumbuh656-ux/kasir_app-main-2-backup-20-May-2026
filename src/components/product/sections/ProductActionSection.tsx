import { Save } from "lucide-react";

type Props = {
  onOpenImage: () => void;
  onSave: () => void;
};

export default function ProductActionSection({ onOpenImage, onSave }: Props) {
  return (
    <>
      <button
        type="button"
        onClick={onOpenImage}
        className="mb-3 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-100"
      >
        Tambah Foto Produk
      </button>

      <button
        onClick={onSave}
        className="flex w-full items-center justify-center space-x-2 rounded-2xl bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700"
      >
        <Save size={20} />
        <span>Simpan Ke Database</span>
      </button>
    </>
  );
}
