import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";

interface StockMovementParams {
  userId: string;
  productId: string;

  productName: string;

  type: "RESTOCK" | "SALE" | "RETURN" | "REDUCE" | "ADJUSTMENT" | "CREATE" | "EDIT";
  qty: number;

  unit?: string;

  previousStock: number;
  currentStock: number;

  supplier?: string;

  invoice?: string;

  reason?: string;

  note?: string;

  changes?: {
    nameBefore?: string;
    nameAfter?: string;

    barcodeBefore?: string;
    barcodeAfter?: string;

    supplierBefore?: string;
    supplierAfter?: string;

    categoryBefore?: string;
    categoryAfter?: string;

    modalBefore?: number;
    modalAfter?: number;

    priceBefore?: number;
    priceAfter?: number;
  };

  createdBy?: any;
}

export async function createStockMovement({
  userId,
  productId,
  productName,

  type,
  qty,
  unit,

  previousStock,
  currentStock,

  supplier,

  invoice,

  reason,

  note,

  changes,

  createdBy = null,
}: StockMovementParams) {
  await addDoc(collection(db, "users", userId, "movements"), {
    productId,

    productName,

    type,

    qty,
    unit: unit ?? null,

    previousStock,
    currentStock,

    supplier: supplier ?? "",

    invoice: invoice ?? "",

    reason: reason ?? "",

    note: note ?? "",

    changes: changes ?? null,

    createdBy,

    createdAt: new Date(),
  });
}
