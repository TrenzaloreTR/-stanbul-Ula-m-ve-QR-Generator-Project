
const transitData = {
  "Marmaray": [
    { name: "Halkalı", lat: 41.022370, lng: 28.765691 }, { name: "Mustafa Kemal", lat: 41.015243, lng: 28.777030 },
    { name: "Küçükçekmece", lat: 40.990812, lng: 28.771239 }, { name: "Florya", lat: 40.976451, lng: 28.790408 },
    { name: "Florya Akvaryum", lat: 40.965251, lng: 28.800537 }, { name: "Yeşilköy", lat: 40.962241, lng: 28.822855 },
    { name: "Yeşilyurt", lat: 40.965555, lng: 28.835118 }, { name: "Ataköy", lat: 40.973715, lng: 28.852445 },
    { name: "Bakırköy", lat: 40.979685, lng: 28.874288 }, { name: "Yenimahalle", lat: 40.983942, lng: 28.887259 },
    { name: "Zeytinburnu", lat: 40.988018, lng: 28.900404 }, { name: "Kazlıçeşme", lat: 40.992683, lng: 28.917415 },
    { name: "Yenikapı", lat: 41.005510, lng: 28.951525 }, { name: "Sirkeci", lat: 41.014522, lng: 28.977207 },
    { name: "Üsküdar", lat: 41.026720, lng: 29.014781 }, { name: "Ayrılık Çeşmesi", lat: 41.000632, lng: 29.029853 },
    { name: "Söğütlüçeşme", lat: 40.990422, lng: 29.037169 }, { name: "Feneryolu", lat: 40.983637, lng: 29.044141 },
    { name: "Göztepe", lat: 40.975390, lng: 29.056976 }, { name: "Erenköy", lat: 40.968600, lng: 29.071665 },
    { name: "Suadiye", lat: 40.960357, lng: 29.083324 }, { name: "Bostancı", lat: 40.952955, lng: 29.094595 },
    { name: "Küçükyalı", lat: 40.947230, lng: 29.111811 }, { name: "İdealtepe", lat: 40.938830, lng: 29.124555 },
    { name: "Süreyya Plajı", lat: 40.930430, lng: 29.136270 }, { name: "Maltepe", lat: 40.923428, lng: 29.148102 },
    { name: "Cevizli", lat: 40.912666, lng: 29.167733 }, { name: "Atalar", lat: 40.902914, lng: 29.176461 },
    { name: "Başak", lat: 40.893112, lng: 29.186833 }, { name: "Kartal", lat: 40.887719, lng: 29.191632 },
    { name: "Yunus", lat: 40.879781, lng: 29.208153 }, { name: "Pendik", lat: 40.878794, lng: 29.231268 },
    { name: "Kaynarca", lat: 40.871589, lng: 29.248386 }, { name: "Tersane", lat: 40.864388, lng: 29.266228 },
    { name: "Güzelyalı", lat: 40.857599, lng: 29.281861 }, { name: "Aydıntepe", lat: 40.849185, lng: 29.297424 },
    { name: "İçmeler", lat: 40.844116, lng: 29.303965 }, { name: "Tuzla", lat: 40.820253, lng: 29.313490 },
    { name: "Çayırova", lat: 40.816670, lng: 29.356499 }, { name: "Fatih", lat: 40.806297, lng: 29.379201 },
    { name: "Osmangazi", lat: 40.793399, lng: 29.400587 }, { name: "Darıca", lat: 40.783637, lng: 29.412497 },
    { name: "Gebze", lat: 40.795551, lng: 29.431269 }
  ],
  "M1A (Yenikapı - Atatürk Havalimanı)": [
    { name: "Yenikapı", lat: 41.005510, lng: 28.951525 }, { name: "Aksaray", lat: 41.012586, lng: 28.948332 },
    { name: "Emniyet-Fatih", lat: 41.015895, lng: 28.937222 }, { name: "Topkapı-Ulubatlı", lat: 41.021021, lng: 28.921389 },
    { name: "Bayrampaşa-Maltepe", lat: 41.034500, lng: 28.915000 }, { name: "Sağmalcılar", lat: 41.042222, lng: 28.905556 },
    { name: "Kocatepe", lat: 41.049444, lng: 28.896667 }, { name: "Otogar", lat: 41.037500, lng: 28.896111 },
    { name: "Terazidere", lat: 41.030556, lng: 28.887222 }, { name: "Davutpaşa-YTÜ", lat: 41.023056, lng: 28.885000 },
    { name: "Merter", lat: 41.004444, lng: 28.889167 }, { name: "Zeytinburnu", lat: 40.988018, lng: 28.900404 },
    { name: "Bakırköy-İncirli", lat: 40.993333, lng: 28.874444 }, { name: "Bahçelievler", lat: 40.995000, lng: 28.860278 },
    { name: "Ataköy-Şirinevler", lat: 40.993333, lng: 28.845000 }, { name: "Yenibosna", lat: 40.989722, lng: 28.832222 },
    { name: "DTM-İstanbul Fuar Merkezi", lat: 40.981944, lng: 28.826111 }, { name: "Atatürk Havalimanı", lat: 40.976111, lng: 28.816667 }
  ],
  "M1B (Yenikapı - Kirazlı)": [
    { name: "Yenikapı", lat: 41.005510, lng: 28.951525 }, { name: "Otogar", lat: 41.037500, lng: 28.896111 },
    { name: "Esenler", lat: 41.041667, lng: 28.883333 }, { name: "Menderes", lat: 41.040000, lng: 28.875278 },
    { name: "Üçyüzlü", lat: 41.039444, lng: 28.865278 }, { name: "Bağcılar Meydan", lat: 41.035556, lng: 28.855000 },
    { name: "Kirazlı", lat: 41.033333, lng: 28.834444 }
  ],
  "M2 (Yenikapı - Hacıosman)": [
    { name: "Yenikapı", lat: 41.005510, lng: 28.951525 }, { name: "Vezneciler", lat: 41.014247, lng: 28.961012 },
    { name: "Haliç", lat: 41.022915, lng: 28.966723 }, { name: "Şişhane", lat: 41.027962, lng: 28.972345 },
    { name: "Taksim", lat: 41.037119, lng: 28.984711 }, { name: "Osmanbey", lat: 41.053123, lng: 28.987742 },
    { name: "Şişli-Mecidiyeköy", lat: 41.062250, lng: 28.992223 }, { name: "Gayrettepe", lat: 41.066731, lng: 29.009412 },
    { name: "Levent", lat: 41.077222, lng: 29.013555 }, { name: "4. Levent", lat: 41.085023, lng: 29.007621 },
    { name: "Sanayi Mahallesi", lat: 41.092434, lng: 29.002511 }, { name: "İTÜ Ayazağa", lat: 41.107712, lng: 29.022533 },
    { name: "Atatürk Oto Sanayi", lat: 41.116643, lng: 29.022212 }, { name: "Darüşşafaka", lat: 41.129956, lng: 29.025233 },
    { name: "Hacıosman", lat: 41.139611, lng: 29.030522 }
  ],
  "M3 (Kirazlı - Kayaşehir)": [
    { name: "Kirazlı", lat: 41.033333, lng: 28.834444 }, { name: "Yenimahalle", lat: 41.042500, lng: 28.833611 },
    { name: "Mahmutbey", lat: 41.054444, lng: 28.830556 }, { name: "İSTOÇ", lat: 41.062778, lng: 28.816667 },
    { name: "İkitelli Sanayi", lat: 41.073333, lng: 28.809167 }, { name: "Turgut Özal", lat: 41.082778, lng: 28.806667 },
    { name: "Siteler", lat: 41.089444, lng: 28.804167 }, { name: "Başak Konutları", lat: 41.096389, lng: 28.801667 },
    { name: "Başakşehir Metrokent", lat: 41.108056, lng: 28.800000 }, { name: "Onurkent", lat: 41.117222, lng: 28.790556 },
    { name: "Şehir Hastanesi", lat: 41.121944, lng: 28.775833 }, { name: "Kayaşehir Merkez", lat: 41.126667, lng: 28.761667 }
  ],
  "M4 (Kadıköy - Sabiha Gökçen)": [
    { name: "Kadıköy", lat: 40.990412, lng: 29.021533 }, { name: "Ayrılık Çeşmesi", lat: 41.000632, lng: 29.029853 },
    { name: "Acıbadem", lat: 41.000812, lng: 29.043511 }, { name: "Ünalan", lat: 40.998634, lng: 29.060722 },
    { name: "Göztepe", lat: 40.994245, lng: 29.076811 }, { name: "Yenisahra", lat: 40.985656, lng: 29.096333 },
    { name: "Kozyatağı", lat: 40.974911, lng: 29.098844 }, { name: "Bostancı", lat: 40.963234, lng: 29.102211 },
    { name: "Küçükyalı", lat: 40.949012, lng: 29.117245 }, { name: "Maltepe", lat: 40.932856, lng: 29.138423 },
    { name: "Huzurevi", lat: 40.925712, lng: 29.148111 }, { name: "Gülsuyu", lat: 40.919534, lng: 29.162322 },
    { name: "Esenkent", lat: 40.912656, lng: 29.172345 }, { name: "Hastane-Adliye", lat: 40.903711, lng: 29.182522 },
    { name: "Soğanlık", lat: 40.896734, lng: 29.191711 }, { name: "Kartal", lat: 40.891156, lng: 29.215545 },
    { name: "Yakacık-Adnan Kahveci", lat: 40.887622, lng: 29.227411 }, { name: "Pendik", lat: 40.880845, lng: 29.243533 },
    { name: "Tavşantepe", lat: 40.876512, lng: 29.256845 }, { name: "Fevzi Çakmak-Hastane", lat: 40.888511, lng: 29.261222 },
    { name: "Yayalar-Şeyhli", lat: 40.898834, lng: 29.278511 }, { name: "Kurtköy", lat: 40.908522, lng: 29.298534 },
    { name: "Sabiha Gökçen Havalimanı", lat: 40.905611, lng: 29.314811 }
  ],
  "M5 (Üsküdar - Samandıra)": [
    { name: "Üsküdar", lat: 41.026720, lng: 29.014781 }, { name: "Fıstıkağacı", lat: 41.028912, lng: 29.027534 },
    { name: "Bağlarbaşı", lat: 41.021945, lng: 29.037811 }, { name: "Altunizade", lat: 41.022234, lng: 29.045922 },
    { name: "Kısıklı", lat: 41.020512, lng: 29.065545 }, { name: "Bulgurlu", lat: 41.011834, lng: 29.080511 },
    { name: "Ümraniye", lat: 41.024445, lng: 29.097522 }, { name: "Çarşı", lat: 41.025311, lng: 29.106834 },
    { name: "Yamanevler", lat: 41.025522, lng: 29.115811 }, { name: "Çakmak", lat: 41.019745, lng: 29.130545 },
    { name: "Ihlamurkuyu", lat: 41.018112, lng: 29.144811 }, { name: "Altınşehir", lat: 41.015534, lng: 29.155845 },
    { name: "İmam Hatip Lisesi", lat: 41.015511, lng: 29.166622 }, { name: "Dudullu", lat: 41.010834, lng: 29.176411 },
    { name: "Necip Fazıl", lat: 41.006522, lng: 29.186645 }, { name: "Çekmeköy", lat: 41.014611, lng: 29.204522 },
    { name: "Meclis", lat: 41.008333, lng: 29.215278 }, { name: "Sarıgazi", lat: 41.002222, lng: 29.228333 },
    { name: "Samandıra Merkez", lat: 40.985556, lng: 29.231944 }
  ],
  "M6 (Levent - Boğaziçi)": [
    { name: "Levent", lat: 41.077222, lng: 29.013555 }, { name: "Nispetiye", lat: 41.078889, lng: 29.025000 },
    { name: "Etiler", lat: 41.081111, lng: 29.035833 }, { name: "Boğaziçi Üni-Hisarüstü", lat: 41.085000, lng: 29.050556 }
  ],
  "M7 (Yıldız - Mahmutbey)": [
    { name: "Yıldız", lat: 41.049444, lng: 29.006389 }, { name: "Fulya", lat: 41.055833, lng: 28.998333 },
    { name: "Mecidiyeköy", lat: 41.062250, lng: 28.992223 }, { name: "Çağlayan", lat: 41.069167, lng: 28.980833 },
    { name: "Kağıthane", lat: 41.078889, lng: 28.974444 }, { name: "Nurtepe", lat: 41.081389, lng: 28.961389 },
    { name: "Alibeyköy", lat: 41.079167, lng: 28.941667 }, { name: "Çırçır", lat: 41.075833, lng: 28.932222 },
    { name: "Veysel Karani-Akşemsettin", lat: 41.076667, lng: 28.919722 }, { name: "Yeşilpınar", lat: 41.077500, lng: 28.908333 },
    { name: "Kâzım Karabekir", lat: 41.076667, lng: 28.895000 }, { name: "Yenimahalle", lat: 41.076111, lng: 28.882500 },
    { name: "Karadeniz Mahallesi", lat: 41.076389, lng: 28.868333 }, { name: "Tekstilkent-Giyimkent", lat: 41.067500, lng: 28.857222 },
    { name: "Oruçreis", lat: 41.063889, lng: 28.852222 }, { name: "Göztepe Mahallesi", lat: 41.055278, lng: 28.841389 },
    { name: "Mahmutbey", lat: 41.054444, lng: 28.830556 }
  ],
  "M8 (Bostancı - Parseller)": [
    { name: "Bostancı", lat: 40.952955, lng: 29.094595 }, { name: "Emin Ali Paşa", lat: 40.959722, lng: 29.090556 },
    { name: "Ayşekadın", lat: 40.967222, lng: 29.090556 }, { name: "Kozyatağı", lat: 40.974911, lng: 29.098844 },
    { name: "Küçükbakkalköy", lat: 40.983333, lng: 29.111111 }, { name: "İçerenköy", lat: 40.988056, lng: 29.122222 },
    { name: "Kayışdağı", lat: 40.993611, lng: 29.135278 }, { name: "Mevlana", lat: 40.995000, lng: 29.148611 },
    { name: "İMES", lat: 41.002222, lng: 29.162222 }, { name: "MODOKO-Keyap", lat: 41.005556, lng: 29.167778 },
    { name: "Dudullu", lat: 41.010834, lng: 29.176411 }, { name: "Huzur", lat: 41.020278, lng: 29.177222 },
    { name: "Parseller", lat: 41.031389, lng: 29.183333 }
  ],
  "M9 (Ataköy - Olimpiyat)": [
    { name: "Ataköy", lat: 40.973715, lng: 28.852445 }, { name: "Yenibosna", lat: 40.989722, lng: 28.832222 },
    { name: "Çobançeşme", lat: 40.998333, lng: 28.825000 }, { name: "15 Temmuz", lat: 41.016389, lng: 28.822222 },
    { name: "Doğu Sanayi", lat: 41.026111, lng: 28.821389 }, { name: "Mimar Sinan", lat: 41.031667, lng: 28.820278 },
    { name: "Atatürk Mahallesi", lat: 41.041667, lng: 28.809167 }, { name: "Bahariye", lat: 41.050556, lng: 28.806667 },
    { name: "MASKO", lat: 41.066111, lng: 28.801667 }, { name: "İkitelli Sanayi", lat: 41.073333, lng: 28.809167 },
    { name: "Ziya Gökalp Mahallesi", lat: 41.077778, lng: 28.794444 }, { name: "Olimpiyat", lat: 41.080556, lng: 28.766389 }
  ],
  "M11 (Gayrettepe - Havalimanı - Arnavutköy)": [
    { name: "Gayrettepe", lat: 41.066731, lng: 29.009412 }, { name: "Kağıthane", lat: 41.078889, lng: 28.974444 },
    { name: "Hasdal", lat: 41.109167, lng: 28.948056 }, { name: "Kemerburgaz", lat: 41.161389, lng: 28.918056 },
    { name: "Göktürk", lat: 41.183889, lng: 28.889722 }, { name: "İhsaniye", lat: 41.229722, lng: 28.836111 },
    { name: "İstanbul Havalimanı", lat: 41.258611, lng: 28.745556 }, { name: "Kargo Terminali", lat: 41.261944, lng: 28.711389 },
    { name: "Taşoluk", lat: 41.220556, lng: 28.736944 }, { name: "Arnavutköy Hastane", lat: 41.196944, lng: 28.747222 }
  ]
};

const lineColors = {
  "Marmaray": "#000000",
  "M1A (Yenikapı - Atatürk Havalimanı)": "#E30A17",
  "M1B (Yenikapı - Kirazlı)": "#E30A17",
  "M2 (Yenikapı - Hacıosman)": "#008E44",
  "M3 (Kirazlı - Kayaşehir)": "#00B2E1",
  "M4 (Kadıköy - Sabiha Gökçen)": "#E30A8D",
  "M5 (Üsküdar - Samandıra)": "#844C99",
  "M6 (Levent - Boğaziçi)": "#C2A26F",
  "M7 (Yıldız - Mahmutbey)": "#F37021",
  "M8 (Bostancı - Parseller)": "#000080",
  "M9 (Ataköy - Olimpiyat)": "#FFD700",
  "M11 (Gayrettepe - Havalimanı - Arnavutköy)": "#8B4513"
};
