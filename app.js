const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const cross = document.querySelector('.close');

cross.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

const closeMenu = document.querySelector('.navClose');

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
