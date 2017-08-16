const { remote } = require('electron');
const { Menu, MenuItem } = remote;

let btnMin = document.getElementById("min");
let btnTog = document.getElementById("tog");
let btnExt = document.getElementById("exit");

let win = remote.getCurrentWindow();

btnMin.onclick = () => {
    win.minimize(); 
}

btnTog.onclick = () => {
    if (!win.isMaximized()) {
        win.maximize();
    }
    else {
        win.unmaximize();
        win.setSize(800, 600);
        win.center();
    }
}

btnExt.onclick = () => {
    win.close(); 
}

const menu = new Menu()
menu.append(new MenuItem({
    label: 'DevConsole', click() {
        win.webContents.openDevTools()
    }
}))

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.popup(win)
}, false)
