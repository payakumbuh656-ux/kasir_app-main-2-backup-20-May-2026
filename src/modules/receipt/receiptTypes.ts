export type PaperWidth = "58mm" | "80mm";

export interface ReceiptSettings {
  showLogo: boolean;
  showAddress: boolean;
  showPhone: boolean;
  showEmail: boolean;
  showCashier: boolean;
  showInvoice: boolean;
  showDate: boolean;
  showQrInvoice: boolean;

  paperWidth: PaperWidth;

  fontSize: number;
  lineHeight: number;

  feedAfterPrint: number;

  footerLine1: string;
  footerLine2: string;
  footerLine3: string;
}

export const DEFAULT_RECEIPT_SETTINGS: ReceiptSettings = {
  showLogo: true,
  showAddress: true,
  showPhone: true,
  showEmail: false,
  showCashier: true,
  showInvoice: true,
  showDate: true,
  showQrInvoice: false,

  paperWidth: "58mm",

  fontSize: 11,
  lineHeight: 1.2,

  feedAfterPrint: 3,

  footerLine1: "Terima kasih telah berbelanja",
  footerLine2: "",
  footerLine3: "",
};
/* ============================================================
 * Receipt Engine Types
 * ============================================================ */

export interface StoreInfo {
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  npwp?: string;
}

export interface CashierInfo {
  id?: string;
  name: string;
}

export interface ReceiptItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface ReceiptTotals {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export interface ReceiptPayment {
  method: "cash" | "qris" | "transfer";
  paidAmount: number;
  changeAmount: number;
}

export interface ReceiptData {
  invoiceNo: string;
  transactionDate: Date;

  store: StoreInfo;
  cashier: CashierInfo;

  items: ReceiptItem[];

  totals: ReceiptTotals;

  payment: ReceiptPayment;

  footer?: string[];
}
