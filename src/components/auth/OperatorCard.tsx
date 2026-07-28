import { memo, useMemo, useState } from "react";

import { Eye, EyeOff, ShieldCheck, Cloud, Lock } from "lucide-react";

import { Staff } from "../../modules/staff/types";

interface OperatorCardProps {
  storeName: string;

  logoUrl?: string;

  staff: Staff[];

  loading?: boolean;

  showOwnerMode?: boolean;

  onStartShift: (staff: Staff, pin: string) => void;

  onOwnerLogin: () => void;
}

function OperatorCard({
  storeName,
  logoUrl,
  staff,
  loading = false,
  showOwnerMode = false,
  onStartShift,
  onOwnerLogin,
}: OperatorCardProps) {
  const [selectedStaffId, setSelectedStaffId] = useState("");

  const [pin, setPin] = useState("");

  const [showPin, setShowPin] = useState(false);

  const selectedStaff = useMemo(() => {
    return staff.find((s) => s.id === selectedStaffId);
  }, [staff, selectedStaffId]);

  function handleStartShift() {
    if (!selectedStaff) {
      return;
    }

    onStartShift(selectedStaff, pin);
  }

  function handleOwnerLogin() {
    onOwnerLogin();
  }

  return (
    <div className="w-full max-w-[430px] rounded-[32px] border border-slate-200 bg-white shadow-xl">
      <div className="px-8 py-6">
        <div className="flex flex-col items-center">
          {logoUrl ? (
            <img src={logoUrl} alt="IndoTech POS" className="h-12 w-12 object-contain" />
          ) : (
            <div className="h-12 w-12 rounded-2xl bg-violet-600"></div>
          )}

          <h1 className="mt-4 text-center text-[28px] font-black tracking-tight text-slate-900">INDOTECH POS</h1>

          <p className="mt-1 text-center text-xs font-semibold text-violet-600">Powered by IndoTech</p>

          {storeName && <p className="mt-2 text-center text-xs font-medium text-slate-400">{storeName}</p>}

          <h2 className="mt-6 text-center text-[20px] font-bold text-slate-900">Selamat datang kembali!</h2>

          <p className="mt-2 max-w-[300px] text-center text-[15px] leading-7 text-slate-500">
            Pilih operator dan masukkan PIN untuk memulai.
          </p>

          <div className="mt-6 h-px w-full bg-slate-200/60"></div>

          <div className="mt-6 w-full">
            <label className="mb-2 block text-sm font-semibold text-slate-800">Pilih Operator</label>

            <select
              value={selectedStaffId}
              onChange={(e) => setSelectedStaffId(e.target.value)}
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-slate-700 shadow-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            >
              <option value="">-- Pilih Operator --</option>

              {staff.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            <label className="mt-5 mb-2 block text-sm font-semibold text-slate-800">PIN Operator</label>

            <div className="relative">
              <input
                type={showPin ? "text" : "password"}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Masukkan PIN"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 pr-12 text-slate-700 shadow-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
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
              type="button"
              disabled={loading}
              onClick={handleStartShift}
              className="mt-6 flex h-14 w-full items-center justify-center rounded-2xl bg-violet-600 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:opacity-50"
            >
              {loading ? "Memulai..." : "Mulai"}
            </button>
            <div className="my-4 flex items-center gap-4 text-xs text-slate-400">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span>atau</span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            {showOwnerMode && (
              <button
                type="button"
                onClick={handleOwnerLogin}
                className="h-14 w-full rounded-2xl border border-violet-300 font-bold text-violet-600 transition hover:bg-violet-50"
              >
                👑 Login sebagai Owner
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(OperatorCard);
