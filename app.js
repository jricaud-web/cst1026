// --- TRIPS CONFIG & DATA ---
const TRIP_START_DATE = new Date("September 10, 2026 08:00:00").getTime();

// --- SITE TEXTS & DATA INJECTION LOGIC ---
function injectSiteTexts() {
  // Page titles
  document.title = SITE_TEXTS.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', SITE_TEXTS.pageMetaDescription);
  }

  // Hero Section
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.innerHTML = `${SITE_TEXTS.heroTitle}<br><span class="emoji-text">${SITE_TEXTS.heroEmoji}</span>`;
  }

  // Countdown Labels
  setElementText("lbl-days", SITE_TEXTS.countdownDaysLabel);
  setElementText("lbl-hours", SITE_TEXTS.countdownHoursLabel);
  setElementText("lbl-mins", SITE_TEXTS.countdownMinsLabel);
  setElementText("lbl-secs", SITE_TEXTS.countdownSecsLabel);

  // Crew Section Title
  setElementText("crew-title", SITE_TEXTS.crewTitle);

  // Basecamps Section
  setElementText("basecamps-title", SITE_TEXTS.basecampsTitle);
  setElementText("basecamps-subtitle", SITE_TEXTS.basecampsSubtitle);

  // North Camp Card
  setElementText("north-camp-badge", SITE_TEXTS.northCamp.badge);
  setElementText("north-camp-title", SITE_TEXTS.northCamp.title);
  setElementText("north-camp-loc", SITE_TEXTS.northCamp.parcela);
  setElementText("north-camp-tagline", SITE_TEXTS.northCamp.tagline);
  setElementText("north-camp-desc", SITE_TEXTS.northCamp.description);
  setElementText("north-camp-spots-title", SITE_TEXTS.northCamp.spotsTitle);

  // South Camp Card
  setElementText("south-camp-badge", SITE_TEXTS.southCamp.badge);
  setElementText("south-camp-title", SITE_TEXTS.southCamp.title);
  setElementText("south-camp-loc", SITE_TEXTS.southCamp.parcela);
  setElementText("south-camp-tagline", SITE_TEXTS.southCamp.tagline);
  setElementText("south-camp-desc", SITE_TEXTS.southCamp.description);
  setElementText("south-camp-spots-title", SITE_TEXTS.southCamp.spotsTitle);

  // Route / Map Section
  setElementText("route-title", SITE_TEXTS.routeTitle);
  setElementText("route-subtitle", SITE_TEXTS.routeSubtitle);
  setElementText("route-tip", SITE_TEXTS.routeTip);

  // Spots Section
  setElementText("spots-title", SITE_TEXTS.spotsTitle);
  setElementText("spots-subtitle", SITE_TEXTS.spotsSubtitle);

  // Divider Section
  setElementText("divider-title", SITE_TEXTS.dividerTitle);
  setElementText("divider-quote", SITE_TEXTS.dividerQuote);

  // Packing Section
  setElementText("packing-title", SITE_TEXTS.packingTitle);
  setElementText("packing-subtitle", SITE_TEXTS.packingSubtitle);

  // Footer Section
  setElementText("footer-divider-title", SITE_TEXTS.dividerTitle);
  setElementText("footer-divider-quote", SITE_TEXTS.dividerQuote);
  setElementText("footer-copy", SITE_TEXTS.footerCopy);
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function generateCrewCards() {
  const crewGrid = document.getElementById("crew-grid-container");
  if (!crewGrid) return;
  
  crewGrid.innerHTML = Object.keys(CREW_DATA).map(key => {
    const member = CREW_DATA[key];
    const isLocal = key === "javier" || member.role.toLowerCase().includes("local");
    const localClass = isLocal ? " crew-local" : "";
    
    return `
      <div class="glass-card crew-card${localClass}">
        <div class="avatar-wrapper">
          <div class="avatar-border"></div>
          <div class="avatar-inner">
            <img src="assets/crew-${key}.jpg" alt="${member.name}">
          </div>
        </div>
        <h3 class="crew-name" style="white-space: nowrap;">${member.name}</h3>
        <div class="crew-role">${member.role}</div>
        <p class="crew-info">${member.info}</p>
      </div>
    `;
  }).join('');
}

// Inject UI texts and generate crew cards initially
injectSiteTexts();
generateCrewCards();


// --- DYNAMIC DATA INJECTION FOR PIN STYLES ---
const markerStyles = document.createElement('style');
markerStyles.innerHTML = `
  .custom-marker-north {
    width: 14px !important;
    height: 14px !important;
    background: #06b6d4;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
    transition: transform 0.2s ease;
  }
  .custom-marker-south {
    width: 14px !important;
    height: 14px !important;
    background: #f97316;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.8);
    transition: transform 0.2s ease;
  }
  .custom-marker-camp-north {
    width: 20px !important;
    height: 20px !important;
    background: #06b6d4;
    border: 2px solid #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(6, 182, 212, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: bold;
    color: white;
  }
  .custom-marker-camp-south {
    width: 20px !important;
    height: 20px !important;
    background: #f97316;
    border: 2px solid #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(249, 115, 22, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: bold;
    color: white;
  }
  .custom-marker-north:hover, .custom-marker-south:hover {
    transform: scale(1.3);
  }
`;
document.head.appendChild(markerStyles);

// --- INITIALIZE COUNTDOWN TIMER ---
function updateCountdown() {
  const now = new Date().getTime();
  const distance = TRIP_START_DATE - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = `
      <div class="glass-card" style="padding: 1rem 3rem; border-top: 3px solid var(--primary-ocean);">
        <h3 class="text-gradient-sunset" style="font-size: 1.8rem;">¡EL SURF TRIP ESTÁ EN CURSO! 🏄‍♂️🔥</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">Viviendo el sueño en la autopista 1.</p>
      </div>
    `;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- INITIALIZE LEAFLET MAP ---
let map;
function initMap() {
  // Center map between Malibu and Carlsbad
  map = L.map('map', {
    scrollWheelZoom: false
  }).setView([33.55, -118.1], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Basecamps coordinates
  const camps = [
    {
      name: "North Basecamp: Leo Carrillo #61",
      coords: [34.045, -118.935],
      type: "camp-north",
      desc: "Tierra Santa - Parcela 61. Leo Carrillo State Campground."
    },
    {
      name: "South Basecamp: South Carlsbad #206",
      coords: [33.098, -117.320],
      type: "camp-south",
      desc: "El Penthouse - Parcela 206."
    }
  ];

  // Add Camp Base Markers
  camps.forEach(camp => {
    const className = camp.type === 'camp-north' ? 'custom-marker-camp-north' : 'custom-marker-camp-south';
    const textLabel = camp.type === 'camp-north' ? '⛺ N' : '⛺ S';
    const markerIcon = L.divIcon({
      className: className,
      html: textLabel
    });

    L.marker(camp.coords, { icon: markerIcon })
      .addTo(map)
      .bindPopup(`<h3><strong>${camp.name}</strong></h3><p>${camp.desc}</p>`);
  });

  // Add Surf Spots Markers
  SPOTS_DATA.forEach(spot => {
    const className = spot.camp === 'north' ? 'custom-marker-north' : 'custom-marker-south';
    const markerIcon = L.divIcon({ className: className });

    L.marker([spot.lat, spot.lng], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`
        <h3><strong>${spot.name}</strong></h3>
        <p><strong>Tipo:</strong> ${spot.type}</p>
        <p><strong>Marea Ideal:</strong> ${spot.tide}</p>
        <button onclick="scrollToSpot('${spot.name}')" style="margin-top: 8px; background:var(--primary-ocean); color:#000; border:none; padding:4px 8px; border-radius:4px; font-size:11px; cursor:pointer; font-weight:bold;">Ver ficha técnica</button>
      `);
  });
}

// Map initiation fallback if map container exists
if (document.getElementById('map')) {
  initMap();
}

// Scroll to specific spot
function scrollToSpot(spotName) {
  const cleanName = spotName.split(' ')[0].split('(')[0].trim().toLowerCase();
  const cards = document.querySelectorAll('.spot-card');
  for (let card of cards) {
    if (card.id.includes(cleanName)) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Temporary highlighted border
      card.style.borderColor = 'var(--primary-ocean)';
      card.style.boxShadow = '0 0 20px var(--primary-ocean-glow)';
      setTimeout(() => {
        card.style.borderColor = 'var(--glass-border)';
        card.style.boxShadow = '0 10px 30px var(--glass-shadow)';
      }, 2000);
      
      // Close map popup if open
      if (map) {
        map.closePopup();
      }
      break;
    }
  }
}

// --- SURF SPOTS GENERATION ---
function injectSurfSpots() {
  const container = document.getElementById("spots-grid-container");
  if (!container) return;

  container.innerHTML = "";

  SPOTS_DATA.forEach(spot => {
    const isSouth = spot.camp === "south";
    const cleanId = spot.name.split(' ')[0].split('(')[0].trim().toLowerCase();
    const imageSrc = spot.image || 'assets/beach-cover.jpg';

    const card = document.createElement("div");
    card.id = `spot-${cleanId}`;
    card.className = `glass-card spot-card ${isSouth ? 'south-spot' : ''}`;
    card.innerHTML = `
      <div class="spot-img-container">
        <img src="${imageSrc}" alt="${spot.name}" class="spot-img" onerror="this.onerror=null; this.src='assets/beach-cover.jpg';">
      </div>
      <div class="spot-header">
        <h3 class="spot-name">${spot.name}</h3>
        <span class="spot-type">${spot.type}</span>
      </div>
      <div class="spot-details">
        <span><strong>${SITE_TEXTS.spotTideLabel}</strong> ${spot.tide}</span>
        <span><strong>${SITE_TEXTS.spotSwellLabel}</strong> ${spot.swell}</span>
        <span style="margin-top: 4px; color: var(--text-light);">${spot.wave}</span>
        ${spot.surflineUrl ? `
        <a href="${spot.surflineUrl}" target="_blank" style="margin-top: 12px; display: inline-flex; align-items: center; justify-content: center; gap: 0.35rem; background: rgba(6, 182, 212, 0.08); border: 1px solid var(--primary-ocean); color: var(--primary-ocean); padding: 0.4rem 0.8rem; border-radius: var(--border-radius-sm); font-size: 0.75rem; text-decoration: none; font-weight: 600; text-align: center; transition: all 0.2s ease;" onmouseover="this.style.background='var(--primary-ocean)'; this.style.color='var(--text-dark)'" onmouseout="this.style.background='rgba(6, 182, 212, 0.08)'; this.style.color='var(--primary-ocean)'">
          ${SITE_TEXTS.spotLiveReportBtn}
        </a>
        ` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}
injectSurfSpots();


// --- PACKING LIST CHECKLIST LOGIC (3-BOX ESSENTIALS) ---
// Packing states and interactivity removed as gear checklist is now static gear display

// --- SCROLL REVEAL EFFECT ---
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Trigger initially for elements in view
