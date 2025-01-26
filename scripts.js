document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Form validation example
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        if (name === '' || email === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
});