const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ping: () => ipcRenderer.invoke("ping"),

  system: {
    platform: () => ipcRenderer.invoke("system:platform"),
  },

  printer: {
    getPrinters: () => ipcRenderer.invoke("printer:getPrinters"),
  },
  updater: {
    check: () => ipcRenderer.invoke("updater:check"),

    download: () => ipcRenderer.invoke("updater:download"),

    install: () => ipcRenderer.invoke("updater:install"),

    onChecking: (callback) => {
      ipcRenderer.on("updater:checking", callback);
    },

    onUpdateAvailable: (callback) => {
      ipcRenderer.on("updater:update-available", (_, info) => {
        callback(info);
      });
    },

    onNoUpdate: (callback) => {
      ipcRenderer.on("updater:no-update", (_, info) => {
        callback(info);
      });
    },

    onProgress: (callback) => {
      ipcRenderer.on("updater:progress", (_, progress) => {
        callback(progress);
      });
    },

    onDownloaded: (callback) => {
      ipcRenderer.on("updater:update-downloaded", (_, info) => {
        callback(info);
      });
    },

    onError: (callback) => {
      ipcRenderer.on("updater:error", (_, message) => {
        callback(message);
      });
    },

    removeAllListeners: () => {
      ipcRenderer.removeAllListeners("updater:checking");
      ipcRenderer.removeAllListeners("updater:update-available");
      ipcRenderer.removeAllListeners("updater:no-update");
      ipcRenderer.removeAllListeners("updater:progress");
      ipcRenderer.removeAllListeners("updater:update-downloaded");
      ipcRenderer.removeAllListeners("updater:error");
    },
  },
});
