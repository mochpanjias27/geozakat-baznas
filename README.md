# GeoZakat-Climate

**Integrasi Big Data Spasial dan Peta Digital Kerentanan Iklim untuk Akurasi Distribusi Zakat Nasional**

Prototipe platform web publik untuk memetakan kerentanan iklim dan risiko kemiskinan ekstrem baru di Indonesia, agar muzaki dan lembaga amil (BAZNAS/LAZ) dapat memprioritaskan penyaluran zakat secara presisi dan transparan. Proyek ini dikembangkan dalam rangka Beasiswa Riset BAZNAS 2026.

> ⚠️ **Seluruh angka pada prototipe ini adalah data contoh.** Skor merupakan estimasi berbasis model yang memerlukan verifikasi lapangan.

## Fitur

| Halaman | Isi |
|---|---|
| **Beranda** | Hero dengan peta mini dan kartu pencarian, 3 statistik kunci, kartu wilayah prioritas, tile per kepulauan, cara kerja, dan cerita dampak |
| **Peta Interaktif** | Choropleth 34 provinsi dan 30 kabupaten/kota contoh, 5 lapisan (skor gabungan, bahaya, kemiskinan, kapasitas adaptasi, penyaluran zakat), filter wilayah/bahaya/asnaf/skenario 2030–2045, pencarian, panel detail, bandingkan 2–3 wilayah |
| **Peringkat Prioritas** | Tabel yang bisa diurutkan, grafik kontribusi komponen, ekspor CSV |
| **Dasbor Lembaga Amil** | Login demo, alokasi vs kebutuhan, analisis kesenjangan, simulasi realokasi dana |
| **Metodologi** | Rumus indeks, kelas skor, sumber data dan tanggal pembaruan, integrasi asnaf, keterbatasan data, etika |
| **Tunaikan Zakat** | Kalkulator zakat penghasilan dan maal, form penyaluran (prioritas otomatis atau pilih wilayah) |
| **Tentang** | Cerita dampak, berita/riset, FAQ, kontak |

Fitur lain: mode gelap, toggle ID/EN (navigasi dan teks utama), responsif mobile-first, skala warna ramah buta warna, dan hanya menampilkan data agregat (tanpa data pribadi mustahik).

## Struktur proyek

```
geozakat-baznas/
├── index.html              # halaman utama (SPA dengan routing hash: #peta, #peringkat, …)
├── assets/
│   ├── css/style.css       # tema (warna, tipografi, komponen)
│   ├── js/app.js           # logika aplikasi (vanilla JS + Leaflet)
│   └── favicon.svg
├── data/wilayah.js         # DATA CONTOH: provinsi, kabupaten, batas GeoJSON
├── vendor/leaflet/         # Leaflet 1.9.4 (BSD-2-Clause)
├── scripts/build_data.py   # pembangkit data contoh dan penyederhana GeoJSON
└── vercel.json
```

Situs ini statis: tanpa build step dan tanpa dependensi npm.

## Menjalankan secara lokal

```bash
# opsi 1: buka index.html langsung di peramban
# opsi 2: server lokal
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Deploy ke Vercel

1. Push repo ini ke GitHub (`mochpanjias27/geozakat-baznas`).
2. Di [vercel.com/new](https://vercel.com/new), pilih **Import Git Repository**, lalu pilih repo tersebut.
3. Pengaturan proyek:
   - **Framework Preset:** `Other`
   - **Build Command:** kosongkan
   - **Output Directory:** kosongkan (root `./`)
4. Klik **Deploy**. Situs akan tersedia di `https://<nama-proyek>.vercel.app`.

Setiap push ke branch `main` akan otomatis memicu deploy ulang.

## Mengganti data contoh dengan data asli

Semua data dibaca dari `window.DATA` di `data/wilayah.js`. Setiap wilayah mengikuti skema berikut:

```js
{
  kode_wilayah: "5302",          // kode BPS
  nama: "Kab. Sumba Timur",
  tingkat: "kabupaten",          // "provinsi" | "kabupaten"
  kode_provinsi: "53",           // khusus kabupaten
  provinsi: "Nusa Tenggara Timur",
  skor_bahaya: 86,               // paparan (0–100)
  skor_kemiskinan: 88,           // sensitivitas (0–100)
  skor_adaptasi: 26,             // kapasitas adaptasi (0–100, tinggi = tangguh)
  skor_kerentanan: 83.7,         // indeks gabungan (0–100)
  bahaya_utama: "kekeringan",    // "banjir" | "kekeringan" | "rob"
  populasi_terdampak: 98400,
  zakat_tersalurkan: 600000000,  // rupiah
  asnaf_dominan: "fakir",
  komposisi_asnaf: { fakir: .52, miskin: .36, gharimin: .08, "ibnu sabil": .04 },
  lat: -9.9, lng: 120.2,         // titik pusat (untuk marker)
  tren: [74.1, …, 83.7],         // skor 2019–2025
  proyeksi: { "2030-ssp245": 90.2, "2030-ssp585": 93.7, "2045-ssp245": 94.5, "2045-ssp585": 100 } // skor bahaya per skenario
}
```

Ada dua cara mengganti data:

1. **Langsung:** ganti isi `data/wilayah.js` dengan data hasil olahan riset (format sama).
2. **Lewat API:** ganti baris `<script src="data/wilayah.js">` di `index.html` dengan pemanggilan API yang mengisi `window.DATA` sebelum `assets/js/app.js` dijalankan.

Batas wilayah (`DATA.geo`) adalah GeoJSON FeatureCollection dengan `properties.kode` = kode BPS provinsi. Untuk tingkat kabupaten, kecamatan, atau desa, tambahkan GeoJSON per tingkat lalu sesuaikan fungsi `initMap()` di `app.js`.

### Rumus indeks (bobot awal, akan dikalibrasi)

```
Skor = 0,40 × Paparan + 0,35 × Sensitivitas + 0,25 × (100 − Kapasitas adaptasi)
```

Rumus ini ada di fungsi `calc()` dalam `assets/js/app.js`. Batas kelas skor (`BREAKS = [40, 50, 60, 70]`) dan warna (`SC`) juga diatur di sana.

### Membangkitkan ulang data contoh

```bash
pip install shapely
curl -L -o scripts/indonesia-prov.geojson https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson
python scripts/build_data.py
```

## Keterbatasan prototipe

- Peta baru sampai tingkat provinsi ditambah 30 titik kabupaten/kota contoh. Tingkat kecamatan dan desa menunggu integrasi data.
- Belum ada peta dasar (basemap). Yang ditampilkan hanya batas wilayah.
- Login, pembayaran, dan form kontak masih simulasi (tidak ada data yang dikirim ke server).
- Ekspor dilakukan dengan menyalin CSV. Unduh file CSV/PDF direncanakan untuk versi produksi.
- Batas wilayah masih versi 34 provinsi.

## Sumber dan lisensi

- Batas provinsi: Peta Dasar BAKOSURTANAL & Dukcapil, melalui [ans-4175/peta-indonesia-geojson](https://github.com/ans-4175/peta-indonesia-geojson)
- [Leaflet](https://leafletjs.com) © Volodymyr Agafonkin, BSD-2-Clause (`vendor/leaflet/LICENSE`)
- Rencana sumber data riset: BPS, DTSEN/P3KE, BNPB, BMKG, citra satelit, data penyaluran lembaga amil
