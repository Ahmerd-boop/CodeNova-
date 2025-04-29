const supportButton = document.getElementById('supportButton');
const supportCard = document.getElementById('supportCard');

supportButton.addEventListener('click', function() {
    this.classList.toggle('active');
    supportCard.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', function(event) {
    if (!supportButton.contains(event.target) && !supportCard.contains(event.target)) {
        supportButton.classList.remove('active');
        supportCard.classList.remove('active');
    }
});