const videoSlider = () => {
  var videoTinySlider = tns({
    container: '.video-slider-inner',
    items: 3,
    gutter: 42,
    speed: 500,
    controlsContainer: '.video-slider-panel',
    nextButton: '.video-slider-right-arrow',
    prevButton: '.video-slider-left-arrow',
    navContainer: '.video-panel-dots',
    navAsThumbnails: true,
    loop: true
  });

  let info = videoTinySlider.getInfo();
  
  let mainVideo = document.querySelector('#main-video');
  const iframes = document.querySelectorAll('.ifr');
  let bulletItems = document.querySelectorAll('.video-panel-dots-item');
  let leftArrow = document.querySelector('.video-slider-left-arrow');
  let rightArrow = document.querySelector('.video-slider-right-arrow');

  videoTinySlider.events.on('indexChanged', () => {
    let currentIndex = videoTinySlider.getInfo().index - 5;

    if (currentIndex < 0) {
      currentIndex += 5;
    }
    if (currentIndex > 4) {
      currentIndex -= 5;
    }

    mainVideo.setAttribute('src', `./assets/video/video${currentIndex}.mp4`);
    mainVideo.setAttribute('poster', `./assets/video/poster${currentIndex}.jpg`);

    iframes.forEach(item => {
      item.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  });

  leftArrow.addEventListener('click', () => {
    let currentIndex = videoTinySlider.getInfo().index - 6;

    if (currentIndex < 0) {
      currentIndex += 5;
    }
    if (currentIndex > 4) {
      currentIndex -= 5;
    }

    bulletItems[currentIndex].classList.add('dot-active');

    if (currentIndex == 4) {
      bulletItems[0].classList.remove('dot-active');
    } else {
      bulletItems[currentIndex + 1].classList.remove('dot-active');
    }
  });

  rightArrow.addEventListener('click', () => {
    let currentIndex = videoTinySlider.getInfo().index - 4;

    if (currentIndex < 0) {
      currentIndex += 5;
    }
    if (currentIndex > 4) {
      currentIndex -= 5;
    }

    bulletItems[currentIndex].classList.add('dot-active');

    if (currentIndex == 0) {
      bulletItems[4].classList.remove('dot-active');
    } else {
      bulletItems[currentIndex - 1].classList.remove('dot-active');
    }
  });

  let buferIndex;

  for (let i = 0; i < bulletItems.length; i++) {
    bulletItems[i].addEventListener('click', (e) => {
      if (e.target === bulletItems[i]) {
        buferIndex = i;
        for (let j = 0; j < bulletItems.length; j++) {
          if (j === buferIndex) {
            bulletItems[j].classList.add('dot-active');
          } else {
            bulletItems[j].classList.remove('dot-active');
          }
        }
      }
    });
  }

};

export default videoSlider;