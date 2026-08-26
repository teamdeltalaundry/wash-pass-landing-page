# WashClub — Icon System
**Role:** Senior UI Designer  
**Versi:** 1.0  
**Tanggal:** Juli 2026  
**Style:** Rounded · Outline · Modern · Minimal · Friendly · Startup

---

## Design Language

Semua ikon WashClub mengikuti satu bahasa desain yang konsisten:

| Atribut | Nilai |
|---|---|
| **Style** | Outline (stroke-based, bukan filled) |
| **Corner style** | Rounded — `stroke-linecap: round`, `stroke-linejoin: round` |
| **Stroke width** | 1.5px (default) · 2px (emphasis/nav) |
| **Fill** | `none` — semua ikon adalah outline murni |
| **Viewbox** | `0 0 24 24` (standar untuk semua ikon 24px) |
| **Color** | `currentColor` — warna dikontrol via CSS |
| **Grid** | 24×24px dengan padding dalam 2px (area gambar 20×20px) |
| **Corner radius** | Path endpoints selalu rounded, tidak ada sudut tajam |
| **Library referensi** | Lucide Icons — https://lucide.dev |

### Warna Ikon per Konteks

| Konteks | Warna | CSS Variable |
|---|---|---|
| Ikon feature aktif | `#2D9CDB` | `--color-primary` |
| Ikon netral / body | `#64748B` | `--color-gray-500` |
| Ikon di atas background gelap | `#FFFFFF` | `--color-white` |
| Ikon success / benefit check | `#22C55E` | `--color-success` |
| Ikon warning / destructive | `#EF4444` | `--color-error` |

### Size Scale

| Token | Size | Stroke | Penggunaan |
|---|---|---|---|
| `icon-sm` | 16×16px | 1.5px | Inline teks, label, badge |
| `icon-md` | 24×24px | 1.5px | Default — navbar, body |
| `icon-lg` | 32×32px | 1.5px | Card header, list item |
| `icon-xl` | 40×40px | 2px | Feature card utama |
| `icon-2xl` | 48×48px | 2px | Hero accent, step indicator |

---

## Folder Structure

```
icons/
│
├── nav/
│   ├── ic-menu.svg
│   ├── ic-close.svg
│   ├── ic-arrow-up.svg
│   └── ic-external-link.svg
│
├── hero/
│   ├── ic-play.svg
│   ├── ic-arrow-down.svg
│   ├── ic-check-circle.svg
│   └── ic-sparkles.svg
│
├── problem/
│   ├── ic-clock.svg
│   ├── ic-message-repeat.svg
│   ├── ic-calendar-x.svg
│   ├── ic-layers.svg
│   └── ic-wallet-alert.svg
│
├── how-it-works/
│   ├── ic-list-check.svg
│   ├── ic-calendar-clock.svg
│   └── ic-refresh-auto.svg
│
├── pricing/
│   ├── ic-star.svg
│   ├── ic-check.svg
│   ├── ic-minus.svg
│   └── ic-tag.svg
│
├── benefits/
│   ├── ic-truck.svg
│   ├── ic-gift.svg
│   ├── ic-banknote.svg
│   ├── ic-zap.svg
│   ├── ic-calendar-check.svg
│   └── ic-smartphone.svg
│
├── addons/
│   ├── ic-plus-circle.svg
│   ├── ic-bolt.svg
│   ├── ic-shirt.svg
│   ├── ic-home.svg
│   ├── ic-wind.svg
│   └── ic-droplets.svg
│
├── faq/
│   ├── ic-chevron-down.svg
│   ├── ic-chevron-up.svg
│   └── ic-help-circle.svg
│
├── footer/
│   ├── ic-instagram.svg
│   ├── ic-whatsapp.svg
│   ├── ic-map-pin.svg
│   └── ic-mail.svg
│
└── misc/
    ├── ic-arrow-right.svg
    ├── ic-shield-check.svg
    ├── ic-info.svg
    ├── ic-alert-circle.svg
    └── ic-loader.svg
```

**Total: 41 ikon**

---

## Icon Specifications — Per Section

---

### NAVIGATION (`nav/`)

---

#### `ic-menu.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Membuka mobile navigation drawer |
| **Digunakan di** | Navbar — tombol hamburger menu (mobile only) |
| **Style** | Outline |
| **Size** | 24×24px |
| **Stroke** | 2px |
| **Lucide name** | `Menu` |
| **SVG path notes** | 3 garis horizontal, rounded caps, jarak merata |

```svg
<!-- ic-menu.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
</svg>
```

---

#### `ic-close.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Menutup mobile navigation drawer |
| **Digunakan di** | Navbar mobile — toggle close |
| **Style** | Outline |
| **Size** | 24×24px |
| **Stroke** | 2px |
| **Lucide name** | `X` |

```svg
<!-- ic-close.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
</svg>
```

---

#### `ic-arrow-up.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Tombol "kembali ke atas" (back to top) |
| **Digunakan di** | Fixed button kanan bawah saat user scroll jauh |
| **Style** | Outline |
| **Size** | 24×24px |
| **Stroke** | 2px |
| **Lucide name** | `ArrowUp` |

```svg
<!-- ic-arrow-up.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M12 19V5"/>
  <path d="M5 12l7-7 7 7"/>
</svg>
```

---

#### `ic-external-link.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Indikator link yang membuka tab/halaman baru |
| **Digunakan di** | Link Instagram, WhatsApp di navbar atau footer |
| **Style** | Outline |
| **Size** | 16×16px (inline) |
| **Stroke** | 1.5px |
| **Lucide name** | `ExternalLink` |

```svg
<!-- ic-external-link.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>
```

---

### HERO (`hero/`)

---

#### `ic-play.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Tombol play video demo / explainer (opsional) |
| **Digunakan di** | Hero section — tombol "Lihat Demo" jika ada video |
| **Style** | Outline dengan fill sangat ringan sebagai aksen |
| **Size** | 24×24px |
| **Stroke** | 1.5px |
| **Lucide name** | `PlayCircle` |

```svg
<!-- ic-play.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <polygon points="10 8 16 12 10 16 10 8"/>
</svg>
```

---

#### `ic-arrow-down.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Scroll indicator di bawah hero section |
| **Digunakan di** | Hero section — bawah CTA, animasi bounce ringan |
| **Style** | Outline |
| **Size** | 24×24px |
| **Stroke** | 1.5px |
| **Lucide name** | `ChevronDown` atau `ArrowDown` |

```svg
<!-- ic-arrow-down.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M12 5v14"/>
  <path d="M5 12l7 7 7-7"/>
</svg>
```

---

#### `ic-check-circle.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Trust badge di bawah hero CTA |
| **Digunakan di** | Hero — "✓ Gratis antar jemput", "✓ Mulai Rp99rb", "✓ Bisa batal" |
| **Style** | Outline |
| **Size** | 16×16px (inline) |
| **Stroke** | 1.5px |
| **Lucide name** | `CheckCircle` |

```svg
<!-- ic-check-circle.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <polyline points="22 4 12 14.01 9 11.01"/>
</svg>
```

---

#### `ic-sparkles.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Aksen visual untuk bagian "WashClub hadir" atau label solusi |
| **Digunakan di** | Hero badge · Solution section overline |
| **Style** | Outline |
| **Size** | 20×20px |
| **Stroke** | 1.5px |
| **Lucide name** | `Sparkles` |

```svg
<!-- ic-sparkles.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M12 3l1.88 5.76a1 1 0 0 0 .95.69H21l-4.94 3.59a1 1 0 0 0-.36 1.12L17.56 20 12 16.41 6.44 20l1.86-5.84a1 1 0 0 0-.36-1.12L3 9.45h6.17a1 1 0 0 0 .95-.69L12 3z"/>
</svg>
```

---

### PROBLEM (`problem/`)

---

#### `ic-clock.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Merepresentasikan pain point "tidak punya waktu mencuci" |
| **Digunakan di** | Problem section — kartu pain point 1 |
| **Style** | Outline |
| **Size** | 40×40px (feature card) |
| **Stroke** | 2px |
| **Lucide name** | `Clock` |

```svg
<!-- ic-clock.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
</svg>
```

---

#### `ic-message-repeat.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Merepresentasikan pain point "harus chat laundry setiap minggu" |
| **Digunakan di** | Problem section — kartu pain point 2 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 2px |
| **Lucide name** | `MessageCircle` + `RefreshCw` (kombinasi, atau gunakan `Repeat`) |

```svg
<!-- ic-message-repeat.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <path d="M8 10h.01M12 10h.01M16 10h.01"/>
</svg>
```

---

#### `ic-calendar-x.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Merepresentasikan pain point "lupa jadwal laundry" |
| **Digunakan di** | Problem section — kartu pain point 3 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 2px |
| **Lucide name** | `CalendarX` |

```svg
<!-- ic-calendar-x.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <line x1="10" y1="14" x2="14" y2="18"/>
  <line x1="14" y1="14" x2="10" y2="18"/>
</svg>
```

---

#### `ic-layers.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Merepresentasikan pain point "laundry sering menumpuk" |
| **Digunakan di** | Problem section — kartu pain point 4 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 2px |
| **Lucide name** | `Layers` |

```svg
<!-- ic-layers.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
  <polyline points="2 17 12 22 22 17"/>
  <polyline points="2 12 12 17 22 12"/>
</svg>
```

---

#### `ic-wallet-alert.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Merepresentasikan pain point "biaya laundry tidak terkontrol" |
| **Digunakan di** | Problem section — kartu pain point 5 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 2px |
| **Lucide name** | `Wallet` |

```svg
<!-- ic-wallet-alert.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/>
  <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
</svg>
```

---

### HOW IT WORKS (`how-it-works/`)

---

#### `ic-list-check.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Step 1 — Pilih Paket |
| **Digunakan di** | How It Works section — nomor langkah 01 |
| **Style** | Outline |
| **Size** | 48×48px |
| **Stroke** | 2px |
| **Lucide name** | `ListChecks` |

```svg
<!-- ic-list-check.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <line x1="10" y1="6" x2="21" y2="6"/>
  <line x1="10" y1="12" x2="21" y2="12"/>
  <line x1="10" y1="18" x2="21" y2="18"/>
  <polyline points="3 6 4 7 6 5"/>
  <polyline points="3 12 4 13 6 11"/>
  <polyline points="3 18 4 19 6 17"/>
</svg>
```

---

#### `ic-calendar-clock.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Step 2 — Tentukan Jadwal |
| **Digunakan di** | How It Works section — nomor langkah 02 |
| **Style** | Outline |
| **Size** | 48×48px |
| **Stroke** | 2px |
| **Lucide name** | `CalendarClock` |

```svg
<!-- ic-calendar-clock.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/>
  <path d="M16 2v4M8 2v4M3 10h5"/>
  <circle cx="18" cy="18" r="4"/>
  <path d="M18 16v2l1 1"/>
</svg>
```

---

#### `ic-refresh-auto.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Step 3 — Laundry Berjalan Otomatis |
| **Digunakan di** | How It Works section — nomor langkah 03 |
| **Style** | Outline |
| **Size** | 48×48px |
| **Stroke** | 2px |
| **Lucide name** | `RefreshCw` |

```svg
<!-- ic-refresh-auto.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
  <path d="M21 3v5h-5"/>
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
  <path d="M3 21v-5h5"/>
</svg>
```

---

### PRICING (`pricing/`)

---

#### `ic-star.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Badge "Paling Populer" pada Couple Pack |
| **Digunakan di** | Pricing section — kartu Couple Pack |
| **Style** | Outline (atau semi-fill untuk badge) |
| **Size** | 16×16px (dalam badge) |
| **Stroke** | 1.5px |
| **Lucide name** | `Star` |

```svg
<!-- ic-star.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
```

---

#### `ic-check.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Benefit list di dalam kartu paket |
| **Digunakan di** | Pricing section — semua 3 kartu paket |
| **Style** | Outline |
| **Size** | 18×18px (inline list) |
| **Stroke** | 2px |
| **Lucide name** | `Check` |

```svg
<!-- ic-check.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polyline points="20 6 9 17 4 12"/>
</svg>
```

---

#### `ic-minus.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Fitur yang tidak tersedia di paket tertentu (jika ada tabel perbandingan) |
| **Digunakan di** | Pricing section — comparison table (opsional) |
| **Style** | Outline |
| **Size** | 18×18px |
| **Stroke** | 2px |
| **Lucide name** | `Minus` |

```svg
<!-- ic-minus.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <line x1="5" y1="12" x2="19" y2="12"/>
</svg>
```

---

#### `ic-tag.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Label harga atau promo pada kartu paket |
| **Digunakan di** | Pricing section — aksen harga |
| **Style** | Outline |
| **Size** | 20×20px |
| **Stroke** | 1.5px |
| **Lucide name** | `Tag` |

```svg
<!-- ic-tag.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
  <line x1="7" y1="7" x2="7.01" y2="7"/>
</svg>
```

---

### BENEFITS (`benefits/`)

---

#### `ic-truck.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Feature — Pickup Otomatis |
| **Digunakan di** | Benefits section — feature card 1 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 1.5px |
| **Lucide name** | `Truck` |

```svg
<!-- ic-truck.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="1" y="3" width="15" height="13" rx="1"/>
  <path d="M16 8h4l3 5v3h-7V8z"/>
  <circle cx="5.5" cy="18.5" r="2.5"/>
  <circle cx="18.5" cy="18.5" r="2.5"/>
</svg>
```

---

#### `ic-gift.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Feature — Gratis Antar Jemput |
| **Digunakan di** | Benefits section — feature card 2 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 1.5px |
| **Lucide name** | `Gift` |

```svg
<!-- ic-gift.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polyline points="20 12 20 22 4 22 4 12"/>
  <rect x="2" y="7" width="20" height="5"/>
  <line x1="12" y1="22" x2="12" y2="7"/>
  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
</svg>
```

---

#### `ic-banknote.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Feature — Biaya Bulanan Tetap |
| **Digunakan di** | Benefits section — feature card 3 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 1.5px |
| **Lucide name** | `Banknote` |

```svg
<!-- ic-banknote.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="2" y="6" width="20" height="12" rx="2"/>
  <circle cx="12" cy="12" r="2"/>
  <path d="M6 12h.01M18 12h.01"/>
</svg>
```

---

#### `ic-zap.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Feature — Express Tersedia |
| **Digunakan di** | Benefits section — feature card 4 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 1.5px |
| **Lucide name** | `Zap` |

```svg
<!-- ic-zap.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>
```

---

#### `ic-calendar-check.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Feature — Laundry Terjadwal |
| **Digunakan di** | Benefits section — feature card 5 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 1.5px |
| **Lucide name** | `CalendarCheck` |

```svg
<!-- ic-calendar-check.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <path d="M9 16l2 2 4-4"/>
</svg>
```

---

#### `ic-smartphone.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Feature — Mudah & Praktis |
| **Digunakan di** | Benefits section — feature card 6 |
| **Style** | Outline |
| **Size** | 40×40px |
| **Stroke** | 1.5px |
| **Lucide name** | `Smartphone` |

```svg
<!-- ic-smartphone.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
  <line x1="12" y1="18" x2="12.01" y2="18"/>
</svg>
```

---

### ADD-ONS (`addons/`)

---

#### `ic-plus-circle.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Add-on — Extra Load |
| **Digunakan di** | Additional Services section — kartu add-on 1 |
| **Style** | Outline |
| **Size** | 32×32px |
| **Stroke** | 1.5px |
| **Lucide name** | `PlusCircle` |

```svg
<!-- ic-plus-circle.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="8" x2="12" y2="16"/>
  <line x1="8" y1="12" x2="16" y2="12"/>
</svg>
```

---

#### `ic-bolt.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Add-on — Express Pass |
| **Digunakan di** | Additional Services section — kartu add-on 2 |
| **Style** | Outline |
| **Size** | 32×32px |
| **Stroke** | 1.5px |
| **Lucide name** | `Zap` (reuse dari benefits) |

---

#### `ic-shirt.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Add-on — Delicate Care |
| **Digunakan di** | Additional Services section — kartu add-on 3 |
| **Style** | Outline |
| **Size** | 32×32px |
| **Stroke** | 1.5px |
| **Lucide name** | `Shirt` |

```svg
<!-- ic-shirt.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
</svg>
```

---

#### `ic-home.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Add-on — Home Care (sprei, selimut) |
| **Digunakan di** | Additional Services section — kartu add-on 4 |
| **Style** | Outline |
| **Size** | 32×32px |
| **Stroke** | 1.5px |
| **Lucide name** | `Home` |

```svg
<!-- ic-home.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
```

---

#### `ic-wind.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Add-on — Iron Only (setrika) |
| **Digunakan di** | Additional Services section — kartu add-on 5 |
| **Style** | Outline |
| **Size** | 32×32px |
| **Stroke** | 1.5px |
| **Lucide name** | `Wind` |

```svg
<!-- ic-wind.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
</svg>
```

---

#### `ic-droplets.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Add-on — One Time Wash |
| **Digunakan di** | Additional Services section — kartu add-on 6 |
| **Style** | Outline |
| **Size** | 32×32px |
| **Stroke** | 1.5px |
| **Lucide name** | `Droplets` |

```svg
<!-- ic-droplets.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
</svg>
```

---

### FAQ (`faq/`)

---

#### `ic-chevron-down.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Expand accordion FAQ (state tertutup) |
| **Digunakan di** | FAQ section — trigger accordion |
| **Style** | Outline |
| **Size** | 20×20px |
| **Stroke** | 2px |
| **Lucide name** | `ChevronDown` |

```svg
<!-- ic-chevron-down.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polyline points="6 9 12 15 18 9"/>
</svg>
```

---

#### `ic-chevron-up.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Collapse accordion FAQ (state terbuka) |
| **Digunakan di** | FAQ section — trigger accordion (open state) |
| **Style** | Outline |
| **Size** | 20×20px |
| **Stroke** | 2px |
| **Lucide name** | `ChevronUp` |

```svg
<!-- ic-chevron-up.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polyline points="18 15 12 9 6 15"/>
</svg>
```

---

#### `ic-help-circle.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Overline / label visual untuk section FAQ |
| **Digunakan di** | FAQ section — header visual aksen |
| **Style** | Outline |
| **Size** | 24×24px |
| **Stroke** | 1.5px |
| **Lucide name** | `HelpCircle` |

```svg
<!-- ic-help-circle.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
```

---

### FOOTER (`footer/`)

---

#### `ic-instagram.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Link Instagram WashClub |
| **Digunakan di** | Footer — social media links |
| **Style** | Outline (brand-consistent, bukan logo asli Instagram) |
| **Size** | 24×24px |
| **Stroke** | 1.5px |
| **Lucide name** | `Instagram` |

```svg
<!-- ic-instagram.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
</svg>
```

---

#### `ic-whatsapp.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Link WhatsApp WashClub |
| **Digunakan di** | Footer — social media links · CTA section |
| **Style** | Outline (brand-consistent) |
| **Size** | 24×24px |
| **Stroke** | 1.5px |
| **Sumber** | Simple Icons (https://simpleicons.org/icons/whatsapp.svg) atau custom outline |

```svg
<!-- ic-whatsapp.svg — outline style -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
</svg>
```

---

#### `ic-map-pin.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Menampilkan alamat operasional WashClub |
| **Digunakan di** | Footer — informasi alamat |
| **Style** | Outline |
| **Size** | 16×16px (inline teks) |
| **Stroke** | 1.5px |
| **Lucide name** | `MapPin` |

```svg
<!-- ic-map-pin.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
```

---

#### `ic-mail.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Kontak email (opsional di footer) |
| **Digunakan di** | Footer — kontak email |
| **Style** | Outline |
| **Size** | 16×16px (inline teks) |
| **Stroke** | 1.5px |
| **Lucide name** | `Mail` |

```svg
<!-- ic-mail.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22 6 12 13 2 6"/>
</svg>
```

---

### MISC (`misc/`)

---

#### `ic-arrow-right.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Arah navigasi — CTA link, "Lihat selengkapnya" |
| **Digunakan di** | Digunakan di banyak section sebagai CTA arrow |
| **Style** | Outline |
| **Size** | 20×20px |
| **Stroke** | 2px |
| **Lucide name** | `ArrowRight` |

```svg
<!-- ic-arrow-right.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
</svg>
```

---

#### `ic-shield-check.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Elemen kepercayaan — "Pakaian aman", garansi layanan |
| **Digunakan di** | Hero trust badge · Benefits section · CTA section |
| **Style** | Outline |
| **Size** | 20×20px |
| **Stroke** | 1.5px |
| **Lucide name** | `ShieldCheck` |

```svg
<!-- ic-shield-check.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>
```

---

#### `ic-info.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Tooltip, catatan kecil di bawah kartu paket |
| **Digunakan di** | Pricing section — catatan "Bisa batal kapan saja" |
| **Style** | Outline |
| **Size** | 16×16px |
| **Stroke** | 1.5px |
| **Lucide name** | `Info` |

```svg
<!-- ic-info.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12.01" y2="8"/>
</svg>
```

---

#### `ic-alert-circle.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Error state — form validation, pesan gagal |
| **Digunakan di** | Form pendaftaran — error message |
| **Style** | Outline |
| **Size** | 16×16px |
| **Stroke** | 1.5px |
| **Lucide name** | `AlertCircle` |

```svg
<!-- ic-alert-circle.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="8" x2="12" y2="12"/>
  <line x1="12" y1="16" x2="12.01" y2="16"/>
</svg>
```

---

#### `ic-loader.svg`

| Atribut | Detail |
|---|---|
| **Tujuan** | Loading state — saat submit form atau aksi async |
| **Digunakan di** | CTA button — loading spinner state |
| **Style** | Outline (animasi spin via CSS) |
| **Size** | 20×20px |
| **Stroke** | 2px |
| **Lucide name** | `Loader2` |

```svg
<!-- ic-loader.svg — tambahkan class "animate-spin" di HTML -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
     viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true" class="animate-spin">
  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
</svg>
```

```css
/* CSS spin animation */
@keyframes spin { to { transform: rotate(360deg); } }
.animate-spin { animation: spin 0.75s linear infinite; }
```

---

---

## Implementation Guide

### Option A — Lucide via CDN (Direkomendasikan untuk landing page)

```html
<!-- Tambahkan sebelum </body> -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- Penggunaan di HTML -->
<i data-lucide="truck"           class="icon-xl"  aria-hidden="true"></i>
<i data-lucide="calendar-check"  class="icon-xl"  aria-hidden="true"></i>
<i data-lucide="chevron-down"    class="icon-md"  aria-hidden="true"></i>

<!-- Inisialisasi -->
<script>lucide.createIcons();</script>
```

### Option B — Inline SVG (untuk ikon yang butuh animasi atau warna custom)

```html
<!-- Embed langsung di HTML -->
<span class="icon-box" aria-hidden="true">
  <!-- paste SVG code dari dokumen ini -->
</span>
```

### Option C — CSS Sprite (untuk performa lebih baik jika banyak ikon)

Gabungkan semua ikon ke satu file `icons/sprite.svg`, gunakan `<use>`:

```html
<svg aria-hidden="true"><use href="/icons/sprite.svg#ic-truck"/></svg>
```

---

## CSS Icon System

```css
/* Base icon reset */
[data-lucide],
.icon {
  display: inline-block;
  vertical-align: middle;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  flex-shrink: 0;
}

/* Size tokens */
.icon-sm  { width: 16px; height: 16px; }
.icon-md  { width: 24px; height: 24px; }
.icon-lg  { width: 32px; height: 32px; }
.icon-xl  { width: 40px; height: 40px; }
.icon-2xl { width: 48px; height: 48px; }

/* Stroke emphasis */
.icon-bold { stroke-width: 2; }

/* Color variants */
.icon-primary { color: var(--color-primary); }    /* #2D9CDB */
.icon-muted   { color: var(--color-gray-500); }   /* #64748B */
.icon-white   { color: var(--color-white); }      /* #FFFFFF */
.icon-success { color: var(--color-success); }    /* #22C55E */
.icon-danger  { color: var(--color-error); }      /* #EF4444 */

/* Icon box wrapper (feature cards) */
.icon-box {
  display: inline-grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg,
    rgba(45, 156, 219, 0.10),
    rgba(86, 204, 242, 0.10));
  color: var(--color-primary);
  flex-shrink: 0;
}

/* Icon box — dark variant (for dark sections) */
.icon-box-dark {
  background: rgba(255, 255, 255, 0.10);
  color: var(--color-white);
}
```

---

## Accessibility Requirements

Setiap penggunaan ikon harus memenuhi salah satu dari dua pola ini:

### Ikon Dekoratif (mayoritas kasus)
```html
<!-- aria-hidden menyembunyikan dari screen reader -->
<i data-lucide="truck" class="icon-xl" aria-hidden="true"></i>
<span>Pickup Otomatis</span>
```

### Ikon Fungsional (tanpa teks pendamping)
```html
<!-- aria-label mendeskripsikan fungsi ikon -->
<button aria-label="Buka menu navigasi">
  <i data-lucide="menu" class="icon-md" aria-hidden="true"></i>
</button>

<a href="https://instagram.com/washclub.id"
   aria-label="Ikuti WashClub di Instagram"
   target="_blank" rel="noopener noreferrer">
  <i data-lucide="instagram" class="icon-md" aria-hidden="true"></i>
</a>
```

---

## Master Summary Table

| # | File | Section | Lucide Name | Size | Stroke | Priority |
|---|---|---|---|---|---|---|
| 1 | `nav/ic-menu.svg` | Navbar | `Menu` | 24px | 2px | 🔴 P1 |
| 2 | `nav/ic-close.svg` | Navbar | `X` | 24px | 2px | 🔴 P1 |
| 3 | `nav/ic-arrow-up.svg` | Global | `ArrowUp` | 24px | 2px | 🟢 P3 |
| 4 | `nav/ic-external-link.svg` | Global | `ExternalLink` | 16px | 1.5px | 🟢 P3 |
| 5 | `hero/ic-play.svg` | Hero | `PlayCircle` | 24px | 1.5px | 🟡 P2 |
| 6 | `hero/ic-arrow-down.svg` | Hero | `ArrowDown` | 24px | 1.5px | 🟡 P2 |
| 7 | `hero/ic-check-circle.svg` | Hero | `CheckCircle` | 16px | 1.5px | 🔴 P1 |
| 8 | `hero/ic-sparkles.svg` | Hero / Solution | `Sparkles` | 20px | 1.5px | 🟡 P2 |
| 9 | `problem/ic-clock.svg` | Problem | `Clock` | 40px | 1.5px | 🔴 P1 |
| 10 | `problem/ic-message-repeat.svg` | Problem | `MessageCircle` | 40px | 1.5px | 🔴 P1 |
| 11 | `problem/ic-calendar-x.svg` | Problem | `CalendarX` | 40px | 1.5px | 🔴 P1 |
| 12 | `problem/ic-layers.svg` | Problem | `Layers` | 40px | 1.5px | 🔴 P1 |
| 13 | `problem/ic-wallet-alert.svg` | Problem | `Wallet` | 40px | 1.5px | 🔴 P1 |
| 14 | `how-it-works/ic-list-check.svg` | How It Works | `ListChecks` | 48px | 1.5px | 🔴 P1 |
| 15 | `how-it-works/ic-calendar-clock.svg` | How It Works | `CalendarClock` | 48px | 1.5px | 🔴 P1 |
| 16 | `how-it-works/ic-refresh-auto.svg` | How It Works | `RefreshCw` | 48px | 1.5px | 🔴 P1 |
| 17 | `pricing/ic-star.svg` | Pricing | `Star` | 16px | 1.5px | 🔴 P1 |
| 18 | `pricing/ic-check.svg` | Pricing | `Check` | 18px | 2.5px | 🔴 P1 |
| 19 | `pricing/ic-minus.svg` | Pricing | `Minus` | 18px | 2px | 🟢 P3 |
| 20 | `pricing/ic-tag.svg` | Pricing | `Tag` | 20px | 1.5px | 🟡 P2 |
| 21 | `benefits/ic-truck.svg` | Benefits | `Truck` | 40px | 1.5px | 🔴 P1 |
| 22 | `benefits/ic-gift.svg` | Benefits | `Gift` | 40px | 1.5px | 🔴 P1 |
| 23 | `benefits/ic-banknote.svg` | Benefits | `Banknote` | 40px | 1.5px | 🔴 P1 |
| 24 | `benefits/ic-zap.svg` | Benefits | `Zap` | 40px | 1.5px | 🔴 P1 |
| 25 | `benefits/ic-calendar-check.svg` | Benefits | `CalendarCheck` | 40px | 1.5px | 🔴 P1 |
| 26 | `benefits/ic-smartphone.svg` | Benefits | `Smartphone` | 40px | 1.5px | 🔴 P1 |
| 27 | `addons/ic-plus-circle.svg` | Add-ons | `PlusCircle` | 32px | 1.5px | 🟡 P2 |
| 28 | `addons/ic-bolt.svg` | Add-ons | `Zap` (reuse) | 32px | 1.5px | 🟡 P2 |
| 29 | `addons/ic-shirt.svg` | Add-ons | `Shirt` | 32px | 1.5px | 🟡 P2 |
| 30 | `addons/ic-home.svg` | Add-ons | `Home` | 32px | 1.5px | 🟡 P2 |
| 31 | `addons/ic-wind.svg` | Add-ons | `Wind` | 32px | 1.5px | 🟡 P2 |
| 32 | `addons/ic-droplets.svg` | Add-ons | `Droplets` | 32px | 1.5px | 🟡 P2 |
| 33 | `faq/ic-chevron-down.svg` | FAQ | `ChevronDown` | 20px | 2px | 🔴 P1 |
| 34 | `faq/ic-chevron-up.svg` | FAQ | `ChevronUp` | 20px | 2px | 🔴 P1 |
| 35 | `faq/ic-help-circle.svg` | FAQ | `HelpCircle` | 24px | 1.5px | 🟡 P2 |
| 36 | `footer/ic-instagram.svg` | Footer | `Instagram` | 24px | 1.5px | 🔴 P1 |
| 37 | `footer/ic-whatsapp.svg` | Footer | Custom outline | 24px | 1.5px | 🔴 P1 |
| 38 | `footer/ic-map-pin.svg` | Footer | `MapPin` | 16px | 1.5px | 🔴 P1 |
| 39 | `footer/ic-mail.svg` | Footer | `Mail` | 16px | 1.5px | 🟡 P2 |
| 40 | `misc/ic-arrow-right.svg` | Global | `ArrowRight` | 20px | 2px | 🔴 P1 |
| 41 | `misc/ic-shield-check.svg` | Global | `ShieldCheck` | 20px | 1.5px | 🟡 P2 |
| 42 | `misc/ic-info.svg` | Pricing | `Info` | 16px | 1.5px | 🟢 P3 |
| 43 | `misc/ic-alert-circle.svg` | Form | `AlertCircle` | 16px | 1.5px | 🟡 P2 |
| 44 | `misc/ic-loader.svg` | Form / Button | `Loader2` | 20px | 2px | 🟡 P2 |

**Total: 44 ikon**  
🔴 P1 (Wajib ada): 24 ikon  
🟡 P2 (Penting): 14 ikon  
🟢 P3 (Opsional): 6 ikon

---

> Semua ikon P1 bisa langsung di-load via Lucide CDN tanpa perlu file SVG terpisah.  
> File SVG individual hanya diperlukan jika tidak menggunakan CDN, atau butuh kustomisasi khusus.

---

*Icon system ini adalah bagian dari WashClub Design System. Konsistensi penggunaan ikon adalah kunci tampilan yang rapi dan profesional.*
