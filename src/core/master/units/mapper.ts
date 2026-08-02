import { DocumentSnapshot, Timestamp, serverTimestamp } from "firebase/firestore";
import { Unit } from "./model";

export type FirestoreUnitDocument = {
  name?: string;
  symbol?: string;
  allowDecimal?: boolean;
  active?: boolean;
  system?: boolean;
  sortOrder?: number;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

export type CreateUnitInput = {
  name: string;
  symbol: string;
  allowDecimal: boolean;
  active: boolean;
  system: boolean;
  sortOrder: number;
};

export function toFirestoreForCreate(input: CreateUnitInput) {
  return {
    name: input.name.trim(),

    symbol: input.symbol.trim(),

    allowDecimal: input.allowDecimal,

    active: input.active,

    system: input.system,

    sortOrder: input.sortOrder,

    createdAt: serverTimestamp(),

    updatedAt: serverTimestamp(),
  };
}

export function toFirestoreForUpdate(input: UpdateUnitInput) {
  return {
    name: input.name.trim(),

    symbol: input.symbol.trim(),

    allowDecimal: input.allowDecimal,

    active: input.active,

    sortOrder: input.sortOrder,

    updatedAt: serverTimestamp(),
  };
}

export type UpdateUnitInput = {
  name: string;
  symbol: string;
  allowDecimal: boolean;
  active: boolean;
  sortOrder: number;
};

export function mapUnitDocument(snapshot: DocumentSnapshot<FirestoreUnitDocument>): Unit | null {
  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();
  return {
    id: snapshot.id,

    name: data.name ?? "",

    symbol: data.symbol ?? "",

    allowDecimal: data.allowDecimal ?? false,

    active: data.active ?? true,

    system: data.system ?? false,

    sortOrder: data.sortOrder ?? 0,

    createdAt: data.createdAt?.toMillis() ?? 0,

    updatedAt: data.updatedAt?.toMillis() ?? 0,
  };
}
