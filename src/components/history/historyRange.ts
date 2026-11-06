export type HistoryPreset = "today" | "yesterday" | "7days" | "30days" | "month" | "custom";
export type HistoryRange = { from: Date; to: Date };

export const historyPresets: { value: Exclude<HistoryPreset, "custom">; label: string }[] = [
  { value: "today", label: "Hari Ini" },
  { value: "yesterday", label: "Kemarin" },
  { value: "7days", label: "7 Hari" },
  { value: "30days", label: "30 Hari" },
  { value: "month", label: "Bulan Ini" },
];

export function getHistoryRange(preset: Exclude<HistoryPreset, "custom">, now = new Date()): HistoryRange {
  const to = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const from = new Date(to);
  if (preset === "yesterday") {
    from.setDate(from.getDate() - 1);
    to.setDate(to.getDate() - 1);
  } else if (preset === "7days" || preset === "30days") {
    from.setDate(from.getDate() - (preset === "7days" ? 6 : 29));
  } else if (preset === "month") {
    from.setDate(1);
  }
  return { from, to };
}

export function toDateInput(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function fromDateInput(value: string): Date | undefined {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return toDateInput(date) === value ? date : undefined;
}

export function formatHistoryDate(date: Date): string {
  return date.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
}

export function historyDateMilliseconds(value: unknown): number {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim()) {
    return /^\d+$/.test(value) ? Number(value) : new Date(value).getTime();
  }
  if (value && typeof value === "object" && "toMillis" in value && typeof value.toMillis === "function") {
    return value.toMillis();
  }
  return NaN;
}

export function filterHistoryTransactions<T extends { date?: unknown }>(transactions: T[], range: HistoryRange): T[] {
  const start = new Date(range.from.getFullYear(), range.from.getMonth(), range.from.getDate()).getTime();
  // Exclusive next-day boundary includes the entire end date, including milliseconds.
  const end = new Date(range.to.getFullYear(), range.to.getMonth(), range.to.getDate() + 1).getTime();
  return transactions.filter((transaction) => {
    const date = historyDateMilliseconds(transaction.date);
    return date >= start && date < end;
  });
}

export function getHistorySales(transactions: { netTotal?: unknown; total?: unknown }[]): number {
  return transactions.reduce((sum, transaction) => {
    const amount = Number(transaction.netTotal ?? transaction.total ?? 0);
    return sum + (Number.isFinite(amount) ? amount : 0);
  }, 0);
}
