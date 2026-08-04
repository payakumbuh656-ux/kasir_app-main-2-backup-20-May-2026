import React, { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { createPortal } from "react-dom";
import "react-day-picker/dist/style.css";

type Props = {
  value?: Date;
  onCancel: () => void;
  onSave: (date: Date) => void;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function InvoiceCalendar({ value, onCancel, onSave }: Props) {
  console.log("InvoiceCalendar rendered");
  const initialDate = value ?? new Date();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value ?? undefined);

  const [calendarMonth, setCalendarMonth] = useState(initialDate);

  const [showMonthMenu, setShowMonthMenu] = useState(false);

  const [showYearMenu, setShowYearMenu] = useState(false);
  useEffect(() => {
    const next = value ?? new Date();

    setSelectedDate(value);
    setCalendarMonth(next);
  }, [value]);

  const years = useMemo(() => {
    const list: number[] = [];

    for (let y = 2015; y <= 2035; y++) {
      list.push(y);
    }

    return list;
  }, []);

  return createPortal(
    <div className="fixed bottom-8 right-[420px] z-[99999] w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
      {" "}
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-slate-200/60 px-4 py-3">
        <h3 className="text-[15px] font-semibold text-slate-800">Tanggal Faktur</h3>

        <button onClick={onCancel} className="text-slate-400 transition hover:text-slate-700">
          ✕
        </button>
      </div>
      {/* BODY */}
      <div className="px-4 py-3">
        <div className="mb-3 flex justify-between">
          {/* MONTH */}

          <div className="relative">
            <button
              onClick={() => {
                setShowMonthMenu((v) => !v);
                setShowYearMenu(false);
              }}
              className="rounded-lg px-2 py-1 font-semibold hover:bg-slate-100"
            >
              {MONTHS[calendarMonth.getMonth()]} ▾
            </button>

            {showMonthMenu && (
              <div className="absolute left-0 top-9 z-50 max-h-44 w-40 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl">
                {MONTHS.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => {
                      const next = new Date(calendarMonth);

                      next.setMonth(index);

                      setCalendarMonth(next);

                      setShowMonthMenu(false);
                    }}
                    className={`block w-full px-3 py-2 text-left text-sm hover:bg-indigo-50 ${
                      calendarMonth.getMonth() === index ? "bg-indigo-100 font-semibold text-indigo-700" : ""
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* YEAR */}

          <div className="relative">
            <button
              onClick={() => {
                setShowYearMenu((v) => !v);
                setShowMonthMenu(false);
              }}
              className="rounded-lg px-2 py-1 font-semibold hover:bg-slate-100"
            >
              {calendarMonth.getFullYear()} ▾
            </button>

            {showYearMenu && (
              <div className="absolute right-0 top-9 z-[9999] max-h-44 w-28 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-2xl">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      const next = new Date(calendarMonth);

                      next.setFullYear(year);

                      setCalendarMonth(next);

                      setShowYearMenu(false);
                    }}
                    className={`block w-full px-3 py-2 text-left text-sm hover:bg-indigo-50 ${
                      calendarMonth.getFullYear() === year ? "bg-indigo-100 font-semibold text-indigo-700" : ""
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <DayPicker
          mode="single"
          hideNavigation
          captionLayout="hidden"
          month={calendarMonth}
          onMonthChange={setCalendarMonth}
          selected={selectedDate}
          onSelect={(date) => {
            if (!date) return;
            setSelectedDate(date);
          }}
          className="invoice-calendar text-[13px]"
        />
      </div>
      {/* FOOTER */}
      <div className="flex justify-end gap-2 border-t border-slate-200/60 px-4 py-3">
        <button onClick={onCancel} className="rounded-lg border border-slate-300 px-4 py-2 text-sm">
          Batal
        </button>

        <button
          onClick={() => {
            if (selectedDate) {
              onSave(selectedDate);
            }
          }}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
        >
          Simpan
        </button>
      </div>
    </div>,
    document.body
  );
}

export default React.memo(InvoiceCalendar);
