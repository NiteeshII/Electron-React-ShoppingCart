const { contextBridge } = require("electron");

const { os } = require("OS");

contextBridge.exposeInMainWorld("electron", {
  homedir: () => os.homedir(),
  osVersion: () => os.version(),
});
