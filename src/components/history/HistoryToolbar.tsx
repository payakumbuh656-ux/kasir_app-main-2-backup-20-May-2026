import { useState } from "react";
import { CalendarDays, Filter } from "lucide-react";
import HistoryDatePicker from "./HistoryDatePicker";
import { formatHistoryDate, historyPresets, type HistoryPreset, type HistoryRange } from "./historyRange";

export default function HistoryToolbar({
  preset,
  range,
  darkMode,
  onPresetChange,
  onRangeChange,
}: {
  preset: HistoryPreset;
  range: HistoryRange;
  darkMode: boolean;
  onPresetChange: (preset: Exclude<HistoryPreset, "custom">) => void;
  onRangeChange: (range: HistoryRange) => void;
}) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const panel = darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white";
  const inactive = darkMode
    ? "border-slate-700 text-slate-300 hover:border-indigo-500 hover:bg-slate-800"
    : "border-slate-200 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50";
  const active = darkMode
    ? "border-indigo-500 bg-indigo-500/20 text-indigo-300"
    : "border-indigo-400 bg-indigo-50 text-indigo-600";
  const button =
    "inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2";
  return (
    <>
      <div className="mb-4 flex flex-col gap-2 xl:flex-row" aria-label="Filter tanggal riwayat penjualan">
        <div className={`flex flex-wrap items-center gap-2 rounded-2xl border p-3 ${panel}`}>
          {historyPresets.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={preset === item.value}
              onClick={() => onPresetChange(item.value)}
              className={`${button} ${preset === item.value ? active : inactive}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={preset === "custom"}
            aria-haspopup="dialog"
            onClick={() => setCalendarOpen(true)}
            className={`${button} ${preset === "custom" ? active : darkMode ? "border-indigo-500/60 text-indigo-300 hover:bg-indigo-500/20" : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"}`}
          >
            <CalendarDays size={15} /> Custom
          </button>
        </div>
        <div
          className={`flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2 rounded-2xl border p-3 ${panel}`}
        >
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label={`Pilih rentang tanggal: ${formatHistoryDate(range.from)} sampai ${formatHistoryDate(range.to)}`}
            onClick={() => setCalendarOpen(true)}
            className={`${button} min-w-0 max-w-full px-2 sm:px-3 ${darkMode ? "border-slate-700 text-slate-200 hover:border-indigo-500" : "border-slate-200 text-slate-700 hover:border-indigo-300"}`}
          >
            <CalendarDays size={15} className="shrink-0" />
            <span>{formatHistoryDate(range.from)}</span>
            <span className="text-slate-400">–</span>
            <span>{formatHistoryDate(range.to)}</span>
            <CalendarDays size={15} className="hidden shrink-0 sm:block" />
          </button>
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => setCalendarOpen(true)}
            className={`${button} ${darkMode ? "border-slate-700 text-indigo-300 hover:bg-slate-800" : "border-slate-100 bg-slate-50 text-indigo-600 hover:bg-indigo-50"}`}
          >
            <Filter size={15} /> Filter
          </button>
        </div>
      </div>
      {calendarOpen && (
        <HistoryDatePicker
          range={range}
          darkMode={darkMode}
          onCancel={() => setCalendarOpen(false)}
          onApply={(next) => {
            onRangeChange(next);
            setCalendarOpen(false);
          }}
        />
      )}
    </>
  );
}
