# WashClub — Landing Page Wireframe
**Versi:** 2.0  
**Tanggal:** Juli 2026  
**Format:** Text-based wireframe (ASCII)  
**Viewport:** Desktop 1280px + Mobile 375px

---

> **Simbol:**  
> `[ ]` = elemen / komponen  
> `[img]` = gambar / ilustrasi placeholder  
> `[btn]` = tombol  
> `░░░` = background berbeda  
> `───` = garis pemisah / divider  
> `↓` = urutan / alur  

---

## NAVBAR

**Tujuan:** Titik navigasi utama yang selalu terlihat. Sticky saat di-scroll. Glassmorphism saat user sudah scroll ke bawah. CTA "Mulai Berlangganan" harus selalu terlihat di setiap posisi scroll.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║  [logo washclub-logo.png]    Beranda  Paket  FAQ  Hubungi   [btn: Mulai Berlangganan ▶]  ║
╚══════════════════════════════════════════════════════════════════════════╝
   ↑ position: fixed | backdrop-filter: blur saat scrolled

MOBILE:
╔══════════════════════════╗
║  [logo icon]      [☰]   ║
╚══════════════════════════╝
  ↓ saat [☰] diklik:
╔══════════════════════════╗
║  Beranda                 ║
║  Paket                   ║
║  FAQ                     ║
║  Hubungi Kami            ║
║  ─────────────────────   ║
║  [btn: Mulai Berlangganan] ║
╚══════════════════════════╝
```

**Catatan implementasi:**
- Transparent on top → glassmorphism setelah scroll 50px
- Mobile menu: slide down atau fade in dari atas
- Logo klik → scroll ke #beranda
- Active state pada link sesuai section yang sedang di-view

---

---

## SECTION 01 — HERO

**Tujuan:** Menyampaikan inti nilai produk dalam 3 detik pertama. Visitor harus langsung mengerti "ini layanan apa" dan "ini untuk siapa" sebelum melakukan scroll. Dua CTA memberi pilihan: langsung daftar atau eksplorasi dulu.

**Conversion goal:** Klik "Mulai Berlangganan" atau scroll ke bawah untuk belajar lebih.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░                                                                        ░║
║░   [LEFT COLUMN — 55%]                    [RIGHT COLUMN — 45%]          ░║
║░                                                                        ░║
║░   overline:                              [img: hero-mockup-main.svg    ░║
║░   ✦ Laundry Berlangganan Otomatis        Smartphone dengan              ░║
║░                                          jadwal pickup WashClub         ░║
║░   H1:                                    floating cards di sekitarnya:  ░║
║░   Laundry yang                           ┌─────────────────┐            ░║
║░   Jalan Sendiri.                         │ ✓ Pickup Hari ini│            ░║
║░                                          └─────────────────┘            ░║
║░   body:                                  ┌─────────────────┐            ░║
║░   Atur jadwal sekali.                    │ 🔄 Proses 60%   │            ░║
║░   WashClub jemput, cuci, dan             └─────────────────┘            ░║
║░   antar balik setiap minggu —            ┌─────────────────┐            ░║
║░   otomatis.                              │ 🚗 Dalam Perjalanan│         ░║
║░                                          └─────────────────┘            ░║
║░   [btn-primary: Mulai Berlangganan]                                     ░║
║░   [btn-secondary: Lihat Paket →]                                        ░║
║░                                                                         ░║
║░   ✓ Gratis antar jemput                                                ░║
║░   ✓ Mulai Rp99.000/bulan                                               ░║
║░   ✓ Bisa batal kapan saja                                              ░║
║░                                                                        ░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║                  [↓ scroll indicator — anim bounce]                      ║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE:
╔══════════════════════════╗
║░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░                         ░║
║░  overline:              ░║
║░  ✦ Laundry Otomatis     ░║
║░                         ░║
║░  Laundry yang           ░║
║░  Jalan Sendiri.         ░║
║░                         ░║
║░  Atur jadwal sekali.    ░║
║░  Kami yang urus         ░║
║░  sisanya, otomatis.     ░║
║░                         ░║
║░  [btn: Mulai Berlangganan] ░║
║░  [btn-outline: Lihat Paket]░║
║░                         ░║
║░  ✓ Gratis antar jemput  ░║
║░  ✓ Mulai Rp99.000/bln   ░║
║░                         ░║
║░  [img: hero-mockup      ░║
║░   smartphone, centered] ░║
║░                         ░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--gradient-bg` (putih → biru sangat muda)
- Blob gradient di belakang ilustrasi: `misc/blob-gradient.svg`
- Dot pattern overlay: `misc/pattern-dots.svg` opacity 8%
- H1: `text-display`, max 4 kata per baris
- Ilustrasi: animasi float `anim-float` 4.5s loop
- Trust badges: `icon-sm icon-success` + teks

---

---

## SECTION 02 — PROBLEM

**Tujuan:** Membangun empati dengan menunjukkan bahwa WashClub memahami frustrasi nyata yang dialami target audience. Setiap kartu adalah cermin — visitor harus mengangguk dan berkata "iya, ini masalahku." Section ini membuat visitor merasa *dimengerti* sebelum ditawarkan solusi.

**Conversion goal:** Visitor mengidentifikasi minimal satu pain point → terdorong untuk terus scroll.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║                   overline: Masalahnya                                   ║
║                                                                          ║
║            H2: Masih repot sama laundry setiap minggu?                   ║
║                                                                          ║
║     subheadline: Kamu bukan sendirian. Hampir semua orang                ║
║                  urban punya masalah yang sama.                          ║
║                                                                          ║
║  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐  ║
║  │  [icon      │ │  [icon      │ │  [icon      │ │  [icon      │ │  [icon      │  ║
║  │   clock]    │ │   chat]     │ │   cal-x]    │ │   layers]   │ │   wallet]   │  ║
║  │             │ │             │ │             │ │             │ │             │  ║
║  │  Tidak ada  │ │  Harus      │ │  Lupa       │ │  Laundry    │ │  Biaya      │  ║
║  │  waktu      │ │  chat ulang │ │  jadwal     │ │  numpuk     │ │  tidak      │  ║
║  │             │ │             │ │             │ │             │ │  terkontrol │  ║
║  │  Pulang     │ │  Setiap     │ │  Tidak ada  │ │  Ditunda    │ │  Bayar per  │  ║
║  │  kerja      │ │  minggu     │ │  reminder   │ │  terus,     │ │  kilo bikin │  ║
║  │  sudah      │ │  harus WA   │ │  otomatis.  │ │  tiba-tiba  │ │  pengeluaran│  ║
║  │  capek.     │ │  laundry.   │ │  Pakaian    │ │  menggunung.│ │  bulanan    │  ║
║  │             │ │             │ │  bersih     │ │             │ │  tidak      │  ║
║  │             │ │             │ │  tidak      │ │             │ │  jelas.     │  ║
║  │             │ │             │ │  pasti.     │ │             │ │             │  ║
║  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE (stack vertikal):
╔══════════════════════════╗
║                          ║
║  overline: Masalahnya    ║
║                          ║
║  Masih repot sama        ║
║  laundry setiap minggu?  ║
║                          ║
║  ┌──────────────────────┐║
║  │ [icon] Tidak ada     │║
║  │        waktu         │║
║  │ Pulang kerja         │║
║  │ sudah capek.         │║
║  └──────────────────────┘║
║  ┌──────────────────────┐║
║  │ [icon] Harus         │║
║  │        chat ulang    │║
║  └──────────────────────┘║
║  ... (3 kartu lagi)      ║
║                          ║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--clr-white` atau `--clr-gray-50`
- Grid: 5 kolom desktop, 2 kolom tablet, 1 kolom mobile
- Setiap kartu: `.card .card-pain` dengan `.icon-box .icon-box-danger`
- Ikon: merah ringan `rgba(239,68,68,.08)` — bukan biru — untuk menegaskan ini adalah "masalah"
- Animasi: `.reveal` stagger per kartu

---

---

## SECTION 03 — SOLUTION

**Tujuan:** Menjawab langsung semua pain point yang baru saja ditampilkan di section Problem. WashClub hadir sebagai solusi, bukan sekadar layanan. Section ini harus menciptakan momen "aha!" — visitor menyadari bahwa semua masalahnya bisa diselesaikan dengan satu solusi otomatis.

**Conversion goal:** Visitor merasa solusi ini relevan dan ingin tahu lebih lanjut → scroll ke Cara Kerja.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░                                                                        ░║
║░   [LEFT — 50%]                          [RIGHT — 50%]                  ░║
║░                                                                        ░║
║░   overline: ✦ Solusinya                 [img: solution-automation.svg  ░║
║░                                          3 cards connected by           ░║
║░   H2: WashClub hadir agar               curved gradient arrows:         ░║
║░   kamu tidak perlu                                                      ░║
║░   memikirkan laundry lagi.              ┌──────────────────┐            ░║
║░                                         │ 📱 Atur Jadwal    │            ░║
║░   subheadline:                          │    Sekali         │            ░║
║░   Sistem berlangganan yang              └────────┬─────────┘            ░║
║░   bekerja sendiri. Kamu                          │ ──→                  ░║
║░   cukup atur sekali —                   ┌────────▼─────────┐            ░║
║░   sisanya kami yang urus.               │ ✨ Auto Diproses  │            ░║
║░                                         └────────┬─────────┘            ░║
║░   ────────────────────────                       │ ──→                  ░║
║░                                         ┌────────▼─────────┐            ░║
║░   ✓ Jadwal otomatis                     │ 🚗 Diantar Balik  │            ░║
║░     Laundry dijemput sesuai             └──────────────────┘            ░║
║░     jadwal pilihanmu, setiap                                             ░║
║░     minggu, tanpa perlu apa-apa.                                        ░║
║░                                                                         ░║
║░   ✓ Biaya yang jelas                                                   ░║
║░     Satu tagihan per bulan.                                             ░║
║░     Tidak ada kejutan.                                                  ░║
║░                                                                         ░║
║░   ✓ Tanpa ribet sama sekali                                            ░║
║░     Tidak perlu chat, tidak                                             ░║
║░     perlu antre, tidak perlu                                            ░║
║░     keluar rumah.                                                       ░║
║░                                                                         ░║
║░   [btn-primary: Mulai Sekarang — Gratis Antar Jemput]                  ░║
║░                                                                        ░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE:
╔══════════════════════════╗
║░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░  overline: Solusinya    ░║
║░                         ░║
║░  WashClub hadir agar    ░║
║░  kamu tidak perlu       ░║
║░  memikirkan laundry     ░║
║░  lagi.                  ░║
║░                         ░║
║░  ✓ Jadwal otomatis      ░║
║░  ✓ Biaya yang jelas     ░║
║░  ✓ Tanpa ribet          ░║
║░                         ░║
║░  [img: solution loop]   ░║
║░                         ░║
║░  [btn: Mulai Sekarang]  ░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--gradient-bg` — berbeda dari section sebelumnya
- Solution points: list dengan `icon-check-circle` warna `--clr-primary`
- Ilustrasi: 3 floating cards connected by curved arrows
- CTA: `.btn-primary .btn-lg`

---

## SECTION 04 — HOW IT WORKS

**Tujuan:** Menjelaskan mekanisme produk secara visual dan sederhana dalam 3 langkah. Mengurangi anxiety calon pelanggan yang bertanya "ribet tidak ya daftarnya?" Nomor besar sebagai elemen visual yang kuat — menunjukkan betapa mudahnya prosesnya.

**Conversion goal:** Visitor memahami bahwa mendaftar sangat mudah → percaya diri untuk klik CTA.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║                    overline: Cara Kerja                                  ║
║                   H2: Tiga langkah, selesai.                             ║
║          sub: Tidak perlu install app. Langsung jalan.                   ║
║                                                                          ║
║   ┌──────────────────────┐  ────────→  ┌──────────────────────┐  ────────→  ┌──────────────────────┐  ║
║   │                   01 │             │                   02 │             │                   03 │  ║
║   │  [icon: list-check]  │             │  [icon: cal-clock]   │             │  [icon: refresh-auto]│  ║
║   │                      │             │                      │             │                      │  ║
║   │  Pilih Paket         │             │  Tentukan Jadwal     │             │  Laundry Berjalan    │  ║
║   │                      │             │                      │             │  Otomatis            │  ║
║   │  Solo, Couple, atau  │             │  Pilih hari dan jam  │             │  Setiap minggu kami  │  ║
║   │  Family — pilih yang │             │  pickup yang paling  │             │  datang, cuci, dan   │  ║
║   │  pas buat            │             │  cocok buat kamu.    │             │  antar balik ke kamu.│  ║
║   │  kebutuhanmu.        │             │                      │             │  Tanpa chat.         │  ║
║   │                      │             │                      │             │                      │  ║
║   └──────────────────────┘             └──────────────────────┘             └──────────────────────┘  ║
║                                                                          ║
║                        [btn-ghost: Lihat Semua Paket →]                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE (vertical stepper):
╔══════════════════════════╗
║  overline: Cara Kerja    ║
║  Tiga langkah, selesai.  ║
║                          ║
║  ┌──────────────────────┐║
║  │ 01  [icon]           │║
║  │ Pilih Paket          │║
║  │ Solo, Couple,        │║
║  │ atau Family.         │║
║  └──────────┬───────────┘║
║             ↓            ║
║  ┌──────────────────────┐║
║  │ 02  [icon]           │║
║  │ Tentukan Jadwal      │║
║  │ Pilih hari dan       │║
║  │ jam pickup.          │║
║  └──────────┬───────────┘║
║             ↓            ║
║  ┌──────────────────────┐║
║  │ 03  [icon]           │║
║  │ Laundry Otomatis     │║
║  │ Kami yang urus       │║
║  │ seterusnya.          │║
║  └──────────────────────┘║
║                          ║
║  [btn: Lihat Semua Paket]║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--clr-white`
- Setiap step: `.card .card-step` dengan `.card-step-number` sebagai dekorasi besar
- Nomor (01, 02, 03): sangat besar, warna `--clr-primary-light` sebagai background dekorasi
- Connector arrow: hanya tampil di desktop, `--clr-primary` dengan opacity 30%
- Ikon step: `icon-2xl` — ukuran terbesar

---

---

## SECTION 05 — SUBSCRIPTION PLANS

**Tujuan:** Menampilkan semua opsi harga secara transparan dan mudah dibandingkan. Tidak ada ambiguitas harga. Couple Pack di-highlight sebagai "Paling Populer" untuk memberikan social proof dan mengarahkan pilihan tanpa memaksa. Setiap kartu harus menjawab "ini cocok untuk siapa dan apa yang saya dapat."

**Conversion goal:** Visitor memilih paket dan klik CTA langsung ke pendaftaran.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░                                                                        ░║
║░                    overline: Paket                                     ░║
║░              H2: Pilih paket yang pas buat kamu.                       ░║
║░    sub: Semua paket sudah termasuk gratis antar jemput                 ░║
║░         dan jadwal pickup otomatis setiap minggu.                      ░║
║░                                                                        ░║
║░  ┌──────────────────┐   ┌────────────────────────┐   ┌──────────────────┐  ░║
║░  │                  │   │   ★ Paling Populer ★   │   │                  │  ░║
║░  │  Solo Pocket     │   │   Couple Pack          │   │  Family Pack     │  ░║
║░  │                  │   │                        │   │                  │  ░║
║░  │  Pas buat yang   │   │   Solusi terbaik       │   │  Untuk keluarga  │  ░║
║░  │  tinggal sendiri.│   │   untuk berdua.        │   │  yang aktif.     │  ░║
║░  │                  │   │                        │   │                  │  ░║
║░  │  Rp99.000        │   │   Rp179.000            │   │  Rp329.000       │  ░║
║░  │  /bulan          │   │   /bulan               │   │  /bulan          │  ░║
║░  │                  │   │                        │   │                  │  ░║
║░  │  ─────────────   │   │   ─────────────────    │   │  ─────────────   │  ░║
║░  │                  │   │                        │   │                  │  ░║
║░  │  ✓ 10kg/bulan    │   │   ✓ 20kg/bulan         │   │  ✓ 40kg/bulan    │  ░║
║░  │  ✓ 4x pickup     │   │   ✓ 4x pickup          │   │  ✓ 4x pickup     │  ░║
║░  │  ✓ Gratis A/J    │   │   ✓ Gratis A/J         │   │  ✓ Gratis A/J    │  ░║
║░  │  ✓ Selesai 3 hr  │   │   ✓ Selesai 3 hr       │   │  ✓ Prioritas 48h │  ░║
║░  │  ✓ Jadwal otomatis│  │   ✓ Jadwal otomatis    │   │  ✓ Jadwal otomatis│  ░║
║░  │                   │  │   ✓ Hemat vs 2 Solo    │   │  ✓ Kapasitas max │  ░║
║░  │                   │  │                        │   │                  │  ░║
║░  │  [btn: Pilih]    │   │   [btn-primary: Pilih] │   │  [btn: Pilih]    │  ░║
║░  └──────────────────┘   └────────────────────────┘   └──────────────────┘  ░║
║░                         ↑ border biru, scale 1.03                      ░║
║░                                                                         ░║
║░   ℹ Semua harga sudah termasuk PPN. Tidak ada biaya tersembunyi.       ░║
║░     Bisa batal kapan saja — tanpa penalti.                             ░║
║░                                                                        ░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE (vertical stack — popular first):
╔══════════════════════════╗
║░  overline: Paket        ░║
║░  Pilih paket yang       ░║
║░  pas buat kamu.         ░║
║░                         ░║
║░  ╔══════════════════╗   ░║
║░  ║ ★ Paling Populer ║   ░║  ← tampil pertama
║░  ║ Couple Pack      ║   ░║
║░  ║ Rp179.000/bulan  ║   ░║
║░  ║ ✓ 20kg           ║   ░║
║░  ║ ...              ║   ░║
║░  ║ [btn: Pilih]     ║   ░║
║░  ╚══════════════════╝   ░║
║░                         ░║
║░  ┌──────────────────┐   ░║
║░  │ Solo Pocket      │   ░║
║░  │ Rp99.000/bulan   │   ░║
║░  │ [btn: Pilih]     │   ░║
║░  └──────────────────┘   ░║
║░  ┌──────────────────┐   ░║
║░  │ Family Pack      │   ░║
║░  │ Rp329.000/bulan  │   ░║
║░  │ [btn: Pilih]     │   ░║
║░  └──────────────────┘   ░║
║░                         ░║
║░  ℹ Bisa batal kapan     ░║
║░    saja.                ░║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--gradient-bg` untuk visual kontras
- Couple Pack: `.card-pricing.popular` → border `--clr-primary`, `transform: scale(1.03)` desktop
- Badge populer: `.badge-popular` dengan `anim-pulse`
- CTA pada Couple Pack: `.btn-primary`
- CTA pada Solo & Family: `.btn-secondary`
- Harga: `card-pricing-price` ukuran `--fs-5xl`

---

## SECTION 06 — ADDITIONAL SERVICES

**Tujuan:** Menunjukkan fleksibilitas WashClub di luar paket inti. Visitor yang punya kebutuhan spesifik (pakaian delicate, sprei, butuh cepat) dapat melihat bahwa layanan ini sudah tersedia. Section ini juga memperlihatkan kedalaman produk dan meningkatkan perceived value.

**Conversion goal:** Memperkuat keputusan untuk berlangganan karena semua kebutuhan terlayani.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║                    overline: Add-on                                      ║
║               H2: Butuh lebih? Kami siapkan.                             ║
║      sub: Tambahkan layanan ekstra kapan saja sesuai kebutuhanmu.        ║
║                                                                          ║
║  ┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐  ║
║  │ [+] Extra Load        │   │ [⚡] Express Pass      │   │ [👕] Delicate Care    │  ║
║  │ Rp10.000/kg           │   │ +Rp5.000/kg           │   │ Mulai Rp20.000/item   │  ║
║  │ Cucian melebihi       │   │ Butuh lebih cepat?    │   │ Pakaian berbahan      │  ║
║  │ kuota? Tambah tanpa   │   │ Laundry selesai       │   │ sensitif dan premium. │  ║
║  │ masalah.              │   │ lebih awal.           │   │                       │  ║
║  └───────────────────────┘   └───────────────────────┘   └───────────────────────┘  ║
║  ┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐  ║
║  │ [🏠] Home Care        │   │ [~] Iron Only         │   │ [💧] One Time Wash    │  ║
║  │ Mulai Rp35.000/item   │   │ Rp7.000/kg            │   │ Rp12.000/kg           │  ║
║  │ Sprei, selimut,       │   │ Hanya butuh           │   │ Tidak mau             │  ║
║  │ sarung bantal —       │   │ disetrika? Tanpa      │   │ berlangganan dulu?    │  ║
║  │ bersih dan segar.     │   │ dicuci ulang.         │   │ Cuci satuan tersedia. │  ║
║  └───────────────────────┘   └───────────────────────┘   └───────────────────────┘  ║
║                                                                          ║
║                    [btn-secondary: Tanya via WhatsApp →]                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--clr-white`
- Grid: 3×2 desktop, 2×3 tablet, 1×6 mobile
- Setiap kartu: `.card-addon` dengan `.card-addon-icon`
- Harga: warna `--clr-primary`, weight semibold
- CTA: WhatsApp link dengan prefilled text

---

---

## SECTION 07 — WHY WASHCLUB

**Tujuan:** Membangun kepercayaan dan memperkuat diferensiasi. Berbeda dari section Solution yang berfokus pada "apa yang diselesaikan," section ini berfokus pada "keunggulan konkret yang kamu dapatkan." Ini adalah argumen logis yang mendukung keputusan emosional yang sudah mulai terbentuk.

**Conversion goal:** Visitor semakin yakin bahwa WashClub adalah pilihan terbaik → siap konversi.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░                                                                        ░║
║░                   overline: Keunggulan                                 ░║
║░          H2: Kenapa ribuan pelanggan memilih WashClub?                 ░║
║░   sub: Lebih dari sekadar laundry. Ini tentang mendapatkan             ░║
║░        waktumu kembali.                                                ░║
║░                                                                        ░║
║░  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 ░║
║░  │ ┌──────────┐ │  │ ┌──────────┐ │  │ ┌──────────┐ │                 ░║
║░  │ │[icon:    │ │  │ │[icon:    │ │  │ │[icon:    │ │                 ░║
║░  │ │ truck]   │ │  │ │ gift]    │ │  │ │ banknote]│ │                 ░║
║░  │ └──────────┘ │  │ └──────────┘ │  │ └──────────┘ │                 ░║
║░  │ Pickup       │  │ Gratis       │  │ Biaya        │                 ░║
║░  │ Otomatis     │  │ Antar Jemput │  │ Bulanan Tetap│                 ░║
║░  │              │  │              │  │              │                 ░║
║░  │ Kami datang  │  │ Tidak ada    │  │ Satu tagihan │                 ░║
║░  │ sendiri      │  │ biaya        │  │ per bulan.   │                 ░║
║░  │ sesuai       │  │ tambahan     │  │ Tidak ada    │                 ░║
║░  │ jadwal.      │  │ pengiriman.  │  │ kejutan.     │                 ░║
║░  └──────────────┘  └──────────────┘  └──────────────┘                 ░║
║░  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 ░║
║░  │ ┌──────────┐ │  │ ┌──────────┐ │  │ ┌──────────┐ │                 ░║
║░  │ │[icon:zap]│ │  │ │[icon:    │ │  │ │[icon:    │ │                 ░║
║░  │ └──────────┘ │  │ │cal-check]│ │  │ │smartphone│ │                 ░║
║░  │ Express      │  │ └──────────┘ │  │ └──────────┘ │                 ░║
║░  │ Tersedia     │  │ Laundry      │  │ Mudah &      │                 ░║
║░  │              │  │ Terjadwal    │  │ Praktis      │                 ░║
║░  │ Butuh cepat? │  │              │  │              │                 ░║
║░  │ Pilih Express│  │ Jadwal rutin │  │ Daftar,      │                 ░║
║░  │ Pass.        │  │ memastikan   │  │ pilih jadwal,│                 ░║
║░  │              │  │ pakaian      │  │ selesai.     │                 ░║
║░  │              │  │ selalu siap. │  │              │                 ░║
║░  └──────────────┘  └──────────────┘  └──────────────┘                 ░║
║░                                                                        ░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
╚══════════════════════════════════════════════════════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--gradient-bg` (biru sangat muda) — berbeda dari section sebelumnya
- Grid: 3×2 desktop, 2×3 tablet, 1×6 mobile
- Setiap kartu: `.card .card-feature` dengan `.icon-box .icon-box-primary`
- Ikon: `icon-xl`, warna `--clr-primary`
- Hover: card lift `translateY(-4px)` + shadow biru

---

## SECTION 08 — FAQ

**Tujuan:** Menghilangkan keraguan dan keberatan terakhir sebelum konversi. Setiap pertanyaan di FAQ mewakili objection nyata calon pelanggan. Section ini juga mengurangi beban CS dengan menjawab pertanyaan repetitif secara self-service, 24/7.

**Conversion goal:** Visitor yang masih ragu mendapat jawaban → hambatan terakhir hilang → klik CTA.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║                      overline: FAQ                                       ║
║               H2: Pertanyaan yang sering ditanya.                        ║
║     sub: Masih ada yang kurang jelas? Chat langsung via WhatsApp.        ║
║                                                                          ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ▼  Bagaimana cara mulai berlangganan?                     [∧]      │  ← OPEN by default
║  │                                                                    │  ║
║  │    Pilih paket yang sesuai, tentukan jadwal pickup, dan kami       │  ║
║  │    langsung mulai dari minggu berikutnya. Tidak perlu install      │  ║
║  │    app. Cukup lewat website ini.                                   │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Apakah saya harus ada di rumah saat pickup?            [∨]      │  ← CLOSED
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Berapa lama laundry selesai?                           [∨]      │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Apakah bisa batal kapan saja?                          [∨]      │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Bagaimana jika cucian melebihi kuota?                  [∨]      │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Area mana saja yang dilayani?                          [∨]      │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Apakah pakaian saya aman?                              [∨]      │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║  ┌────────────────────────────────────────────────────────────────────┐  ║
║  │ ►  Bisakah saya ubah jadwal pickup?                       [∨]      │  ║
║  └────────────────────────────────────────────────────────────────────┘  ║
║                                                                          ║
║             Masih ada pertanyaan?   [btn-ghost: Chat dengan Kami →]      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--clr-white`
- Max-width konten: 720px (dipersempit untuk keterbacaan)
- Setiap item: `.faq-item` → open/close dengan Intersection Observer + JS
- Pertama secara default terbuka
- Chevron: `.faq-icon` rotate 180° saat open
- `aria-expanded` pada setiap trigger
- CTA bawah: link ke WhatsApp

---

---

## SECTION 09 — CTA (FINAL)

**Tujuan:** Tangkap konversi dari visitor yang sudah scroll sampai akhir. Mereka sudah membaca segalanya — problem, solution, cara kerja, harga, benefits, FAQ. Ini adalah penutup yang kuat. Background gelap menciptakan kontras visual yang tegas dan sinyal bahwa "ini momen untuk bertindak." Satu pesan, dua jalur (daftar atau tanya), tidak ada distraksi lain.

**Conversion goal:** Klik "Mulai Berlangganan" atau "Tanya via WhatsApp" → langsung ke pendaftaran atau chat CS.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
║▓                                                                        ▓║
║▓             [bg: --gradient-dark  #1E293B → #0F172A]                   ▓║
║▓           [dekorasi: confetti biru tipis + blob gradient]               ▓║
║▓                                                                         ▓║
║▓                    overline (putih, opacity 60%):                       ▓║
║▓                         Mulai Sekarang                                  ▓║
║▓                                                                         ▓║
║▓              H2 (putih, max 2 baris, text-display):                     ▓║
║▓            Mulai hidup tanpa memikirkan                                 ▓║
║▓                     laundry lagi.                                       ▓║
║▓                                                                         ▓║
║▓           subheadline (putih, opacity 70%):                             ▓║
║▓     Bergabung dan rasakan perbedaannya sejak minggu pertama.            ▓║
║▓                                                                         ▓║
║▓      body (putih, opacity 60%, --fs-sm):                                ▓║
║▓      Tidak perlu komitmen panjang. Tidak perlu kartu kredit.            ▓║
║▓      Cukup pilih paket, tentukan jadwal — selesai.                      ▓║
║▓                                                                         ▓║
║▓           [btn-white: Mulai Berlangganan]                               ▓║
║▓           [btn-outline-white: Tanya via WhatsApp  →]                   ▓║
║▓                                                                         ▓║
║▓         ✓ Gratis antar jemput                                           ▓║
║▓         ✓ Bisa batal kapan saja                                         ▓║
║▓         ✓ Harga transparan                                              ▓║
║▓         (trust badges — ikon putih, teks putih opacity 60%)             ▓║
║▓                                                                        ▓║
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE:
╔══════════════════════════╗
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
║▓  [bg: dark navy]        ▓║
║▓                         ▓║
║▓  Mulai Sekarang         ▓║
║▓                         ▓║
║▓  Mulai hidup tanpa      ▓║
║▓  memikirkan laundry     ▓║
║▓  lagi.                  ▓║
║▓                         ▓║
║▓  Bergabung dan          ▓║
║▓  rasakan perbedaannya   ▓║
║▓  sejak minggu pertama.  ▓║
║▓                         ▓║
║▓  [btn-white: Mulai]     ▓║
║▓  [btn-outline-white: WA]▓║
║▓                         ▓║
║▓  ✓ Gratis antar jemput  ▓║
║▓  ✓ Bisa batal kapan saja▓║
║▓  ✓ Harga transparan     ▓║
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--gradient-dark` (#1E293B → #0F172A)
- Dekorasi opsional: `cta/cta-hero-illustration.svg` — confetti biru sangat tipis
- Semua teks: `--clr-white`, subtext `opacity: 0.7`
- CTA primer: `.btn-white` → background putih, teks biru
- CTA sekunder: `.btn-outline-white` → border putih transparan
- Trust badges: `icon-sm icon-white` + teks putih opacity 0.6
- Section padding vertikal: `--space-32` (128px) — lebih besar dari section lain untuk kesan "impactful"
- Text-align: center

---

## SECTION 10 — FOOTER

**Tujuan:** Memberikan landing yang bersih setelah konversi, menyediakan navigasi sekunder untuk visitor yang ingin eksplorasi lebih jauh, dan menampilkan identitas brand di bagian paling akhir. Footer harus informatif tapi tidak ramai — 3 kolom cukup. Logo, sosial media, alamat, dan legal links semuanya ada tapi tidak berebut perhatian.

**Conversion goal:** Mempertahankan brand recall dan menyediakan akses mudah ke halaman legal, kontak, dan sosial media.

```
DESKTOP:
╔══════════════════════════════════════════════════════════════════════════╗
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
║▓  [bg: --clr-dark  #1E293B]                                             ▓║
║▓                                                                        ▓║
║▓  [KOLOM 1 — 35%]           [KOLOM 2 — 20%]    [KOLOM 3 — 25%]         ▓║
║▓                                                                        ▓║
║▓  [logo: washclub-white.png]  Layanan           Bantuan                 ▓║
║▓  max-height: 28px                                                      ▓║
║▓                             Cara Kerja         FAQ                     ▓║
║▓  Clean Clothes,             Paket              Hubungi Kami            ▓║
║▓  Better Days.               Langganan          Kebijakan Privasi       ▓║
║▓  (tagline, opacity 70%)                        Syarat & Ketentuan      ▓║
║▓                                                                        ▓║
║▓  WashClub adalah layanan                                               ▓║
║▓  laundry berlangganan otomatis                                         ▓║
║▓  untuk kehidupan urban yang                   Ikuti Kami              ▓║
║▓  lebih praktis.                                                        ▓║
║▓  (body-sm, opacity 50%)                       [ig icon]  [wa icon]    ▓║
║▓                                                                        ▓║
║▓  📍 [Alamat — isi kemudian]                                            ▓║
║▓  (opacity 50%, --fs-xs)                                                ▓║
║▓                                                                        ▓║
║▓  ─────────────────────────────────────────────────────────────────    ▓║
║▓  © 2026 WashClub. Semua hak dilindungi.                               ▓║
║▓  (--fs-xs, opacity 40%)                                               ▓║
║▓                                                                        ▓║
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
╚══════════════════════════════════════════════════════════════════════════╝

MOBILE:
╔══════════════════════════╗
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
║▓  [logo: washclub-white] ▓║
║▓  Clean Clothes,         ▓║
║▓  Better Days.           ▓║
║▓                         ▓║
║▓  WashClub adalah...     ▓║
║▓                         ▓║
║▓  Layanan                ▓║
║▓  · Cara Kerja           ▓║
║▓  · Paket                ▓║
║▓  · Langganan            ▓║
║▓                         ▓║
║▓  Bantuan                ▓║
║▓  · FAQ                  ▓║
║▓  · Hubungi Kami         ▓║
║▓  · Kebijakan Privasi    ▓║
║▓  · Syarat & Ketentuan   ▓║
║▓                         ▓║
║▓  [ig icon]  [wa icon]   ▓║
║▓                         ▓║
║▓  📍 Alamat...           ▓║
║▓  ─────────────────────  ▓║
║▓  © 2026 WashClub        ▓║
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
╚══════════════════════════╝
```

**Spesifikasi elemen:**
- Background: `--clr-dark` (#1E293B) — menyambung dari CTA section
- Logo: `washclub-white.png`, max-height 28px
- Semua teks: putih dengan berbagai opacity (70%, 50%, 40%)
- Link: putih opacity 60%, hover → putih opacity 100%
- Social icons: `icon-lg icon-white` dengan hover `color: --clr-secondary`
- Social links: `aria-label` wajib ada
- External links: `target="_blank" rel="noopener noreferrer"`
- Divider: `1px solid rgba(255,255,255,0.08)`
- Copyright: `--fs-xs`, opacity 40%

---

## FULL PAGE SCROLL SEQUENCE

```
┌─────────────────────────────────────────────┐
│  NAVBAR (fixed, always visible)             │
│  transparent → glassmorphism on scroll      │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  01. HERO                                   │
│  bg: gradient putih → biru muda             │
│  PURPOSE: Hook + 2 CTA                      │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  02. PROBLEM                                │
│  bg: white                                  │
│  PURPOSE: Empati + pain points              │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  03. SOLUTION                               │
│  bg: gradient biru muda                     │
│  PURPOSE: Aha moment + product intro        │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  04. HOW IT WORKS                           │
│  bg: white                                  │
│  PURPOSE: Reduce friction + clarity         │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  05. SUBSCRIPTION PLANS                     │
│  bg: gradient biru muda                     │
│  PURPOSE: Price comparison + conversion     │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  06. ADDITIONAL SERVICES                    │
│  bg: white                                  │
│  PURPOSE: Flexibility + upsell potential    │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  07. WHY WASHCLUB                           │
│  bg: gradient biru muda                     │
│  PURPOSE: Trust + differentiation           │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  08. FAQ                                    │
│  bg: white                                  │
│  PURPOSE: Remove last objections            │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  09. CTA FINAL                              │
│  bg: dark navy (#1E293B)                    │
│  PURPOSE: Final conversion push             │
└─────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────┐
│  10. FOOTER                                 │
│  bg: dark navy (sambung dari CTA)           │
│  PURPOSE: Brand anchor + secondary nav      │
└─────────────────────────────────────────────┘
```

**Pola background alternating:**
```
Section 01 Hero         →  Gradient biru muda  (soft)
Section 02 Problem      →  White               (contrast)
Section 03 Solution     →  Gradient biru muda  (soft)
Section 04 How It Works →  White               (contrast)
Section 05 Plans        →  Gradient biru muda  (soft)
Section 06 Add-ons      →  White               (contrast)
Section 07 Why WashClub →  Gradient biru muda  (soft)
Section 08 FAQ          →  White               (contrast)
Section 09 CTA          →  Dark navy           (impact)
Section 10 Footer       →  Dark navy           (continuous)
```

Alternating ini menciptakan ritme visual yang natural — mata tidak lelah, setiap section terasa seperti "ruang" tersendiri.

---

## GLOBAL LAYOUT SPECS

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Container max-width | 1200px | 100% | 100% |
| Container padding H | 24px | 48px | 24px |
| Section padding V | 80px | 64px | 64px |
| Grid gap | 24px | 24px | 20px |
| Card padding | 32px | 28px | 24px |
| Navbar height | 72px | 64px | 60px |
| Hero min-height | 100vh | auto | auto |
| Scroll margin top | 80px | 64px | 60px |

---

## ANIMATION MAP

| Element | Animation | Trigger |
|---|---|---|
| Hero headline + sub | `.reveal` 0.6s | Page load |
| Hero CTA buttons | `.reveal .reveal-d2` | Page load |
| Hero illustration | `.anim-float` loop | Always |
| Trust badges | `.reveal .reveal-d3` | Page load |
| Pain point cards | `.reveal` stagger d1–d5 | Scroll |
| Solution points | `.reveal-left` stagger | Scroll |
| Step cards | `.reveal` stagger d1–d3 | Scroll |
| Pricing cards | `.reveal-scale` stagger | Scroll |
| Popular badge | `.anim-pulse` loop | Always |
| Feature cards | `.reveal` stagger d1–d6 | Scroll |
| Add-on cards | `.reveal` stagger | Scroll |
| FAQ items | none (JS toggle only) | Click |
| CTA section | `.reveal-scale` | Scroll |
| Footer | no animation | — |

---

## COMPONENT CHECKLIST

| Section | Components Digunakan |
|---|---|
| Navbar | `.navbar` `.nav-links` `.nav-toggle` `.btn.btn-primary.btn-sm` |
| Hero | `.text-display` `.trust-badge` `.btn-primary` `.btn-secondary` `.anim-float` |
| Problem | `.section-header` `.grid-5` `.card.card-pain` `.icon-box.icon-box-danger` |
| Solution | `.section-header` `.card-glass` `.btn-primary.btn-lg` |
| How It Works | `.section-header` `.grid-3` `.card.card-step` `.card-step-number` `.btn-ghost` |
| Plans | `.section-header` `.grid-3` `.card-pricing` `.card-pricing.popular` `.badge-popular` `.benefit-list` `.btn-primary` `.btn-secondary` |
| Add-ons | `.section-header` `.grid-3` `.card-addon` `.card-addon-icon` `.btn-secondary` |
| Why WashClub | `.section-header` `.grid-3` `.card.card-feature` `.icon-box.icon-box-primary` |
| FAQ | `.section-header` `.faq-list` `.faq-item` `.faq-trigger` `.faq-icon` `.faq-content` |
| CTA | `.btn-white` `.btn-outline-white` `.trust-badge` |
| Footer | `.nav-logo` `.badge` social icon links |

---

*Wireframe ini adalah blueprint struktural landing page WashClub.*  
*Semua keputusan layout dan visual mengacu ke `brand-guideline/design-system-v2.md`.*  
*Teks final mengacu ke `copywriting/website-copy.md`.*
