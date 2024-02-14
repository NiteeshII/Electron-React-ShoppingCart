const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
  win.webContents.openDevTools();
  win.on("closed", function () {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  createWindow();
});

app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
