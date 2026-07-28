import type { Product } from "../types/product";

type FieldChange<T = unknown> = {
  before: T;
  after: T;
};

const TRACKED_FIELDS: (keyof Product)[] = [
  "barcode",
  "name",
  "supplier",
  "price",
  "modal",
  "category",
  "imageUrl",
];

export function buildProductChanges(oldProduct: Product, newProduct: Product) {
  const changes: Record<string, FieldChange> = {};

  for (const field of TRACKED_FIELDS) {
    const before = oldProduct[field];
    const after = newProduct[field];
    if (before !== after) {
      changes[field] = {
        before,
        after,
      };
    }
  }

  return changes;
}
