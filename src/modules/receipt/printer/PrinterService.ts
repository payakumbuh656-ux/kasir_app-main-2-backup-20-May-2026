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

  private static isElectron(): boolean {
    return navigator.userAgent.toLowerCase().includes("electron");
  }
}