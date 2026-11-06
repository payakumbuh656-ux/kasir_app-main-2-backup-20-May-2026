import { CalendarDays, TrendingUp } from "lucide-react";

export default function HistorySummary({
  count,
  sales,
  darkMode,
}: {
  count: number;
  sales: number;
  darkMode: boolean;
}) {
  const secondary = darkMode ? "text-slate-400" : "text-slate-500";
  const icon = `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${darkMode ? "bg-indigo-500/15 text-indigo-300" : "bg-indigo-50 text-indigo-600"}`;
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`mt-4 grid grid-cols-1 gap-4 rounded-2xl border px-5 py-4 sm:grid-cols-2 sm:gap-0 ${darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}
    >
      <div className="flex items-center gap-3 sm:justify-center">
        <span className={icon}>
          <CalendarDays size={20} />
        </span>
        <div>
          <p className={`text-xs font-medium ${secondary}`}>Total Transaksi</p>
          <p className={`mt-1 text-base font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
            {count.toLocaleString("id-ID")} transaksi
          </p>
        </div>
      </div>
      <div
        className={`flex items-center gap-3 border-t pt-4 sm:justify-center sm:border-l sm:border-t-0 sm:pt-0 ${darkMode ? "border-slate-800" : "border-slate-100"}`}
      >
        <span className={icon}>
          <TrendingUp size={20} />
        </span>
        <div>
          <p className={`text-xs font-medium ${secondary}`}>Total Penjualan</p>
          <p className={`mt-1 text-lg font-extrabold ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>
            Rp {sales.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
}
