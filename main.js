const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation_and_others');
const bodyes = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  bodyes.classList.toggle('lock');
});
