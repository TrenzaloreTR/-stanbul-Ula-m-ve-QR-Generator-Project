
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.innerText = document.body.classList.contains('light-mode') ? 'Karanlık Mod' : 'Gündüz Modu';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log('Güncellendi');
        }
      });
    });
  });
}

// --- LEAFLET MAP ---
let map = L.map('map').setView([41.0082, 28.9784], 11);

const googleStreets = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { maxZoom: 20, attribution: 'Google' }).addTo(map);
const googleSatellite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', { maxZoom: 20 });
const googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { maxZoom: 20 });

L.control.layers({"Harita": googleStreets, "Uydu": googleSatellite, "Hibrit": googleHybrid}).addTo(map);

// ZOOM LOGIC FOR LABELS (Harita uzakken isimler birbirine girmesin diye)
document.body.classList.add('hide-labels');
map.on('zoomend', () => {
  if (map.getZoom() >= 13) {
    document.body.classList.remove('hide-labels');
  } else {
    document.body.classList.add('hide-labels');
  }
});

// Hatları ve Durakları Çiz (Nokta Nokta ve İsimleriyle)
for (const [lineName, stations] of Object.entries(transitData)) {
  const coords = stations.map(s => [s.lat, s.lng]);
  const color = lineColors[lineName] || "#ff0000";
  
  // Ana Çizgi
  L.polyline(coords, {color: color, weight: 5, opacity: 0.8}).addTo(map);
  
  // Noktalar ve İsimler
  stations.forEach(s => {
    L.circleMarker([s.lat, s.lng], {
      radius: 5,
      fillColor: "#fff",
      color: color,
      weight: 2,
      fillOpacity: 1
    }).addTo(map)
      .bindTooltip(s.name, {
        permanent: true,       // İsimler her zaman var
        direction: 'right',    // Sağında dursun
        className: 'station-label' // Kendi özel tasarımımız
      });
  });
}

// GPS Logic
const gpsIcon = L.divIcon({ className: 'gps-marker', iconSize: [20, 20], iconAnchor: [10, 10] });
let userMarker = null;

if ('geolocation' in navigator) {
  navigator.geolocation.watchPosition((pos) => {
    const lat = pos.coords.latitude; const lng = pos.coords.longitude;
    document.getElementById('gps-accuracy').innerText = pos.coords.accuracy.toFixed(1) + ' m';
    let score = Math.max(0, 100 - ((pos.coords.accuracy - 3) * 2));
    document.getElementById('gps-quality').innerText = '%' + Math.round(score > 100 ? 100 : score);
    
    if(!userMarker) {
      userMarker = L.marker([lat, lng], {icon: gpsIcon}).addTo(map);
      map.setView([lat, lng], 14); 
    } else {
      userMarker.setLatLng([lat, lng]);
    }
  }, () => {}, { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 });
}

// QR KOD LOGIC
document.getElementById('generate-qr-btn').addEventListener('click', () => {
  const text = document.getElementById('qr-input').value.trim();
  if (!text) return alert("Lütfen metin girin.");
  const qrResult = document.getElementById('qr-result');
  qrResult.innerHTML = ''; qrResult.style.display = 'flex';
  new QRCode(qrResult, { text: text, width: 200, height: 200 });
  document.getElementById('download-qr-btn').style.display = 'block';
});
