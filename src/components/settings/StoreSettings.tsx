import type { Dispatch, SetStateAction } from "react";

interface StoreSettingsProps {
  setupStoreName: string;
  setSetupStoreName: Dispatch<SetStateAction<string>>;

  user: any;

  role: string;

  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;

  handleSaveStore: () => void;
}

export default function StoreSettings({
  setupStoreName,
  setSetupStoreName,
  user,
  role,
  darkMode,
  setDarkMode,
  handleSaveStore,
}: StoreSettingsProps) {
  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 xl:p-8 max-w-3xl ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Nama Toko
        </label>

        <input
          type="text"
          value={setupStoreName}
          onChange={(e) => setSetupStoreName(e.target.value)}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Logo Toko
        </label>

        <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 bg-slate-50 text-center">
          <p className="text-sm font-medium text-slate-500">Upload Logo PNG</p>

          <p className="text-xs text-slate-400 mt-1">Maksimal 1MB • PNG Only</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Email Akun
        </label>

        <input
          type="text"
          value={user?.email || ""}
          disabled
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Role
        </label>

        <input
          type="text"
          value={role}
          disabled
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl"
        />
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
          <div>
            <h3 className="font-bold text-slate-900">Dark Mode</h3>

            <p className="text-sm text-slate-500">
              Tampilan gelap yang nyaman di mata.
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
              darkMode ? "bg-indigo-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-all duration-300 ${
                darkMode ? "right-1" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      <button
        onClick={handleSaveStore}
        className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all"
      >
        Simpan Perubahan
      </button>
    </div>
  );
}
