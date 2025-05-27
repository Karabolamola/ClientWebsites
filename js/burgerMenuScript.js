const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

// Toggle menu on burger click
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});