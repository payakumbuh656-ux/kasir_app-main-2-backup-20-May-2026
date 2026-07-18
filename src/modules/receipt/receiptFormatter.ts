import type {
  ReceiptData,
  StoreInfo,
  CashierInfo,
} from "./receiptTypes";

interface TransactionData {
  id: string;
  date: number;
  total: number;
  paidAmount: number;
  changeAmount: number;
  paymentMethod: "cash" | "qris" | "transfer";
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export function formatReceipt(
  transaction: TransactionData,
  store: StoreInfo,
  cashier: CashierInfo
): ReceiptData {
  return {
    invoiceNo: transaction.id,

    transactionDate: new Date(transaction.date),

    store,

    cashier,

    items: transaction.items.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.price,
      total: item.price * item.quantity,
    })),

    totals: {
      subtotal: transaction.total,
      discount: 0,
      tax: 0,
      total: transaction.total,
    },

    payment: {
      method: transaction.paymentMethod,
      paidAmount: transaction.paidAmount,
      changeAmount: transaction.changeAmount,
    },

    footer: [
      "Terima kasih atas kunjungan Anda",
      "Powered by IndoTech POS",
    ],
  };
}