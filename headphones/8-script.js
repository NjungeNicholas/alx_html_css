document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle class when checkbox state changes
    menuToggle.addEventListener('change', () => {
        navLinks.classList.toggle('open', menuToggle.checked);
    });
});
