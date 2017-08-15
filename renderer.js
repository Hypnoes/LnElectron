const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

ipcRenderer.on('main-process-messages', (event, message) => {
    console.log('message form Main Process: ', message);
})

console.log('synchornous-message: ', ipcRenderer.sendSync('synchronous-message', 'hello'));
