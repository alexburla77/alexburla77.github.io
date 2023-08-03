window.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.menu'),
        burger = document.querySelector('.icon-menu');


      burger.addEventListener('click', () => {

        burger.classList.toggle('menu-open');
        menu.classList.toggle('active');

      });
});



