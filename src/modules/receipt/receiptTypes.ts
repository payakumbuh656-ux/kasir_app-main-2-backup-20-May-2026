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