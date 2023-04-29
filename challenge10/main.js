const navToggle = document.querySelector('.page-nav-toggle');
const nav = document.querySelector('.page-nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('page-nav--visible');
    console.log(nav.classList);
})
