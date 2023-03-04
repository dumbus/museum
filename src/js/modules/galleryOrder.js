const galleryOrder = () => {
  const picturesInnerContainer = document.querySelector('.pictures-inner-container');
  const picturesArray = document.querySelectorAll('.pictures-inner-container-item');
  let srcArr = [];

  for (let i = 0; i < picturesArray.length; i++) {
    srcArr[i] = picturesArray[i].getAttribute('src');
    picturesArray[i].remove();
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(srcArr);

  for (let i = 0; i < srcArr.length; i++) {
    const img = document.createElement('img');
    img.classList.add('pictures-inner-container-item');
    img.src = srcArr[i];
    img.alt = `galery${i}`;
    picturesInnerContainer.append(img);
    if (i == 0 || i == 10) {
      img.classList.add('additional-padding');
    } 
  }

  if (window.innerWidth < 1023) {
    const newImgArr = document.querySelectorAll('.pictures-inner-container-item');

    newImgArr.forEach(item => {
      item.classList.remove('additional-padding');
    });

    for (let i = 0; i < newImgArr.length; i++) {
      if (i == 0) {
        newImgArr[i].classList.add('additional-padding');
      }
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1023) {
      const newImgArr = document.querySelectorAll('.pictures-inner-container-item');
  
      newImgArr.forEach(item => {
        item.classList.remove('additional-padding');
      });
  
      for (let i = 0; i < newImgArr.length; i++) {
        if (i == 0) {
          newImgArr[i].classList.add('additional-padding');
        }
      }
    }
  });
};

export default galleryOrder;