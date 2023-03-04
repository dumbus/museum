const scrollUp = () => {
  let scrollButton = document.querySelector('.scroll-up-icon');
  const scrolledDown = window.scrollY;

  if (scrolledDown > 1500) {
    scrollButton.classList.add('scroll-shown');
  }

  document.addEventListener('scroll', () => {
    const scrolledDown = window.scrollY;
    if (scrolledDown > 1500) {
      scrollButton.classList.remove('scroll-inactive');
      scrollButton.classList.add('scroll-active');
      
      scrollButton.addEventListener('animationend', () => {
        scrollButton.classList.add('scroll-shown');
      });
    } else if (scrollButton.classList.contains('scroll-active')) {
      scrollButton.classList.remove('scroll-active');
      scrollButton.classList.add('scroll-inactive');

      scrollButton.addEventListener('animationend', () => {
        scrollButton.classList.remove('scroll-shown');
      });
    }
  });
};

export default scrollUp;