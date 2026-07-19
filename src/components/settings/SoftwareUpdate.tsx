import { useEffect, useState } from "react";

export default function SoftwareUpdate() {
  const [status, setStatus] = useState("✔ Aplikasi siap memeriksa pembaruan.");

  useEffect(() => {
    window.electron.updater.onChecking(() => {
      setStatus("🔍 Memeriksa pembaruan...");
    });

    return () => {
      window.electron.updater.removeAllListeners();
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Software Update
            </h2>

            <p className="mt-2 text-slate-500">
              Pastikan IndoTech POS selalu menggunakan versi terbaru.
            </p>
          </div>

          <div className="rounded-xl bg-indigo-100 px-4 py-2">
            <span className="font-semibold text-indigo-700">v1.0.0</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800">Status</h3>

        <p className="mt-2 font-medium text-green-600">{status}</p>

        <button
          onClick={async () => {
            console.log("BUTTON CLICKED");

            try {
              const result = await window.electron.updater.check();
              console.log("RESULT:", result);
            } catch (err) {
              console.error("CHECK ERROR:", err);
            }
          }}
          className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Check for Updates
        </button>
      </div>
    </div>
  );
}
