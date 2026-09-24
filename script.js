document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const contactForm = document.querySelector('.contact-form');
    const header = document.querySelector('header');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeText = document.querySelector('.toggle-text');

    const applyTheme = (theme) => {
        const selectedTheme = theme === 'dark' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);

        if (themeToggle) {
            const isDark = selectedTheme === 'dark';
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            if (themeText) {
                themeText.textContent = isDark ? 'Dark' : 'Light';
            }
            const toggleIcon = themeToggle.querySelector('.toggle-icon');
            if (toggleIcon) {
                toggleIcon.textContent = isDark ? '🌙' : '☀️';
            }
        }
    };

    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(savedTheme || preferredTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    if (navLinks.length) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    if (nav) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.18)';
            } else {
                nav.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.18)';
            }

            if (currentScroll > lastScroll && currentScroll > 80) {
                nav.style.transform = 'translateY(-2px)';
            } else {
                nav.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    if (contactForm) {
        const formStatus = document.createElement('p');
        formStatus.className = 'form-status';
        contactForm.appendChild(formStatus);

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = contactForm.querySelector('input[type="text"]');
            const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'there';

            formStatus.textContent = `Thank you, ${name}! Your message has been received. We will contact you soon.`;
            formStatus.style.display = 'block';
            contactForm.reset();
        });
    }

    const yearNode = document.querySelector('[data-year]');
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    if (header && header.classList.contains('home-hero')) {
        header.setAttribute('aria-label', 'P and C Accounting Firm homepage');
    }
});