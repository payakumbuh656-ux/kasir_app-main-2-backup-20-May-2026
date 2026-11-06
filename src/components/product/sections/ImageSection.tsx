type Props = {
  onOpen: () => void;
};

export default function ImageActionSection({ onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full py-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all font-semibold text-slate-700 mb-3"
    >
      Tambah Foto Produk
    </button>
  );
}
