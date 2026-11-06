import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { ArrowDownLeft, ArrowUpRight, Loader2, Wallet, X } from "lucide-react";
import { cashDateLabel, rupiah } from "../../modules/cash/calculations";
import type { CashEntry, CashFormValues } from "../../modules/cash/types";

type Props = {
  mode: "opening" | "entry";
  dayKey: string;
  initialAmount: number;
  openingSet: boolean;
  darkMode: boolean;
  entries: CashEntry[];
  onClose: () => void;
  onSave: (values: CashFormValues) => Promise<void>;
};
export default function CashFormDialog({
  mode,
  dayKey,
  initialAmount,
  openingSet,
  darkMode,
  entries,
  onClose,
  onSave,
}: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const lock = useRef(false);
  const titleId = useId();
  const opening = mode === "opening";
  const [amountText, setAmountText] = useState(opening ? initialAmount.toLocaleString("id-ID") : "");
  const [note, setNote] = useState(opening && !openingSet ? "Kas awal toko" : "");
  const [kind, setKind] = useState<"IN" | "OUT">("IN");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);
  const close = () => {
    if (!lock.current) onClose();
  };
  const updateAmount = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 15);
    setAmountText(digits ? Number(digits).toLocaleString("id-ID") : "");
    setError("");
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (lock.current) return;
    const digits = amountText.replace(/\D/g, "");
    const amount = Number(digits);
    if (!digits || !Number.isSafeInteger(amount) || (!opening && amount <= 0)) {
      setError(opening ? "Isi nominal kas awal. Rp 0 diperbolehkan." : "Isi nominal kas lebih dari Rp 0.");
      return;
    }
    if (!note.trim()) {
      setError("Isi keterangan agar catatan kas mudah diperiksa.");
      return;
    }
    lock.current = true;
    setBusy(true);
    setError("");
    try {
      await onSave({ amount, note: note.trim(), kind });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Catatan kas gagal disimpan. Silakan coba lagi.");
    } finally {
      lock.current = false;
      setBusy(false);
    }
  };
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const secondary = darkMode ? "text-slate-400" : "text-slate-500";
  const input = `w-full rounded-xl border px-3 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60 ${darkMode ? "border-slate-700 bg-slate-800 text-white" : "border-slate-200 bg-white text-slate-900"}`;
  return createPortal(
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      aria-busy={busy}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className={`m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border p-0 shadow-2xl backdrop:bg-slate-950/50 ${darkMode ? "border-slate-700 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-900"}`}
    >
      <form onSubmit={submit} className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2
              id={titleId}
              className={`flex items-center gap-2 text-lg font-bold ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}
            >
              <Wallet size={20} />
              {opening ? (openingSet ? "Koreksi kas awal" : "Atur kas awal") : "Catat kas masuk / keluar"}
            </h2>
            <p className={`mt-2 text-xs ${secondary}`}>{cashDateLabel(dayKey)}</p>
          </div>
          <button
            type="button"
            aria-label="Tutup formulir kas"
            disabled={busy}
            onClick={close}
            className={`rounded-xl p-2 ${secondary} disabled:opacity-50`}
          >
            <X size={18} />
          </button>
        </div>
        <p className={`mt-4 text-sm leading-relaxed ${secondary}`}>
          {opening
            ? "Isi uang tunai yang sudah ada sebelum penjualan hari ini. Nominal ini menggantikan kas awal, bukan menambah penjualan."
            : "Catat pergerakan uang fisik di luar penjualan dan retur, misalnya tambahan uang kecil atau biaya operasional."}
        </p>
        {!opening && (
          <fieldset disabled={busy} className="mt-5">
            <legend className={`mb-2 text-xs font-semibold ${secondary}`}>Jenis catatan</legend>
            <div className="grid grid-cols-2 gap-2">
              {(["IN", "OUT"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={kind === value}
                  onClick={() => setKind(value)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold transition ${kind === value ? (darkMode ? "border-indigo-500 bg-indigo-500/20 text-indigo-300" : "border-indigo-400 bg-indigo-50 text-indigo-600") : `${border} ${secondary}`}`}
                >
                  {value === "IN" ? <ArrowDownLeft size={17} /> : <ArrowUpRight size={17} />}
                  {value === "IN" ? "Kas masuk" : "Kas keluar"}
                </button>
              ))}
            </div>
          </fieldset>
        )}
        <label className="mt-5 block">
          <span className={`mb-2 block text-xs font-semibold ${secondary}`}>
            {opening ? "Nominal kas awal" : "Nominal kas"}
          </span>
          <div className="relative">
            <span className={`absolute left-3 top-3 text-sm font-semibold ${secondary}`}>Rp</span>
            <input
              autoFocus
              aria-label={opening ? "Nominal kas awal" : "Nominal kas"}
              type="text"
              inputMode="numeric"
              autoComplete="off"
              disabled={busy}
              value={amountText}
              onInput={(event) => updateAmount(event.currentTarget.value)}
              onChange={(event) => updateAmount(event.target.value)}
              className={`${input} pl-10 text-lg font-bold`}
              placeholder="0"
            />
          </div>
        </label>
        <label className="mt-4 block">
          <span className={`mb-2 block text-xs font-semibold ${secondary}`}>
            {opening && openingSet ? "Alasan koreksi" : "Keterangan"}
          </span>
          <textarea
            aria-label={opening && openingSet ? "Alasan koreksi" : "Keterangan"}
            disabled={busy}
            value={note}
            onInput={(event) => setNote(event.currentTarget.value)}
            onChange={(event) => setNote(event.target.value)}
            maxLength={160}
            rows={2}
            placeholder={opening ? "Contoh: uang kecil untuk kembalian" : "Contoh: pembayaran biaya operasional"}
            className={`${input} resize-none`}
          />
          <span className={`mt-1 block text-right text-[11px] ${secondary}`}>{note.length}/160</span>
        </label>
        {error && (
          <p role="alert" className="mt-3 rounded-xl bg-red-500/10 p-3 text-sm text-red-500">
            {error}
          </p>
        )}
        <div className={`mt-5 flex justify-end gap-2 border-t pt-4 ${border}`}>
          <button
            type="button"
            disabled={busy}
            onClick={close}
            className={`rounded-2xl border px-4 py-2.5 text-sm font-semibold disabled:opacity-50 ${border} ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50"}`}
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60"
          >
            {busy && <Loader2 size={15} className="animate-spin" />}
            {busy ? "Menyimpan…" : "Simpan"}
          </button>
        </div>
        {!opening && entries.length > 0 && (
          <div className={`mt-5 border-t pt-4 ${border}`}>
            <p className={`mb-3 text-xs font-semibold ${secondary}`}>Catatan kas hari ini ({entries.length})</p>
            <div className="max-h-40 space-y-3 overflow-y-auto">
              {entries.map((entry) => (
                <div key={entry.id} className="flex items-start justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <p className="break-words font-semibold">{entry.note}</p>
                    <p className={`mt-1 ${secondary}`}>
                      {entry.createdBy?.actorName ?? "—"} ·{" "}
                      {new Date(entry.date).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <p
                    className={`shrink-0 font-bold ${entry.kind === "IN" ? (darkMode ? "text-indigo-300" : "text-indigo-600") : "text-orange-500"}`}
                  >
                    {entry.kind === "IN" ? "+" : "−"} {rupiah(entry.amount)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </dialog>,
    document.body
  );
}
