import { useEffect, useMemo, useState } from "react";
import { auth } from "../../lib/firebase";
import { cashBounds, cashDayKey, cashSummary, paymentSummary } from "../../modules/cash/calculations";
import { cashRequestId, saveCashEntry, saveOpeningCash } from "../../modules/cash/service";
import { useCashDashboard } from "../../modules/cash/useCashDashboard";
import type { CashFormValues, DashboardPeriod } from "../../modules/cash/types";
import CashOverview from "./CashOverview";
import CashFormDialog from "./CashFormDialog";

type Form = {
  mode: "opening" | "entry";
  requestId: string;
  dayKey: string;
  revision: number;
  opening: number;
  openingSet: boolean;
};
export default function CashDashboard({
  userId,
  period,
  darkMode,
  onNotify,
}: {
  userId: string;
  period: DashboardPeriod;
  darkMode: boolean;
  onNotify: (message: string) => void;
}) {
  const data = useCashDashboard(userId, period);
  const [form, setForm] = useState<Form | null>(null);
  useEffect(() => setForm(null), [userId, data.dayKey]);
  const cash = useMemo(
    () => cashSummary(data.day?.openingBalance ?? 0, data.transactions, data.refunds, data.entries, data.dayKey),
    [data.day, data.transactions, data.refunds, data.entries, data.dayKey]
  );
  const payments = useMemo(() => {
    const { start, end } = cashBounds(data.dayKey, period);
    return paymentSummary(data.transactions, data.refunds, start, end);
  }, [data.transactions, data.refunds, data.dayKey, period]);
  const openForm = (mode: Form["mode"]) => {
    if (data.loading || data.error || auth.currentUser?.uid !== userId) return;
    setForm({
      mode,
      requestId: cashRequestId(userId, data.dayKey),
      dayKey: data.dayKey,
      revision: data.day?.openingRevision ?? 0,
      opening: data.day?.openingBalance ?? 0,
      openingSet: !!data.day,
    });
  };
  const save = async (values: CashFormValues) => {
    if (!form) throw new Error("Buka kembali formulir kas.");
    if (form.mode === "opening") await saveOpeningCash(userId, form.dayKey, form.requestId, form.revision, values);
    else await saveCashEntry(userId, form.dayKey, form.requestId, values);
    if (auth.currentUser?.uid === userId && cashDayKey() === form.dayKey) {
      setForm(null);
      onNotify(form.mode === "opening" ? "Kas awal berhasil disimpan" : "Catatan kas berhasil disimpan");
    }
  };
  return (
    <>
      <CashOverview
        dayKey={data.dayKey}
        cash={cash}
        payments={payments}
        periodLabel={period === "today" ? "Hari ini" : period === "month" ? "Bulan ini" : "Tahun ini"}
        openingSet={!!data.day}
        darkMode={darkMode}
        loading={data.loading}
        syncing={data.syncing}
        error={data.error}
        onEditOpening={() => openForm("opening")}
        onAddEntry={() => openForm("entry")}
      />
      {form && form.dayKey === data.dayKey && (
        <CashFormDialog
          mode={form.mode}
          dayKey={form.dayKey}
          initialAmount={form.opening}
          openingSet={form.openingSet}
          darkMode={darkMode}
          entries={data.entries}
          onClose={() => setForm(null)}
          onSave={save}
        />
      )}
    </>
  );
}
