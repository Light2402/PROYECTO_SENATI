// Animaciones al hacer scroll - Simple Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideInUp 0.8s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animar tarjetas y secciones
    document.querySelectorAll('article, section, .card').forEach(el => {
        observer.observe(el);
    });

    // Efecto parallax en el hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });

    // Indicador de scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Actualizar color del header basado en scroll
        const header = document.querySelector('header');
        if (scrollTop > 100) {
            header.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
        }
    });

    // Smooth scroll para navegación
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
});

// Preload de imágenes para mejor performance
window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
        img.style.transition = 'opacity 0.3s ease-in-out';
        img.style.opacity = '1';
    });
});
