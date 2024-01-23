function onYouTubeIframeAPIReady() {
    var videos = obterListaVideos();

    if (videos.length > 0) {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: getVideoId(videos[currentIndex]),
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}
