const remote = require('electron').remote;

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
