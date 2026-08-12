
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.innerText = isLight ? 'Karanlık Mod' : 'Gündüz Modu';
  drawMap(); 
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => console.error(err));
}

// --- SENSOR VE GPS LOGIC ---
const gpsAccuracyEl = document.getElementById('gps-accuracy');
const gpsQualityEl = document.getElementById('gps-quality');
const instructionEl = document.getElementById('sensor-instructions');
const compassDial = document.getElementById('compass-dial');
const horizonLine = document.getElementById('horizon-line');
const compassBtn = document.getElementById('request-compass');

let userLat = 0, userLng = 0;

if ('geolocation' in navigator) {
  navigator.geolocation.watchPosition((pos) => {
    const acc = pos.coords.accuracy;
    userLat = pos.coords.latitude;
    userLng = pos.coords.longitude;
    
    gpsAccuracyEl.innerText = acc.toFixed(1) + ' m';
    
    let score = Math.max(0, 100 - ((acc - 3) * 2));
    if(score > 100) score = 100;
    gpsQualityEl.innerText = '%' + Math.round(score);
    
    drawMap();
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

function initSensors() {
  compassBtn.style.display = 'none';
  window.addEventListener('deviceorientation', (e) => {
    let heading = null;
    if (e.webkitCompassHeading !== undefined) {
      heading = e.webkitCompassHeading;
    } else if (e.alpha !== null) {
      heading = 360 - e.alpha; 
    }

    const pitch = e.beta; 
    const roll = e.gamma; 

    if (heading !== null) {
      compassDial.style.transform = `rotate(${-heading}deg)`;
    }

    if (pitch !== null && roll !== null) {
      horizonLine.style.transform = `translateY(${pitch * 2}px) rotate(${-roll}deg)`;
      
      let instructions = [];
      if (Math.abs(pitch) > 15 || Math.abs(roll) > 15) {
        instructions.push("Telefonu yere tam paralel tutun.");
      } else {
        if (heading !== null) {
           if (heading > 330 || heading < 30) {
             instructions.push("Doğru açı! Tam Kuzeye bakıyorsunuz.");
           } else {
             instructions.push("Pusula düz. Kuzeye dönmek için telefonu sağa/sola çevirin.");
           }
        } else {
           instructions.push("Cihaz düz konumda, hareket ettirebilirsiniz.");
        }
      }
      instructionEl.innerText = instructions.join(' ');
    }
  }, true);
}

compassBtn.addEventListener('click', () => {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(state => {
      if (state === 'granted') initSensors();
    }).catch(console.error);
  } else {
    initSensors();
  }
});

// --- HARITA LOGIC ---
const canvas = document.getElementById('offlineMap');
const ctx = canvas.getContext('2d');

function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const minLat = 40.75, maxLat = 41.05;
  const minLng = 28.60, maxLng = 29.45;
  
  function mapCoords(lat, lng) {
    const x = ((lng - minLng) / (maxLng - minLng)) * canvas.width;
    const y = canvas.height - ((lat - minLat) / (maxLat - minLat)) * canvas.height;
    return {x, y};
  }

  // Draw Metrobüs
  ctx.beginPath();
  transitData.Metrobüs.forEach((s, i) => {
    const pt = mapCoords(s.lat, s.lng);
    if(i===0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.strokeStyle = '#e6b800';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Draw Marmaray
  ctx.beginPath();
  transitData.Marmaray.forEach((s, i) => {
    const pt = mapCoords(s.lat, s.lng);
    if(i===0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.strokeStyle = '#006633';
  ctx.lineWidth = 4;
  ctx.stroke();

  if (userLat !== 0) {
    const uPt = mapCoords(userLat, userLng);
    ctx.beginPath();
    ctx.arc(uPt.x, uPt.y, 8, 0, 2*Math.PI);
    ctx.fillStyle = '#00e5ff';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  drawMap();
}
window.addEventListener('resize', resizeCanvas);
setTimeout(resizeCanvas, 100);

// --- QR KOD LOGIC ---
const qrInput = document.getElementById('qr-input');
const generateQrBtn = document.getElementById('generate-qr-btn');
const qrResult = document.getElementById('qr-result');
const downloadQrBtn = document.getElementById('download-qr-btn');

generateQrBtn.addEventListener('click', () => {
  const text = qrInput.value.trim();
  if (!text) {
    alert("Lütfen geçerli bir metin girin.");
    return;
  }
  
  qrResult.innerHTML = ''; 
  qrResult.style.display = 'flex';
  
  new QRCode(qrResult, {
    text: text,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
  
  downloadQrBtn.style.display = 'block';
});

downloadQrBtn.addEventListener('click', () => {
  const img = qrResult.querySelector('img');
  const qrCanvas = qrResult.querySelector('canvas');
  let url = '';
  
  if (img && img.src && img.src.startsWith('data:image')) {
     url = img.src;
  } else if (qrCanvas) {
     url = qrCanvas.toDataURL("image/png");
  }
  
  if(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'QR_Kod.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    alert("Karekod görseli oluşturulamadı.");
  }
});
