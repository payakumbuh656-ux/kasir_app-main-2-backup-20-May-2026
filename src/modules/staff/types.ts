export interface StaffPermissions {
  checkout: boolean;
  inventory: boolean;
  adjustment: boolean;
  dashboard: boolean;
  itemDiscount: boolean;
  invoiceDiscount: boolean;
  return: boolean;
  void: boolean;
  deleteProduct: boolean;
  editProduct: boolean;
  editPrice: boolean;
  salesHistory: boolean;
}

export interface Staff {
  id: string;
  name: string;
  pinHash: string;

  role: "OWNER" | "MANAGER" | "SUPERVISOR" | "KASIR";

  active: boolean;

  permissions: StaffPermissions;

  createdAt?: Date;
  updatedAt?: Date;
}

export const DEFAULT_STAFF_PERMISSIONS: StaffPermissions = {
  checkout: true,
  inventory: false,
  adjustment: false,
  dashboard:false,
  itemDiscount: false,
  invoiceDiscount: false,
  return: false,
  void: false,
  deleteProduct: false,
  editProduct: false,
  editPrice: false,
  salesHistory:false,
};