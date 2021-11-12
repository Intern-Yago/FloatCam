navigator.mediaDevices.getUserMedia({video:true}).then(function(mediaStream){
    var video = document.querySelector("#video")
    video.srcObject = mediaStream
    video.play()
}).catch(function (err){
    console.log("Não tem permissão");
})