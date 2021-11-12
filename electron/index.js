const {app, BrowserWindow, Tray} = require("electron")

let win

app.whenReady().then(function(){
    console.log(__dirname)
    
    win = new BrowserWindow({
        icon: __dirname+"/assets/camera-fotografica.png",
        width: 456,
        height:264,
        frame:false,
    })
    win.loadFile("views/index.html")
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})