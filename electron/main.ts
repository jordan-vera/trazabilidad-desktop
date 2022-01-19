import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow
function createWindow() {
    win = new BrowserWindow({ width: 1220, height: 630 });

    //win.setIcon(path.join(__dirname, '/../../dist/exportadora-banano/assets/imagenes/logo.png'));

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/exportadora-banano/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Para ver el estado de la app
app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})