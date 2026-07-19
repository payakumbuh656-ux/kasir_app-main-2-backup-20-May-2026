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
      };

      updater: {
        check: () => Promise<any>;
        download: () => Promise<any>;
        install: () => Promise<boolean>;

        onChecking: (callback: () => void) => void;

        onUpdateAvailable: (callback: (info: any) => void) => void;

        onNoUpdate: (callback: (info: any) => void) => void;

        onProgress: (callback: (progress: any) => void) => void;

        onDownloaded: (callback: (info: any) => void) => void;

        onError: (callback: (message: string) => void) => void;

        removeAllListeners: () => void;
      };
    };
  }
}