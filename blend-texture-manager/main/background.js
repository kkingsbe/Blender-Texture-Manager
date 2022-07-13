import { app, ipcMain, BrowserWindow } from 'electron';
import {download} from "electron-dl"
import DecompressZip from "decompress-zip"
import editJsonFile from "edit-json-file"
import serve from 'electron-serve';
import { createWindow } from './helpers';
import fs from "fs"

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.handle("downloadFile", async (event, ...args) => {
  var url = args[0]
  console.log(args[0])
  return new Promise(async (resolve, reject) => {
    let dl = await download(BrowserWindow.getFocusedWindow(), url, {directory: app.getPath("home") + "/Documents/BlenderTextures/tmp"})
    console.log(dl)
    var unzipper = new DecompressZip(dl.getSavePath());
    unzipper.on('error', function (err) {
      console.log('Caught an error', err);
      resolve(false)
    });
    
    // Notify when everything is extracted
    unzipper.on('extract', function (log) {
        console.log('Finished extracting', log);
        fs.rmdir(app.getPath("home") + "/Documents/BlenderTextures/tmp", { recursive: true }, (err) => {
          if (err) {
            console.log(err)
            resolve(false);
          }
        });
        let file = editJsonFile(app.getPath("home") + "/Documents/BlenderTextures/config.json");
        file.append("downloads", dl.getFilename().split("-")[0])
        file.save()
        resolve(true)
    });

    unzipper.extract({path: app.getPath("home") + "/Documents/BlenderTextures/" + (dl.getFilename().split("-")[0]), restrict: false})
  })
})