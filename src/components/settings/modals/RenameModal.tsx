import { useEffect, useState } from "react";
import { Pencil, X } from "lucide-react";

interface RenameModalProps {
  open: boolean;

  currentName: string;

  onClose: () => void;

  onSave: (newName: string) => Promise<void>;
}

export default function RenameModal({ open, currentName, onClose, onSave }: RenameModalProps) {
  const [name, setName] = useState(currentName);

  useEffect(() => {
    setName(currentName);
  }, [currentName]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100">
              <Pencil size={18} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">Ganti Nama</h2>

              <p className="text-sm text-slate-500">Perbarui nama akun.</p>
            </div>
          </div>

          <button type="button" onClick={onClose} className="rounded-xl p-2 transition hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">Nama Baru</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama baru..."
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
        </div>
        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100"
          >
            Batal
          </button>

          <button
            type="button"
            onClick={async () => {
              await onSave(name.trim());
            }}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
