# WashClub — Sitemap
**Versi:** 2.0  
**Tanggal:** Juli 2026  
**Prinsip:** Minimal navigation · Fast to convert · No dead ends

---

## VISUAL SITEMAP

```
washclub.id
│
├── / ──────────────────────── Home (Landing Page)
│   ├── #beranda               Hero Section
│   ├── #cara-kerja            How It Works
│   ├── #paket                 Pricing Section
│   ├── #faq                   FAQ Section
│   └── #footer                Footer / Contact
│
├── /harga ─────────────────── Pricing (dedicated page)
│
├── /faq ───────────────────── FAQ (dedicated page)
│
├── /hubungi ───────────────── Contact
│
├── /berlangganan ──────────── Subscription (sign-up flow)
│
├── /privasi ───────────────── Privacy Policy
│
└── /syarat ────────────────── Terms of Service
```

---

## PAGE INVENTORY

| # | URL | Page Name | Type | Priority | Index |
|---|---|---|---|---|---|
| 1 | `/` | Home | Landing Page | 1.0 | ✅ Yes |
| 2 | `/harga` | Pricing | Content | 0.9 | ✅ Yes |
| 3 | `/faq` | FAQ | Content | 0.8 | ✅ Yes |
| 4 | `/hubungi` | Contact | Utility | 0.7 | ✅ Yes |
| 5 | `/berlangganan` | Subscription | Conversion | 0.9 | ✅ Yes |
| 6 | `/privasi` | Privacy Policy | Legal | 0.3 | ✅ Yes |
| 7 | `/syarat` | Terms of Service | Legal | 0.3 | ✅ Yes |

---

## NAVIGATION STRUCTURE

### Primary Navigation (Navbar)

Minimal — hanya 4 link utama + 1 CTA button.

```
Logo    →  /

Beranda    →  / (atau #beranda jika sudah di home)
Paket      →  /harga
FAQ        →  /faq
Hubungi    →  /hubungi

[Mulai Berlangganan]  →  /berlangganan
```

### Footer Navigation

Dibagi 3 kolom — ringkas dan fungsional.

```
Kolom 1: WashClub
──────────────────
Logo
Tagline: "Clean Clothes, Better Days."
Deskripsi singkat

Kolom 2: Layanan
──────────────────
Cara Kerja     →  /#cara-kerja
Paket          →  /harga
Langganan      →  /berlangganan

Kolom 3: Bantuan & Legal
──────────────────────────
FAQ            →  /faq
Hubungi Kami   →  /hubungi
Kebijakan Privasi → /privasi
Syarat & Ketentuan → /syarat

Social:
[Instagram]  [WhatsApp]

Copyright:
© 2026 WashClub
```

---

## PAGE DETAILS

---

### 1. Home — `/`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/` |
| **Title** | WashClub — Laundry Berlangganan Otomatis. Mulai Rp99.000/bulan. |
| **Description** | Atur jadwal sekali, WashClub jemput dan antar laundry otomatis setiap minggu. Mulai dari Rp99.000/bulan. |
| **Priority** | 1.0 |
| **Change Freq** | monthly |
| **Canonical** | `https://washclub.id/` |

**Section anchors:**
```
#beranda        →  Hero
#cara-kerja     →  How It Works
#paket          →  Pricing
#keunggulan     →  Benefits
#faq            →  FAQ
#footer         →  Footer
```

---

### 2. Pricing — `/harga`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/harga` |
| **Title** | Paket Langganan WashClub — Mulai Rp99.000/bulan |
| **Description** | Pilih paket laundry berlangganan yang sesuai. Solo Pocket, Couple Pack, atau Family Pack. Gratis antar jemput. |
| **Priority** | 0.9 |
| **Change Freq** | monthly |
| **Canonical** | `https://washclub.id/harga` |

**Konten:**
- 3 pricing cards (Solo, Couple, Family)
- Add-on services
- CTA ke `/berlangganan`
- Link FAQ

---

### 3. FAQ — `/faq`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/faq` |
| **Title** | FAQ WashClub — Pertanyaan yang Sering Ditanya |
| **Description** | Temukan jawaban atas pertanyaan umum tentang layanan laundry berlangganan WashClub. Cara kerja, jadwal, harga, dan pembatalan. |
| **Priority** | 0.8 |
| **Change Freq** | monthly |
| **Canonical** | `https://washclub.id/faq` |

**Konten:**
- Semua 8+ pertanyaan dalam format accordion
- CTA ke WhatsApp untuk pertanyaan lain
- Link ke `/berlangganan`

---

### 4. Contact — `/hubungi`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/hubungi` |
| **Title** | Hubungi WashClub — Chat, WhatsApp & Instagram |
| **Description** | Punya pertanyaan? Hubungi tim WashClub via WhatsApp, Instagram, atau formulir di bawah ini. |
| **Priority** | 0.7 |
| **Change Freq** | yearly |
| **Canonical** | `https://washclub.id/hubungi` |

**Konten:**
- Nomor WhatsApp (klik to chat)
- Link Instagram
- Alamat operasional
- Form kontak sederhana (opsional)

---

### 5. Subscription — `/berlangganan`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/berlangganan` |
| **Title** | Mulai Berlangganan WashClub — Laundry Otomatis dari Rp99.000 |
| **Description** | Daftar WashClub sekarang. Pilih paket, tentukan jadwal, dan laundry berjalan otomatis setiap minggu. |
| **Priority** | 0.9 |
| **Change Freq** | monthly |
| **Canonical** | `https://washclub.id/berlangganan` |

**Konten:**
- Form pendaftaran: nama, email, HP, alamat, paket, jadwal
- Ringkasan paket yang dipilih
- Trust badges
- CTA submit

---

### 6. Privacy Policy — `/privasi`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/privasi` |
| **Title** | Kebijakan Privasi — WashClub |
| **Description** | Pelajari bagaimana WashClub mengumpulkan, menggunakan, dan melindungi data pribadi pelanggan. |
| **Priority** | 0.3 |
| **Change Freq** | yearly |
| **Canonical** | `https://washclub.id/privasi` |

---

### 7. Terms of Service — `/syarat`

| Atribut | Detail |
|---|---|
| **URL** | `https://washclub.id/syarat` |
| **Title** | Syarat & Ketentuan — WashClub |
| **Description** | Baca syarat dan ketentuan layanan laundry berlangganan WashClub sebelum mendaftar. |
| **Priority** | 0.3 |
| **Change Freq** | yearly |
| **Canonical** | `https://washclub.id/syarat` |

---

## USER FLOW

```
DISCOVERY                CONSIDERATION              CONVERSION
─────────────            ─────────────────          ────────────────
Google Search       →    / (Home)              →    /berlangganan
Instagram Link      →    /harga (Pricing)      →    /berlangganan
WhatsApp Link       →    /faq (FAQ)            →    /berlangganan
Word of Mouth       →    /hubungi (Contact)    →    WhatsApp Chat
                         ↓
                    FAQ: /faq
                    Harga: /harga
                         ↓
                    /berlangganan  ←── PRIMARY GOAL
```

---

## XML SITEMAP

Simpan sebagai `/sitemap.xml` di root domain.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Home -->
  <url>
    <loc>https://washclub.id/</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Subscription (high conversion priority) -->
  <url>
    <loc>https://washclub.id/berlangganan</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Pricing -->
  <url>
    <loc>https://washclub.id/harga</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- FAQ -->
  <url>
    <loc>https://washclub.id/faq</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Contact -->
  <url>
    <loc>https://washclub.id/hubungi</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Privacy Policy -->
  <url>
    <loc>https://washclub.id/privasi</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Terms of Service -->
  <url>
    <loc>https://washclub.id/syarat</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
```

---

## ROBOTS.TXT

Simpan sebagai `/robots.txt` di root domain.

```
User-agent: *
Allow: /

# Block internal/utility paths (jika ada)
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# Sitemap location
Sitemap: https://washclub.id/sitemap.xml
```

---

## HTML SITEMAP (untuk halaman /sitemap)

Jika ingin menambahkan halaman sitemap yang bisa dikunjungi user:

```html
<!-- /sitemap atau link di footer -->
<section class="sitemap-page">
  <div class="container">
    <h1>Sitemap WashClub</h1>

    <div class="sitemap-grid">

      <div class="sitemap-group">
        <h2>Halaman Utama</h2>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/harga">Paket & Harga</a></li>
          <li><a href="/berlangganan">Mulai Berlangganan</a></li>
        </ul>
      </div>

      <div class="sitemap-group">
        <h2>Bantuan</h2>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/hubungi">Hubungi Kami</a></li>
        </ul>
      </div>

      <div class="sitemap-group">
        <h2>Legal</h2>
        <ul>
          <li><a href="/privasi">Kebijakan Privasi</a></li>
          <li><a href="/syarat">Syarat &amp; Ketentuan</a></li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

---

## SEO NOTES

| Halaman | Target Keyword | Search Intent |
|---|---|---|
| `/` | laundry berlangganan, laundry subscription jakarta | Informational + Transactional |
| `/harga` | harga laundry berlangganan, paket laundry bulanan | Transactional |
| `/faq` | cara kerja laundry antar jemput, laundry pickup otomatis | Informational |
| `/berlangganan` | daftar laundry berlangganan, langganan washclub | Transactional |
| `/hubungi` | kontak washclub, nomor wa laundry | Navigational |

---

## BREADCRUMB SCHEMA

Tambahkan di halaman selain home:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://washclub.id/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Paket & Harga",
      "item": "https://washclub.id/harga"
    }
  ]
}
</script>
```

---

## 404 PAGE

Halaman 404 harus memiliki:
- Logo WashClub
- Pesan singkat: *"Halaman tidak ditemukan."*
- 2 tombol: **Kembali ke Beranda** + **Lihat Paket**
- Tidak ada dead end — selalu ada jalan keluar

---

*Sitemap ini adalah acuan struktur navigasi WashClub v1.0.*  
*Diperluas saat fase dashboard, blog, atau multi-kota ditambahkan.*
