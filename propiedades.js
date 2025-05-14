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
        descripcion: `Adquiere este penthouse nuevo y completamente amueblado en Lagunas de Mayakoba, súper bien ubicado con una de las mejores vistas de todo el complejo.\nÚnico dueño, documentación en orden y no se ha usado, ¡Estrénalo!\n\nDistribución:\n- Cocina integral\n- Sala, Comedor con terraza\n- 2 recámaras\n- 2 baños completos\n- Área de lavado (con lava secadora)\n- Aires acondicionados\n- 1 lugar de estacionamiento\n- Elevador\n- Casa club\n- Alberca\n- Área de kayak\n- Business center\n\nAmenidades:\nTerraza, Aire acondicionado, Amueblado, Cocina integral, Elevador, Fraccionamiento privado, Seguridad 24 horas, Alberca, Área de juegos infantiles, Gimnasio, Roof top con jacuzzi y asadores.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 1/inmueble 1 (1).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (2).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (3).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (4).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (5).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (6).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (7).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (8).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (9).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (10).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (11).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (12).jpg",
            "inmobiliaria-logos/inmueble 1/inmueble 1 (13).jpg",
           
            
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
        descripcion: `Invierte en este departamento de 2 habitaciones con 88 m² y amenidades de lujo, se encuentra en la torre 3 y entrega en diciembre 2026.\nEstá súper ubicado en Avenida Huayacan, nueva zona de crecimiento con la mayor plusvalía de Cancun.\nCuenta con 1 lugar de estacionamiento y está en piso 5.\nComplejo de 4 torres de 11 niveles. Torre 1 completamente vendida!!\nTenemos departamentos disponibles en:\nTorre 4 Entrega diciembre 2025\nTorre 3 Entrega en diciembre 2026\nDepartamentos desde 1 hasta 4 habitaciones e impresionantes PH de 2 niveles y alberca privada.\nLas mejores áreas comunes, estacionamiento techado, área comercial y lujosos acabados.\nMás de 25 amenidades: alberca, elevadores, lobby, gimnasio, coworking, ludoteca, spa, gamer room, juegos infantiles, asadores, pet park, jogging track, boliche, salón de eventos, snack bar, pool bar, cancha de paddle, cancha de tenis, cancha de futbol infantil, cancha de usos múltiples, skate park, junior club, senior club, garage band, cinema, seguridad, control de acceso.\nEntrega a partir de 2025 hasta 2027.\nFormas de pago:\nOpción 1: Apártalo con $50,000MN, 30% de enganche, 70% contra entrega.\nOpción 2: Apártalo con $50,000MN, 30% de enganche, 40% diferido, 30% contra entrega.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 2/inmueble 2 (1).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (2).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (3).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (4).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (5).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (6).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (7).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (8).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (9).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (10).jpg",
            "inmobiliaria-logos/inmueble 2/inmueble 2 (11).jpg",
          
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
        descripcion: `Hermoso departamento de entrega inmediata en SLS.\n2 habitaciones, family room que se puede convertir en 3era habitación, 3 baños completos, cocina italiana, cuarto de servicio con baño completo, 2 lugares de estacionamiento, vistas panorámicas, bodega, ubicado en nivel 3.\nLas mejores amenidades, calidad y lujo.\nAmenidades: Acceso a la playa, estacionamiento techado, frente al agua, muelle de carga, terraza, vista al mar, aire acondicionado, cocina integral, cuarto de servicio, elevador, fraccionamiento privado, hidroneumático, oficina, seguridad 24 horas, alberca, área de juegos infantiles, cancha de pádel, cancha de tenis, cine, gimnasio, jacuzzi, salón de usos múltiples.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 3/inmueble 3 (1).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (2).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (3).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (4).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (5).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (6).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (7).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (8).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (9).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (10).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (11).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (12).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (13).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (14).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (15).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (16).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (17).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (18).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (19).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (20).jpg",
            "inmobiliaria-logos/inmueble 3/inmueble 3 (21).jpg",
       
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
        descripcion: `Invierte en uno de estos departamentos dentro de la Zona Cumbres en Cancún sobre la Av. Luis Donaldo Colosio, +15 amenidades tipo resort y una gama de servicios pensados en facilitar la administración de rentas Airbnb para los inversionistas del proyecto, las torres de departamentos más altas de la zona con vistas hacia la laguna de Nichupté.\nComplejo de 6 torres con 115 unidades en 22 niveles con vistas panorámicas espectaculares!! Y centro comercial a solo unos pasos para tu mayor comodidad.\nDepartamentos de 1,2 y 3 habitaciones con lock off. Entrega en febrero 2026.\nAmenidades: Piscina y piscina para niños, asoleadero, cabañas, parrillas, patio de juegos, bar terraza, cine/multifuncional, coworking, gimnasio, sala de juego, cuarto de juegos, bar deportivo, opción a adquirir tu departamento amueblado y decorado (llave en mano) o con línea blanca, paquetes disponibles 6 meses antes de la entrega.\nEsquemas de pago con apartado $20,000. Opción 1: Enganche 50%, construcción 40%, entrega 10%, descuento: 12%. Opción 2: Enganche 25%, diferido 65%, entrega 10%, descuento -9%. Opción 3: Enganche 10%, diferido 20%, entrega 70%, descuento 0%. Opción 4: Enganche 30%, entrega 70%, descuento 3%.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 4/inmueble 4 (1).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (2).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (3).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (4).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (5).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (6).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (7).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (8).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (9).jpg",
            "inmobiliaria-logos/inmueble 4/inmueble 4 (10).jpg",
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
        descripcion: `Invierte en este moderno y súper ubicado complejo de departamentos de 1 y 2 habitaciones con vistas a la laguna y zona hotelera, con más de 20 amenidades y muy cerca de la universidad Anáhuac, zona hotelera y aeropuerto de Cancún.\nAmenidades: Alberca familiar, para adultos y chapoteadero, pista para correr, ciclo vía con bicicletas, cine para 20 personas, coworking, salas de juntas, sala de juegos, estudio de grabación, espacios para fotografías icónicas, área infantil interior y otra exterior, gimnasio interior y otro exterior, área de yoga y tinas de hielo, canchas de pádel, cancha de basquetbol, áreas verdes, elevadores, lobby, mirador terraza, salón de eventos, área de asadores, pet park, zona de hamacas.\nSe entregan en diciembre de 2026.\nFormas de pago: Apartado con $100,000.00, enganche diferido a la entrega 30%-70%, 30%-40%-30%, 50%-50%, 70%-30%, 90%-10%. Con descuentos desde el 3 hasta el 10% según el plan que se elige.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 5/inmueble 5 (1).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (2).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (3).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (4).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (5).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (6).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (7).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (8).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (9).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (10).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (11).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (12).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (13).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (14).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (15).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (16).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (17).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (18).jpg",
            "inmobiliaria-logos/inmueble 5/inmueble 5 (19).jpg"

            
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
        descripcion: `Invierte en uno de estos departamentos de 1, 2 o 3 habitaciones, con increíbles vistas de la laguna Nichupté y Zona Hotelera, ubicación estratégica en blvd. Colosio, cerca de todo!!!\nComplejo de 4 torres de 21 pisos cada una y más de 20 amenidades de lujo para disfrutar o sacar el máximo provecho de tu inversión!!\nAmenidades: Albercas (familiar, adultos y niños), gimnasio, golf virtual, snack bar, ciclovía, tenis, trampolines, balcón, estacionamiento techado, vista al agua, cocina integral, elevador, fraccionamiento privado, hidroneumático, seguridad 24 horas, mascotas permitidas, alberca, área de juegos infantiles, cancha de pádel, cancha de tenis, fogatero, gimnasio, jacuzzi, salón de usos múltiples, lobby, jacuzzis, zona TRX, boliche, business center, minigolf, padel, juegos infantiles, concierge, pool bar, spa, bar sky view, streaming room, skate park, futbol infantil, asadores, área comercial, asoleaderos, ludoteca, salón de eventos, junior club, pet park, cancha multiusos, área de picnic, salón de fiestas infantil.\nEntrega a finales de 2027.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 6/inmueble 6 (1).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (2).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (3).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (4).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (5).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (6).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (7).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (8).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (9).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (10).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (11).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (12).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (13).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (14).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (15).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (16).jpg",
            "inmobiliaria-logos/inmueble 6/inmueble 6 (17).jpg"
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
        descripcion: `Disfruta de este magnífico desarrollo con excelente ubicación en Cancún, sobre avenida Colosio.\nDistribución del modelo Ohana en Planta baja: 57 m², vista norte, 1 habitación, 1.5 baños, sala-comedor, cocina integral, zona de lavandería, terraza.\nÚLTIMOS DEPARTAMENTOS DESDE 50M² HASTA 79 M², 1 Y 2 HABITACIONES.\nAMENIDADES: Alberca, áreas verdes, walking trail, estacionamiento techado, jardín, riego por aspersión, terraza, cocina integral, elevador, fraccionamiento privado, hidroneumático, seguridad 24 horas, mascotas permitidas, alberca, área de juegos infantiles, cancha de pádel, cancha de tenis, fogatero, fitness club, yoga deck, pista de jogging, canchas de padel, magic park, BBQ zone, pet park, spa y más...\nEntrega en Abril 2025 nivel 1 y 2. Etapa final de 1ra fase en octubre de 2025.`,
        imagenes: [
            "inmobiliaria-logos/inmueble 7/inmueble 7 (1).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (2).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (3).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (4).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (5).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (6).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (7).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (8).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (9).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (10).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (11).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (12).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (13).jpg",
            "inmobiliaria-logos/inmueble 7/inmueble 7 (14).jpg",
      
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
    lista.forEach((prop, idx) => {
        const card = document.createElement('div');
        card.className = 'property-card';
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
        
        // Agregar evento de clic a la tarjeta
        card.addEventListener('click', () => openPropertyModal(idx));
        
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
export function openPropertyModal(idx) {
    const existingModal = document.querySelector('.property-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const prop = inmuebles[idx];
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
                <div style="text-align:center; margin-top: 10px; display: flex; justify-content: center; gap: 16px;">
                    ${prop.ubicacion_link ? `<a href="${prop.ubicacion_link}" target="_blank" rel="noopener" class="contact-button" style="background:#222;">Ver ubicación en Google Maps</a>` : ''}
                    <a href="https://wa.me/529981477653?text=Estoy%20interesado%20en%20${encodeURIComponent(prop.titulo)}%20-%20Contacto:%20mnieto@grn.com.mx" class="contact-button" style="background:#3498db;"><i class="fab fa-whatsapp"></i> Contactar</a>
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
    document.getElementById('ciudad').addEventListener('change', filtrarInmuebles);
    document.getElementById('tipo').addEventListener('change', filtrarInmuebles);
    document.getElementById('operacion').addEventListener('change', filtrarInmuebles);
    document.getElementById('precio').addEventListener('change', filtrarInmuebles);

    // Configurar eventos de las tarjetas de propiedades
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach((card, index) => {
        card.addEventListener('click', () => openPropertyModal(index));
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