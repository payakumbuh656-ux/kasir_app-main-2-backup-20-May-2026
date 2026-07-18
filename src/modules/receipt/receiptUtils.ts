/**
 * ============================================================
 * RECEIPT UTILS
 * IndoTech POS
 * ============================================================
 * Seluruh helper untuk Receipt Engine.
 * Hanya berisi fungsi formatting.
 * ============================================================
 */

/**
 * Format angka menjadi Rupiah.
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * Format tanggal.
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  }).format(date);
}

/**
 * Format jam.
 */
export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    timeStyle: "short",
  }).format(date);
}

/**
 * Format tanggal + jam.
 */
export function formatDateTime(date: Date): string {
  return `${formatDate(date)} ${formatTime(date)}`;
}

/**
 * Format metode pembayaran.
 */
export function formatPaymentMethod(
  method: string
): string {
  switch (method) {
    case "cash":
      return "Cash";

    case "qris":
      return "QRIS";

    case "transfer":
      return "Transfer";

    default:
      return method;
  }
}