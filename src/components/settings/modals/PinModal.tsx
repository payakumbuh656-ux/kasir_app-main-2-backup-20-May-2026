import { useState } from "react";
import { KeyRound, X } from "lucide-react";
interface PinModalProps {
  open: boolean;

  onClose: () => void;

  onSave: (pin: string) => Promise<void>;

  showToast: (message: string) => void;
}

export default function PinModal({ open, onClose, onSave, showToast }: PinModalProps) {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100">
              <KeyRound size={18} className="text-amber-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">Ganti PIN</h2>

              <p className="text-sm text-slate-500">Masukkan PIN baru.</p>
            </div>
          </div>

          <button type="button" onClick={onClose} className="rounded-xl p-2 transition hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">PIN Baru</label>

          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={pin}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setPin(value);
            }}
            placeholder="6 digit PIN"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <label className="mb-2 mt-5 block text-sm font-medium text-slate-700">Konfirmasi PIN</label>

          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={confirmPin}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setConfirmPin(value);
            }}
            placeholder="Ulangi PIN"
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
            disabled={isSaving}
            onClick={async () => {
              if (isSaving) return;

              if (!/^\d{6}$/.test(pin)) {
                showToast("PIN harus terdiri dari 6 digit angka.");
                return;
              }

              if (pin !== confirmPin) {
                showToast("Konfirmasi PIN tidak sama.");
                return;
              }

              setIsSaving(true);

              try {
                await onSave(pin);

                setPin("");
                setConfirmPin("");

                onClose();
              } finally {
                setIsSaving(false);
              }
            }}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
