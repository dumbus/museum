const videoPlayer = () => {
  const videoSection = document.querySelector('#video');
  const player = videoSection.querySelector('.video-wrapper');
  const video = videoSection.querySelector('.video-player');

  const videoProgress = videoSection.querySelector('.video-progress');
  const videoVolume = videoSection.querySelector('.video-volume');
  const ranges = videoSection.querySelectorAll('.progress');
 
  const buttonsHTML = {
    bigPlay: videoSection.querySelector('.big-play'),
    play: videoSection.querySelector('.video-play-btn-svg-play'),
    pause: videoSection.querySelector('.video-play-btn-svg-pause'),
    volume: videoSection.querySelector('.video-volume-btn-svg-volume'),
    mute: videoSection.querySelector('.video-volume-btn-svg-mute'),
    fullscreen: videoSection.querySelector('.video-fullscreen-btn-svg-fullscreen'),
    smallscreen: videoSection.querySelector('.video-fullscreen-btn-svg-smallscreen')
  };

  let playRate = 1;
  const playbackBlock = document.querySelector('.video-speedrate');

  function togglePlay() {
    if (video.paused) {
      video.play();
      playBtnsPlay();
    } else {
      video.pause();
      playBtnsPause();
    }
  }

  function volumeOn() {
    video.volume = 0.2;
    buttonsHTML.mute.style.display = 'none';
    buttonsHTML.volume.style.display = 'block';
  }

  function volumeOff() {
    video.volume = 0;
    buttonsHTML.volume.style.display = 'none';
    buttonsHTML.mute.style.display = 'block';
  }

  function playBtnsPlay() {
    buttonsHTML.bigPlay.style.display = 'none';
    buttonsHTML.play.style.display = 'none';
    buttonsHTML.pause.style.display = 'block';
  }

  function playBtnsPause() {
    buttonsHTML.bigPlay.style.display = 'block';
    buttonsHTML.play.style.display = 'block';
    buttonsHTML.pause.style.display = 'none';
  }

  function handleVideoProgress() {
    var percent = Math.floor((video.currentTime / video.duration) * 100) || 0;

    videoProgress.value = percent;
    videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;

    if (percent === 100) {
      playBtnsPause();
    }
  }

  function openFullscreen() {
    if (player.requestFullscreen) {
      player.requestFullscreen();
      buttonsHTML.fullscreen.style.display = 'none';
      buttonsHTML.smallscreen.style.display = 'block';
    }
  }

  function closeFullscreen () {
    if (document.exitFullscreen) {
      buttonsHTML.fullscreen.style.display = 'block';
      buttonsHTML.smallscreen.style.display = 'none';
      document.exitFullscreen();
    }
  }

  function increaseRate() {
    playRate += 0.25;
    video.playbackRate = playRate;
    playbackBlock.style.display = 'flex';
    playbackBlock.textContent = playRate;
    playbackBlock.classList.add('speedrate-active');
    playbackBlock.addEventListener('animationend', () => {
      playbackBlock.classList.remove('speedrate-active');
      playbackBlock.style.display = 'none';
    });
  }

  function decreaseRate() {
    playRate -= 0.25;
    video.playbackRate = playRate;
    playbackBlock.style.display = 'flex';
    playbackBlock.textContent = playRate;
    playbackBlock.classList.add('speedrate-active');
    playbackBlock.addEventListener('animationend', () => {
      playbackBlock.classList.remove('speedrate-active');
      playbackBlock.style.display = 'none';
    });
  }

  videoProgress.addEventListener('input', function() {
    video.currentTime = Math.floor(videoProgress.value * (video.duration / 100));
  });

  videoVolume.addEventListener('input', function() {
    let localVolume = videoVolume.value / 100;
    video.volume = localVolume;

    if (video.volume == 0) {
      volumeOff();
    } else {
      buttonsHTML.volume.style.display = 'block';
      buttonsHTML.mute.style.display = 'none';
    }
  });

  video.addEventListener('click', togglePlay);
  buttonsHTML.bigPlay.addEventListener('click', togglePlay);
  buttonsHTML.play.addEventListener('click', togglePlay);
  buttonsHTML.pause.addEventListener('click', togglePlay);
  video.addEventListener('timeupdate', handleVideoProgress);

  buttonsHTML.volume.addEventListener('click', volumeOff);
  buttonsHTML.mute.addEventListener('click', volumeOn);

  buttonsHTML.fullscreen.addEventListener('click', openFullscreen);
  buttonsHTML.smallscreen.addEventListener('click', closeFullscreen);

  // Управление клавишами

  const preventer = (e) => {
    e.preventDefault();
  };

  document.addEventListener('scroll', () => {
    const currentBottomPosition = window.scrollY + window.innerHeight;
    const currentTopPosition = window.scrollY;
    let sectionTopBorder = videoSection.offsetTop;
    let sectionBottomBorder = videoSection.offsetTop + videoSection.offsetHeight;

    let modalClosed = !document.querySelector('.modal').classList.contains('modal-opened');

    if (modalClosed === true && currentBottomPosition > sectionTopBorder && currentTopPosition < sectionBottomBorder) {
      document.addEventListener('keydown', preventer);
    } else {
      document.removeEventListener('keydown', preventer);
    }
  });

  

  document.addEventListener('keydown', function(event) {
    const currentBottomPosition = window.scrollY + window.innerHeight;
    const currentTopPosition = window.scrollY;
    let sectionTopBorder = videoSection.offsetTop;
    let sectionBottomBorder = videoSection.offsetTop + videoSection.offsetHeight;

    if (currentBottomPosition > sectionTopBorder && currentTopPosition < sectionBottomBorder) {

      if (event.code == 'Space') {
        togglePlay();
      }
      if (event.code == 'KeyM') {
        if (video.volume == 0) {
          volumeOn();
        } else {
          volumeOff();
        }
      }
      if (event.code == 'KeyF') {
        closeFullscreen();
        openFullscreen();
      }
      if (event.shiftKey && event.code == 'Comma') {
        increaseRate();
      }
      if (event.shiftKey && event.code == 'Period') {
        decreaseRate();
      }
    }
  });

  // Дополнения к слайдеру

  let bulletItems = document.querySelectorAll('.video-panel-dots-item');
  let leftArrow = document.querySelector('.video-slider-left-arrow');
  let rightArrow = document.querySelector('.video-slider-right-arrow');

  leftArrow.addEventListener('click', () => {
    togglePlay();
    volumeOn();
    playBtnsPause();
  });

  rightArrow.addEventListener('click', () => {
    togglePlay();
    volumeOn();
    playBtnsPause();
  });

  bulletItems.forEach(item => {
    item.addEventListener('click', () => {
      togglePlay();
      volumeOn();
      playBtnsPause();
    });
  });

};

export default videoPlayer;