"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 1220, height: 630 });
    //win.setIcon(path.join(__dirname, '/../../dist/exportadora-banano/assets/imagenes/logo.png'));
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/exportadora-banano/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    //win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
// Para ver el estado de la app
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map