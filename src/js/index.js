import '../sass/style.scss';
import '../index.html';

import rangeInput from './modules/rangeInput';
import galleryOrder from './modules/galleryOrder';
import inputStyle from './modules/inputStyle';
import modal from './modules/modal';
import ripple from './modules/ripple';
import selectStyle from './modules/selectStyle';
import menu from './modules/menu';

import welcomeSlider from './modules/welcomeSlider';
import videoSlider from './modules/videoSlider';
import exploreSlider from './modules/exploreSlider';
import galleryAnimation from './modules/galleryAnimation';
import map from './modules/map';
import videoPlayer from './modules/videoPlayer';
import scrollUp from './modules/scrollUp';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  rangeInput();
  galleryOrder();
  inputStyle();
  modal();
  ripple();
  selectStyle();
  menu();

  welcomeSlider();
  videoSlider();
  exploreSlider();
  galleryAnimation();
  map();
  videoPlayer();
  scrollUp();

  

  console.log(`
  Score: 156/160
  [+] Слайдер в секции Welcome 24/24
  [+] Слайдер в секции Video (в слайдах - видео с YouTube) 18/20 (возможно проигрывание нескольких YouTube видео одновременно: -2 балла)
  [+] Кастомный видеоплеер, созданный на основе тега video 36/36
  [+] Управление плеером с клавиатуры 10/10
  [+] Слайдер сравнения изображений в секции Explore 10/10
  [+] Анимация при прокрутке изображений в секции Galery 8/8
  [+] Калькулятор продажи билетов в секции Tiskets 10/10
  [+] Калькулятор продажи билетов в форме продажи билетов 12/14 (время можно выбирать любое: -2 балла)
  [+] Валидация формы 16/16
  [+] Интерактивная карта в секции Contacts 12/12
  [+] Дополнительный функционал: 10/10
  Кнопка прокрутки страницы вверх, которая появляется, как только пользователь прокрутил страницу вниз на 1500 пикселей (также исчезает, если он вернулся обратно);

  В слайдере присутствует возможность оценить картину в слайдере, если она понравилась пользователю, при этом отображается картинка с сердечком около выбранных картин (причем при обновлении страницы отметки понравившихся картинок сохраняются);
  `);
});