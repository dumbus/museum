(()=>{"use strict";const e=()=>{const e=document.querySelector("#slider"),t=document.querySelector(".slider-panel-arrows-prev"),s=document.querySelector(".slider-panel-arrows-next"),a=document.querySelector(".slider-panel-numbers-current"),d=document.querySelector(".slider-panel-dots"),n=document.querySelectorAll(".slider-panel-dots-item");let r=1;function i(t){t>5&&(r=1),t<1&&(r=5),e.classList.add(`slide${r}`),a.textContent=`0${r}`,n.forEach((e=>{e.classList.remove("dot-active")})),n[r-1].classList.add("dot-active")}function l(e){i(r+=e)}i(r);try{t.addEventListener("click",(()=>{e.classList.remove(`slide${r}`),l(-1),e.classList.add("fadeIn")})),s.addEventListener("click",(()=>{e.classList.remove(`slide${r}`),l(1),e.classList.add("fadeIn")}))}catch(e){}!function(t){let s=t,a=0,d=0,n=0,i=0,c=0,o=0;s.addEventListener("mousedown",(e=>{e.preventDefault(),a=e.pageX,d=e.pageY,c=(new Date).getTime()})),s.addEventListener("mouseup",(t=>{t.preventDefault(),n=t.pageX-a,i=t.pageY-d,o=(new Date).getTime()-c,o<=500&&Math.abs(n)>150&&Math.abs(i)<=100&&(n>0?(e.classList.remove(`slide${r}`),e.classList.add("fadeIn"),l(-1)):(e.classList.remove(`slide${r}`),e.classList.add("fadeIn"),l(1)))}))}(e),d.addEventListener("click",(t=>{t.target!=t.currentTarget&&(e.classList.remove(`slide${r}`),r=t.target.getAttribute("data-id"),i(r),e.classList.add("fadeIn"))}))},t=()=>{document.querySelectorAll(".progress").forEach((e=>{e.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`}))}))},s=()=>{};window.addEventListener("DOMContentLoaded",(()=>{e(),t(),s()}))})();