
const transitData = {
  "Marmaray": [
    { name: "Halkalı", lat: 41.0223, lng: 28.7656 }, { name: "Mustafa Kemal", lat: 41.0152, lng: 28.7770 },
    { name: "Küçükçekmece", lat: 40.9908, lng: 28.7712 }, { name: "Florya", lat: 40.9764, lng: 28.7904 },
    { name: "Florya Akvaryum", lat: 40.9652, lng: 28.8005 }, { name: "Yeşilköy", lat: 40.9622, lng: 28.8228 },
    { name: "Yeşilyurt", lat: 40.9655, lng: 28.8351 }, { name: "Ataköy", lat: 40.9737, lng: 28.8524 },
    { name: "Bakırköy", lat: 40.9796, lng: 28.8742 }, { name: "Yenimahalle", lat: 40.9839, lng: 28.8872 },
    { name: "Zeytinburnu", lat: 40.9880, lng: 28.9004 }, { name: "Kazlıçeşme", lat: 40.9926, lng: 28.9174 },
    { name: "Yenikapı", lat: 41.0055, lng: 28.9515 }, { name: "Sirkeci", lat: 41.0145, lng: 28.9772 },
    { name: "Üsküdar", lat: 41.0267, lng: 29.0147 }, { name: "Ayrılık Çeşmesi", lat: 41.0006, lng: 29.0298 },
    { name: "Söğütlüçeşme", lat: 40.9904, lng: 29.0371 }, { name: "Feneryolu", lat: 40.9836, lng: 29.0441 },
    { name: "Göztepe", lat: 40.9753, lng: 29.0569 }, { name: "Erenköy", lat: 40.9686, lng: 29.0716 },
    { name: "Suadiye", lat: 40.9603, lng: 29.0833 }, { name: "Bostancı", lat: 40.9529, lng: 29.0945 },
    { name: "Küçükyalı", lat: 40.9472, lng: 29.1118 }, { name: "İdealtepe", lat: 40.9388, lng: 29.1245 },
    { name: "Süreyya Plajı", lat: 40.9304, lng: 29.1362 }, { name: "Maltepe", lat: 40.9234, lng: 29.1481 },
    { name: "Cevizli", lat: 40.9126, lng: 29.1677 }, { name: "Atalar", lat: 40.9029, lng: 29.1764 },
    { name: "Başak", lat: 40.8931, lng: 29.1868 }, { name: "Kartal", lat: 40.8877, lng: 29.1916 },
    { name: "Yunus", lat: 40.8797, lng: 29.2081 }, { name: "Pendik", lat: 40.8787, lng: 29.2312 },
    { name: "Kaynarca", lat: 40.8715, lng: 29.2483 }, { name: "Tersane", lat: 40.8643, lng: 29.2662 },
    { name: "Güzelyalı", lat: 40.8575, lng: 29.2818 }, { name: "Aydıntepe", lat: 40.8491, lng: 29.2974 },
    { name: "İçmeler", lat: 40.8441, lng: 29.3039 }, { name: "Tuzla", lat: 40.8202, lng: 29.3134 },
    { name: "Çayırova", lat: 40.8166, lng: 29.3564 }, { name: "Fatih", lat: 40.8062, lng: 29.3792 },
    { name: "Osmangazi", lat: 40.7933, lng: 29.4005 }, { name: "Darıca", lat: 40.7836, lng: 29.4124 },
    { name: "Gebze", lat: 40.7955, lng: 29.4312 }
  ],
  "M2 (Yenikapı - Hacıosman)": [
    { name: "Yenikapı", lat: 41.0055, lng: 28.9515 }, { name: "Vezneciler", lat: 41.0142, lng: 28.9610 },
    { name: "Haliç", lat: 41.0229, lng: 28.9667 }, { name: "Şişhane", lat: 41.0279, lng: 28.9723 },
    { name: "Taksim", lat: 41.0371, lng: 28.9847 }, { name: "Osmanbey", lat: 41.0531, lng: 28.9877 },
    { name: "Şişli-Mecidiyeköy", lat: 41.0622, lng: 28.9922 }, { name: "Gayrettepe", lat: 41.0667, lng: 29.0094 },
    { name: "Levent", lat: 41.0772, lng: 29.0135 }, { name: "4. Levent", lat: 41.0850, lng: 29.0076 },
    { name: "Sanayi Mahallesi", lat: 41.0924, lng: 29.0025 }, { name: "İTÜ Ayazağa", lat: 41.1077, lng: 29.0225 },
    { name: "Atatürk Oto Sanayi", lat: 41.1166, lng: 29.0222 }, { name: "Darüşşafaka", lat: 41.1299, lng: 29.0252 },
    { name: "Hacıosman", lat: 41.1396, lng: 29.0305 }
  ],
  "M4 (Kadıköy - Sabiha Gökçen)": [
    { name: "Kadıköy", lat: 40.9904, lng: 29.0215 }, { name: "Ayrılık Çeşmesi", lat: 41.0006, lng: 29.0298 },
    { name: "Acıbadem", lat: 41.0008, lng: 29.0435 }, { name: "Ünalan", lat: 40.9986, lng: 29.0607 },
    { name: "Göztepe", lat: 40.9942, lng: 29.0768 }, { name: "Yenisahra", lat: 40.9856, lng: 29.0963 },
    { name: "Kozyatağı", lat: 40.9749, lng: 29.0988 }, { name: "Bostancı", lat: 40.9632, lng: 29.1022 },
    { name: "Küçükyalı", lat: 40.9490, lng: 29.1172 }, { name: "Maltepe", lat: 40.9328, lng: 29.1384 },
    { name: "Huzurevi", lat: 40.9257, lng: 29.1481 }, { name: "Gülsuyu", lat: 40.9195, lng: 29.1623 },
    { name: "Esenkent", lat: 40.9126, lng: 29.1723 }, { name: "Hastane-Adliye", lat: 40.9037, lng: 29.1825 },
    { name: "Soğanlık", lat: 40.8967, lng: 29.1917 }, { name: "Kartal", lat: 40.8911, lng: 29.2155 },
    { name: "Yakacık", lat: 40.8876, lng: 29.2274 }, { name: "Pendik", lat: 40.8808, lng: 29.2435 },
    { name: "Tavşantepe", lat: 40.8765, lng: 29.2568 }, { name: "Fevzi Çakmak", lat: 40.8885, lng: 29.2612 },
    { name: "Yayalar", lat: 40.8988, lng: 29.2785 }, { name: "Kurtköy", lat: 40.9085, lng: 29.2985 },
    { name: "Sabiha Gökçen", lat: 40.9056, lng: 29.3148 }
  ],
  "M5 (Üsküdar - Çekmeköy)": [
    { name: "Üsküdar", lat: 41.0267, lng: 29.0147 }, { name: "Fıstıkağacı", lat: 41.0289, lng: 29.0275 },
    { name: "Bağlarbaşı", lat: 41.0219, lng: 29.0378 }, { name: "Altunizade", lat: 41.0222, lng: 29.0459 },
    { name: "Kısıklı", lat: 41.0205, lng: 29.0655 }, { name: "Bulgurlu", lat: 41.0118, lng: 29.0805 },
    { name: "Ümraniye", lat: 41.0244, lng: 29.0975 }, { name: "Çarşı", lat: 41.0253, lng: 29.1068 },
    { name: "Yamanevler", lat: 41.0255, lng: 29.1158 }, { name: "Çakmak", lat: 41.0197, lng: 29.1305 },
    { name: "Ihlamurkuyu", lat: 41.0181, lng: 29.1448 }, { name: "Altınşehir", lat: 41.0155, lng: 29.1558 },
    { name: "İmam Hatip Lisesi", lat: 41.0155, lng: 29.1666 }, { name: "Dudullu", lat: 41.0108, lng: 29.1764 },
    { name: "Necip Fazıl", lat: 41.0065, lng: 29.1866 }, { name: "Çekmeköy", lat: 41.0146, lng: 29.2045 }
  ],
  "M1A (Yenikapı - Atatürk H.L.)": [
    { name: "Yenikapı", lat: 41.0055, lng: 28.9515 }, { name: "Aksaray", lat: 41.0125, lng: 28.9483 },
    { name: "Emniyet-Fatih", lat: 41.0158, lng: 28.9372 }, { name: "Topkapı", lat: 41.0180, lng: 28.9208 },
    { name: "Bayrampaşa", lat: 41.0345, lng: 28.9150 }, { name: "Sağmalcılar", lat: 41.0422, lng: 28.9055 },
    { name: "Kocatepe", lat: 41.0494, lng: 28.8966 }, { name: "Otogar", lat: 41.0375, lng: 28.8961 },
    { name: "Terazidere", lat: 41.0305, lng: 28.8872 }, { name: "Davutpaşa", lat: 41.0230, lng: 28.8850 },
    { name: "Merter", lat: 41.0044, lng: 28.8891 }, { name: "Zeytinburnu", lat: 40.9880, lng: 28.9004 },
    { name: "Bakırköy-İncirli", lat: 40.9933, lng: 28.8744 }, { name: "Bahçelievler", lat: 40.9950, lng: 28.8602 },
    { name: "Ataköy-Şirinevler", lat: 40.9933, lng: 28.8450 }, { name: "Yenibosna", lat: 40.9897, lng: 28.8322 },
    { name: "DTM", lat: 40.9819, lng: 28.8261 }, { name: "Atatürk H.L.", lat: 40.9761, lng: 28.8166 }
  ]
};

const lineColors = {
  "Marmaray": "#000000",
  "M2 (Yenikapı - Hacıosman)": "#008E44",
  "M4 (Kadıköy - Sabiha Gökçen)": "#E30A8D",
  "M5 (Üsküdar - Çekmeköy)": "#844C99",
  "M1A (Yenikapı - Atatürk H.L.)": "#E30A17"
};
