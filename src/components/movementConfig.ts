import {
  Activity,
  RotateCcw,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export const movementConfig = {
  RESTOCK: {
    title: "Restock Barang",
    icon: TrendingUp,
    color: "emerald",
    sign: "+",
  },

  REDUCE: {
    title: "Pengurangan Stok",
    icon: TrendingDown,
    color: "red",
    sign: "-",
  },

  ADJUSTMENT: {
    title: "Penyesuaian Stok",
    icon: Activity,
    color: "amber",
    sign: "±",
  },

  SALE: {
    title: "Penjualan POS",
    icon: ShoppingCart,
    color: "rose",
    sign: "-",
  },

  RETURN: {
    title: "Retur Barang",
    icon: RotateCcw,
    color: "blue",
    sign: "+",
  },
} as const;

export type MovementType = keyof typeof movementConfig;