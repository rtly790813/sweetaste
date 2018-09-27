"use strict";

var objHeader = document.querySelector(".header__switch");
var objNavbar = document.querySelector(".navbar");
var isNavOpen = false;

function navSwitch() {
  isNavOpen = !isNavOpen;

  if (isNavOpen) {
    objNavbar.classList.add('navbar-active');
  } else {
    objNavbar.classList.remove('navbar-active');
  }
}

objHeader.addEventListener('click', navSwitch);