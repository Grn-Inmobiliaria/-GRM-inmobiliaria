// Constantes de configuración
const HORARIO = {
    INICIO: 9,
    FIN: 19
};

const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    TELEFONO: /^\d{10,}$/
};

// Función de validación de formulario
function validarFormulario(datos) {
    const { nombre, email, telefono, ciudad, fecha, hora } = datos;

    // Validar campos vacíos
    if (!nombre || !email || !telefono || !ciudad || !fecha || !hora) {
        throw new Error('Por favor, complete todos los campos requeridos');
    }

    // Validar email
    if (!REGEX.EMAIL.test(email)) {
        throw new Error('Por favor, ingrese un correo electrónico válido');
    }

    // Validar teléfono
    if (!REGEX.TELEFONO.test(telefono.replace(/\D/g, ''))) {
        throw new Error('Por favor, ingrese un número de teléfono válido (mínimo 10 dígitos)');
    }

    // Validar fecha futura
    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();
    if (fechaSeleccionada < fechaActual) {
        throw new Error('Por favor, seleccione una fecha futura');
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const citaForm = document.getElementById('citaForm');
    const fechaInput = document.getElementById('fecha');
    const horaInput = document.getElementById('hora');

    // Establecer fecha mínima como hoy
    fechaInput.min = new Date().toISOString().split('T')[0];

    // Validación de horario
    horaInput.addEventListener('input', (e) => {
        const [horas] = e.target.value.split(':').map(Number);
        if (horas < HORARIO.INICIO || horas > HORARIO.FIN) {
            alert(`Por favor, seleccione una hora entre ${HORARIO.INICIO}:00 y ${HORARIO.FIN}:00`);
            e.target.value = '';
        }
    });

    // Manejo del envío del formulario
    citaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            ciudad: document.getElementById('ciudad').value,
            fecha: document.getElementById('fecha').value,
            hora: document.getElementById('hora').value,
            mensaje: document.getElementById('mensaje').value
        };

        try {
            validarFormulario(formData);
            alert('¡Cita agendada con éxito! Nos pondremos en contacto contigo pronto.');
            citaForm.reset();
        } catch (error) {
            alert(error.message);
        }
    });
});