import type { Product } from "./product";

export interface CartItem extends Product {
  quantity: number;
  discountPercent: number;
  discountEnabled: boolean;
}
