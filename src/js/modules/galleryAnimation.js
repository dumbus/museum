const galleryAnimation = () => {
  const sliderImages = document.querySelectorAll('.pictures-inner-container-item');
  const section = document.querySelector('.gallery');

  function checkSlide (e) {
    sliderImages.forEach(sliderImage => {
      let currentBottomBorder = (window.scrollY + window.innerHeight);
      let sectionTopBorder = section.offsetTop;
      let itemMiddleBorder = sectionTopBorder + sliderImage.offsetTop + sliderImage.height / 4;

      let isScrolledEnough = currentBottomBorder >= itemMiddleBorder;

      if (isScrolledEnough && !sliderImage.classList.contains('gallery-shown')) {
        sliderImage.classList.add('gallery-active');
        sliderImage.addEventListener('animationend', () => {
          sliderImage.classList.add('gallery-shown');
        });
      }

      if (!isScrolledEnough) {
        sliderImage.classList.remove('gallery-active');
        sliderImage.classList.remove('gallery-shown');
      }

    });
  }

  checkSlide();
  window.addEventListener('scroll', checkSlide);


};

export default galleryAnimation;