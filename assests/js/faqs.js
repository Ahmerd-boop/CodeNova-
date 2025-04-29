// FAQ Interaction
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        const answer = parent.querySelector('.faq-answer');
        const isOpen = parent.classList.contains('active');

        // Close all items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle current item
        if (!isOpen) {
            parent.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    window.scrollY > 300 
        ? backToTop.classList.add('show')
        : backToTop.classList.remove('show');
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const items = Array.from(document.querySelectorAll('.faq-question'));
        const currentIndex = items.indexOf(document.activeElement);
        
        if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
            items[currentIndex + 1].focus();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            items[currentIndex - 1].focus();
        }
    }
});
