"""Bangun data prototipe GeoZakat-Climate.
- Menyederhanakan GeoJSON 34 provinsi (BAKOSURTANAL/Dukcapil, via GitHub ans-4175)
- Membuat data dummy realistis tingkat provinsi & ±30 kabupaten/kota
- Skor kerentanan = 0.40*Bahaya(Exposure) + 0.35*Kemiskinan(Sensitivity) + 0.25*(100-Adaptasi)
Cara pakai (dari root repo):
  pip install shapely
  curl -L -o scripts/indonesia-prov.geojson https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson
  python scripts/build_data.py
Output: data/wilayah.js
"""
import json, random, math, os
from shapely.geometry import shape, mapping

random.seed(2026)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAMA = {
 'DI. ACEH':'Aceh','SUMATERA UTARA':'Sumatera Utara','SUMATERA BARAT':'Sumatera Barat','RIAU':'Riau',
 'KEPULAUAN RIAU':'Kepulauan Riau','JAMBI':'Jambi','SUMATERA SELATAN':'Sumatera Selatan','BANGKA BELITUNG':'Kep. Bangka Belitung',
 'BENGKULU':'Bengkulu','LAMPUNG':'Lampung','DKI JAKARTA':'DKI Jakarta','JAWA BARAT':'Jawa Barat','BANTEN':'Banten',
 'JAWA TENGAH':'Jawa Tengah','DAERAH ISTIMEWA YOGYAKARTA':'DI Yogyakarta','JAWA TIMUR':'Jawa Timur','BALI':'Bali',
 'NUSATENGGARA BARAT':'Nusa Tenggara Barat','NUSA TENGGARA TIMUR':'Nusa Tenggara Timur','KALIMANTAN BARAT':'Kalimantan Barat',
 'KALIMANTAN TENGAH':'Kalimantan Tengah','KALIMANTAN SELATAN':'Kalimantan Selatan','KALIMANTAN TIMUR':'Kalimantan Timur',
 'KALIMANTAN UTARA':'Kalimantan Utara','SULAWESI UTARA':'Sulawesi Utara','GORONTALO':'Gorontalo','SULAWESI TENGAH':'Sulawesi Tengah',
 'SULAWESI BARAT':'Sulawesi Barat','SULAWESI SELATAN':'Sulawesi Selatan','SULAWESI TENGGARA':'Sulawesi Tenggara',
 'MALUKU':'Maluku','MALUKU UTARA':'Maluku Utara','PAPUA BARAT':'Papua Barat','PAPUA':'Papua'}
# Kode BPS provinsi yang benar (file sumber menukar Maluku/Maluku Utara & Papua)
KODE = {'Aceh':11,'Sumatera Utara':12,'Sumatera Barat':13,'Riau':14,'Jambi':15,'Sumatera Selatan':16,'Bengkulu':17,'Lampung':18,
 'Kep. Bangka Belitung':19,'Kepulauan Riau':21,'DKI Jakarta':31,'Jawa Barat':32,'Jawa Tengah':33,'DI Yogyakarta':34,'Jawa Timur':35,
 'Banten':36,'Bali':51,'Nusa Tenggara Barat':52,'Nusa Tenggara Timur':53,'Kalimantan Barat':61,'Kalimantan Tengah':62,
 'Kalimantan Selatan':63,'Kalimantan Timur':64,'Kalimantan Utara':65,'Sulawesi Utara':71,'Sulawesi Tengah':72,'Sulawesi Selatan':73,
 'Sulawesi Tenggara':74,'Gorontalo':75,'Sulawesi Barat':76,'Maluku':81,'Maluku Utara':82,'Papua Barat':91,'Papua':94}
PULAU = {}
for n in ['Aceh','Sumatera Utara','Sumatera Barat','Riau','Kepulauan Riau','Jambi','Sumatera Selatan','Kep. Bangka Belitung','Bengkulu','Lampung']: PULAU[n]='Sumatera'
for n in ['DKI Jakarta','Jawa Barat','Banten','Jawa Tengah','DI Yogyakarta','Jawa Timur']: PULAU[n]='Jawa'
for n in ['Bali','Nusa Tenggara Barat','Nusa Tenggara Timur']: PULAU[n]='Bali & Nusa Tenggara'
for n in ['Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara']: PULAU[n]='Kalimantan'
for n in ['Sulawesi Utara','Gorontalo','Sulawesi Tengah','Sulawesi Barat','Sulawesi Selatan','Sulawesi Tenggara']: PULAU[n]='Sulawesi'
for n in ['Maluku','Maluku Utara','Papua Barat','Papua']: PULAU[n]='Maluku & Papua'

# Profil dummy provinsi: (bahaya, kemiskinan, adaptasi, bahaya_utama, populasi_terdampak, zakat_tersalurkan_juta)
PROF = {
 'Aceh':(68,62,44,'banjir',412000,38500),'Sumatera Utara':(61,48,52,'banjir',530000,41200),'Sumatera Barat':(58,40,57,'banjir',268000,29800),
 'Riau':(52,36,60,'banjir',214000,31500),'Kepulauan Riau':(47,30,66,'rob',96000,12400),'Jambi':(55,42,51,'banjir',188000,15200),
 'Sumatera Selatan':(60,50,48,'kekeringan',402000,27600),'Kep. Bangka Belitung':(45,26,62,'rob',71000,8100),'Bengkulu':(57,55,45,'banjir',144000,9800),
 'Lampung':(59,52,47,'banjir',366000,22300),'DKI Jakarta':(74,22,78,'rob',610000,118000),'Jawa Barat':(70,45,58,'banjir',1520000,152000),
 'Banten':(64,40,55,'banjir',488000,46800),'Jawa Tengah':(78,52,54,'rob',1340000,121500),'DI Yogyakarta':(57,56,63,'kekeringan',176000,24600),
 'Jawa Timur':(72,54,55,'kekeringan',1460000,138700),'Bali':(42,22,70,'kekeringan',62000,14100),'Nusa Tenggara Barat':(71,66,42,'kekeringan',448000,26900),
 'Nusa Tenggara Timur':(80,84,30,'kekeringan',812000,21700),'Kalimantan Barat':(63,46,46,'banjir',298000,17500),'Kalimantan Tengah':(66,40,44,'banjir',204000,11200),
 'Kalimantan Selatan':(69,34,52,'banjir',312000,24800),'Kalimantan Timur':(54,30,60,'banjir',158000,23300),'Kalimantan Utara':(50,38,48,'banjir',52000,4200),
 'Sulawesi Utara':(49,36,58,'banjir',98000,9600),'Gorontalo':(62,68,41,'banjir',121000,6100),'Sulawesi Tengah':(70,60,40,'banjir',264000,12800),
 'Sulawesi Barat':(61,58,37,'banjir',118000,4900),'Sulawesi Selatan':(66,44,54,'kekeringan',502000,43100),'Sulawesi Tenggara':(58,54,43,'kekeringan',176000,9300),
 'Maluku':(64,74,34,'rob',214000,6700),'Maluku Utara':(56,48,38,'rob',88000,4300),'Papua Barat':(60,82,28,'rob',138000,3900),'Papua':(66,90,22,'rob',386000,5200),
}
ASNAF = ['fakir','miskin','gharimin','ibnu sabil']
LIVELI = {'banjir':'petani padi & buruh tani','kekeringan':'petani lahan kering & peternak','rob':'nelayan & petambak'}

def skor(b,k,a):
    return round(0.40*b + 0.35*k + 0.25*(100-a), 1)

def trend(final):
    s = final - random.uniform(6,12); out=[]
    for y in range(2019,2026):
        out.append(round(s,1)); s += (final-s)/(2026-y) + random.uniform(-1.2,1.2)
    out[-1]=final; return out

def proj(b, hazard):
    # multiplier skenario iklim (dummy): SSP2-4.5 & SSP5-8.5 tahun 2030/2045
    f = {'rob':1.0,'banjir':0.8,'kekeringan':0.9}[hazard]
    return {'2030-ssp245': round(min(100,b*(1+0.06*f)),1),'2030-ssp585': round(min(100,b*(1+0.10*f)),1),
            '2045-ssp245': round(min(100,b*(1+0.11*f)),1),'2045-ssp585': round(min(100,b*(1+0.19*f)),1)}

# --- Geometri provinsi ---
src = json.load(open(os.path.join(ROOT,'scripts','indonesia-prov.geojson')))
feats=[]; provs=[]
def rnd(o):
    if isinstance(o,(list,tuple)):
        if o and isinstance(o[0],(int,float)): return [round(o[0],3),round(o[1],3)]
        return [rnd(x) for x in o]
    return o
for f in src['features']:
    nama = NAMA[f['properties']['Propinsi']]
    g = shape(f['geometry']).buffer(0).simplify(0.035, preserve_topology=True)
    # buang pulau sangat kecil agar ringan
    if g.geom_type=='MultiPolygon':
        from shapely.geometry import MultiPolygon
        parts=[p for p in g.geoms if p.area>0.004] or [max(g.geoms,key=lambda p:p.area)]
        g = MultiPolygon(parts) if len(parts)>1 else parts[0]
    kode = KODE[nama]
    feats.append({'type':'Feature','properties':{'kode':str(kode)},'geometry':rnd(mapping(g))})
    b,k,a,hz,pop,zk = PROF[nama]
    c = g.representative_point()
    provs.append({'kode_wilayah':str(kode),'nama':nama,'tingkat':'provinsi','pulau':PULAU[nama],
      'skor_bahaya':b,'skor_kemiskinan':k,'skor_adaptasi':a,'skor_kerentanan':skor(b,k,a),
      'bahaya_utama':hz,'populasi_terdampak':pop,'zakat_tersalurkan':zk*1_000_000,
      'asnaf_dominan':'fakir' if k>=70 else 'miskin','lat':round(c.y,3),'lng':round(c.x,3),
      'tren':None,'proyeksi':proj(b,hz)})
for p in provs: p['tren']=trend(p['skor_kerentanan'])

# --- ±30 kabupaten/kota contoh ---
KAB = [
 ('3321','Kab. Demak','Jawa Tengah',-6.89,110.64,'rob',88,58,46,96500,2.9),
 ('3375','Kota Pekalongan','Jawa Tengah',-6.89,109.67,'rob',85,44,55,54200,1.8),
 ('3212','Kab. Indramayu','Jawa Barat',-6.33,108.32,'kekeringan',79,57,48,118400,4.1),
 ('3215','Kab. Karawang','Jawa Barat',-6.30,107.30,'banjir',76,42,56,87300,5.2),
 ('3204','Kab. Bandung','Jawa Barat',-7.02,107.53,'banjir',72,40,60,64800,6.0),
 ('3205','Kab. Garut','Jawa Barat',-7.22,107.90,'kekeringan',68,60,47,92100,3.6),
 ('3403','Kab. Gunungkidul','DI Yogyakarta',-7.98,110.60,'kekeringan',74,63,52,71500,3.3),
 ('3315','Kab. Grobogan','Jawa Tengah',-7.10,110.90,'kekeringan',73,59,49,83900,2.7),
 ('3524','Kab. Lamongan','Jawa Timur',-7.12,112.33,'banjir',75,55,53,76400,3.0),
 ('3527','Kab. Sampang','Jawa Timur',-7.05,113.25,'kekeringan',77,72,39,102300,1.6),
 ('3522','Kab. Bojonegoro','Jawa Timur',-7.25,111.88,'banjir',74,56,51,81200,3.4),
 ('3602','Kab. Lebak','Banten',-6.56,106.25,'banjir',69,58,45,73800,2.2),
 ('3172','Kota Jakarta Utara','DKI Jakarta',-6.13,106.88,'rob',86,30,72,141000,9.8),
 ('1108','Kab. Aceh Utara','Aceh',5.00,97.20,'banjir',78,66,41,88700,2.5),
 ('1205','Kab. Langkat','Sumatera Utara',3.75,98.30,'banjir',71,51,48,67200,2.1),
 ('1305','Kab. Padang Pariaman','Sumatera Barat',-0.60,100.25,'banjir',66,44,55,39800,1.9),
 ('1602','Kab. Ogan Komering Ilir','Sumatera Selatan',-3.40,105.50,'kekeringan',72,56,42,79600,1.7),
 ('1805','Kab. Tulang Bawang','Lampung',-4.40,105.40,'banjir',67,54,44,48300,1.2),
 ('6303','Kab. Banjar','Kalimantan Selatan',-3.32,114.99,'banjir',80,38,50,91800,2.6),
 ('6203','Kab. Kapuas','Kalimantan Tengah',-2.00,114.40,'banjir',74,46,40,52700,1.1),
 ('6101','Kab. Sambas','Kalimantan Barat',1.36,109.30,'rob',70,50,43,46900,1.3),
 ('5206','Kab. Bima','Nusa Tenggara Barat',-8.50,118.60,'kekeringan',79,70,38,84100,1.4),
 ('5302','Kab. Sumba Timur','Nusa Tenggara Timur',-9.90,120.20,'kekeringan',86,88,26,98400,0.6),
 ('5301','Kab. Kupang','Nusa Tenggara Timur',-10.00,123.90,'kekeringan',84,82,30,89200,0.8),
 ('5321','Kab. Malaka','Nusa Tenggara Timur',-9.55,124.90,'banjir',81,86,27,58600,0.4),
 ('7322','Kab. Luwu Utara','Sulawesi Selatan',-2.60,120.20,'banjir',77,52,46,51300,1.0),
 ('7304','Kab. Jeneponto','Sulawesi Selatan',-5.60,119.70,'kekeringan',75,64,41,60800,0.9),
 ('7310','Kab. Sigi','Sulawesi Tengah',-1.40,119.97,'banjir',76,62,39,49500,0.7),
 ('8101','Kab. Maluku Tengah','Maluku',-3.30,129.00,'rob',72,76,32,63400,0.5),
 ('9416','Kab. Asmat','Papua',-5.50,138.40,'rob',78,92,18,47200,0.3),
]
kab=[]
for kd,nm,pv,la,lo,hz,b,k,a,pop,zk in KAB:
    s=skor(b,k,a)
    kab.append({'kode_wilayah':kd,'nama':nm,'tingkat':'kabupaten','provinsi':nm and pv,'kode_provinsi':str(KODE[pv]),
      'skor_bahaya':b,'skor_kemiskinan':k,'skor_adaptasi':a,'skor_kerentanan':s,'bahaya_utama':hz,
      'populasi_terdampak':pop,'zakat_tersalurkan':int(zk*1_000_000_000),
      'asnaf_dominan':'fakir' if k>=75 else ('gharimin' if hz=='rob' and k<50 else 'miskin'),
      'mata_pencaharian':LIVELI[hz],'lat':la,'lng':lo,'tren':trend(s),'proyeksi':proj(b,hz),
      'komposisi_asnaf':None})
for r in kab+provs:
    f = 0.30+ r['skor_kemiskinan']/250
    m = round(random.uniform(0.30,0.42),2)
    g = round(random.uniform(0.06,0.14),2)
    ib = round(random.uniform(0.02,0.05),2)
    fk = round(max(0.05, 1-m-g-ib),2)
    r['komposisi_asnaf']={'fakir':fk,'miskin':m,'gharimin':g,'ibnu sabil':ib}

pemb = {'bahaya':'2026-10-15','kemiskinan':'2026-09-30','adaptasi':'2026-08-31','gabungan':'2026-10-20','zakat':'2026-10-31'}
js = ('/* GeoZakat-Climate · data wilayah (DATA CONTOH) — dihasilkan oleh scripts/build_data.py */\n'
      'window.DATA = {\n  pembaruan: ' + json.dumps(pemb) + ',\n  provinsi: ' + json.dumps(provs, ensure_ascii=False, indent=1) +
      ',\n  kabupaten: ' + json.dumps(kab, ensure_ascii=False, indent=1) +
      ',\n  geo: ' + json.dumps({'type':'FeatureCollection','features':feats}, separators=(',',':')) + '\n};\n')
open(os.path.join(ROOT,'data','wilayah.js'),'w').write(js)
print('geo bytes', len(json.dumps(feats,separators=(',',':'))))
top = sorted(kab,key=lambda r:-r['skor_kerentanan'])[:8]
for r in top: print(r['nama'], r['skor_kerentanan'])
print(sorted([(p['skor_kerentanan'],p['nama']) for p in provs])[-5:])
