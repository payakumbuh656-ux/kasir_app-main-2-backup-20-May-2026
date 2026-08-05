import { Pencil, KeyRound, Trash2, ChevronRight } from "lucide-react";

interface AccountSettingsPanelProps {
  accountName: string;
  accountEmail: string;
  storeName?: string;
  role?: string;

  accountType: "owner" | "staff";

  onRename?: () => void;

  onChangePin?: () => void;

  onDelete?: () => void;
}

export default function AccountSettingsPanel({
  accountName,
  accountEmail,
  storeName,
  role,
  accountType,
  onRename,
  onChangePin,
  onDelete,
}: AccountSettingsPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h4 className="text-sm font-semibold text-slate-800">Informasi Akun</h4>

      <div className="mt-3 border-t border-slate-200" />
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-16 text-sm text-slate-500">Nama</span>

          <span className="text-slate-400">:</span>

          <span className="font-semibold text-slate-800">{accountName}</span>
        </div>
        {accountType === "owner" ? (
          <>
            <div className="flex items-center gap-2">
              <span className="w-16 text-sm text-slate-500">Email</span>

              <span className="text-slate-400">:</span>

              <span className="font-semibold text-slate-800">{accountEmail}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-16 text-sm text-slate-500">Toko</span>

              <span className="text-slate-400">:</span>

              <span className="font-semibold text-slate-800">{storeName || "-"}</span>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <span className="w-16 text-sm text-slate-500">Role</span>

            <span className="text-slate-400">:</span>

            <span className="font-semibold uppercase text-slate-800">{role}</span>
          </div>
        )}
      </div>
      <div className="my-5 border-t border-slate-200" />

      <h4 className="text-sm font-semibold text-slate-800">Action</h4>

      <div className="mt-4 space-y-3">
        <>
          <button
            type="button"
            onClick={onRename}
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <div className="flex items-center gap-3">
              <Pencil size={18} className="text-indigo-600" />

              <div className="text-left">
                <p className="font-semibold text-slate-800">Ganti Nama</p>

                <p className="text-sm text-slate-500">Perbarui nama akun.</p>
              </div>
            </div>

            <ChevronRight size={18} className="text-slate-400" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChangePin?.();
            }}
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <div className="flex items-center gap-3">
              <KeyRound size={18} className="text-amber-600" />

              <div className="text-left">
                <p className="font-semibold text-slate-800">Ganti PIN</p>

                <p className="text-sm text-slate-500">Perbarui PIN akun.</p>
              </div>
            </div>

            <ChevronRight size={18} className="text-slate-400" />
          </button>
          {accountType === "staff" && (
            <button
              type="button"
              onClick={onDelete}
              className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3 transition hover:bg-red-100"
            >
              <div className="flex items-center gap-3">
                <Trash2 size={18} className="text-red-600" />

                <div className="text-left">
                  <p className="font-semibold text-red-700">Hapus Staff</p>

                  <p className="text-sm text-red-500">Hapus akun staff dari toko.</p>
                </div>
              </div>

              <ChevronRight size={18} className="text-red-400" />
            </button>
          )}
        </>
      </div>
    </div>
  );
}
