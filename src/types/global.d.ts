export {};

declare global {
  interface Window {
    electron: {
      ping: () => Promise<string>;

      system: {
        platform: () => Promise<string>;
      };

      printer: {
        getPrinters: () => Promise<Electron.PrinterInfo[]>;
      }
    };
  }
}