const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuBranding.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    showMenu = !showMenu;
}


menuBtn.addEventListener('click', toggleMenu);

// button learn more 

const hiddenInfo = document.querySelector('.learn-more');
document.querySelector('.learn-more-btn').addEventListener("click", function () {
    hiddenInfo.classList.toggle('show')
})

