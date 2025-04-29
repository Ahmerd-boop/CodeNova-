// Scroll Reveal Function
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  // Trigger on scroll
  window.addEventListener('scroll', scrollReveal);
  
  // Trigger on page load
  window.addEventListener('load', scrollReveal);
  