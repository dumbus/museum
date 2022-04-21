const welcomeSlider = () => {
  let items = document.querySelectorAll('.carousel-item');
  let currentItem = 0;
  let isEnabled = true;
  let sliderDots = document.querySelectorAll('.slider-panel-dots-item');
  let currentNumber = document.querySelector('.slider-panel-numbers-current');

  function changeCurrentItem (n) {
    sliderDots[currentItem].classList.remove('dot-active');
    currentItem = (n + items.length) % items.length;
    sliderDots[currentItem].classList.add('dot-active');
    currentNumber.textContent = `0${currentItem + 1}`;
  }

  function hideItem (direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
      this.classList.remove('active', direction); 
    });
  }

  function showItem (direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true; 
    });
  }

  function previousItem (n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
  }

  function nextItem (n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
  }

  document.querySelector('.slider-panel-arrows-prev').addEventListener('click', function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

  document.querySelector('.slider-panel-arrows-next').addEventListener('click', function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });


  const swipeDetect = (el) => {
    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;

    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;

    surface.addEventListener('mousedown', function (e) {
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    });

    surface.addEventListener('mouseup', function (e) {
      distX = e.pageX - startX;
      distY = e.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;

      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem);
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
          }
        }
      }
    });

    
  };

  let elem = document.querySelector('.carousel');
  swipeDetect(elem);

  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', () => {
      if (isEnabled) {
        if (i < currentItem) {
          hideItem('to-right');
          changeCurrentItem(i);
          showItem('from-left');
        }
        if (i > currentItem) {
          hideItem('to-left');
          changeCurrentItem(i);
          showItem('from-right');
        }
      }
    });
  }

  // Like images

  const likeIcon = document.querySelector('.slider-like');
  const likeImg1 = document.querySelector('.like-img1');
  const likeImg2 = document.querySelector('.like-img2');
  const likeImg3 = document.querySelector('.like-img3');
  const likeImg4 = document.querySelector('.like-img4');
  const likeImg5 = document.querySelector('.like-img5');

  if (localStorage.getItem('first-slide') == null) {
    localStorage.setItem('first-slide', false);
  } else if (localStorage.getItem('first-slide') == 'true'){
    likeImg1.style.display = 'block';
  }
  if (localStorage.getItem('second-slide') == null) {
    localStorage.setItem('second-slide', false);
  } else if (localStorage.getItem('second-slide') == 'true'){
    likeImg2.style.display = 'block';
  }
  if (localStorage.getItem('third-slide') == null) {
    localStorage.setItem('third-slide', false);
  } else if (localStorage.getItem('third-slide') == 'true'){
    likeImg3.style.display = 'block';
  }
  if (localStorage.getItem('fourth-slide') == null) {
    localStorage.setItem('fourth-slide', false);
  } else if (localStorage.getItem('fourth-slide') == 'true'){
    likeImg4.style.display = 'block';
  }
  if (localStorage.getItem('fifth-slide') == null) {
    localStorage.setItem('fifth-slide', false);
  } else if (localStorage.getItem('fifth-slide') == 'true'){
    likeImg5.style.display = 'block';
  }


  likeIcon.addEventListener('click', () => {
    switch (currentItem) {
      case 0:
        if (localStorage.getItem('first-slide') == 'false') {
          localStorage.setItem('first-slide', true);
          likeImg1.style.display = 'block';
        } else {
          localStorage.setItem('first-slide', false);
          likeImg1.style.display = 'none';
        }
      break;

      case 1:
        if (localStorage.getItem('second-slide') == 'false') {
          localStorage.setItem('second-slide', true);
          likeImg2.style.display = 'block';
        } else {
          localStorage.setItem('second-slide', false);
          likeImg2.style.display = 'none';
        }
      break;

      case 2:
        if (localStorage.getItem('third-slide') == 'false') {
          localStorage.setItem('third-slide', true);
          likeImg3.style.display = 'block';
        } else {
          localStorage.setItem('third-slide', false);
          likeImg3.style.display = 'none';
        }
      break;

      case 3:
        if (localStorage.getItem('fourth-slide') == 'false') {
          localStorage.setItem('fourth-slide', true);
          likeImg4.style.display = 'block';
        } else {
          localStorage.setItem('fourth-slide', false);
          likeImg4.style.display = 'none';
        }
      break;

      case 4:
        if (localStorage.getItem('fifth-slide') == 'false') {
          localStorage.setItem('fifth-slide', true);
          likeImg5.style.display = 'block';
        } else {
          localStorage.setItem('fifth-slide', false);
          likeImg5.style.display = 'none';
        }
      break;

    }
  });

};

export default welcomeSlider;