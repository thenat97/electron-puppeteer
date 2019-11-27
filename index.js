"use strict";

const path = require('path');
const url = require('url');
const { ipcMain } = require('electron');
const electron = require('electron');

const app = electron['app'];

const BrowserWindow = electron['BrowserWindow'];


const { createScreenshot } = require('./puppeterTest');

let win;
function createWindow() {
   win = new BrowserWindow({
     webPreferences: {
           nodeIntegration: true
       }
   })
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))

   win.webContents.openDevTools()
}

app.on('ready', createWindow)


ipcMain.on('screenshot', function(e,message) {
  console.log(message);
  createScreenshot()
    .then(() => {

      console.log('done');
    })
    .catch(() => {

      console.log('error');
      console.log(e);
    })
});
