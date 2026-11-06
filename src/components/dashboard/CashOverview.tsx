import { ArrowDownLeft, ArrowUpRight, Banknote, CircleDollarSign, PenLine, Plus, Wallet } from "lucide-react";
import { cashDateLabel, rupiah } from "../../modules/cash/calculations";
import type { CashSummary, PaymentSummary } from "../../modules/cash/types";

type Props = {
  dayKey: string;
  cash: CashSummary;
  payments: PaymentSummary;
  periodLabel: string;
  openingSet: boolean;
  darkMode: boolean;
  loading: boolean;
  syncing: boolean;
  error: string;
  onEditOpening: () => void;
  onAddEntry: () => void;
};
export default function CashOverview({
  dayKey,
  cash,
  payments,
  periodLabel,
  openingSet,
  darkMode,
  loading,
  syncing,
  error,
  onEditOpening,
  onAddEntry,
}: Props) {
  const unavailable = loading || !!error;
  const amount = (value: number) => (unavailable ? "—" : rupiah(value));
  return (
    <section aria-label="Ringkasan kas dan metode pembayaran" className="mb-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
      <article
        aria-labelledby="cash-today-title"
        className="min-w-0 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600 to-indigo-800 p-5 text-white shadow-sm sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-200">Kas hari ini</p>
            <h2 id="cash-today-title" className="mt-2 text-xl font-bold">
              Kas tunai hari ini
            </h2>
            <p className="mt-3 text-sm text-indigo-100">{cashDateLabel(dayKey)}</p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <Wallet size={24} />
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
          <div>
            <p className="text-xs text-indigo-100">Kas awal saat toko dibuka</p>
            <p className="mt-1 break-words text-xl font-bold">{amount(cash.opening)}</p>
            {!openingSet && !unavailable && <p className="mt-1 text-xs text-indigo-200">Belum diatur untuk hari ini</p>}
          </div>
          <button
            type="button"
            disabled={unavailable}
            onClick={onEditOpening}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-bold text-indigo-700 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PenLine size={15} />
            {openingSet ? "Koreksi kas awal" : "Atur kas awal"}
          </button>
        </div>
        <div className="py-6" aria-live="polite" aria-atomic="true">
          <p className="text-sm text-indigo-100">Perkiraan kas saat ini</p>
          <p className="mt-2 break-words text-3xl font-black tracking-tight sm:text-4xl">{amount(cash.estimated)}</p>
          <p className="mt-3 text-xs leading-relaxed text-indigo-100">Kas awal ditambah arus kas tunai hari ini</p>
        </div>
        <dl className="space-y-3 border-y border-white/15 py-4 text-sm">
          <div className="flex items-center justify-between gap-3">
            <dt className="flex items-center gap-2 text-indigo-100">
              <ArrowDownLeft size={16} /> Penjualan tunai
            </dt>
            <dd className="shrink-0 font-bold">{amount(cash.sales)}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="flex items-center gap-2 text-indigo-100">
              <ArrowUpRight size={16} /> Refund tunai
            </dt>
            <dd className="shrink-0 font-bold">{amount(cash.refunds)}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-indigo-100">Kas masuk / keluar lainnya</dt>
            <dd className="shrink-0 font-bold">{amount(cash.other)}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-indigo-100">Arus kas tunai bersih</dt>
            <dd className="shrink-0 font-bold">{amount(cash.netFlow)}</dd>
          </div>
        </dl>
        {!unavailable && cash.unclassifiedRefund > 0 && (
          <p
            role="status"
            className="mt-4 rounded-xl border border-amber-200/30 bg-amber-100/10 p-3 text-xs leading-relaxed text-amber-100"
          >
            Metode pembayaran untuk refund {rupiah(cash.unclassifiedRefund)} belum diketahui, sehingga belum masuk
            perhitungan kas tunai. Periksa transaksi asalnya.
          </p>
        )}
        {!unavailable && cash.estimated < 0 && (
          <p className="mt-3 text-xs text-amber-100">Kas tercatat negatif. Periksa kas awal dan catatan kas keluar.</p>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-indigo-100">
            Kas masuk {amount(cash.cashIn)} · Kas keluar {amount(cash.cashOut)}
          </p>
          <button
            type="button"
            disabled={unavailable}
            onClick={onAddEntry}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-3 py-2 text-xs font-bold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus size={14} /> Catat kas
          </button>
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-indigo-200">
          QRIS dan transfer tidak masuk kas tunai. Cocokkan perkiraan dengan uang fisik. Kas awal dicatat per hari dan
          terpisah dari pembukaan shift kasir.
        </p>
      </article>
      <article
        aria-labelledby="cash-payment-title"
        className={`flex min-w-0 flex-col rounded-3xl border p-5 shadow-sm sm:p-6 ${darkMode ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2
              id="cash-payment-title"
              className={`text-xl font-bold ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}
            >
              Metode pembayaran
            </h2>
            <p className={`mt-2 text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Penerimaan berhasil · {periodLabel.toLowerCase()}
            </p>
          </div>
          <CircleDollarSign size={24} className={darkMode ? "text-indigo-300" : "text-indigo-500"} />
        </div>
        {error ? (
          <p role="alert" className="my-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </p>
        ) : loading ? (
          <p role="status" className="my-8 text-sm text-slate-400">
            Memuat data kas…
          </p>
        ) : (
          <div className="mt-7 flex-1 space-y-6">
            {payments.methods.length ? (
              payments.methods.map((method) => (
                <div key={method.channel}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold">{method.label}</p>
                      <p className="mt-1 text-xs text-slate-400">{method.count.toLocaleString("id-ID")} pembayaran</p>
                    </div>
                    <p className={`text-sm font-bold ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                      {rupiah(method.received)}
                    </p>
                  </div>
                  <div
                    className={`mt-3 h-2 overflow-hidden rounded-full ${darkMode ? "bg-slate-800" : "bg-indigo-50"}`}
                  >
                    <div
                      className="h-full rounded-full bg-indigo-600"
                      style={{ width: `${payments.received ? (method.received / payments.received) * 100 : 0}%` }}
                    />
                  </div>
                  {method.refunded > 0 && (
                    <p className="mt-2 text-xs text-slate-400">Refund {rupiah(method.refunded)}</p>
                  )}
                </div>
              ))
            ) : (
              <div className="py-10 text-center">
                <Banknote size={30} className="mx-auto mb-3 text-indigo-300" />
                <p className="text-sm text-slate-400">Belum ada pembayaran pada periode ini.</p>
              </div>
            )}
          </div>
        )}
        <div
          className={`mt-7 grid grid-cols-2 gap-4 border-t pt-5 ${darkMode ? "border-slate-800" : "border-slate-100"}`}
        >
          <div>
            <p className="text-xs text-slate-400">Total diterima</p>
            <p className={`mt-2 break-words text-xl font-bold ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>
              {amount(payments.received)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Pengembalian dana</p>
            <p className="mt-2 break-words text-xl font-bold">{amount(payments.refunded)}</p>
          </div>
        </div>
        <div className={`mt-5 flex items-center gap-2 text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${syncing || unavailable ? "bg-amber-400" : "bg-indigo-500"}`} />
          {error
            ? "Data belum tersedia"
            : loading
              ? "Mengambil data"
              : syncing
                ? "Menunggu sinkronisasi"
                : "Data diperbarui otomatis"}
        </div>
      </article>
    </section>
  );
}
