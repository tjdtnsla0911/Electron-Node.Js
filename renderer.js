console.log('来renderer.js了.');

const{ipcRenderer} =require('electron');

window.handleChlick = ()=>{
  console.log('这儿是renderer.js ^^');
  ipcRenderer.send('handle-click');
}
