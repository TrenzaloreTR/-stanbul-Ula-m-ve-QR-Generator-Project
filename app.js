
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.innerText = isLight ? 'Karanlık Mod' : 'Gündüz Modu';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(console.error);
}

// --- LEAFLET INTERACTIVE MAP ---
// Varsayılan Koordinat (İstanbul)
let map = L.map('map').setView([41.0082, 28.9784], 11);

// Google Haritalar Katmanları (Tile Sunucuları)
const googleStreets = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: 'Google Maps'
});

const googleSatellite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: 'Google Maps Satellite'
});

const googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: 'Google Maps Hybrid'
});

// Varsayılan olarak sokak haritasını ekle
googleStreets.addTo(map);

// Katman Kontrolü Ekle (Kullanıcı seçebilsin diye)
const baseLayers = {
    "Varsayılan Harita": googleStreets,
    "Uydu": googleSatellite,
    "Hibrit": googleHybrid
};
L.control.layers(baseLayers).addTo(map);

// Güzergahları Çiz (Marmaray ve Metrobüs)
const marmarayCoords = transitData.Marmaray.map(st => [st.lat, st.lng]);
const metrobusCoords = transitData.Metrobüs.map(st => [st.lat, st.lng]);

L.polyline(marmarayCoords, {color: '#006633', weight: 5, opacity: 0.8}).addTo(map).bindPopup('Marmaray Hattı');
L.polyline(metrobusCoords, {color: '#e6b800', weight: 5, opacity: 0.8}).addTo(map).bindPopup('Metrobüs Hattı');


// GPS Noktası için özel ikon (Mavi Nokta)
const gpsIcon = L.divIcon({
  className: 'gps-marker',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});
let userMarker = null;

// --- GPS LOGIC ---
const gpsAccuracyEl = document.getElementById('gps-accuracy');
const gpsQualityEl = document.getElementById('gps-quality');

if ('geolocation' in navigator) {
  navigator.geolocation.watchPosition((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const acc = pos.coords.accuracy;
    
    gpsAccuracyEl.innerText = acc.toFixed(1) + ' m';
    let score = Math.max(0, 100 - ((acc - 3) * 2));
    if(score > 100) score = 100;
    gpsQualityEl.innerText = '%' + Math.round(score);
    
    // Haritada konumu güncelle
    if(!userMarker) {
      userMarker = L.marker([lat, lng], {icon: gpsIcon}).addTo(map);
      map.setView([lat, lng], 14); // İlk bulduğunda zoom yap
    } else {
      userMarker.setLatLng([lat, lng]);
    }
  }, (err) => {
    gpsAccuracyEl.innerText = 'Bağlantı Yok';
    gpsQualityEl.innerText = '%0';
  }, {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  });
} else {
  gpsAccuracyEl.innerText = 'Desteklenmiyor';
}

// --- QR KOD LOGIC (Eski Kodlar Aynen Korundu) ---
const qrInput = document.getElementById('qr-input');
const generateQrBtn = document.getElementById('generate-qr-btn');
const qrResult = document.getElementById('qr-result');
const downloadQrBtn = document.getElementById('download-qr-btn');

generateQrBtn.addEventListener('click', () => {
  const text = qrInput.value.trim();
  if (!text) return alert("Lütfen geçerli bir metin girin.");
  
  qrResult.innerHTML = ''; 
  qrResult.style.display = 'flex';
  
  new QRCode(qrResult, {
    text: text, width: 200, height: 200,
    colorDark : "#000000", colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
  downloadQrBtn.style.display = 'block';
});

downloadQrBtn.addEventListener('click', () => {
  const img = qrResult.querySelector('img');
  const qrCanvas = qrResult.querySelector('canvas');
  let url = img && img.src.startsWith('data:') ? img.src : (qrCanvas ? qrCanvas.toDataURL() : '');
  if(url) {
    const a = document.createElement('a');
    a.href = url; a.download = 'QR_Kod.png';
    a.click();
  }
});
