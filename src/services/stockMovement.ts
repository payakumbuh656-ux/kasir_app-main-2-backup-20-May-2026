import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";

interface StockMovementParams {
  userId: string;
  productId: string;

  productName: string;

  type: "RESTOCK" | "SALE" | "REDUCE" | "ADJUSTMENT";

  qty: number;

  previousStock: number;
  currentStock: number;

  supplier?: string;
  note?: string;

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
  note,

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

    note: note ?? "",

    createdBy,

    createdAt: new Date(),
  });
}
