// Base de datos de propiedades inmobiliarias
export const inmuebles = [
    {
        id: 1,
        titulo: "Departamento Penthouse en Venta en Mayakoba, Playa del Carmen",
        precio: "$3,500,000 MXN",
        ubicacion: "Mayakoba, Playa del Carmen",
        caracteristicas: [
            "2 Habitaciones",
            "2 Baños",
            "1 Estacionamiento",
            "100 m² ",
            "6° Piso",
            "Mantenimiento $3,400",
            "Terraza",
            "Aire acondicionado",
            "Amueblado",
            "Cocina integral",
            "Elevador",
            "Fraccionamiento privado",
            "Seguridad 24 horas",
            "Alberca",
            "Área de juegos infantiles",
            "Gimnasio",
            "Roof top con jacuzzi y asadores"
        ],
        descripcion: `¡Vive el lujo y la comodidad en este penthouse completamente amueblado en Lagunas de Mayakoba! Disfruta de espectaculares vistas, acabados de primera y amenidades exclusivas. Estrena un departamento con cocina integral, terraza, recámaras amplias, área de lavado y acceso a casa club, alberca, kayak y business center. Documentación en regla y listo para habitar. ¡No dejes pasar esta oportunidad única en Playa del Carmen!`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_1.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_2.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_3.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_4.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_5.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_6.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_7.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_8.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_9.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_10.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_11.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_12.jpg",
            "inmobiliaria-logos/Inmueble_1/Inmueble_1_13.jpg"
        ],
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 100,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "2019",
            estado: "Documentación completa"
        },
     
        ubicacion_link: "https://www.google.com/maps?q=21.161908,-86.851528",
    },
    {
        id: 2,
        titulo: "Departamento 2 habitaciones en pre venta Cancún",
        precio: "$3,213,272 MXN",
        ubicacion: "Huayacán km 6 Supermanzana 312, Benito Juárez",
        caracteristicas: [
            "2 Habitaciones",
            "2 Baños",
            "1 Medios baños",
            "1 Estacionamiento",
            "88 m²",
            "En construcción",
            "5° Piso"
        ],
        descripcion: `Invierte en un departamento moderno de 2 habitaciones con 88 m², ubicado en la zona de mayor plusvalía de Cancún. Vive rodeado de lujo y confort, con más de 25 amenidades: alberca, gimnasio, coworking, spa, boliche, canchas deportivas, áreas verdes y seguridad 24/7. Opciones de pago flexibles y entrega a partir de 2025. ¡Aprovecha la oportunidad de vivir o invertir en un desarrollo de alto nivel!`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_1.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_2.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_3.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_4.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_5.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_6.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_7.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_8.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_9.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_10.jpg",
            "inmobiliaria-logos/Inmueble_2/Inmueble_2_11.jpg"
        ],
        ubicacion_link: "",
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 88,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "",
            estado: "Documentación completa"
        }
    },
    {
        id: 3,
        titulo: "Departamento SLS Harbour 2 habitaciones en Cancún",
        precio: "$28,000,000 MXN",
        ubicacion: "Puerto Cancún, Benito Juárez",
        caracteristicas: [
            "2 Habitaciones",
            "4 Baños",
            "2 Estacionamientos",
            "190 m²",
            "A estrenar",
            "3° Piso"
        ],
        descripcion: `Exclusivo departamento en SLS Harbour, Puerto Cancún. 2 recámaras, family room convertible, cocina italiana, cuarto de servicio, 2 estacionamientos y vistas panorámicas. Disfruta de amenidades premium: acceso a playa, alberca, gimnasio, cine, canchas deportivas y seguridad total. Entrega inmediata y lujo inigualable en cada detalle.`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_1.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_2.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_3.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_4.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_5.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_6.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_7.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_8.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_9.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_10.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_11.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_12.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_13.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_14.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_15.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_16.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_17.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_18.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_19.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_20.jpg",
            "inmobiliaria-logos/Inmueble_3/Inmueble_3_21.jpg"
        ],
        ubicacion_link: "",
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 190,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "",
            estado: "Documentación completa"
        }
    },
    {
        id: 4,
        titulo: "Departamento en preventa desde 1 habitación",
        precio: "$3,740,000 MXN",
        ubicacion: "Cumbres Residencial Cumbres, Benito Juárez",
        caracteristicas: [
            "1 Habitación",
            "1 Baño",
            "1 Estacionamiento",
            "56 m²",
            "En construcción",
            "8° Piso"
        ],
        descripcion: `Invierte en la zona más exclusiva de Cancún: Zona Cumbres. Departamentos de 1, 2 y 3 habitaciones con vistas espectaculares, amenidades tipo resort y servicios ideales para rentas Airbnb. Disfruta de piscina, gimnasio, coworking, cine, bar, áreas infantiles y más. Entrega en 2026 y opciones de pago con descuentos especiales. ¡Tu mejor inversión está aquí!`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_1.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_2.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_3.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_4.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_5.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_6.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_7.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_8.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_9.jpg",
            "inmobiliaria-logos/Inmueble_4/Inmueble_4_10.jpg"
        ],
        ubicacion_link: "",
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 56,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "",
            estado: "Documentación completa"
        }
    },
    {
        id: 5,
        titulo: "Departamento en pre venta en avenida Colosio, Cancún",
        precio: "$3,302,770 MXN",
        ubicacion: "Ave. Luis Donaldo Colosio #Km 11 Alfredo V Bonfil, Benito Juárez",
        caracteristicas: [
            "1 Habitación",
            "1 Baño",
            "1 Estacionamiento",
            "59 m²",
            "En construcción"
        ],
        descripcion: `Modernos departamentos con vistas a la laguna y zona hotelera, más de 20 amenidades de lujo y ubicación privilegiada cerca de la universidad Anáhuac y aeropuerto de Cancún. Disfruta de albercas, gimnasio, coworking, áreas verdes, canchas deportivas y espacios para toda la familia. Entrega en diciembre 2026 y planes de pago flexibles con atractivos descuentos.`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_1.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_2.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_3.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_4.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_5.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_6.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_7.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_8.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_9.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_10.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_11.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_12.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_13.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_14.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_15.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_16.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_17.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_18.jpg",
            "inmobiliaria-logos/Inmueble_5/Inmueble_5_19.jpg"
        ],
        ubicacion_link: "",
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 59,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "",
            estado: "Documentación completa"
        }
    },
    {
        id: 6,
        titulo: "Departamento en pre venta 2 habitaciones con vista a la laguna",
        precio: "$5,367,944 MXN",
        ubicacion: "Blvd Colosio Supermanzana 295, Benito Juárez",
        caracteristicas: [
            "2 Habitaciones",
            "2 Baños",
            "1 Estacionamiento",
            "109 m²",
            "En construcción",
            "18° Piso"
        ],
        descripcion: `Departamentos de 1, 2 o 3 habitaciones con vistas increíbles a la laguna Nichupté y Zona Hotelera. Complejo de 4 torres con más de 20 amenidades: albercas, gimnasio, golf virtual, ciclovía, canchas, spa, boliche, business center, área comercial y más. Ubicación estratégica en Blvd. Colosio, entrega a finales de 2027. ¡Invierte en calidad de vida y plusvalía!`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_1.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_2.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_3.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_4.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_5.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_6.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_7.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_8.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_9.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_10.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_11.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_12.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_13.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_14.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_15.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_16.jpg",
            "inmobiliaria-logos/Inmueble_6/Inmueble_6_17.jpg"
        ],
        ubicacion_link: "",
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 109,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "",
            estado: "Documentación completa"
        }
    },

    {
        id: 7,
        titulo: "Departamento de 1 habitación Cancún",
        precio: "$3,579,660 MXN",
        ubicacion: "Carretera Tulum Cancún Supermanzana 19, Benito Juárez",
        caracteristicas: [
            "1 Habitación",
            "1 Baño",
            "1 Medios baños",
            "1 Estacionamiento",
            "57.53 m²",
            "En construcción",
            "1° Piso"
        ],
        descripcion: `Desarrollo residencial con excelente ubicación en Cancún, sobre avenida Colosio. Departamentos de 1 y 2 habitaciones, modelos desde 50 m², con terraza, cocina integral y amenidades de primer nivel: alberca, áreas verdes, fitness club, yoga deck, BBQ zone, pet park y más. Entrega en 2025. ¡Vive o invierte en un entorno moderno y seguro!`,
        imagenes: [
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_1.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_2.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_3.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_4.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_5.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_6.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_7.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_8.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_9.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_10.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_11.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_12.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_13.jpg",
            "inmobiliaria-logos/Inmueble_7/Inmueble_7_14.jpg"
        ],
        ubicacion_link: "",
        estado: "Venta",
        disponibilidad: "Disponible",
        metrosCuadrados: 57.53,
        documentacion: {
            escrituras: "En orden",
            predial: "Al corriente",
            servicios: "Todos los servicios",
            gravamen: "Libre de gravamen",
            antiguedad: "",
            estado: "Documentación completa"
        }
    },
   














    
   
];

// Exportar las propiedades para su uso en otros archivos
export const propiedades = inmuebles;

// Obtener el ID de la propiedad desde la URL
function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Función principal para mostrar las propiedades
export function renderInmuebles(lista = inmuebles) {
    const grid = document.querySelector('.property-grid-detalle');
    if (!grid) return;
    const propertyId = getPropertyIdFromUrl();
    if (propertyId) {
        lista = lista.filter(prop => prop.id.toString() === propertyId);
    }
    grid.innerHTML = '';
    if (lista.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No se encontraron inmuebles con esos filtros.</p>';
        return;
    }
    lista.forEach((prop) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.setAttribute('data-id', prop.id);
        card.innerHTML = `
            <div class="property-image">
                <img src="${prop.imagenes[0]}" alt="${prop.titulo}" />
            </div>
            <div class="property-info">
                <h3>${prop.titulo}</h3>
                <p class="price">${prop.precio}</p>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
                <p class="status">Estado: ${prop.estado} - ${prop.disponibilidad}</p>
                <div class="features-list">
                    ${getMainFeatures(prop.caracteristicas)}
                </div>
            </div>
        `;
        card.addEventListener('click', () => openPropertyModal(prop.id));
        grid.appendChild(card);
    });

    // Configurar pointer cursor para las tarjetas
    const cards = document.querySelectorAll('.property-card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
    });
}

// Gestión de la galería modal de imágenes
function showGallery(idx) {
    const prop = inmuebles[idx];
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-content">
            <span class="close-gallery">&times;</span>
            <h3>${prop.titulo}</h3>
            <div class="gallery-images">
                ${prop.imagenes.map(img => `<img src="${img}" alt="${prop.titulo}">`).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    modal.querySelector('.close-gallery').onclick = () => {
        modal.remove();
        document.body.style.overflow = '';
    };

    // Cerrar modal al hacer clic fuera
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    };
}

// Obtener valores de los filtros de búsqueda
function getFiltros() {
    return {
        ciudad: document.getElementById('ciudad').value.toLowerCase(),
        tipo: document.getElementById('tipo').value.toLowerCase(),
        operacion: document.getElementById('operacion').value.toLowerCase(),
        precio: document.getElementById('precio').value
    };
}

// Aplicar filtros a las propiedades
function filtrarInmuebles() {
    const filtros = getFiltros();
    const inmueblesFiltrados = inmuebles.filter(inmueble => {
        const cumpleCiudad = !filtros.ciudad || inmueble.ubicacion.toLowerCase().includes(filtros.ciudad);
        const cumpleTipo = !filtros.tipo || inmueble.titulo.toLowerCase().includes(filtros.tipo);
        const cumpleOperacion = !filtros.operacion || inmueble.estado.toLowerCase() === filtros.operacion;
        
        let cumplePrecio = true;
        if (filtros.precio) {
            const precioInmueble = extractPriceValue(inmueble.precio);
            const [min, max] = filtros.precio.split('-').map(Number);
            if (max) {
                cumplePrecio = precioInmueble >= min && precioInmueble <= max;
            } else {
                cumplePrecio = precioInmueble >= min;
            }
        }

        return cumpleCiudad && cumpleTipo && cumpleOperacion && cumplePrecio;
    });

    renderInmuebles(inmueblesFiltrados);
}

// Función para extraer el valor numérico del precio
export function extractPriceValue(priceString) {
    return parseFloat(priceString.replace(/[^0-9.]/g, ''));
}

// Función para formatear el precio
export function formatPrice(amount, currency) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Función para convertir MXN a USD
export function convertMXNtoUSD(mxnAmount) {
    const exchangeRate = 0.059; // Tasa de cambio aproximada MXN a USD
    return mxnAmount * exchangeRate;
}

// Mostrar detalles de la propiedad en modal
export function openPropertyModal(id) {
    const existingModal = document.querySelector('.property-modal');
    if (existingModal) {
        existingModal.remove();
    }
    const prop = inmuebles.find(p => p.id === id);
    if (!prop) return;
    const modal = document.createElement('div');
    modal.className = 'property-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-left">
                <div class="carousel">
                    ${prop.imagenes.map((img, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="${img}" class="carousel-image" alt="${prop.titulo}">
                        </div>
                    `).join('')}
                    <button class="carousel-prev" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-next" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
                    <div class="carousel-indicators">
                        ${prop.imagenes.map((_, i) => `
                            <span class="indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-right">
                <div class="modal-info">
                    <div class="info-principal">
                        <h3>${prop.titulo}</h3>
                        <div class="price-container">
                            <p class="price" data-price="${extractPriceValue(prop.precio)}">${prop.precio}</p>
                            <button class="convert-currency-btn" title="Convertir a USD">
                                <i class="fas fa-exchange-alt"></i> USD
                            </button>
                        </div>
                        <p class="location"><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
                        <p class="status">Estado: ${prop.estado} - ${prop.disponibilidad}</p>
                        <p class="description">${prop.descripcion}</p>
                        <div class="features-list">
                            ${getAllFeatures(prop.caracteristicas)}
                        </div>
                    </div>
                    <div class="info-documentacion">
                        <h4><i class="fas fa-file-alt"></i> Estado de la Documentación</h4>
                        ${prop.documentacion ? `
                            <div class="doc-item ${prop.documentacion.escrituras === 'En orden' ? 'completo' : 'pendiente'}">
                                <i class="fas fa-file-contract"></i>
                                <span>Escrituras: ${prop.documentacion.escrituras}</span>
                            </div>
                            <div class="doc-item ${prop.documentacion.predial === 'Al corriente' ? 'completo' : 'pendiente'}">
                                <i class="fas fa-receipt"></i>
                                <span>Predial: ${prop.documentacion.predial}</span>
                            </div>
                            <div class="doc-item ${prop.documentacion.servicios === 'Todos los servicios' ? 'completo' : 'pendiente'}">
                                <i class="fas fa-plug"></i>
                                <span>Servicios: ${prop.documentacion.servicios}</span>
                            </div>
                            <div class="doc-item ${prop.documentacion.gravamen === 'Libre de gravamen' ? 'completo' : 'pendiente'}">
                                <i class="fas fa-unlock"></i>
                                <span>Gravamen: ${prop.documentacion.gravamen}</span>
                            </div>
                            ${prop.documentacion.antiguedad ? `<div class="doc-item completo"><i class="fas fa-hourglass-half"></i> <span>Antigüedad: ${prop.documentacion.antiguedad}</span></div>` : ''}
                        ` : '<p>Información de documentación no disponible</p>'}
                    </div>
                    <div style="text-align:center; margin: 18px 0 0 0; display: flex; flex-direction: column; gap: 8px;">
                        ${prop.ubicacion_link ? `<a href='${prop.ubicacion_link}' target='_blank' rel='noopener' class='contact-button' style='background:#222;'>Ver ubicación en Google Maps</a>` : ''}
                        <a href='https://wa.me/529981477653?text=Estoy%20interesado%20en%20${encodeURIComponent(prop.titulo)}%20-%20Contacto:%20mnieto@grn.com.mx' class='contact-button' style='background:#3498db;'><i class='fab fa-whatsapp'></i> Contactar</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Forzar un reflow para que la transición funcione
    modal.offsetHeight;
    // Agregar la clase active inmediatamente después de agregar el modal al DOM
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    // Añadir funcionalidad al botón de conversión
    const convertBtn = modal.querySelector('.convert-currency-btn');
    const priceElement = modal.querySelector('.price');
    let isUSD = false;

    convertBtn.addEventListener('click', () => {
        const priceValue = parseFloat(priceElement.dataset.price);
        if (!isUSD) {
            // Convertir a USD
            const usdPrice = convertMXNtoUSD(priceValue);
            priceElement.textContent = formatPrice(usdPrice, 'USD');
            convertBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> MXN ';
        } else {
            // Volver a MXN
            priceElement.textContent = formatPrice(priceValue, 'MXN');
            convertBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> USD';
        }
        isUSD = !isUSD;
    });

    // Variables para el carrusel
    let currentIndex = 0;
    const carouselItems = modal.querySelectorAll('.carousel-item');
    const indicators = modal.querySelectorAll('.indicator');
    const prevButton = modal.querySelector('.carousel-prev');
    const nextButton = modal.querySelector('.carousel-next');

    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        carouselItems[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    // Event listeners para navegación
    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(newIndex);
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(newIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.stopPropagation();
            showSlide(index);
        });
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    });

    // Navegación con teclado
    function handleKeyPress(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        } else if (e.key === 'ArrowLeft') {
            const newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(newIndex);
        } else if (e.key === 'ArrowRight') {
            const newIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(newIndex);
        }
    }

    document.addEventListener('keydown', handleKeyPress);
}

// Obtener etiquetas para las imágenes según el índice
export function getImageLabel(index) {
    return ''; // Retornamos string vacío para no mostrar etiquetas
}

// Nueva función para mostrar todas las características con íconos (sin puntos suspensivos)
function getAllFeatures(caracteristicas) {
    return caracteristicas.map(f => `<span>${getFeatureIcon(f)} ${f}</span>`).join('');
}

// Devuelve el ícono adecuado según la característica
export function getFeatureIcon(feature) {
    const icons = {
        'Habitaciones': '<i class="fas fa-bed"></i>',
        'Baños': '<i class="fas fa-bath"></i>',
        'Piscina': '<i class="fas fa-swimmer"></i>',
        'Jardín': '<i class="fas fa-tree"></i>',
        'Terraza': '<i class="fas fa-umbrella-beach"></i>',
        'Balcón': '<i class="fas fa-archway"></i>',
        'Alberca': '<i class="fas fa-water"></i>',
        'Vista al Mar': '<i class="fas fa-water"></i>',
        'Terraza Privada': '<i class="fas fa-umbrella-beach"></i>',
        'Área de BBQ': '<i class="fas fa-fire"></i>',
        'Patio': '<i class="fas fa-leaf"></i>',
        'Cerca del Mar': '<i class="fas fa-water"></i>',
        'Estacionamiento': '<i class="fas fa-parking"></i>',
        'Cine': '<i class="fas fa-film"></i>',
        'Gimnasio': '<i class="fas fa-dumbbell"></i>',
        'Muelle Privado': '<i class="fas fa-anchor"></i>',
        'Cenote Privado': '<i class="fas fa-water"></i>',
        'm²': '<i class="fas fa-ruler-combined"></i>'
    };
       
    // Comprobar específicamente para metros cuadrados
    if (feature.includes('m²')) {
        return icons['m²'];
    }
    
    // Comprobación para otras características
    for (let key in icons) {
        if (feature.includes(key)) {
            return icons[key];
        }
    }
    return '<i class="fas fa-check"></i>'; // Ícono de check por defecto
}

// Configurar los eventos de las tarjetas de propiedades
export function setupPropertyCards() {
    // Configurar eventos de filtros
    const ciudad = document.getElementById('ciudad');
    if (ciudad) ciudad.addEventListener('change', filtrarInmuebles);
    const tipo = document.getElementById('tipo');
    if (tipo) tipo.addEventListener('change', filtrarInmuebles);
    const operacion = document.getElementById('operacion');
    if (operacion) operacion.addEventListener('change', filtrarInmuebles);
    const precio = document.getElementById('precio');
    if (precio) precio.addEventListener('change', filtrarInmuebles);

    // Configurar eventos de las tarjetas de propiedades
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach((card) => {
        const propertyId = parseInt(card.getAttribute('data-id'));
        if (propertyId) {
            card.addEventListener('click', () => openPropertyModal(propertyId));
        }
    });
}

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderInmuebles();
    setupPropertyCards();
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('view-gallery')) {
            const idx = e.target.getAttribute('data-idx');
            showGallery(idx);
        }
    });
    
    // Filtrado
    const ciudadSelect = document.getElementById('ciudad');
    const tipoSelect = document.getElementById('tipo');
    const precioSelect = document.getElementById('precio');
    
    if (ciudadSelect) ciudadSelect.addEventListener('change', filtrarInmuebles);
    if (tipoSelect) tipoSelect.addEventListener('change', filtrarInmuebles);
    if (precioSelect) precioSelect.addEventListener('change', filtrarInmuebles);
});

// Estilos para la galería (puedes mover esto a propiedades.css)
const galeriaEstilos = document.createElement('style');
galeriaEstilos.innerHTML = `
.gallery-modal {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}
.gallery-content {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    max-width: 700px;
    width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    text-align: center;
    position: relative;
}
.close-gallery {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
}
.gallery-images {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
}
.gallery-images img {
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
`;
document.head.appendChild(galeriaEstilos);

export function getMainFeatures(caracteristicas) {
    const icons = {
        habitaciones: '<i class="fas fa-bed"></i>',
        banos: '<i class="fas fa-bath"></i>',
        metros: '<i class="fas fa-ruler-combined"></i>'
    };
    let hab = caracteristicas.find(f => f.toLowerCase().includes('habita'));
    let ban = caracteristicas.find(f => f.toLowerCase().includes('baño') || f.toLowerCase().includes('baños'));
    let m2 = caracteristicas.find(f => f.includes('m²'));
    let main = [];
    if (hab) main.push(`${icons.habitaciones} ${hab}`);
    if (ban) main.push(`${icons.banos} ${ban}`);
    if (m2) main.push(`${icons.metros} ${m2}`);
    let extra = caracteristicas.length > 3 ? '<span style="font-size:1.5em;vertical-align:middle;">...</span>' : '';
    return main.map(f => `<span>${f}</span>`).join('') + extra;
}