import { DocumentSnapshot, Timestamp, serverTimestamp } from "firebase/firestore";
import { Category } from "./model";

export type FirestoreCategoryDocument = {
  name?: string;
  active?: boolean;
  system?: boolean;
  sortOrder?: number;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

export type CreateCategoryInput = {
  name: string;
  active: boolean;
  system: boolean;
  sortOrder: number;
};

export type UpdateCategoryInput = {
  name: string;
  active: boolean;
  sortOrder: number;
};

export function toFirestoreForCreate(input: CreateCategoryInput) {
  return {
    name: input.name.trim(),

    active: input.active,

    system: input.system,

    sortOrder: input.sortOrder,

    createdAt: serverTimestamp(),

    updatedAt: serverTimestamp(),
  };
}

export function toFirestoreForUpdate(input: UpdateCategoryInput) {
  return {
    name: input.name.trim(),

    active: input.active,

    sortOrder: input.sortOrder,

    updatedAt: serverTimestamp(),
  };
}

export function mapCategoryDocument(snapshot: DocumentSnapshot<FirestoreCategoryDocument>): Category | null {
  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  return {
    id: snapshot.id,

    name: data.name ?? "",

    active: data.active ?? true,

    system: data.system ?? false,

    sortOrder: data.sortOrder ?? 0,

    createdAt: data.createdAt?.toMillis() ?? 0,

    updatedAt: data.updatedAt?.toMillis() ?? 0,
  };
}
