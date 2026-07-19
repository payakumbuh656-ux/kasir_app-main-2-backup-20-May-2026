import { useEffect, useState } from "react";
import { PrinterService } from "../../modules/receipt/printer/PrinterService";

interface PrinterSettingsProps {
  darkMode: boolean;
}

export default function PrinterSettings({ darkMode }: PrinterSettingsProps) {
  const [printers, setPrinters] = useState<Electron.PrinterInfo[]>([]);

  useEffect(() => {
    async function loadPrinters() {
      const list = await PrinterService.getPrinters();
      console.log("Printers:", list);
      setPrinters(list);
    }

    loadPrinters();
  }, []);

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 xl:p-8 max-w-3xl ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <label className="block text-sm font-bold text-slate-600 mb-2">
        Printer Thermal
      </label>

      <select className="w-full px-4 py-3 border border-slate-200 rounded-xl">
        {printers.map((printer) => (
          <option key={printer.name} value={printer.name}>
            {printer.name}
          </option>
        ))}
      </select>
    </div>
  );
}
