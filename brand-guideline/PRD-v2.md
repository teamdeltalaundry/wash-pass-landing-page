# Product Requirements Document (PRD)
## WashClub — Landing Page

**Versi:** 2.0  
**Tanggal:** Juli 2026  
**Status:** Ready for Review  
**Author:** WashClub Product Team

---

> Dokumen ini mendefinisikan seluruh kebutuhan fungsional dan non-fungsional  
> untuk landing page publik WashClub. Semua keputusan implementasi harus  
> merujuk ke dokumen ini sebelum dilaksanakan.

---

## DAFTAR ISI

1. [Overview](#1-overview)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [User Personas](#4-user-personas)
5. [User Stories](#5-user-stories)
6. [Scope](#6-scope)
7. [Page Structure](#7-page-structure)
8. [Functional Requirements](#8-functional-requirements)
9. [Non-Functional Requirements](#9-non-functional-requirements)
10. [Technical Stack](#10-technical-stack)
11. [Content Requirements](#11-content-requirements)
12. [SEO Requirements](#12-seo-requirements)
13. [Accessibility Requirements](#13-accessibility-requirements)
14. [Analytics Requirements](#14-analytics-requirements)
15. [Content Dependencies](#15-content-dependencies)
16. [Risks & Mitigations](#16-risks--mitigations)
17. [Timeline](#17-timeline)
18. [Approval](#18-approval)

---

## 1. OVERVIEW

### 1.1 Background

WashClub adalah layanan laundry berlangganan otomatis untuk masyarakat urban. Pelanggan mengatur jadwal pickup sekali, kemudian laundry berjalan otomatis setiap minggu tanpa perlu chat atau booking ulang.

Saat ini WashClub belum memiliki landing page publik yang dapat mengkomunikasikan nilai produk, mendorong konversi, dan membangun kepercayaan calon pelanggan.

### 1.2 Opportunity

Calon pelanggan yang menemukan WashClub melalui Instagram, WhatsApp, atau word-of-mouth tidak memiliki satu tempat untuk:
- Memahami cara kerja layanan
- Membandingkan paket harga
- Mendaftar atau menghubungi WashClub

Tanpa landing page, setiap calon pelanggan harus ditangani secara manual via DM atau chat — tidak skalabel.

### 1.3 Solution

Bangun sebuah **landing page publik** yang:
- Mengkomunikasikan proposisi nilai dalam waktu kurang dari 10 detik
- Mendorong visitor untuk mendaftar langganan
- Mengurangi pertanyaan repetitif via FAQ
- Membangun kepercayaan melalui social proof dan transparansi harga

---

## 2. PROBLEM STATEMENT

### 2.1 Business Problem

WashClub kehilangan potensi pelanggan baru setiap hari karena tidak ada titik masuk digital yang kuat. Calon pelanggan yang tertarik tidak tahu harus ke mana, dan konversi bergantung sepenuhnya pada respons manual tim CS.

### 2.2 User Problem

Calon pelanggan yang mendengar tentang WashClub menghadapi hambatan berikut:

| Hambatan | Dampak |
|---|---|
| Tidak ada halaman yang menjelaskan cara kerja | Calon pelanggan bingung dan pergi |
| Tidak ada informasi harga yang jelas | Tidak bisa membandingkan atau memutuskan |
| Harus chat manual untuk tahu detail | Friction tinggi, konversi rendah |
| Tidak ada bukti kepercayaan (social proof) | Ragu untuk mendaftar |

### 2.3 How This PRD Solves It

Landing page yang dibangun berdasarkan PRD ini akan:

1. **Menjelaskan cara kerja** dalam 3 langkah sederhana
2. **Menampilkan harga secara transparan** tanpa harus tanya dulu
3. **Menyediakan FAQ** untuk 8+ pertanyaan umum
4. **Menyediakan CTA yang jelas** di setiap section
5. **Mengoptimalkan SEO** agar dapat ditemukan via Google

---

## 3. GOALS & SUCCESS METRICS

### 3.1 Business Goals

| # | Goal | Cara Ukur |
|---|---|---|
| BG-01 | Meningkatkan jumlah pendaftaran langganan baru | Jumlah klik CTA → form / WhatsApp |
| BG-02 | Membangun brand awareness WashClub sebagai startup modern | Brand recall survey, direct traffic |
| BG-03 | Mengurangi pertanyaan repetitif ke tim CS | Volume pesan masuk via WhatsApp |
| BG-04 | Menjadi aset marketing utama untuk semua channel | UTM tracking dari semua channel |

### 3.2 User Goals

| # | Goal |
|---|---|
| UG-01 | Memahami cara kerja WashClub dalam < 30 detik |
| UG-02 | Membandingkan paket harga dengan mudah tanpa harus tanya |
| UG-03 | Mendaftar atau menghubungi WashClub dalam < 3 klik |
| UG-04 | Mendapat jawaban atas pertanyaan umum tanpa harus chat |

### 3.3 Key Performance Indicators (KPIs)

| Metrik | Baseline | Target 90 Hari | Cara Ukur |
|---|---|---|---|
| Conversion Rate (visit → CTA click) | 0% (belum ada) | ≥ 3.5% | Google Analytics / event tracking |
| Time on Page | — | ≥ 90 detik | GA4 engagement time |
| Bounce Rate | — | ≤ 55% | GA4 |
| CTA Click Rate | — | ≥ 8% | Event tracking |
| LCP (Largest Contentful Paint) | — | ≤ 2.5 detik | Core Web Vitals |
| CLS (Cumulative Layout Shift) | — | ≤ 0.1 | Core Web Vitals |
| INP (Interaction to Next Paint) | — | ≤ 200ms | Core Web Vitals |
| Google PageSpeed Score | — | ≥ 90 (mobile) | PageSpeed Insights |
| Aksesibilitas WCAG | — | Level AA | Lighthouse |

---

## 4. USER PERSONAS

### Persona 1 — Andi, Mahasiswa

```
Usia:       20 tahun
Lokasi:     Kos di Jakarta Selatan
Pekerjaan:  Mahasiswa semester 6
Paket:      Solo Pocket (Rp99.000/bulan)

Situasi:
Andi tinggal di kos, tidak punya mesin cuci. Setiap minggu
dia harus chat laundry langganannya, kadang lupa, kadang
laundry penuh. Uang jajan terbatas tapi waktu lebih terbatas lagi.

Pain Points:
- Harus chat laundry setiap minggu
- Budget ketat, tidak mau kena biaya kaget
- Pelupa — sering lupa kirim laundry

Goals:
- Laundry beres tanpa harus mikir
- Biaya tetap setiap bulan
- Tidak perlu keluar kos

Quote:
"Pengennya laundry bisa jalan sendiri aja tanpa aku harus inget."
```

---

### Persona 2 — Rara, Pekerja Muda

```
Usia:       27 tahun
Lokasi:     Apartemen di Jakarta Pusat
Pekerjaan:  Digital Marketing Manager
Paket:      Solo Pocket / Couple Pack

Situasi:
Rara pulang kerja malam, tidak sempat mengurus laundry.
Dia sudah mencoba beberapa laundry app tapi repot karena
harus input manual setiap kali.

Pain Points:
- Tidak ada waktu setelah pulang kerja
- Mau yang otomatis, bukan manual terus
- Pernah punya pengalaman buruk dengan laundry konvensional

Goals:
- Layanan yang bisa diandalkan setiap minggu
- Tidak perlu interaksi berulang
- Bisa pantau status laundry

Quote:
"Aku mau hidup yang lebih efisien. Laundry harusnya
bisa jadi salah satu hal yang tidak perlu aku pikirin."
```

---

### Persona 3 — Dika & Sari, Pasangan Muda

```
Usia:       29 & 27 tahun
Lokasi:     Apartemen Bekasi
Pekerjaan:  Keduanya bekerja full-time
Paket:      Couple Pack (Rp179.000/bulan)

Situasi:
Dika dan Sari baru menikah setahun lalu. Keduanya sibuk
dan sering bertengkar soal siapa yang harus urus laundry.
Mereka butuh solusi yang praktis dan affordable.

Pain Points:
- Laundry jadi sumber konflik karena tidak jelas siapa yang urus
- Harus keluar untuk antar jemput laundry
- Biaya bulanan tidak terprediksi

Goals:
- Otomasi hal-hal yang repetitif di rumah tangga
- Biaya bulanan yang fix dan terprediksi
- Tidak perlu keluar rumah untuk laundry

Quote:
"Kalau bisa otomatis, kenapa harus ribet?"
```

---

### Persona 4 — Pak Budi, Keluarga Urban

```
Usia:       38 tahun
Lokasi:     Rumah di Depok
Pekerjaan:  Manager di perusahaan FMCG
Paket:      Family Pack (Rp329.000/bulan)

Situasi:
Pak Budi punya istri dan dua anak. Cucian keluarga banyak.
Istrinya sudah kelelahan mengurus rumah dan dua anak.
Mereka ingin delegasikan urusan laundry tapi mau yang
terpercaya dan tidak ribet.

Pain Points:
- Volume cucian besar, butuh kapasitas besar
- Mau layanan yang bisa diandalkan, tidak mau eksperimen
- Perlu kontrol biaya rumah tangga

Goals:
- Laundry keluarga beres tanpa effort dari istri
- Harga transparan, tidak ada kejutan
- Prioritas penyelesaian (butuh cepat)

Quote:
"Ini bukan soal harga, ini soal kepercayaan dan kenyamanan."
```

---

## 5. USER STORIES

### 5.1 Core User Stories

| ID | Sebagai | Saya ingin | Supaya |
|---|---|---|---|
| US-01 | Calon pelanggan | Memahami cara kerja WashClub dalam 30 detik | Saya bisa memutuskan apakah ini cocok untuk saya |
| US-02 | Calon pelanggan | Melihat harga secara jelas tanpa harus tanya | Saya bisa langsung memutuskan paket yang sesuai |
| US-03 | Calon pelanggan | Klik satu tombol untuk mulai berlangganan | Prosesnya tidak terasa berat |
| US-04 | Calon pelanggan | Membaca jawaban atas pertanyaan saya di FAQ | Saya tidak perlu chat manual untuk hal-hal umum |
| US-05 | Mobile user | Mengakses dan menggunakan semua fitur di HP | Saya tidak perlu buka laptop |
| US-06 | Skeptis | Melihat bukti kepercayaan (social proof, jumlah pelanggan) | Saya lebih yakin untuk mencoba |
| US-07 | Calon pelanggan | Bisa menghubungi WashClub via WhatsApp langsung dari halaman | Saya bisa tanya hal yang lebih spesifik |
| US-08 | Calon pelanggan | Membandingkan paket dengan mudah | Saya bisa pilih yang paling sesuai budget |

### 5.2 Acceptance Criteria Utama

**US-01 — Cara kerja dipahami dalam 30 detik:**
- Section "Cara Kerja" terdiri dari maksimal 3 langkah
- Setiap langkah maksimal 15 kata deskripsi
- Visual pendukung (ikon atau ilustrasi) ada di setiap langkah

**US-02 — Harga jelas tanpa tanya:**
- 3 kartu harga ditampilkan di atas fold (tidak perlu scroll jauh)
- Setiap kartu menampilkan: nama paket, harga, benefit list, CTA
- Tidak ada asterisk atau "hubungi kami untuk harga"

**US-03 — Satu tombol untuk mulai:**
- CTA "Mulai Berlangganan" ada di navbar, hero, dan CTA akhir
- CTA mengarah ke form atau WhatsApp (tidak ke halaman baru yang membingungkan)

---

---

## 6. SCOPE

### 6.1 In Scope — v1.0

| Fitur | Deskripsi |
|---|---|
| ✅ Single-page landing page | HTML/CSS/JS statis |
| ✅ 11 section sesuai brief | Lihat Section 7 |
| ✅ Fully responsive | Mobile, tablet, desktop |
| ✅ SEO on-page | Meta, heading, schema, sitemap |
| ✅ Aksesibilitas WCAG 2.1 AA | Keyboard nav, ARIA, contrast |
| ✅ Animasi scroll-triggered | Intersection Observer |
| ✅ FAQ accordion | Expand/collapse dengan animasi |
| ✅ Smooth scroll navigasi | Anchor link ke setiap section |
| ✅ Sticky navbar dengan glassmorphism | Berubah saat di-scroll |
| ✅ WhatsApp CTA | Link langsung ke WA |
| ✅ Open Graph tags | Social sharing preview |

### 6.2 Out of Scope — v1.0

| Fitur | Alasan Ditunda |
|---|---|
| ❌ Dashboard pelanggan | Butuh backend & auth |
| ❌ Payment gateway / checkout | Fase 2 |
| ❌ Login / register system | Fase 2 |
| ❌ Real-time tracking laundry | Fase 2 |
| ❌ Blog / artikel | Fase 3 |
| ❌ Multi-bahasa (Inggris) | Fase 3 |
| ❌ Push notification | App mobile |
| ❌ Live chat | Cukup WhatsApp untuk fase awal |

### 6.3 Asumsi

1. Domain dan hosting sudah tersedia sebelum development selesai
2. Nomor WhatsApp resmi sudah aktif sebelum launch
3. Logo final sudah tersedia di `/logo/` (sudah ada)
4. Ilustrasi bisa menggunakan placeholder untuk MVP launch

---

## 7. PAGE STRUCTURE

### 7.1 Urutan Section

```
[NAVBAR] — sticky, glassmorphism on scroll
  │
  ├── [01] HERO
  │         Headline · Subheadline · 2 CTA · Ilustrasi · Trust badges
  │
  ├── [02] PROBLEM
  │         Headline · 5 pain point cards dengan ikon
  │
  ├── [03] SOLUTION
  │         Headline · 3 solution points · CTA
  │
  ├── [04] CARA KERJA
  │         Headline · 3 langkah dengan nomor, ikon, deskripsi · CTA
  │
  ├── [05] PAKET LANGGANAN
  │         Headline · 3 pricing cards (Couple Pack = highlight) · Catatan
  │
  ├── [06] KENAPA WASHCLUB
  │         Headline · 6 feature cards
  │
  ├── [07] LAYANAN TAMBAHAN
  │         Headline · 6 add-on cards · CTA
  │
  ├── [08] FAQ
  │         Headline · 8 accordion items · CTA ke WhatsApp
  │
  ├── [09] CTA AKHIR
  │         Headline · Subheadline · 2 CTA · Trust badges
  │         Background: dark navy atau gradient biru
  │
  └── [FOOTER]
            Logo · Tagline · Link navigasi · Sosmed · Alamat · Copyright
```

### 7.2 Navbar Items

| Elemen | Tipe | Target |
|---|---|---|
| Logo WashClub | Link | `#beranda` (scroll ke atas) |
| Beranda | Link | `#beranda` |
| Cara Kerja | Link | `#cara-kerja` |
| Paket | Link | `#paket` |
| FAQ | Link | `#faq` |
| Hubungi Kami | Link | `#footer` atau `wa.me/` |
| Mulai Berlangganan | CTA Button | `#paket` atau form |

---

## 8. FUNCTIONAL REQUIREMENTS

### FR-01: Navbar

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-01-1 | Navbar sticky saat scroll | P1 | Tetap visible saat page discroll |
| FR-01-2 | Logo link ke atas halaman | P1 | Klik logo → scroll ke #beranda |
| FR-01-3 | 5 nav link dengan smooth scroll | P1 | Klik link → scroll ke section terkait |
| FR-01-4 | CTA Button "Mulai Berlangganan" | P1 | Tampil berbeda dari nav link, ada hover state |
| FR-01-5 | Mobile hamburger menu | P1 | Menu terbuka/tutup dengan animasi, keyboard accessible |
| FR-01-6 | Glassmorphism background saat scroll | P2 | Navbar background berubah setelah scroll 50px |
| FR-01-7 | Active state untuk link saat section visible | P3 | Link highlight sesuai section yang sedang di-view |

---

### FR-02: Hero Section

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-02-1 | Headline display size | P1 | Font min 40px mobile, 56px desktop |
| FR-02-2 | Subheadline di bawah headline | P1 | Max 2 baris, body lead size |
| FR-02-3 | CTA Primer "Mulai Berlangganan" | P1 | Gradient button, hover effect |
| FR-02-4 | CTA Sekunder "Lihat Paket" | P1 | Outline button, smooth scroll ke #paket |
| FR-02-5 | Ilustrasi smartphone mockup | P1 | Di kanan (desktop), di bawah (mobile), alt text wajib |
| FR-02-6 | Trust badges (3 item) | P2 | Check icon + teks singkat |
| FR-02-7 | Float animation ilustrasi | P3 | translateY 0 → -12px loop, disabled jika reduced motion |

---

### FR-03: Problem Section

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-03-1 | Section headline H2 | P1 | — |
| FR-03-2 | 5 pain point cards | P1 | Ikon + judul + deskripsi singkat |
| FR-03-3 | Grid layout responsive | P1 | 5 kolom desktop, 2 kolom tablet, 1 kolom mobile |
| FR-03-4 | Ikon pain point | P1 | Lucide outline, 40×40px, warna aksen merah ringan |

---

### FR-04: Solution Section

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-04-1 | Headline + subheadline | P1 | — |
| FR-04-2 | 3 solution points dengan ikon | P1 | Ikon check/sparkle + judul + deskripsi |
| FR-04-3 | Ilustrasi automasi | P1 | Visual pendukung, alt text wajib |
| FR-04-4 | CTA mengarah ke #paket | P2 | Gradient button |

---

### FR-05: Cara Kerja

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-05-1 | 3 langkah dengan nomor 01–03 | P1 | Nomor besar sebagai elemen visual |
| FR-05-2 | Setiap langkah: ikon + judul + deskripsi | P1 | — |
| FR-05-3 | Connector visual antar step (desktop) | P2 | Arrow atau line penghubung |
| FR-05-4 | CTA "Lihat Semua Paket" di bawah | P2 | Ghost atau outline button |

---

### FR-06: Paket Langganan

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-06-1 | 3 kartu paket: Solo, Couple, Family | P1 | — |
| FR-06-2 | Couple Pack di-highlight "Paling Populer" | P1 | Badge, border biru, scale sedikit lebih besar |
| FR-06-3 | Setiap kartu: nama, harga, benefit list, CTA | P1 | Benefit list dengan check icon |
| FR-06-4 | CTA setiap kartu mengarah ke WA / form | P1 | `href="wa.me/[nomor]?text=..."` |
| FR-06-5 | Catatan bawah kartu (PPN, batal kapan saja) | P2 | Teks kecil, warna muted |

---

### FR-07: Kenapa WashClub

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-07-1 | 6 feature cards | P1 | Ikon + judul + deskripsi singkat |
| FR-07-2 | Grid 3×2 desktop, 2×3 tablet, 1×6 mobile | P1 | — |
| FR-07-3 | Hover effect pada card | P2 | translateY(-4px) + shadow |

---

### FR-08: Layanan Tambahan

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-08-1 | 6 add-on cards | P1 | Ikon + nama + harga + deskripsi |
| FR-08-2 | CTA "Tanya via WhatsApp" | P2 | Link ke WA dengan prefilled text |

---

### FR-09: FAQ

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-09-1 | 8 item FAQ dalam format accordion | P1 | — |
| FR-09-2 | Satu item terbuka secara default | P2 | Item pertama open on load |
| FR-09-3 | Animasi expand/collapse | P2 | max-height transition 0.35s |
| FR-09-4 | Chevron rotate saat open/close | P2 | rotate(180deg) transition |
| FR-09-5 | ARIA expanded attribute | P1 | `aria-expanded="true/false"` |
| FR-09-6 | CTA "Chat dengan Kami" di bawah FAQ | P2 | Link ke WhatsApp |

---

### FR-10: CTA Section Akhir

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-10-1 | Headline besar + subheadline | P1 | — |
| FR-10-2 | 2 CTA button (Primer + Sekunder) | P1 | White button dan outline-white |
| FR-10-3 | Background dark navy atau gradient | P1 | Kontras dengan section sebelumnya |
| FR-10-4 | Trust badges 3 item | P2 | — |

---

### FR-11: Footer

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-11-1 | Logo `washclub-white.png` | P1 | Max-height 32px, link ke #beranda |
| FR-11-2 | Tagline brand | P1 | — |
| FR-11-3 | Deskripsi singkat brand | P2 | Max 2 baris |
| FR-11-4 | 2 kolom link navigasi | P1 | — |
| FR-11-5 | Ikon + link Instagram & WhatsApp | P1 | Buka tab baru, `rel="noopener noreferrer"` |
| FR-11-6 | Alamat dan kontak | P1 | Dengan ikon map-pin |
| FR-11-7 | Copyright line | P1 | © 2026 WashClub |

---

### FR-12: Global

| ID | Requirement | Prioritas | Acceptance Criteria |
|---|---|---|---|
| FR-12-1 | Smooth scroll untuk semua anchor link | P1 | `scroll-behavior: smooth` |
| FR-12-2 | Scroll margin untuk fixed navbar | P1 | `scroll-margin-top: 80px` pada semua `[id]` |
| FR-12-3 | Scroll-triggered reveal animation | P2 | Intersection Observer, `opacity 0→1 + translateY` |
| FR-12-4 | Back-to-top button | P3 | Muncul setelah scroll 300px |
| FR-12-5 | Prefers-reduced-motion support | P1 | Semua animasi dinonaktifkan jika setting aktif |

---

---

## 9. NON-FUNCTIONAL REQUIREMENTS

### NFR-01: Performance

| Metrik | Target | Tools |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2.5 detik | PageSpeed Insights |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | PageSpeed Insights |
| INP (Interaction to Next Paint) | ≤ 200ms | PageSpeed Insights |
| Total page weight | ≤ 500KB (tanpa ilustrasi besar) | Network tab DevTools |
| PageSpeed Score Mobile | ≥ 90 | Google PageSpeed |
| PageSpeed Score Desktop | ≥ 95 | Google PageSpeed |
| Time to First Byte (TTFB) | ≤ 600ms | PageSpeed Insights |

**Strategi:**
- Gunakan SVG untuk semua ilustrasi
- `font-display: swap` + `preconnect` untuk Google Fonts
- `loading="lazy"` untuk semua gambar di bawah fold
- Minify CSS dan JS sebelum deploy
- Gzip/Brotli compression pada hosting

---

### NFR-02: Responsiveness

| Breakpoint | Width | Target Device |
|---|---|---|
| Mobile S | 320px | iPhone SE |
| Mobile M | 375px | iPhone 14 Mini |
| Mobile L | 390–430px | iPhone 14 / Plus |
| Tablet | 768px | iPad Mini / Air |
| Laptop | 1024px | Laptop kecil |
| Desktop | 1280px | Desktop standar |
| Wide | 1440px | Desktop lebar |

**Rules:**
- Mobile-first CSS approach
- Tidak ada konten yang hilang di resolusi manapun
- Touch targets minimal 44×44px di mobile
- Tidak ada horizontal scroll

---

### NFR-03: Browser Compatibility

| Browser | Versi | Status |
|---|---|---|
| Chrome | 90+ | ✅ Required |
| Firefox | 88+ | ✅ Required |
| Safari | 14+ | ✅ Required |
| Edge | 90+ | ✅ Required |
| Samsung Internet | 14+ | ✅ Required |
| Opera | 76+ | 🟡 Best effort |
| iOS Safari | 14+ | ✅ Required |
| Android Chrome | 90+ | ✅ Required |

---

### NFR-04: Security

- Semua external link menggunakan `rel="noopener noreferrer"`
- WhatsApp link menggunakan `https://wa.me/` (bukan `http://`)
- Tidak ada form yang menyimpan data tanpa enkripsi
- Content Security Policy header pada hosting
- HTTPS wajib — tidak ada konten mixed HTTP

---

### NFR-05: Maintainability

- Semua CSS menggunakan custom properties (design tokens) — tidak ada nilai hardcoded
- Komentar pada setiap section HTML yang besar
- File CSS terstruktur: reset → tokens → base → components → sections
- Nama class semantik dan konsisten
- Mudah di-update konten tanpa menyentuh logika

---

## 10. TECHNICAL STACK

| Layer | Teknologi | Versi / Source | Alasan |
|---|---|---|---|
| **Markup** | HTML5 Semantic | Native | SEO, aksesibilitas, standar |
| **Styling** | CSS3 + Custom Properties | Native | Ringan, tidak butuh build tool |
| **Interaktivitas** | Vanilla JavaScript ES6+ | Native | Tidak butuh framework untuk landing page statis |
| **Icons** | Lucide Icons | CDN latest | Outline modern, konsisten, ringan |
| **Font** | Poppins | Google Fonts | Sesuai brand guideline |
| **Animasi** | CSS transitions + Intersection Observer API | Native | Performa baik, no library |
| **Hosting** | Static hosting | Netlify / Vercel / cPanel | CDN global, deploy mudah |
| **Analytics** | Google Analytics 4 | GA4 | Event tracking, konversi |

**Tidak menggunakan:**
- React / Vue / Next.js — overkill untuk landing page statis
- Bootstrap / Tailwind — custom CSS lebih terkontrol untuk brand yang spesifik
- jQuery — tidak diperlukan dengan ES6+
- Animation library (GSAP, AOS) — Intersection Observer cukup

---

## 11. CONTENT REQUIREMENTS

### 11.1 Copywriting

Semua copy mengacu ke `copywriting/website-copy.md`. Tidak ada teks yang dikarang ulang di luar dokumen tersebut tanpa persetujuan.

### 11.2 Logo

| File | Penggunaan |
|---|---|
| `logo/washclub-logo.png` | Navbar (background terang) |
| `logo/washclub-white.png` | Footer, CTA section gelap |
| `logo/washclub-icon.png` | Favicon 32×32px |

**⚠️ File logo tidak boleh dimodifikasi.**

### 11.3 Ilustrasi

Semua spesifikasi ilustrasi mengacu ke `images/image-asset-plan.md`.

| Status | Deskripsi |
|---|---|
| ⏳ Placeholder | Gunakan div dengan background biru muda dan caption "Ilustrasi [nama] — ganti di kemudian hari" |
| ✅ Final | Ganti placeholder saat aset siap, tanpa mengubah struktur HTML |

### 11.4 Icons

Semua ikon menggunakan Lucide via CDN. Tidak ada icon font atau ikon PNG. Referensi lengkap di `icons/icon-system.md`.

---

## 12. SEO REQUIREMENTS

### 12.1 On-Page SEO

| Elemen | Requirement | Value |
|---|---|---|
| `<title>` | Wajib | WashClub — Laundry Berlangganan Otomatis. Mulai Rp99.000/bulan. |
| `<meta name="description">` | Wajib, 140–160 char | Lihat copywriting/website-copy.md |
| `<h1>` | Satu per halaman | "Laundry yang Jalan Sendiri." |
| Heading hierarchy | H1 → H2 → H3 | Tidak boleh skip level |
| `<img alt="">` | Wajib untuk semua gambar | Deskriptif, bukan kosong |
| Canonical URL | Wajib | `<link rel="canonical" href="https://washclub.id/">` |
| Lang attribute | Wajib | `<html lang="id">` |

### 12.2 Social & Open Graph

```html
<meta property="og:title"       content="Laundry yang Jalan Sendiri. — WashClub">
<meta property="og:description" content="Layanan laundry berlangganan otomatis. Mulai Rp99.000/bulan.">
<meta property="og:image"       content="https://washclub.id/images/og/og-image.png">
<meta property="og:url"         content="https://washclub.id/">
<meta property="og:type"        content="website">

<meta name="twitter:card"       content="summary_large_image">
<meta name="twitter:title"      content="Laundry yang Jalan Sendiri. — WashClub">
<meta name="twitter:image"      content="https://washclub.id/images/og/og-image.png">
```

### 12.3 Structured Data (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WashClub",
  "description": "Layanan laundry berlangganan otomatis untuk kehidupan urban.",
  "url": "https://washclub.id",
  "telephone": "[nomor WA]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressCountry": "ID"
  },
  "priceRange": "Rp99.000 – Rp329.000",
  "openingHours": "Mo-Su 08:00-20:00",
  "sameAs": [
    "https://instagram.com/washclub.id"
  ]
}
```

### 12.4 Technical SEO

- `/sitemap.xml` wajib ada sebelum launch
- `/robots.txt` mengizinkan semua crawler
- HTTPS wajib
- URL tidak mengandung parameter query (halaman statis)
- Tidak ada broken link

---

## 13. ACCESSIBILITY REQUIREMENTS

Standard: **WCAG 2.1 Level AA**

### 13.1 Checklist

| Requirement | Standard | Priority |
|---|---|---|
| Semua gambar punya `alt` attribute | 1.1.1 | P1 |
| Color contrast body text ≥ 4.5:1 | 1.4.3 | P1 |
| Color contrast large text ≥ 3:1 | 1.4.3 | P1 |
| Tidak ada informasi yang hanya dari warna | 1.4.1 | P1 |
| Semua fungsi accessible via keyboard | 2.1.1 | P1 |
| Focus indicator terlihat jelas | 2.4.7 | P1 |
| Skip navigation link tersedia | 2.4.1 | P1 |
| ARIA labels pada semua elemen interaktif | 4.1.2 | P1 |
| FAQ accordion dengan `aria-expanded` | 4.1.2 | P1 |
| Hamburger menu dengan `aria-label` | 4.1.2 | P1 |
| Tidak ada konten yang berkedip > 3x/detik | 2.3.1 | P1 |
| Teks dapat diperbesar 200% tanpa kehilangan fungsi | 1.4.4 | P1 |
| Animasi dinonaktifkan saat `prefers-reduced-motion` | 2.3.3 | P1 |

### 13.2 Skip Navigation

```html
<!-- Letakkan sebagai elemen pertama di <body> -->
<a href="#main-content" class="skip-link">
  Lewati ke konten utama
</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  font-weight: 600;
  z-index: 9999;
  transition: top 0.2s;
}
.skip-link:focus { top: 0; }
```

---

## 14. ANALYTICS REQUIREMENTS

### 14.1 Events yang Harus Di-track

| Event Name | Trigger | Parameter |
|---|---|---|
| `cta_click` | Klik semua CTA button | `{button_text, section}` |
| `navbar_click` | Klik link di navbar | `{link_text}` |
| `pricing_card_click` | Klik CTA di kartu paket | `{plan_name, price}` |
| `faq_expand` | Buka FAQ item | `{question_text}` |
| `whatsapp_click` | Klik link WhatsApp | `{source_section}` |
| `instagram_click` | Klik link Instagram | `{source_section}` |
| `scroll_depth` | Scroll 25%, 50%, 75%, 100% | `{depth}` |
| `section_viewed` | Section masuk viewport | `{section_id}` |

### 14.2 Conversion Goals

| Goal | Definisi | Target |
|---|---|---|
| Primary Conversion | Klik "Mulai Berlangganan" → landing di WA/form | ≥ 3.5% |
| Secondary Conversion | Klik WhatsApp dari mana saja | ≥ 5% |
| Engagement | Scroll depth ≥ 75% | ≥ 40% session |

---

## 15. CONTENT DEPENDENCIES

| Aset | Status | PIC | Deadline |
|---|---|---|---|
| Logo final (`/logo/`) | ✅ Tersedia | — | — |
| Copywriting | ✅ Tersedia di `copywriting/website-copy.md` | — | — |
| Brand guideline | ✅ Tersedia di `brand-guideline/` | — | — |
| Ilustrasi hero | ⏳ Belum ada | Designer | Sebelum launch |
| Ilustrasi cara kerja (3x) | ⏳ Belum ada | Designer | Sebelum launch |
| OG Image (1200×630) | ⏳ Belum ada | Designer | Sebelum launch |
| Nomor WhatsApp resmi | ⏳ Perlu dikonfirmasi | Ops | Sebelum launch |
| Handle Instagram resmi | ⏳ Perlu dikonfirmasi | Marketing | Sebelum launch |
| Alamat operasional | ⏳ Perlu dikonfirmasi | Ops | Sebelum launch |
| Domain & hosting | ⏳ Perlu dikonfirmasi | Tech | Sebelum launch |
| Google Analytics ID | ⏳ Perlu dibuat | Marketing | Sebelum launch |

---

## 16. RISKS & MITIGATIONS

| # | Risiko | Dampak | Probabilitas | Mitigasi |
|---|---|---|---|---|
| R-01 | Ilustrasi belum siap saat launch | Hero section terlihat kosong | Tinggi | Gunakan SVG placeholder dengan styling brand yang rapi |
| R-02 | Nomor WA belum tersedia | CTA tidak bisa diklik | Medium | Gunakan `href="#"` dengan komentar TODO, deploy setelah nomor siap |
| R-03 | Font Google Fonts lambat load | CLS / layout shift | Medium | `preconnect` + `font-display: swap` + fallback yang mirip |
| R-04 | Gambar berat menurunkan performa | LCP lambat, score PageSpeed turun | Medium | Wajib SVG/WebP, lazy loading, max 200KB per gambar |
| R-05 | Konten copy berubah setelah dev selesai | Butuh dev effort ulang | Low-Medium | Finalize copy sebelum dev dimulai |
| R-06 | Domain belum siap saat launch | Tidak bisa publish | Low | Siapkan subdomain sementara sebagai fallback |

---

## 17. TIMELINE

| Fase | Deliverable | Durasi | Status |
|---|---|---|---|
| **Fase 1** | Dokumentasi (PRD, Brand Guideline, Copywriting, Wireframe, Design System) | 1 hari | ✅ Selesai |
| **Fase 2** | HTML Structure + Semantic Markup (semua section) | 1 hari | ⏳ Belum mulai |
| **Fase 3** | CSS Styling + Responsivitas (mobile-first) | 2 hari | ⏳ Belum mulai |
| **Fase 4** | JavaScript Interaktivitas (navbar, FAQ, animasi, scroll) | 1 hari | ⏳ Belum mulai |
| **Fase 5** | SEO + Aksesibilitas + Analytics + Optimasi | 1 hari | ⏳ Belum mulai |
| **Fase 6** | QA, cross-browser testing, PageSpeed, final review | 1 hari | ⏳ Belum mulai |
| **Fase 7** | Deploy + DNS setup + Launch | 0.5 hari | ⏳ Belum mulai |

**Total estimasi:** 7.5 hari kerja dari Fase 2

**Prasyarat sebelum Fase 2 dimulai:**
- [ ] PRD ini disetujui
- [ ] Copywriting final disetujui
- [ ] Nomor WhatsApp dikonfirmasi
- [ ] Domain / hosting dikonfirmasi

---

## 18. APPROVAL

| Role | Nama | Status | Tanggal |
|---|---|---|---|
| Product Owner / CEO | — | ⏳ Menunggu | — |
| Brand / Design Lead | — | ⏳ Menunggu | — |
| Tech Lead / Developer | — | ⏳ Menunggu | — |
| Marketing Lead | — | ⏳ Menunggu | — |

---

## REVISION HISTORY

| Versi | Tanggal | Perubahan | Author |
|---|---|---|---|
| 1.0 | Juli 2026 | Draft awal | WashClub Product Team |
| 2.0 | Juli 2026 | Complete edition — tambah user stories, analytics, accessibility, risks | WashClub Product Team |

---

*PRD ini adalah kontrak antara product, design, dan engineering.*  
*Perubahan scope harus melalui review dan update dokumen ini.*  
*Versi terbaru selalu tersimpan di `brand-guideline/PRD-v2.md`.*
