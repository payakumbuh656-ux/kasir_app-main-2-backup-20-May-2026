export interface Product {
  id: string;
  barcode: string;
  name: string;
  supplier: string;

  price: number;
  modal: number;

  stock: number;
  initialStock: number;

  category: string;

  /**
   * Unit barang.
   * Produk lama mungkin belum memilikinya.
   */
  unit?: string;

  /**
   * URL gambar produk.
   * Produk lama mungkin belum memilikinya.
   */
  imageUrl?: string;

  /**
   * Jumlah terjual.
   * Bersifat opsional agar tetap kompatibel dengan data lama.
   */
  sold?: number;

  /**
   * Informasi faktur pembelian.
   */
  invoiceDate?: string;
  invoiceNumber?: string;
  invoiceNote?: string;

  /**
   * Informasi tambahan pembelian.
   */
  invoiceDate?: string;

  invoiceNumber?: string;

  invoiceNote?: string;
}
