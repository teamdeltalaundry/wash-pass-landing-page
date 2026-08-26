# Product Requirement Document (PRD)
## WashClub — Landing Page

**Versi:** 1.0  
**Tanggal:** Juli 2026  
**Author:** WashClub Product Team  
**Status:** Draft — Menunggu Review

---

## 1. Executive Summary

WashClub membutuhkan sebuah landing page publik yang berfungsi sebagai titik masuk utama bagi calon pelanggan. Landing page ini harus mengkomunikasikan proposisi nilai secara jelas, mendorong konversi ke pendaftaran langganan, dan membangun kepercayaan terhadap brand.

---

## 2. Problem Statement

Calon pelanggan WashClub yang menemukan brand melalui media sosial atau word-of-mouth tidak memiliki satu halaman yang dapat menjelaskan layanan, harga, cara kerja, dan mendorong mereka untuk segera mendaftar. Tanpa landing page yang kuat, potensi konversi terbuang.

---

## 3. Goals & Objectives

### Business Goals
- Meningkatkan jumlah pendaftaran langganan baru
- Membangun brand awareness WashClub sebagai startup laundry modern
- Mengurangi pertanyaan repetitif melalui FAQ yang komprehensif

### User Goals
- Memahami cara kerja WashClub dalam waktu kurang dari 30 detik
- Membandingkan paket langganan dengan mudah
- Mendaftar atau menghubungi WashClub dengan friction seminimal mungkin

### Success Metrics (KPI)
| Metrik | Target |
|---|---|
| Conversion Rate (kunjungan → daftar) | ≥ 3% |
| Time on Page | ≥ 90 detik |
| Bounce Rate | ≤ 55% |
| Core Web Vitals — LCP | ≤ 2.5 detik |
| Core Web Vitals — CLS | ≤ 0.1 |
| Core Web Vitals — FID/INP | ≤ 200ms |
| Aksesibilitas WCAG | Level AA |

---

## 4. Target Users

| Persona | Usia | Kebutuhan Utama | Paket Relevan |
|---|---|---|---|
| **Andi** — Mahasiswa | 19–24 | Budget ketat, tinggal di kos, tidak punya waktu cuci | Solo Pocket |
| **Rara** — Pekerja Muda | 24–32 | Sibuk, mobilitas tinggi, ingin efisiensi | Solo Pocket / Couple |
| **Dika & Sari** — Pasangan Baru | 26–34 | Efisiensi rumah tangga berdua, budget fleksibel | Couple Pack |
| **Pak Budi** — Keluarga Urban | 32–45 | Laundry keluarga besar, butuh kontrol biaya | Family Pack |

---

## 5. Scope

### In Scope (v1.0)
- ✅ Single-page landing page (HTML/CSS/JS)
- ✅ 11 section sesuai brief
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO on-page optimization
- ✅ Aksesibilitas WCAG 2.1 AA
- ✅ Animasi ringan (scroll-triggered)
- ✅ FAQ accordion
- ✅ Smooth scroll navigasi

### Out of Scope (v1.0 — untuk fase berikutnya)
- ❌ Sistem dashboard pelanggan
- ❌ Payment gateway / checkout
- ❌ Backend / database
- ❌ Login / register system
- ❌ Real-time tracking laundry
- ❌ Multi-bahasa (Inggris)
- ❌ Blog / artikel

---

## 6. Functional Requirements

### FR-01: Navbar
| ID | Requirement | Prioritas |
|---|---|---|
| FR-01-1 | Navbar sticky saat scroll | P1 |
| FR-01-2 | Logo WashClub (dari /logo/) dengan link ke #beranda | P1 |
| FR-01-3 | Link navigasi: Beranda, Cara Kerja, Paket, FAQ, Hubungi Kami | P1 |
| FR-01-4 | CTA Button "Mulai Berlangganan" dengan highlight visual | P1 |
| FR-01-5 | Hamburger menu untuk mobile | P1 |
| FR-01-6 | Navbar background berubah saat scroll (glassmorphism) | P2 |

### FR-02: Hero Section
| ID | Requirement | Prioritas |
|---|---|---|
| FR-02-1 | Headline "Laundry yang Jalan Sendiri." | P1 |
| FR-02-2 | Subheadline sesuai copywriting master | P1 |
| FR-02-3 | Dua CTA: Primer "Mulai Berlangganan" + Sekunder "Lihat Paket" | P1 |
| FR-02-4 | Ilustrasi smartphone mockup jadwal pickup | P1 |
| FR-02-5 | Trust signal badges di bawah CTA | P2 |

### FR-03: Problem Section
| ID | Requirement | Prioritas |
|---|---|---|
| FR-03-1 | Headline section | P1 |
| FR-03-2 | 5 kartu pain point dengan ikon dan deskripsi | P1 |
| FR-03-3 | Layout grid responsive (1 col mobile, 2–3 col desktop) | P1 |

### FR-04: Solution Section
| ID | Requirement | Prioritas |
|---|---|---|
| FR-04-1 | Headline dan subheadline | P1 |
| FR-04-2 | 3 solution points dengan ikon | P1 |
| FR-04-3 | CTA mengarah ke section paket | P2 |

### FR-05: Cara Kerja
| ID | Requirement | Prioritas |
|---|---|---|
| FR-05-1 | 3 langkah dengan nomor, ikon, judul, deskripsi | P1 |
| FR-05-2 | Visual connector antar langkah (line/arrow) pada desktop | P2 |

### FR-06: Paket Langganan
| ID | Requirement | Prioritas |
|---|---|---|
| FR-06-1 | 3 kartu paket: Solo Pocket, Couple Pack, Family Pack | P1 |
| FR-06-2 | Couple Pack di-highlight sebagai "Paling Populer" | P1 |
| FR-06-3 | Setiap kartu menampilkan harga, benefit list, dan CTA | P1 |
| FR-06-4 | CTA masing-masing kartu mengarah ke WhatsApp / form | P1 |

### FR-07: Kenapa WashClub
| ID | Requirement | Prioritas |
|---|---|---|
| FR-07-1 | 6 feature card dengan ikon, judul, dan deskripsi | P1 |
| FR-07-2 | Layout grid 2×3 (desktop) / 1×6 (mobile) | P1 |

### FR-08: Layanan Tambahan
| ID | Requirement | Prioritas |
|---|---|---|
| FR-08-1 | 6 add-on cards dengan nama, harga, dan deskripsi | P1 |
| FR-08-2 | CTA "Hubungi Kami untuk Add-on" | P2 |

### FR-09: FAQ
| ID | Requirement | Prioritas |
|---|---|---|
| FR-09-1 | Minimal 6 pertanyaan (tersedia 8) dalam format accordion | P1 |
| FR-09-2 | Satu pertanyaan terbuka secara default | P2 |
| FR-09-3 | Animasi expand/collapse halus | P2 |

### FR-10: CTA Akhir
| ID | Requirement | Prioritas |
|---|---|---|
| FR-10-1 | Headline, subheadline, dua CTA button | P1 |
| FR-10-2 | Background gradient atau dark untuk kontras | P1 |
| FR-10-3 | Trust badges di bawah CTA | P2 |

### FR-11: Footer
| ID | Requirement | Prioritas |
|---|---|---|
| FR-11-1 | Logo WashClub white versi (dari /logo/washclub-white.png) | P1 |
| FR-11-2 | Tagline brand | P1 |
| FR-11-3 | Link navigasi footer | P1 |
| FR-11-4 | Ikon dan link Instagram + WhatsApp | P1 |
| FR-11-5 | Informasi alamat dan copyright | P1 |

---

## 7. Non-Functional Requirements

### NFR-01: Performa
- LCP (Largest Contentful Paint) ≤ 2.5 detik pada koneksi 4G
- Ukuran halaman total ≤ 500KB (tanpa ilustrasi besar)
- Ilustrasi menggunakan format SVG atau WebP
- Lazy loading untuk gambar di bawah fold

### NFR-02: SEO
- Struktur heading hierarkis: H1 → H2 → H3
- Meta title dan meta description sesuai copywriting master
- Open Graph tags untuk social sharing
- Structured Data (Schema.org: LocalBusiness + Service)
- Sitemap XML
- Robots.txt
- Canonical URL

### NFR-03: Aksesibilitas (WCAG 2.1 AA)
- Semua gambar memiliki alt text yang deskriptif
- Color contrast ratio ≥ 4.5:1 untuk teks
- Semua interaksi dapat dilakukan via keyboard
- Focus indicators terlihat jelas
- ARIA labels pada elemen interaktif
- Skip navigation link untuk screen reader

### NFR-04: Responsivitas
| Breakpoint | Lebar | Target Device |
|---|---|---|
| Mobile S | 320px | iPhone SE |
| Mobile M | 375px | iPhone 14 |
| Mobile L | 428px | iPhone 14 Plus |
| Tablet | 768px | iPad |
| Laptop | 1024px | Laptop kecil |
| Desktop | 1280px | Desktop standar |
| Desktop L | 1440px | Desktop lebar |

### NFR-05: Browser Support
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Samsung Internet 14+ ✅

---

## 8. Technical Stack

| Layer | Teknologi | Alasan |
|---|---|---|
| **Markup** | HTML5 Semantic | SEO, aksesibilitas, standar modern |
| **Styling** | CSS3 + Custom Properties | Ringan, tidak butuh build tools |
| **Interaktivitas** | Vanilla JavaScript (ES6+) | Tidak butuh framework berat untuk landing page |
| **Icons** | Lucide Icons (CDN) | Outline modern, ringan, tree-shakeable |
| **Font** | Poppins via Google Fonts | Sesuai brand guideline |
| **Animasi** | CSS transitions + Intersection Observer API | Performa baik, tidak butuh library |
| **Hosting** | Static hosting (Netlify / Vercel / cPanel) | Mudah deploy, CDN global |

> **Catatan:** Tidak menggunakan React/Vue/framework berat karena ini adalah landing page statis. Prioritas adalah performa dan kemudahan maintenance.

---

## 9. Content Dependencies

| Aset | Status | Lokasi |
|---|---|---|
| Logo WashClub | ✅ Tersedia | /logo/ |
| Ilustrasi hero (smartphone mockup) | ⏳ Placeholder | /images/illustrations/ |
| Ilustrasi cara kerja (3x) | ⏳ Placeholder | /images/illustrations/ |
| Open Graph image | ⏳ Placeholder | /images/og/ |
| Ikon (28 ikon) | ⏳ Via Lucide CDN | — |
| Nomor WhatsApp resmi | ⏳ Perlu diisi | copywriting-master.md |
| Handle Instagram resmi | ⏳ Perlu diisi | copywriting-master.md |
| Alamat operasional | ⏳ Perlu diisi | copywriting-master.md |

---

## 10. Risks & Mitigations

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Ilustrasi belum tersedia | Hero terlihat kosong | Gunakan SVG placeholder bertema biru brand |
| Nomor WA belum ada | CTA tidak bisa diklik | Gunakan href="#" dengan komentar TODO |
| Font lambat load | CLS / layout shift | Gunakan font-display: swap + preconnect |
| Gambar berat | LCP lambat | Gunakan SVG/WebP + lazy loading |

---

## 11. Timeline (Estimasi)

| Fase | Deliverable | Estimasi |
|---|---|---|
| Fase 1 | Dokumentasi (PRD, Brand Guideline, Copywriting) | ✅ Selesai |
| Fase 2 | HTML Structure + Semantic Markup | 1 hari |
| Fase 3 | CSS Styling + Responsivitas | 2 hari |
| Fase 4 | JavaScript Interaktivitas | 1 hari |
| Fase 5 | SEO + Aksesibilitas + Optimasi | 1 hari |
| Fase 6 | QA, Testing, Final Review | 1 hari |

---

## 12. Approval

| Role | Nama | Status |
|---|---|---|
| Product Owner | — | ⏳ Menunggu |
| Brand / Design | — | ⏳ Menunggu |
| Developer | — | ⏳ Menunggu |

---

*PRD ini akan diupdate seiring perkembangan project WashClub.*
