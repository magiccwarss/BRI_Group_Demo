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


const burgerMenu = document.querySelector('.navigation_and_others');
const menuItems = burgerMenu.querySelectorAll('a');

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    // Удалить класс "active" у бургер-меню, чтобы закрыть его
    burgerMenu.classList.remove('active');
    hamburger.classList.remove('active');
    bodyes.classList.remove('active');

    // Получить ссылку на элемент страницы, соответствующий выбранному пункту меню
    const target = document.querySelector(event.target.hash);

    // Прокрутить страницу к этому элементу
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

