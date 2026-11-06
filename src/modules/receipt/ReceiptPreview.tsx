import Receipt from "./Receipt";
import type { ReceiptData } from "./receiptTypes";

const dummyReceipt: ReceiptData = {
  invoiceNo: "INV-000001",

  transactionDate: new Date(),

  store: {
    name: "INDO ALBANI TEKNOLOGI",
    address: "Payakumbuh, Sumatera Barat",
    phone: "0812-3456-7890",
    email: "admin@indoalbani.com",
    npwp: "00.000.000.0-000.000",
  },

  cashier: {
    id: "USR001",
    name: "Albani",
  },

  items: [
    {
      id: "1",
      name: "Mouse Logitech G102 Lightsync",
      quantity: 2,
      unitPrice: 175000,
      total: 350000,
    },
    {
      id: "2",
      name: "Keyboard Mechanical Fantech Maxfit",
      quantity: 1,
      unitPrice: 525000,
      total: 525000,
    },
    {
      id: "3",
      name: "SSD Samsung 990 EVO 1TB NVMe Gen4",
      quantity: 1,
      unitPrice: 1850000,
      total: 1850000,
    },
  ],

  totals: {
    subtotal: 2725000,
    discount: 25000,
    tax: 0,
    total: 2700000,
  },

  payment: {
    method: "cash",
    paidAmount: 3000000,
    changeAmount: 300000,
  },

  footer: ["Terima kasih telah berbelanja.", "Datang kembali 😊"],
};

export default function ReceiptPreview() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start p-10">
      <div className="w-[380px] bg-white shadow-xl rounded-lg overflow-hidden">
        <Receipt receipt={dummyReceipt} />
      </div>
    </div>
  );
}
