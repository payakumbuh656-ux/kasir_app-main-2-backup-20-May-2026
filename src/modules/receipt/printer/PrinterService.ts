import { WebPrinter } from "./WebPrinter";
import { ElectronPrinter } from "./ElectronPrinter";

export class PrinterService {
  static print(): void {
    if (this.isElectron()) {
      ElectronPrinter.print();
      return;
    }

    WebPrinter.print();
  }

  static async getPrinters() {
    console.log("isElectron =", this.isElectron());
    console.log("window.electron =", window.electron);

    if (!this.isElectron()) {
      console.log("Bukan Electron");
      return [];
    }

    console.log("Memanggil IPC printer:getPrinters...");
    return window.electron.printer.getPrinters();
  }

  private static isElectron(): boolean {
    return typeof window !== "undefined" && !!window.electron;
  }
}
