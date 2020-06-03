const { app, BrowserWindow } = require('electron')
function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // win.loadFile('app_tempController/app.html')
  //win.loadFile('app_button/app.html')
  win.loadFile('app_led/app.html')
  win.maximize()
  win.webContents.openDevTools()
}
app.on('ready', createWindow)