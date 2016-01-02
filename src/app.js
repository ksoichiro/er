'use strict';

import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';
import Menu from 'menu';

let mainWindow = null;
if (process.env.NODE_ENV === 'develop') {
  crashReporter.start();
}

let menu = Menu.buildFromTemplate([
  {
    label: 'er',
    submenu: [
      {
        label: 'About',
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() { app.quit(); }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
        }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: () => {
          BrowserWindow.getFocusedWindow().toggleDevTools();
        }
      }
    ]
  }
]);

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  Menu.setApplicationMenu(menu);
  mainWindow = new BrowserWindow({width: 800, height: 600, center: true});
  mainWindow.loadURL('file://' + __dirname + '/renderer/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
