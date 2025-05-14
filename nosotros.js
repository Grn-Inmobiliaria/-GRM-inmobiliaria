// Configuración de animaciones
const ANIMATION_CONFIG = {
    OPACITY_HIDDEN: '0',
    TRANSFORM_Y: 'translateY(20px)',
    TRANSFORM_X: 'translateX(-20px)',
    TRANSITION_BASE: 'opacity 0.5s ease, transform 0.5s ease',
    THRESHOLDS: {
        STATS: 0.5,
        CONTENT: 0.3
    }
};

// Función para crear un Observer
function createObserver(threshold, callback) {
    return new IntersectionObserver(callback, { threshold });
}

// Función para configurar elementos animados
function setupAnimatedElements(elements, { initialTransform, delay = 0 }) {
    elements.forEach((element, index) => {
        element.style.opacity = ANIMATION_CONFIG.OPACITY_HIDDEN;
        element.style.transform = initialTransform;
        element.style.transition = delay ? 
            `${ANIMATION_CONFIG.TRANSITION_BASE} ${index * delay}s` : 
            ANIMATION_CONFIG.TRANSITION_BASE;
    });
}

// Función de animación al hacer scroll
function animateOnScroll(element) {
    element.style.opacity = '1';
    element.style.transform = 'translate(0)';
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Configuración de estadísticas
    const stats = document.querySelectorAll('.stat');
    const statsObserver = createObserver(
        ANIMATION_CONFIG.THRESHOLDS.STATS,
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateOnScroll(entry.target);
            }
        })
    );

    // Configuración de miembros del equipo
    const teamMembers = document.querySelectorAll('.miembro');
    const teamObserver = createObserver(
        ANIMATION_CONFIG.THRESHOLDS.CONTENT,
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateOnScroll(entry.target);
            }
        })
    );

    // Configuración del texto principal
    const aboutText = document.querySelector('.about-text');
    const aboutObserver = createObserver(
        ANIMATION_CONFIG.THRESHOLDS.CONTENT,
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateOnScroll(entry.target);
            }
        })
    );

    // Configuración de valores corporativos
    const valores = document.querySelectorAll('.valores li');
    const valoresObserver = createObserver(
        ANIMATION_CONFIG.THRESHOLDS.CONTENT,
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateOnScroll(entry.target);
            }
        })
    );

    // Inicializar elementos animados
    setupAnimatedElements(stats, { initialTransform: ANIMATION_CONFIG.TRANSFORM_Y });
    setupAnimatedElements(teamMembers, { initialTransform: ANIMATION_CONFIG.TRANSFORM_Y });
    setupAnimatedElements([aboutText], { initialTransform: ANIMATION_CONFIG.TRANSFORM_X });
    setupAnimatedElements(valores, { initialTransform: ANIMATION_CONFIG.TRANSFORM_X, delay: 0.1 });

    // Observar elementos
    stats.forEach(stat => statsObserver.observe(stat));
    teamMembers.forEach(member => teamObserver.observe(member));
    aboutObserver.observe(aboutText);
    valores.forEach(valor => valoresObserver.observe(valor));
});