'use strict';
const header__nav = document.querySelector('.header__nav');
const icon        = document.querySelector('.fas.fa-bars');
const header__ul  = document.querySelector('.header__ul');
icon.addEventListener('click', function (){
    console.log("I got clicked");
    header__nav.classList.toggle('visible');
    header__ul.classList.toggle('visible');
})