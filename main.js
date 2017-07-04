const electron = require('electron');
const {app, BrowserWindow} = electron;
const loadDevtool = require('electron-load-devtool');

require('electron-reload')(__dirname);

let mainWindow;
app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'titleBarStyle': 'hidden',
    'acceptFirstMouse': true
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  loadDevtool(loadDevtool.REDUX_DEVTOOLS);
  mainWindow.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null
  });
  mainWindow.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
      app.quit();
    }
  })
});
