import StockInspector from "./StockInspector";

type Props = {
  open: boolean;

  selectedProduct: any;

  onClose: () => void;

  onEdit: () => void;

  onRestock: () => void;

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

  onDelete,

  onAdjustment,

  movements,
}: Props) {
  if (!open || !selectedProduct) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 z-50 w-[390px]">
        <StockInspector
          selectedProduct={selectedProduct}
          onClose={onClose}
          onEdit={onEdit}
          onRestock={onRestock}
          onDelete={onDelete}
          onAdjustment={onAdjustment}
          movements={movements}
        />
      </div>
    </>
  );
}