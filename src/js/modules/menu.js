const menu = () => {
  const open = document.querySelector('.header-burger'),
        menu = document.querySelector('.menu'),
        menuList = document.querySelector('.menu-list'),
        menuItems = document.querySelectorAll('.menu-list-item'),
        hide = document.querySelector('.welcome-text'),
        burgerItems = document.querySelectorAll('.header-burger-item');
    
    open.addEventListener('click', (e) => {
      e.stopPropagation();
    if (!open.classList.contains('opened')) {
      menu.style.left = '0';
      hide.classList.add('hide');
      hide.classList.remove('unhide');
      open.classList.add('opened');

      burgerItems[0].classList.add('rotate-left');
      burgerItems[1].classList.add('hidden');
      burgerItems[2].classList.add('rotate-right');

    } else {
      menu.style.left = '-220vw';
      hide.classList.add('unhide');
      hide.classList.remove('hide');
      open.classList.remove('opened');

      burgerItems[0].classList.remove('rotate-left');
      burgerItems[1].classList.remove('hidden');
      burgerItems[2].classList.remove('rotate-right');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target !== menu && e.target !== menuList) {
      menu.style.left = '-220vw';
      hide.classList.add('unhide');
      hide.classList.remove('hide');
      open.classList.remove('opened');

      burgerItems[0].classList.remove('rotate-left');
      burgerItems[1].classList.remove('hidden');
      burgerItems[2].classList.remove('rotate-right');
    }
  });

  menuItems.forEach(item => {
    document.addEventListener('click', (e) => {
      if (e.target === item) {
        menu.style.left = '-220vw';
        hide.classList.add('unhide');
        hide.classList.remove('hide');
        open.classList.remove('opened');
  
        burgerItems[0].classList.remove('rotate-left');
        burgerItems[1].classList.remove('hidden');
        burgerItems[2].classList.remove('rotate-right');
      }
    });
  });
  
};

export default menu;