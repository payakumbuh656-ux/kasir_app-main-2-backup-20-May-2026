import { receiptDefaults } from "./receiptDefaults";

/**
 * ============================================================
 * RECEIPT SETTINGS
 * IndoTech POS
 * ============================================================
 * Konfigurasi Receipt Engine.
 *
 * File ini menjadi penghubung antara:
 *
 * Settings
 * ↓
 * Receipt Engine
 * ↓
 * Preview
 * ↓
 * Printer
 * ============================================================
 */

export interface ReceiptSettings {
  paperSize: 58 | 80;

  showLogo: boolean;

  showStoreName: boolean;

  showAddress: boolean;

  showPhone: boolean;

  showEmail: boolean;

  showNpwp: boolean;

  showCashier: boolean;

  showFooter: boolean;

  showQrCode: boolean;

  showBarcode: boolean;

  autoPrint: boolean;

  copies: number;
}

export const defaultReceiptSettings: ReceiptSettings = {
  ...receiptDefaults,
};