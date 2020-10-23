import itemsColection from './menu.json';
import cardTpl from "../template.hbs";

const cardsMarkup = createCardsMarkup(itemsColection);

const menu = document.querySelector('.js-menu');
const switchBtn = document.querySelector('.theme-switch__toggle');

// додаємо розмітку а html
menu.insertAdjacentHTML('beforeend', cardsMarkup);
// змінюємо тему сторінки
switchBtn.addEventListener("change", onCheckBoxClick);

// функ. для створення розмітки
function createCardsMarkup(item) {
    return cardTpl(item);
}


const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};
;

// функія для зміни теми на сторінці
function onCheckBoxClick() {
    if (switchBtn.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        localStorage.setItem("theme", 'dark-theme');
    }
    else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem("theme", 'light-theme');
    }
}


const themeLocalStorage = localStorage.getItem('theme');
if (themeLocalStorage === Theme.DARK) {
  document.body.classList.add('dark-theme');
  switchBtn.checked = true;
}
  else {
    document.body.classList.add('light-theme');
  }
