/* =====================================================================
   GeoZakat-Climate · logika aplikasi (vanilla JS + Leaflet)
   Struktur data wilayah (siap diganti API):
   {kode_wilayah, nama, skor_kerentanan, skor_bahaya, skor_kemiskinan,
    skor_adaptasi, bahaya_utama, populasi_terdampak, zakat_tersalurkan, ...}
   ===================================================================== */
(function(){
'use strict';
const DATA = window.DATA;

/* ---------- util ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = (n, d=0) => Number(n).toLocaleString('id-ID', {maximumFractionDigits:d, minimumFractionDigits:d});
const rp = n => 'Rp ' + fmt(Math.round(n));
function rpShort(n){
  if (n >= 1e12) return 'Rp ' + fmt(n/1e12, 2) + ' T';
  if (n >= 1e9)  return 'Rp ' + fmt(n/1e9, 1) + ' M';
  if (n >= 1e6)  return 'Rp ' + fmt(n/1e6, 1) + ' jt';
  return rp(n);
}
const popShort = n => n >= 1e6 ? fmt(n/1e6, 2) + ' jt' : fmt(Math.round(n/1000)) + ' rb';
const fmtDate = s => new Date(s + 'T00:00:00').toLocaleDateString('id-ID', {day:'numeric', month:'long', year:'numeric'});
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'), 2600); }
function openModal(title, html){ $('#modalTitle').textContent=title; $('#modalBody').innerHTML=html; $('#modal').classList.add('open'); $('#modalX').focus(); }
function closeModal(){ $('#modal').classList.remove('open'); }
$('#modalX').onclick = closeModal;
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closePanel(); } });
async function copyText(txt){
  try { await navigator.clipboard.writeText(txt); toast('Tersalin ke papan klip'); }
  catch(e){ toast('Penyalinan diblokir peramban — salin manual dari kotak teks'); }
}

/* ---------- skala warna ---------- */
const BREAKS = [40, 50, 60, 70];                       // 5 kelas skor 0–100
const SC = ['#2A9D8F','#A9D6A0','#F5D466','#EE8445','#9B1D30'];
const SC_LBL = ['Rendah','Sedang-rendah','Sedang','Tinggi','Sangat tinggi'];
const AD = ['#EAF4F1','#B9DED5','#7FC3B5','#3C9C8B','#0E5E54']; // kapasitas adaptasi: terang = rendah
const cls = v => v < BREAKS[0] ? 0 : v < BREAKS[1] ? 1 : v < BREAKS[2] ? 2 : v < BREAKS[3] ? 3 : 4;
const colorScore = v => SC[cls(v)];
const textOn = v => cls(v) >= 3 || cls(v) === 0 ? '#fff' : '#1E1606';
const HZ = {banjir:{lbl:'Banjir', ic:'💧'}, kekeringan:{lbl:'Kekeringan', ic:'☀️'}, rob:{lbl:'Banjir rob', ic:'🌊'}};
const ASNAF_C = {'fakir':'#9B1D30','miskin':'#EE8445','gharimin':'#E2A72E','ibnu sabil':'#2A9D8F'};
const COMP_C = {E:'#2F6DB5', S:'#E2A72E', A:'#7A5FB0'};

/* ---------- data ---------- */
const PROV = DATA.provinsi, KAB = DATA.kabupaten, ALL = [...PROV, ...KAB];
const BYK = Object.fromEntries(ALL.map(r => [r.kode_wilayah, r]));
const pulauOf = r => r.tingkat === 'provinsi' ? r.pulau : BYK[r.kode_provinsi].pulau;
const PULAU_LIST = ['Sumatera','Jawa','Bali & Nusa Tenggara','Kalimantan','Sulawesi','Maluku & Papua'];
const SCEN_LBL = {'base':'2025 · kondisi saat ini','2030-ssp245':'2030 · SSP2-4.5','2030-ssp585':'2030 · SSP5-8.5','2045-ssp245':'2045 · SSP2-4.5','2045-ssp585':'2045 · SSP5-8.5'};

/** Hitung skor sesuai skenario: Skor = 0.40·Bahaya + 0.35·Kemiskinan + 0.25·(100 − Adaptasi) */
function calc(r, scen='base'){
  const b = scen === 'base' ? r.skor_bahaya : r.proyeksi[scen];
  const k = r.skor_kemiskinan, a = r.skor_adaptasi;
  const E = 0.40*b, S = 0.35*k, A = 0.25*(100-a);
  return {b, k, a, E, S, A, s: Math.round((E+S+A)*10)/10};
}

const state = {layer:'gabungan', level:'provinsi', hazard:'', asnaf:'', scen:'base', pulau:'', compare:[], selected:null, zakatRegion:'', loggedIn:false, sortKey:'s', sortDir:-1};

/* ---------- proyeksi peta SVG (mini map & tile) ---------- */
function geoPath(geom, proj){
  const ring = r => 'M' + r.map(p => proj(p).map(v => v.toFixed(1)).join(',')).join('L') + 'Z';
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  return polys.map(poly => poly.map(ring).join('')).join('');
}
function bboxOf(feats){
  let x0=180,y0=90,x1=-180,y1=-90;
  feats.forEach(f => { const polys = f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;
    polys.forEach(p => p[0].forEach(([x,y]) => { x0=Math.min(x0,x); x1=Math.max(x1,x); y0=Math.min(y0,y); y1=Math.max(y1,y); })); });
  return [x0,y0,x1,y1];
}
function makeProj(bb, W, H, pad=6){
  const k = Math.min((W-2*pad)/(bb[2]-bb[0]), (H-2*pad)/(bb[3]-bb[1]));
  const ox = (W - k*(bb[2]-bb[0]))/2, oy = (H - k*(bb[3]-bb[1]))/2;
  return ([x,y]) => [ox + (x-bb[0])*k, oy + (bb[3]-y)*k];
}

/* ---------- ilustrasi kartu (SVG generatif, tanpa foto) ---------- */
function mediaSVG(hz, seed=1, h=150){
  const g = {banjir:['#155E75','#2A9D8F'], kekeringan:['#9A5B13','#E2A72E'], rob:['#0B3C5D','#1F7A8C']}[hz];
  const id = 'g' + hz + seed + Math.round(Math.random()*1e6);
  let art = '';
  if (hz === 'banjir'){
    art = `<g fill="rgba(255,255,255,.18)">${[0,1,2,3,4].map(i=>`<path d="M${40+i*70+seed*7} ${30+(i%2)*18} q8 14 0 22 q-8-8 0-22z"/>`).join('')}</g>
      <path d="M0 ${h-40} C 60 ${h-55}, 120 ${h-25}, 180 ${h-40} S 300 ${h-55}, 400 ${h-38} V ${h} H0Z" fill="rgba(255,255,255,.22)"/>
      <path d="M0 ${h-24} C 70 ${h-36}, 140 ${h-12}, 210 ${h-24} S 330 ${h-36}, 400 ${h-22} V ${h} H0Z" fill="rgba(255,255,255,.3)"/>
      <g fill="rgba(255,255,255,.55)"><rect x="${250+seed*4}" y="${h-70}" width="34" height="26" rx="2"/><path d="M${246+seed*4} ${h-70} l21-16 21 16z"/></g>`;
  } else if (hz === 'kekeringan'){
    art = `<circle cx="${300+seed*6}" cy="44" r="24" fill="rgba(255,240,200,.7)"/>
      <g stroke="rgba(255,240,200,.5)" stroke-width="3" stroke-linecap="round">${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4,cx=300+seed*6;return `<path d="M${cx+Math.cos(a)*32} ${44+Math.sin(a)*32} L${cx+Math.cos(a)*42} ${44+Math.sin(a)*42}"/>`}).join('')}</g>
      <path d="M0 ${h-34} H400 V${h} H0Z" fill="rgba(80,40,5,.35)"/>
      <g stroke="rgba(255,230,180,.45)" stroke-width="2" fill="none"><path d="M40 ${h-30} l20 12 -8 14 M60 ${h-18} l26 -6 M150 ${h-32} l-10 16 18 10 M210 ${h-28} l22 10 M300 ${h-30} l-14 14 20 12"/></g>
      <g fill="rgba(255,255,255,.4)"><path d="M90 ${h-34} v-18 M90 ${h-46} q-8-2-10-10 M90 ${h-44} q8-2 9-9" stroke="rgba(255,255,255,.5)" stroke-width="2" fill="none"/></g>`;
  } else {
    art = `<g fill="rgba(255,255,255,.5)"><rect x="${60+seed*5}" y="${h-78}" width="5" height="40"/><rect x="${100+seed*5}" y="${h-78}" width="5" height="40"/><rect x="${55+seed*5}" y="${h-82}" width="56" height="8" rx="2"/><path d="M${58+seed*5} ${h-82} l25-18 25 18z"/></g>
      <path d="M0 ${h-46} C 50 ${h-58}, 100 ${h-34}, 150 ${h-46} S 250 ${h-58}, 300 ${h-46} S 380 ${h-36}, 400 ${h-44} V${h} H0Z" fill="rgba(255,255,255,.22)"/>
      <path d="M0 ${h-28} C 50 ${h-40}, 100 ${h-16}, 150 ${h-28} S 250 ${h-40}, 300 ${h-28} S 380 ${h-18}, 400 ${h-26} V${h} H0Z" fill="rgba(255,255,255,.32)"/>
      <path d="M${250+seed*3} ${h-60} l40 0 -8 10 -26 0z" fill="rgba(255,255,255,.6)"/><path d="M${270+seed*3} ${h-60} v-22 l14 18z" fill="rgba(255,255,255,.5)"/>`;
  }
  return `<svg viewBox="0 0 400 ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset="1" stop-color="${g[1]}"/></linearGradient></defs><rect width="400" height="${h}" fill="url(#${id})"/>${art}</svg>`;
}

/* ===================================================================
   BERANDA
   =================================================================== */
function renderHome(){
  // datalist untuk pencarian
  $('#dlWilayah').innerHTML = ALL.map(r => `<option value="${esc(r.nama)}">`).join('');

  // peta mini
  const proj = makeProj([94.8,-11.2,141.2,6.2], 600, 260, 4);
  $('#miniMap').innerHTML = DATA.geo.features.map(f => {
    const r = BYK[f.properties.kode];
    return `<path class="mini-path" d="${geoPath(f.geometry, proj)}" fill="${colorScore(r.skor_kerentanan)}" stroke="rgba(255,255,255,.55)" stroke-width=".6" data-k="${r.kode_wilayah}"><title>${esc(r.nama)} — skor ${fmt(r.skor_kerentanan,1)}</title></path>`;
  }).join('');
  $$('#miniMap path').forEach(p => p.addEventListener('click', () => { pendingSelect = p.dataset.k; location.hash = 'peta'; }));
  $('#miniLegend').innerHTML = SC.map((c,i)=>`<span><i style="background:${c}"></i> ${i===0?'&lt;40':i===4?'≥70':BREAKS[i-1]+'–'+BREAKS[i]}</span>`).join('');

  const topP = [...PROV].sort((a,b)=>b.skor_kerentanan-a.skor_kerentanan)[0];
  $('#chipTop').innerHTML = `<span class="badge-score" style="background:${colorScore(topP.skor_kerentanan)}">${Math.round(topP.skor_kerentanan)}</span><span><small style="color:var(--muted)">Prioritas tertinggi</small><b>${esc(topP.nama)}</b></span>`;
  $('#chipUpd').innerHTML = `<span class="badge-score" style="background:var(--brand)">↻</span><span><small style="color:var(--muted)">Data diperbarui</small><b style="font-size:14px">${fmtDate(DATA.pembaruan.gabungan)}</b></span>`;

  // statistik kunci
  const veryHigh = ALL.filter(r => r.skor_kerentanan >= 70).length;
  const popTot = PROV.reduce((s,r)=>s+r.populasi_terdampak,0);
  $('#statsGrid').innerHTML = [
    ['red','<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>', veryHigh, 'wilayah sangat rentan (skor ≥ 70)'],
    ['','<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>', fmt(popTot/1e6,1)+' juta', 'estimasi penduduk terdampak'],
    ['gold','<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>', 24, 'lembaga amil mitra (BAZNAS & LAZ)'],
  ].map(([c,ic,v,l]) => `<div class="stat"><div class="stat-ic ${c}"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${ic}</svg></div><div><b>${v}</b><span>${l}</span></div></div>`).join('');

  // sumber data
  const srcs = [['BPS','<rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/>'],
    ['BNPB','<path d="M12 3 2 20h20L12 3z"/>'],['BMKG','<path d="M17 18a5 5 0 1 0-9.9-1H6a3 3 0 0 0 0 6h11a3 3 0 0 0 0-6z" transform="translate(0,-4)"/>'],
    ['Citra Satelit','<circle cx="12" cy="12" r="3"/><path d="M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>'],['DTSEN / P3KE','<path d="M4 4h16v16H4zM4 9h16M9 9v11"/>'],['Lembaga Amil','<path d="M3 21h18M5 21V10l7-5 7 5v11"/>']];
  $('#sourcesStrip').innerHTML = srcs.map(([n,ic]) => `<span class="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ic}</svg>${n}</span>`).join('');

  // kartu wilayah prioritas
  const top = [...KAB].sort((a,b)=>b.skor_kerentanan-a.skor_kerentanan).slice(0,8);
  $('#topCards').innerHTML = top.map((r,i) => {
    const c = calc(r), f = mainFactor(c, r);
    return `<article class="rcard" tabindex="0" data-k="${r.kode_wilayah}" aria-label="${esc(r.nama)}, skor ${c.s}">
      <div class="rcard-media">${mediaSVG(r.bahaya_utama, i)}<span class="tag ${i>2?'gold':''}">Prioritas #${i+1}</span><span class="media-hz">${HZ[r.bahaya_utama].ic} ${HZ[r.bahaya_utama].lbl}</span></div>
      <div class="rcard-body">
        <h3>${esc(r.nama)}</h3>
        <div class="loc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/></svg>${esc(r.provinsi)} · ${esc(pulauOf(r))}</div>
        <div><span class="pill">Asnaf dominan: ${r.asnaf_dominan}</span></div>
        <ul class="checks"><li>${f.lbl}</li><li>${esc(r.mata_pencaharian)}</li><li>Adaptasi ${c.a<40?'rendah':'terbatas'}</li></ul>
        <div class="rcard-foot">
          <div><small>Penduduk terdampak</small><b>${popShort(r.populasi_terdampak)}</b><small>Zakat tersalurkan ${rpShort(r.zakat_tersalurkan)}</small></div>
          <div class="score-badge"><small>${SC_LBL[cls(c.s)]}<br><span class="muted">skor kerentanan</span></small><span class="sb" style="background:${colorScore(c.s)};color:${textOn(c.s)}">${fmt(c.s,0)}</span></div>
        </div>
      </div></article>`;
  }).join('');
  $$('#topCards .rcard').forEach(el => {
    const go = () => { pendingSelect = el.dataset.k; location.hash = 'peta'; };
    el.addEventListener('click', go); el.addEventListener('keydown', e => { if (e.key==='Enter') go(); });
  });

  // tile kepulauan
  $('#islandTiles').innerHTML = PULAU_LIST.map(p => {
    const feats = DATA.geo.features.filter(f => BYK[f.properties.kode].pulau === p);
    const pr = makeProj(bboxOf(feats), 360, 130, 4);
    const rs = PROV.filter(r => r.pulau === p);
    const avg = rs.reduce((s,r)=>s+r.skor_kerentanan,0)/rs.length;
    const pop = rs.reduce((s,r)=>s+r.populasi_terdampak,0);
    return `<button class="tile" data-p="${esc(p)}"><svg viewBox="0 0 360 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${feats.map(f=>`<path d="${geoPath(f.geometry,pr)}" fill="${colorScore(BYK[f.properties.kode].skor_kerentanan)}" stroke="rgba(255,255,255,.6)" stroke-width=".7"/>`).join('')}</svg>
      <div class="t-info"><b>${esc(p)}</b><span>${rs.length} provinsi · rerata skor ${fmt(avg,1)} · ${popShort(pop)} terdampak</span></div></button>`;
  }).join('');
  $$('#islandTiles .tile').forEach(t => t.addEventListener('click', () => { state.pulau = t.dataset.p; $('#fPulau').value = state.pulau; pendingFit = true; location.hash = 'peta'; }));

  // fitur / cara kerja
  const feats = [
    ['<circle cx="12" cy="12" r="3"/><path d="M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>','Integrasi big data spasial','Citra satelit (curah hujan, suhu, NDVI, tutupan lahan), data bencana BNPB, DTSEN/P3KE, dan data penyaluran zakat.'],
    ['<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>','Indeks kerentanan','Kerangka paparan–sensitivitas–kapasitas adaptasi menghasilkan skor 0–100 per wilayah.'],
    ['<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/>','Pemodelan risiko','Analisis spasial & machine learning mengidentifikasi hotspot kemiskinan ekstrem baru, termasuk skenario iklim.'],
    ['<path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>','Validasi & syariah','Verifikasi lapangan bersama lembaga amil, dan pemetaan asnaf dengan masukan dewan pakar syariah.']];
  $('#featGrid').innerHTML = feats.map(([ic,t,d],i)=>`<div class="feat"><div class="fi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${ic}</svg></div><span class="step">LANGKAH ${i+1}</span><h3>${t}</h3><p>${d}</p></div>`).join('');

  $('#storyGrid').innerHTML = STORIES.map((s,i)=>storyCard(s,i)).join('');
}
const STORIES = [
  {hz:'rob', t:'Pesisir utara Jawa: dari rob ke ketahanan nelayan', p:'Peta menunjukkan desa pesisir dengan paparan rob tertinggi; lembaga amil memprioritaskan modal usaha alternatif bagi keluarga nelayan.', w:'Kab. Demak (ilustrasi)'},
  {hz:'kekeringan', t:'Sumba Timur: air bersih sebelum kemarau panjang', p:'Skor kekeringan yang meningkat pada skenario 2030 mendorong penyaluran zakat produktif untuk penampungan air komunal.', w:'Kab. Sumba Timur (ilustrasi)'},
  {hz:'banjir', t:'Kalimantan Selatan: respons cepat pasca banjir', p:'Lapisan penyaluran zakat memperlihatkan kesenjangan bantuan; realokasi mempercepat pemulihan mata pencaharian petani.', w:'Kab. Banjar (ilustrasi)'}];
function storyCard(s,i){ return `<article class="story"><div class="s-media">${mediaSVG(s.hz, i+3, 120)}</div><div class="s-body"><span class="ill">${esc(s.w)}</span><h3>${esc(s.t)}</h3><p>${esc(s.p)}</p></div></article>`; }

function mainFactor(c, r){
  const arr = [{k:'E', v:c.E, lbl:'Paparan ' + HZ[r.bahaya_utama].lbl.toLowerCase()}, {k:'S', v:c.S, lbl:'Kemiskinan tinggi'}, {k:'A', v:c.A, lbl:'Kapasitas adaptasi rendah'}];
  arr.sort((a,b)=>b.v-a.v); return {...arr[0], pct: Math.round(arr[0].v / c.s * 100)};
}

/* hero search → peta */
$('#heroSearch').addEventListener('submit', e => {
  e.preventDefault();
  const q = $('#hsQ').value.trim().toLowerCase();
  state.hazard = $('#hsH').value; state.asnaf = $('#hsA').value;
  $('#fHazard').value = state.hazard; $('#fAsnaf').value = state.asnaf;
  if (q){ const r = ALL.find(r => r.nama.toLowerCase() === q) || ALL.find(r => r.nama.toLowerCase().includes(q)); if (r) pendingSelect = r.kode_wilayah; else toast('Wilayah tidak ditemukan dalam data contoh'); }
  location.hash = 'peta';
});

/* ===================================================================
   PETA INTERAKTIF
   =================================================================== */
let map, provLayer, kabLayer, zakatLayer, pendingSelect = null, pendingFit = false;
const provLayers = {};      // kode → leaflet layer
const kabMarkers = {};
const medians = {};

function computeMedians(){
  ['provinsi','kabupaten'].forEach(lv => {
    const list = lv === 'provinsi' ? PROV : KAB; medians[lv] = {};
    Object.keys(ASNAF_C).forEach(a => { const v = list.map(r=>r.komposisi_asnaf[a]).sort((x,y)=>x-y); medians[lv][a] = v[Math.floor(v.length/2)]; });
  });
}
function matches(r){
  if (state.hazard && r.bahaya_utama !== state.hazard) return false;
  if (state.asnaf && r.komposisi_asnaf[state.asnaf] < medians[r.tingkat][state.asnaf]) return false;
  if (state.pulau && pulauOf(r) !== state.pulau) return false;
  return true;
}
function valueOf(r){
  const c = calc(r, state.scen);
  return {gabungan:c.s, bahaya:c.b, kemiskinan:c.k, adaptasi:c.a, zakat:c.s}[state.layer];
}
function fillOf(r){ const v = valueOf(r); return state.layer === 'adaptasi' ? AD[cls(v)] : colorScore(v); }
const isDark = () => document.documentElement.dataset.theme === 'dark';

function provStyle(f){
  const r = BYK[f.properties.kode], on = matches(r), sel = state.selected === r.kode_wilayah;
  const neutral = state.level === 'kabupaten';
  return {
    fillColor: neutral ? (isDark() ? '#2A3B39' : '#DDE6E4') : fillOf(r),
    fillOpacity: neutral ? (on ? .9 : .5) : (state.layer === 'zakat' ? (on?.45:.12) : (on ? .88 : .15)),
    color: sel ? '#E2A72E' : (isDark() ? '#0C1716' : '#ffffff'),
    weight: sel ? 3 : .9, opacity: 1
  };
}
function initMap(){
  computeMedians();
  map = L.map('map', {zoomControl:false, minZoom:3, maxZoom:10, zoomSnap:.25, maxBounds:[[-18,86],[14,150]], worldCopyJump:false});
  L.control.zoom({position:'bottomright'}).addTo(map);
  map.attributionControl.setPrefix(false);
  map.attributionControl.addAttribution('Batas wilayah: BAKOSURTANAL/Dukcapil · Skor: data contoh');
  provLayer = L.geoJSON(DATA.geo, {style: provStyle, onEachFeature: (f, l) => {
    const r = BYK[f.properties.kode]; provLayers[r.kode_wilayah] = l;
    l.bindTooltip(() => tipHTML(r), {sticky:true, direction:'top', opacity:1});
    l.on({click: () => selectRegion(r.kode_wilayah), mouseover: () => { if (state.selected !== r.kode_wilayah) l.setStyle({weight:2, color:'#E2A72E'}); }, mouseout: () => provLayer.resetStyle(l)});
  }}).addTo(map);
  kabLayer = L.layerGroup().addTo(map);
  KAB.forEach(r => {
    const m = L.circleMarker([r.lat, r.lng], {radius: 6 + Math.sqrt(r.populasi_terdampak)/90, weight:2.5, color:'#fff', fillOpacity:.95});
    m.bindTooltip(() => tipHTML(r), {direction:'top', opacity:1});
    m.on('click', e => { L.DomEvent.stopPropagation(e); selectRegion(r.kode_wilayah); });
    kabMarkers[r.kode_wilayah] = m;
  });
  zakatLayer = L.layerGroup().addTo(map);
  fitIndonesia(false);
  refreshMap();
}
function tipHTML(r){
  const c = calc(r, state.scen), v = valueOf(r);
  const lab = {gabungan:'Skor kerentanan', bahaya:'Skor bahaya', kemiskinan:'Skor kemiskinan', adaptasi:'Kapasitas adaptasi', zakat:'Zakat tersalurkan'}[state.layer];
  const val = state.layer === 'zakat' ? rpShort(r.zakat_tersalurkan) + ` <span style="color:#888">(${rp(r.zakat_tersalurkan/r.populasi_terdampak)}/jiwa)</span>` : `<b>${fmt(v,1)}</b>`;
  return `<div style="font-family:inherit;min-width:170px"><b>${esc(r.nama)}</b><br><span style="color:#666;font-size:12px">${lab}:</span> ${val}<br><span style="font-size:11.5px;color:#666">${HZ[r.bahaya_utama].ic} ${HZ[r.bahaya_utama].lbl} · ${popShort(r.populasi_terdampak)} terdampak</span></div>`;
}
function refreshMap(){
  if (!map) return;
  provLayer.setStyle(provStyle);
  // marker kabupaten
  kabLayer.clearLayers();
  const selProv = state.selected && BYK[state.selected].tingkat === 'provinsi' ? state.selected : (state.selected ? BYK[state.selected].kode_provinsi : null);
  KAB.forEach(r => {
    const show = state.level === 'kabupaten' || (selProv && r.kode_provinsi === selProv);
    if (!show) return;
    const m = kabMarkers[r.kode_wilayah], on = matches(r), sel = state.selected === r.kode_wilayah;
    m.setStyle({fillColor: fillOf(r), fillOpacity: on ? .95 : .2, opacity: on ? 1 : .3, color: sel ? '#E2A72E' : '#fff', weight: sel ? 4 : 2.5});
    kabLayer.addLayer(m);
  });
  // lapisan penyaluran zakat (lingkaran proporsional)
  zakatLayer.clearLayers();
  if (state.layer === 'zakat'){
    const list = state.level === 'provinsi' ? PROV : KAB;
    const max = Math.max(...list.map(r=>r.zakat_tersalurkan));
    list.forEach(r => { if (!matches(r)) return;
      const c = L.circleMarker([r.lat, r.lng], {radius: 4 + 26*Math.sqrt(r.zakat_tersalurkan/max), color:'#8A5A00', weight:1.2, fillColor:'#E2A72E', fillOpacity:.75, interactive:true});
      c.bindTooltip(() => tipHTML(r), {direction:'top', opacity:1}); c.on('click', () => selectRegion(r.kode_wilayah));
      zakatLayer.addLayer(c);
    });
  }
  renderLegend();
  $('#scenBadge').innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:${state.scen==='base'?'var(--brand)':'#EE8445'}"></span>Skenario: ${SCEN_LBL[state.scen]}`;
  if (state.selected) renderPanel(BYK[state.selected]);
  renderTray();
}
function renderLegend(){
  const meta = {
    gabungan:['Skor Kerentanan Iklim–Kemiskinan (0–100)','Model indeks gabungan', DATA.pembaruan.gabungan],
    bahaya:['Skor bahaya iklim / paparan (0–100)','BMKG, BNPB, citra satelit', DATA.pembaruan.bahaya],
    kemiskinan:['Skor kemiskinan / sensitivitas (0–100)','BPS, DTSEN/P3KE (agregat)', DATA.pembaruan.kemiskinan],
    adaptasi:['Kapasitas adaptasi (0–100, tinggi = lebih tangguh)','BPS Podes, infrastruktur & layanan', DATA.pembaruan.adaptasi],
    zakat:['Penyaluran zakat saat ini','Laporan lembaga amil mitra', DATA.pembaruan.zakat]}[state.layer];
  const pal = state.layer === 'adaptasi' ? AD : SC;
  let extra = state.layer === 'zakat' ? `<div style="display:flex;align-items:center;gap:8px;margin-top:8px"><svg width="44" height="24"><circle cx="10" cy="14" r="5" fill="#E2A72E" stroke="#8A5A00"/><circle cx="30" cy="12" r="10" fill="#E2A72E" stroke="#8A5A00"/></svg><span class="muted">Ukuran lingkaran = dana tersalurkan; warna dasar = skor kerentanan</span></div>` : '';
  $('#legend').innerHTML = `<h4>${meta[0]}</h4><div class="lg-scale">${pal.map(c=>`<i style="background:${c}"></i>`).join('')}</div>
    <div class="lg-labels">${['&lt;40','40–50','50–60','60–70','≥70'].map(t=>`<span style="flex:1;text-align:center">${t}</span>`).join('')}</div>
    ${state.layer==='adaptasi'?'':`<div class="lg-labels" style="margin-top:0"><span>${SC_LBL[0]}</span><span>${SC_LBL[4]}</span></div>`}${extra}
    <div class="lg-meta">Sumber: ${meta[1]}<br>Diperbarui: <b>${fmtDate(meta[2])}</b>${state.scen!=='base' && state.layer!=='zakat'?' · proyeksi '+SCEN_LBL[state.scen]:''}</div>`;
}
function fitIndonesia(anim=true){ map.fitBounds([[-11,95],[6,141]], {animate:anim, padding:[10,10]}); }
function fitPulau(p){
  const ls = PROV.filter(r=>r.pulau===p).map(r=>provLayers[r.kode_wilayah]);
  if (ls.length) map.fitBounds(L.featureGroup(ls).getBounds(), {padding:[30,30]});
}

function selectRegion(kode){
  const r = BYK[kode]; if (!r) return;
  if (state.selected !== kode) $('#panel').scrollTop = 0;
  state.selected = kode;
  // sisakan ruang untuk panel detail (kanan di desktop, bawah di ponsel)
  const mob = innerWidth <= 900, pad = mob ? {paddingTopLeft:[20,70], paddingBottomRight:[20, Math.round(innerHeight*.7)]} : {paddingTopLeft:[40,80], paddingBottomRight:[430,40]};
  if (r.tingkat === 'provinsi') map.flyToBounds(provLayers[kode].getBounds(), {...pad, maxZoom:7.5, duration:.8});
  else map.flyToBounds(L.latLng(r.lat, r.lng).toBounds(90000), {...pad, maxZoom:8, duration:.8});
  refreshMap();
  $('#panel').classList.add('open');
}
function closePanel(){ const p = $('#panel'); if (!p || !p.classList.contains('open')) return; p.classList.remove('open'); state.selected = null; if (map) refreshMap(); }

function gauge(v){
  const C = 2*Math.PI*40, col = colorScore(v);
  return `<div class="gauge"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-soft)" stroke-width="10"/><circle cx="50" cy="50" r="40" fill="none" stroke="${col}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C*v/100} ${C}"/></svg><b>${fmt(v,0)}</b><small>dari 100</small></div>`;
}
function spark(vals, projV){
  const W=320,H=90,p=22; const all = projV!=null ? [...vals, projV] : vals;
  const mn = Math.min(...all)-4, mx = Math.max(...all)+4, n = all.length;
  const X = i => p + i*(W-2*p)/(n-1), Y = v => H-18 - (v-mn)/(mx-mn)*(H-30);
  const pts = vals.map((v,i)=>`${X(i)},${Y(v)}`).join(' ');
  const years = [2019,2020,2021,2022,2023,2024,2025]; if (projV!=null) years.push(state.scen.slice(0,4));
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Tren skor"><polyline points="${pts}" fill="none" stroke="var(--brand)" stroke-width="2.5" stroke-linejoin="round"/>
    ${projV!=null?`<line x1="${X(vals.length-1)}" y1="${Y(vals[vals.length-1])}" x2="${X(n-1)}" y2="${Y(projV)}" stroke="#EE8445" stroke-width="2.5" stroke-dasharray="5 4"/><circle cx="${X(n-1)}" cy="${Y(projV)}" r="4" fill="#EE8445"/>`:''}
    ${vals.map((v,i)=>`<circle cx="${X(i)}" cy="${Y(v)}" r="3" fill="var(--brand)"/>`).join('')}
    ${years.map((y,i)=>(i%2===0||i===n-1)?`<text x="${X(i)}" y="${H-3}" text-anchor="middle" font-size="10" fill="var(--muted)">${y}</text>`:'').join('')}
    <text x="${X(vals.length-1)}" y="${Y(vals[vals.length-1])-8}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">${fmt(vals[vals.length-1],1)}</text>
    ${projV!=null?`<text x="${X(n-1)}" y="${Y(projV)-8}" text-anchor="end" font-size="11" font-weight="700" fill="#EE8445">${fmt(projV,1)}</text>`:''}</svg>`;
}
function renderPanel(r){
  const c = calc(r, state.scen), c0 = calc(r), f = mainFactor(c, r);
  const kids = r.tingkat === 'provinsi' ? KAB.filter(k => k.kode_provinsi === r.kode_wilayah) : [];
  const inCmp = state.compare.includes(r.kode_wilayah);
  const perCap = r.zakat_tersalurkan / r.populasi_terdampak;
  const comp = r.komposisi_asnaf;
  $('#panel').innerHTML = `
  <div class="panel-head"><button class="x" id="pClose" aria-label="Tutup panel">✕</button>
    <span class="pill ${r.tingkat==='provinsi'?'':'gold'}">${r.tingkat==='provinsi'?'Provinsi':'Kabupaten/Kota'} · ${esc(pulauOf(r))}</span>
    <h3>${esc(r.nama)}</h3><div class="muted" style="font-size:12.5px">Kode wilayah ${r.kode_wilayah}${r.provinsi?' · '+esc(r.provinsi):''}</div></div>
  <div class="panel-body">
    <div class="p-score">${gauge(c.s)}<div><span class="pill" style="background:${colorScore(c.s)};color:${textOn(c.s)}">${SC_LBL[cls(c.s)]}</span>
      <p style="margin:8px 0 0;font-size:13.5px">Faktor penyebab utama: <b>${f.lbl}</b> (${f.pct}% skor).</p>
      ${state.scen!=='base'?`<p class="muted" style="margin:4px 0 0;font-size:12px">Saat ini ${fmt(c0.s,1)} → ${SCEN_LBL[state.scen]}: <b style="color:#EE8445">${fmt(c.s,1)}</b></p>`:''}</div></div>
    <div class="p-sec"><h4>Komponen indeks</h4>
      ${[['Paparan bahaya', c.b, COMP_C.E, `${HZ[r.bahaya_utama].ic} ${HZ[r.bahaya_utama].lbl} dominan`],['Kemiskinan', c.k, COMP_C.S, 'sensitivitas sosial-ekonomi'],['Kapasitas adaptasi', c.a, COMP_C.A, 'tinggi = lebih tangguh']].map(([l,v,col,d])=>
        `<div class="bar-row" title="${d}"><span>${l}</span><div class="bar"><i style="width:${v}%;background:${col}"></i></div><b style="text-align:right">${fmt(v,0)}</b></div>`).join('')}
      <div class="muted" style="font-size:11.5px">Skor = 0,40·Paparan + 0,35·Kemiskinan + 0,25·(100 − Adaptasi)</div></div>
    <div class="p-sec"><h4>Tren skor kerentanan</h4>${spark(r.tren, state.scen!=='base'?c.s:null)}</div>
    <div class="p-sec"><h4>Profil singkat komunitas (agregat)</h4>
      <div class="kv"><div><small>Penduduk terdampak</small><b>${fmt(r.populasi_terdampak)}</b></div><div><small>Mata pencaharian rentan</small><b style="font-size:13px">${esc(r.mata_pencaharian||'lintas sektor')}</b></div>
      <div><small>Zakat tersalurkan</small><b>${rpShort(r.zakat_tersalurkan)}</b></div><div><small>Per jiwa terdampak</small><b>${rp(perCap)}</b></div></div>
      <div style="margin-top:12px;font-size:12.5px;font-weight:600">Estimasi komposisi asnaf</div>
      <div class="stack">${Object.entries(comp).map(([k,v])=>`<i style="width:${v*100}%;background:${ASNAF_C[k]}" title="${k} ${Math.round(v*100)}%"></i>`).join('')}</div>
      <div class="stack-leg">${Object.entries(comp).map(([k,v])=>`<span><i style="background:${ASNAF_C[k]}"></i>${k} ${Math.round(v*100)}%</span>`).join('')}</div></div>
    ${kids.length?`<div class="p-sec"><h4>Kabupaten/kota contoh di provinsi ini</h4>${kids.sort((a,b)=>calc(b,state.scen).s-calc(a,state.scen).s).map(k=>{const s=calc(k,state.scen).s;return `<button class="layer" style="width:100%;margin-bottom:6px;justify-content:space-between" data-go="${k.kode_wilayah}"><span>${esc(k.nama)}<small>${HZ[k.bahaya_utama].lbl}</small></span><span class="sb" style="background:${colorScore(s)};color:${textOn(s)};border-radius:7px;padding:3px 8px;font-weight:800">${fmt(s,0)}</span></button>`}).join('')}</div>`:''}
    <div class="p-actions"><button class="btn btn-gold" id="pGive">Salurkan ke wilayah ini</button><button class="btn btn-ghost" id="pCmp" ${!inCmp&&state.compare.length>=3?'disabled':''}>${inCmp?'✓ Dibandingkan':'+ Bandingkan'}</button></div>
    <div class="note">Data per ${fmtDate(DATA.pembaruan.gabungan)}. Skor adalah estimasi berbasis model dan perlu verifikasi lapangan. Tidak ada data pribadi mustahik yang ditampilkan.</div>
  </div>`;
  $('#pClose').onclick = closePanel;
  $('#pGive').onclick = () => { state.zakatRegion = r.kode_wilayah; location.hash = 'zakat'; };
  $('#pCmp').onclick = () => toggleCompare(r.kode_wilayah);
  $$('#panel [data-go]').forEach(b => b.onclick = () => selectRegion(b.dataset.go));
}

/* bandingkan 2–3 wilayah */
function toggleCompare(k){
  const i = state.compare.indexOf(k);
  if (i >= 0) state.compare.splice(i,1); else if (state.compare.length < 3) state.compare.push(k); else return toast('Maksimal 3 wilayah');
  refreshMap();
}
function renderTray(){
  const t = $('#tray'); if (!t) return;
  t.classList.toggle('show', state.compare.length > 0);
  t.innerHTML = `<span style="font-size:12.5px;font-weight:700">Bandingkan:</span>${state.compare.map(k=>`<span class="tchip">${esc(BYK[k].nama)}<button data-rm="${k}" aria-label="Hapus">×</button></span>`).join('')}
    <button class="btn btn-gold btn-sm" id="cmpGo" ${state.compare.length<2?'disabled':''}>Bandingkan (${state.compare.length})</button>`;
  $$('#tray [data-rm]').forEach(b => b.onclick = () => toggleCompare(b.dataset.rm));
  const g = $('#cmpGo'); if (g) g.onclick = showCompare;
}
function showCompare(){
  const rs = state.compare.map(k => BYK[k]);
  const rows = [['Skor kerentanan', r=>calc(r,state.scen).s, 1, 100],['Paparan bahaya', r=>calc(r,state.scen).b, 0, 100],['Kemiskinan', r=>r.skor_kemiskinan, 0, 100],['Kapasitas adaptasi', r=>r.skor_adaptasi, 0, 100],
    ['Penduduk terdampak', r=>r.populasi_terdampak, 0, null],['Zakat per jiwa terdampak (Rp)', r=>r.zakat_tersalurkan/r.populasi_terdampak, 0, null]];
  const colors = ['#0E5E54','#E2A72E','#7A5FB0'];
  const html = `<p class="muted" style="margin-top:0">Skenario: ${SCEN_LBL[state.scen]}. Semua nilai adalah data contoh.</p>
   <div class="table-wrap"><table class="tbl"><thead><tr><th>Indikator</th>${rs.map((r,i)=>`<th><span class="dotc" style="background:${colors[i]}"></span>${esc(r.nama)}</th>`).join('')}</tr></thead><tbody>
   ${rows.map(([l,f,d,max])=>{const vals=rs.map(f), mx=max||Math.max(...vals);return `<tr><td>${l}</td>${vals.map((v,i)=>`<td><div style="display:flex;align-items:center;gap:8px"><div class="bar" style="width:90px"><i style="width:${v/mx*100}%;background:${colors[i]}"></i></div><b>${fmt(v,d)}</b></div></td>`).join('')}</tr>`}).join('')}
   <tr><td>Bahaya utama</td>${rs.map(r=>`<td>${HZ[r.bahaya_utama].ic} ${HZ[r.bahaya_utama].lbl}</td>`).join('')}</tr>
   <tr><td>Asnaf dominan</td>${rs.map(r=>`<td>${r.asnaf_dominan}</td>`).join('')}</tr></tbody></table></div>`;
  openModal('Perbandingan wilayah', html);
}

/* pencarian lokasi */
function setupSearch(){
  const inp = $('#mapQ'), ul = $('#sugg'); let hi = -1, items = [];
  const draw = () => {
    const q = inp.value.trim().toLowerCase();
    items = q ? ALL.filter(r => r.nama.toLowerCase().includes(q)).slice(0,8) : [];
    ul.innerHTML = items.map((r,i)=>`<li role="option" data-k="${r.kode_wilayah}" class="${i===hi?'hl':''}"><span>${esc(r.nama)}</span><small>${r.tingkat==='provinsi'?'Provinsi':esc(r.provinsi)}</small></li>`).join('');
    ul.classList.toggle('open', items.length>0); inp.setAttribute('aria-expanded', items.length>0);
    $$('li', ul).forEach(li => li.onmousedown = e => { e.preventDefault(); pick(li.dataset.k); });
  };
  const pick = k => { const r = BYK[k]; inp.value = r.nama; ul.classList.remove('open'); hi=-1;
    if (r.tingkat === 'kabupaten' && state.level === 'provinsi'){ /* tetap di tingkat provinsi, marker kab provinsi ditampilkan */ }
    selectRegion(k); };
  inp.addEventListener('input', () => { hi=-1; draw(); });
  inp.addEventListener('keydown', e => {
    if (e.key==='ArrowDown'){ hi=Math.min(hi+1, items.length-1); draw(); e.preventDefault(); }
    else if (e.key==='ArrowUp'){ hi=Math.max(hi-1, 0); draw(); e.preventDefault(); }
    else if (e.key==='Enter' && items.length){ pick(items[Math.max(hi,0)].kode_wilayah); }
  });
  inp.addEventListener('blur', () => setTimeout(()=>ul.classList.remove('open'), 150));
}

function setupMapControls(){
  $('#fPulau').innerHTML += PULAU_LIST.map(p=>`<option>${esc(p)}</option>`).join('');
  $$('#segLevel button[data-v]').forEach(b => b.onclick = () => {
    $$('#segLevel button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); state.level = b.dataset.v; refreshMap();
  });
  $$('#layerList input').forEach(i => i.onchange = () => { state.layer = i.value; refreshMap(); });
  $('#fPulau').onchange = e => { state.pulau = e.target.value; refreshMap(); state.pulau ? fitPulau(state.pulau) : fitIndonesia(); };
  $('#fHazard').onchange = e => { state.hazard = e.target.value; refreshMap(); };
  $('#fAsnaf').onchange = e => { state.asnaf = e.target.value; refreshMap(); };
  $('#fScen').onchange = e => { state.scen = e.target.value; refreshMap(); };
  $('#resetMap').onclick = () => {
    Object.assign(state, {layer:'gabungan', level:'provinsi', hazard:'', asnaf:'', scen:'base', pulau:'', selected:null});
    ['#fPulau','#fHazard','#fAsnaf'].forEach(s=>$(s).value=''); $('#fScen').value='base';
    $('#layerList input[value=gabungan]').checked = true;
    $$('#segLevel button').forEach(x=>x.classList.toggle('on', x.dataset.v==='provinsi'));
    $('#panel').classList.remove('open'); fitIndonesia(); refreshMap();
  };
  $('#openSide').onclick = () => $('#mapSide').classList.add('open');
  $('#closeSide').onclick = () => $('#mapSide').classList.remove('open');
  setupSearch();
}

/* ===================================================================
   PERINGKAT PRIORITAS
   =================================================================== */
const RK_COLS = [
  {k:'rank', l:'#', num:true}, {k:'nama', l:'Wilayah'}, {k:'induk', l:'Provinsi / Pulau'},
  {k:'s', l:'Skor', num:true}, {k:'b', l:'Bahaya', num:true}, {k:'k', l:'Kemiskinan', num:true}, {k:'a', l:'Adaptasi', num:true},
  {k:'hz', l:'Bahaya utama'}, {k:'pop', l:'Terdampak', num:true}, {k:'zk', l:'Zakat tersalurkan', num:true}, {k:'go', l:''}];
function rankRows(){
  const lv = $('#rkLevel').value, hz = $('#rkHz').value, scen = $('#rkScen').value;
  let rows = (lv==='provinsi'?PROV:KAB).filter(r => !hz || r.bahaya_utama===hz).map(r => { const c = calc(r, scen);
    return {r, nama:r.nama, induk: r.tingkat==='provinsi'?r.pulau:r.provinsi, s:c.s, b:c.b, k:c.k, a:c.a, E:c.E, S:c.S, A:c.A, hz:HZ[r.bahaya_utama].lbl, pop:r.populasi_terdampak, zk:r.zakat_tersalurkan}; });
  rows.sort((x,y)=>y.s-x.s); rows.forEach((x,i)=>x.rank=i+1);
  rows = rows.slice(0, +$('#rkTop').value);
  const k = state.sortKey, d = state.sortDir;
  rows.sort((x,y) => (typeof x[k]==='string' ? x[k].localeCompare(y[k]) : x[k]-y[k]) * d);
  return rows;
}
function renderRank(){
  const rows = rankRows();
  $('#rkTable').innerHTML = `<thead><tr>${RK_COLS.map(c=>`<th class="${c.num?'num':''}" data-k="${c.k}" ${c.k===state.sortKey?`aria-sort="${state.sortDir>0?'ascending':'descending'}"`:''} scope="col">${c.l}</th>`).join('')}</tr></thead>
  <tbody>${rows.map(x=>`<tr><td class="rank num">${x.rank}</td><td><b>${esc(x.nama)}</b></td><td class="muted">${esc(x.induk)}</td>
   <td class="num"><span class="dotc" style="background:${colorScore(x.s)}"></span><b>${fmt(x.s,1)}</b></td><td class="num">${fmt(x.b,0)}</td><td class="num">${fmt(x.k,0)}</td><td class="num">${fmt(x.a,0)}</td>
   <td>${HZ[x.r.bahaya_utama].ic} ${x.hz}</td><td class="num">${fmt(x.pop)}</td><td class="num">${rpShort(x.zk)}</td>
   <td><button class="btn btn-ghost btn-sm" data-map="${x.r.kode_wilayah}">Peta →</button></td></tr>`).join('') || `<tr><td colspan="11" class="muted">Tidak ada wilayah untuk filter ini.</td></tr>`}</tbody>`;
  $$('#rkTable th').forEach(th => { if (th.dataset.k==='go') return; th.onclick = () => { const k = th.dataset.k; state.sortDir = state.sortKey===k ? -state.sortDir : (k==='nama'||k==='induk'||k==='hz'||k==='rank'?1:-1); state.sortKey = k; renderRank(); }; });
  $$('#rkTable [data-map]').forEach(b => b.onclick = () => { pendingSelect = b.dataset.map; location.hash='peta'; });
  // grafik batang bertumpuk 10 teratas (berdasarkan skor)
  const top = [...rows].sort((a,b)=>b.s-a.s).slice(0,10);
  const W=520, rowH=30, H=top.length*rowH+40, L=150, maxV=100;
  const X = v => L + v/maxV*(W-L-40);
  $('#rkChart').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Grafik 10 wilayah teratas">
    ${[0,25,50,75,100].map(v=>`<line x1="${X(v)}" x2="${X(v)}" y1="0" y2="${H-28}" stroke="var(--line)"/><text x="${X(v)}" y="${H-14}" text-anchor="middle">${v}</text>`).join('')}
    ${top.map((x,i)=>{const y=i*rowH+4;return `<text class="lbl-strong" x="${L-8}" y="${y+16}" text-anchor="end">${esc(x.nama.length>20?x.nama.slice(0,19)+'…':x.nama)}</text>
      <rect x="${X(0)}" y="${y+4}" width="${X(x.E)-X(0)}" height="18" fill="${COMP_C.E}" rx="3"/><rect x="${X(x.E)}" y="${y+4}" width="${X(x.S)-X(0)}" height="18" fill="${COMP_C.S}"/><rect x="${X(x.E+x.S)}" y="${y+4}" width="${X(x.A)-X(0)}" height="18" fill="${COMP_C.A}" rx="3"/>
      <text x="${X(x.s)+6}" y="${y+17}" class="lbl-strong">${fmt(x.s,1)}</text>`}).join('')}</svg>
    <div class="stack-leg" style="margin-top:6px"><span><i style="background:${COMP_C.E}"></i>Paparan (0,40)</span><span><i style="background:${COMP_C.S}"></i>Kemiskinan (0,35)</span><span><i style="background:${COMP_C.A}"></i>Kurangnya adaptasi (0,25)</span></div>`;
}
function csvOf(){
  const rows = rankRows();
  const head = ['peringkat','kode_wilayah','nama','induk','skor_kerentanan','skor_bahaya','skor_kemiskinan','skor_adaptasi','bahaya_utama','populasi_terdampak','zakat_tersalurkan','skenario'];
  const q = v => /[",;\n]/.test(String(v)) ? `"${String(v).replace(/"/g,'""')}"` : v;
  return [head.join(','), ...rows.map(x=>[x.rank,x.r.kode_wilayah,x.nama,x.induk,x.s,x.b,x.k,x.a,x.r.bahaya_utama,x.pop,x.zk,$('#rkScen').value].map(q).join(','))].join('\n');
}
function setupRank(){
  $('#rkScen').innerHTML = Object.entries(SCEN_LBL).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  ['#rkLevel','#rkTop','#rkHz','#rkScen'].forEach(s => $(s).onchange = renderRank);
  $('#csvCopy').onclick = () => copyText(csvOf());
  $('#csvView').onclick = () => { openModal('Ekspor CSV', `<p class="muted" style="margin-top:0">Salin teks di bawah lalu tempel ke Excel/Google Sheets, atau simpan sebagai file <code>.csv</code>.</p><textarea class="csv" id="csvTa" readonly>${esc(csvOf())}</textarea><div style="margin-top:10px"><button class="btn btn-primary btn-sm" id="csvCp2">⧉ Salin semua</button></div>`);
    $('#csvCp2').onclick = () => { $('#csvTa').select(); copyText($('#csvTa').value); }; };
  renderRank();
}

/* ===================================================================
   DASBOR LEMBAGA AMIL
   =================================================================== */
const dash = {cost:1500000, budget:null, w:50};
function needOf(r){ return r.populasi_terdampak * (r.skor_kerentanan/100) * dash.cost; }
function renderDash(){
  const root = $('#dashRoot');
  if (!state.loggedIn){
    root.innerHTML = `<div class="login-wrap box"><span class="proto-flag">Mode demo</span><h3 style="margin-top:10px">Masuk sebagai analis lembaga amil</h3>
      <p class="muted" style="font-size:13.5px">Akses dasbor dibatasi untuk BAZNAS/LAZ mitra. Pada prototipe ini, autentikasi disimulasikan — tidak ada data yang dikirim ke server.</p>
      <form id="loginF" class="form-grid" style="grid-template-columns:1fr"><div><label class="lbl" for="lgE" style="display:block;font-size:12px;font-weight:700;margin-bottom:4px">Email lembaga</label><input class="inp" id="lgE" type="email" value="analis@lembaga-mitra.id" required></div>
      <div><label for="lgP" style="display:block;font-size:12px;font-weight:700;margin-bottom:4px">Kata sandi</label><input class="inp" id="lgP" type="password" value="demo1234" required></div>
      <button class="btn btn-primary" type="submit">Masuk ke dasbor</button></form></div>`;
    $('#loginF').onsubmit = e => { e.preventDefault(); state.loggedIn = true; renderDash(); toast('Masuk (demo) berhasil'); };
    return;
  }
  const rows = PROV.map(r => ({r, need:needOf(r), cur:r.zakat_tersalurkan}));
  const N = rows.reduce((s,x)=>s+x.need,0), Cur = rows.reduce((s,x)=>s+x.cur,0);
  if (dash.budget == null) dash.budget = Math.round(Cur/1e9);
  root.innerHTML = `
   <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:18px"><div><span class="proto-flag">Data contoh · tingkat provinsi</span><h2 style="margin:8px 0 0;font-size:22px">Ringkasan alokasi vs kebutuhan</h2></div>
     <div style="display:flex;gap:10px;align-items:end"><div><label for="dCost" style="font-size:12px;font-weight:700;display:block">Asumsi kebutuhan / jiwa terdampak / tahun</label><input class="inp" id="dCost" type="number" step="100000" min="100000" value="${dash.cost}" style="width:200px"></div>
     <button class="btn btn-ghost btn-sm" id="logout">Keluar</button></div></div>
   <div class="kpis">
     <div class="kpi"><small>Estimasi kebutuhan</small><b>${rpShort(N)}</b><div class="muted" style="font-size:12px">Σ terdampak × skor × biaya</div></div>
     <div class="kpi"><small>Zakat tersalurkan</small><b>${rpShort(Cur)}</b><div class="muted" style="font-size:12px">laporan mitra ${fmtDate(DATA.pembaruan.zakat)}</div></div>
     <div class="kpi"><small>Kesenjangan</small><b style="color:#9B1D30">${rpShort(N-Cur)}</b><div class="muted" style="font-size:12px">kebutuhan − tersalurkan</div></div>
     <div class="kpi"><small>Rasio cakupan nasional</small><b>${fmt(Cur/N*100,1)}%</b><div class="muted" style="font-size:12px">tersalurkan ÷ kebutuhan</div></div></div>
   <div class="grid2" style="align-items:start">
     <div class="box chart"><h3>Skor kerentanan vs zakat per jiwa terdampak</h3><p class="muted" style="font-size:13px">Wilayah di kanan-bawah: sangat rentan namun menerima dana per jiwa paling kecil — kandidat realokasi.</p><div id="dScatter"></div></div>
     <div class="box"><h3>Analisis kesenjangan (gap) per provinsi</h3><div class="table-wrap" style="max-height:420px;margin-top:10px"><table class="tbl" id="dGap"></table></div></div>
   </div>
   <div class="box" style="margin-top:22px"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px"><div><h3 style="margin:0">Simulasi realokasi dana</h3><p class="muted" style="font-size:13px;margin:4px 0 0">Alokasi baru = Anggaran × [(1 − w) × porsi saat ini + w × porsi kebutuhan berbasis kerentanan]</p></div></div>
     <div class="grid3" style="margin:16px 0;gap:16px">
       <div><label for="dBud" style="font-size:12px;font-weight:700">Anggaran penyaluran (Rp miliar)</label><input class="inp" id="dBud" type="number" min="1" value="${dash.budget}"></div>
       <div><label for="dW" style="font-size:12px;font-weight:700">Bobot berbasis kerentanan (w): <b id="dWv">${dash.w}%</b></label><input class="range" id="dW" type="range" min="0" max="100" step="5" value="${dash.w}"><div class="lg-labels"><span>pola saat ini</span><span>sepenuhnya berbasis kebutuhan</span></div></div>
       <div id="dSimKpi"></div></div>
     <div class="grid2" style="align-items:start"><div class="chart" id="dSimChart"></div><div class="table-wrap" style="max-height:440px"><table class="tbl" id="dSimTbl"></table></div></div>
     <p class="muted" style="font-size:12px;margin:12px 0 0">Simulasi bersifat indikatif untuk perencanaan; keputusan penyaluran tetap mengikuti ketentuan syariah, asnaf, dan verifikasi lapangan.</p></div>`;
  $('#logout').onclick = () => { state.loggedIn = false; renderDash(); };
  $('#dCost').onchange = e => { dash.cost = Math.max(100000, +e.target.value||dash.cost); renderDash(); };
  // scatter
  const W=520,H=300,pl=70,pb=36,pt=12,pr=14, lblR=W-110;
  const xs = rows.map(x=>x.r.skor_kerentanan), ys = rows.map(x=>x.cur/x.r.populasi_terdampak);
  const x0=Math.floor(Math.min(...xs)/5)*5, x1=Math.ceil(Math.max(...xs)/5)*5, y1=Math.ceil(Math.max(...ys)/50000)*50000;
  const X=v=>pl+(v-x0)/(x1-x0)*(W-pl-pr), Y=v=>H-pb-(v/y1)*(H-pb-pt);
  const medX = [...xs].sort((a,b)=>a-b)[17], medY=[...ys].sort((a,b)=>a-b)[17];
  $('#dScatter').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Diagram sebar">
    <rect x="${X(medX)}" y="${Y(medY)}" width="${W-pr-X(medX)}" height="${H-pb-Y(medY)}" fill="#9B1D30" opacity=".07"/>
    ${[0,.25,.5,.75,1].map(t=>`<line x1="${pl}" x2="${W-pr}" y1="${Y(y1*t)}" y2="${Y(y1*t)}" stroke="var(--line)"/><text x="${pl-6}" y="${Y(y1*t)+4}" text-anchor="end">${fmt(y1*t/1000)} rb</text>`).join('')}
    ${[x0, (x0+x1)/2, x1].map(v=>`<text x="${X(v)}" y="${H-pb+16}" text-anchor="middle">${fmt(v)}</text>`).join('')}
    <text x="${(pl+W)/2}" y="${H-2}" text-anchor="middle">Skor kerentanan →</text><text x="12" y="${pt+4}" transform="rotate(-90 12 ${pt+4})" text-anchor="end">Rp per jiwa terdampak</text>
    ${rows.map((x,i)=>`<circle cx="${X(xs[i])}" cy="${Y(ys[i])}" r="${4+Math.sqrt(x.r.populasi_terdampak)/180}" fill="${colorScore(xs[i])}" stroke="#fff" stroke-width="1" opacity=".9"><title>${esc(x.r.nama)}: skor ${xs[i]}, ${rp(ys[i])}/jiwa</title></circle>`).join('')}
    ${rows.filter((x,i)=>xs[i]>=70||ys[i]>y1*.6).map(x=>{const i=rows.indexOf(x);const R=X(xs[i])>lblR;return `<text x="${X(xs[i])+(R?-9:8)}" y="${Y(ys[i])+(R?-7:4)}" text-anchor="${R?'end':'start'}" class="lbl-strong" font-size="10.5">${esc(x.r.nama)}</text>`}).join('')}
    <text x="${W-pr-4}" y="${Y(medY)-6}" text-anchor="end" font-weight="700" style="fill:#B33A4E" opacity=".8">kuadran prioritas realokasi</text></svg>`;
  // tabel gap
  const gapRows = rows.map(x=>({...x, gap:x.need-x.cur, cov:x.cur/x.need})).sort((a,b)=>b.gap-a.gap);
  $('#dGap').innerHTML = `<thead><tr><th>Provinsi</th><th class="num">Skor</th><th class="num">Kebutuhan</th><th class="num">Tersalurkan</th><th class="num">Gap</th><th class="num">Cakupan</th></tr></thead><tbody>
   ${gapRows.map(x=>`<tr><td>${esc(x.r.nama)}</td><td class="num"><span class="dotc" style="background:${colorScore(x.r.skor_kerentanan)}"></span>${fmt(x.r.skor_kerentanan,1)}</td><td class="num">${rpShort(x.need)}</td><td class="num">${rpShort(x.cur)}</td><td class="num"><b>${rpShort(x.gap)}</b></td>
    <td class="num"><span style="color:${x.cov<.05?'#B33A4E':x.cov<.15?'var(--gold-600)':'var(--brand)'};font-weight:700">${fmt(x.cov*100,1)}%</span></td></tr>`).join('')}</tbody>`;
  const sim = () => {
    const B = dash.budget*1e9, w = dash.w/100;
    const out = rows.map(x=>{ const nw = B*((1-w)*x.cur/Cur + w*x.need/N); return {...x, nw, d:nw-x.cur*(B/Cur)}; });
    const vh = out.filter(x=>x.r.skor_kerentanan>=70);
    const covVH0 = vh.reduce((s,x)=>s+x.cur*(B/Cur),0)/vh.reduce((s,x)=>s+x.need,0), covVH1 = vh.reduce((s,x)=>s+x.nw,0)/vh.reduce((s,x)=>s+x.need,0);
    const low0 = out.filter(x=>x.cur*(B/Cur)/x.need<.05).length, low1 = out.filter(x=>x.nw/x.need<.05).length;
    $('#dSimKpi').innerHTML = `<div class="kpi" style="padding:12px"><small>Cakupan kebutuhan wilayah sangat rentan (skor ≥ 70)</small><b>${fmt(covVH0*100,1)}% → <span style="color:var(--brand)">${fmt(covVH1*100,1)}%</span></b><div class="muted" style="font-size:12px">Provinsi dengan cakupan &lt; 5%: ${low0} → ${low1}</div></div>`;
    const top = [...out].sort((a,b)=>Math.abs(b.d)-Math.abs(a.d)).slice(0,12);
    const mx = Math.max(...top.map(x=>Math.abs(x.d)))||1, W=520, rh=26, H=top.length*rh+20, mid=W/2+60;
    const Xd = v => mid + v/mx*(W-mid-50);
    $('#dSimChart').innerHTML = `<div style="font-size:13px;font-weight:700;margin-bottom:6px">Perubahan alokasi terbesar (Rp)</div><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Perubahan alokasi"><line x1="${mid}" x2="${mid}" y1="0" y2="${H-10}" stroke="var(--line)"/>
      ${top.map((x,i)=>{const y=i*rh+4, a=Xd(Math.min(0,x.d)), b=Xd(Math.max(0,x.d));return `<text x="${110}" y="${y+14}" text-anchor="end" class="lbl-strong">${esc(x.r.nama.length>16?x.r.nama.slice(0,15)+'…':x.r.nama)}</text><rect x="${a}" y="${y+2}" width="${Math.max(1,b-a)}" height="16" rx="3" fill="${x.d>=0?'#0E5E54':'#C9A15A'}"/><text x="${x.d>=0?b+4:a-4}" y="${y+14}" text-anchor="${x.d>=0?'start':'end'}">${x.d>=0?'+':'−'}${rpShort(Math.abs(x.d)).replace('Rp ','')}</text>`}).join('')}</svg>`;
    $('#dSimTbl').innerHTML = `<thead><tr><th>Provinsi</th><th class="num">Saat ini*</th><th class="num">Simulasi</th><th class="num">Δ</th></tr></thead><tbody>${[...out].sort((a,b)=>b.d-a.d).map(x=>`<tr><td>${esc(x.r.nama)}</td><td class="num">${rpShort(x.cur*(B/Cur))}</td><td class="num"><b>${rpShort(x.nw)}</b></td><td class="num" style="color:${x.d>=0?'var(--brand)':'#B33A4E'};font-weight:700">${x.d>=0?'+':'−'}${rpShort(Math.abs(x.d)).replace('Rp ','')}</td></tr>`).join('')}</tbody><tfoot><tr><td colspan="4" class="muted" style="font-size:11.5px;white-space:normal">*Pola saat ini diskalakan ke anggaran simulasi.</td></tr></tfoot>`;
  };
  $('#dBud').oninput = e => { dash.budget = Math.max(1, +e.target.value||1); sim(); };
  $('#dW').oninput = e => { dash.w = +e.target.value; $('#dWv').textContent = dash.w+'%'; sim(); };
  sim();
}

/* ===================================================================
   METODOLOGI
   =================================================================== */
function renderMethod(){
  const P = DATA.pembaruan;
  const srcs = [
    ['BMKG & citra satelit','Curah hujan, suhu, indeks kekeringan, NDVI, dan tutupan lahan (mis. CHIRPS, MODIS, Sentinel-2).', P.bahaya, '<circle cx="12" cy="12" r="3"/><path d="M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>'],
    ['BNPB (DIBI & InaRISK)','Riwayat kejadian bencana hidrometeorologi dan indeks risiko bencana.', P.bahaya, '<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4"/>'],
    ['BPS & DTSEN / P3KE','Kemiskinan, pengeluaran, Podes (infrastruktur & layanan) — hanya agregat wilayah.', P.kemiskinan, '<rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/>'],
    ['Data lembaga amil','Penyaluran zakat per wilayah dan asnaf dari BAZNAS/LAZ mitra.', P.zakat, '<path d="M3 21h18M5 21V10l7-5 7 5v11"/>']];
  $('#methodRoot').innerHTML = `
   <div class="section-title" style="text-align:left;margin:0 0 22px;max-width:none"><span class="kicker">Alur kerja</span><h2>Lima tahap pembentukan indeks</h2></div>
   <div class="pipeline">${[['Integrasi data','Harmonisasi data satelit, bencana, sosial-ekonomi, dan zakat ke unit desa/kecamatan/kabupaten.'],['Analisis kerentanan','Normalisasi indikator ke 0–100 per komponen paparan, sensitivitas, kapasitas adaptasi.'],['Pemodelan risiko','Analisis spasial & machine learning untuk hotspot dan proyeksi skenario iklim SSP.'],['Validasi lapangan','Verifikasi bersama lembaga amil & komunitas; uji coba di wilayah pilot.'],['Integrasi syariah','Pemetaan asnaf terhadap indikator kerentanan dengan dewan pakar syariah.']].map(([t,d])=>`<div><h4>${t}</h4><p>${d}</p></div>`).join('')}</div>
   <div class="grid2" style="margin-top:34px;align-items:start">
    <div class="box"><h3>Cara menghitung indeks</h3><p class="muted" style="font-size:14px">Setiap komponen dinormalisasi min–maks ke 0–100, lalu digabung dengan bobot (bobot awal; akan dikalibrasi melalui analisis sensitivitas dan masukan pakar):</p>
     <div class="formula">Skor = 0,40 × Paparan (bahaya)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 0,35 × Sensitivitas (kemiskinan)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 0,25 × (100 − Kapasitas adaptasi)</div>
     <p class="muted" style="font-size:13px;margin-top:12px">Proyeksi 2030/2045 mengganti komponen paparan dengan keluaran model iklim skenario SSP2-4.5 (moderat) dan SSP5-8.5 (tinggi).</p>
     <h4 style="margin-top:16px">Kelas skor</h4>
     <table class="tbl"><tbody>${SC.map((c,i)=>`<tr><td><span class="dotc" style="background:${c}"></span>${SC_LBL[i]}</td><td class="num">${i===0?'0 – &lt;40':i===4?'70 – 100':BREAKS[i-1]+' – &lt;'+BREAKS[i]}</td></tr>`).join('')}</tbody></table></div>
    <div class="box"><h3>Integrasi syariah: asnaf × indikator</h3><table class="tbl"><thead><tr><th>Asnaf</th><th>Indikator kerentanan terkait</th></tr></thead><tbody>
      <tr><td><b>Fakir</b></td><td style="white-space:normal">Pengeluaran di bawah garis kemiskinan ekstrem; kehilangan sumber nafkah akibat bencana</td></tr>
      <tr><td><b>Miskin</b></td><td style="white-space:normal">Pendapatan rentan musim/cuaca (petani, nelayan); aset produktif terdampak</td></tr>
      <tr><td><b>Gharimin</b></td><td style="white-space:normal">Utang untuk pemulihan pascabencana / gagal panen</td></tr>
      <tr><td><b>Ibnu sabil</b></td><td style="white-space:normal">Pengungsi/terdampak yang terputus dari tempat tinggal</td></tr></tbody></table>
      <p class="muted" style="font-size:12.5px;margin:10px 0 0">Pemetaan ini adalah rancangan awal dan akan disahkan bersama dewan pakar syariah.</p></div>
   </div>
   <div class="section-title" style="text-align:left;margin:40px 0 18px;max-width:none"><span class="kicker">Sumber data & pembaruan</span><h2>Dari mana datanya</h2></div>
   <div class="grid2">${srcs.map(([t,d,u,ic])=>`<div class="box src-card"><div class="fi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${ic}</svg></div><div><h4>${t}</h4><p>${d}</p><span class="upd">Diperbarui ${fmtDate(u)}</span></div></div>`).join('')}</div>
   <div class="grid2" style="margin-top:22px;align-items:start">
    <div class="box"><h3>Keterbatasan data</h3><ul style="margin:0;padding-left:18px;color:var(--ink-2);font-size:14px;display:grid;gap:6px">
      <li>Kualitas dan resolusi data tingkat desa belum merata; beberapa indikator diturunkan dari tingkat kabupaten.</li>
      <li>Skor adalah estimasi model dan dapat berbeda dengan kondisi lapangan terkini.</li>
      <li>Proyeksi iklim mengandung ketidakpastian antar-model; gunakan sebagai rentang, bukan angka pasti.</li>
      <li>Batas wilayah pada prototipe menggunakan versi 34 provinsi.</li>
      <li><b>Seluruh angka di prototipe ini adalah data contoh.</b></li></ul></div>
    <div class="box"><h3>Etika & perlindungan data</h3><ul style="margin:0;padding-left:18px;color:var(--ink-2);font-size:14px;display:grid;gap:6px">
      <li>Hanya data agregat wilayah yang ditampilkan — tidak ada data individu mustahik.</li>
      <li>Diksi “wilayah prioritas bantuan” digunakan untuk menghindari stigma wilayah.</li>
      <li>Setiap lapisan menampilkan tanggal pembaruan dan sumber.</li>
      <li>Hasil divalidasi bersama lembaga amil dan komunitas sebelum dipakai untuk keputusan.</li></ul></div>
   </div>`;
}

/* ===================================================================
   TUNAIKAN ZAKAT
   =================================================================== */
function renderZakat(){
  const sorted = [...ALL].sort((a,b)=>b.skor_kerentanan-a.skor_kerentanan);
  $('#zakatRoot').innerHTML = `
  <div class="box"><h3>Kalkulator zakat</h3>
    <div class="tabs" role="tablist"><button class="on" data-t="inc" role="tab">Zakat penghasilan</button><button data-t="mal" role="tab">Zakat maal (simpanan & emas)</button></div>
    <div class="form-grid">
      <div class="full"><label for="zGold" style="font-size:12px;font-weight:700">Harga emas per gram (Rp) — isi sesuai harga hari ini</label><input class="inp" id="zGold" type="number" min="0" step="1000" value="1500000"></div>
      <div data-p="inc"><label for="zInc" style="font-size:12px;font-weight:700">Penghasilan per bulan (Rp)</label><input class="inp" id="zInc" type="number" min="0" step="100000" value="12000000"></div>
      <div data-p="inc"><label for="zBonus" style="font-size:12px;font-weight:700">Pendapatan lain per tahun (Rp)</label><input class="inp" id="zBonus" type="number" min="0" step="100000" value="0"></div>
      <div data-p="mal" hidden><label for="zSav" style="font-size:12px;font-weight:700">Tabungan, deposito & investasi (Rp)</label><input class="inp" id="zSav" type="number" min="0" step="100000" value="100000000"></div>
      <div data-p="mal" hidden><label for="zGr" style="font-size:12px;font-weight:700">Emas yang disimpan (gram)</label><input class="inp" id="zGr" type="number" min="0" step="1" value="0"></div>
      <div data-p="mal" hidden class="full"><label for="zDebt" style="font-size:12px;font-weight:700">Utang jatuh tempo (Rp)</label><input class="inp" id="zDebt" type="number" min="0" step="100000" value="0"></div>
    </div>
    <div class="result" style="margin-top:16px" id="zRes"></div>
    <p class="muted" style="font-size:12px;margin:10px 0 0">Nisab = 85 gram emas per tahun; kadar 2,5%. Zakat maal mensyaratkan harta telah dimiliki satu tahun (haul). Hasil kalkulator bersifat panduan; konsultasikan dengan amil untuk kasus khusus.</p></div>
  <div class="box"><h3>Salurkan zakat</h3><span class="proto-flag">Prototipe — tidak ada pembayaran yang diproses</span>
    <form id="donF" style="margin-top:14px;display:grid;gap:14px">
      <div><label style="font-size:12px;font-weight:700;display:block;margin-bottom:6px">Nominal (Rp)</label><div class="amounts" id="amts">${[100000,250000,500000,1000000,2500000].map(v=>`<button type="button" data-v="${v}">${rpShort(v).replace('Rp ','')}</button>`).join('')}</div><input class="inp" id="dAmt" type="number" min="10000" step="1000" value="250000" style="margin-top:8px" required></div>
      <div style="display:grid;gap:8px"><span style="font-size:12px;font-weight:700">Arah penyaluran</span>
        <label class="radio-card"><input type="radio" name="mode" value="auto" checked><span><b>Prioritaskan wilayah paling rentan</b><small>Dana dibagi otomatis ke 5 wilayah dengan skor tertinggi sesuai peta prioritas.</small></span></label>
        <label class="radio-card"><input type="radio" name="mode" value="pick"><span><b>Pilih wilayah</b><small>Salurkan ke wilayah tertentu yang Anda pilih.</small></span></label>
        <select class="sel" id="dReg" disabled>${sorted.map(r=>`<option value="${r.kode_wilayah}">${esc(r.nama)} — skor ${fmt(r.skor_kerentanan,1)}</option>`).join('')}</select></div>
      <div class="form-grid"><div><label for="dLaz" style="font-size:12px;font-weight:700">Lembaga amil mitra</label><select class="sel" id="dLaz"><option>BAZNAS (mitra contoh)</option><option>LAZ mitra A (contoh)</option><option>LAZ mitra B (contoh)</option></select></div>
        <div><label for="dJenis" style="font-size:12px;font-weight:700">Jenis dana</label><select class="sel" id="dJenis"><option>Zakat penghasilan</option><option>Zakat maal</option><option>Infak/sedekah</option></select></div>
        <div><label for="dNm" style="font-size:12px;font-weight:700">Nama (opsional)</label><input class="inp" id="dNm" placeholder="Hamba Allah"></div>
        <div><label for="dEm" style="font-size:12px;font-weight:700">Email untuk laporan penyaluran</label><input class="inp" id="dEm" type="email" placeholder="nama@email.com"></div></div>
      <button class="btn btn-gold" type="submit" style="justify-content:center">Lanjutkan ke pembayaran mitra →</button>
    </form></div>`;
  // kalkulator
  let tab = 'inc';
  const calcZ = () => {
    const g = +$('#zGold').value||0, nis = 85*g;
    let base, label;
    if (tab==='inc'){ base = (+$('#zInc').value||0)*12 + (+$('#zBonus').value||0); label='Penghasilan setahun'; }
    else { base = (+$('#zSav').value||0) + (+$('#zGr').value||0)*g - (+$('#zDebt').value||0); label='Harta bersih'; }
    const wajib = base >= nis && nis > 0, z = wajib ? base*0.025 : 0;
    $('#zRes').innerHTML = `<div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><div><small class="muted">${label}</small><div><b>${rp(base)}</b></div><small class="muted">Nisab (85 g emas): ${rp(nis)}</small></div>
      <div style="text-align:right"><small class="muted">${wajib?'Wajib zakat':'Belum mencapai nisab'}</small><b class="big">${rp(z)}</b><small class="muted">${tab==='inc'?'per tahun · '+rp(z/12)+'/bulan':'dibayar saat haul'}</small></div></div>
      ${wajib?`<button class="btn btn-primary btn-sm" id="zUse" style="margin-top:10px">Gunakan nominal ini${tab==='inc'?' (per bulan)':''}</button>`:'<p class="muted" style="font-size:12.5px;margin:8px 0 0">Anda tetap dapat berinfak/bersedekah untuk wilayah prioritas.</p>'}`;
    const u = $('#zUse'); if (u) u.onclick = () => { $('#dAmt').value = Math.round(tab==='inc'?z/12:z); syncAmt(); toast('Nominal dipindahkan ke formulir'); };
  };
  $$('#zakatRoot .tabs button').forEach(b => b.onclick = () => { tab=b.dataset.t; $$('#zakatRoot .tabs button').forEach(x=>x.classList.toggle('on',x===b)); $$('#zakatRoot [data-p]').forEach(el=>el.hidden = el.dataset.p!==tab); calcZ(); });
  $$('#zakatRoot input[type=number]').forEach(i => { if (i.id.startsWith('z')) i.oninput = calcZ; });
  calcZ();
  // donasi
  const syncAmt = () => $$('#amts button').forEach(b=>b.classList.toggle('on', +b.dataset.v === +$('#dAmt').value));
  $$('#amts button').forEach(b => b.onclick = () => { $('#dAmt').value=b.dataset.v; syncAmt(); });
  $('#dAmt').oninput = syncAmt; syncAmt();
  const setMode = m => { $(`#donF input[value=${m}]`).checked = true; $('#dReg').disabled = m!=='pick'; };
  $$('#donF input[name=mode]').forEach(i => i.onchange = () => setMode(i.value));
  if (state.zakatRegion){ setMode('pick'); $('#dReg').value = state.zakatRegion; toast('Wilayah terpilih: ' + BYK[state.zakatRegion].nama); state.zakatRegion=''; }
  $('#donF').onsubmit = e => {
    e.preventDefault();
    const amt = +$('#dAmt').value; if (!(amt>=10000)) return toast('Nominal minimal Rp 10.000');
    const mode = $('#donF input[name=mode]:checked').value;
    let alloc;
    if (mode==='pick') alloc = [[BYK[$('#dReg').value], amt]];
    else { const top = [...KAB].sort((a,b)=>b.skor_kerentanan-a.skor_kerentanan).slice(0,5); const sw = top.reduce((s,r)=>s+r.skor_kerentanan,0); alloc = top.map(r=>[r, amt*r.skor_kerentanan/sw]); }
    openModal('Ringkasan penyaluran (prototipe)', `<p style="margin-top:0">Pada versi produksi, Anda akan diarahkan ke halaman pembayaran <b>${esc($('#dLaz').value)}</b>. <b>Di prototipe ini tidak ada pembayaran yang diproses dan tidak ada data yang dikirim.</b></p>
      <div class="table-wrap"><table class="tbl"><thead><tr><th>Wilayah tujuan</th><th class="num">Skor</th><th class="num">Porsi</th></tr></thead><tbody>${alloc.map(([r,v])=>`<tr><td>${esc(r.nama)}</td><td class="num"><span class="dotc" style="background:${colorScore(r.skor_kerentanan)}"></span>${fmt(r.skor_kerentanan,1)}</td><td class="num"><b>${rp(v)}</b></td></tr>`).join('')}</tbody><tfoot><tr><td><b>Total · ${esc($('#dJenis').value)}</b></td><td></td><td class="num"><b>${rp(amt)}</b></td></tr></tfoot></table></div>
      <p class="muted" style="font-size:12.5px;margin:12px 0 0">Pembagian otomatis proporsional terhadap skor kerentanan. Laporan penyaluran akan dikirim ke email Anda (versi produksi).</p>`);
  };
}

/* ===================================================================
   TENTANG · CERITA · BERITA · FAQ · KONTAK
   =================================================================== */
function renderAbout(){
  const news = [['Policy brief','Alokasi zakat presisi berbasis kerentanan iklim','Ringkasan rekomendasi kebijakan untuk BAZNAS & LAZ.','Okt 2026'],['Rilis data','Pembaruan lapisan bahaya iklim triwulan III','Integrasi curah hujan dan indeks kekeringan terbaru.','Okt 2026'],['Publikasi','Indeks Kerentanan Iklim–Kemiskinan Ekstrem: kerangka & validasi','Naskah jurnal (dalam persiapan).','2026'],['Kegiatan','Lokakarya validasi bersama lembaga amil','Verifikasi lapangan di wilayah pilot.','Sep 2026']];
  const faq = [['Apa itu skor kerentanan?','Angka 0–100 yang menggabungkan paparan bahaya iklim, tingkat kemiskinan, dan kapasitas adaptasi suatu wilayah. Semakin tinggi, semakin besar risiko komunitas jatuh ke kemiskinan ekstrem baru akibat perubahan iklim.'],
    ['Apakah data mustahik individu ditampilkan?','Tidak. Platform hanya menampilkan data agregat tingkat wilayah untuk melindungi privasi.'],
    ['Mengapa disebut “wilayah prioritas bantuan”?','Untuk menghindari stigma terhadap suatu daerah. Fokusnya adalah di mana bantuan paling dibutuhkan, bukan label negatif.'],
    ['Apakah saya bisa memilih wilayah penyaluran zakat?','Bisa. Pada halaman Tunaikan Zakat, pilih “Pilih wilayah” atau biarkan sistem memprioritaskan wilayah paling rentan.'],
    ['Seberapa akurat skornya?','Skor adalah estimasi model yang divalidasi bersama lembaga amil dan komunitas. Selalu perlu verifikasi lapangan sebelum keputusan penyaluran.'],
    ['Seberapa sering data diperbarui?','Setiap lapisan menampilkan tanggal pembaruannya. Lapisan bahaya iklim direncanakan diperbarui per triwulan.']];
  $('#aboutRoot').innerHTML = `
  <section class="sec"><div class="container"><div class="row-head"><div><span class="kicker">Cerita dampak</span><h2>Dari peta ke lapangan</h2><p>Ilustrasi skenario pemanfaatan — bukan laporan kegiatan nyata.</p></div></div><div class="grid3">${STORIES.map((s,i)=>storyCard(s,i)).join('')}</div></div></section>
  <section class="sec soft"><div class="container"><div class="row-head"><div><span class="kicker">Berita & riset</span><h2>Kabar terbaru</h2></div></div>
    <div class="grid2" style="grid-template-columns:repeat(auto-fill,minmax(250px,1fr))">${news.map(([t,h,p,d])=>`<article class="box"><span class="pill gold">${t}</span><h3 style="margin-top:10px">${h}</h3><p class="muted" style="font-size:13.5px">${p}</p><small class="muted">${d} · contoh konten</small></article>`).join('')}</div></div></section>
  <section class="sec"><div class="container grid2" style="align-items:start">
    <div><span class="kicker">Tentang kami</span><h2>GeoZakat-Climate</h2><p>Platform riset yang mengintegrasikan big data spasial dan peta digital kerentanan iklim untuk meningkatkan akurasi distribusi zakat nasional. Dikembangkan sebagai bagian dari program hibah riset, bekerja sama dengan lembaga amil zakat, akademisi, dan komunitas.</p>
      <div class="grid2" style="gap:12px">${[['Mustahik','Bantuan lebih cepat & tepat di wilayah rentan iklim'],['Muzaki','Transparansi ke mana zakat diprioritaskan'],['Lembaga amil','Dasar data perencanaan & pelaporan'],['Kebijakan','Mendukung SDGs 1, 10, dan 13']].map(([t,d])=>`<div class="box" style="padding:14px"><b>${t}</b><p class="muted" style="font-size:13px;margin:4px 0 0">${d}</p></div>`).join('')}</div></div>
    <div><span class="kicker">FAQ</span><h2>Pertanyaan umum</h2>${faq.map(([q,a])=>`<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
  </div></section>
  <section class="sec soft"><div class="container grid2" style="align-items:start">
    <div><span class="kicker">Kontak</span><h2>Hubungi tim</h2><p class="muted">Untuk kemitraan data, pertanyaan metodologi, atau akses dasbor lembaga amil.</p>
      <p><b>Email:</b> tim@geozakat-climate.id <span class="muted">(alamat contoh)</span></p></div>
    <form class="box" id="contactF" style="display:grid;gap:12px"><div class="form-grid"><div><label for="cN" style="font-size:12px;font-weight:700">Nama</label><input class="inp" id="cN" required></div><div><label for="cE" style="font-size:12px;font-weight:700">Email</label><input class="inp" id="cE" type="email" required></div>
      <div class="full"><label for="cS" style="font-size:12px;font-weight:700">Keperluan</label><select class="sel" id="cS"><option>Kemitraan data</option><option>Akses dasbor lembaga amil</option><option>Media</option><option>Lainnya</option></select></div>
      <div class="full"><label for="cM" style="font-size:12px;font-weight:700">Pesan</label><textarea class="inp" id="cM" rows="4" required></textarea></div></div>
      <button class="btn btn-primary" type="submit" style="justify-content:center">Kirim pesan</button></form>
  </div></section>`;
  $('#contactF').onsubmit = e => { e.preventDefault(); openModal('Pesan belum terkirim', '<p style="margin:0">Ini prototipe: formulir kontak belum terhubung ke server, sehingga <b>pesan Anda tidak dikirim</b>. Pada versi produksi formulir akan diteruskan ke email tim.</p>'); };
}

/* ===================================================================
   ROUTER, TEMA, BAHASA
   =================================================================== */
const PAGES = ['beranda','peta','peringkat','dasbor','metodologi','zakat','tentang'];
const rendered = {};
function route(){
  let h = location.hash.replace('#','');
  if (h === 'main') return;
  if (!PAGES.includes(h)) h = 'beranda';
  closeModal();
  $$('.page').forEach(p => p.classList.toggle('active', p.id === 'page-'+h));
  $$('#menu a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+h));
  $('#menu').classList.remove('open');
  document.querySelector('footer').style.display = h === 'peta' ? 'none' : '';
  if (h === 'peta'){
    if (!map){ initMap(); }
    setTimeout(() => {
      map.invalidateSize();
      if (pendingFit && state.pulau){ fitPulau(state.pulau); pendingFit = false; }
      refreshMap();
      if (pendingSelect){ const k = pendingSelect; pendingSelect = null; selectRegion(k); }
    }, 60);
  } else window.scrollTo(0,0);
  if (h === 'zakat') renderZakat();
  if (h === 'dasbor') renderDash();
  if (!rendered[h]){ rendered[h] = true;
    if (h === 'peringkat') setupRank();
    if (h === 'metodologi') renderMethod();
    if (h === 'tentang') renderAbout(); }
  document.title = (h==='beranda'?'':($('#menu a[href="#'+h+'"]')?.textContent || 'Tunaikan Zakat') + ' · ') + 'GeoZakat-Climate';
}
window.addEventListener('hashchange', route);

function setTheme(t){ document.documentElement.dataset.theme = t; try{ localStorage.setItem('gzc-theme', t); }catch(e){} if (map) refreshMap(); }
$('#themeBtn').onclick = () => setTheme(isDark() ? 'light' : 'dark');
$('#hamb').onclick = () => { const m = $('#menu'); m.classList.toggle('open'); $('#hamb').setAttribute('aria-expanded', m.classList.contains('open')); };

/* bahasa: ID default, toggle EN untuk navigasi & teks utama */
const EN = {nav_home:'Home', nav_map:'Interactive Map', nav_rank:'Priority Ranking', nav_dash:'Amil Dashboard', nav_method:'Methodology', nav_about:'About & FAQ', cta_zakat:'Pay Zakat', cta_map:'Explore the Map',
  hero_eyebrow:'Spatial big data × precision zakat', hero_title:'Direct zakat to the areas most <span class="accent">vulnerable</span> to the climate crisis',
  hero_lead:'Floods, droughts and tidal flooding can push families into new extreme poverty. GeoZakat-Climate openly maps priority assistance areas so donors and zakat institutions can channel zakat precisely.',
  sb_where:'Area', sb_hazard:'Climate hazard', sb_asnaf:'Asnaf', sb_btn:'Search on Map', mini_title:'Climate–Poverty Vulnerability Score · by province', src_label:'Built from open data sources & partners',
  k_priority:'Priority assistance areas', h_priority:'Districts with the highest vulnerability scores', p_priority:'Model-based estimates. Click a card to see drivers on the map.', see_all:'See full ranking',
  k_island:'Explore by region', h_island:'Vulnerability across six island regions', p_island:'Pick a region to open the map there.', k_how:'How it works', h_how:'From satellite imagery to distribution recommendations',
  p_how:'An exposure–sensitivity–adaptive capacity framework, combined with poverty and zakat distribution data.', k_story:'Impact stories', h_story:'From map to field', more:'More →',
  cta_band_t:'Your zakat, straight to the areas that need it most', cta_band_p:'Choose "Prioritise the most vulnerable areas" and partner institutions will distribute according to the priority map.',
  map_ctrl:'Layers & Filters', lvl:'Administrative level', layer:'Data layer', f_region:'Region', f_hazard:'Climate hazard type', f_asnaf:'Asnaf category', f_scen:'Year / projection scenario'};
const ID = {};
$$('[data-i18n]').forEach(el => ID[el.dataset.i18n] = el.textContent);
$$('[data-i18n-html]').forEach(el => ID[el.dataset.i18nHtml] = el.innerHTML);
let lang = 'id';
$('#langBtn').onclick = () => {
  lang = lang === 'id' ? 'en' : 'id'; const D = lang === 'en' ? EN : ID;
  $$('[data-i18n]').forEach(el => { const v = D[el.dataset.i18n]; if (v) el.textContent = v; });
  $$('[data-i18n-html]').forEach(el => { const v = D[el.dataset.i18nHtml]; if (v) el.innerHTML = v; });
  document.documentElement.lang = lang; $('#langBtn').innerHTML = lang==='id' ? '<b>ID</b> | EN' : 'ID | <b>EN</b>';
  toast(lang==='en' ? 'English (navigation & key text) — full translation in production' : 'Bahasa Indonesia');
};
$('#langBtn').innerHTML = '<b>ID</b> | EN';

/* init */
try { const t = localStorage.getItem('gzc-theme'); if (t) document.documentElement.dataset.theme = t; } catch(e){}
renderHome();
setupMapControls();
route();
})();
