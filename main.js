'use strict';

const { app, BrowserWindow,ipcMain } = require("electron");
const path = require('path');

//여긴 화면을 실행하는것임
//ipc모듈은 EventEmitter 클래스의 인스턴 이며
//* 메인프로세서에서 렌더러 프로세스로 비동기통신을함
ipcMain.on('handle-click',(event,arg)=>{
  console.log('ipcMain!!');
});
function createWindow() {
  // 브라우저 창을 생성합니다.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, //메인프로세스의 nodejs의 API를 엑세스
      //할수있다는 설정
    },
  });
  // and load the index.html of the app.
  win.loadFile("index.html");
  // 개발자 도구를 엽니다.
  win.webContents.openDevTools();
}
// Electron `app` is ready
app.on('ready', createWindow);
// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
