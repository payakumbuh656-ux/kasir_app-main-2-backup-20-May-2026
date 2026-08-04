import { DEFAULT_RECEIPT_SETTINGS } from "../types/receipt-settings";
import type { ReceiptSettings } from "../types/receipt-settings";
const STORAGE_KEY = "receipt-settings";

export class ReceiptSettingsService {
  static async load(): Promise<ReceiptSettings> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return DEFAULT_RECEIPT_SETTINGS;
      }

      return {
        ...DEFAULT_RECEIPT_SETTINGS,
        ...JSON.parse(raw),
      };
    } catch {
      return DEFAULT_RECEIPT_SETTINGS;
    }
  }

  static async save(settings: ReceiptSettings): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }
}
