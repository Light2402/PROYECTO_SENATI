// Datos de vuelos para cada maravilla
const flightsDB = {
    "peru": {
        aeropuerto: "Aeropuerto Internacional Alejandro Velasco Astete (CUZ)",
        ciudad: "Cusco, Perú",
        aerolineas: [
            {
                nombre: "LATAM Airlines",
                descripcion: "Vuelos diarios desde Lima. Duración aproximada: 1 hora.",
                tipo: "Nacional"
            },
            {
                nombre: "Avianca",
                descripcion: "Conexiones internacionales con escalas en Bogotá o Lima.",
                tipo: "Internacional"
            }
        ],
        traslado: "Desde Cusco, el viaje continúa en tren o autobús hacia Aguas Calientes (3-4 horas).",
        imagen: "images/cusco-airport.jpg"
    },
    "mexico": {
        aeropuerto: "Aeropuerto Internacional de Cancún (CUN)",
        ciudad: "Cancún, México",
        aerolineas: [
            {
                nombre: "Aeroméxico",
                descripcion: "Vuelos directos desde Ciudad de México y conexiones internacionales.",
                tipo: "Nacional/Internacional"
            },
            {
                nombre: "Interjet",
                descripcion: "Opciones económicas con rutas desde varios destinos en México.",
                tipo: "Nacional"
            }
        ],
        traslado: "Desde Cancún, el trayecto en autobús o coche toma aproximadamente 3-4 horas.",
        imagen: "images/cancun-airport.jpg"
    },
    "brasil": {
        aeropuerto: "Aeropuerto Internacional de Río de Janeiro (GIG)",
        ciudad: "Río de Janeiro, Brasil",
        aerolineas: [
            {
                nombre: "GOL Airlines",
                descripcion: "Vuelos desde São Paulo y otras ciudades brasileñas.",
                tipo: "Nacional"
            },
            {
                nombre: "LATAM Airlines",
                descripcion: "Conexiones internacionales con escalas en São Paulo.",
                tipo: "Internacional"
            }
        ],
        traslado: "Desde el aeropuerto, el acceso al Corcovado se realiza mediante taxi o teleférico.",
        imagen: "images/rio-airport.jpg"
    },
    "italia": {
        aeropuerto: "Aeropuerto de Roma Fiumicino (FCO)",
        ciudad: "Roma, Italia",
        aerolineas: [
            {
                nombre: "Alitalia",
                descripcion: "La aerolínea nacional italiana con vuelos directos desde Europa y América.",
                tipo: "Internacional"
            },
            {
                nombre: "Ryanair",
                descripcion: "Opciones low-cost desde varios destinos europeos.",
                tipo: "Europeo"
            }
        ],
        traslado: "Desde Fiumicino, el traslado al centro de Roma toma aproximadamente 45 minutos.",
        imagen: "images/roma-airport.jpg"
    },
    "india": {
        aeropuerto: "Aeropuerto internacional Indira Gandhi (DEL)",
        ciudad: "Nueva Delhi, India",
        aerolineas: [
            {
                nombre: "Air India",
                descripcion: "La aerolínea nacional con vuelos directos desde Medio Oriente y Asia.",
                tipo: "Internacional"
            },
            {
                nombre: "IndiGo",
                descripcion: "La aerolínea low-cost más grande de India.",
                tipo: "Nacional"
            }
        ],
        traslado: "Desde Delhi, el viaje al Taj Mahal en Agra toma aproximadamente 3 horas.",
        imagen: "images/delhi-airport.jpg"
    },
    "jordania": {
        aeropuerto: "Aeropuerto internacional Queen Alia (AMM)",
        ciudad: "Amán, Jordania",
        aerolineas: [
            {
                nombre: "Royal Jordanian",
                descripcion: "La aerolínea nacional jordana con conexiones globales.",
                tipo: "Internacional"
            },
            {
                nombre: "Emirates",
                descripcion: "Vuelos desde Dubai con conexiones a Petra.",
                tipo: "Internacional"
            }
        ],
        traslado: "Desde Amán, el viaje a Petra toma aproximadamente 3 horas en coche.",
        imagen: "images/amman-airport.jpg"
    },
    "china": {
        aeropuerto: "Aeropuerto internacional de Pekín Capital (PEK)",
        ciudad: "Pekín, China",
        aerolineas: [
            {
                nombre: "Air China",
                descripcion: "La aerolínea nacional china con vuelos directos desde Asia y Europa.",
                tipo: "Internacional"
            },
            {
                nombre: "China Southern",
                descripcion: "Conexiones desde el sur de Asia y Oceanía.",
                tipo: "Internacional"
            }
        ],
        traslado: "Desde Pekín, el acceso a la Gran Muralla se realiza mediante tren o autobús (1-2 horas).",
        imagen: "images/beijing-airport.jpg"
    }
};

// Función para inicializar animaciones o interacciones si es necesario
document.addEventListener('DOMContentLoaded', function() {
    // Aquí se pueden agregar interacciones específicas para la página de vuelos
    console.log('Página de vuelos cargada');
});