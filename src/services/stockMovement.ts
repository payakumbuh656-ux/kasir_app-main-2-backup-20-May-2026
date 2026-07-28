import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";

interface StockMovementParams {
  userId: string;
  productId: string;

  productName: string;

  type: "RESTOCK" | "SALE" | "REDUCE" | "ADJUSTMENT" | "CREATE" | "EDIT";
  qty: number;

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

  createdBy?: string;
}

export async function createStockMovement({
  userId,
  productId,
  productName,

  type,
  qty,

  previousStock,
  currentStock,

  supplier,

  invoice,

  reason,

  note,

  changes,

  createdBy = "OWNER",
}: StockMovementParams) {
  await addDoc(collection(db, "users", userId, "movements"), {
    productId,

    productName,

    type,

    qty,

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
