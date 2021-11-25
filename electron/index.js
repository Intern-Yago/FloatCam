const {app, BrowserWindow, Tray, ipcMain} = require("electron")

let win, smallPosition, bigPosition
let customSize = 300
const bigFactor = 2.4 // how much enlarge when double click video

const updatePositions = {
  'big': () => {
    // memo small position
    smallPosition = win.getBounds()

    if(!bigPosition) {
      // first time enter, configure big video
      const { x, y } = smallPosition
      const proportion = customSize * bigFactor
      bigPosition = {x: x - proportion, y: y - proportion, width: proportion, height: proportion}
    }

    // move and make it bigger
    win.setBounds(bigPosition, true)
  },
  'small': () => {
    // memo big position
    bigPosition = win.getBounds()

    // move and make it smaller
    win.setBounds(smallPosition, true)
  }
}

ipcMain.on('double-click', (event, arg) => {
  const size = arg ? 'small' : 'big'
  updatePositions[size]()
})

app.whenReady().then(function(){
    console.log(__dirname)
    
    win = new BrowserWindow({
        icon: __dirname+"/logo.png",
        width: customSize,
        height:customSize,
        frame:false,
        alwaysOnTop: true,
        transparent: true,
    })
    win.loadFile("index.html")
    win.setPosition( 1920 - customSize, 1080 - customSize, true)
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})