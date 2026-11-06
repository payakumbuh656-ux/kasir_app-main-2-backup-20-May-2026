import type {
  CashEntry,
  CashRefund,
  CashSummary,
  CashTransaction,
  DashboardPeriod,
  PaymentChannel,
  PaymentSummary,
} from "./types";

export function cashDayKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function cashBounds(dayKey: string, period: DashboardPeriod = "today") {
  const [year, month, day] = dayKey.split("-").map(Number);
  const start = new Date(year, period === "year" ? 0 : month - 1, period === "today" ? day : 1).getTime();
  const end = new Date(year, month - 1, day + 1).getTime();
  return { start, end };
}
export function cashTimestamp(value: unknown): number {
  if (typeof value === "number") return value;
  if (value instanceof Date) return value.getTime();
  if (typeof value === "string" && value.trim()) return /^\d+$/.test(value) ? Number(value) : new Date(value).getTime();
  if (value && typeof value === "object" && "toMillis" in value && typeof value.toMillis === "function")
    return value.toMillis();
  return NaN;
}
function money(value: unknown): number {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}
export function paymentChannel(value: unknown): PaymentChannel {
  const method = String(value ?? "")
    .trim()
    .toLowerCase();
  if (!method || method === "tunai" || method === "cash") return "cash";
  if (method === "qris") return "qris";
  if (method === "transfer" || method === "bank transfer") return "transfer";
  return "other";
}
function inPeriod(value: unknown, start: number, end: number) {
  const timestamp = cashTimestamp(value);
  return timestamp >= start && timestamp < end;
}

export function paymentSummary(
  transactions: CashTransaction[],
  refunds: CashRefund[],
  start: number,
  end: number,
  refundSources: CashTransaction[] = transactions
): PaymentSummary {
  const labels: Record<PaymentChannel, string> = {
    cash: "Tunai",
    qris: "QRIS",
    transfer: "Transfer",
    other: "Metode lainnya",
  };
  const groups = new Map<
    PaymentChannel,
    { channel: PaymentChannel; label: string; count: number; received: number; refunded: number }
  >();
  const group = (channel: PaymentChannel) => {
    if (!groups.has(channel))
      groups.set(channel, { channel, label: labels[channel], count: 0, received: 0, refunded: 0 });
    return groups.get(channel)!;
  };
  const sources = new Map(refundSources.map((transaction) => [transaction.id, transaction]));
  let unclassifiedRefund = 0;
  for (const transaction of transactions) {
    if (!inPeriod(transaction.date, start, end)) continue;
    if (["VOID", "VOIDED", "CANCELLED", "CANCELED"].includes(String(transaction.status ?? "").toUpperCase())) continue;
    // Tender includes change; cash entering the drawer is the paid sale amount.
    const total = money(transaction.total);
    const received = transaction.paidAmount == null ? total : Math.min(total, money(transaction.paidAmount));
    if (received <= 0) continue;
    const entry = group(paymentChannel(transaction.paymentMethod));
    entry.count += 1;
    entry.received += received;
  }
  for (const refund of refunds) {
    if (!inPeriod(refund.date, start, end)) continue;
    const amount = money(refund.totalRefund);
    if (amount <= 0) continue;
    const source = sources.get(refund.transactionId ?? "");
    const hasMethod = refund.paymentMethod != null && String(refund.paymentMethod).trim() !== "";
    if (!hasMethod && !source) {
      unclassifiedRefund += amount;
      continue;
    }
    group(paymentChannel(hasMethod ? refund.paymentMethod : source?.paymentMethod)).refunded += amount;
  }
  const methods = [...groups.values()].sort((a, b) => b.received - a.received || a.label.localeCompare(b.label));
  return {
    methods,
    received: methods.reduce((sum, entry) => sum + entry.received, 0),
    refunded: methods.reduce((sum, entry) => sum + entry.refunded, unclassifiedRefund),
    unclassifiedRefund,
  };
}

export function cashSummary(
  opening: number,
  transactions: CashTransaction[],
  refunds: CashRefund[],
  entries: CashEntry[],
  dayKey: string,
  refundSources: CashTransaction[] = transactions
): CashSummary {
  const { start, end } = cashBounds(dayKey);
  const payments = paymentSummary(transactions, refunds, start, end, refundSources);
  const cash = payments.methods.find((method) => method.channel === "cash");
  const todayEntries = entries.filter((entry) => inPeriod(entry.date, start, end));
  const cashIn = todayEntries
    .filter((entry) => entry.kind === "IN")
    .reduce((sum, entry) => sum + money(entry.amount), 0);
  const cashOut = todayEntries
    .filter((entry) => entry.kind === "OUT")
    .reduce((sum, entry) => sum + money(entry.amount), 0);
  const sales = cash?.received ?? 0;
  const refundTotal = cash?.refunded ?? 0;
  const other = cashIn - cashOut;
  const netFlow = sales - refundTotal + other;
  return {
    opening: money(opening),
    sales,
    refunds: refundTotal,
    cashIn,
    cashOut,
    other,
    netFlow,
    estimated: money(opening) + netFlow,
    unclassifiedRefund: payments.unclassifiedRefund,
  };
}
export function rupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}
export function cashDateLabel(dayKey: string): string {
  const [year, month, day] = dayKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}
