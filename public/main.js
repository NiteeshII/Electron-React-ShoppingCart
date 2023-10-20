const { app, BrowserWindow } = require("electron");
let win;

function createWindow() {
  win = new BrowserWindow({
    height: 800,
    width: 800,
    frame: false,
    show: false,
  });

  win.loadURL("http://localhost:3000");
}

win.webContents.openDevTools();

win.once("ready-to-show", () => {
  win.show();
  win.frame();
});
app.on("closed", () => {
  win = null;
});
app.on("ready", createWindow);
