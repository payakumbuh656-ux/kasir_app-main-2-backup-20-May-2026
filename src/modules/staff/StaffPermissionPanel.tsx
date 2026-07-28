import type { Staff, StaffPermissions } from "../../../modules/staff/types";

interface Props {
  staff: Staff;
  onUpdate: (
    staffId: string,
    permissions: StaffPermissions
  ) => Promise<void>;
}

export default function StaffPermissionPanel({
  staff,
  onUpdate,
}: Props) {

  async function togglePermission(
    key: keyof StaffPermissions
  ) {

    await onUpdate(
      staff.id,
      {
        ...staff.permissions,
        [key]: !staff.permissions[key],
      }
    );

  }


  const permissions = [
    {
      key: "dashboard",
      label: "Dashboard",
      description: "Akses dashboard penjualan",
    },
    {
      key: "checkout",
      label: "Checkout",
      description: "Melakukan transaksi penjualan",
    },
    {
      key: "inventory",
      label: "Inventory",
      description: "Melihat dan kelola stok",
    },
    {
      key: "editProduct",
      label: "Edit Product",
      description: "Tambah dan ubah produk",
    },
    {
      key: "editPrice",
      label: "Edit Price",
      description: "Ubah harga produk",
    },
    {
      key: "itemDiscount",
      label: "Item Discount",
      description: "Diskon per item",
    },
    {
      key: "invoiceDiscount",
      label: "Invoice Discount",
      description: "Diskon total transaksi",
    },
    {
      key: "return",
      label: "Return",
      description: "Proses retur transaksi",
    },
    {
      key: "void",
      label: "Void",
      description: "Batalkan transaksi",
    },
    {
      key: "deleteProduct",
      label: "Delete Product",
      description: "Hapus produk",
    },
    {
      key: "adjustment",
      label: "Adjustment",
      description: "Penyesuaian stok",
    },
  ] as {
    key:keyof StaffPermissions;
    label:string;
    description:string;
  }[];


  return (
    <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">

      <h3 className="text-lg font-bold text-slate-800">
        Hak Akses
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Atur izin yang dapat diakses oleh staff ini.
      </p>


      <div className="mt-5 grid gap-4 lg:grid-cols-3">

        {permissions.map((item)=>(
          <button
            key={item.key}
            onClick={() => togglePermission(item.key)}
            className="
              flex items-center justify-between
              rounded-2xl border border-slate-200
              bg-white p-4 text-left
              transition-all hover:border-indigo-300
            "
          >

            <div>
              <p className="font-semibold text-slate-800">
                {item.label}
              </p>

              <p className="text-xs text-slate-500">
                {item.description}
              </p>
            </div>


            <div
              className={`
              h-5 w-5 rounded-md border
              ${
                staff.permissions[item.key]
                ?
                "bg-indigo-600 border-indigo-600"
                :
                "bg-white border-slate-300"
              }
              `}
            />

          </button>
        ))}

      </div>

    </div>
  );
}