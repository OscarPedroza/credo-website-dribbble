/**
 * Responsive menu
 */

const btnMenu = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  btnMenu.classList.toggle('active');
});

/**
 * Slider (Our team section)
 */

const slider = document.getElementById('slider');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

btnLeft.addEventListener('click', () => {
  slider.scrollBy({ left: -356, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  slider.scrollBy({ left: 356, behavior: 'smooth' });
});
