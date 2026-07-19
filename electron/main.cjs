const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");

let mainWindow;
let authCallbackUrl = null;
const PROTOCOL = "indotech";

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (!app.isPackaged) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist-react/index.html"));
  }
}

ipcMain.handle("ping", async () => {
  return "pong";
});

ipcMain.handle("system:platform", async () => {
  return process.platform;
});

ipcMain.handle("auth:login", async () => {
  await shell.openExternal("https://indotech-oauth.vercel.app/api/auth/google");

  return true;
});

ipcMain.handle("printer:getPrinters", async () => {
  console.log("Main Window URL:", mainWindow.webContents.getURL());

  const printers = await mainWindow.webContents.getPrintersAsync();

  console.log("Jumlah printer:", printers.length);
  console.log(printers);

  return printers;
});

ipcMain.handle("updater:check", async () => {
  console.log("IPC updater:check dipanggil");

  const result = await autoUpdater.checkForUpdates();

  console.log("HASIL checkForUpdates:", result);

  return result;
});

ipcMain.handle("updater:download", async () => {
  return autoUpdater.downloadUpdate();
});

ipcMain.handle("updater:install", async () => {
  autoUpdater.quitAndInstall();
  return true;
});

app.setAsDefaultProtocolClient(PROTOCOL);

app.on("open-url", (event, url) => {
  event.preventDefault();

  console.log("OAuth Callback:", url);

  authCallbackUrl = url;

  if (mainWindow) {
    mainWindow.webContents.send("oauth:url", url);
  }
});

app.whenReady().then(() => {
  createWindow();
  mainWindow.webContents.on("did-finish-load", () => {
    if (authCallbackUrl) {
      mainWindow.webContents.send("oauth:url", authCallbackUrl);
    }
  });

  autoUpdater.checkForUpdatesAndNotify();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

autoUpdater.on("checking-for-update", () => {
  console.log("Checking for update...");

  mainWindow?.webContents.send("updater:checking");
});

autoUpdater.on("update-available", (info) => {
  console.log("Update available:", info.version);

  mainWindow?.webContents.send("updater:update-available", info);
});

autoUpdater.on("update-not-available", (info) => {
  console.log("Already latest version:", info.version);

  mainWindow?.webContents.send("updater:no-update", info);
});

autoUpdater.on("download-progress", (progress) => {
  console.log(`Downloading ${progress.percent.toFixed(1)}%`);

  mainWindow?.webContents.send("updater:progress", progress);
});

autoUpdater.on("update-downloaded", (info) => {
  console.log("Update downloaded:", info.version);

  if (mainWindow) {
    mainWindow.webContents.send("updater:update-downloaded", info);
  }
});

autoUpdater.on("error", (err) => {
  console.error("AutoUpdater Error:", err);

  mainWindow?.webContents.send("updater:error", err.message);
});
