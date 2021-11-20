const {app, BrowserWindow, Tray} = require("electron")

let win
let width = 300
let height = 300

app.whenReady().then(function(){
    console.log(__dirname)
    
    win = new BrowserWindow({
        icon: __dirname+"/logo.png",
        width: width,
        height:height,
        frame:false,
        alwaysOnTop: true,
        transparent: true,
    })
    win.loadFile("index.html")
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})