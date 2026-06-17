document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 16, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(5, 5, 16, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.section-title, .glass-card');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        // Use classes instead of inline transforms so existing transforms
        // (like centered section titles) are not overwritten.
        element.classList.add('reveal-on-scroll');
        revealObserver.observe(element);
    });

    // Typing Effect for "Jai Varshan S" if desired, or simple hover glitch
    const glitchText = document.querySelector('.glitch');
    if(glitchText) {
        // Simple scale effect on hover for the name
        glitchText.addEventListener('mouseover', () => {
            glitchText.style.color = 'var(--primary)';
            glitchText.style.textShadow = '2px 2px var(--secondary)';
            glitchText.style.transition = '0.2s';
        });
        glitchText.addEventListener('mouseout', () => {
            glitchText.style.color = 'var(--text-main)';
            glitchText.style.textShadow = 'none';
        });
    }
});
