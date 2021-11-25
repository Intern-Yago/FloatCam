import { ipcRenderer } from 'electron'; // EventEmmiter to comunicate with main window

navigator.mediaDevices.getUserMedia({video:true}).then(function(mediaStream){
    var video = document.querySelector("#video")
    let isBig = false; // the window starts small

    video.srcObject = mediaStream
    window.ondblclick = () => {
    ipcRenderer.send('double-click', isBig) // send signal to main window
    isBig = !isBig // toggle it
}
}).catch(function (err){
    console.log("Não tem permissão");
})