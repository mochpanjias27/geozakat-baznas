/* =====================================================================
   GeoZakat-Climate · data wilayah
   PERHATIAN: seluruh angka di file ini adalah DATA CONTOH untuk prototipe.
   Skema tiap wilayah (lihat README.md):
   {kode_wilayah, nama, tingkat, skor_kerentanan, skor_bahaya, skor_kemiskinan,
    skor_adaptasi, bahaya_utama, populasi_terdampak, zakat_tersalurkan,
    asnaf_dominan, komposisi_asnaf, lat, lng, tren, proyeksi}
   Batas provinsi: Peta Dasar BAKOSURTANAL & Dukcapil (34 provinsi),
   disederhanakan dari github.com/ans-4175/peta-indonesia-geojson
   ===================================================================== */
window.DATA = {
  pembaruan: {"bahaya": "2026-10-15", "kemiskinan": "2026-09-30", "adaptasi": "2026-08-31", "gabungan": "2026-10-20", "zakat": "2026-10-31"},
  provinsi: [
 {
  "kode_wilayah": "52",
  "nama": "Nusa Tenggara Barat",
  "tingkat": "provinsi",
  "pulau": "Bali & Nusa Tenggara",
  "skor_bahaya": 71,
  "skor_kemiskinan": 66,
  "skor_adaptasi": 42,
  "skor_kerentanan": 66.0,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 448000,
  "zakat_tersalurkan": 26900000000,
  "asnaf_dominan": "miskin",
  "lat": -8.593,
  "lng": 117.267,
  "tren": [
   59.3,
   60.3,
   61.2,
   63.1,
   62.8,
   63.2,
   66.0
  ],
  "proyeksi": {
   "2030-ssp245": 74.8,
   "2030-ssp585": 77.4,
   "2045-ssp245": 78.0,
   "2045-ssp585": 83.1
  },
  "komposisi_asnaf": {
   "fakir": 0.52,
   "miskin": 0.38,
   "gharimin": 0.06,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "75",
  "nama": "Gorontalo",
  "tingkat": "provinsi",
  "pulau": "Sulawesi",
  "skor_bahaya": 62,
  "skor_kemiskinan": 68,
  "skor_adaptasi": 41,
  "skor_kerentanan": 63.3,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 121000,
  "zakat_tersalurkan": 6100000000,
  "asnaf_dominan": "miskin",
  "lat": 0.676,
  "lng": 122.268,
  "tren": [
   52.6,
   54.2,
   56.3,
   58.3,
   60.2,
   61.4,
   63.3
  ],
  "proyeksi": {
   "2030-ssp245": 65.0,
   "2030-ssp585": 67.0,
   "2045-ssp245": 67.5,
   "2045-ssp585": 71.4
  },
  "komposisi_asnaf": {
   "fakir": 0.49,
   "miskin": 0.41,
   "gharimin": 0.07,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "74",
  "nama": "Sulawesi Tenggara",
  "tingkat": "provinsi",
  "pulau": "Sulawesi",
  "skor_bahaya": 58,
  "skor_kemiskinan": 54,
  "skor_adaptasi": 43,
  "skor_kerentanan": 56.4,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 176000,
  "zakat_tersalurkan": 9300000000,
  "asnaf_dominan": "miskin",
  "lat": -3.818,
  "lng": 121.847,
  "tren": [
   49.7,
   51.4,
   52.2,
   53.8,
   54.9,
   55.8,
   56.4
  ],
  "proyeksi": {
   "2030-ssp245": 61.1,
   "2030-ssp585": 63.2,
   "2045-ssp245": 63.7,
   "2045-ssp585": 67.9
  },
  "komposisi_asnaf": {
   "fakir": 0.52,
   "miskin": 0.36,
   "gharimin": 0.09,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "34",
  "nama": "DI Yogyakarta",
  "tingkat": "provinsi",
  "pulau": "Jawa",
  "skor_bahaya": 57,
  "skor_kemiskinan": 56,
  "skor_adaptasi": 63,
  "skor_kerentanan": 51.6,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 176000,
  "zakat_tersalurkan": 24600000000,
  "asnaf_dominan": "miskin",
  "lat": -7.853,
  "lng": 110.411,
  "tren": [
   39.7,
   42.4,
   44.7,
   47.3,
   48.4,
   48.4,
   51.6
  ],
  "proyeksi": {
   "2030-ssp245": 60.1,
   "2030-ssp585": 62.1,
   "2045-ssp245": 62.6,
   "2045-ssp585": 66.7
  },
  "komposisi_asnaf": {
   "fakir": 0.59,
   "miskin": 0.32,
   "gharimin": 0.06,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "33",
  "nama": "Jawa Tengah",
  "tingkat": "provinsi",
  "pulau": "Jawa",
  "skor_bahaya": 78,
  "skor_kemiskinan": 52,
  "skor_adaptasi": 54,
  "skor_kerentanan": 60.9,
  "bahaya_utama": "rob",
  "populasi_terdampak": 1340000,
  "zakat_tersalurkan": 121500000000,
  "asnaf_dominan": "miskin",
  "lat": -7.315,
  "lng": 109.848,
  "tren": [
   53.1,
   54.2,
   56.2,
   57.6,
   58.6,
   58.2,
   60.9
  ],
  "proyeksi": {
   "2030-ssp245": 82.7,
   "2030-ssp585": 85.8,
   "2045-ssp245": 86.6,
   "2045-ssp585": 92.8
  },
  "komposisi_asnaf": {
   "fakir": 0.54,
   "miskin": 0.32,
   "gharimin": 0.11,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "36",
  "nama": "Banten",
  "tingkat": "provinsi",
  "pulau": "Jawa",
  "skor_bahaya": 64,
  "skor_kemiskinan": 40,
  "skor_adaptasi": 55,
  "skor_kerentanan": 50.9,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 488000,
  "zakat_tersalurkan": 46800000000,
  "asnaf_dominan": "miskin",
  "lat": -6.415,
  "lng": 106.127,
  "tren": [
   42.4,
   43.3,
   44.8,
   46.0,
   46.3,
   47.9,
   50.9
  ],
  "proyeksi": {
   "2030-ssp245": 67.1,
   "2030-ssp585": 69.1,
   "2045-ssp245": 69.6,
   "2045-ssp585": 73.7
  },
  "komposisi_asnaf": {
   "fakir": 0.54,
   "miskin": 0.37,
   "gharimin": 0.06,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "35",
  "nama": "Jawa Timur",
  "tingkat": "provinsi",
  "pulau": "Jawa",
  "skor_bahaya": 72,
  "skor_kemiskinan": 54,
  "skor_adaptasi": 55,
  "skor_kerentanan": 59.0,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 1460000,
  "zakat_tersalurkan": 138700000000,
  "asnaf_dominan": "miskin",
  "lat": -7.767,
  "lng": 112.253,
  "tren": [
   50.1,
   52.3,
   52.9,
   53.9,
   56.2,
   57.1,
   59.0
  ],
  "proyeksi": {
   "2030-ssp245": 75.9,
   "2030-ssp585": 78.5,
   "2045-ssp245": 79.1,
   "2045-ssp585": 84.3
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.34,
   "gharimin": 0.1,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "82",
  "nama": "Maluku Utara",
  "tingkat": "provinsi",
  "pulau": "Maluku & Papua",
  "skor_bahaya": 56,
  "skor_kemiskinan": 48,
  "skor_adaptasi": 38,
  "skor_kerentanan": 54.7,
  "bahaya_utama": "rob",
  "populasi_terdampak": 88000,
  "zakat_tersalurkan": 4300000000,
  "asnaf_dominan": "miskin",
  "lat": -1.834,
  "lng": 124.832,
  "tren": [
   47.4,
   47.5,
   47.6,
   49.5,
   51.8,
   51.8,
   54.7
  ],
  "proyeksi": {
   "2030-ssp245": 59.4,
   "2030-ssp585": 61.6,
   "2045-ssp245": 62.2,
   "2045-ssp585": 66.6
  },
  "komposisi_asnaf": {
   "fakir": 0.51,
   "miskin": 0.39,
   "gharimin": 0.07,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "81",
  "nama": "Maluku",
  "tingkat": "provinsi",
  "pulau": "Maluku & Papua",
  "skor_bahaya": 64,
  "skor_kemiskinan": 74,
  "skor_adaptasi": 34,
  "skor_kerentanan": 68.0,
  "bahaya_utama": "rob",
  "populasi_terdampak": 214000,
  "zakat_tersalurkan": 6700000000,
  "asnaf_dominan": "fakir",
  "lat": -3.484,
  "lng": 126.68,
  "tren": [
   59.1,
   59.7,
   62.0,
   63.5,
   64.5,
   65.6,
   68.0
  ],
  "proyeksi": {
   "2030-ssp245": 67.8,
   "2030-ssp585": 70.4,
   "2045-ssp245": 71.0,
   "2045-ssp585": 76.2
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.39,
   "gharimin": 0.06,
   "ibnu sabil": 0.02
  }
 },
 {
  "kode_wilayah": "73",
  "nama": "Sulawesi Selatan",
  "tingkat": "provinsi",
  "pulau": "Sulawesi",
  "skor_bahaya": 66,
  "skor_kemiskinan": 44,
  "skor_adaptasi": 54,
  "skor_kerentanan": 53.3,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 502000,
  "zakat_tersalurkan": 43100000000,
  "asnaf_dominan": "miskin",
  "lat": -3.795,
  "lng": 119.943,
  "tren": [
   44.0,
   45.5,
   47.2,
   48.0,
   50.0,
   51.1,
   53.3
  ],
  "proyeksi": {
   "2030-ssp245": 69.6,
   "2030-ssp585": 71.9,
   "2045-ssp245": 72.5,
   "2045-ssp585": 77.3
  },
  "komposisi_asnaf": {
   "fakir": 0.54,
   "miskin": 0.31,
   "gharimin": 0.11,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "31",
  "nama": "DKI Jakarta",
  "tingkat": "provinsi",
  "pulau": "Jawa",
  "skor_bahaya": 74,
  "skor_kemiskinan": 22,
  "skor_adaptasi": 78,
  "skor_kerentanan": 42.8,
  "bahaya_utama": "rob",
  "populasi_terdampak": 610000,
  "zakat_tersalurkan": 118000000000,
  "asnaf_dominan": "miskin",
  "lat": -6.245,
  "lng": 106.836,
  "tren": [
   34.2,
   34.9,
   35.7,
   36.0,
   38.1,
   39.9,
   42.8
  ],
  "proyeksi": {
   "2030-ssp245": 78.4,
   "2030-ssp585": 81.4,
   "2045-ssp245": 82.1,
   "2045-ssp585": 88.1
  },
  "komposisi_asnaf": {
   "fakir": 0.48,
   "miskin": 0.4,
   "gharimin": 0.08,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "32",
  "nama": "Jawa Barat",
  "tingkat": "provinsi",
  "pulau": "Jawa",
  "skor_bahaya": 70,
  "skor_kemiskinan": 45,
  "skor_adaptasi": 58,
  "skor_kerentanan": 54.2,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 1520000,
  "zakat_tersalurkan": 152000000000,
  "asnaf_dominan": "miskin",
  "lat": -6.858,
  "lng": 107.604,
  "tren": [
   45.3,
   47.6,
   48.1,
   49.3,
   50.5,
   52.5,
   54.2
  ],
  "proyeksi": {
   "2030-ssp245": 73.4,
   "2030-ssp585": 75.6,
   "2045-ssp245": 76.2,
   "2045-ssp585": 80.6
  },
  "komposisi_asnaf": {
   "fakir": 0.56,
   "miskin": 0.32,
   "gharimin": 0.08,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "94",
  "nama": "Papua",
  "tingkat": "provinsi",
  "pulau": "Maluku & Papua",
  "skor_bahaya": 66,
  "skor_kemiskinan": 90,
  "skor_adaptasi": 22,
  "skor_kerentanan": 77.4,
  "bahaya_utama": "rob",
  "populasi_terdampak": 386000,
  "zakat_tersalurkan": 5200000000,
  "asnaf_dominan": "fakir",
  "lat": -5.302,
  "lng": 139.63,
  "tren": [
   66.0,
   68.4,
   69.4,
   72.0,
   72.4,
   74.5,
   77.4
  ],
  "proyeksi": {
   "2030-ssp245": 70.0,
   "2030-ssp585": 72.6,
   "2045-ssp245": 73.3,
   "2045-ssp585": 78.5
  },
  "komposisi_asnaf": {
   "fakir": 0.52,
   "miskin": 0.35,
   "gharimin": 0.09,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "53",
  "nama": "Nusa Tenggara Timur",
  "tingkat": "provinsi",
  "pulau": "Bali & Nusa Tenggara",
  "skor_bahaya": 80,
  "skor_kemiskinan": 84,
  "skor_adaptasi": 30,
  "skor_kerentanan": 78.9,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 812000,
  "zakat_tersalurkan": 21700000000,
  "asnaf_dominan": "fakir",
  "lat": -8.507,
  "lng": 120.581,
  "tren": [
   70.2,
   72.5,
   74.7,
   76.4,
   77.0,
   76.6,
   78.9
  ],
  "proyeksi": {
   "2030-ssp245": 84.3,
   "2030-ssp585": 87.2,
   "2045-ssp245": 87.9,
   "2045-ssp585": 93.7
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.32,
   "gharimin": 0.08,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "51",
  "nama": "Bali",
  "tingkat": "provinsi",
  "pulau": "Bali & Nusa Tenggara",
  "skor_bahaya": 42,
  "skor_kemiskinan": 22,
  "skor_adaptasi": 70,
  "skor_kerentanan": 32.0,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 62000,
  "zakat_tersalurkan": 14100000000,
  "asnaf_dominan": "miskin",
  "lat": -8.431,
  "lng": 115.204,
  "tren": [
   25.4,
   27.0,
   27.6,
   28.3,
   28.1,
   28.2,
   32.0
  ],
  "proyeksi": {
   "2030-ssp245": 44.3,
   "2030-ssp585": 45.8,
   "2045-ssp245": 46.2,
   "2045-ssp585": 49.2
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.33,
   "gharimin": 0.07,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "14",
  "nama": "Riau",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 52,
  "skor_kemiskinan": 36,
  "skor_adaptasi": 60,
  "skor_kerentanan": 43.4,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 214000,
  "zakat_tersalurkan": 31500000000,
  "asnaf_dominan": "miskin",
  "lat": 0.647,
  "lng": 101.597,
  "tren": [
   36.9,
   38.5,
   38.7,
   40.0,
   41.4,
   43.2,
   43.4
  ],
  "proyeksi": {
   "2030-ssp245": 54.5,
   "2030-ssp585": 56.2,
   "2045-ssp245": 56.6,
   "2045-ssp585": 59.9
  },
  "komposisi_asnaf": {
   "fakir": 0.51,
   "miskin": 0.35,
   "gharimin": 0.09,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "21",
  "nama": "Kepulauan Riau",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 47,
  "skor_kemiskinan": 30,
  "skor_adaptasi": 66,
  "skor_kerentanan": 37.8,
  "bahaya_utama": "rob",
  "populasi_terdampak": 96000,
  "zakat_tersalurkan": 12400000000,
  "asnaf_dominan": "miskin",
  "lat": 3.922,
  "lng": 108.194,
  "tren": [
   30.9,
   31.4,
   32.7,
   34.3,
   36.3,
   36.8,
   37.8
  ],
  "proyeksi": {
   "2030-ssp245": 49.8,
   "2030-ssp585": 51.7,
   "2045-ssp245": 52.2,
   "2045-ssp585": 55.9
  },
  "komposisi_asnaf": {
   "fakir": 0.44,
   "miskin": 0.38,
   "gharimin": 0.14,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "76",
  "nama": "Sulawesi Barat",
  "tingkat": "provinsi",
  "pulau": "Sulawesi",
  "skor_bahaya": 61,
  "skor_kemiskinan": 58,
  "skor_adaptasi": 37,
  "skor_kerentanan": 60.5,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 118000,
  "zakat_tersalurkan": 4900000000,
  "asnaf_dominan": "miskin",
  "lat": -2.25,
  "lng": 119.373,
  "tren": [
   53.2,
   54.4,
   56.5,
   58.2,
   58.8,
   58.4,
   60.5
  ],
  "proyeksi": {
   "2030-ssp245": 63.9,
   "2030-ssp585": 65.9,
   "2045-ssp245": 66.4,
   "2045-ssp585": 70.3
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.35,
   "gharimin": 0.14,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "72",
  "nama": "Sulawesi Tengah",
  "tingkat": "provinsi",
  "pulau": "Sulawesi",
  "skor_bahaya": 70,
  "skor_kemiskinan": 60,
  "skor_adaptasi": 40,
  "skor_kerentanan": 64.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 264000,
  "zakat_tersalurkan": 12800000000,
  "asnaf_dominan": "miskin",
  "lat": -0.957,
  "lng": 119.936,
  "tren": [
   53.3,
   55.8,
   56.7,
   58.0,
   60.2,
   61.5,
   64.0
  ],
  "proyeksi": {
   "2030-ssp245": 73.4,
   "2030-ssp585": 75.6,
   "2045-ssp245": 76.2,
   "2045-ssp585": 80.6
  },
  "komposisi_asnaf": {
   "fakir": 0.52,
   "miskin": 0.31,
   "gharimin": 0.13,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "71",
  "nama": "Sulawesi Utara",
  "tingkat": "provinsi",
  "pulau": "Sulawesi",
  "skor_bahaya": 49,
  "skor_kemiskinan": 36,
  "skor_adaptasi": 58,
  "skor_kerentanan": 42.7,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 98000,
  "zakat_tersalurkan": 9600000000,
  "asnaf_dominan": "miskin",
  "lat": 1.084,
  "lng": 124.649,
  "tren": [
   36.1,
   37.9,
   37.7,
   38.3,
   39.0,
   40.9,
   42.7
  ],
  "proyeksi": {
   "2030-ssp245": 51.4,
   "2030-ssp585": 52.9,
   "2045-ssp245": 53.3,
   "2045-ssp585": 56.4
  },
  "komposisi_asnaf": {
   "fakir": 0.58,
   "miskin": 0.31,
   "gharimin": 0.07,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "91",
  "nama": "Papua Barat",
  "tingkat": "provinsi",
  "pulau": "Maluku & Papua",
  "skor_bahaya": 60,
  "skor_kemiskinan": 82,
  "skor_adaptasi": 28,
  "skor_kerentanan": 70.7,
  "bahaya_utama": "rob",
  "populasi_terdampak": 138000,
  "zakat_tersalurkan": 3900000000,
  "asnaf_dominan": "fakir",
  "lat": -1.857,
  "lng": 130.097,
  "tren": [
   62.7,
   63.4,
   64.2,
   64.6,
   67.2,
   68.5,
   70.7
  ],
  "proyeksi": {
   "2030-ssp245": 63.6,
   "2030-ssp585": 66.0,
   "2045-ssp245": 66.6,
   "2045-ssp585": 71.4
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.37,
   "gharimin": 0.07,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "12",
  "nama": "Sumatera Utara",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 61,
  "skor_kemiskinan": 48,
  "skor_adaptasi": 52,
  "skor_kerentanan": 53.2,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 530000,
  "zakat_tersalurkan": 41200000000,
  "asnaf_dominan": "miskin",
  "lat": 2.27,
  "lng": 99.262,
  "tren": [
   44.1,
   45.2,
   46.2,
   47.8,
   49.6,
   49.8,
   53.2
  ],
  "proyeksi": {
   "2030-ssp245": 63.9,
   "2030-ssp585": 65.9,
   "2045-ssp245": 66.4,
   "2045-ssp585": 70.3
  },
  "komposisi_asnaf": {
   "fakir": 0.49,
   "miskin": 0.38,
   "gharimin": 0.08,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "19",
  "nama": "Kep. Bangka Belitung",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 45,
  "skor_kemiskinan": 26,
  "skor_adaptasi": 62,
  "skor_kerentanan": 36.6,
  "bahaya_utama": "rob",
  "populasi_terdampak": 71000,
  "zakat_tersalurkan": 8100000000,
  "asnaf_dominan": "miskin",
  "lat": -2.878,
  "lng": 107.917,
  "tren": [
   25.1,
   25.6,
   27.6,
   30.2,
   31.7,
   33.9,
   36.6
  ],
  "proyeksi": {
   "2030-ssp245": 47.7,
   "2030-ssp585": 49.5,
   "2045-ssp245": 50.0,
   "2045-ssp585": 53.5
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.42,
   "gharimin": 0.06,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "13",
  "nama": "Sumatera Barat",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 58,
  "skor_kemiskinan": 40,
  "skor_adaptasi": 57,
  "skor_kerentanan": 48.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 268000,
  "zakat_tersalurkan": 29800000000,
  "asnaf_dominan": "miskin",
  "lat": -0.782,
  "lng": 100.871,
  "tren": [
   36.7,
   37.5,
   39.3,
   41.7,
   43.3,
   46.0,
   48.0
  ],
  "proyeksi": {
   "2030-ssp245": 60.8,
   "2030-ssp585": 62.6,
   "2045-ssp245": 63.1,
   "2045-ssp585": 66.8
  },
  "komposisi_asnaf": {
   "fakir": 0.45,
   "miskin": 0.38,
   "gharimin": 0.13,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "16",
  "nama": "Sumatera Selatan",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 60,
  "skor_kemiskinan": 50,
  "skor_adaptasi": 48,
  "skor_kerentanan": 54.5,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 402000,
  "zakat_tersalurkan": 27600000000,
  "asnaf_dominan": "miskin",
  "lat": -3.266,
  "lng": 104.288,
  "tren": [
   46.2,
   47.2,
   48.2,
   48.4,
   49.5,
   50.8,
   54.5
  ],
  "proyeksi": {
   "2030-ssp245": 63.2,
   "2030-ssp585": 65.4,
   "2045-ssp245": 65.9,
   "2045-ssp585": 70.3
  },
  "komposisi_asnaf": {
   "fakir": 0.56,
   "miskin": 0.33,
   "gharimin": 0.09,
   "ibnu sabil": 0.02
  }
 },
 {
  "kode_wilayah": "15",
  "nama": "Jambi",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 55,
  "skor_kemiskinan": 42,
  "skor_adaptasi": 51,
  "skor_kerentanan": 49.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 188000,
  "zakat_tersalurkan": 15200000000,
  "asnaf_dominan": "miskin",
  "lat": -1.762,
  "lng": 102.522,
  "tren": [
   38.3,
   39.6,
   41.1,
   42.3,
   43.9,
   44.7,
   49.0
  ],
  "proyeksi": {
   "2030-ssp245": 57.6,
   "2030-ssp585": 59.4,
   "2045-ssp245": 59.8,
   "2045-ssp585": 63.4
  },
  "komposisi_asnaf": {
   "fakir": 0.46,
   "miskin": 0.36,
   "gharimin": 0.13,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "18",
  "nama": "Lampung",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 59,
  "skor_kemiskinan": 52,
  "skor_adaptasi": 47,
  "skor_kerentanan": 55.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 366000,
  "zakat_tersalurkan": 22300000000,
  "asnaf_dominan": "miskin",
  "lat": -4.822,
  "lng": 105.107,
  "tren": [
   44.1,
   46.5,
   47.3,
   49.9,
   52.1,
   53.4,
   55.0
  ],
  "proyeksi": {
   "2030-ssp245": 61.8,
   "2030-ssp585": 63.7,
   "2045-ssp245": 64.2,
   "2045-ssp585": 68.0
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.36,
   "gharimin": 0.07,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "17",
  "nama": "Bengkulu",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 57,
  "skor_kemiskinan": 55,
  "skor_adaptasi": 45,
  "skor_kerentanan": 55.8,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 144000,
  "zakat_tersalurkan": 9800000000,
  "asnaf_dominan": "miskin",
  "lat": -3.623,
  "lng": 102.475,
  "tren": [
   44.7,
   46.7,
   49.3,
   50.3,
   50.8,
   52.6,
   55.8
  ],
  "proyeksi": {
   "2030-ssp245": 59.7,
   "2030-ssp585": 61.6,
   "2045-ssp245": 62.0,
   "2045-ssp585": 65.7
  },
  "komposisi_asnaf": {
   "fakir": 0.46,
   "miskin": 0.37,
   "gharimin": 0.14,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "11",
  "nama": "Aceh",
  "tingkat": "provinsi",
  "pulau": "Sumatera",
  "skor_bahaya": 68,
  "skor_kemiskinan": 62,
  "skor_adaptasi": 44,
  "skor_kerentanan": 62.9,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 412000,
  "zakat_tersalurkan": 38500000000,
  "asnaf_dominan": "miskin",
  "lat": 3.931,
  "lng": 97.156,
  "tren": [
   56.2,
   57.7,
   58.7,
   59.7,
   59.8,
   60.4,
   62.9
  ],
  "proyeksi": {
   "2030-ssp245": 71.3,
   "2030-ssp585": 73.4,
   "2045-ssp245": 74.0,
   "2045-ssp585": 78.3
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.37,
   "gharimin": 0.11,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "61",
  "nama": "Kalimantan Barat",
  "tingkat": "provinsi",
  "pulau": "Kalimantan",
  "skor_bahaya": 63,
  "skor_kemiskinan": 46,
  "skor_adaptasi": 46,
  "skor_kerentanan": 54.8,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 298000,
  "zakat_tersalurkan": 17500000000,
  "asnaf_dominan": "miskin",
  "lat": -0.487,
  "lng": 111.062,
  "tren": [
   48.2,
   48.6,
   50.7,
   50.7,
   52.2,
   53.7,
   54.8
  ],
  "proyeksi": {
   "2030-ssp245": 66.0,
   "2030-ssp585": 68.0,
   "2045-ssp245": 68.5,
   "2045-ssp585": 72.6
  },
  "komposisi_asnaf": {
   "fakir": 0.5,
   "miskin": 0.38,
   "gharimin": 0.09,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "62",
  "nama": "Kalimantan Tengah",
  "tingkat": "provinsi",
  "pulau": "Kalimantan",
  "skor_bahaya": 66,
  "skor_kemiskinan": 40,
  "skor_adaptasi": 44,
  "skor_kerentanan": 54.4,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 204000,
  "zakat_tersalurkan": 11200000000,
  "asnaf_dominan": "miskin",
  "lat": -1.407,
  "lng": 113.387,
  "tren": [
   44.6,
   46.0,
   46.9,
   49.2,
   50.0,
   51.0,
   54.4
  ],
  "proyeksi": {
   "2030-ssp245": 69.2,
   "2030-ssp585": 71.3,
   "2045-ssp245": 71.8,
   "2045-ssp585": 76.0
  },
  "komposisi_asnaf": {
   "fakir": 0.49,
   "miskin": 0.38,
   "gharimin": 0.1,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "63",
  "nama": "Kalimantan Selatan",
  "tingkat": "provinsi",
  "pulau": "Kalimantan",
  "skor_bahaya": 69,
  "skor_kemiskinan": 34,
  "skor_adaptasi": 52,
  "skor_kerentanan": 51.5,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 312000,
  "zakat_tersalurkan": 24800000000,
  "asnaf_dominan": "miskin",
  "lat": -2.768,
  "lng": 115.531,
  "tren": [
   43.0,
   45.2,
   46.9,
   47.6,
   47.4,
   47.8,
   51.5
  ],
  "proyeksi": {
   "2030-ssp245": 72.3,
   "2030-ssp585": 74.5,
   "2045-ssp245": 75.1,
   "2045-ssp585": 79.5
  },
  "komposisi_asnaf": {
   "fakir": 0.46,
   "miskin": 0.4,
   "gharimin": 0.1,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "64",
  "nama": "Kalimantan Timur",
  "tingkat": "provinsi",
  "pulau": "Kalimantan",
  "skor_bahaya": 54,
  "skor_kemiskinan": 30,
  "skor_adaptasi": 60,
  "skor_kerentanan": 42.1,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 158000,
  "zakat_tersalurkan": 23300000000,
  "asnaf_dominan": "miskin",
  "lat": 0.192,
  "lng": 116.173,
  "tren": [
   32.0,
   33.6,
   36.1,
   36.9,
   38.9,
   40.2,
   42.1
  ],
  "proyeksi": {
   "2030-ssp245": 56.6,
   "2030-ssp585": 58.3,
   "2045-ssp245": 58.8,
   "2045-ssp585": 62.2
  },
  "komposisi_asnaf": {
   "fakir": 0.59,
   "miskin": 0.31,
   "gharimin": 0.08,
   "ibnu sabil": 0.02
  }
 },
 {
  "kode_wilayah": "65",
  "nama": "Kalimantan Utara",
  "tingkat": "provinsi",
  "pulau": "Kalimantan",
  "skor_bahaya": 50,
  "skor_kemiskinan": 38,
  "skor_adaptasi": 48,
  "skor_kerentanan": 46.3,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 52000,
  "zakat_tersalurkan": 4200000000,
  "asnaf_dominan": "miskin",
  "lat": 2.689,
  "lng": 116.456,
  "tren": [
   34.8,
   36.0,
   37.0,
   38.8,
   41.8,
   44.2,
   46.3
  ],
  "proyeksi": {
   "2030-ssp245": 52.4,
   "2030-ssp585": 54.0,
   "2045-ssp245": 54.4,
   "2045-ssp585": 57.6
  },
  "komposisi_asnaf": {
   "fakir": 0.51,
   "miskin": 0.37,
   "gharimin": 0.07,
   "ibnu sabil": 0.05
  }
 }
],
  kabupaten: [
 {
  "kode_wilayah": "3321",
  "nama": "Kab. Demak",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Tengah",
  "kode_provinsi": "33",
  "skor_bahaya": 88,
  "skor_kemiskinan": 58,
  "skor_adaptasi": 46,
  "skor_kerentanan": 69.0,
  "bahaya_utama": "rob",
  "populasi_terdampak": 96500,
  "zakat_tersalurkan": 2900000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "nelayan & petambak",
  "lat": -6.89,
  "lng": 110.64,
  "tren": [
   58.9,
   61.4,
   62.4,
   64.8,
   65.5,
   67.2,
   69.0
  ],
  "proyeksi": {
   "2030-ssp245": 93.3,
   "2030-ssp585": 96.8,
   "2045-ssp245": 97.7,
   "2045-ssp585": 100
  },
  "komposisi_asnaf": {
   "fakir": 0.56,
   "miskin": 0.36,
   "gharimin": 0.06,
   "ibnu sabil": 0.02
  }
 },
 {
  "kode_wilayah": "3375",
  "nama": "Kota Pekalongan",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Tengah",
  "kode_provinsi": "33",
  "skor_bahaya": 85,
  "skor_kemiskinan": 44,
  "skor_adaptasi": 55,
  "skor_kerentanan": 60.6,
  "bahaya_utama": "rob",
  "populasi_terdampak": 54200,
  "zakat_tersalurkan": 1800000000,
  "asnaf_dominan": "gharimin",
  "mata_pencaharian": "nelayan & petambak",
  "lat": -6.89,
  "lng": 109.67,
  "tren": [
   50.4,
   51.4,
   54.0,
   56.1,
   56.3,
   58.4,
   60.6
  ],
  "proyeksi": {
   "2030-ssp245": 90.1,
   "2030-ssp585": 93.5,
   "2045-ssp245": 94.4,
   "2045-ssp585": 100
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.34,
   "gharimin": 0.08,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3212",
  "nama": "Kab. Indramayu",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Barat",
  "kode_provinsi": "32",
  "skor_bahaya": 79,
  "skor_kemiskinan": 57,
  "skor_adaptasi": 48,
  "skor_kerentanan": 64.5,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 118400,
  "zakat_tersalurkan": 4099999999,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -6.33,
  "lng": 108.32,
  "tren": [
   55.2,
   56.2,
   57.7,
   59.6,
   59.9,
   61.7,
   64.5
  ],
  "proyeksi": {
   "2030-ssp245": 83.3,
   "2030-ssp585": 86.1,
   "2045-ssp245": 86.8,
   "2045-ssp585": 92.5
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.37,
   "gharimin": 0.07,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3215",
  "nama": "Kab. Karawang",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Barat",
  "kode_provinsi": "32",
  "skor_bahaya": 76,
  "skor_kemiskinan": 42,
  "skor_adaptasi": 56,
  "skor_kerentanan": 56.1,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 87300,
  "zakat_tersalurkan": 5200000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -6.3,
  "lng": 107.3,
  "tren": [
   48.0,
   49.5,
   51.0,
   50.9,
   52.4,
   53.3,
   56.1
  ],
  "proyeksi": {
   "2030-ssp245": 79.6,
   "2030-ssp585": 82.1,
   "2045-ssp245": 82.7,
   "2045-ssp585": 87.6
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.37,
   "gharimin": 0.12,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "3204",
  "nama": "Kab. Bandung",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Barat",
  "kode_provinsi": "32",
  "skor_bahaya": 72,
  "skor_kemiskinan": 40,
  "skor_adaptasi": 60,
  "skor_kerentanan": 52.8,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 64800,
  "zakat_tersalurkan": 6000000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -7.02,
  "lng": 107.53,
  "tren": [
   44.3,
   44.8,
   45.2,
   46.9,
   48.7,
   51.1,
   52.8
  ],
  "proyeksi": {
   "2030-ssp245": 75.5,
   "2030-ssp585": 77.8,
   "2045-ssp245": 78.3,
   "2045-ssp585": 82.9
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.37,
   "gharimin": 0.07,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3205",
  "nama": "Kab. Garut",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Barat",
  "kode_provinsi": "32",
  "skor_bahaya": 68,
  "skor_kemiskinan": 60,
  "skor_adaptasi": 47,
  "skor_kerentanan": 61.5,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 92100,
  "zakat_tersalurkan": 3600000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -7.22,
  "lng": 107.9,
  "tren": [
   54.0,
   54.2,
   54.3,
   55.2,
   56.7,
   57.7,
   61.5
  ],
  "proyeksi": {
   "2030-ssp245": 71.7,
   "2030-ssp585": 74.1,
   "2045-ssp245": 74.7,
   "2045-ssp585": 79.6
  },
  "komposisi_asnaf": {
   "fakir": 0.54,
   "miskin": 0.35,
   "gharimin": 0.07,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "3403",
  "nama": "Kab. Gunungkidul",
  "tingkat": "kabupaten",
  "provinsi": "DI Yogyakarta",
  "kode_provinsi": "34",
  "skor_bahaya": 74,
  "skor_kemiskinan": 63,
  "skor_adaptasi": 52,
  "skor_kerentanan": 63.6,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 71500,
  "zakat_tersalurkan": 3300000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -7.98,
  "lng": 110.6,
  "tren": [
   54.0,
   56.2,
   57.6,
   59.1,
   61.4,
   62.1,
   63.6
  ],
  "proyeksi": {
   "2030-ssp245": 78.0,
   "2030-ssp585": 80.7,
   "2045-ssp245": 81.3,
   "2045-ssp585": 86.7
  },
  "komposisi_asnaf": {
   "fakir": 0.39,
   "miskin": 0.42,
   "gharimin": 0.14,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "3315",
  "nama": "Kab. Grobogan",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Tengah",
  "kode_provinsi": "33",
  "skor_bahaya": 73,
  "skor_kemiskinan": 59,
  "skor_adaptasi": 49,
  "skor_kerentanan": 62.6,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 83900,
  "zakat_tersalurkan": 2700000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -7.1,
  "lng": 110.9,
  "tren": [
   52.1,
   53.1,
   55.1,
   55.4,
   58.4,
   59.7,
   62.6
  ],
  "proyeksi": {
   "2030-ssp245": 76.9,
   "2030-ssp585": 79.6,
   "2045-ssp245": 80.2,
   "2045-ssp585": 85.5
  },
  "komposisi_asnaf": {
   "fakir": 0.5,
   "miskin": 0.38,
   "gharimin": 0.09,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3524",
  "nama": "Kab. Lamongan",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Timur",
  "kode_provinsi": "35",
  "skor_bahaya": 75,
  "skor_kemiskinan": 55,
  "skor_adaptasi": 53,
  "skor_kerentanan": 61.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 76400,
  "zakat_tersalurkan": 3000000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -7.12,
  "lng": 112.33,
  "tren": [
   49.8,
   52.4,
   54.8,
   55.8,
   58.3,
   60.3,
   61.0
  ],
  "proyeksi": {
   "2030-ssp245": 78.6,
   "2030-ssp585": 81.0,
   "2045-ssp245": 81.6,
   "2045-ssp585": 86.4
  },
  "komposisi_asnaf": {
   "fakir": 0.5,
   "miskin": 0.37,
   "gharimin": 0.08,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "3527",
  "nama": "Kab. Sampang",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Timur",
  "kode_provinsi": "35",
  "skor_bahaya": 77,
  "skor_kemiskinan": 72,
  "skor_adaptasi": 39,
  "skor_kerentanan": 71.2,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 102300,
  "zakat_tersalurkan": 1600000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -7.05,
  "lng": 113.25,
  "tren": [
   63.1,
   63.6,
   64.5,
   66.2,
   67.5,
   68.7,
   71.2
  ],
  "proyeksi": {
   "2030-ssp245": 81.2,
   "2030-ssp585": 83.9,
   "2045-ssp245": 84.6,
   "2045-ssp585": 90.2
  },
  "komposisi_asnaf": {
   "fakir": 0.51,
   "miskin": 0.4,
   "gharimin": 0.06,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3522",
  "nama": "Kab. Bojonegoro",
  "tingkat": "kabupaten",
  "provinsi": "Jawa Timur",
  "kode_provinsi": "35",
  "skor_bahaya": 74,
  "skor_kemiskinan": 56,
  "skor_adaptasi": 51,
  "skor_kerentanan": 61.5,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 81200,
  "zakat_tersalurkan": 3400000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -7.25,
  "lng": 111.88,
  "tren": [
   54.4,
   55.7,
   55.8,
   57.9,
   59.9,
   61.2,
   61.5
  ],
  "proyeksi": {
   "2030-ssp245": 77.6,
   "2030-ssp585": 79.9,
   "2045-ssp245": 80.5,
   "2045-ssp585": 85.2
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.3,
   "gharimin": 0.12,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3602",
  "nama": "Kab. Lebak",
  "tingkat": "kabupaten",
  "provinsi": "Banten",
  "kode_provinsi": "36",
  "skor_bahaya": 69,
  "skor_kemiskinan": 58,
  "skor_adaptasi": 45,
  "skor_kerentanan": 61.6,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 73800,
  "zakat_tersalurkan": 2200000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -6.56,
  "lng": 106.25,
  "tren": [
   50.8,
   52.7,
   53.2,
   54.6,
   56.9,
   57.6,
   61.6
  ],
  "proyeksi": {
   "2030-ssp245": 72.3,
   "2030-ssp585": 74.5,
   "2045-ssp245": 75.1,
   "2045-ssp585": 79.5
  },
  "komposisi_asnaf": {
   "fakir": 0.5,
   "miskin": 0.39,
   "gharimin": 0.08,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "3172",
  "nama": "Kota Jakarta Utara",
  "tingkat": "kabupaten",
  "provinsi": "DKI Jakarta",
  "kode_provinsi": "31",
  "skor_bahaya": 86,
  "skor_kemiskinan": 30,
  "skor_adaptasi": 72,
  "skor_kerentanan": 51.9,
  "bahaya_utama": "rob",
  "populasi_terdampak": 141000,
  "zakat_tersalurkan": 9800000000,
  "asnaf_dominan": "gharimin",
  "mata_pencaharian": "nelayan & petambak",
  "lat": -6.13,
  "lng": 106.88,
  "tren": [
   45.8,
   46.0,
   47.8,
   48.8,
   49.8,
   51.6,
   51.9
  ],
  "proyeksi": {
   "2030-ssp245": 91.2,
   "2030-ssp585": 94.6,
   "2045-ssp245": 95.5,
   "2045-ssp585": 100
  },
  "komposisi_asnaf": {
   "fakir": 0.48,
   "miskin": 0.4,
   "gharimin": 0.09,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "1108",
  "nama": "Kab. Aceh Utara",
  "tingkat": "kabupaten",
  "provinsi": "Aceh",
  "kode_provinsi": "11",
  "skor_bahaya": 78,
  "skor_kemiskinan": 66,
  "skor_adaptasi": 41,
  "skor_kerentanan": 69.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 88700,
  "zakat_tersalurkan": 2500000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": 5.0,
  "lng": 97.2,
  "tren": [
   59.9,
   61.5,
   62.0,
   63.4,
   63.8,
   66.1,
   69.0
  ],
  "proyeksi": {
   "2030-ssp245": 81.7,
   "2030-ssp585": 84.2,
   "2045-ssp245": 84.9,
   "2045-ssp585": 89.9
  },
  "komposisi_asnaf": {
   "fakir": 0.58,
   "miskin": 0.31,
   "gharimin": 0.09,
   "ibnu sabil": 0.02
  }
 },
 {
  "kode_wilayah": "1205",
  "nama": "Kab. Langkat",
  "tingkat": "kabupaten",
  "provinsi": "Sumatera Utara",
  "kode_provinsi": "12",
  "skor_bahaya": 71,
  "skor_kemiskinan": 51,
  "skor_adaptasi": 48,
  "skor_kerentanan": 59.2,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 67200,
  "zakat_tersalurkan": 2100000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": 3.75,
  "lng": 98.3,
  "tren": [
   53.0,
   54.1,
   55.6,
   55.5,
   55.9,
   57.1,
   59.2
  ],
  "proyeksi": {
   "2030-ssp245": 74.4,
   "2030-ssp585": 76.7,
   "2045-ssp245": 77.2,
   "2045-ssp585": 81.8
  },
  "komposisi_asnaf": {
   "fakir": 0.46,
   "miskin": 0.39,
   "gharimin": 0.11,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "1305",
  "nama": "Kab. Padang Pariaman",
  "tingkat": "kabupaten",
  "provinsi": "Sumatera Barat",
  "kode_provinsi": "13",
  "skor_bahaya": 66,
  "skor_kemiskinan": 44,
  "skor_adaptasi": 55,
  "skor_kerentanan": 53.0,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 39800,
  "zakat_tersalurkan": 1900000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -0.6,
  "lng": 100.25,
  "tren": [
   45.9,
   47.5,
   47.2,
   48.6,
   49.7,
   50.6,
   53.0
  ],
  "proyeksi": {
   "2030-ssp245": 69.2,
   "2030-ssp585": 71.3,
   "2045-ssp245": 71.8,
   "2045-ssp585": 76.0
  },
  "komposisi_asnaf": {
   "fakir": 0.5,
   "miskin": 0.39,
   "gharimin": 0.08,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "1602",
  "nama": "Kab. Ogan Komering Ilir",
  "tingkat": "kabupaten",
  "provinsi": "Sumatera Selatan",
  "kode_provinsi": "16",
  "skor_bahaya": 72,
  "skor_kemiskinan": 56,
  "skor_adaptasi": 42,
  "skor_kerentanan": 62.9,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 79600,
  "zakat_tersalurkan": 1700000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -3.4,
  "lng": 105.5,
  "tren": [
   51.0,
   53.9,
   54.6,
   56.3,
   57.2,
   59.2,
   62.9
  ],
  "proyeksi": {
   "2030-ssp245": 75.9,
   "2030-ssp585": 78.5,
   "2045-ssp245": 79.1,
   "2045-ssp585": 84.3
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.31,
   "gharimin": 0.1,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "1805",
  "nama": "Kab. Tulang Bawang",
  "tingkat": "kabupaten",
  "provinsi": "Lampung",
  "kode_provinsi": "18",
  "skor_bahaya": 67,
  "skor_kemiskinan": 54,
  "skor_adaptasi": 44,
  "skor_kerentanan": 59.7,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 48300,
  "zakat_tersalurkan": 1200000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -4.4,
  "lng": 105.4,
  "tren": [
   50.6,
   52.8,
   54.3,
   54.2,
   55.3,
   56.4,
   59.7
  ],
  "proyeksi": {
   "2030-ssp245": 70.2,
   "2030-ssp585": 72.4,
   "2045-ssp245": 72.9,
   "2045-ssp585": 77.2
  },
  "komposisi_asnaf": {
   "fakir": 0.54,
   "miskin": 0.34,
   "gharimin": 0.09,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "6303",
  "nama": "Kab. Banjar",
  "tingkat": "kabupaten",
  "provinsi": "Kalimantan Selatan",
  "kode_provinsi": "63",
  "skor_bahaya": 80,
  "skor_kemiskinan": 38,
  "skor_adaptasi": 50,
  "skor_kerentanan": 57.8,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 91800,
  "zakat_tersalurkan": 2600000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -3.32,
  "lng": 114.99,
  "tren": [
   48.1,
   48.6,
   51.3,
   52.6,
   54.8,
   56.3,
   57.8
  ],
  "proyeksi": {
   "2030-ssp245": 83.8,
   "2030-ssp585": 86.4,
   "2045-ssp245": 87.0,
   "2045-ssp585": 92.2
  },
  "komposisi_asnaf": {
   "fakir": 0.49,
   "miskin": 0.32,
   "gharimin": 0.14,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "6203",
  "nama": "Kab. Kapuas",
  "tingkat": "kabupaten",
  "provinsi": "Kalimantan Tengah",
  "kode_provinsi": "62",
  "skor_bahaya": 74,
  "skor_kemiskinan": 46,
  "skor_adaptasi": 40,
  "skor_kerentanan": 60.7,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 52700,
  "zakat_tersalurkan": 1100000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -2.0,
  "lng": 114.4,
  "tren": [
   50.8,
   51.9,
   54.3,
   54.7,
   56.2,
   58.5,
   60.7
  ],
  "proyeksi": {
   "2030-ssp245": 77.6,
   "2030-ssp585": 79.9,
   "2045-ssp245": 80.5,
   "2045-ssp585": 85.2
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.32,
   "gharimin": 0.08,
   "ibnu sabil": 0.05
  }
 },
 {
  "kode_wilayah": "6101",
  "nama": "Kab. Sambas",
  "tingkat": "kabupaten",
  "provinsi": "Kalimantan Barat",
  "kode_provinsi": "61",
  "skor_bahaya": 70,
  "skor_kemiskinan": 50,
  "skor_adaptasi": 43,
  "skor_kerentanan": 59.8,
  "bahaya_utama": "rob",
  "populasi_terdampak": 46900,
  "zakat_tersalurkan": 1300000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "nelayan & petambak",
  "lat": 1.36,
  "lng": 109.3,
  "tren": [
   50.3,
   50.6,
   52.8,
   53.2,
   54.9,
   56.1,
   59.8
  ],
  "proyeksi": {
   "2030-ssp245": 74.2,
   "2030-ssp585": 77.0,
   "2045-ssp245": 77.7,
   "2045-ssp585": 83.3
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.4,
   "gharimin": 0.1,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "5206",
  "nama": "Kab. Bima",
  "tingkat": "kabupaten",
  "provinsi": "Nusa Tenggara Barat",
  "kode_provinsi": "52",
  "skor_bahaya": 79,
  "skor_kemiskinan": 70,
  "skor_adaptasi": 38,
  "skor_kerentanan": 71.6,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 84100,
  "zakat_tersalurkan": 1400000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -8.5,
  "lng": 118.6,
  "tren": [
   63.6,
   64.8,
   65.5,
   67.7,
   69.2,
   70.9,
   71.6
  ],
  "proyeksi": {
   "2030-ssp245": 83.3,
   "2030-ssp585": 86.1,
   "2045-ssp245": 86.8,
   "2045-ssp585": 92.5
  },
  "komposisi_asnaf": {
   "fakir": 0.55,
   "miskin": 0.31,
   "gharimin": 0.11,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "5302",
  "nama": "Kab. Sumba Timur",
  "tingkat": "kabupaten",
  "provinsi": "Nusa Tenggara Timur",
  "kode_provinsi": "53",
  "skor_bahaya": 86,
  "skor_kemiskinan": 88,
  "skor_adaptasi": 26,
  "skor_kerentanan": 83.7,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 98400,
  "zakat_tersalurkan": 600000000,
  "asnaf_dominan": "fakir",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -9.9,
  "lng": 120.2,
  "tren": [
   72.9,
   73.7,
   75.9,
   77.1,
   79.4,
   80.6,
   83.7
  ],
  "proyeksi": {
   "2030-ssp245": 90.6,
   "2030-ssp585": 93.7,
   "2045-ssp245": 94.5,
   "2045-ssp585": 100
  },
  "komposisi_asnaf": {
   "fakir": 0.52,
   "miskin": 0.36,
   "gharimin": 0.08,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "5301",
  "nama": "Kab. Kupang",
  "tingkat": "kabupaten",
  "provinsi": "Nusa Tenggara Timur",
  "kode_provinsi": "53",
  "skor_bahaya": 84,
  "skor_kemiskinan": 82,
  "skor_adaptasi": 30,
  "skor_kerentanan": 79.8,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 89200,
  "zakat_tersalurkan": 800000000,
  "asnaf_dominan": "fakir",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -10.0,
  "lng": 123.9,
  "tren": [
   72.9,
   74.4,
   75.7,
   75.6,
   76.1,
   78.2,
   79.8
  ],
  "proyeksi": {
   "2030-ssp245": 88.5,
   "2030-ssp585": 91.6,
   "2045-ssp245": 92.3,
   "2045-ssp585": 98.4
  },
  "komposisi_asnaf": {
   "fakir": 0.5,
   "miskin": 0.36,
   "gharimin": 0.1,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "5321",
  "nama": "Kab. Malaka",
  "tingkat": "kabupaten",
  "provinsi": "Nusa Tenggara Timur",
  "kode_provinsi": "53",
  "skor_bahaya": 81,
  "skor_kemiskinan": 86,
  "skor_adaptasi": 27,
  "skor_kerentanan": 80.8,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 58600,
  "zakat_tersalurkan": 400000000,
  "asnaf_dominan": "fakir",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -9.55,
  "lng": 124.9,
  "tren": [
   72.1,
   72.5,
   74.2,
   74.9,
   77.5,
   78.7,
   80.8
  ],
  "proyeksi": {
   "2030-ssp245": 84.9,
   "2030-ssp585": 87.5,
   "2045-ssp245": 88.1,
   "2045-ssp585": 93.3
  },
  "komposisi_asnaf": {
   "fakir": 0.51,
   "miskin": 0.33,
   "gharimin": 0.13,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "7322",
  "nama": "Kab. Luwu Utara",
  "tingkat": "kabupaten",
  "provinsi": "Sulawesi Selatan",
  "kode_provinsi": "73",
  "skor_bahaya": 77,
  "skor_kemiskinan": 52,
  "skor_adaptasi": 46,
  "skor_kerentanan": 62.5,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 51300,
  "zakat_tersalurkan": 1000000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -2.6,
  "lng": 120.2,
  "tren": [
   53.8,
   54.8,
   54.9,
   56.9,
   58.8,
   59.6,
   62.5
  ],
  "proyeksi": {
   "2030-ssp245": 80.7,
   "2030-ssp585": 83.2,
   "2045-ssp245": 83.8,
   "2045-ssp585": 88.7
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.37,
   "gharimin": 0.13,
   "ibnu sabil": 0.03
  }
 },
 {
  "kode_wilayah": "7304",
  "nama": "Kab. Jeneponto",
  "tingkat": "kabupaten",
  "provinsi": "Sulawesi Selatan",
  "kode_provinsi": "73",
  "skor_bahaya": 75,
  "skor_kemiskinan": 64,
  "skor_adaptasi": 41,
  "skor_kerentanan": 67.2,
  "bahaya_utama": "kekeringan",
  "populasi_terdampak": 60800,
  "zakat_tersalurkan": 900000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani lahan kering & peternak",
  "lat": -5.6,
  "lng": 119.7,
  "tren": [
   55.7,
   58.2,
   60.8,
   62.5,
   63.8,
   64.2,
   67.2
  ],
  "proyeksi": {
   "2030-ssp245": 79.0,
   "2030-ssp585": 81.8,
   "2045-ssp245": 82.4,
   "2045-ssp585": 87.8
  },
  "komposisi_asnaf": {
   "fakir": 0.45,
   "miskin": 0.42,
   "gharimin": 0.09,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "7310",
  "nama": "Kab. Sigi",
  "tingkat": "kabupaten",
  "provinsi": "Sulawesi Tengah",
  "kode_provinsi": "72",
  "skor_bahaya": 76,
  "skor_kemiskinan": 62,
  "skor_adaptasi": 39,
  "skor_kerentanan": 67.3,
  "bahaya_utama": "banjir",
  "populasi_terdampak": 49500,
  "zakat_tersalurkan": 700000000,
  "asnaf_dominan": "miskin",
  "mata_pencaharian": "petani padi & buruh tani",
  "lat": -1.4,
  "lng": 119.97,
  "tren": [
   55.8,
   57.9,
   58.3,
   60.3,
   61.4,
   63.0,
   67.3
  ],
  "proyeksi": {
   "2030-ssp245": 79.6,
   "2030-ssp585": 82.1,
   "2045-ssp245": 82.7,
   "2045-ssp585": 87.6
  },
  "komposisi_asnaf": {
   "fakir": 0.53,
   "miskin": 0.36,
   "gharimin": 0.07,
   "ibnu sabil": 0.04
  }
 },
 {
  "kode_wilayah": "8101",
  "nama": "Kab. Maluku Tengah",
  "tingkat": "kabupaten",
  "provinsi": "Maluku",
  "kode_provinsi": "81",
  "skor_bahaya": 72,
  "skor_kemiskinan": 76,
  "skor_adaptasi": 32,
  "skor_kerentanan": 72.4,
  "bahaya_utama": "rob",
  "populasi_terdampak": 63400,
  "zakat_tersalurkan": 500000000,
  "asnaf_dominan": "fakir",
  "mata_pencaharian": "nelayan & petambak",
  "lat": -3.3,
  "lng": 129.0,
  "tren": [
   61.7,
   63.2,
   65.7,
   66.6,
   67.0,
   68.1,
   72.4
  ],
  "proyeksi": {
   "2030-ssp245": 76.3,
   "2030-ssp585": 79.2,
   "2045-ssp245": 79.9,
   "2045-ssp585": 85.7
  },
  "komposisi_asnaf": {
   "fakir": 0.44,
   "miskin": 0.42,
   "gharimin": 0.12,
   "ibnu sabil": 0.02
  }
 },
 {
  "kode_wilayah": "9416",
  "nama": "Kab. Asmat",
  "tingkat": "kabupaten",
  "provinsi": "Papua",
  "kode_provinsi": "94",
  "skor_bahaya": 78,
  "skor_kemiskinan": 92,
  "skor_adaptasi": 18,
  "skor_kerentanan": 83.9,
  "bahaya_utama": "rob",
  "populasi_terdampak": 47200,
  "zakat_tersalurkan": 300000000,
  "asnaf_dominan": "fakir",
  "mata_pencaharian": "nelayan & petambak",
  "lat": -5.5,
  "lng": 138.4,
  "tren": [
   76.3,
   76.2,
   76.8,
   78.1,
   79.0,
   81.0,
   83.9
  ],
  "proyeksi": {
   "2030-ssp245": 82.7,
   "2030-ssp585": 85.8,
   "2045-ssp245": 86.6,
   "2045-ssp585": 92.8
  },
  "komposisi_asnaf": {
   "fakir": 0.47,
   "miskin": 0.4,
   "gharimin": 0.11,
   "ibnu sabil": 0.02
  }
 }
],
  geo: {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"kode":"52"},"geometry":{"type":"MultiPolygon","coordinates":[[[[117.5649,-8.40792],[117.6347,-8.5577],[117.7339,-8.56494],[117.8005,-8.72671],[117.9643,-8.74235],[118.042,-8.66336],[118.2592,-8.65611],[118.2602,-8.58876],[118.0745,-8.45144],[117.9755,-8.46654],[117.69,-8.23815],[117.7187,-8.16267],[117.923,-8.08018],[118.1397,-8.13938],[118.1771,-8.26983],[118.3065,-8.37104],[118.4821,-8.24431],[118.6543,-8.28915],[118.6959,-8.3531],[118.666,-8.49455],[118.7134,-8.49515],[118.7031,-8.40608],[118.8045,-8.28351],[119.0086,-8.3121],[119.0402,-8.64027],[119.1626,-8.63554],[119.1608,-8.70023],[119.136,-8.7498],[118.9733,-8.74543],[118.9094,-8.67704],[118.8719,-8.72035],[118.7487,-8.69728],[118.7364,-8.75995],[118.952,-8.80798],[118.6678,-8.8026],[118.4338,-8.88751],[118.368,-8.84007],[118.4147,-8.64578],[118.1125,-8.88099],[118.0707,-8.84253],[117.8884,-8.92488],[117.6781,-8.92221],[117.4106,-9.05105],[117.206,-9.02215],[117.0162,-9.11278],[116.7278,-8.98057],[116.8032,-8.79202],[116.7527,-8.67578],[116.7814,-8.59762],[117.1216,-8.37079],[117.39,-8.47539],[117.4425,-8.40256],[117.5649,-8.40792]]],[[[119.0875,-8.12935],[119.1206,-8.22137],[119.0524,-8.26051],[119.0052,-8.17625],[119.0875,-8.12935]]],[[[117.4797,-8.19131],[117.6882,-8.17372],[117.5289,-8.39122],[117.4692,-8.35647],[117.4797,-8.19131]]],[[[116.3869,-8.95521],[116.3737,-8.90937],[116.1917,-8.91269],[116.1736,-8.86446],[116.0229,-8.90188],[115.8193,-8.74502],[116.0682,-8.72393],[116.058,-8.44775],[116.37,-8.2136],[116.7153,-8.35162],[116.6654,-8.55788],[116.5104,-8.78135],[116.5681,-8.89245],[116.4771,-8.92124],[116.475,-8.82107],[116.4287,-8.82842],[116.3869,-8.95521]]]]}},{"type":"Feature","properties":{"kode":"75"},"geometry":{"type":"Polygon","coordinates":[[[122.188141,1.045298],[122.226273,1.00335],[122.4674,1.025363],[122.847275,0.816487],[122.925346,0.861357],[122.948494,0.965814],[123.117294,0.92862],[123.368813,0.661965],[123.494171,0.636227],[123.51918,0.449638],[123.465736,0.330308],[123.269981,0.325868],[123.071152,0.510825],[122.712585,0.478211],[122.406532,0.518997],[121.814293,0.414142],[121.717461,0.521079],[121.534134,0.550474],[121.528786,0.49727],[121.345665,0.474487],[121.35453,0.571319],[121.247383,0.597502],[121.168579,0.690562],[121.386032,0.870693],[121.499672,0.850688],[121.882187,0.9727],[121.968292,0.894658],[122.188141,1.045298]],[[123.007317,0.617577],[122.980988,0.556596],[123.020927,0.563377],[123.007317,0.617577]]]}},{"type":"Feature","properties":{"kode":"74"},"geometry":{"type":"MultiPolygon","coordinates":[[[[124.07579,-5.99996],[123.987404,-5.965688],[123.991692,-5.87584],[124.050156,-5.91096],[124.07579,-5.99996]]],[[[123.618355,-5.385718],[123.51709,-5.270007],[123.647369,-5.299086],[123.618355,-5.385718]]],[[[123.003357,-3.999794],[123.254143,-4.066495],[123.118874,-4.261611],[122.996155,-4.201651],[122.945335,-4.099027],[123.003357,-3.999794]]],[[[122.993774,-4.828905],[122.962776,-5.195495],[123.032532,-5.13616],[123.21479,-5.304791],[123.135201,-5.395737],[122.888062,-5.441972],[122.846359,-5.485299],[122.897095,-5.56276],[122.797371,-5.695441],[122.744087,-5.637722],[122.623024,-5.679935],[122.563545,-5.480018],[122.647797,-5.425014],[122.651276,-5.326329],[122.732628,-5.241536],[122.793892,-5.241115],[122.806274,-5.200619],[122.737282,-5.170575],[122.858742,-4.783739],[122.850807,-4.590418],[122.910202,-4.460138],[123.040962,-4.370708],[123.199295,-4.605664],[123.21109,-4.722411],[123.171539,-4.834829],[123.103752,-4.713612],[122.993774,-4.828905]]],[[[123.045197,-3.594425],[123.161133,-3.560991],[123.181412,-3.602412],[123.113304,-3.638883],[123.045197,-3.594425]]],[[[120.98423,-2.835341],[121.078339,-2.778087],[121.167259,-2.970928],[121.315308,-3.065957],[121.645721,-2.883784],[121.797012,-2.710249],[121.940231,-2.932159],[122.090057,-2.961801],[122.274086,-3.138374],[122.292755,-3.35732],[122.390915,-3.405149],[122.372299,-3.463288],[122.322395,-3.380808],[122.238159,-3.398722],[122.302132,-3.471626],[122.195618,-3.608036],[122.367409,-3.752801],[122.448067,-3.749501],[122.515129,-3.882586],[122.671906,-3.897003],[122.603531,-3.976277],[122.663445,-4.008508],[122.643234,-4.129524],[122.792816,-4.1576],[122.843758,-4.125524],[122.771515,-4.059357],[122.842255,-4.057042],[122.8918,-4.125212],[122.904427,-4.377195],[122.840179,-4.445022],[122.683952,-4.323638],[122.767426,-4.449976],[122.746147,-4.507518],[122.586288,-4.393665],[122.082832,-4.536929],[122.023575,-4.716242],[122.108398,-4.812253],[121.992233,-4.894716],[121.808197,-4.830569],[121.662598,-4.848654],[121.56263,-4.786319],[121.455299,-4.681352],[121.45945,-4.585207],[121.599144,-4.055925],[121.337173,-3.98036],[121.293785,-3.888254],[120.876328,-3.525793],[120.858788,-3.440268],[121.051331,-3.184905],[121.084557,-2.923684],[120.98423,-2.835341]]],[[[122.275864,-5.388109],[122.322166,-5.108933],[122.382103,-5.084469],[122.321449,-4.834823],[122.374245,-4.743024],[122.668556,-4.609775],[122.730896,-4.638964],[122.762848,-4.887722],[122.58609,-5.182532],[122.640091,-5.352726],[122.545418,-5.438321],[122.524986,-5.288412],[122.463638,-5.400284],[122.275864,-5.388109]]],[[[121.805817,-5.245513],[121.859879,-5.074867],[121.986343,-5.092185],[122.060753,-5.18434],[122.043472,-5.455512],[121.944969,-5.474207],[121.805817,-5.245513]]]]}},{"type":"Feature","properties":{"kode":"34"},"geometry":{"type":"Polygon","coordinates":[[[110.011826,-7.886903],[110.132286,-7.741732],[110.142883,-7.645877],[110.25954,-7.645667],[110.254532,-7.683113],[110.444958,-7.536631],[110.54336,-7.798195],[110.786538,-7.818944],[110.758797,-8.030742],[110.836136,-8.202934],[110.438988,-8.095153],[110.011826,-7.886903]]]}},{"type":"Feature","properties":{"kode":"33"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.829338,-6.74608],[108.952652,-6.83733],[109.027512,-6.774646],[109.116945,-6.849453],[109.284729,-6.873732],[109.525772,-6.783483],[109.83173,-6.91085],[109.994609,-6.926026],[110.218449,-6.858777],[110.360636,-6.958464],[110.439422,-6.946518],[110.567362,-6.805168],[110.72816,-6.449049],[110.920682,-6.406552],[111.03451,-6.421138],[111.089495,-6.595203],[111.208681,-6.687917],[111.353966,-6.700903],[111.493095,-6.616364],[111.694595,-6.752857],[111.566604,-6.951681],[111.62486,-7.065532],[111.580716,-7.201196],[111.448722,-7.280662],[111.438232,-7.353508],[111.219641,-7.295056],[111.241771,-7.24923],[111.146592,-7.262771],[111.112659,-7.415796],[111.180164,-7.709611],[111.283073,-7.744789],[111.314003,-7.85079],[111.269707,-7.930492],[111.140442,-7.938492],[111.108658,-8.065952],[110.956131,-8.063713],[110.904457,-8.210409],[110.788666,-8.154592],[110.786538,-7.818944],[110.54336,-7.798195],[110.444958,-7.536631],[110.254532,-7.683113],[110.25954,-7.645667],[110.142883,-7.645877],[110.042953,-7.89204],[109.277812,-7.701472],[109.105467,-7.685618],[108.993577,-7.744561],[108.96375,-7.715322],[108.876058,-7.694295],[108.827862,-7.599123],[108.804252,-7.673145],[108.738433,-7.609161],[108.662295,-7.340506],[108.560766,-7.334588],[108.556373,-7.171165],[108.777687,-7.104835],[108.76516,-6.896383],[108.829338,-6.74608]]],[[[108.828885,-7.685307],[108.957728,-7.718627],[108.98867,-7.776379],[108.811508,-7.734937],[108.828885,-7.685307]]]]}},{"type":"Feature","properties":{"kode":"36"},"geometry":{"type":"MultiPolygon","coordinates":[[[[106.684662,-6.016144],[106.688759,-6.174209],[106.767433,-6.361234],[106.500175,-6.356728],[106.466515,-6.313413],[106.432259,-6.359931],[106.429398,-6.695778],[106.511475,-6.765959],[106.43618,-6.818825],[106.379082,-6.995171],[105.988388,-6.814358],[105.546936,-6.867788],[105.241913,-6.822674],[105.218208,-6.747766],[105.374222,-6.655813],[105.467102,-6.827007],[105.648323,-6.488072],[105.713791,-6.53336],[105.813004,-6.468743],[105.883545,-6.074547],[106.021919,-5.888695],[106.074554,-5.885445],[106.165306,-6.02962],[106.292465,-5.950864],[106.472466,-6.052454],[106.684662,-6.016144]]],[[[105.246979,-6.565058],[105.242393,-6.63545],[105.204712,-6.650276],[105.183006,-6.542505],[105.246979,-6.565058]]]]}},{"type":"Feature","properties":{"kode":"35"},"geometry":{"type":"MultiPolygon","coordinates":[[[[115.899406,-7.107687],[115.891769,-7.186985],[115.832756,-7.205947],[115.736443,-7.153445],[115.778282,-7.109709],[115.843468,-7.16076],[115.899406,-7.107687]]],[[[115.499336,-6.946886],[115.38356,-6.911211],[115.390144,-6.98852],[115.320747,-6.993716],[115.193825,-6.931066],[115.251526,-6.826602],[115.553787,-6.90412],[115.499336,-6.946886]]],[[[111.694595,-6.752857],[111.832825,-6.799014],[111.972176,-6.765804],[112.060112,-6.890543],[112.411819,-6.865529],[112.5198,-6.905662],[112.544864,-6.848775],[112.602792,-6.89387],[112.674713,-7.225679],[112.782669,-7.214118],[112.836922,-7.30876],[112.843674,-7.586721],[113.154587,-7.746615],[113.280533,-7.786507],[113.481895,-7.698964],[113.784576,-7.733948],[113.838509,-7.684821],[113.931564,-7.699339],[114.0299,-7.606591],[114.095688,-7.699542],[114.239769,-7.700929],[114.449234,-7.804945],[114.337181,-8.422754],[114.443161,-8.637075],[114.569321,-8.661139],[114.591324,-8.750443],[114.349121,-8.744769],[114.375259,-8.698574],[114.317375,-8.624228],[114.045151,-8.639547],[113.942947,-8.56012],[113.8125,-8.546223],[113.79007,-8.488746],[113.73201,-8.526714],[113.61882,-8.442991],[113.387894,-8.398775],[113.243156,-8.284298],[113.072037,-8.284934],[112.875587,-8.409164],[112.781456,-8.387782],[112.670242,-8.446231],[111.969475,-8.282909],[111.776794,-8.257344],[111.672142,-8.373858],[111.41066,-8.279475],[110.904457,-8.210409],[110.956131,-8.063713],[111.108658,-8.065952],[111.140442,-7.938492],[111.269707,-7.930492],[111.314003,-7.85079],[111.283073,-7.744789],[111.180164,-7.709611],[111.112659,-7.415796],[111.146592,-7.262771],[111.241771,-7.24923],[111.219641,-7.295056],[111.438232,-7.353508],[111.448722,-7.280662],[111.580716,-7.201196],[111.62486,-7.065532],[111.566604,-6.951681],[111.694595,-6.752857]]],[[[114.28257,-7.073864],[114.362137,-7.081872],[114.404289,-7.172804],[114.3144,-7.167445],[114.28257,-7.073864]]],[[[112.845161,-6.898797],[113.912071,-6.864436],[114.121918,-6.980549],[113.880783,-7.07095],[113.883873,-7.135548],[113.604645,-7.127305],[113.551178,-7.2346],[113.092392,-7.229101],[112.690369,-7.151152],[112.683548,-7.031513],[112.845161,-6.898797]]],[[[113.271072,-8.464405],[113.400581,-8.458902],[113.399284,-8.49789],[113.30629,-8.509363],[113.271072,-8.464405]]],[[[112.67501,-5.859471],[112.564216,-5.833381],[112.671714,-5.72369],[112.731986,-5.793182],[112.67501,-5.859471]]]]}},{"type":"Feature","properties":{"kode":"82"},"geometry":{"type":"MultiPolygon","coordinates":[[[[129.398895,-0.025581],[129.536438,-0.137458],[129.562119,-0.181339],[129.510452,-0.205838],[129.375412,-0.064561],[129.398895,-0.025581]]],[[[127.742072,0.816295],[127.8397,0.80633],[127.932,0.88722],[127.98,1.08488],[128.1659,1.12245],[128.18,1.23451],[128.0916,1.26956],[128.1604,1.36163],[128.4626,1.54464],[128.7197,1.57194],[128.6797,1.48842],[128.7418,1.33011],[128.6842,1.07075],[128.3338,0.91042],[128.2815,0.86741],[128.3166,0.81788],[128.2052,0.80334],[128.3137,0.6577],[128.6909,0.54882],[128.6767,0.33845],[128.8473,0.26065],[128.0398,0.47984],[127.9154,0.45615],[127.8716,0.30896],[127.9191,0.27721],[127.8873,0.00948],[127.9867,-0.26911],[128.2195,-0.70072],[128.3741,-0.84649],[128.3489,-0.88716],[128.2325,-0.8483],[128.2714,-0.82066],[128.239,-0.77439],[128.0045,-0.66521],[127.8621,-0.36417],[127.6595,-0.21024],[127.7323,0.31467],[127.619,0.36049],[127.5249,0.55191],[127.5449,0.72851],[127.6378,0.83297],[127.5083,0.85684],[127.4721,1.059],[127.4192,1.02931],[127.3987,1.0772],[127.5795,1.76204],[127.8375,2.09089],[128.0521,2.20415],[127.9438,1.98637],[127.8478,1.92255],[127.8422,1.81305],[128.0203,1.70558],[127.9981,1.3337],[127.8934,1.14881],[127.6247,0.96958],[127.742072,0.816295]]],[[[128.2792,2.00001],[128.3096,2.08133],[128.2244,2.30658],[128.3619,2.50778],[128.5646,2.64851],[128.6942,2.48003],[128.6307,2.21973],[128.5306,2.07179],[128.2792,2.00001]]],[[[128.1611,2.41114],[128.1882,2.36684],[128.184,2.29051],[128.129,2.32644],[128.1611,2.41114]]],[[[127.5001,-1.72513],[127.4048,-1.66221],[127.4126,-1.48042],[127.71,-1.33658],[128.1673,-1.6148],[128.0989,-1.71322],[127.885,-1.68033],[127.5001,-1.72513]]],[[[127.4752,-0.65588],[127.285,-0.46953],[127.3553,-0.32239],[127.4514,-0.41708],[127.5376,-0.31027],[127.6887,-0.46297],[127.5993,-0.61639],[127.6861,-0.70913],[127.8006,-0.67786],[127.906,-0.77903],[127.7942,-0.85696],[127.693,-0.84385],[127.6537,-0.74391],[127.4728,-0.81791],[127.438,-0.74074],[127.4752,-0.65588]]],[[[127.6721,-1.29242],[127.4654,-1.23999],[127.5378,-1.17793],[127.6935,-1.22769],[127.6721,-1.29242]]],[[[127.3835,0.72289],[127.4478,0.74363],[127.4277,0.63181],[127.3691,0.64163],[127.3835,0.72289]]],[[[127.3044,0.76429],[127.3168,0.86424],[127.3848,0.83086],[127.3733,0.7637],[127.3044,0.76429]]],[[[127.1612,-0.72234],[127.2087,-0.64521],[127.2975,-0.68594],[127.3295,-0.78217],[127.191,-0.77644],[127.1612,-0.72234]]],[[[127.2657,-0.28156],[127.2517,-0.49356],[127.1193,-0.51607],[127.1443,-0.2604],[127.2657,-0.28156]]],[[[125.9997,-1.91651],[125.4509,-1.94292],[125.3303,-1.83265],[125.372,-1.78057],[126.3354,-1.84281],[125.9997,-1.91651]]],[[[126.0422,-2.47304],[125.8583,-2.08804],[125.9136,-1.9759],[125.9811,-2.01085],[125.9634,-2.18431],[126.0692,-2.41961],[126.0422,-2.47304]]],[[[124.936874,-1.929927],[124.865112,-1.893923],[124.398903,-2.024912],[124.339363,-1.883676],[124.363998,-1.71271],[124.52462,-1.634892],[125.076996,-1.762628],[125.131844,-1.686383],[125.32077,-1.784913],[125.311661,-1.895589],[124.936874,-1.929927]]]]}},{"type":"Feature","properties":{"kode":"81"},"geometry":{"type":"MultiPolygon","coordinates":[[[[134.8759,-6.29141],[134.9079,-6.32475],[134.8068,-6.46157],[134.7981,-6.39306],[134.8759,-6.29141]]],[[[134.2807,-6.05256],[134.4244,-6.02619],[134.4382,-6.01891],[134.5357,-5.92285],[134.5723,-5.94052],[134.6581,-5.94721],[134.7817,-6.09747],[134.7274,-6.3072],[134.5489,-6.3525],[134.5054,-6.30132],[134.4592,-6.27077],[134.3971,-6.25802],[134.3863,-6.22362],[134.3368,-6.21551],[134.2807,-6.05256]]],[[[134.7577,-5.85453],[134.7117,-5.97952],[134.6304,-5.92205],[134.5374,-5.92008],[134.3546,-6.0354],[134.3007,-5.90053],[134.3723,-5.85071],[134.3688,-5.77119],[134.2142,-5.72281],[134.2405,-5.67587],[134.3467,-5.73121],[134.4543,-5.5571],[134.5289,-5.56647],[134.538,-5.63655],[134.5491,-5.65535],[134.619,-5.7287],[134.6405,-5.71887],[134.6972,-5.81007],[134.7577,-5.85453]]],[[[134.6917,-6.44599],[134.7625,-6.53462],[134.6709,-6.55956],[134.6397,-6.49611],[134.6917,-6.44599]]],[[[134.7601,-6.63249],[134.6705,-6.78497],[134.6232,-6.76017],[134.7244,-6.58593],[134.7601,-6.63249]]],[[[134.5345,-5.5749],[134.7514,-5.63225],[134.731,-5.72249],[134.6427,-5.71633],[134.6165,-5.72584],[134.5488,-5.65219],[134.5345,-5.5749]]],[[[134.506,-5.42404],[134.6513,-5.44671],[134.7011,-5.5677],[134.5092,-5.54835],[134.506,-5.42404]]],[[[134.3848,-6.40067],[134.4624,-6.27898],[134.5468,-6.36615],[134.5967,-6.38789],[134.548,-6.53803],[134.493,-6.45866],[134.4075,-6.39784],[134.3848,-6.40067]]],[[[134.5276,-6.60318],[134.3282,-6.86583],[134.2023,-6.92197],[134.0711,-6.83181],[134.1407,-6.46422],[134.097,-6.17273],[134.2173,-6.22012],[134.3474,-6.39878],[134.4599,-6.43869],[134.5276,-6.60318]]],[[[134.2773,-6.17358],[134.4229,-6.28203],[134.3477,-6.34415],[134.2305,-6.20123],[134.1807,-6.20193],[134.1245,-6.0387],[134.2289,-6.0174],[134.2773,-6.17358]]],[[[132.918211,-5.790491],[133.117011,-5.274701],[133.179011,-5.291151],[133.122111,-5.555371],[132.968511,-5.737791],[132.900311,-5.950561],[132.918211,-5.790491]]],[[[132.763011,-5.660381],[132.756311,-5.574361],[132.797511,-5.559731],[132.821311,-5.673781],[132.763011,-5.660381]]],[[[132.696911,-5.752801],[132.644411,-5.635551],[132.692111,-5.601881],[132.811311,-5.784241],[132.789511,-5.938101],[132.671911,-5.903691],[132.696911,-5.752801]]],[[[131.897411,-7.176801],[131.723211,-7.169341],[131.716611,-7.131491],[131.929811,-7.111851],[131.949211,-7.248091],[131.897411,-7.176801]]],[[[131.148111,-7.733321],[131.107111,-7.701931],[131.233511,-7.473591],[131.340311,-7.442291],[131.475911,-7.229681],[131.529611,-7.228881],[131.517611,-7.158241],[131.646611,-7.112811],[131.650311,-7.174691],[131.716911,-7.159711],[131.738411,-7.219041],[131.632611,-7.247311],[131.675411,-7.359271],[131.621311,-7.645961],[131.483211,-7.727291],[131.301711,-8.016321],[131.271711,-7.956001],[131.230311,-8.002691],[131.105011,-7.990961],[131.086911,-7.837771],[131.148111,-7.733321]]],[[[130.957397,-4.476324],[131.228928,-4.456224],[131.390854,-4.377274],[131.493683,-4.41465],[131.455231,-4.502821],[131.272049,-4.541338],[131.086044,-4.477498],[130.989182,-4.514464],[130.957397,-4.476324]]],[[[131.4184,-3.94902],[131.4501,-4.07044],[131.4216,-4.07687],[131.3673,-3.96939],[131.4184,-3.94902]]],[[[131.169111,-8.112971],[130.891211,-8.238591],[130.896411,-8.286951],[130.789911,-8.342211],[130.767511,-8.313871],[131.035511,-8.071791],[131.169111,-8.112971]]],[[[131.041011,-7.499981],[130.969711,-7.484171],[130.990111,-7.424961],[131.162611,-7.400661],[131.041011,-7.499981]]],[[[131.006851,-4.338299],[131.056335,-4.294552],[131.147736,-4.32551],[131.130356,-4.40931],[131.043167,-4.401302],[131.006851,-4.338299]]],[[[130.968111,-7.678161],[131.122811,-7.635551],[131.105911,-7.688891],[130.969211,-7.737981],[130.968111,-7.678161]]],[[[130.872111,-7.499971],[130.998211,-7.527311],[130.846511,-7.562131],[130.872111,-7.499971]]],[[[130.8015,-3.41255],[130.8796,-3.58872],[130.8219,-3.70138],[130.8279,-3.87666],[130.6133,-3.7912],[130.4058,-3.6243],[130.0123,-3.47822],[129.9239,-3.33397],[129.4952,-3.30992],[129.5639,-3.40784],[129.532,-3.466],[129.0764,-3.33637],[128.9589,-3.35402],[128.918,-3.3311],[128.9612,-3.22166],[128.8912,-3.19893],[128.6635,-3.37588],[128.6643,-3.43326],[128.4506,-3.45653],[128.2827,-3.22196],[128.1589,-3.16823],[128.1891,-3.06464],[128.0849,-3.12556],[128.0454,-3.33848],[127.9723,-3.37984],[127.9101,-3.53896],[127.9325,-3.36832],[127.866,-3.18653],[127.9926,-3.06595],[128.0965,-3.06632],[128.1604,-2.8631],[128.797,-2.86403],[129.0271,-2.79063],[129.1264,-2.96181],[129.3442,-2.85179],[129.3758,-2.78267],[129.4677,-2.77901],[129.7802,-2.86243],[130.0093,-2.99152],[130.34,-2.97073],[130.5932,-3.15459],[130.6609,-3.40861],[130.8015,-3.41255]]],[[[129.789611,-8.048421],[129.702611,-8.045571],[129.576011,-7.901111],[129.608311,-7.812481],[129.843311,-7.844541],[129.860811,-7.922381],[129.789611,-8.048421]]],[[[129.000611,-8.266451],[128.915111,-8.253071],[128.825211,-8.210451],[128.953211,-8.189821],[129.020211,-8.221081],[129.000611,-8.266451]]],[[[128.6368,-3.62703],[128.5457,-3.5238],[128.7227,-3.50944],[128.7303,-3.60021],[128.6678,-3.5731],[128.6368,-3.62703]]],[[[128.690311,-7.103501],[128.636911,-7.222311],[128.519911,-7.132791],[128.587111,-7.069881],[128.690311,-7.103501]]],[[[128.4108,-3.55199],[128.4891,-3.50863],[128.5658,-3.58219],[128.4048,-3.63179],[128.4108,-3.55199]]],[[[128.2655,-3.61441],[128.2877,-3.69248],[128.1829,-3.74662],[128.1211,-3.74962],[128.1484,-3.66138],[127.9853,-3.77568],[127.9068,-3.71281],[128.0169,-3.58674],[128.3348,-3.50381],[128.3374,-3.63375],[128.2655,-3.61441]]],[[[128.086211,-8.269521],[128.190711,-8.200321],[128.227411,-8.275191],[128.086211,-8.269521]]],[[[127.778111,-8.140231],[127.804411,-8.104221],[128.116711,-8.171331],[128.044211,-8.257411],[127.954811,-8.249611],[127.778111,-8.140231]]],[[[128.0001,-2.93658],[127.9018,-3.03362],[127.8416,-3.03203],[127.9352,-2.92238],[128.0001,-2.93658]]],[[[127.6479,-3.20179],[127.7537,-3.14518],[127.786,-3.24502],[127.6987,-3.25287],[127.6479,-3.20179]]],[[[127.600011,-8.206561],[127.684011,-8.153111],[127.747611,-8.200721],[127.656011,-8.237481],[127.600011,-8.206561]]],[[[127.5001,-3.32302],[127.5485,-3.24207],[127.6241,-3.31356],[127.5758,-3.33546],[127.5001,-3.32302]]],[[[127.369111,-7.502501],[127.485211,-7.525411],[127.370311,-7.661551],[127.325411,-7.631321],[127.369111,-7.502501]]],[[[126.0006,-3.3093],[126.0156,-3.18204],[126.1009,-3.12067],[126.2217,-3.18936],[126.2956,-3.09941],[126.7883,-3.06155],[127.1038,-3.22728],[127.0297,-3.26615],[127.0728,-3.37474],[127.159,-3.33658],[127.2546,-3.37528],[127.2481,-3.59206],[127.2178,-3.66125],[126.6818,-3.85857],[126.198,-3.62769],[126.0006,-3.3093]]],[[[127.172,-8.11934],[127.1359,-8.04633],[127.2011,-8.02771],[127.2309,-8.11386],[127.172,-8.11934]]],[[[125.8047,-8.00014],[125.8037,-7.85616],[125.9467,-7.66017],[126.1872,-7.72471],[126.6433,-7.56392],[126.7264,-7.66638],[126.8208,-7.66033],[126.8458,-7.73482],[126.5588,-7.81877],[126.4649,-7.97483],[126.061,-7.89072],[125.8047,-8.00014]]]]}},{"type":"Feature","properties":{"kode":"73"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.819725,-7.330278],[121.823608,-7.39694],[121.753891,-7.423055],[121.756386,-7.347777],[121.819725,-7.330278]]],[[[119.591652,-4.55424],[119.641388,-3.961668],[119.583611,-3.976388],[119.586563,-4.039411],[119.451942,-3.713609],[119.516594,-3.571808],[119.389656,-3.21247],[119.629059,-3.121519],[119.493317,-2.74063],[119.643578,-2.75641],[119.76104,-2.68366],[119.700089,-2.553469],[119.715866,-2.39282],[119.596573,-2.294341],[119.629776,-2.163379],[119.99604,-1.963381],[120.336891,-2.053441],[120.399567,-1.884479],[120.706909,-2.212381],[120.975296,-2.2411],[121.71553,-2.558119],[121.800636,-2.709759],[121.656937,-2.878121],[121.305733,-3.069639],[121.172737,-2.96713],[121.101349,-2.77383],[120.972656,-2.81988],[121.09816,-2.71633],[121.010429,-2.614999],[121.006386,-2.679166],[120.799156,-2.60833],[120.564163,-2.670555],[120.453331,-2.824721],[120.189453,-2.967989],[120.255547,-3.16028],[120.421249,-3.264168],[120.379723,-3.503611],[120.442497,-3.739167],[120.358917,-3.849969],[120.330696,-4.104164],[120.393501,-4.332041],[120.348145,-4.425264],[120.458572,-4.658292],[120.383614,-4.838332],[120.303391,-4.87538],[120.271667,-5.14394],[120.404861,-5.341689],[120.472504,-5.623055],[120.314857,-5.507519],[120.13028,-5.589722],[119.935448,-5.544427],[119.785614,-5.701977],[119.646667,-5.682223],[119.611389,-5.6125],[119.558998,-5.650539],[119.579445,-5.603612],[119.514442,-5.53444],[119.460327,-5.576923],[119.487984,-5.604735],[119.438889,-5.596667],[119.353889,-5.325833],[119.409447,-5.112136],[119.498611,-5.116945],[119.447716,-5.086544],[119.513885,-4.886388],[119.56147,-4.891851],[119.506111,-4.868611],[119.481392,-4.750834],[119.591652,-4.55424]],[[121.072212,-2.61561],[121.073402,-2.616626],[121.056114,-2.580555],[121.072212,-2.61561]]],[[[121.096947,-7.302219],[121.168335,-7.354165],[121.099167,-7.398055],[121.059723,-7.372499],[121.096947,-7.302219]]],[[[120.79528,-7.270555],[121.003609,-7.281388],[121.063889,-7.300556],[121.0,-7.33333],[120.79528,-7.270555]]],[[[120.629715,-7.000628],[120.785904,-7.059813],[120.767731,-7.134739],[120.631943,-7.133331],[120.629715,-7.000628]]],[[[120.483971,-6.49799],[120.480293,-6.281098],[120.426506,-6.179759],[120.493111,-5.7675],[120.568466,-6.055651],[120.483971,-6.49799]]]]}},{"type":"Feature","properties":{"kode":"31"},"geometry":{"type":"Polygon","coordinates":[[[106.721344,-6.089998],[106.972267,-6.089283],[106.9132,-6.366885],[106.775894,-6.316725],[106.688759,-6.174209],[106.721344,-6.089998]]]}},{"type":"Feature","properties":{"kode":"32"},"geometry":{"type":"Polygon","coordinates":[[[106.396103,-6.979798],[106.43618,-6.818825],[106.511475,-6.765959],[106.429398,-6.695778],[106.401779,-6.529884],[106.466515,-6.313413],[106.500175,-6.356728],[106.767433,-6.361234],[106.775894,-6.316725],[106.9132,-6.366885],[107.038139,-5.911394],[107.139267,-5.978195],[107.302711,-5.956646],[107.465004,-6.141714],[107.654709,-6.242166],[107.822433,-6.178484],[108.103218,-6.334497],[108.19416,-6.261509],[108.361443,-6.274672],[108.429184,-6.416264],[108.538673,-6.485534],[108.605278,-6.770391],[108.763901,-6.815747],[108.829338,-6.74608],[108.76516,-6.896383],[108.777687,-7.104835],[108.556373,-7.171165],[108.560766,-7.334588],[108.662295,-7.340506],[108.738433,-7.609161],[108.804252,-7.673145],[108.513016,-7.699345],[108.430328,-7.822663],[108.261208,-7.806957],[107.839561,-7.7341],[107.39267,-7.492356],[106.519707,-7.405331],[106.370895,-7.310125],[106.543465,-6.982475],[106.396103,-6.979798]]]}},{"type":"Feature","properties":{"kode":"94"},"geometry":{"type":"MultiPolygon","coordinates":[[[[134.9918551495673,-4.323024280854804],[134.87616,-4.251943],[135.25766,-3.75588],[134.205246,-3.391239],[134.27594,-3.23835],[134.425034,-3.110369],[134.426788,-3.006559],[134.661392,-2.823219],[134.688339,-2.965833],[134.740005,-2.990555],[134.828888,-2.877499],[134.852753,-3.00157],[134.800629,-3.131394],[134.862289,-3.158792],[134.861557,-3.250149],[134.935944,-3.271329],[134.960007,-3.225279],[134.971939,-3.314721],[135.113922,-3.381292],[135.501968,-3.357546],[135.611282,-3.180421],[135.785873,-3.109717],[135.733948,-3.06395],[135.965057,-2.92696],[135.904999,-2.86861],[136.017731,-2.691776],[136.266083,-2.562176],[136.33223,-2.279722],[136.392654,-2.218956],[136.518143,-2.19077],[136.581741,-2.201986],[136.598709,-2.27059],[136.706421,-2.22702],[136.749146,-2.26798],[136.81073,-2.234741],[136.805161,-2.176717],[136.913895,-2.182777],[136.942215,-2.120279],[137.027176,-2.147546],[137.035324,-2.20457],[137.062576,-2.167899],[137.004715,-2.128333],[137.057602,-2.098139],[137.149048,-2.139998],[137.121948,-2.102294],[137.186279,-2.12408],[137.195679,-2.066915],[137.257874,-2.115513],[137.225052,-2.066614],[137.265396,-2.04078],[137.211685,-2.029968],[137.220551,-1.960279],[137.182495,-1.937779],[137.25203055991696,-1.9086088509994117],[137.174728,-1.940279],[137.22061100178772,-1.8837966980528962],[137.142105,-1.846445],[137.17775,-1.806419],[137.205826,-1.843612],[137.153122,-1.771874],[137.226944,-1.74833],[137.299438,-1.82722],[137.365829,-1.840829],[137.42778,-1.809439],[137.475998,-1.83778],[137.3990869665632,-1.7902658888669583],[137.360138,-1.839236],[137.241943,-1.74111],[137.47319,-1.606318],[137.524994,-1.62639],[137.477966,-1.597864],[137.580826,-1.55583],[137.585556,-1.585833],[137.642227,-1.62528],[137.585831,-1.580556],[137.633606,-1.593889],[137.592438,-1.552847],[137.648056,-1.51972],[137.727219,-1.493056],[137.75708,-1.546461],[137.793549,-1.54771],[137.741394,-1.481111],[137.934998,-1.458611],[137.970001,-1.531667],[137.950623,-1.520478],[137.913956,-1.55632],[137.953613,-1.537987],[137.93486,-1.587294],[137.964996,-1.542778],[137.962784,-1.584723],[138.000443,-1.63421],[137.963028,-1.62002],[137.921738,-1.634652],[137.954361,-1.654879],[138.00296,-1.640575],[138.0,-1.605278],[138.01889,-1.626944],[138.128326,-1.646109],[137.98111,-1.59639],[137.981049,-1.52854],[138.341309,-1.71601],[138.652985,-1.787329],[138.863342,-1.965819],[139.0,-1.975],[139.751251,-2.359654],[140.143417,-2.322349],[140.337006,-2.464859],[140.348801,-2.395277],[140.686661,-2.477779],[140.747223,-2.534719],[140.707947,-2.538949],[140.705826,-2.628334],[141.002945,-2.604969],[141.000214,-6.313239],[140.931885,-6.553238],[140.834351,-6.67659],[140.897812,-6.856439],[140.982391,-6.891975],[141.001114,-9.118333],[140.892776,-9.084998],[140.355118,-8.463129],[139.983337,-8.187221],[139.956665,-8.124438],[140.074966,-8.065577],[140.066101,-7.9232],[140.046387,-8.016963],[140.060791,-8.062901],[139.924423,-8.107983],[139.71257,-8.097499],[139.343323,-8.206104],[139.223236,-8.095256],[139.068802,-8.11299],[138.95636812668735,-8.194112001888403],[139.003311,-8.296171],[138.935272,-8.313889],[138.949448,-8.262499],[138.835281,-8.115],[138.924164,-8.076111],[138.913086,-7.919674],[139.018051,-7.853889],[139.115234,-7.566709],[138.964325,-7.519186],[138.868591,-7.321462],[138.671951,-7.19833],[139.170609,-7.236943],[139.243729,-7.15057],[139.265533,-7.225818],[139.42308,-7.233811],[139.437164,-7.220868],[139.43161,-7.200046],[139.353729,-7.164835],[139.404419,-7.131457],[139.472626,-7.171249],[139.459442,-7.221426],[139.473785,-7.26068],[139.541382,-7.284661],[139.577698,-7.267271],[139.597656,-7.18476],[139.648392,-7.177779],[139.635056,-7.233941],[139.6496941480266,-7.263007453740964],[139.656052,-7.18003],[139.631943,-7.15506],[139.57373,-7.187123],[139.56192,-7.26636],[139.50708,-7.263996],[139.474976,-7.148047],[139.344269,-7.043914],[139.258286,-7.016988],[139.219162,-7.025279],[139.344315,-7.047271],[139.348892,-7.191886],[139.429672,-7.217217],[139.273407,-7.21773],[139.261368,-7.15547],[139.238541,-7.139749],[139.179718,-7.2135],[139.159592,-7.202781],[139.06456,-7.211061],[138.855499,-7.157715],[138.613663,-7.010989],[138.565552,-6.918889],[138.626663,-6.87611],[138.717224,-6.90222],[138.798828,-6.850365],[138.934448,-6.842219],[139.128784,-6.966357],[139.217438,-6.970949],[138.938889,-6.787777],[138.834793,-6.784596],[138.824997,-6.691108],[138.428848,-6.36095],[138.363617,-6.069171],[138.251114,-5.87778],[138.401398,-5.83333],[138.426193,-5.858562],[138.444199,-5.847572],[138.466583,-5.884939],[138.53923,-5.887751],[138.466385,-5.88361],[138.444489,-5.846298],[138.424393,-5.855866],[138.403336,-5.73527],[138.405792,-5.818329],[138.34938,-5.83769],[138.16333,-5.805554],[138.232498,-5.707777],[138.423218,-5.659669],[138.225037,-5.68639],[138.250809,-5.663958],[138.243561,-5.611985],[138.286118,-5.619167],[138.330115930158,-5.599814346134738],[138.353058,-5.551871],[138.286194,-5.61748],[138.27730566516286,-5.600656179926922],[138.239975,-5.611981],[138.183304,-5.72805],[138.089371,-5.745764],[138.045273,-5.598889],[138.133392,-5.536582],[138.177704,-5.439199],[138.1969763056833,-5.476274586208899],[138.186066,-5.440681],[138.165573,-5.436957],[138.081116,-5.530834],[138.058685,-5.386909],[138.16185,-5.383855],[138.183258,-5.339423],[138.239044,-5.326373],[138.28566,-5.266903],[138.236465,-5.322412],[138.177994,-5.333399],[138.140244,-5.369929],[138.114273,-5.321293],[138.177704,-5.276022],[138.181061,-5.234888],[138.112885,-5.320039],[138.126999,-5.37387],[138.054428,-5.374451],[138.026642,-5.437757],[137.991089,-5.368555],[138.049789,-5.371112],[138.088348,-5.27899],[138.150391,-5.268478],[138.1430851965885,-5.208591951651067],[138.147339,-5.267649],[138.083145,-5.27842],[138.048355,-5.367272],[138.001587,-5.358379],[137.984024,-5.371354],[138.028885,-5.505281],[137.875275,-5.361939],[138.087784,-5.23],[138.047623,-5.189037],[138.096298,-5.180214],[138.096939,-5.152222],[138.06944636859836,-5.140365311834983],[138.0961,-5.170526],[138.044952,-5.18542],[138.060837,-5.23278],[137.994781,-5.28301],[137.951904,-5.197399],[137.909698,-5.321306],[137.91037,-5.270108],[137.83933452413095,-5.280451000055238],[137.892227,-5.329723],[137.740829,-5.374444],[137.728073,-5.325589],[137.825562,-5.23056],[137.806107,-5.178473],[137.95935301266033,-5.093355258455782],[137.835831,-5.129166],[137.802017,-5.179166],[137.820282,-5.228612],[137.772507,-5.26972],[137.777496,-5.202219],[137.767776,-5.276389],[137.719528,-5.276592],[137.705826,-5.153334],[137.752441,-5.137569],[137.759171,-5.104166],[137.775558,-5.108889],[137.74556,-5.184166],[137.796753,-5.130053],[137.778671,-5.09182],[137.837708,-5.076876],[137.856323,-5.053611],[137.83812,-5.075417],[137.810272,-5.070417],[137.758606,-5.103056],[137.748337,-5.138055],[137.73555,-5.090277],[137.80457461733332,-5.065338036111068],[137.734924,-5.086945],[137.728394,-5.075208],[137.745834,-5.077781],[137.756943,-5.04833],[137.743896,-5.077222],[137.70320077556852,-5.054165762963229],[137.681885,-5.05243],[137.670502,-5.067969],[137.699081,-4.997439],[137.569565,-5.10746],[137.582199,-5.027038],[137.614685,-5.052061],[137.679459,-4.99131],[137.575302,-4.987336],[137.6172756339899,-4.977785550275074],[137.677643,-4.86235],[137.632904,-4.922148],[137.58374,-4.90084],[137.618164,-4.93389],[137.57988,-4.947223],[137.602661,-4.954443],[137.570618,-4.987661],[137.595551,-5.008055],[137.543884,-5.061111],[137.551361,-5.116002],[137.521423,-5.074759],[137.496094,-5.079269],[137.497177,-5.146317],[137.453369,-5.069268],[137.551117,-5.007791],[137.519592,-5.00266],[137.498032,-4.863029],[137.514755,-5.005213],[137.455872,-5.045023],[137.414444,-5.115833],[137.417221,-5.007223],[137.464661,-4.995559],[137.486435,-4.933999],[137.460342,-4.88565],[137.336853,-5.042817],[137.290665,-5.007679],[137.349716,-4.97],[137.294647,-4.952153],[137.285294,-5.026015],[137.235596,-4.98977],[137.32103,-4.888448],[137.262375,-4.862608],[137.228455,-4.956563],[137.217072,-4.841949],[137.179993,-5.008611],[137.13237,-4.90512],[137.16507,-4.90713],[137.211868,-4.843461],[137.121964,-4.898376],[137.107773,-4.974721],[137.057785,-4.938612],[137.130676,-4.821499],[137.031662,-4.883056],[137.06189,-4.918713],[136.976257,-4.939583],[136.924591,-4.890449],[136.964447,-4.884722],[136.959946,-4.870778],[136.996536,-4.859626],[137.009384,-4.83132],[136.925003,-4.870833],[136.922073,-4.831021],[136.831451,-4.914025],[136.808517,-4.833339],[136.8801509492806,-4.854148202818178],[136.886108,-4.783888],[136.845551,-4.82758],[136.787338,-4.831839],[136.823959,-4.784859],[136.75906686714652,-4.75740270400362],[136.743332,-4.872779],[136.691116,-4.795555],[136.632034,-4.827103],[136.465088,-4.73842],[136.458893,-4.682219],[136.434174,-4.728512],[136.323303,-4.665585],[136.350357,-4.633609],[136.231384,-4.66257],[136.232224,-4.583329],[136.209305,-4.659304],[136.140549,-4.631945],[136.1875,-4.616944],[136.133362,-4.62563],[136.163605,-4.552219],[136.113892,-4.622781],[136.089447,-4.55972],[136.053055,-4.5875],[135.908188,-4.483339],[135.718887,-4.497223],[135.35611,-4.414719],[135.199768,-4.463722],[134.928589,-4.29995],[134.9918551495673,-4.323024280854804]],[[137.349716,-4.97],[137.424728,-4.911666],[137.386383,-4.900277],[137.4375,-4.83833],[137.3688988156205,-4.907304866593083],[137.349716,-4.97]],[[136.021164,-4.538193],[136.0336,-4.543684],[136.0508581262649,-4.536966059292547],[136.021164,-4.538193]],[[136.046387,-4.496389],[136.070343,-4.529861],[136.073059,-4.451805],[136.046387,-4.496389]],[[136.830551,-4.815555],[136.863327,-4.749166],[136.853607,-4.723888],[136.830551,-4.815555]],[[137.0638932844864,-4.8575322866018595],[137.051727,-4.81478],[137.0556114500008,-4.850189557640613],[137.0638932844864,-4.8575322866018595]],[[137.51442102413102,-4.9475153344746925],[137.534622,-4.90425],[137.519028,-4.916176],[137.51442102413102,-4.9475153344746925]],[[137.71469640349284,-5.043257083161444],[137.749451,-5.010277],[137.725006,-5.018056],[137.71469640349284,-5.043257083161444]],[[137.80433801111147,-5.046922327592048],[137.827774,-5.04639],[137.804169,-5.04472],[137.80433801111147,-5.046922327592048]],[[138.0876978803459,-5.516229274101249],[138.078049,-5.463055],[138.091797,-5.445975],[138.076859,-5.463939],[138.0876978803459,-5.516229274101249]],[[138.19950004909364,-5.481129701518755],[138.24303122338085,-5.465360482282026],[138.281662,-5.40862],[138.19950004909364,-5.481129701518755]],[[138.24420030481994,-5.472322853405246],[138.231247,-5.553288],[138.25102324206745,-5.58338224361383],[138.235001,-5.536666],[138.297501,-5.507778],[138.24420030481994,-5.472322853405246]],[[138.27417,-5.594721],[138.243408,-5.597385],[138.2772938152909,-5.600633750516094],[138.27417,-5.594721]],[[138.35250696337874,-5.610221167275574],[138.37149443888,-5.630711133452693],[138.368439,-5.617626],[138.35250696337874,-5.610221167275574]],[[138.374756,-5.644679],[138.372818,-5.645044],[138.3407805585562,-5.652738653276318],[138.374756,-5.644679]],[[139.745209,-7.214639],[139.690643,-7.288561],[139.747726,-7.219747],[139.769852,-7.18024],[139.765869,-7.121571],[139.830399,-7.085875],[139.766602,-7.112126],[139.745209,-7.214639]],[[137.47693534422314,-1.6197501663275002],[137.491318,-1.670689],[137.519165,-1.672223],[137.492569,-1.670555],[137.47693534422314,-1.6197501663275002]],[[137.34439732275936,-1.7005045738662543],[137.35989452850137,-1.7566457935544453],[137.354446,-1.708612],[137.34439732275936,-1.7005045738662543]],[[137.39473,-1.76361],[137.361664,-1.763056],[137.3981338486687,-1.7844347207125202],[137.39473,-1.76361]],[[137.230438,-2.000925],[137.221603,-2.009503],[137.266937,-1.987779],[137.230438,-2.000925]],[[137.2518260230532,-2.0743430886035026],[137.252502,-2.08639],[137.275803,-2.104687],[137.2518260230532,-2.0743430886035026]],[[137.23344051212214,-1.8744698919683511],[137.258057,-1.903059],[137.236893,-1.87196],[137.23344051212214,-1.8744698919683511]],[[138.95373525824354,-8.191665172533163],[138.956116,-8.159168],[138.948059,-8.18639],[138.95373525824354,-8.191665172533163]],[[138.14225975206472,-5.197132015110984],[138.176849,-5.186413],[138.141861,-5.191596],[138.14225975206472,-5.197132015110984]],[[138.066498,-5.137029],[138.102127,-5.13235],[138.1017863212347,-5.13059683792766],[138.066498,-5.137029]],[[138.096909,-5.098136],[138.111755,-5.11218],[138.120285,-5.100556],[138.096909,-5.098136]],[[137.8428499520332,-5.271390847216247],[137.86703899715454,-5.222304248766258],[137.861389,-5.223611],[137.8428499520332,-5.271390847216247]],[[137.90246394237553,-5.213349013476614],[137.960281,-5.141389],[138.021393,-5.139723],[137.952774,-5.138611],[137.90246394237553,-5.213349013476614]],[[137.96288209516598,-5.089542534500442],[137.968887,-5.083055],[137.96693701499697,-5.080891287827154],[137.96288209516598,-5.089542534500442]],[[137.24099623302163,-4.836940877526438],[137.243774,-4.835383],[137.234619,-4.815379],[137.24099623302163,-4.836940877526438]],[[137.1541970457609,-4.859630556431365],[137.166626,-4.811603],[137.151871,-4.775251],[137.164413,-4.813178],[137.1541970457609,-4.859630556431365]],[[137.08504035487985,-4.829169093021068],[137.0874279720585,-4.815912953211689],[137.082443,-4.826791],[137.08504035487985,-4.829169093021068]],[[137.08921121814885,-4.806012304272004],[137.092728,-4.786487],[137.067596,-4.802947],[137.08921121814885,-4.806012304272004]]],[[[138.238281,-7.461789],[138.749786,-7.370584],[138.865005,-7.436666],[138.912949,-7.53501],[139.087479,-7.572639],[138.993958,-7.849852],[138.896149,-7.899531],[138.913895,-8.075277],[138.678604,-8.150555],[138.615005,-8.249722],[138.488052,-8.321387],[138.468887,-8.350834],[138.340271,-8.379444],[138.33194,-8.300556],[138.300827,-8.391945],[137.870834,-8.373609],[137.656387,-8.44694],[137.705826,-8.172501],[137.906097,-7.787568],[138.238281,-7.461789]]],[[[138.671951,-6.640279],[138.821671,-6.706112],[138.831116,-6.789719],[138.944717,-6.82611],[138.835281,-6.826391],[138.752777,-6.75083],[138.672775,-6.724167],[138.671951,-6.640279]]],[[[138.846939,-8.25472],[138.916107,-8.300055],[138.892502,-8.388057],[138.59639,-8.363333],[138.554031,-8.317221],[138.662506,-8.235833],[138.679443,-8.16972],[138.815002,-8.137778],[138.846939,-8.25472]]],[[[138.610275,-6.755277],[138.736115,-6.759439],[138.798889,-6.834999],[138.679169,-6.86917],[138.700562,-6.809445],[138.610275,-6.755277]]],[[[138.476105,-8.359444],[138.34639,-8.41944],[138.261673,-8.415559],[138.26445,-8.390828],[138.303329,-8.394999],[138.47139,-8.352778],[138.499451,-8.320829],[138.476105,-8.359444]]],[[[137.547607,-5.142501],[137.648895,-5.05111],[137.671387,-5.07],[137.694168,-5.05472],[137.742249,-5.136425],[137.704727,-5.14889],[137.670837,-5.216389],[137.550064,-5.169653],[137.664169,-5.117221],[137.665344,-5.075069],[137.547607,-5.142501]]],[[[137.337982,-5.052601],[137.436829,-4.921295],[137.476303,-4.92868],[137.414169,-5.004723],[137.405579,-5.109431],[137.337982,-5.052601]]],[[[137.160828,-1.932362],[137.091949,-1.826389],[137.140274,-1.772501],[137.162781,-1.796666],[137.138336,-1.8475],[137.160828,-1.932362]]],[[[136.259796,-1.913474],[135.867218,-1.740278],[135.762497,-1.748889],[135.788895,-1.71944],[135.732224,-1.68861],[135.474167,-1.680834],[135.410278,-1.601944],[136.20311,-1.64816],[136.903732,-1.793248],[136.630951,-1.872919],[136.503586,-1.849189],[136.536072,-1.899107],[136.341843,-1.860849],[136.275558,-1.883385],[136.259796,-1.913474]]],[[[135.873337,-1.17333],[135.729584,-0.77534],[135.642212,-0.886614],[135.467422,-0.74415],[135.541382,-0.875561],[135.363052,-0.63056],[135.589767,-0.663129],[135.595291,-0.70156],[135.64328,-0.662539],[135.748367,-0.739628],[135.854996,-0.700555],[136.051392,-0.856669],[136.170898,-1.042747],[136.256104,-1.016666],[136.387589,-1.076979],[136.139725,-1.20047],[136.0,-1.1425],[135.873337,-1.17333]]],[[[135.117783,-1.4625],[135.253326,-1.52139],[135.262192,-1.478369],[135.337967,-1.482462],[135.247437,-1.529691],[135.092072,-1.501065],[135.117783,-1.4625]]],[[[134.865616,-1.132207],[134.794449,-1.0325],[134.843536,-0.93096],[134.941528,-0.965931],[134.925003,-1.074723],[134.98584,-1.036112],[134.952164,-1.128141],[134.865616,-1.132207]]]]}},{"type":"Feature","properties":{"kode":"53"},"geometry":{"type":"MultiPolygon","coordinates":[[[[125.5862,-8.31465],[125.5038,-8.26816],[125.6169,-8.14468],[125.5862,-8.31465]]],[[[124.046476,-9.342838],[124.0983,-9.41876],[124.2065,-9.37529],[124.292,-9.50619],[124.4542,-9.31137],[124.472284,-9.18241],[124.6204,-9.16331],[124.7107,-9.05728],[124.949953,-8.967377],[124.9422,-9.04616],[124.9889,-9.06706],[125.1141,-8.97605],[125.182,-9.02754],[125.1722,-9.17896],[124.9847,-9.21434],[125.092,-9.46447],[124.9834,-9.64711],[124.4956,-10.09939],[124.379,-10.17015],[124.0928,-10.18045],[124.015,-10.26787],[123.7969,-10.3545],[123.4568,-10.3559],[123.5297,-10.17631],[123.7442,-10.09523],[123.7477,-10.0302],[123.5803,-10.03243],[123.5828,-9.92561],[123.6688,-9.81791],[123.6675,-9.64933],[123.7921,-9.4971],[124.046476,-9.342838]]],[[[124.3329,-8.4252],[124.5091,-8.26198],[124.5163,-8.22269],[124.4021,-8.27409],[124.4739,-8.13038],[124.5972,-8.12891],[124.5932,-8.19252],[125.0878,-8.15317],[125.1393,-8.22922],[125.1257,-8.34491],[125.0513,-8.36068],[124.4346,-8.45537],[124.3329,-8.4252]]],[[[123.9428,-8.40262],[124.057,-8.294],[124.1009,-8.36503],[124.2258,-8.21369],[124.3162,-8.18454],[124.2955,-8.33138],[124.1385,-8.53854],[124.0619,-8.55243],[124.0329,-8.42446],[123.9428,-8.40262]]],[[[123.5276,-8.36233],[123.7785,-8.16919],[123.9044,-8.21861],[123.911,-8.25849],[123.7639,-8.28847],[123.6734,-8.42844],[123.6204,-8.4061],[123.5531,-8.4716],[123.5829,-8.54344],[123.5455,-8.57183],[123.5049,-8.52237],[123.3883,-8.58505],[123.234,-8.51171],[123.4715,-8.3368],[123.4363,-8.27322],[123.5372,-8.23502],[123.5276,-8.36233]]],[[[123.3282,-10.3451],[123.3042,-10.26902],[123.4535,-10.11986],[123.4236,-10.29639],[123.3282,-10.3451]]],[[[123.0472,-10.72532],[123.4078,-10.45521],[123.3768,-10.55145],[123.4286,-10.65562],[123.2572,-10.73333],[123.2161,-10.81699],[122.8195,-10.91942],[122.8044,-10.80657],[122.8534,-10.75584],[123.0472,-10.72532]]],[[[123.308,-8.36417],[123.0019,-8.40353],[123.0336,-8.31035],[123.2464,-8.2287],[123.308,-8.36417]]],[[[123.0,-8.49739],[122.9458,-8.59493],[122.8954,-8.61934],[122.8848,-8.53292],[122.9816,-8.43728],[123.1484,-8.46317],[123.0,-8.49739]]],[[[122.4979,-8.46913],[122.8978,-8.27617],[122.9248,-8.19796],[122.7432,-8.21051],[122.7859,-8.11148],[122.8691,-8.06508],[122.9764,-8.14032],[123.0215,-8.32064],[122.9302,-8.33062],[122.8928,-8.45255],[122.7916,-8.43101],[122.8381,-8.59432],[122.3794,-8.76204],[122.1256,-8.73763],[121.8184,-8.88101],[121.3854,-8.79636],[121.3111,-8.92514],[121.1267,-8.90792],[120.9975,-8.9596],[120.827,-8.82198],[120.7266,-8.87758],[120.5406,-8.79251],[120.3207,-8.83812],[120.1793,-8.77632],[119.9371,-8.8341],[119.7994,-8.73838],[119.8127,-8.65842],[119.8019,-8.57549],[119.9154,-8.46571],[120.0002,-8.45481],[120.034,-8.37535],[120.1542,-8.37109],[120.2008,-8.29826],[120.4419,-8.23714],[120.4648,-8.28285],[120.6582,-8.28036],[120.7431,-8.34189],[120.9799,-8.34873],[121.5044,-8.61735],[121.6083,-8.49767],[121.808,-8.51648],[122.0267,-8.44553],[122.0162,-8.52998],[122.227,-8.62796],[122.4794,-8.61589],[122.4979,-8.46913]]],[[[121.8719,-10.6122],[121.6963,-10.57643],[121.8946,-10.42433],[121.9928,-10.43927],[121.9944,-10.5213],[121.8719,-10.6122]]],[[[119.9365,-9.98009],[119.4709,-9.74123],[119.389,-9.79727],[119.1805,-9.74634],[119.0334,-9.68038],[118.9281,-9.55858],[118.9442,-9.51227],[119.1876,-9.37625],[119.6311,-9.3427],[119.7973,-9.39664],[119.9419,-9.28043],[120.1028,-9.47526],[120.2226,-9.4938],[120.2569,-9.644],[120.4517,-9.6284],[120.5523,-9.71446],[120.6418,-9.87525],[120.7962,-9.97115],[120.8192,-10.08719],[120.4706,-10.30381],[120.2091,-10.25562],[119.9365,-9.98009]]],[[[119.6352,-8.60281],[119.6742,-8.68424],[119.8027,-8.61757],[119.7245,-8.68237],[119.7173,-8.79128],[119.6133,-8.74851],[119.6352,-8.60281]]],[[[119.4425,-8.75035],[119.3824,-8.72088],[119.3781,-8.58177],[119.4231,-8.44954],[119.4765,-8.45059],[119.5754,-8.4895],[119.5624,-8.58388],[119.4598,-8.61698],[119.4425,-8.75035]]]]}},{"type":"Feature","properties":{"kode":"51"},"geometry":{"type":"MultiPolygon","coordinates":[[[[115.194942,-8.732323],[115.23497,-8.799568],[115.087341,-8.835617],[115.161148,-8.779349],[115.140114,-8.66686],[114.929085,-8.474201],[114.575851,-8.388434],[114.445526,-8.21899],[114.438026,-8.0937],[114.853981,-8.195267],[114.997383,-8.17379],[115.179657,-8.058906],[115.452835,-8.162612],[115.701965,-8.354779],[115.609451,-8.505023],[115.359718,-8.577768],[115.194942,-8.732323]]],[[[115.623787,-8.773455],[115.588226,-8.818159],[115.445183,-8.722188],[115.565613,-8.670997],[115.623787,-8.773455]]]]}},{"type":"Feature","properties":{"kode":"14"},"geometry":{"type":"MultiPolygon","coordinates":[[[[102.007767,-0.878599],[101.845276,-0.982571],[101.650337,-0.93408],[101.359833,-0.65925],[101.068939,-0.50064],[100.996368,-0.31436],[100.907509,-0.371669],[100.844856,-0.337659],[100.733833,-0.04317],[100.845413,0.01544],[100.812531,0.268481],[100.605743,0.183469],[100.451752,0.229109],[100.376022,0.35071],[100.281677,0.33296],[100.206459,0.584121],[100.25573,0.709401],[100.130508,0.80901],[100.081863,0.938071],[100.161377,0.999161],[100.102188,1.09181],[100.183029,1.12499],[100.053658,1.361081],[100.315857,1.416461],[100.291878,1.47756],[100.381348,1.450509],[100.434021,1.511289],[100.421158,1.767701],[100.285522,1.813293],[100.361328,2.201904],[100.307129,2.357482],[100.3293,2.529452],[100.43,2.272778],[100.645546,2.110561],[100.773567,2.081344],[100.795021,2.112496],[100.760902,2.252232],[100.789444,2.286945],[101.053665,2.28401],[101.305,2.041667],[101.409721,1.698055],[101.561386,1.637221],[101.751945,1.664723],[102.149017,1.378252],[102.166061,1.182529],[102.122726,1.124511],[102.166817,1.133411],[102.180069,1.230281],[102.229172,0.995434],[102.407532,0.811556],[102.570236,0.738701],[102.894142,0.728491],[103.104446,0.478611],[102.899178,0.33559],[102.612465,0.230497],[102.573799,0.169348],[102.494911,0.24997],[102.430275,0.26111],[102.405815,0.208622],[102.484947,0.239691],[102.583611,0.154167],[102.69117,0.248486],[102.859177,0.25005],[103.32621,0.545462],[103.585732,0.393189],[103.6007,0.294215],[103.651665,0.337222],[103.753052,0.229166],[103.811668,-0.010834],[103.614273,-0.006715],[103.49386115517223,-0.0717900678322086],[103.528336,-0.082777],[103.490547,-0.085829],[103.457008,-0.044549],[103.454102,-0.11187],[103.501549,-0.147554],[103.424141,-0.207049],[103.521393,-0.21111],[103.442245,-0.352848],[103.547226,-0.215831],[103.709442,-0.255829],[103.786392,-0.340556],[103.55278,-0.385277],[103.604164,-0.426389],[103.553055,-0.496112],[103.400467,-0.517549],[103.430557,-0.61583],[103.373337,-0.651111],[103.421112,-0.669167],[103.362617,-0.696942],[103.485001,-0.771112],[103.360077,-0.80318],[103.007942,-0.75602],[102.63903,-1.121101],[102.382446,-1.02669],[102.306816,-0.91736],[102.20359,-0.94852],[102.007767,-0.878599]]],[[[103.208931,0.7028],[103.281151,0.653311],[103.30043,0.550661],[103.169434,0.497803],[103.148483,0.66511],[103.208931,0.7028]]],[[[102.624474,1.011149],[102.73597,1.1547],[102.874504,1.134391],[103.003326,1.072781],[103.153206,0.847245],[103.071854,0.831692],[102.79878875661942,1.0303281264327377],[102.624474,1.011149]],[[102.811562,1.080421],[102.821716,1.04924],[102.880127,1.042189],[102.854736,1.085342],[102.811562,1.080421]]],[[[102.536591,1.127383],[102.614899,1.047572],[102.59581960372807,0.9987045398282833],[102.737106,1.02234],[102.743286,0.995879],[102.646317,0.95067],[102.626183,0.903375],[102.684723,0.957781],[102.697144,0.927527],[102.72566704755636,0.919951043147313],[102.77578,1.005175],[103.046654,0.82447],[103.048889,0.718611],[102.994003,0.689499],[102.905869,0.778383],[102.56028,0.76921],[102.43708,0.82588],[102.440979,0.93514],[102.48465,0.929567],[102.53765556749143,0.9660789417294549],[102.500656,0.945325],[102.45977,1.076551],[102.536591,1.127383]],[[102.7543740403605,0.9123262289185794],[102.782051,0.904975],[102.78083,0.926944],[102.7543740403605,0.9123262289185794]]],[[[101.99855,1.584105],[102.462502,1.5175],[102.508278,1.254549],[102.294716,1.428889],[102.084999,1.481667],[101.99855,1.584105]]],[[[102.44252,1.08239],[102.478317,0.941141],[102.44014,0.94943],[102.386307,0.91344],[102.277443,1.003204],[102.213898,1.41431],[102.290672,1.41322],[102.484993,1.238279],[102.484642,1.198129],[102.442146,1.242096],[102.483612,1.195],[102.44252,1.08239]]],[[[101.454445,1.725555],[101.383057,1.91056],[101.446945,2.057222],[101.516388,2.0275],[101.655724,2.124963],[101.777779,1.986669],[101.784164,1.936389],[101.728333,1.940555],[101.777779,1.928332],[101.732224,1.763888],[101.61528,1.688055],[101.454445,1.725555]],[[101.62034287766222,2.0987303593891173],[101.621925,2.064369],[101.626564,2.096252],[101.62034287766222,2.0987303593891173]]]]}},{"type":"Feature","properties":{"kode":"21"},"geometry":{"type":"MultiPolygon","coordinates":[[[[109.120514,2.530496],[109.006645,2.489467],[108.975914,2.555733],[109.120514,2.530496]]],[[[108.867599,3.010284],[108.884453,2.879908],[108.817139,2.843667],[108.774979,2.89059],[108.867599,3.010284]]],[[[108.089989,3.67947],[108.18882,3.783804],[108.275383,3.710817],[108.208305,3.802454],[108.061745,3.83516],[107.961945,4.003333],[108.218857,4.23043],[108.233963,4.128587],[108.402809,3.96678],[108.352882,3.876487],[108.410088,3.858323],[108.296234,3.657469],[108.156494,3.630646],[108.089989,3.67947]]],[[[106.226936,3.259441],[106.302643,3.38014],[106.284164,3.224999],[106.226936,3.259441]]],[[[106.202011,3.228541],[106.288063,3.179441],[106.278267,3.07611],[106.210556,3.120833],[106.202011,3.228541]]],[[[105.835556,2.99167],[105.821945,2.88639],[105.722557,2.873294],[105.769997,2.839166],[105.72583,2.816667],[105.690552,3.057779],[105.739998,3.05],[105.7425,2.97222],[105.835556,2.99167]]],[[[104.659157,-0.110831],[104.682777,-0.083889],[104.788055,-0.204863],[104.827225,-0.132779],[105.001732,-0.30332],[104.921944,-0.277777],[104.915833,-0.339722],[104.849167,-0.322499],[104.703331,-0.20472],[104.521667,-0.276239],[104.429169,-0.236666],[104.504997,-0.129166],[104.493614,0.003333],[104.565834,-0.011944],[104.552177,0.02917],[104.659157,-0.110831]]],[[[104.47583,0.242777],[104.514519,0.247661],[104.702049,0.018291],[104.47583,0.242777]]],[[[104.221107,1.058612],[104.238609,1.124171],[104.334999,1.145],[104.311668,1.182501],[104.499443,1.169166],[104.584167,1.228332],[104.660164,0.9152],[104.621002,0.900818],[104.594337,0.810601],[104.557312,0.813413],[104.476234,0.849759],[104.491501,0.875025],[104.438919,0.906104],[104.498665,0.935507],[104.40889,0.963611],[104.495552,0.97972],[104.440353,0.99803],[104.498337,1.03639],[104.416809,1.068339],[104.37925,1.010575],[104.316818,1.039859],[104.331375,0.994548],[104.221107,1.058612]]],[[[104.320831,-0.360834],[104.346107,-0.44639],[104.346947,-0.3875],[104.385834,-0.413334],[104.480415,-0.335485],[104.597427,-0.45986],[104.503326,-0.64694],[104.428886,-0.57639],[104.355835,-0.679443],[104.330559,-0.514445],[104.2425,-0.485833],[104.320831,-0.360834]]],[[[104.196388,0.720833],[104.09214,0.870374],[104.094444,0.926755],[104.078018,0.959827],[104.167175,0.867541],[104.265961,0.85921],[104.18037948303967,0.7832281353919736],[104.276863,0.796511],[104.309097,0.707096],[104.253304,0.692524],[104.218613,0.724445],[104.196388,0.720833]]],[[[103.991943,1.134721],[104.013611,1.189443],[104.071663,1.118888],[104.071953,1.18778],[104.138885,1.169166],[104.100166,0.982464],[103.910004,1.038056],[103.920227,1.14296],[103.991943,1.134721]]],[[[103.832474,0.989007],[103.868256,1.037678],[103.877739,1.012594],[103.974998,0.954444],[103.941902,0.909791],[103.832474,0.989007]]],[[[103.932793,0.76699],[103.835861,0.838657],[103.810516,0.899544],[103.898209,0.854561],[103.932793,0.76699]]],[[[103.748337,0.886391],[103.83432,0.812035],[103.829681,0.752109],[103.719788,0.85222],[103.748337,0.886391]]],[[[103.505753,0.723843],[103.458176,0.638205],[103.400017,0.649092],[103.34333,0.800561],[103.370277,0.894444],[103.505753,0.723843]]],[[[103.375,1.13806],[103.389725,1.066666],[103.438919,0.988355],[103.312225,1.043889],[103.375,1.13806]]]]}},{"type":"Feature","properties":{"kode":"76"},"geometry":{"type":"Polygon","coordinates":[[[119.304726,-3.425277],[119.021446,-3.512368],[118.996391,-3.564717],[118.906113,-3.525279],[118.775139,-3.10422],[118.838623,-3.081085],[118.886108,-2.890834],[118.769447,-2.867222],[118.756668,-2.785],[118.818298,-2.61948],[118.91111,-2.666111],[119.030479,-2.58205],[119.044724,-2.506667],[119.144447,-2.470001],[119.121391,-2.319721],[119.211937,-1.99778],[119.330559,-1.962223],[119.363609,-1.853891],[119.28167,-1.68972],[119.325836,-1.589167],[119.30278,-1.273612],[119.553627,-0.860949],[119.610977,-1.12573],[119.581657,-1.25812],[119.423126,-1.356679],[119.695396,-1.450899],[119.659027,-1.50289],[119.777779,-1.692499],[119.756668,-1.755519],[119.867416,-1.76982],[119.909172,-1.834719],[119.817101,-2.044529],[119.61335,-2.204939],[119.596573,-2.294341],[119.715866,-2.39282],[119.700089,-2.553469],[119.761757,-2.677659],[119.643578,-2.75641],[119.493317,-2.74063],[119.62973,-3.113259],[119.396072,-3.19317],[119.490921,-3.48397],[119.304726,-3.425277]]]}},{"type":"Feature","properties":{"kode":"72"},"geometry":{"type":"MultiPolygon","coordinates":[[[[123.86039,-1.997033],[123.789017,-1.979887],[123.772453,-1.903466],[123.80835,-1.893784],[123.86039,-1.997033]]],[[[123.492409,-1.71136],[123.501411,-1.507485],[123.547562,-1.509387],[123.571487,-1.607135],[123.627731,-1.62471],[123.615463,-1.694854],[123.492409,-1.71136]]],[[[123.169479,-1.634564],[123.103592,-1.583008],[123.185196,-1.513129],[123.157669,-1.31768],[122.865974,-1.600239],[122.791542,-1.383733],[122.904968,-1.184323],[123.109581,-1.169781],[123.145302,-1.208792],[123.186867,-1.162364],[123.2453,-1.232014],[123.191849,-1.327573],[123.248268,-1.394754],[123.360313,-1.231369],[123.556793,-1.288018],[123.459213,-1.518635],[123.367729,-1.503777],[123.300964,-1.414419],[123.169479,-1.634564]]],[[[119.551262,-0.861102],[119.680214,-0.767804],[119.725906,-0.65805],[119.844048,-0.881364],[119.877937,-0.860083],[119.759331,-0.489319],[119.817886,-0.188819],[119.793221,-0.1203],[119.675064,-0.120693],[119.606422,-0.011014],[119.719109,-0.007734],[119.777496,-0.112435],[119.836311,-0.110336],[119.888161,-0.012285],[119.869308,0.103943],[119.773888,0.195469],[119.906456,0.230215],[119.849724,0.35105],[119.912537,0.474808],[120.045471,0.508192],[120.017326,0.662879],[120.231522,0.792128],[120.246323,0.957992],[120.347801,0.986282],[120.328423,0.85386],[120.577087,0.769187],[120.606506,0.872798],[120.78904,1.036012],[120.83316,1.320694],[120.976059,1.348508],[121.232872,1.241835],[121.44651,1.318008],[121.431061,1.172257],[121.561028,1.069681],[121.936829,1.106721],[121.991379,1.027292],[122.105263,1.073977],[122.188141,1.045298],[121.968292,0.894658],[121.882187,0.9727],[121.294579,0.82408],[121.168579,0.690562],[121.247383,0.597502],[121.35453,0.571319],[121.345665,0.474487],[120.905403,0.393952],[120.698936,0.508861],[120.528976,0.514094],[120.304108,0.413597],[120.1577,0.222198],[120.008202,-0.176373],[120.054924,-0.630386],[120.31295,-0.967754],[120.40947,-0.924922],[120.505188,-0.999639],[120.591782,-1.168508],[120.570587,-1.253602],[120.690422,-1.420703],[120.842125,-1.368169],[120.858665,-1.41577],[121.117386,-1.423487],[121.300293,-1.103074],[121.472191,-0.905653],[121.65081,-0.806444],[121.654663,-0.911058],[121.949707,-0.997026],[122.005463,-0.941112],[122.101791,-0.963619],[122.202255,-0.790099],[122.627403,-0.767298],[122.72934,-0.814772],[122.914139,-0.768896],[122.762383,-0.702591],[122.811676,-0.634691],[122.956444,-0.648756],[123.113899,-0.574524],[123.409821,-0.660818],[123.452087,-0.765581],[123.34938,-1.03729],[123.263397,-1.05125],[123.101006,-0.840044],[123.056534,-0.902925],[122.790009,-0.950041],[122.708473,-1.134077],[122.390541,-1.48866],[122.220932,-1.595521],[121.8778,-1.675358],[121.684959,-1.943017],[121.565193,-1.949181],[121.451309,-1.804206],[121.295853,-1.7989],[121.317474,-1.937669],[121.418983,-1.939971],[121.525383,-2.049364],[121.549866,-2.171898],[121.680809,-2.181712],[121.821411,-2.294693],[122.033119,-2.65964],[122.004349,-2.712314],[122.181404,-2.823496],[122.180618,-2.869903],[122.319016,-2.914855],[122.25071,-3.022647],[122.486099,-3.180516],[122.312798,-3.271106],[122.191582,-3.032609],[121.940231,-2.932159],[121.700546,-2.548773],[120.953987,-2.237536],[120.70327,-2.212562],[120.401123,-1.888412],[120.329796,-2.054484],[119.994949,-1.963335],[119.83773,-2.051188],[119.902878,-1.796736],[119.762688,-1.764873],[119.775932,-1.693306],[119.669128,-1.545653],[119.696596,-1.459508],[119.639478,-1.405974],[119.516769,-1.436377],[119.431,-1.336197],[119.570869,-1.272736],[119.603714,-1.166935],[119.551262,-0.861102]],[[120.530083,-1.7894],[120.631844,-2.059787],[120.685783,-2.066975],[120.599411,-1.790897],[120.530083,-1.7894]]],[[[123.092239,-1.770375],[123.140778,-1.866415],[123.063591,-1.920046],[123.092239,-1.770375]]],[[[122.362381,-0.362636],[122.29538,-0.268201],[122.306877,-0.23959],[122.375923,-0.284257],[122.362381,-0.362636]]],[[[122.149895,-0.39855],[122.056259,-0.36745],[122.098,-0.295803],[122.149895,-0.39855]]],[[[122.059982,-0.404818],[121.8722,-0.416031],[121.872589,-0.35888],[122.054825,-0.352623],[122.053284,-0.389249],[122.059982,-0.404818]]],[[[121.914711,-0.453557],[121.917236,-0.519645],[121.834412,-0.496036],[121.662193,-0.558711],[121.754837,-0.431368],[121.914711,-0.453557]]]]}},{"type":"Feature","properties":{"kode":"71"},"geometry":{"type":"MultiPolygon","coordinates":[[[[126.714409,4.282143],[126.720451,4.525645],[126.805336,4.546466],[126.9142,4.283608],[126.792336,4.169112],[126.761673,4.012424],[126.664978,4.057411],[126.788681,4.253698],[126.714409,4.282143]]],[[[126.82341,3.745728],[126.753197,3.806978],[126.742836,3.864257],[126.834442,3.81489],[126.82341,3.745728]]],[[[125.650261,3.509186],[125.640015,3.37788],[125.523735,3.433616],[125.51297,3.5587],[125.398689,3.663957],[125.422775,3.724515],[125.509193,3.716769],[125.650261,3.509186]]],[[[123.465736,0.330308],[123.51918,0.449638],[123.494171,0.636227],[123.368813,0.661965],[123.117294,0.92862],[123.605904,0.906905],[123.784668,0.835112],[124.137665,0.928344],[124.308136,1.021709],[124.345238,1.158185],[124.583717,1.194596],[124.610794,1.234678],[124.51638,1.302175],[124.533218,1.356623],[124.829369,1.468621],[124.806114,1.5772],[124.994385,1.754779],[125.242546,1.505849],[125.07621,1.367611],[125.020775,1.146533],[124.883057,0.963803],[124.788437,0.943151],[124.625069,0.7633],[124.560966,0.58909],[124.495369,0.548974],[124.512131,0.473545],[123.781235,0.312628],[123.465736,0.330308]]]]}},{"type":"Feature","properties":{"kode":"91"},"geometry":{"type":"MultiPolygon","coordinates":[[[[131.34464542169746,-1.3661541567907365],[131.31813,-1.423989],[131.28271062695097,-1.3908816227521346],[131.29277,-1.4125],[131.337219,-1.438056],[131.283615,-1.504167],[131.208664,-1.523113],[131.166672,-1.462778],[130.931381,-1.426291],[130.999207,-1.38162],[131.051117,-1.254166],[131.176544,-1.220246],[131.248886,-1.082777],[131.300446,-0.917804],[131.225891,-0.821073],[131.508682,-0.729509],[131.54393,-0.740925],[131.507767,-0.774713],[131.847595,-0.705874],[132.170563,-0.425557],[132.419174,-0.34333],[132.719208,-0.362848],[132.798798,-0.416224],[132.766495,-0.493181],[132.798859,-0.416281],[132.953613,-0.452833],[133.3965,-0.740975],[133.972809,-0.719501],[134.136871,-0.863292],[134.052551,-0.868969],[134.010406,-0.959727],[134.278992,-1.343317],[134.213638,-1.407771],[134.200836,-1.55],[134.067322,-1.673561],[134.095322,-1.684829],[134.102814,-1.860669],[134.156525,-1.966227],[134.102783,-2.051111],[134.172775,-2.347221],[134.320007,-2.507321],[134.461395,-2.863056],[134.524231,-2.79222],[134.460281,-2.550001],[134.569168,-2.484439],[134.531952,-2.449719],[134.630829,-2.474167],[134.661575,-2.611106],[134.661392,-2.823219],[134.426788,-3.006559],[134.425034,-3.110369],[134.27594,-3.23835],[134.205246,-3.391239],[135.25766,-3.75588],[134.87616,-4.251943],[134.723328,-4.198055],[134.740234,-4.122816],[134.687775,-4.141108],[134.629166,-4.118611],[134.65416,-4.052778],[134.648819,-4.099074],[134.72139,-4.057779],[134.661392,-3.982499],[134.746674,-3.97333],[134.765839,-3.94222],[134.761459,-3.970805],[134.815201,-3.986519],[134.76889,-3.934001],[134.868347,-3.999378],[134.963226,-3.948615],[134.674438,-3.920278],[134.506393,-4.044443],[134.438339,-3.919166],[134.332489,-3.879719],[134.34967,-3.966287],[134.269501,-3.937431],[134.334351,-4.020581],[134.291107,-4.048056],[134.167755,-3.894139],[134.105377,-3.89813],[134.190826,-3.83283],[134.136383,-3.741941],[133.959717,-3.8625],[133.832779,-3.556],[133.774185,-3.574173],[133.816177,-3.727199],[133.751892,-3.645586],[133.690689,-3.671041],[133.707214,-3.60352],[133.621094,-3.47574],[133.701111,-3.43861],[133.664291,-3.31969],[133.701843,-3.17016],[133.778549,-3.213245],[133.835022,-3.018876],[133.8830906553443,-3.0635107346061408],[133.850159,-2.969469],[133.90744,-2.932629],[133.79805,-2.902699],[133.793335,-3.028612],[133.648102,-3.123012],[133.634171,-3.41527],[133.538422,-3.428124],[133.514999,-3.33222],[133.488617,-3.307779],[133.518051,-3.434166],[133.483383,-3.441008],[133.441391,-3.407778],[133.418372398079,-3.4139326703357735],[133.487686,-3.454665],[133.550522,-3.454699],[133.58223,-3.571995],[133.409897,-3.691449],[133.439117,-3.59356],[133.428284,-3.571705],[133.4400344913241,-3.555486755053879],[133.42337,-3.571976],[133.432709,-3.596908],[133.330551,-3.54444],[133.231949,-3.594444],[133.328339,-3.554167],[133.402466,-3.595294],[133.394775,-3.74674],[133.458252,-3.85824],[133.352539,-3.90133],[133.312469,-3.841423],[133.2730453974421,-3.8349869370676894],[133.346725,-3.905551],[133.402802,-3.903609],[133.324722,-3.983333],[133.289993,-3.948888],[133.329849,-3.989291],[133.25,-4.07361],[133.075562,-4.054166],[133.01889,-4.119169],[132.91243,-4.08514],[132.808365,-3.945114],[132.845184,-3.955489],[132.725403,-3.636369],[132.89035,-3.644141],[132.939285,-3.552016],[132.895554,-3.462307],[132.816193,-3.44364],[132.843002,-3.299095],[132.7733,-3.256519],[132.728088,-3.337392],[132.663101,-3.315729],[132.596161,-3.229589],[132.645004,-3.191944],[132.350555,-2.937219],[132.20694,-2.906389],[132.087494,-2.960001],[132.057785,-2.887778],[131.98172,-2.924059],[132.037506,-2.83806],[131.978149,-2.82965],[132.064728,-2.787222],[131.950562,-2.76694],[132.200562,-2.704166],[132.111115,-2.690833],[132.196671,-2.651666],[132.438614,-2.677778],[132.43158,-2.735032],[132.483719,-2.677746],[132.579727,-2.689167],[132.71611,-2.798055],[132.791946,-2.78972],[133.042374,-2.49503],[133.215057,-2.411247],[133.303406,-2.443925],[133.306396,-2.544722],[133.323822,-2.46779],[133.381012,-2.528588],[133.371948,-2.671668],[133.31177955222228,-2.671407113078961],[133.308884,-2.701112],[133.40393448097194,-2.694633957571151],[133.424225,-2.50341],[133.44463372311282,-2.6426224688058833],[133.479996,-2.68],[133.504166,-2.639167],[133.523056,-2.688059],[133.513062,-2.64639],[133.559174,-2.667499],[133.534927,-2.610388],[133.55722,-2.605279],[133.575272,-2.632501],[133.626389,-2.64306],[133.568771,-2.568179],[133.641525,-2.531818],[133.650558,-2.617499],[133.666656,-2.554531],[133.63916,-2.675278],[133.675827,-2.704722],[133.603333,-2.80778],[133.648056,-2.868056],[133.649719,-2.746941],[133.71167,-2.7825],[133.666382,-2.733061],[133.709381,-2.704859],[133.69017,-2.61626],[133.752502,-2.624444],[133.75011439498624,-2.6696554986571024],[133.753891,-2.62167],[133.693054,-2.610559],[133.693604,-2.538329],[133.788895,-2.627781],[133.75135081118535,-2.670433682289733],[133.757782,-2.720833],[133.776382,-2.75389],[133.760559,-2.672221],[133.830276,-2.67028],[133.810837,-2.735],[133.836609,-2.66672],[133.895828,-2.67778],[133.845276,-2.663611],[133.88916,-2.650834],[133.863739,-2.605839],[133.843887,-2.661945],[133.799164,-2.638889],[133.807739,-2.543266],[133.78389,-2.487222],[133.871048,-2.507089],[133.792007,-2.482524],[133.821396,-2.445279],[133.853333,-2.473055],[133.871948,-2.455829],[133.903061,-2.482219],[133.9578284686866,-2.470573351663792],[133.901108,-2.477777],[133.838882,-2.394723],[133.940002,-2.394999],[133.946945,-2.431666],[133.985001,-2.449445],[133.947815,-2.500559],[134.01416,-2.579723],[133.949799,-2.50006],[133.974716,-2.485556],[133.986389,-2.446945],[133.948059,-2.420309],[133.988327,-2.389445],[134.00551571402607,-2.342402628511321],[133.949173,-2.32528],[133.991394,-2.299722],[134.000488,-2.241946],[133.98555,-2.225],[133.94278,-2.231945],[133.96611,-2.076109],[133.901642,-2.135758],[133.947784,-2.08139],[133.949158,-2.04542],[133.878616,-2.079719],[133.8636977022722,-2.1043613417946796],[133.872208,-2.126975],[133.841949,-2.066666],[133.781387,-2.151111],[133.814728,-2.098333],[133.734161,-2.099167],[133.769608,-2.16131],[133.732498,-2.122779],[133.623215,-2.232686],[133.575562,-2.190556],[133.623062,-2.136109],[133.579315,-2.143179],[133.555054,-2.223849],[133.474167,-2.174723],[133.487305,-2.23156],[133.325668,-2.218295],[133.274445,-2.157777],[133.263107,-2.20194],[132.960007,-2.293055],[132.825424,-2.2425],[132.64917,-2.289999],[132.574524,-2.189304],[132.315552,-2.283611],[132.141388,-2.148611],[132.134171,-2.083329],[132.134171,-2.14028],[132.038605,-2.070001],[132.115204,-1.99272],[132.136383,-2.023611],[132.272705,-1.934654],[132.113312,-1.985411],[132.085007,-2.021667],[132.102493,-1.970555],[132.09687241956394,-1.9663386033191153],[132.063049,-2.024999],[132.086563,-1.870383],[132.133606,-1.89722],[132.16388531983705,-1.8817427952184775],[132.08667,-1.868329],[132.04306,-2.026943],[131.923889,-1.870834],[131.95597869544682,-1.8397294649781255],[131.958893,-1.826667],[132.017746,-1.814355],[131.920944,-1.813186],[131.995148,-1.73766],[132.008072,-1.771559],[132.038574,-1.791144],[132.026947,-1.71501],[132.091644,-1.789774],[132.004608,-1.684923],[132.078308,-1.670291],[132.068665,-1.631956],[132.121613,-1.61576],[132.137741,-1.599489],[132.124725,-1.582779],[132.148895,-1.574444],[132.122223,-1.582501],[132.133224,-1.603972],[132.101486,-1.604793],[132.05016639225735,-1.644093162129772],[132.053116,-1.662997],[131.91156,-1.719559],[131.900589,-1.673671],[131.94196284637923,-1.6752599984177832],[131.880676,-1.638016],[132.001724,-1.554855],[131.986115,-1.41694],[131.969452,-1.549171],[131.869995,-1.583611],[131.887161,-1.550018],[131.871765,-1.527441],[131.920837,-1.524722],[131.876389,-1.508055],[131.809998,-1.614445],[131.779449,-1.596668],[131.807785,-1.545834],[131.794724,-1.49111],[131.834167,-1.498888],[131.818893,-1.450279],[131.790558,-1.491666],[131.79834,-1.548612],[131.694778,-1.555593],[131.741592,-1.50602],[131.744675,-1.453821],[131.712875,-1.414859],[131.686661,-1.43801],[131.653366,-1.40664],[131.73218519002734,-1.3649769162954857],[131.65152,-1.402579],[131.669449,-1.46722],[131.740555,-1.457071],[131.718613,-1.520834],[131.638779,-1.544687],[131.58696,-1.490177],[131.6486449466504,-1.4460522361971546],[131.633331,-1.360278],[131.641296,-1.448009],[131.561386,-1.433055],[131.524445,-1.479721],[131.514236,-1.376528],[131.515411,-1.47501],[131.449127,-1.5144],[131.379562,-1.451961],[131.426468,-1.425751],[131.430557,-1.403055],[131.452225,-1.399999],[131.432495,-1.377499],[131.389603,-1.41061],[131.435272,-1.347779],[131.380554,-1.401945],[131.34464542169746,-1.3661541567907365]],[[131.348892,-1.28611],[131.305161,-1.380453],[131.33983367103914,-1.3579468728525974],[131.348892,-1.28611]],[[133.914993,-3.056112],[133.885284,-3.114722],[133.922653,-3.12164],[133.914993,-3.056112]],[[133.421112,-3.51167],[133.471664,-3.538334],[133.467499,-3.515278],[133.421112,-3.51167]],[[133.27049402021882,-3.8456713873955675],[133.233887,-3.838056],[133.242783,-3.850833],[133.27049402021882,-3.8456713873955675]],[[133.28597025446143,-2.524689891664557],[133.259171,-2.51611],[133.259018,-2.529652],[133.235275,-2.52333],[133.209167,-2.547222],[133.28597025446143,-2.524689891664557]],[[133.33432968570924,-2.5244963264619367],[133.324997,-2.531111],[133.345276,-2.53889],[133.33432968570924,-2.5244963264619367]],[[133.3834064642762,-2.7039039719325104],[133.390549,-2.741111],[133.424362,-2.760695],[133.3834064642762,-2.7039039719325104]],[[133.438889,-2.686391],[133.427216,-2.67667],[133.458618,-2.711666],[133.475006,-2.701939],[133.488052,-2.727222],[133.477219,-2.700556],[133.438889,-2.686391]],[[133.626938,-2.55694],[133.625549,-2.557777],[133.636108,-2.578059],[133.626938,-2.55694]],[[133.85157729666125,-2.7039100179302067],[133.851395,-2.709444],[133.92778,-2.713332],[133.85157729666125,-2.7039100179302067]],[[134.0271302727052,-2.338770336260071],[134.031387,-2.338055],[134.020203,-2.316109],[134.0271302727052,-2.338770336260071]],[[133.62986457993557,-2.151117468091444],[133.657776,-2.156389],[133.668884,-2.131109],[133.62986457993557,-2.151117468091444]],[[133.63235740400458,-2.1464585515221453],[133.646393,-2.139444],[133.642502,-2.127499],[133.63235740400458,-2.1464585515221453]],[[133.57010708651868,-2.1727138280191602],[133.524567,-2.111629],[133.454163,-2.094167],[133.525162,-2.113699],[133.57010708651868,-2.1727138280191602]],[[133.49350475678852,-2.1818402665407888],[133.500473,-2.186073],[133.511093,-2.164902],[133.488647,-2.158529],[133.488831,-2.131351],[133.475006,-2.123889],[133.49350475678852,-2.1818402665407888]],[[133.426117,-2.157499],[133.40921,-2.200785],[133.420273,-2.2],[133.426117,-2.157499]],[[132.1669183086245,-1.8899306056965326],[132.170273,-1.8993],[132.202835,-1.869528],[132.223038,-1.884167],[132.2914704327115,-1.83896729267877],[132.257645,-1.837499],[132.1669183086245,-1.8899306056965326]],[[132.2887177513261,-1.8193044514085757],[132.324417,-1.827086],[132.339996,-1.81417],[132.325989,-1.82558],[132.2887177513261,-1.8193044514085757]],[[132.0001126125117,-1.9122197940135754],[132.033707,-1.930064],[132.002701,-1.908547],[132.0001126125117,-1.9122197940135754]],[[131.950836,-1.86278],[131.948608,-1.86306],[131.983337,-1.874444],[131.97680523314403,-1.9021945993937208],[131.984726,-1.875556],[131.97084,-1.8475],[131.9835983784175,-1.8591244097395674],[131.973618,-1.84361],[131.950836,-1.86278]],[[131.9842657981138,-1.8597325089637922],[131.986389,-1.861667],[131.98804085723498,-1.8501329142709726],[131.9842657981138,-1.8597325089637922]],[[132.009308,-1.858568],[132.008865,-1.860058],[132.073334,-1.84528],[132.009308,-1.858568]],[[132.05513229419427,-1.7212205795421425],[132.089722,-1.702777],[132.063065,-1.696742],[132.05513229419427,-1.7212205795421425]],[[131.942215,-1.65972],[131.961304,-1.6558],[131.942215,-1.657778],[131.942215,-1.65972]],[[131.5501142213832,-1.3848547126025221],[131.556671,-1.381668],[131.53822641777336,-1.3541305707669784],[131.5501142213832,-1.3848547126025221]],[[131.5377877431854,-1.352996812109535],[131.56839965653515,-1.3466745911887574],[131.536179,-1.348839],[131.5377877431854,-1.352996812109535]],[[131.58467244518724,-1.3433138027375429],[131.588882,-1.275],[131.569443,-1.241109],[131.58467244518724,-1.3433138027375429]],[[131.46439790519293,-1.486740260199413],[131.4607058482229,-1.476932922324262],[131.460831,-1.486667],[131.46439790519293,-1.486740260199413]],[[131.45725203902253,-1.4677584501915133],[131.44722,-1.44111],[131.450562,-1.472781],[131.45725203902253,-1.4677584501915133]],[[131.720001,-1.352221],[131.72139,-1.352499],[131.73004087032507,-1.3258308888771615],[131.720001,-1.352221]],[[131.73375493817457,-1.314381500502823],[131.734726,-1.311388],[131.717773,-1.289999],[131.73375493817457,-1.314381500502823]],[[131.796234,-1.440886],[131.82309,-1.44144],[131.821487,-1.429119],[131.796234,-1.440886]],[[132.014725,-1.640616],[132.038483,-1.645047],[132.038208,-1.631901],[132.014725,-1.640616]],[[132.047653,-1.627985],[132.073654,-1.616485],[132.07088543995238,-1.6030936658606332],[132.047653,-1.627985]],[[132.103378,-1.568281],[132.106369,-1.56858],[132.10121507414465,-1.5602521914425562],[132.103378,-1.568281]],[[132.09149710934082,-1.5445497244832316],[132.07605,-1.51959],[132.071335,-1.551363],[132.09149710934082,-1.5445497244832316]],[[132.0756696268979,-1.6508569971777545],[132.096176,-1.649316],[132.076401,-1.647827],[132.0756696268979,-1.6508569971777545]],[[133.54046539644378,-2.17857240157378],[133.543091,-2.172551],[133.523605,-2.164444],[133.54046539644378,-2.17857240157378]],[[133.6523778463975,-2.1727359578554335],[133.679443,-2.153889],[133.672745,-2.140027],[133.6523778463975,-2.1727359578554335]],[[133.986115,-2.141666],[134.003326,-2.16528],[134.011322,-2.155835],[133.986115,-2.141666]],[[133.63899825063191,-2.7194746740993034],[133.636948,-2.717221],[133.604446,-2.726668],[133.63899825063191,-2.7194746740993034]],[[133.284164,-2.70861],[133.29834,-2.644168],[133.229721,-2.722223],[133.284164,-2.70861]],[[133.2726690400168,-3.8344347329599158],[133.27585388900184,-3.8194855182935066],[133.26889,-3.82889],[133.2726690400168,-3.8344347329599158]],[[133.28037080459185,-3.7982837780843766],[133.283615,-3.783056],[133.2655185299989,-3.766875856735768],[133.28037080459185,-3.7982837780843766]],[[133.236664,-3.742219],[133.236389,-3.740831],[133.216385,-3.754166],[133.236664,-3.742219]],[[133.41791738303004,-3.413215150643278],[133.442215,-3.35833],[133.402771,-3.32694],[133.428894,-3.362779],[133.41791738303004,-3.413215150643278]],[[134.6931340686103,-4.126227988303231],[134.656387,-4.12889],[134.688614,-4.134166],[134.6931340686103,-4.126227988303231]]],[[[134.563309,-2.280778],[134.590775,-2.395468],[134.564194,-2.44134],[134.502853,-2.360739],[134.562027,-2.36854],[134.563309,-2.280778]]],[[[134.348053,-2.165],[134.315552,-2.078889],[134.388184,-1.99321],[134.411667,-2.073333],[134.348053,-2.165]]],[[[134.233337,-1.741944],[134.198441,-1.791215],[134.165833,-1.951112],[134.148331,-1.826945],[134.233337,-1.741944]]],[[[134.051834,-3.924399],[134.098984,-3.915533],[134.211349,-4.02673],[134.083618,-3.983841],[134.051834,-3.924399]]],[[[133.815323,-2.290874],[133.806671,-2.237499],[133.79277,-2.2775],[133.763062,-2.239721],[133.904449,-2.193329],[133.882507,-2.240833],[133.888885,-2.265833],[133.815323,-2.290874]],[[133.8501163816263,-2.2409106936768897],[133.871674,-2.2475],[133.85083,-2.235828],[133.8501163816263,-2.2409106936768897]]],[[[133.726669,-2.434444],[133.833893,-2.408888],[133.869446,-2.455829],[133.822495,-2.44361],[133.768616,-2.481946],[133.726669,-2.434444]]],[[[133.318481,-4.098261],[133.555069,-4.21874],[133.63472,-4.314309],[133.548859,-4.234501],[133.460098,-4.251956],[133.331375,-4.182169],[133.318481,-4.098261]]],[[[133.617493,-2.497779],[133.56395,-2.514045],[133.48555,-2.41722],[133.597504,-2.45639],[133.617493,-2.497779]]],[[[130.429993,-0.201666],[130.376663,-0.182222],[130.424438,-0.166111],[130.425278,-0.12944],[130.38916,-0.171944],[130.335556,-0.141667],[130.353561,-0.192139],[130.281281,-0.111369],[130.352783,-0.078889],[130.362503,-0.134999],[130.368683,-0.07578],[130.414169,-0.113889],[130.512131,-0.049782],[130.578049,-0.075],[130.569473,-0.039024],[130.769775,-0.05362],[130.739716,-0.025279],[130.797775,-0.004999],[130.967407,-0.061795],[131.048615,-0.020278],[131.033615,-0.060277],[131.299164,-0.159734],[131.340775,-0.290732],[131.241455,-0.381259],[131.103653,-0.307919],[130.959106,-0.351223],[130.868683,-0.235299],[130.799652,-0.241049],[130.698608,-0.07833],[130.621017,-0.080327],[130.731461,-0.294659],[130.919556,-0.305492],[130.944687,-0.354012],[130.879807,-0.420643],[130.727036,-0.439642],[130.679718,-0.29222],[130.578339,-0.321111],[130.552979,-0.43076],[130.527466,-0.246599],[130.436951,-0.290281],[130.21817,-0.208118],[130.429993,-0.201666]]],[[[130.640656,-0.970106],[130.90155,-0.888422],[130.936493,-0.939985],[131.051208,-0.931365],[131.087753,-1.012213],[130.973907,-1.35391],[130.858017,-1.345639],[130.755585,-1.248669],[130.640656,-0.970106]]],[[[130.804077,-0.751899],[130.927017,-0.784391],[130.850052,-0.860466],[130.387772,-0.92278],[130.484329,-0.789238],[130.486481,-0.829595],[130.544174,-0.839999],[130.566559,-0.793749],[130.585312,-0.833034],[130.635941,-0.790829],[130.815277,-0.825834],[130.804077,-0.751899]]],[[[130.524445,-0.46778],[130.614716,-0.395278],[130.69722,-0.44778],[130.592773,-0.534445],[130.577225,-0.463055],[130.456711,-0.509812],[130.513062,-0.487499],[130.477219,-0.43889],[130.524445,-0.46778]]],[[[130.265839,-2.05389],[129.862778,-1.976666],[129.719162,-1.879169],[130.058838,-1.724479],[130.258179,-1.729099],[130.3703,-1.676137],[130.352402,-1.736864],[130.455826,-1.834167],[130.340088,-1.922295],[130.478882,-2.00778],[130.371674,-2.042223],[130.405273,-2.000278],[130.343887,-1.95611],[130.265839,-2.05389]]],[[[129.742218,-1.219721],[129.866943,-1.143888],[129.978333,-1.171944],[129.832779,-1.25111],[129.887573,-1.197153],[129.742218,-1.219721]]]]}},{"type":"Feature","properties":{"kode":"12"},"geometry":{"type":"MultiPolygon","coordinates":[[[[98.25574,4.290953],[98.171654,4.108615],[98.272324,4.119934],[98.528557,4.011974],[98.558937,3.939592],[98.672783,3.9084],[98.788483,3.718319],[99.205673,3.535731],[99.485054,3.348217],[99.546608,3.244231],[99.737755,3.170621],[99.998863,2.93651],[99.981476,2.742654],[100.098732,2.676424],[100.222885,2.703859],[100.33075,2.534235],[100.302208,2.413565],[100.360146,2.220377],[100.2864,1.830302],[100.408333,1.777267],[100.455269,1.629147],[100.408829,1.470363],[100.077881,1.387209],[100.16082,1.151491],[100.108658,1.071883],[100.161377,0.999156],[100.092819,0.915075],[100.183716,0.761895],[99.835236,0.889678],[99.845169,0.686254],[99.914688,0.680979],[99.964767,0.554445],[99.908188,0.474805],[99.716553,0.454064],[99.640007,0.547226],[99.499702,0.538817],[99.16198,0.231812],[99.057587,0.726479],[98.777878,1.434891],[98.759827,1.528909],[98.82769,1.677764],[98.707138,1.789281],[98.67894,1.740839],[98.466949,1.987465],[98.153148,2.146027],[98.18766,2.319383],[98.083992,2.50935],[98.12426,2.655123],[98.088196,2.821929],[97.954605,2.900333],[97.978615,3.127329],[97.872261,3.249049],[98.029823,3.329871],[97.949715,3.391531],[97.803185,3.731739],[97.908562,3.820508],[97.89991,3.89141],[98.023132,3.969775],[98.059311,4.190727],[98.145401,4.287369],[98.25574,4.290953]],[[98.92707,2.662123],[98.79274,2.79301],[98.531593,2.892692],[98.527939,2.792798],[98.616501,2.648208],[98.683029,2.637003],[98.695267,2.72581],[98.777992,2.739367],[98.971985,2.50286],[98.98819,2.455078],[98.874153,2.425913],[98.69825,2.601211],[98.667595,2.545009],[98.854034,2.333492],[99.055664,2.329031],[99.148209,2.430922],[99.062157,2.391961],[99.027946,2.516789],[98.924484,2.584452],[98.92707,2.662123]]],[[[98.74559,0.073061],[98.522354,0.144102],[98.796844,0.171431],[98.850594,0.117946],[98.74559,0.073061]]],[[[98.371108,0.005866],[98.465797,-0.0922],[98.56321,-0.328114],[98.314896,-0.011829],[98.371108,0.005866]]],[[[98.409668,-0.596789],[98.341278,-0.512249],[98.442184,-0.244816],[98.516144,-0.35539],[98.498367,-0.555216],[98.409668,-0.596789]]],[[[97.500496,0.916113],[97.399849,0.942146],[97.253624,1.231068],[97.073105,1.417242],[97.257141,1.410369],[97.340027,1.4905],[97.476486,1.468499],[97.678436,1.177108],[97.787994,1.149787],[97.935623,0.960954],[97.8918,0.628914],[97.704224,0.559856],[97.645798,0.737644],[97.500496,0.916113]]]]}},{"type":"Feature","properties":{"kode":"19"},"geometry":{"type":"MultiPolygon","coordinates":[[[[107.545408,-2.902208],[107.662464,-2.5584],[107.81536,-2.53632],[108.183744,-2.6768],[108.290432,-2.85312],[108.169472,-3.14816],[108.073408,-3.166144],[108.062976,-3.235776],[107.96832,-3.237568],[107.961664,-3.149376],[107.85152,-3.053248],[107.839552,-3.146784],[107.642048,-3.23136],[107.589952,-3.197696],[107.610816,-2.926144],[107.545408,-2.902208]]],[[[107.488,-2.853568],[107.416256,-2.94496],[107.362176,-2.896256],[107.426752,-2.828096],[107.488,-2.853568]]],[[[106.881216,-2.999872],[106.793344,-3.019648],[106.707712,-2.962624],[106.803776,-2.885888],[106.900608,-2.935168],[106.881216,-2.999872]]],[[[105.128064,-2.082688],[105.165632,-1.925504],[105.34688,-1.841024],[105.393152,-1.779392],[105.334016,-1.693568],[105.464384,-1.560448],[105.600512,-1.545152],[105.644352,-1.641792],[105.714752,-1.655552],[105.65472,-1.716672],[105.731264,-1.780544],[105.792768,-1.755264],[105.72064,-1.57952],[105.753664,-1.531264],[106.008896,-1.567616],[106.192512,-1.896128],[106.175616,-2.150848],[106.281152,-2.397888],[106.380672,-2.47392],[106.798336,-2.5664],[106.65664,-2.72064],[106.587264,-2.916224],[106.742592,-3.053824],[106.520832,-3.112192],[106.412288,-2.966656],[105.962816,-2.805312],[105.884544,-2.635776],[105.932224,-2.473024],[105.801792,-2.35872],[105.82368,-2.30688],[105.733952,-2.128384],[105.503616,-2.080512],[105.301184,-2.142848],[105.217216,-2.06432],[105.128064,-2.082688]]]]}},{"type":"Feature","properties":{"kode":"13"},"geometry":{"type":"MultiPolygon","coordinates":[[[[99.16198,0.231812],[99.499702,0.538817],[99.640007,0.547226],[99.716553,0.454064],[99.908188,0.474805],[99.964767,0.554445],[99.914688,0.680979],[99.845169,0.686254],[99.835236,0.889678],[99.957077,0.875112],[100.25573,0.709395],[100.205925,0.593234],[100.281677,0.332958],[100.394623,0.339763],[100.464088,0.222191],[100.778122,0.169268],[100.748398,-0.065219],[100.833672,-0.318377],[100.910423,-0.370743],[100.996368,-0.314363],[101.06768,-0.498227],[101.359833,-0.659254],[101.6539,-0.935173],[101.821533,-0.977189],[101.830315,-1.10193],[101.878525,-1.110225],[101.815407,-1.209807],[101.709229,-1.237597],[101.694035,-1.480637],[101.492464,-1.681019],[101.125816,-1.679094],[101.144699,-1.917723],[101.291611,-2.133106],[101.306076,-2.23891],[101.244644,-2.344946],[101.027755,-2.482182],[100.897308,-2.337769],[100.831245,-2.188847],[100.884331,-2.042843],[100.858192,-1.919218],[100.64151,-1.618727],[100.544067,-1.308304],[100.402206,-1.268252],[100.410194,-1.037552],[100.342545,-0.882115],[99.820641,-0.306837],[99.735329,-0.027319],[99.394257,0.152445],[99.353981,0.230505],[99.16198,0.231812]],[[100.500008,-0.534535],[100.540764,-0.666713],[100.59713,-0.680994],[100.544914,-0.55475],[100.500008,-0.534535]],[[100.148926,-0.294198],[100.165375,-0.388144],[100.218018,-0.396025],[100.226418,-0.288869],[100.194832,-0.252879],[100.148926,-0.294198]]],[[[100.432472,-3.000107],[100.468422,-3.144241],[100.394447,-3.149384],[100.389984,-3.197419],[100.475174,-3.334633],[100.342789,-3.24575],[100.332291,-3.129642],[100.186508,-2.986326],[100.17469,-2.801497],[100.23597,-2.778423],[100.432472,-3.000107]]],[[[100.015343,-2.805559],[99.970131,-2.509001],[99.994774,-2.498358],[100.221405,-2.740431],[100.11644,-2.831824],[100.015343,-2.805559]]],[[[99.822586,-2.306719],[99.793526,-2.368245],[99.598953,-2.281999],[99.52739,-2.152481],[99.571342,-2.143682],[99.565895,-2.036215],[99.689621,-2.074452],[99.822586,-2.306719]]],[[[99.280853,-1.628746],[99.241554,-1.791817],[99.104195,-1.809051],[98.81971,-1.61324],[98.597008,-1.222869],[98.65641,-0.979386],[98.905327,-0.907312],[98.930374,-1.056429],[99.22258,-1.605247],[99.280853,-1.628746]]]]}},{"type":"Feature","properties":{"kode":"16"},"geometry":{"type":"Polygon","coordinates":[[[105.840332,-4.159925],[105.736504,-4.14257],[105.651817,-4.087366],[105.609012,-3.941194],[105.414685,-3.776846],[105.353288,-3.794026],[105.339727,-3.729057],[105.011985,-4.173651],[104.788078,-4.261929],[104.601004,-4.232642],[104.330181,-4.424722],[104.294205,-4.647204],[104.349944,-4.85207],[104.311096,-4.885782],[103.86399,-4.918034],[103.864089,-4.847539],[103.777253,-4.79643],[103.630332,-4.554627],[103.476627,-4.564854],[103.405136,-4.499798],[103.468517,-4.348306],[103.200666,-4.247289],[103.128459,-4.025171],[102.79337,-3.954387],[102.63594,-3.812298],[102.728362,-3.75001],[102.813889,-3.534643],[102.921399,-3.593359],[102.981817,-3.526327],[102.989653,-3.370434],[102.888499,-3.375246],[102.773751,-3.280437],[102.596323,-3.333274],[102.491776,-3.244821],[102.441376,-3.057934],[102.247734,-3.027864],[102.223949,-2.929184],[102.066829,-2.766654],[102.279852,-2.615552],[102.405707,-2.688557],[102.597958,-2.677392],[102.79447,-2.533695],[102.878348,-2.304883],[103.123599,-2.357747],[103.211938,-2.312515],[103.164581,-2.219417],[103.273361,-2.154748],[103.303619,-2.238668],[103.449943,-2.343645],[103.441574,-2.213186],[103.526903,-2.167123],[103.56171,-2.000056],[103.441719,-1.913766],[103.500085,-1.857687],[103.552617,-1.891252],[103.597851,-1.813841],[103.863641,-1.803907],[103.925284,-1.750187],[103.980489,-1.809214],[104.30012,-1.774048],[104.418398,-1.628021],[104.544899,-1.725683],[104.475063,-1.913292],[104.519772,-1.925953],[104.552302,-1.854772],[104.686527,-1.992045],[104.847588,-2.007696],[104.908005,-2.147511],[104.853081,-2.288282],[105.122139,-2.382225],[105.227684,-2.334802],[105.55791,-2.419285],[105.615726,-2.390048],[105.633308,-2.645045],[105.787621,-2.712982],[105.811295,-2.915317],[106.043472,-2.992686],[106.07856,-3.250618],[105.912909,-3.384527],[105.815506,-3.649148],[105.956879,-3.848718],[105.840332,-4.159925]]]}},{"type":"Feature","properties":{"kode":"15"},"geometry":{"type":"Polygon","coordinates":[[[101.294159,-2.280203],[101.291611,-2.133106],[101.144699,-1.917723],[101.125816,-1.679094],[101.492464,-1.681019],[101.694035,-1.480637],[101.709229,-1.237597],[101.858885,-1.158166],[101.821533,-0.977189],[101.983551,-0.880408],[102.217072,-0.946344],[102.304298,-0.916958],[102.393372,-1.03016],[102.638,-1.12041],[103.008949,-0.755179],[103.482338,-0.771407],[103.748962,-0.987215],[104.209656,-1.071357],[104.369728,-1.022185],[104.413643,-1.130576],[104.515165,-1.67627],[104.418398,-1.628021],[104.30012,-1.774048],[103.980489,-1.809214],[103.925284,-1.750187],[103.863641,-1.803907],[103.597851,-1.813841],[103.552617,-1.891252],[103.500085,-1.857687],[103.441719,-1.913766],[103.56171,-2.000056],[103.526903,-2.167123],[103.441574,-2.213186],[103.449943,-2.343645],[103.303619,-2.238668],[103.273361,-2.154748],[103.164581,-2.219417],[103.211938,-2.312515],[103.123599,-2.357747],[102.878348,-2.304883],[102.79447,-2.533695],[102.597958,-2.677392],[102.405707,-2.688557],[102.279852,-2.615552],[102.066829,-2.766654],[101.867928,-2.728184],[101.674995,-2.532605],[101.546486,-2.560535],[101.559204,-2.451228],[101.294159,-2.280203]],[[101.46859,-2.129224],[101.528671,-2.17382],[101.524849,-2.128504],[101.46859,-2.129224]]]}},{"type":"Feature","properties":{"kode":"18"},"geometry":{"type":"Polygon","coordinates":[[[103.777539,-4.79652],[103.864089,-4.847539],[103.86399,-4.918034],[104.311096,-4.885782],[104.349944,-4.85207],[104.294205,-4.647204],[104.330181,-4.424722],[104.601004,-4.232642],[104.788078,-4.261929],[105.011985,-4.173651],[105.339727,-3.729057],[105.353288,-3.794026],[105.414685,-3.776846],[105.609012,-3.941194],[105.651817,-4.087366],[105.736504,-4.14257],[105.792374,-4.119071],[105.898064,-4.465971],[105.912933,-4.647402],[105.859253,-4.776061],[105.903664,-4.938873],[105.774124,-5.837541],[105.603989,-5.830646],[105.552834,-5.69501],[105.407997,-5.623131],[105.292465,-5.446177],[105.148201,-5.810163],[104.595329,-5.497139],[104.529739,-5.541902],[104.721489,-5.934022],[104.592552,-5.937325],[104.29969,-5.641016],[104.297874,-5.573801],[103.998734,-5.32204],[103.905228,-5.207043],[103.908859,-5.127353],[103.598244,-4.922405],[103.777539,-4.79652]]]}},{"type":"Feature","properties":{"kode":"17"},"geometry":{"type":"MultiPolygon","coordinates":[[[[103.777253,-4.79643],[103.535866,-4.914454],[103.309036,-4.781792],[103.113358,-4.578361],[102.900131,-4.49004],[102.277046,-3.951083],[102.300446,-3.841087],[102.214775,-3.653597],[101.620651,-3.239907],[101.325256,-2.739109],[101.154854,-2.639229],[101.027755,-2.482182],[101.294159,-2.280203],[101.559204,-2.451228],[101.546486,-2.560535],[101.674995,-2.532605],[101.867928,-2.728184],[102.066829,-2.766654],[102.223949,-2.929184],[102.247734,-3.027864],[102.441376,-3.057934],[102.491776,-3.244821],[102.596323,-3.333274],[102.773751,-3.280437],[102.888499,-3.375246],[102.989653,-3.370434],[102.981817,-3.526327],[102.921399,-3.593359],[102.813889,-3.534643],[102.728362,-3.75001],[102.63594,-3.812298],[102.79337,-3.954387],[103.128459,-4.025171],[103.200666,-4.247289],[103.468517,-4.348306],[103.405136,-4.499798],[103.476627,-4.564854],[103.630332,-4.554627],[103.777253,-4.79643]]],[[[102.156013,-5.285942],[102.400116,-5.390039],[102.370514,-5.503264],[102.273949,-5.497576],[102.104958,-5.351578],[102.156013,-5.285942]]]]}},{"type":"Feature","properties":{"kode":"11"},"geometry":{"type":"MultiPolygon","coordinates":[[[[98.25574,4.290953],[98.145401,4.287369],[98.059311,4.190727],[98.023132,3.969775],[97.89991,3.89141],[97.908562,3.820508],[97.803185,3.731739],[97.949715,3.391531],[98.029823,3.329871],[97.872261,3.249049],[97.978615,3.127329],[97.954605,2.900333],[98.088196,2.821929],[98.12426,2.655123],[98.083992,2.50935],[98.18766,2.319383],[98.153148,2.146027],[97.949188,2.268416],[97.786621,2.235493],[97.660049,2.402731],[97.58123,2.890189],[97.391426,2.965523],[97.265831,3.209728],[97.169327,3.256543],[96.863861,3.693694],[96.527695,3.732057],[96.208038,4.088209],[95.550133,4.654496],[95.423939,4.817422],[95.213608,5.311016],[95.251068,5.368226],[95.195138,5.528332],[95.440803,5.657204],[95.487781,5.613286],[95.606527,5.628805],[95.890839,5.499509],[96.085419,5.287781],[96.392037,5.209993],[97.010216,5.258295],[97.192665,5.1418],[97.494469,5.248788],[97.900314,4.886347],[98.012398,4.615899],[97.994522,4.527931],[98.169907,4.50053],[98.286339,4.41748],[98.25574,4.290953]]],[[[97.293701,2.079459],[97.133141,2.200681],[97.162033,2.235634],[97.336807,2.15933],[97.293701,2.079459]]],[[[97.111031,2.111826],[97.153557,2.066705],[97.104469,2.014735],[97.069054,2.070064],[97.111031,2.111826]]],[[[96.300812,2.422866],[95.813866,2.644832],[95.690453,2.772583],[95.804932,2.927299],[96.10466,2.737498],[96.093048,2.651589],[96.197578,2.642474],[96.36515,2.485914],[96.424355,2.488191],[96.490204,2.362194],[96.308983,2.357318],[96.300812,2.422866]]]]}},{"type":"Feature","properties":{"kode":"61"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.20538782878532,1.4103666938678998],[114.16565441921614,1.3815464152349364],[114.22046554025258,1.160452624589027],[114.09370742975409,1.106362194159999],[113.9887679755617,1.1265689514959831],[113.88969530629345,1.0473933796008623],[113.87119985988568,0.8886867041281334],[113.9263923321405,0.8403579980232507],[113.7723996833987,0.5637071877365543],[113.46134168577021,0.2783214656631685],[113.27314743110912,0.2427239527482925],[113.41800673782075,0.12635147314199457],[113.43997952083828,-0.07586187942217748],[113.20861038316275,-0.3449153555591806],[113.26231431465396,-0.3916585326151676],[113.22614922340802,-0.4984187479268485],[113.15182240837748,-0.4490945453769086],[113.06255503298848,-0.5094070001329101],[113.02663773014717,-0.47562395218358233],[112.56797803585778,-0.6961957592268391],[112.43143639507366,-0.6713648668950327],[112.3101588799284,-0.7204847749523537],[112.2104093431168,-0.615172810776528],[112.17514214129687,-0.7257830975119077],[112.08504891217763,-0.7019871926547694],[111.82530894375282,-0.9114859054501494],[111.64343677019087,-0.9699437584976067],[111.55033359561901,-1.2086413968829106],[111.44630972411454,-1.2240332784130032],[111.3931387506529,-1.3277580812703604],[111.15726538099261,-1.4342910145186352],[111.11867348269516,-1.5527542191318844],[110.97866512809327,-1.5395948551184233],[110.85889900008885,-1.6304969992370957],[110.90060424788777,-1.7130919689191728],[111.00327986567333,-1.6967814137312303],[110.9795796477826,-1.9457392293818998],[111.09001131027384,-2.0162046730072234],[111.03189085767701,-2.2410564202175465],[111.11857604384943,-2.6526453297181547],[111.1716308293993,-2.6859221259053356],[111.14637282114882,-2.741369858132373],[110.79969480866856,-2.9070457812377413],[110.64963074216507,-3.039549807777348],[110.62351206023345,-2.889745698405193],[110.56357089777879,-2.8388852856273843],[110.3034491266759,-2.9944567104088264],[110.2633069851293,-2.9639256082801353],[110.22410239401034,-2.8872391313807384],[110.26384903620414,-2.7791183776109847],[110.1591333000618,-2.6311325526251608],[110.19738684192924,-2.524339792647254],[110.08635590899809,-2.2418545937144927],[110.11761409051792,-2.0324310858259196],[110.07507067007543,-1.9394013265099375],[109.90183275437818,-1.8308161115742223],[110.03311539815718,-1.6636400842224361],[110.06343543839483,-1.3518054617526332],[109.90689417482639,-1.2041797837699733],[109.93969781790003,-1.1236674622834926],[109.82003266937227,-1.084148180394152],[109.76834742629273,-1.0017814541507164],[109.73222389721514,-0.9876025889882385],[109.75044801906091,-0.8752349928006424],[109.71322582601113,-0.8293056626261546],[109.63543436470422,-0.7955836948315778],[109.69679912338091,-0.7160939807525892],[109.65692319195182,-0.6708767904314641],[109.6543690103216,-0.6717105689875211],[109.64639704558726,-0.6836320503787761],[109.61419170618234,-0.683041171512798],[109.6073075092342,-0.6850895339547947],[109.59596728396303,-0.6936104673491172],[109.58615170363828,-0.6527178424544218],[109.37415375329311,-0.5846175249787393],[109.25390487011373,-0.6048667492010509],[109.13166727382571,-0.5471380646699231],[109.09757479614001,-0.36193853623439054],[109.14931405519957,-0.35776849861724713],[109.08971142813994,-0.273541266616121],[109.19847101082854,-0.22064116625676888],[109.1704410123429,0.033679019870930915],[109.22178760671272,0.01726416311066714],[109.2409288041211,0.01626418354527459],[109.24760947279901,0.02664251643903981],[109.08659768203745,0.25095438443736384],[108.91335353403844,0.33959835517998727],[108.92859657507194,0.6238890843138165],[108.84063381829611,0.8146871559874853],[108.97851521420586,0.9809411830891577],[108.90303581275259,1.1627692314149272],[108.97110731954723,1.1766850520735375],[109.06029112993178,1.5260460767650557],[109.25160613731344,1.6596945283798163],[109.33757075698492,1.943304569650195],[109.59265999836032,1.9964535016278546],[109.62547393957072,2.0649757630210956],[109.62042034412366,1.9831146338333383],[109.53883087404569,1.9118291272125134],[109.58632842311829,1.7918995537214641],[109.6854850575894,1.7821385037889854],[109.66199466502184,1.6174194836223137],[109.83823743960619,1.475719648143297],[109.83761208073298,1.421791304325268],[109.96348818113472,1.4028260763623734],[110.06509582611153,1.2089842537203594],[110.19302384667327,1.182875383392286],[110.27630537499311,0.9966582612697721],[110.39644546358733,0.9976922747787285],[110.55348525733882,0.8595139110382206],[110.6902960688086,0.8634477794914801],[110.77148248702724,0.9322225228511911],[110.8100206202555,0.8999292792129268],[110.90689394709801,1.029224615523617],[111.23154362184073,1.0861536894412893],[111.41343293198429,1.007577263879682],[111.48866389931953,1.0352760132774392],[111.5307504632633,0.9536841977675863],[111.6675769436211,1.0431767553030795],[111.81802296928464,0.9863245896081594],[111.93533814523926,1.1221497333235675],[112.14295094193244,1.1350264413172795],[112.21223019956415,1.44950618845985],[112.50102712929868,1.583720282165359],[113.03427104167531,1.5664317646143218],[113.06823790655426,1.5405038333852303],[112.9810907053718,1.4081015831216064],[113.09707364183521,1.4432343165105408],[113.18308682489715,1.377035821446043],[113.32799190889955,1.3753274620927414],[113.4275815318623,1.2861182458603935],[113.53766127434835,1.3226385648179644],[113.63255931855781,1.2192509690570432],[113.97469429510568,1.4497532565076199],[114.14253920851775,1.4661263064838863],[114.20538782878532,1.4103666938678998]]],[[[109.49809184616186,-0.9790335733407005],[109.67543591613469,-1.0207979956309714],[109.76029311153792,-1.004532350787315],[109.77999977297122,-1.1447058568897432],[109.47175799963202,-1.3071947589309048],[109.37958957769689,-1.2553938927139257],[109.49809184616186,-0.9790335733407005]]],[[[109.25225834094971,-0.6617833989846531],[109.71247556839285,-0.8339453891683206],[109.72147274407195,-0.9735657366693431],[109.68338367291824,-1.0139399554645365],[109.58304300273244,-0.8979970298390185],[109.43956932826194,-0.8581599886924778],[109.40599808864096,-0.9325733778590575],[109.30733287970867,-0.9064631477560283],[109.24440706793189,-0.8304079139940086],[109.25225834094971,-0.6617833989846531]]],[[[109.48295633886403,-0.6284685398911734],[109.58374948225287,-0.6532046859474576],[109.58093535068593,-0.679439478449126],[109.50344219540108,-0.6948795213727408],[109.48295633886403,-0.6284685398911734]]],[[[109.16426640207288,-0.0614082767705213],[109.18653913057648,-0.13777174417060678],[109.17627888855992,-0.19448412374327972],[109.12397387679306,-0.1159154062709149],[109.16426640207288,-0.0614082767705213]]],[[[108.89750667559264,-1.5347558307169606],[108.98264949567772,-1.6008401694382428],[108.85768795273691,-1.6770540714881577],[108.79931447318444,-1.5718543418043964],[108.89750667559264,-1.5347558307169606]]]]}},{"type":"Feature","properties":{"kode":"62"},"geometry":{"type":"Polygon","coordinates":[[[115.75398994737827,-1.3150423402317415],[115.57724158832866,-1.3805388164132069],[115.45054883426133,-1.5594019627303624],[115.35568662263961,-1.8503283063062668],[115.43151229275816,-1.9256539722529737],[115.40846593775291,-2.0580233819734417],[115.32289414914578,-2.072138089501209],[115.29072897436276,-2.225570455212278],[114.91457911273596,-2.459341385296625],[114.7626184021176,-2.7198655616463157],[114.59691411529423,-2.8157670316231815],[114.61545093411337,-2.884553995870192],[114.56727600488375,-2.864029777851897],[114.50671369418171,-2.999378926596137],[114.54594877411671,-3.0677356956458084],[114.42345527304246,-3.1798829876097443],[114.3471385398118,-3.4608900302506527],[114.25321857667609,-3.3681524049094946],[114.13482314677083,-3.382541983925364],[114.05287617639453,-3.3108106096219103],[113.79737008396228,-3.457684252925901],[113.62690177259879,-3.464776531411758],[113.58195872531496,-3.444503694589798],[113.63331467892931,-3.297551291358957],[113.59557142318272,-3.166918728816256],[113.45041435723681,-3.1904394636102893],[113.4276201478516,-3.236502091298405],[113.39166626238818,-3.247751986864671],[113.37247617963203,-3.260474221008451],[113.36383925617679,-3.2716031712492963],[113.32742459676774,-3.2128123648986957],[113.33664350929064,-3.2747581449723384],[113.03249378885732,-2.976400215897172],[112.94215815377584,-3.117680041900371],[113.00936342997841,-3.160173449245235],[112.56323157687586,-3.446816290439415],[112.25642831681341,-3.3135943683853384],[111.84083680187695,-3.53900539678159],[111.77186444059151,-3.5093597005896413],[111.82497672879305,-3.0506177075411074],[111.71792006815667,-2.84707178543448],[111.69044709265927,-2.94180993827797],[111.55471880772683,-3.010966642596429],[111.41181575669185,-2.9037981899344913],[110.9827150882308,-3.0655156921953903],[110.73447882204005,-2.9882708352308214],[111.1716308293993,-2.6859221259053356],[111.11857604384943,-2.6526453297181547],[111.03189085767701,-2.2410564202175465],[111.09001131027384,-2.0162046730072234],[110.9795796477826,-1.9457392293818998],[111.00327986567333,-1.6967814137312303],[110.90060424788777,-1.7130919689191728],[110.85889900008885,-1.6304969992370957],[110.97866512809327,-1.5395948551184233],[111.11867348269516,-1.5527542191318844],[111.15726538099261,-1.4342910145186352],[111.3931387506529,-1.3277580812703604],[111.44630972411454,-1.2240332784130032],[111.55033359561901,-1.2086413968829106],[111.64343677019087,-0.9699437584976067],[111.82530894375282,-0.9114859054501494],[112.08504891217763,-0.7019871926547694],[112.17514214129687,-0.7257830975119077],[112.2104093431168,-0.615172810776528],[112.3101588799284,-0.7204847749523537],[112.43143639507366,-0.6713648668950327],[112.56797803585778,-0.6961957592268391],[113.02663773014717,-0.47562395218358233],[113.06255503298848,-0.5094070001329101],[113.15182240837748,-0.4490945453769086],[113.22614922340802,-0.4984187479268485],[113.26231431465396,-0.3916585326151676],[113.20861038316275,-0.3449153555591806],[113.43997952083828,-0.07586187942217748],[113.41800673782075,0.12635147314199457],[113.27314743110912,0.2427239527482925],[113.46134168577021,0.2783214656631685],[113.84323861097323,0.6656452661162007],[114.12294780599655,0.6948502324523247],[114.2029683179336,0.5395783574552979],[114.41005289062844,0.49542720100458837],[114.66808325953491,0.7038549255644284],[114.95812155316719,0.7624179768082513],[115.1286699986216,0.37463400135811753],[115.04890853010465,0.2995491810499402],[114.89719808822122,0.3119646132763023],[114.79467950015885,0.08393383907548468],[114.89469522100774,0.04036379755126518],[114.92876529927923,-0.19087085370688328],[115.0447915902597,-0.18981582394104635],[115.18251707070635,-0.08256981374586303],[115.30978730733841,-0.05993801472754967],[115.22189161300764,-0.30683876159952206],[115.25309754211798,-0.45188281154247534],[115.35156941929336,-0.5798368216119911],[115.39253159595648,-0.8222751486791253],[115.49765697239138,-0.8499946724161305],[115.65524246666655,-1.0520492622636084],[115.84696093779712,-1.1572596597054599],[115.75398994737827,-1.3150423402317415]]]}},{"type":"Feature","properties":{"kode":"63"},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.55893137508292,-2.4051927633353216],[116.5094582960636,-2.5624220676242544],[116.45548347078557,-2.5035382974544405],[116.35251974259211,-2.5183982102091704],[116.30252846431722,-2.5329430454851263],[116.246055129041,-2.636410467768826],[116.26262639409288,-2.6559606013006487],[116.35323804280154,-2.5539143749484197],[116.41076560295028,-2.5879138771236967],[116.36391593896951,-2.8778650345436745],[116.26393635018246,-3.0048824537622068],[116.11912342240805,-2.8259496981200414],[116.08467771440507,-2.9899255257423647],[116.10183508562079,-3.0088819889126057],[116.12032898789255,-3.013854336908082],[116.15629436039649,-3.0145885236414074],[116.15388335083605,-3.033909056657592],[116.17257566603428,-3.061885116504868],[116.27459773839496,-3.1250123890105215],[116.18127217497101,-3.160693721438065],[116.13161296776434,-3.1374410061974345],[116.06818895765434,-3.1547813417854513],[116.16798260171572,-3.165631162248303],[116.18394189520234,-3.229057392784398],[116.031335974076,-3.364342329934516],[115.96977191124472,-3.6074743706456616],[114.7030143847062,-4.171919129164451],[114.61969648690342,-4.161193247870074],[114.61552742055403,-3.6494697343406983],[114.50285735268471,-3.515209107913961],[114.3471385398118,-3.4608900302506527],[114.3577614316448,-3.3216436703190766],[114.54594877411671,-3.0677356956458084],[114.50671369418171,-2.999378926596137],[114.56727600488375,-2.864029777851897],[114.61545093411337,-2.884553995870192],[114.59691411529423,-2.8157670316231815],[114.7626184021176,-2.7198655616463157],[114.91457911273596,-2.459341385296625],[115.29072897436276,-2.225570455212278],[115.32289414914578,-2.072138089501209],[115.40846593775291,-2.0580233819734417],[115.43151229275816,-1.9256539722529737],[115.35568662263961,-1.8503283063062668],[115.38168032308852,-1.7191038594555152],[115.57724158832866,-1.3805388164132069],[115.75398994737827,-1.3150423402317415],[115.61889672230598,-1.4878552102497338],[115.70774264570662,-1.7275772555858566],[115.68083629166165,-1.7891570493582662],[115.72672172682633,-1.8036336431780455],[115.6961962139842,-1.9744231932756975],[115.75367176184238,-2.0504681019212967],[115.8365955938117,-2.0591879851373847],[115.79960068462401,-2.184475020605646],[115.85808061063176,-2.386906717770785],[115.8903077118315,-2.3356261444309894],[116.16113900016478,-2.3065289996135903],[116.55893137508292,-2.4051927633353216]]],[[[116.41050744806034,-3.361709571839242],[116.43475387279307,-3.4216783129037935],[116.3623216945906,-3.6523041582103133],[116.31338357459231,-3.551338434920808],[116.41050744806034,-3.361709571839242]]],[[[116.25975486689367,-3.2120414291685506],[116.25311504452372,-3.3886253237996016],[116.31416885540841,-3.4794924896866064],[116.27292248668346,-3.553047902238859],[116.33673014667897,-3.7258363691530576],[116.27191444829316,-3.820934609644496],[116.3099717410031,-3.9152277689463517],[116.09084106696173,-4.060652087323945],[116.03893061025951,-4.022375226935139],[116.0816578242493,-3.833398344457976],[116.00238198963723,-3.63791014733539],[116.1139383829501,-3.3081104896073725],[116.25975486689367,-3.2120414291685506]]]]}},{"type":"Feature","properties":{"kode":"64"},"geometry":{"type":"MultiPolygon","coordinates":[[[[117.98593392680937,2.435721765746962],[118.09449360999213,2.2755681314641265],[118.02068208940693,2.1980055017525615],[117.90831000560229,2.20883765413447],[117.68293367394995,2.1781067855997094],[117.7012941447091,2.0360173476225327],[117.7213895587812,2.0273961820881823],[117.73686245393912,2.043546127351931],[117.76694481774916,2.0130094584198446],[117.82415769522152,2.0098694656034013],[117.8064191794017,1.98618610550443],[117.83314008784487,1.9100033667619982],[117.91096642306206,1.8211724107781606],[118.04814926157917,1.7832008693247303],[118.13462905518679,1.6338887376751359],[118.40717795329999,1.4865899443705075],[118.38518954186395,1.4344030846347096],[118.44199191119776,1.3756371454379632],[118.5803277246448,1.354317035502845],[118.75142668919045,1.2147188652834302],[118.83641126996417,1.0514499335676533],[118.945911635014,1.058044889659982],[118.9875522287524,0.9884438788819807],[118.79511138618159,0.8016983645878781],[118.67749186975402,0.8570510546624632],[118.36102768128251,0.8044603660530925],[118.06490118334295,0.90344801161649],[117.98433726685141,1.0592008620301954],[117.89142397783439,1.1059954137573982],[118.02946113902044,0.7804561260494438],[117.91439936553832,0.8372286477838884],[117.75142167027388,0.7558392022174303],[117.61213517270016,0.43243523329942946],[117.55907319167454,0.4176349860658206],[117.47239263880931,0.06558693998533727],[117.51772447380552,-0.03150952844191579],[117.41974576865232,-0.21298060167339372],[117.46403753590357,-0.3759323101279506],[117.43666293904346,-0.3796568325967087],[117.42842534155636,-0.3985616737821829],[117.43804303865534,-0.4209794197643646],[117.42482325908622,-0.4286369311494127],[117.45270643695255,-0.46341281265114276],[117.3677525356511,-0.5692860311253867],[117.27710322423445,-0.5814296045925289],[117.30385677536992,-0.683061509680897],[117.25749541268317,-0.804246678841082],[117.24878006205029,-0.9071503557042888],[116.9327605748407,-1.2534053639663512],[116.81081164384238,-1.2812338414685769],[116.76687612323451,-1.2363824755707356],[116.76200465399165,-1.3622081941527995],[116.53991026684537,-1.4646561251799994],[116.55899381501263,-1.6002855827134113],[116.31292040485289,-1.704235220578937],[116.24999999980025,-1.7897317044545389],[116.45068450398674,-1.7732516144703823],[116.45770763270116,-2.0625581396463986],[116.36450557497233,-2.108387675650647],[116.51481013278146,-2.126735837388935],[116.41102719504909,-2.210523842301427],[116.55237516718023,-2.173778370875084],[116.50454468189162,-2.2324358896045737],[116.5863767072193,-2.170044513443486],[116.55893137508292,-2.4051927633353216],[116.16113900016478,-2.3065289996135903],[115.8903077118315,-2.3356261444309894],[115.85808061063176,-2.386906717770785],[115.79960068462401,-2.184475020605646],[115.8365955938117,-2.0591879851373847],[115.75367176184238,-2.0504681019212967],[115.6961962139842,-1.9744231932756975],[115.72672172682633,-1.8036336431780455],[115.68083629166165,-1.7891570493582662],[115.70774264570662,-1.7275772555858566],[115.61889672230598,-1.4878552102497338],[115.84696093779712,-1.1572596597054599],[115.758697561943,-1.1360727078891273],[115.49765697239138,-0.8499946724161305],[115.37969897003154,-0.8016109071176061],[115.35156941929336,-0.5798368216119911],[115.22189161300764,-0.30683876159952206],[115.30978730733841,-0.05993801472754967],[115.18251707070635,-0.08256981374586303],[115.0447915902597,-0.18981582394104635],[114.92876529927923,-0.19087085370688328],[114.89469522100774,0.04036379755126518],[114.79467950015885,0.08393383907548468],[114.89719808822122,0.3119646132763023],[115.04890853010465,0.2995491810499402],[115.1286699986216,0.37463400135811753],[114.97913733252199,0.7389088945299136],[114.91735663470104,0.7774846895667906],[114.66808325953491,0.7038549255644284],[114.41005289062844,0.49542720100458837],[114.21941258252468,0.5294829296934722],[114.12294780599655,0.6948502324523247],[113.84323861097323,0.6656452661162007],[113.9263923321405,0.8403579980232507],[113.87119985988568,0.8886867041281334],[113.88969530629345,1.0473933796008623],[113.9887679755617,1.1265689514959831],[114.09370742975409,1.106362194159999],[114.22046554025258,1.160452624589027],[114.16565441921614,1.3815464152349364],[114.40540746598185,1.5229135726033292],[114.6337998485842,1.4323276094316952],[114.84826798837707,1.1680904408212314],[114.88042781938839,1.2107804813342113],[114.97432216353707,1.1932353206535709],[115.01564552951766,1.12078534666648],[115.17354149494406,1.1160348596210952],[115.25240368638106,1.046624899019946],[115.36452103811553,1.065893949446263],[115.42632603112145,1.2185179847172662],[115.4951683513384,1.255495005490161],[115.76050752400306,1.2599315320146616],[115.7690106499216,1.355388642471894],[116.12935223132047,1.6626557953287602],[116.22083725933214,2.091965842149932],[116.31601225336283,2.1167748647682174],[116.31008545308123,2.263509384750364],[116.43710399735164,2.510082318844013],[116.58116315385655,2.4280521539837423],[116.70797890820006,2.4377413193064967],[117.07413251660239,2.6080991120844033],[117.31459780664352,2.626341573804609],[117.49855600895273,2.52293414979124],[117.61178313308517,2.521811781488566],[117.74173198514302,2.336141771825339],[117.98593392680937,2.435721765746962]]],[[[117.87445819459003,2.152790195511159],[117.89027422787342,2.1542102690887077],[117.95677425033148,2.129502409408701],[117.91281779800306,2.0985121763959],[117.9004898770063,2.127635939347158],[117.8666002755823,2.147765047419057],[117.81056224455199,2.122900617569485],[117.80166627407937,2.1819052260453873],[117.87445819459003,2.152790195511159]]],[[[117.80384082489422,2.1650779608792163],[117.80236829566036,2.1207157092626403],[117.78792558919463,2.1131694862828],[117.77960178179683,2.1209535691519363],[117.7661593408809,2.1177307640635377],[117.7339096352215,2.0860296178726117],[117.71354676816884,2.161893811350353],[117.80384082489422,2.1650779608792163]]],[[[117.46009969424551,-0.7026600312353821],[117.6091108291015,-0.7307825375839911],[117.611492279745,-0.774049681147801],[117.55372727519364,-0.784963666440035],[117.49824683732174,-0.7486902977190084],[117.44605935615448,-0.7410420817266186],[117.46009969424551,-0.7026600312353821]]],[[[117.55598244213604,-0.5080365628370487],[117.57807884686133,-0.5775543026888954],[117.51956899681181,-0.6025790888538154],[117.49871129938697,-0.5564932379725178],[117.51378839212066,-0.5403064339946582],[117.50503316464892,-0.5264929094201989],[117.52763651181567,-0.5320721226303249],[117.55598244213604,-0.5080365628370487]]],[[[117.5240086421851,-0.3505724464611717],[117.5374969413308,-0.39409697959189316],[117.44262639659098,-0.5003870293379009],[117.4693633282551,-0.41839947795347143],[117.5240086421851,-0.3505724464611717]]],[[[117.30044300014436,-0.6326759488359244],[117.32001872298576,-0.6400615798779654],[117.32340513633801,-0.6455142863551941],[117.32018093190459,-0.6483103712266143],[117.36349862995792,-0.7198897726947848],[117.3870199807875,-0.7310498376797909],[117.37322691758823,-0.7804720213666201],[117.38946799834946,-0.7768419286120434],[117.41123638255306,-0.8383775279005476],[117.43416527800525,-0.8441427739697929],[117.40998048021504,-0.8844199981843417],[117.33201800023062,-0.7500089997155328],[117.33884000006606,-0.7377679999931388],[117.30044300014436,-0.6326759488359244]]],[[[117.30676400025845,-0.6773979994180763],[117.32893099996579,-0.7665479997903049],[117.39170699997817,-0.8793869999100821],[117.343904999816,-0.9137789995011758],[117.30676400025845,-0.6773979994180763]]]]}},{"type":"Feature","properties":{"kode":"65"},"geometry":{"type":"MultiPolygon","coordinates":[[[[117.98593392680937,2.435721765746962],[117.74173198514302,2.336141771825339],[117.61178313308517,2.521811781488566],[117.49855600895273,2.52293414979124],[117.31459780664352,2.626341573804609],[117.07413251660239,2.6080991120844033],[116.70797890820006,2.4377413193064967],[116.58116315385655,2.4280521539837423],[116.43710399735164,2.510082318844013],[116.31008545308123,2.263509384750364],[116.31601225336283,2.1167748647682174],[116.22083725933214,2.091965842149932],[116.12935223132047,1.6626557953287602],[115.7690106499216,1.355388642471894],[115.76050752400306,1.2599315320146616],[115.59377598927051,1.2832141820888978],[115.4363746437748,1.2285489625646164],[115.36452103811553,1.065893949446263],[115.20031823779652,1.061927278221333],[115.17354149494406,1.1160348596210952],[115.01564552951766,1.12078534666648],[114.89608083436303,1.2093574804633818],[114.84826798837707,1.1680904408212314],[114.58958656426864,1.463283702381034],[114.6104767479037,1.5752155725406851],[114.70507691596697,1.6373121662235235],[114.70619420040214,1.8206806506915427],[114.881289231413,1.9204002068041746],[114.88228603906953,2.03059725326068],[114.80991747171402,2.025700789160112],[114.82358215309398,2.118225197834647],[114.74166835331187,2.132228658325971],[114.74239445334138,2.1910987830823956],[114.81388720782843,2.2620263082675365],[114.91838325578271,2.254812456729553],[114.97027015564322,2.367794103714971],[115.25056591098803,2.509306200320964],[115.17103997491495,2.6134110287960084],[115.09371319420859,2.605244350046746],[115.15526305584547,2.792696056078171],[115.10419881082657,2.8315706032008165],[115.28582957757305,3.04734976747784],[115.33184404206895,2.97589048935464],[115.4041163891601,2.9841710177782943],[115.49916516873759,3.0304004391289823],[115.5630309267359,3.151700622585736],[115.51681001297175,3.2217239316141786],[115.54436934586863,3.357704839706628],[115.58787340053709,3.449885986149411],[115.62528602682869,3.4079978522191254],[115.65833853479558,3.43884030683472],[115.58071593469265,3.596088642576831],[115.61748613657596,3.8752571175219828],[115.56774449571196,3.920089267605647],[115.64088941451496,3.9615351931946634],[115.70368138738615,4.192086667265926],[115.87127166495543,4.285576388439608],[115.87852638708318,4.391395000079228],[116.0757249994092,4.276627499159815],[116.16793277567717,4.390766943239896],[116.34922860791403,4.3901499984237375],[116.44160138459631,4.288278054388741],[116.54181305153122,4.3342113874456345],[116.56727166255723,4.408174443795588],[116.64246916252193,4.336342775298874],[116.75241027451466,4.389533053607579],[116.84393916156307,4.3258122195583155],[117.24883721576498,4.373868883442242],[117.46782351983961,4.1735539844289065],[117.58373012184768,4.178782320847461],[117.52396113729674,4.103228856626458],[117.39120974683237,4.13568032698555],[117.47382426058118,4.070673117070726],[117.41266121534284,4.018774214858183],[117.45756846691131,3.929949820327977],[117.73150932759347,3.816288726543519],[117.70871707873027,3.8198871235919114],[117.69710545155544,3.814821716449103],[117.6489409553609,3.771654219566642],[117.59119430597252,3.795813320128673],[117.49313374182873,3.774579371540824],[117.48083473133784,3.7645807414081105],[117.47611227616073,3.755111538566723],[117.47309371430356,3.712591573342479],[117.42344342027764,3.691626183001972],[117.42872284898033,3.671145711605334],[117.46873423989337,3.667512205024309],[117.48542709418507,3.673463969586578],[117.48883859502519,3.6525066578560086],[117.4371970374134,3.6417424456573713],[117.43240910259806,3.6384834113803777],[117.42841260805551,3.6247408963753287],[117.15005158761073,3.6432363994403545],[117.01643494321809,3.5956352943334196],[117.22609190611661,3.603621242626275],[117.19436796301113,3.541776245077699],[117.22114571939949,3.4860688138247724],[117.41234883762877,3.3913389455359493],[117.35266117966978,3.267176780284217],[117.379139655171,3.229498471777106],[117.22425062876357,3.249644632793604],[117.27759570108083,3.1951507691927077],[117.26792907456718,3.1862873541780914],[117.23796091296583,3.193903231449042],[117.21527855226338,3.1839837326631937],[117.4442725102682,3.1616515140062234],[117.46220421934936,3.1269620222795425],[117.36711862512448,3.1165687273649496],[117.35951227796932,3.1054256253923427],[117.36612718731988,3.0795764540901587],[117.34501653038865,3.073956362196384],[117.35376744201392,3.0467585585606685],[117.38649012182168,3.0370490397814365],[117.35431648621693,2.9562351837068377],[117.38655828323829,2.953962657150953],[117.40665445903608,2.9568232962581646],[117.4090345355155,2.962947130805503],[117.43084721132982,2.9654809787642193],[117.44921860435522,2.9597289257493458],[117.45535265340231,2.9499649314365115],[117.44741828392671,2.9468832092927073],[117.44841785609924,2.940351015986664],[117.45959632660924,2.931599300367452],[117.54555537677925,2.8900804595456293],[117.56864156455663,2.882895098530014],[117.5858536586195,2.8866768592496896],[117.5918580119378,2.86183176482416],[117.59508529205266,2.857505809045904],[117.6320061699488,2.847471100810708],[117.64985212777356,2.8560966478420937],[117.66469384184734,2.845320448579912],[117.61522680177552,2.7951914184492352],[117.78520058224115,2.748287808635496],[117.79857597779915,2.6289659250374484],[117.98593392680937,2.435721765746962]]],[[[117.90110403482345,4.166424557647247],[117.92627782426223,4.063103457758416],[117.86121902563764,4.028976658346153],[117.68345039651865,4.166558506270121],[117.90110403482345,4.166424557647247]]],[[[117.81739809124895,3.576855824037125],[117.85010440339556,3.5372416447861497],[117.86709082338291,3.450069987440031],[117.75141900288475,3.5353222694072315],[117.81739809124895,3.576855824037125]]],[[[117.66086041237816,4.146907465207391],[117.75350656767398,4.0617375620389],[117.66906204597672,3.966490659116687],[117.58927553763601,4.080048629440739],[117.66086041237816,4.146907465207391]]],[[[117.49728398266973,3.7740251580346467],[117.72931643690413,3.7404081150424986],[117.70805340514062,3.6684989016030727],[117.71754357207828,3.6343690256101127],[117.57660404594003,3.6338957196118145],[117.48606834587747,3.717122159060466],[117.49728398266973,3.7740251580346467]]],[[[117.5228192393165,4.027963962367039],[117.59745398401424,3.933491176076984],[117.6816598139493,3.887949378161295],[117.4616601537931,3.930030074028764],[117.44327887721852,4.005761437640274],[117.5228192393165,4.027963962367039]]],[[[117.54857758089065,3.4422965822215588],[117.66865495166473,3.4036577833800266],[117.64809554587282,3.241068097015102],[117.51495792626736,3.381084482562869],[117.54857758089065,3.4422965822215588]]],[[[117.4448693588339,3.5503453731404875],[117.50817147663236,3.5431954840843787],[117.61509514282659,3.4866187564505253],[117.54718979567258,3.4712424116080456],[117.4448693588339,3.5503453731404875]]],[[[117.53000630454733,3.0679094133887475],[117.55313106874394,3.039925461990549],[117.52513113909083,3.045050881792804],[117.52980810565964,3.056022191670877],[117.52622232789815,3.0602125746506204],[117.51280977774911,3.0603819421729668],[117.50897956425558,3.0652418515302884],[117.50264004170458,3.0649101302983013],[117.451042212728,2.989555445027804],[117.45103474565701,2.96566288013787],[117.42037182360082,2.9683528674908644],[117.38188949960079,2.9563978872527628],[117.36036673553645,2.9629188795027517],[117.44619272831187,3.053827917824208],[117.48875516401972,3.064047806361202],[117.53000630454733,3.0679094133887475]]],[[[117.2480673322417,3.5881477377279793],[117.37109588226917,3.562561659493042],[117.51790566111742,3.481845526449945],[117.47668329439853,3.4350775766689026],[117.23076864155962,3.4967593733464355],[117.20141585186013,3.539053423476787],[117.2480673322417,3.5881477377279793]]]]}}]}
};
