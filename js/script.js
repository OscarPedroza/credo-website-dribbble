const btnMenu = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  btnMenu.classList.toggle('active');
});
