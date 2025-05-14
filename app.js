const video = document.getElementById('pv1');

const  videolist = [video];

videolist.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    })
    video.addEventListener('mouseout', function(){
        video.pause()
    })
})