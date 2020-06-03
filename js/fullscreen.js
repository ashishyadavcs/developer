function getFullscreenElement(){
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozfullscreenElement
    || document.msfullscreenElement
}

function toggleFullscreen(){
    if(getFullScreen){
        document.exitFullscreen();
    }else{
        document.getElementById('myBox').requestFullscreen().catch(console.log);
    }
}

document.addEventListener('dblclick',()=>{
toggleFullscreen();
})