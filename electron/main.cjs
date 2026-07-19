const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

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

ipcMain.handle("printer:getPrinters", async () => {
  console.log("IPC printer:getPrinters CALLED");
  const printers = await mainWindow.webContents.getPrintersAsync();

  console.log("MAIN PROCESS PRINTERS:");
  console.log(printers);

  return printers;
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
