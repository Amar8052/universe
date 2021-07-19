const button = document.querySelector('.btn');
const video = document.querySelector('.backgroundvideo');

function playPause() {
    if(video.classList.contains('pause')){
        video.classList.remove('pause');
        video.play()
    }else{
        video.classList.add('pause');
        video.pause();
    }
}

button.addEventListener('click', playPause);