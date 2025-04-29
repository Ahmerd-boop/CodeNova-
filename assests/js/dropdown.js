const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn');

// Open menu
menuToggle.addEventListener('click', () => {
  navbar.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active');
});
