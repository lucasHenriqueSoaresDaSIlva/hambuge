// JavaScript for interactive features
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Added JavaScript to toggle the hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
});