# WashClub — Sitemap
**Versi:** 1.0  
**Tanggal:** Juli 2026

---

## Sitemap Visual

```
washclub.id/
│
├── [ / ]  Landing Page (Single Page)
│   │
│   ├── #beranda          → Hero Section
│   ├── #masalah          → Problem Section
│   ├── #solusi           → Solution Section
│   ├── #cara-kerja       → Cara Kerja Section
│   ├── #paket            → Paket Langganan Section
│   ├── #keunggulan       → Kenapa WashClub Section
│   ├── #tambahan         → Layanan Tambahan Section
│   ├── #faq              → FAQ Section
│   └── #footer           → Footer
│
├── [ /sitemap.xml ]      → XML Sitemap untuk Search Engine
└── [ /robots.txt ]       → Instruksi crawler
```

---

## Navigasi Utama (Navbar)

| Label | Anchor / Link | Keterangan |
|---|---|---|
| Beranda | `#beranda` | Scroll ke Hero Section |
| Cara Kerja | `#cara-kerja` | Scroll ke section Cara Kerja |
| Paket | `#paket` | Scroll ke section Paket Langganan |
| FAQ | `#faq` | Scroll ke section FAQ |
| Hubungi Kami | `#footer` atau `wa.me/` | Scroll ke footer / buka WhatsApp |
| Mulai Berlangganan | `#paket` | Scroll ke paket (CTA primary) |

---

## Navigasi Footer

| Kolom | Label | Link |
|---|---|---|
| **Layanan** | Cara Kerja | `#cara-kerja` |
| | Paket | `#paket` |
| | Layanan Tambahan | `#tambahan` |
| **Bantuan** | FAQ | `#faq` |
| | Hubungi Kami | `wa.me/[nomor]` |
| **Ikuti Kami** | Instagram | `instagram.com/washclub.id` |
| | WhatsApp | `wa.me/[nomor]` |

---

## Struktur Anchor Section

| Section | ID | Elemen Utama |
|---|---|---|
| Hero | `beranda` | H1, subheadline, 2 CTA, ilustrasi |
| Problem | `masalah` | H2, 5 pain point cards |
| Solution | `solusi` | H2, 3 solution points |
| Cara Kerja | `cara-kerja` | H2, 3 langkah |
| Paket | `paket` | H2, 3 kartu paket |
| Kenapa WashClub | `keunggulan` | H2, 6 feature cards |
| Layanan Tambahan | `tambahan` | H2, 6 add-on cards |
| FAQ | `faq` | H2, 8 accordion items |
| CTA Akhir | `cta-akhir` | H2, 2 CTA button |
| Footer | `footer` | Logo, link, sosmed, copyright |

---

## Sitemap XML (template untuk /sitemap.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://washclub.id/</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## robots.txt (template)

```
User-agent: *
Allow: /

Sitemap: https://washclub.id/sitemap.xml
```

---

*Sitemap ini akan berkembang saat fase berikutnya (dashboard, blog) mulai dibangun.*
