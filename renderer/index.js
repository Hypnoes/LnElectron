const { remote } = require('electron')
const { Menu, MenuItem } = remote

let btnMin = document.getElementById('min')
let btnTog = document.getElementById('tog')
let btnExt = document.getElementById('exit')
let silder = document.getElementById('opacity')

let win = remote.getCurrentWindow()

btnMin.onclick = () => {
  win.minimize()
}

btnTog.onclick = () => {
  let size = [800, 600]
  if (!win.isMaximized()) {
    size = max(win)
  } else {
    win.unmaximize()
    win.setSize(size[0], size[1])
    win.center()
  }
}

btnExt.onclick = () => {
  win.close()
}

silder.onchange = () => {
  win.setOpacity(Number(silder.value))
}

const menu = new Menu()
menu.append(new MenuItem({
  label: 'DevConsole',
  click () {
    win.webContents.openDevTools()
  }
}))

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup(win)
}, false)

function max (win) {
  let size = win.getSize()
  win.maximize()
  return size
}
