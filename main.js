'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');

var mainWindow = null;

var menu = Menu.buildFromTemplate([
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
  }
]);
Menu.setApplicationMenu(menu);

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600, center: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
