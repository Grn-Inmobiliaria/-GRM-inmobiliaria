import { propiedades, renderInmuebles } from './propiedades.js';
import { getFeatureIcon, getMainFeatures } from './propiedades.js';
console.log('Propiedades cargadas en index:', propiedades);

// Variables de configuración del carrusel
let currentIndex = 0;
let cardWidth = 300;
const gap = 20;
let visibleCards = window.innerWidth <= 480 ? 1 : 3;

// Función de throttling para optimizar eventos frecuentes
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Sistema de creación dinámica de tarjetas de propiedades
function createPropertyCards() {
    const propertyGrid = document.querySelector('.property-grid');
    if (!propertyGrid) return;
    
    propertyGrid.innerHTML = '';
    
    for (let i = 0; i < visibleCards; i++) {
        const propertyIndex = (currentIndex + i) % propiedades.length;
        const property = propiedades[propertyIndex];
        
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <a href="propiedades.html?id=${property.id}" class="property-link">
                <div class="property-image">
                    <img src="${property.imagenes[0]}" alt="${property.titulo}" />
                </div>
                <div class="property-info">
                    <h3>${property.titulo}</h3>
                    <p class="price">${property.precio}</p>
                    <p class="location"><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
                    <p class="status">Estado: ${property.estado} - ${property.disponibilidad}</p>
                    <div class="features-list">
                        ${getMainFeatures(property.caracteristicas)}
                    </div>
                </div>
            </a>
        `;
        propertyGrid.appendChild(card);
    }
}

// Control del carrusel
function moveCarousel(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % propiedades.length;
    } else {
        currentIndex = (currentIndex - 1 + propiedades.length) % propiedades.length;
    }
    createPropertyCards();
}

// Función para actualizar sección activa
function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

function updateVisibleCards() {
    visibleCards = window.innerWidth <= 480 ? 1 : 3;
    createPropertyCards();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Usar renderInmuebles para renderizar las tarjetas en el index
    const grid = document.querySelector('.property-grid');
    if (grid) {
        // Mostrar solo las primeras N propiedades destacadas
        renderInmuebles(propiedades.slice(0, 6));
    }
    
    // Inicializar carrusel
    createPropertyCards();
    
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moveCarousel('prev'));
        nextButton.addEventListener('click', () => moveCarousel('next'));
    }

    // Sistema de resaltado de sección actual con throttling
    window.addEventListener('scroll', throttle(updateActiveSection, 150));

    // Efectos de hover en tarjetas
    const cards = document.querySelectorAll('.property-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateX(10px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            const overlay = card.querySelector('.property-overlay');
            if (overlay) overlay.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateX(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            const overlay = card.querySelector('.property-overlay');
            if (overlay) overlay.style.opacity = '0';
        });
    });

    // Sistema de validación de formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Formulario enviado con éxito!');
            form.reset();
        });
    });

    window.addEventListener('resize', updateVisibleCards);
});