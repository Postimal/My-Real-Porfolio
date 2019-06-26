menuBtn.addEventListener('click', toggleMenu);

// button learn more 

const hiddenInfo = document.querySelector('.learn-more');
document.querySelector('.learn-more-btn').addEventListener("click", function () {
    hiddenInfo.classList.toggle('show')
})