//REDE SOCIAL

const url1 = "https://www.facebook.com/daniellucasferreiradearaujo/";
const btn1 = document.querySelector('#btnfc')

function openInNewTab(url1) {
  const win = window.open(url1, '_blank')
  win.focus
}

btn1.addEventListener('click', () => {
  openInNewTab(url1)
})

const url2 = "https://www.instagram.com/daniel.ferreira75/";
const btn2 = document.querySelector('#btnist')

function openInNewTab(url2) {
  const win = window.open(url2, '_blank')
  win.focus
}

btn2.addEventListener('click', () => {
  openInNewTab(url2)
})


//                 \\\BAGUNÇA DO API DO YOUTUBE\\\


      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'rUxyKA_-grg',
          events: {
          }
        });
      }



//PLAY/PAUSE

window.addEventListener('DOMContentLoaded',() =>{
  const pausegif = document.querySelector('#paused')
  const playgif  = document.querySelector('#playbtn')
  const pausedgif = document.querySelector('#pausebtn')

  const pausar = () => {
    pausegif.classList.add('opacity-0')
    pausegif.classList.remove('opacity-1')
    player.playVideo()
  }

  const played = () => {
    pausegif.classList.remove('opacity-0')
    pausegif.classList.add('opacity-1')
    player.pauseVideo()
  }

  pausedgif.addEventListener('click', played)
  playgif.addEventListener('click', pausar)

}
)

