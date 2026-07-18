import type { ReceiptData } from "./receiptTypes";
import {
  formatCurrency,
  formatDateTime,
  formatPaymentMethod,
} from "./receiptUtils";

interface ReceiptProps {
  receipt: ReceiptData;
}

export default function Receipt({ receipt }: ReceiptProps) {
  return (
    <div className="receipt-print font-mono text-[11px] leading-[1.2] text-black">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">{receipt.store.name}</h2>

        {receipt.store.address && <p>{receipt.store.address}</p>}

        {receipt.store.phone && <p>{receipt.store.phone}</p>}

        {receipt.store.email && <p>{receipt.store.email}</p>}

        {receipt.store.npwp && <p>NPWP : {receipt.store.npwp}</p>}
      </div>

      <div className="my-2 border-t border-dashed border-black" />

      {/* Info */}
      <div className="space-y-1 mb-4">
        <div className="flex justify-between">
          <span>Invoice</span>

          <span>{receipt.invoiceNo}</span>
        </div>

        <div className="flex justify-between">
          <span>Tanggal</span>

          <span>{formatDateTime(receipt.transactionDate)}</span>
        </div>

        <div className="flex justify-between">
          <span>Kasir</span>

          <span>{receipt.cashier.name}</span>
        </div>
      </div>

      <div className="my-2 border-t border-dashed border-black" />

      {/* Items */}
      <div className="mb-4">
        {receipt.items.map((item) => (
          <div key={item.id} className="mb-2">
            <div>{item.name}</div>

            <div className="flex justify-between">
              <span>
                {item.quantity} × {formatCurrency(item.unitPrice)}
              </span>

              <span>{formatCurrency(item.total)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="border-t pt-3">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>{receipt.totals.subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Diskon</span>

          <span>{receipt.totals.discount}</span>
        </div>

        <div className="flex justify-between">
          <span>Pajak</span>

          <span>{receipt.totals.tax}</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total</span>

          <span>{formatCurrency(receipt.totals.total)}</span>
        </div>
      </div>

      {/* Payment */}
      <div className="mt-4 space-y-1">
        <div className="flex justify-between">
          <span>Metode</span>
          <span>{formatPaymentMethod(receipt.payment.method)}</span>
        </div>

        <div className="flex justify-between">
          <span>Dibayar</span>
          <span>{formatCurrency(receipt.payment.paidAmount)}</span>
        </div>

        <div className="flex justify-between">
          <span>Kembalian</span>
          <span>{formatCurrency(receipt.payment.changeAmount)}</span>
        </div>
      </div>

      {/* Footer */}
      {receipt.footer && (
        <div className="mt-6 text-center">
          {receipt.footer.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}
