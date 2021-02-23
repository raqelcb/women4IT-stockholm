'use strict';
var header__nav = document.querySelector('.header__nav');
var icon = document.querySelector('.fas.fa-bars');
var header__ul = document.querySelector('.header__ul');
icon.addEventListener('click', function () {
    header__nav.classList.toggle('visible');
    header__ul.classList.toggle('visible');
});
