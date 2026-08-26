# WashClub — Project Documentation

**Versi:** 1.0
**Tanggal:** Juli 2026
**Status:** Dokumentasi lengkap · Implementasi siap review

---

## Tentang WashClub

WashClub adalah layanan laundry berlangganan otomatis untuk masyarakat urban Indonesia. Pelanggan mengatur jadwal pickup sekali — setelah itu laundry dijemput, dicuci, dan diantar balik otomatis setiap minggu, tanpa chat, tanpa reminder, tanpa berpikir ulang.

**Tagline:** Clean Clothes, Better Days.

---

## Struktur Project

```
washclub/
│
├── README.md                    ← Panduan navigasi ini
│
├── brand-guideline/             ← Dokumentasi brand & product
│   ├── PRD-v2.md                    Product Requirements Document
│   ├── brand-guideline-v2.md        Identitas brand lengkap
│   ├── design-system-v2.md          CSS design tokens & komponen
│   ├── sitemap-v2.md                Struktur halaman & SEO
│   └── wireframe-v2.md              Wireframe ASCII semua section
│
├── copywriting/                 ← Semua teks produk
│   ├── website-copy.md              Copy landing page (source of truth)
│   ├── copywriting-master.md        Master copywriting semua section
│   ├── social-media-copy.md         Caption Instagram & WhatsApp
│   └── email-notifications.md       Email transaksional & notifikasi
│
├── icons/                       ← 44 ikon SVG Lucide outline
│   ├── nav/          (4)            ic-menu, ic-close, ic-arrow-up, ic-external-link
│   ├── hero/         (4)            ic-play, ic-arrow-down, ic-check-circle, ic-sparkles
│   ├── problem/      (5)            ic-clock, ic-message-repeat, ic-calendar-x, ic-layers, ic-wallet-alert
│   ├── how-it-works/ (3)            ic-list-check, ic-calendar-clock, ic-refresh-auto
│   ├── pricing/      (4)            ic-star, ic-check, ic-minus, ic-tag
│   ├── benefits/     (6)            ic-truck, ic-gift, ic-banknote, ic-zap, ic-calendar-check, ic-smartphone
│   ├── addons/       (6)            ic-plus-circle, ic-bolt, ic-shirt, ic-home, ic-wind, ic-droplets
│   ├── faq/          (3)            ic-chevron-down, ic-chevron-up, ic-help-circle
│   ├── footer/       (4)            ic-instagram, ic-whatsapp, ic-map-pin, ic-mail
│   ├── misc/         (5)            ic-arrow-right, ic-shield-check, ic-info, ic-alert-circle, ic-loader
│   ├── README.md                    Panduan iconography
│   └── icon-system.md               Spesifikasi 44 ikon lengkap
│
├── images/                      ← 18 aset ilustrasi (placeholder SVG)
│   ├── hero/         (2)            hero-mockup-main.svg, hero-mockup-ui.svg
│   ├── problem/      (5)            problem-no-time, chat-repeat, forgot-schedule, pile-up, uncontrolled-cost
│   ├── solution/     (1)            solution-automation.svg
│   ├── how-it-works/ (3)            how-1-choose-plan, how-2-set-schedule, how-3-auto-pickup
│   ├── plans/        (1)            plans-comparison-bg.svg
│   ├── benefits/     (1)            benefits-lifestyle.svg
│   ├── cta/          (1)            cta-hero-illustration.svg
│   ├── og/           (1)            og-image.svg → ekspor ke PNG 1200×630
│   ├── misc/         (3)            pattern-dots.svg, pattern-grid.svg, blob-gradient.svg ✓ ready
│   ├── README.md                    Panduan aset gambar
│   └── image-asset-plan.md          AI prompt & spesifikasi 18 aset
│
├── logo/                        ← Logo final (JANGAN dimodifikasi)
│   ├── washclub-logo.png            Logo utama (background terang)
│   ├── washclub-dark.png            Logo dark
│   ├── washclub-white.png           Logo putih (background gelap)
│   └── washclub-icon.png            Ikon saja — favicon, avatar
│
├── styles/
│   ├── design-system.css            CSS design tokens + komponen
│   └── main.css                     CSS section-specific landing page
│
├── js/
│   └── main.js                      Navbar · FAQ · Reveal · Back to top
│
├── index.html                   ← Landing page utama (lengkap)
├── sitemap.xml                  ← SEO sitemap
└── robots.txt                   ← SEO robots
```

---

## Status Per Area

| Area | Status | Keterangan |
|---|---|---|
| **HTML** (`index.html`) | ✅ Selesai | 9 section + navbar + footer lengkap |
| **CSS** (`styles/`) | ✅ Selesai | Design system + main styles |
| **JavaScript** (`js/`) | ✅ Selesai | Navbar, FAQ accordion, reveal, back-to-top |
| **Brand Guideline** | ✅ Selesai | PRD, brand guideline, design system, sitemap, wireframe |
| **Copywriting** | ✅ Selesai | Website, master, social media, email/notifikasi |
| **Icons** | ✅ Selesai | 44/44 ikon SVG tersedia |
| **Images — misc** | ✅ Ready | pattern-dots, pattern-grid, blob-gradient langsung pakai |
| **Images — illustrasi** | ⏳ Placeholder | 15 SVG placeholder dengan AI prompt siap generate |
| **Images — OG** | ⏳ Placeholder | og-image.svg perlu diekspor ke PNG 1200×630 |
| **Logo** | ✅ Tersedia | 4 file logo final tersedia di `/logo/` |
| **SEO** | ✅ Selesai | sitemap.xml + robots.txt |

---

## Alur Kerja Selanjutnya

### Sebelum Launch — Checklist Wajib

```
[ ] Generate ilustrasi dari AI prompt di images/image-asset-plan.md
    Tools rekomendasi: Recraft.ai (output SVG langsung)
    Priority P1 (7 aset):
    → images/hero/hero-mockup-main.svg
    → images/solution/solution-automation.svg
    → images/how-it-works/how-1-choose-plan.svg
    → images/how-it-works/how-2-set-schedule.svg
    → images/how-it-works/how-3-auto-pickup.svg
    → images/og/og-image.png (ekspor dari og-image.svg)
    → images/hero/hero-mockup-ui.svg

[ ] Isi nomor WhatsApp di semua link wa.me/ di index.html
    (cari: wa.me/?text= → ganti dengan nomor resmi)

[ ] Isi handle Instagram di footer index.html
    (cari: instagram.com/washclub.id)

[ ] Isi alamat operasional di footer index.html
    (cari: Jakarta, Indonesia)

[ ] Setup Google Analytics 4 — tambahkan GA4 script ke index.html

[ ] Ekspor og-image.svg ke PNG 1200×630
    → simpan sebagai images/og/og-image.png

[ ] Update URL canonical dari https://washclub.id/ ke domain actual

[ ] Update sitemap.xml dengan lastmod tanggal actual

[ ] Test di: Chrome, Safari, Firefox, Samsung Internet
[ ] Test PageSpeed Insights — target ≥ 90 mobile
[ ] Test aksesibilitas Lighthouse — target ≥ 90
[ ] Test di device mobile: iPhone SE, iPhone 14, Android
```

---

## Dokumen Referensi Utama

Urutan baca untuk developer/designer baru:

1. **`brand-guideline/PRD-v2.md`** — Pahami apa yang dibangun dan mengapa
2. **`brand-guideline/brand-guideline-v2.md`** — Identitas visual dan tone
3. **`brand-guideline/design-system-v2.md`** — Token CSS dan komponen
4. **`copywriting/website-copy.md`** — Semua teks landing page
5. **`brand-guideline/wireframe-v2.md`** — Layout visual setiap section

---

## Panduan Ikon

Ikon di project ini tersedia dalam dua cara:

**Via Lucide CDN (direkomendasikan)** — sudah terpasang di `index.html`:
```html
<i data-lucide="truck" class="icon-xl" aria-hidden="true"></i>
```

**Via file SVG lokal** (jika butuh kustomisasi):
```html
<img src="icons/benefits/ic-truck.svg" alt="" aria-hidden="true">
```

Lihat `icons/icon-system.md` untuk referensi lengkap 44 ikon.

---

## Panduan Ilustrasi

Semua ilustrasi di `images/` adalah **placeholder SVG** yang:
- Dapat ditampilkan langsung di browser (sudah styled dengan brand colors)
- Dilengkapi AI prompt di tiap file untuk generate ilustrasi final
- Mengikuti spesifikasi di `images/image-asset-plan.md`

Setelah generate ilustrasi final, ganti file SVG dengan hasil final tanpa mengubah nama file atau struktur folder.

---

## Kontak & Referensi

| Dokumen | Path |
|---|---|
| Product Requirements | `brand-guideline/PRD-v2.md` |
| Brand Identity | `brand-guideline/brand-guideline-v2.md` |
| CSS Source of Truth | `brand-guideline/design-system-v2.md` |
| Website Copy | `copywriting/website-copy.md` |
| Image Specs | `images/image-asset-plan.md` |
| Icon Specs | `icons/icon-system.md` |

---

*WashClub Project Documentation — Juli 2026*
*Versi terbaru selalu tersimpan di README.md di root project.*
