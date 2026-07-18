import { useEffect, useState } from "react";
import {
  DEFAULT_RECEIPT_SETTINGS,
  ReceiptSettings,
} from "../types/receipt-settings";
import { ReceiptSettingsService } from "../services/receipt-settings.service";

export default function ReceiptSettings() {
  const [settings, setSettings] = useState<ReceiptSettings>(
    DEFAULT_RECEIPT_SETTINGS
  );

  useEffect(() => {
    ReceiptSettingsService.load().then(setSettings);
  }, []);

  const update = <K extends keyof ReceiptSettings>(
    key: K,
    value: ReceiptSettings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const save = async () => {
    await ReceiptSettingsService.save(settings);
    alert("Receipt Settings berhasil disimpan.");
  };

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">Receipt Settings</h2>

      <div className="grid grid-cols-2 gap-4">

        <label className="flex items-center justify-between">
          <span>Show Logo</span>
          <input
            type="checkbox"
            checked={settings.showLogo}
            onChange={(e) => update("showLogo", e.target.checked)}
          />
        </label>

        <label className="flex items-center justify-between">
          <span>Show Address</span>
          <input
            type="checkbox"
            checked={settings.showAddress}
            onChange={(e) => update("showAddress", e.target.checked)}
          />
        </label>

        <label className="flex items-center justify-between">
          <span>Show Phone</span>
          <input
            type="checkbox"
            checked={settings.showPhone}
            onChange={(e) => update("showPhone", e.target.checked)}
          />
        </label>

        <label className="flex items-center justify-between">
          <span>Show Email</span>
          <input
            type="checkbox"
            checked={settings.showEmail}
            onChange={(e) => update("showEmail", e.target.checked)}
          />
        </label>

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Paper Width
        </label>

        <select
          value={settings.paperWidth}
          onChange={(e) =>
            update("paperWidth", e.target.value as "58mm" | "80mm")
          }
          className="border rounded-lg px-3 py-2"
        >
          <option value="58mm">58 mm</option>
          <option value="80mm">80 mm</option>
        </select>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">Font Size</label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={settings.fontSize}
            onChange={(e) =>
              update("fontSize", Number(e.target.value))
            }
          />
        </div>

        <div>
          <label className="block mb-2">Line Height</label>
          <input
            type="number"
            step="0.1"
            className="w-full border rounded-lg px-3 py-2"
            value={settings.lineHeight}
            onChange={(e) =>
              update("lineHeight", Number(e.target.value))
            }
          />
        </div>

      </div>

      <div>

        <label className="block mb-2">
          Footer Line 1
        </label>

        <input
          className="w-full border rounded-lg px-3 py-2"
          value={settings.footerLine1}
          onChange={(e) =>
            update("footerLine1", e.target.value)
          }
        />

      </div>

      <div>

        <label className="block mb-2">
          Footer Line 2
        </label>

        <input
          className="w-full border rounded-lg px-3 py-2"
          value={settings.footerLine2}
          onChange={(e) =>
            update("footerLine2", e.target.value)
          }
        />

      </div>

      <div>

        <label className="block mb-2">
          Footer Line 3
        </label>

        <input
          className="w-full border rounded-lg px-3 py-2"
          value={settings.footerLine3}
          onChange={(e) =>
            update("footerLine3", e.target.value)
          }
        />

      </div>

      <button
        onClick={save}
        className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
      >
        Simpan
      </button>

    </div>
  );
}