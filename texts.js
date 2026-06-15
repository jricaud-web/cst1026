// ==========================================
// CONFIGURACIÓN DE TEXTOS Y DATOS DEL SITIO
// ==========================================
// Podés editar cualquier texto acá adentro y se actualizará automáticamente en la web.

const SITE_TEXTS = {
  // Título de la pestaña del navegador
  pageTitle: "California.SURFtrip_10.26 🌟🌊 | Official Site",
  pageMetaDescription: "Sitio oficial de la edición 2026 del Surf Trip anual en California. Fechas, basecamps, picos de surf, tripulación y planificador de fogón.",

  // Sección Cabecera (Hero)
  heroTitle: "California.SURFtrip_10.26",
  heroEmoji: "🌟🌊",

  // Etiquetas de Cuenta Regresiva
  countdownDaysLabel: "Días",
  countdownHoursLabel: "Horas",
  countdownMinsLabel: "Mins",
  countdownSecsLabel: "Segs",

  // Sección Crew
  crewTitle: "Crew 2026",


  // Sección Campamentos Base
  basecampsTitle: "Campamentos Base",
  basecampsSubtitle: "Nuestros centros de comando estratégicos a lo largo de la autopista PCH",

  northCamp: {
    badge: "North Basecamp",
    title: "Leo Carrillo State Campground",
    parcela: "📍 Parcela 61",
    tagline: "Tierra Santa",
    description: "Un refugio sagrado protegido de la prisa del mundo, a metros de una de las derechas más largas del Sur de California. El bosque es tu amigo, la roca tu destino, y la vas a buscar.",
    spotsTitle: "Picos accesibles:"
  },

  southCamp: {
    badge: "South Basecamp",
    title: "South Carlsbad State Campground",
    parcela: "📍 Parcela 206",
    tagline: "El Penthouse",
    description: "Rumbo al nuevo paisaje, donde el cielo se vuelve mar, donde el paso es más liviano, pues la ley es de libertad. El Expreso Horizonte, cargado de ilusiones, los lleva en sus vagones más allá. Volverán a correr, volverán a jugar, volverán a crecer, al comienzo volverán.",
    spotsTitle: "Picos accesibles:"
  },

  // Sección Mapa
  routeTitle: "Pacific Coast Highway",
  routeSubtitle: "Exploraremos todo el Sur de California desde San Diego hasta Ventura.",
  routeTip: "💡 Los marcadores azules corresponden al Norte; los naranjas corresponden al Sur.",

  // Sección Spots y Pronóstico
  spotsTitle: "Picos Clave",
  spotsSubtitle: "Una selección curada de los picos más icónicos del Sur de California, historia viva de la cultura surfera.",
  spotSwellLabel: "Swell Ideal:",
  spotTideLabel: "Marea:",
  spotTypeLabel: "Tipo de Ola:",
  spotLiveReportBtn: "📈 Reporte en vivo (Surfline)",

  // Banner Divisor Visual
  dividerTitle: "The Coolest",
  dividerQuote: "Escabulléndose por la rendija del destino rumbo a un océano brillante...",

  // Sección Lista de Empaque
  packingTitle: "Checklist de Equipaje",
  packingSubtitle: "Lo único que hay que traer es buena onda, ganas de surfar y...",

  // Modal de Tripulación
  modalFlightTitle: "✈️ Detalles de Vuelo",
  modalQuiverTitle: "🏄‍♂️ Quiver (Tablas)",
  modalGoalTitle: "🎯 Meta del Trip",

  // Pie de Página
  footerLogo: "California.SURFtrip_10.26",
  footerEmoji: "🌟🌊",
  footerCopy: "© 2026 California Surf Trip - Parcela 61 & 206. Creado para el crew."
};

// ==========================================
// DATOS DE LA TRIPULACIÓN
// ==========================================
const CREW_DATA = {
  javier: {
    name: "Javier Ricaud 🇺🇾",
    role: "Guía Local",
    info: "El Peixe, miembro fundador del Surf Trip California, integrante de The Coolest, coordinador logístico."
  },
  leonardo: {
    name: "Leonardo Colistro 🇺🇾",
    role: "Uruguay Crew",
    info: "Gorosito, miembro fundador del Surf Trip California, integrante de The Coolest, tremendo viejo goloso."
  },
  gonzalo: {
    name: "Gonzalo Caride 🇺🇾",
    role: "Uruguay Crew",
    info: "El Guachiapato, catador official de almeja, gran responsable del Surf Trip California en su edición 2026."
  },
  pablo: {
    name: "Pablo Tórtora 🇺🇾",
    role: "Uruguay Crew",
    info: "El Lento, viejo lobo de mar, carroñero profesional, rey de la media paja."
  }
};

// ==========================================
// DATOS DE LOS PICOS DE SURF (SPOTS)
// ==========================================
const SPOTS_DATA = [
  // North Basecamp Spots
  {
    name: "Leo Carrillo",
    camp: "north",
    type: "Reef / Point Break",
    tide: "Low to Mid",
    swell: "S / SW / WNW",
    wave: "Derecha suave y muy larga, ideal para maniobras clásicas.",
    lat: 34.043,
    lng: -118.940,
    surflineUrl: "https://www.surfline.com/surf-report/leo-carrillo/5842041f4e65fad6a770881d",
    image: "assets/spot-leo_carrillo.png"
  },
  {
    name: "Stairs",
    camp: "north",
    type: "Reef Break",
    tide: "Medium",
    swell: "SW / WNW",
    wave: "Pico de roca con derecha e izquierda técnica. Menos concurrido.",
    lat: 34.049,
    lng: -118.968,
    surflineUrl: "https://www.surfline.com/surf-report/stairs/5842041f4e65fad6a770897f",
    image: "assets/spot-stairs.png"
  },
  {
    name: "County Line",
    camp: "north",
    type: "Beach Break / Reef",
    tide: "All Tides",
    swell: "W / NW / SW",
    wave: "Ola muy constante. Izquierdas y derechas divertidas frente al acantilado.",
    lat: 34.053,
    lng: -118.995,
    surflineUrl: "https://www.surfline.com/surf-report/county-line/5842041f4e65fad6a770881e",
    image: "assets/spot-county_line.png"
  },
  {
    name: "Zeroes",
    camp: "north",
    type: "Point / Reef Break",
    tide: "Low to Mid",
    swell: "S / SW",
    wave: "Ubicado en Nicholas Canyon. Derecha rápida y hueca en buenos días.",
    lat: 34.042,
    lng: -118.895,
    surflineUrl: "https://www.surfline.com/surf-report/nicholas-canyon/5842041f4e65fad6a770899d",
    image: "assets/spot-zeroes.png"
  },
  {
    name: "Ventura Point",
    camp: "north",
    type: "Right Point Break",
    tide: "Low to Mid",
    swell: "W / WNW",
    wave: "Derecha clásica y consistente que rompe sobre adoquines y arena frente al parque.",
    lat: 34.275,
    lng: -119.308,
    surflineUrl: "https://www.surfline.com/surf-report/ventura-point/5842041f4e65fad6a7708812",
    image: "assets/spot-ventura_point.jpeg"
  },
  {
    name: "C Street",
    camp: "north",
    type: "Point / Beach Break",
    tide: "All Tides",
    swell: "W / NW / SW",
    wave: "Olas largas y nobles con múltiples picos, perfectas para todo tipo de tablas.",
    lat: 34.273,
    lng: -119.303,
    surflineUrl: "https://www.surfline.com/surf-report/c-street/5842041f4e65fad6a7708811",
    image: "assets/spot-c_street.png"
  },
  {
    name: "Rincon",
    camp: "north",
    type: "Right Point Break",
    tide: "Low to Mid",
    swell: "W / WNW",
    wave: "La reina de la costa. Tres secciones de derechas perfectas e interminables.",
    lat: 34.373,
    lng: -119.479,
    surflineUrl: "https://www.surfline.com/surf-report/rincon/5842041f4e65fad6a770880e",
    image: "assets/spot-rincon.jpg"
  },
  {
    name: "Malibu 1st Point",
    camp: "north",
    type: "Right Point Break",
    tide: "Low to Mid",
    swell: "S / SW",
    wave: "La ola clásica por excelencia de Malibú. Derecha interminable y suave, perfecta para tablón.",
    lat: 34.038,
    lng: -118.677,
    surflineUrl: "https://www.surfline.com/surf-report/malibu-first-point/5842041f4e65fad6a770881c",
    image: "assets/spot-malibu_1st_point.jpg"
  },
  {
    name: "Sunset Point",
    camp: "north",
    type: "Right Point Break",
    tide: "Low to Mid",
    swell: "S / SW / W",
    wave: "Derecha muy suave y protegida del viento, ideal para longboard y principiantes.",
    lat: 34.039,
    lng: -118.557,
    surflineUrl: "https://www.surfline.com/surf-report/sunset-point/5842041f4e65fad6a770897b",
    image: "assets/spot-sunset_point.png"
  },
  // South Basecamp Spots
  {
    name: "Carlsbad",
    camp: "south",
    type: "Beach Break",
    tide: "All Tides",
    swell: "SW / W / NW",
    wave: "Picos rápidos y variables justo enfrente del campamento.",
    lat: 33.158,
    lng: -117.355,
    surflineUrl: "https://www.surfline.com/surf-report/carlsbad-state-beach/5842041f4e65fad6a77088c5",
    image: "assets/spot-carlsbad.png"
  },
  {
    name: "Beacons",
    camp: "south",
    type: "Reef Break",
    tide: "Medium to High",
    swell: "WNW / SW",
    wave: "Ola gorda y suave, ideal para longboard o días tranquilos.",
    lat: 33.064,
    lng: -117.305,
    surflineUrl: "https://www.surfline.com/surf-report/beacons/5842041f4e65fad6a77088a2",
    image: "assets/spot-beacons.jpg"
  },
  {
    name: "Swamis",
    camp: "south",
    type: "Reef / Point Break",
    tide: "Low to Mid",
    swell: "WNW / NW",
    wave: "Derecha clásica del sur de California. Sostiene mucho tamaño y fuerza.",
    lat: 33.036,
    lng: -117.292,
    surflineUrl: "https://www.surfline.com/surf-report/swamis/5842041f4e65fad6a77088a3",
    image: "assets/spot-swamis.jpg"
  },
  {
    name: "Trestles (Lowers/Uppers)",
    camp: "south",
    type: "Cobblestone Reef",
    tide: "Medium",
    swell: "S / SW / WNW",
    wave: "La ola perfecta tipo skatepark. A-frame de clase mundial.",
    lat: 33.383,
    lng: -117.593,
    surflineUrl: "https://www.surfline.com/surf-report/lower-trestles/5842041f4e65fad6a770888a",
    image: "assets/spot-trestles.jpg"
  },
  {
    name: "San Onofre (Old Man's)",
    camp: "south",
    type: "Reef / Beach Break",
    tide: "All Tides",
    swell: "S / SW / WNW",
    wave: "La cuna del surf clásico. Olas larguísimas y lentas para tablón.",
    lat: 33.370,
    lng: -117.575,
    surflineUrl: "https://www.surfline.com/surf-report/san-onofre-old-mans/5842041f4e65fad6a7708888",
    image: "assets/spot-san_onofre.webp"
  }
];

// ==========================================
// CHECKLIST DEL EQUIPAJE (ESENCIALES)
// ==========================================
const PACKING_ITEMS = {
  wetsuit: { label: "Wetsuit", desc: "Traje de Neopreno" },
  botitas: { label: "Botitas", desc: "Protección para rocas" },
  leash: { label: "Leash", desc: "(opcional)" }
};
