const objHeader = document.querySelector(`.header__switch`);
const objNavbar = document.querySelector(`.navbar`);
let isNavOpen = false;

function navSwitch(){
    isNavOpen = !isNavOpen;
    if(isNavOpen){
        objNavbar.classList.add('navbar-active');
    } else {
        objNavbar.classList.remove('navbar-active');
    }
}

objHeader.addEventListener('click', navSwitch)
