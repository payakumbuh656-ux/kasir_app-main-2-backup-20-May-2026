import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

interface OwnerPinModalProps {
  open: boolean;
  onClose: () => void;
  mode: "SETUP" | "VERIFY";
  onSubmit: (pin: string) => Promise<void>;
}

export default function OwnerPinModal({ open, mode, onClose, onSubmit }: OwnerPinModalProps) {
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit() {
    if (!pin) return;

    try {
      setLoading(true);

      await onSubmit(pin);

      setPin("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900/20 px-4">
      <div className="w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-7 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">{mode === "SETUP" ? "Buat PIN Owner" : "Login Owner"}</h2>

          <button onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100">
            <X size={20} />
          </button>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-500">Masukkan PIN Owner untuk melanjutkan.</p>

        <div className="relative mt-6">
          <input
            type={showPin ? "text" : "password"}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Masukkan PIN Owner"
            className="h-14 w-full rounded-2xl border border-slate-200 px-5 pr-12 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          />

          <button
            type="button"
            onClick={() => setShowPin(!showPin)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          disabled={loading}
          onClick={handleSubmit}
          className="mt-6 h-14 w-full rounded-2xl bg-violet-600 font-bold text-white shadow-lg shadow-violet-200 hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "Memverifikasi..." : "Masuk sebagai Owner"}
        </button>
      </div>
    </div>
  );
}
