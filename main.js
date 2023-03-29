const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation_and_others');
const bodyes = document.querySelector('body');

const faqs = document.querySelectorAll('.FAQ_card');
const dropDown = document.querySelector('.FAQ_Card_DropDown_Menu');
const faqTexts = document.querySelector('.FAQ_cardText');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  bodyes.classList.toggle('lock');
});

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('drop');
  });
});
