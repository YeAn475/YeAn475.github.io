// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initNavScroll();
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .project-card, .contact-card, .skill-category, .education-item, .competency-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initNavScroll() {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.style.background = 'rgba(10, 10, 11, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(10, 10, 11, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
}

console.log('%c👋 안녕하세요!', 'font-size: 24px; font-weight: bold;');
console.log('%c이성훈의 포트폴리오를 방문해 주셔서 감사합니다.', 'font-size: 14px; color: #6366f1;');