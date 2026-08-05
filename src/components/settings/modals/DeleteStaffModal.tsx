import { Trash2, X } from "lucide-react";

interface DeleteStaffModalProps {
  open: boolean;
  staffName: string;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export default function DeleteStaffModal({ open, staffName, onClose, onConfirm }: DeleteStaffModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100">
              <Trash2 size={18} className="text-red-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">Hapus Staff</h2>

              <p className="text-sm text-slate-500">Tindakan ini tidak bisa dibatalkan.</p>
            </div>
          </div>

          <button type="button" onClick={onClose} className="rounded-xl p-2 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5">
          <p className="text-slate-600">
            Yakin ingin menghapus
            <span className="font-bold"> {staffName}</span>?
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">
          <button onClick={onClose} className="rounded-xl border border-slate-300 px-5 py-2.5 hover:bg-slate-100">
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
