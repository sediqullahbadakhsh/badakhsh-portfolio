const navSlide = () => {
  const burger = document.querySelector('.humberger-menu');
  const nav = document.querySelector('.primary-navigation');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }));
};

navSlide();
const modalBtn = document.querySelector('.project-button');

const modalBg = document.querySelector('.modal-section');
const modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalBg.classList.add('modal-active');
});
modalClose.addEventListener('click', () => {
  modalBg.classList.remove('modal-active');
});
