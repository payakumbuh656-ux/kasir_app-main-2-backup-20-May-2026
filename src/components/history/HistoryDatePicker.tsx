import { useId, useState, type CSSProperties } from "react";
import { DayPicker } from "react-day-picker";
import { id } from "react-day-picker/locale";
import { CalendarDays, X } from "lucide-react";
import "react-day-picker/style.css";
import HistoryDialog from "./HistoryDialog";
import { fromDateInput, toDateInput, type HistoryRange } from "./historyRange";

export default function HistoryDatePicker({
  range,
  darkMode,
  onCancel,
  onApply,
}: {
  range: HistoryRange;
  darkMode: boolean;
  onCancel: () => void;
  onApply: (range: HistoryRange) => void;
}) {
  const labelId = useId();
  const errorId = useId();
  const [from, setFrom] = useState(toDateInput(range.from));
  const [to, setTo] = useState(toDateInput(range.to));
  const [month, setMonth] = useState(range.from);
  const fromDate = fromDateInput(from);
  const toDate = fromDateInput(to);
  const valid = !!fromDate && !!toDate && fromDate <= toDate;
  const error =
    !fromDate || !toDate
      ? "Pilih tanggal mulai dan tanggal akhir."
      : !valid
        ? "Tanggal akhir harus sama atau setelah tanggal mulai."
        : "";
  const updateFrom = (value: string) => {
    setFrom(value);
    const date = fromDateInput(value);
    if (date) setMonth(date);
  };
  const updateTo = (value: string) => {
    setTo(value);
    const date = fromDateInput(value);
    if (date) setMonth(date);
  };
  const secondary = darkMode ? "text-slate-400" : "text-slate-500";
  const inputClass = `mt-2 min-w-0 w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${darkMode ? "border-slate-700 bg-slate-800 text-slate-100 [color-scheme:dark]" : "border-slate-200 bg-white text-slate-900"}`;
  return (
    <HistoryDialog labelId={labelId} darkMode={darkMode} onClose={onCancel}>
      <div className="flex items-center justify-between gap-3">
        <h2 id={labelId} className="flex items-center gap-2 text-lg font-bold">
          <CalendarDays size={20} className="text-indigo-500" /> Rentang Tanggal
        </h2>
        <button
          type="button"
          aria-label="Tutup kalender"
          onClick={onCancel}
          className={`rounded-xl p-2 ${secondary} focus-visible:ring-2 focus-visible:ring-indigo-500`}
        >
          <X size={20} />
        </button>
      </div>
      <p className={`mt-1 text-sm ${secondary}`}>Pilih satu tanggal atau rentang tanggal.</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <label className={`min-w-0 text-xs font-semibold ${secondary}`}>
          Tanggal mulai
          <input
            type="date"
            aria-label="Tanggal mulai"
            value={from}
            aria-describedby={error ? errorId : undefined}
            className={inputClass}
            onInput={(event) => updateFrom(event.currentTarget.value)}
            onChange={(event) => updateFrom(event.target.value)}
          />
        </label>
        <label className={`min-w-0 text-xs font-semibold ${secondary}`}>
          Tanggal akhir
          <input
            type="date"
            aria-label="Tanggal akhir"
            value={to}
            min={from || undefined}
            aria-invalid={!valid}
            aria-describedby={error ? errorId : undefined}
            className={inputClass}
            onInput={(event) => updateTo(event.currentTarget.value)}
            onChange={(event) => updateTo(event.target.value)}
          />
        </label>
      </div>
      <div className="mt-4 flex justify-center">
        <DayPicker
          mode="range"
          locale={id}
          month={month}
          onMonthChange={setMonth}
          selected={fromDate ? { from: fromDate, to: valid ? toDate : undefined } : undefined}
          onSelect={(selected) => {
            setFrom(selected?.from ? toDateInput(selected.from) : "");
            setTo(selected?.to ? toDateInput(selected.to) : "");
          }}
          showOutsideDays
          style={
            {
              "--rdp-accent-color": darkMode ? "var(--color-indigo-300)" : "var(--color-indigo-600)",
              "--rdp-accent-background-color": darkMode ? "var(--color-indigo-900)" : "var(--color-indigo-50)",
              "--rdp-range_middle-background-color": darkMode ? "var(--color-indigo-900)" : "var(--color-indigo-50)",
              "--rdp-day-height": "36px",
              "--rdp-day-width": "36px",
              "--rdp-day_button-height": "34px",
              "--rdp-day_button-width": "34px",
            } as CSSProperties
          }
        />
      </div>
      <p id={errorId} aria-live="polite" className="mt-2 min-h-5 text-xs text-red-500">
        {error}
      </p>
      <div
        className={`mt-4 flex justify-end gap-2 border-t pt-4 ${darkMode ? "border-slate-800" : "border-slate-100"}`}
      >
        <button
          type="button"
          onClick={onCancel}
          className={`rounded-2xl border px-4 py-2.5 text-sm font-semibold ${darkMode ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`}
        >
          Batal
        </button>
        <button
          type="button"
          disabled={!valid}
          onClick={() => {
            if (fromDate && toDate && valid) onApply({ from: fromDate, to: toDate });
          }}
          className="rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Terapkan
        </button>
      </div>
    </HistoryDialog>
  );
}
