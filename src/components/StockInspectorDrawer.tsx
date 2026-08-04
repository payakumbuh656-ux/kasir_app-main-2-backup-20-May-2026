import StockInspector from "./StockInspector";

type Props = {
  open: boolean;

  selectedProduct: any;

  onClose: () => void;

  onEdit: () => void;

  onRestock: () => void;

  onReduceStock: () => void;

  onDelete: () => void;

  onAdjustment: () => void;

  movements: any[];
};

export default function StockInspectorDrawer({
  open,

  selectedProduct,

  onClose,

  onEdit,

  onRestock,

  onReduceStock,

  onDelete,

  onAdjustment,

  movements,
}: Props) {
  if (!open || !selectedProduct) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose} />

      <div
        key={selectedProduct.id}
        className="fixed inset-y-0 right-0 z-50 w-[390px] h-screen overflow-y-auto overscroll-contain animate-in slide-in-from-right-4 fade-in duration-200"
      >
        <StockInspector
          selectedProduct={selectedProduct}
          onClose={onClose}
          onEdit={onEdit}
          onRestock={onRestock}
          onReduceStock={onReduceStock}
          onDelete={onDelete}
          onAdjustment={onAdjustment}
          movements={movements}
        />
      </div>
    </>
  );
}
