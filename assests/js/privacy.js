// Enhanced smooth scrolling with offset
document.querySelectorAll('.toc a, .policy-section a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

if (targetElement) {
const headerOffset = 30;
const elementPosition = targetElement.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

window.scrollTo({
top: offsetPosition,
behavior: 'smooth'
});

// Update URL without page jump
if (history.pushState) {
history.pushState(null, null, targetId);
} else {
window.location.hash = targetId;
}
}
});
});

// Dynamic active TOC highlighting
const sections = document.querySelectorAll('.policy-section');
const navLinks = document.querySelectorAll('.toc a');

window.addEventListener('scroll', () => {
let current = '';

sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (pageYOffset >= (sectionTop - 150)) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active');
}
});
});

// Print dialog enhancement
document.querySelector('.print-btn').addEventListener('click', function() {
// Optional: Could add a print stylesheet toggle here
console.log('Printing privacy policy...');
});

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
// Could initialize cookie consent banner here
console.log('Privacy policy page loaded');

// Set current year for copyright if needed
document.querySelectorAll('.current-year').forEach(el => {
el.textContent = new Date().getFullYear();
});
});