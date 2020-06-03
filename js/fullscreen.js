function getFullScreen(){
    return document.fullscreenElement
    || document.webkitFullScreenElement
    || document.mozfullscreenElement
    || document.msfullscreenElement
}

function toggleFullScreen(){
    if(getFullScreen){
        document.exitFullscreen();
    }else{
        document.documentElement.requestFullscreen().catch(console.log);
    }
}

document.addEventListener('dblclick',()=>{
toggleFullScreen();
})