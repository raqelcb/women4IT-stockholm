'use strict'
const header__nav = (document.querySelector('.header__nav') as HTMLElement)
const icon        = (document.querySelector('.fas.fa-bars') as HTMLElement)
const header__ul  = (document.querySelector('.header__ul') as HTMLElement)

icon.addEventListener('click', () : void =>{
    console.log("click");
    header__nav.classList.toggle('visible');
    header__ul.classList.toggle('visible');
})