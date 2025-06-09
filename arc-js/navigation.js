// Sistema principal de navegación responsiva
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navbar = document.querySelector('.navbar');

    // Control de transparencia y sombra de la barra de navegación al desplazarse
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'white';
            navbar.style.boxShadow = 'none';
        }
    });

    // Sistema de resaltado de sección actual en la navegación
    const sections = document.querySelectorAll('section');
    const navLinksA = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinksA.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Gestión del menú hamburguesa para dispositivos móviles
    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Alternar visibilidad del menú de navegación
            nav.classList.toggle('nav-active');
            
            // Animar cada enlace con efecto de aparición secuencial
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Animación de transformación del icono hamburguesa
            burger.classList.toggle('active');
        });

        // Cierre automático del menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!burger.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('active');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });

        // Cierre del menú al seleccionar un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('active');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            });
        });
    }

    // Sistema de navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});