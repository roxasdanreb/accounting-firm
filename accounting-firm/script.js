(function() {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', savedTheme || preferredTheme);
})();

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const contactForm = document.querySelector('.contact-form');
    const header = document.querySelector('header');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeText = themeToggle ? themeToggle.querySelector('.toggle-text') : null;
    const themeIcon = themeToggle ? themeToggle.querySelector('.toggle-icon') : null;

    const applyTheme = (theme) => {
        const selectedTheme = theme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', selectedTheme);
        document.body.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);

        if (themeToggle) {
            const isDark = selectedTheme === 'dark';
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            if (themeText) themeText.textContent = isDark ? 'Dark' : 'Light';
            if (themeIcon) themeIcon.textContent = isDark ? '🌙' : '☀️';
        }
    };

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    if (navLinks.length) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });

    let lastScroll = 0;
    let ticking = false;
    if (nav) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset;
                    nav.style.boxShadow = currentScroll > 50 ? '0 10px 30px rgba(0, 0, 0, 0.18)' : '0 8px 24px rgba(0, 0, 0, 0.18)';
                    nav.style.transform = (currentScroll > lastScroll && currentScroll > 80) ? 'translateY(-100%)' : 'translateY(0)';
                    lastScroll = currentScroll;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
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
    if (yearNode) yearNode.textContent = new Date().getFullYear();

});