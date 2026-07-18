/**
 * ============================================================
 * RECEIPT ENGINE DEFAULT SETTINGS
 * IndoTech POS
 * ============================================================
 * Seluruh nilai default Receipt Engine.
 *
 * File ini TIDAK menyimpan data toko.
 * File ini hanya menyimpan konfigurasi bawaan.
 * ============================================================
 */

export const receiptDefaults = {
  paperSize: 80,

  showLogo: true,

  showStoreName: true,

  showAddress: true,

  showPhone: true,

  showEmail: true,

  showNpwp: false,

  showCashier: true,

  showFooter: true,

  showQrCode: false,

  showBarcode: false,

  autoPrint: false,

  copies: 1,
} as const;