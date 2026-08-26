# WashClub — Brand Guideline
**Versi:** 1.0  
**Tanggal:** Juli 2026  
**Status:** Final

---

## 1. Brand Overview

| Atribut | Detail |
|---|---|
| **Nama Brand** | WashClub |
| **Tagline** | Clean Clothes, Better Days. |
| **Kategori** | Laundry Subscription / Urban Lifestyle Service |
| **Positioning** | Layanan laundry berlangganan otomatis untuk masyarakat urban |
| **Tone of Voice** | Santai, modern, profesional, tidak terlalu formal |

---

## 2. Brand Personality

WashClub dibangun di atas tujuh pilar kepribadian brand:

1. **Modern** — Tampilan dan komunikasi mengikuti standar startup teknologi terkini.
2. **Praktis** — Setiap pesan berfokus pada kemudahan dan efisiensi.
3. **Ramah** — Bahasa yang digunakan hangat, tidak kaku, dan mudah dipahami.
4. **Terpercaya** — Konsisten dalam kualitas, jadwal, dan komunikasi.
5. **Affordable** — Harga transparan tanpa biaya tersembunyi.
6. **Startup** — Berjiwa inovatif, solutif, dan terus berkembang.
7. **Minimalis** — Visual dan copy yang bersih, tidak berlebihan.

---

## 3. Target Audience

| Segmen | Karakteristik | Paket Relevan |
|---|---|---|
| **Mahasiswa** | Kos/apartemen, waktu terbatas, budget ketat | Solo Pocket |
| **Pekerja Muda** | Sibuk, mobilitas tinggi, ingin hidup praktis | Solo Pocket / Couple Pack |
| **Pasangan Muda** | Baru menikah, produktif, ingin efisiensi rumah tangga | Couple Pack |
| **Keluarga Urban** | Kebutuhan laundry besar, ingin kontrol biaya | Family Pack |

---

## 4. Logo

> ⚠️ **PENTING:** Logo resmi WashClub tersimpan di folder `/logo/`. Jangan dimodifikasi, diubah warnanya, diubah proporsinya, atau diganti dengan versi lain tanpa persetujuan.

### File Logo yang Tersedia

| File | Penggunaan |
|---|---|
| `logo/washclub-logo.png` | Logo utama — digunakan di navbar (light background) |
| `logo/washclub-dark.png` | Logo dark — digunakan di bagian dengan background gelap |
| `logo/washclub-white.png` | Logo putih — digunakan di footer dark atau CTA gelap |
| `logo/washclub-icon.png` | Ikon saja — digunakan sebagai favicon atau avatar kecil |

### Aturan Penggunaan Logo

- ✅ Gunakan logo dengan proporsi asli (jangan stretch atau squish)
- ✅ Berikan clear space minimum 16px di semua sisi logo
- ✅ Pilih versi logo yang kontras dengan background-nya
- ❌ Jangan mengubah warna logo
- ❌ Jangan menambah efek drop shadow, outline, atau glow pada logo
- ❌ Jangan menempatkan logo di atas background yang tidak kontras
- ❌ Jangan menggunakan logo di bawah ukuran 80px lebar (kecuali favicon)

---

## 5. Color Palette

### Primary Colors

| Nama | Hex | Penggunaan |
|---|---|---|
| **Primary Blue** | `#2D9CDB` | CTA button, link, highlight aktif, ikon utama |
| **Secondary Blue** | `#56CCF2` | Gradient, badge, aksen ringan, hover state |
| **Dark Navy** | `#1E293B` | Teks utama, heading, navbar dark, footer |
| **Background** | `#F8FBFF` | Background halaman, card light |

### Extended Palette

| Nama | Hex | Penggunaan |
|---|---|---|
| **White** | `#FFFFFF` | Card background, text on dark |
| **Gray 100** | `#F1F5F9` | Divider, subtle background |
| **Gray 300** | `#CBD5E1` | Border, input field |
| **Gray 500** | `#64748B` | Subtext, caption, label |
| **Gray 700** | `#334155` | Body text secondary |
| **Success** | `#22C55E` | Status aktif, konfirmasi |
| **Warning** | `#F59E0B` | Notifikasi, peringatan ringan |
| **Error** | `#EF4444` | Error state, validasi form |

### Gradient

```
Primary Gradient (CTA, Hero):
background: linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%);

Soft Background Gradient:
background: linear-gradient(180deg, #F8FBFF 0%, #EBF5FF 100%);

Glass Effect:
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(45, 156, 219, 0.15);
```

---

## 6. Typography

### Font Family

**Poppins** — digunakan untuk seluruh teks website.  
Source: Google Fonts (`https://fonts.google.com/specimen/Poppins`)  
Weight yang digunakan: 300, 400, 500, 600, 700, 800

### Type Scale

| Level | Tag | Size | Weight | Line Height | Penggunaan |
|---|---|---|---|---|---|
| **Display** | — | 56–72px | 800 | 1.1 | Hero headline besar |
| **H1** | `<h1>` | 48px | 700 | 1.2 | Hero headline |
| **H2** | `<h2>` | 36px | 700 | 1.3 | Section title |
| **H3** | `<h3>` | 24px | 600 | 1.4 | Card title, sub-section |
| **H4** | `<h4>` | 20px | 600 | 1.4 | Feature title |
| **Body Large** | `<p>` | 18px | 400 | 1.7 | Lead paragraph |
| **Body** | `<p>` | 16px | 400 | 1.7 | Body text umum |
| **Body Small** | `<p>` | 14px | 400 | 1.6 | Caption, label, footnote |
| **Caption** | `<span>` | 12px | 500 | 1.5 | Badge, tag, micro-copy |

### Aturan Tipografi

- Gunakan **letter-spacing: -0.02em** untuk heading besar agar terlihat lebih modern
- Maksimal **65–75 karakter per baris** untuk body text (keterbacaan optimal)
- Jangan gunakan teks di bawah 12px
- Pastikan color contrast ratio minimal **4.5:1** untuk body text (WCAG AA)

---

## 7. Spacing System

Gunakan kelipatan 4px (base-4 spacing system):

| Token | Value | Penggunaan |
|---|---|---|
| `space-1` | 4px | Micro gap |
| `space-2` | 8px | Inner padding kecil |
| `space-3` | 12px | Gap antar elemen kecil |
| `space-4` | 16px | Padding default |
| `space-6` | 24px | Gap antar komponen |
| `space-8` | 32px | Padding section dalam |
| `space-12` | 48px | Gap antar section |
| `space-16` | 64px | Section padding vertikal |
| `space-24` | 96px | Section besar |
| `space-32` | 128px | Hero padding |

---

## 8. Border Radius

| Token | Value | Penggunaan |
|---|---|---|
| `radius-sm` | 6px | Button small, input |
| `radius-md` | 12px | Card kecil, badge |
| `radius-lg` | 16px | Card utama |
| `radius-xl` | 24px | Card hero, modal |
| `radius-2xl` | 32px | Section background |
| `radius-full` | 9999px | Pill button, avatar |

---

## 9. Shadow System

```css
/* Soft shadow untuk card */
shadow-sm:  0 1px 3px rgba(30, 41, 59, 0.06), 0 1px 2px rgba(30, 41, 59, 0.04);
shadow-md:  0 4px 12px rgba(30, 41, 59, 0.08), 0 2px 4px rgba(30, 41, 59, 0.04);
shadow-lg:  0 8px 24px rgba(30, 41, 59, 0.10), 0 4px 8px rgba(30, 41, 59, 0.06);
shadow-xl:  0 16px 40px rgba(45, 156, 219, 0.12), 0 8px 16px rgba(45, 156, 219, 0.08);

/* Shadow untuk CTA button */
shadow-btn: 0 4px 16px rgba(45, 156, 219, 0.35);
```

---

## 10. Iconography

- Gunakan icon set **outline style** — bukan solid/filled
- Ukuran default: **24px × 24px**
- Ukuran kecil (inline): **16px × 16px**
- Ukuran besar (feature card): **40px × 40px**
- Stroke width: **1.5px**
- Rekomendasi library: **Heroicons**, **Lucide Icons**, atau **Phosphor Icons (outline)**
- Warna ikon: gunakan `#2D9CDB` untuk ikon aktif/feature, `#64748B` untuk ikon netral

### Ikon yang Diperlukan per Section

| Section | Ikon |
|---|---|
| Navbar | menu, x (close) |
| Hero | play-circle, arrow-down |
| Problem | clock, chat-bubble, calendar-x, layers, currency-dollar |
| Solution | check-circle, sparkles |
| Cara Kerja | list-bullet, calendar-days, arrow-path |
| Paket | star, check, x-mark |
| Kenapa WashClub | truck, gift, banknotes, bolt, calendar-check, device-phone-mobile |
| Layanan Tambahan | plus-circle |
| FAQ | chevron-down, chevron-up |
| Footer | instagram, whatsapp (brand icons) |

---

## 11. Illustration Style

- Gunakan ilustrasi **flat / semi-flat** dengan warna brand
- Tema: kalender, smartphone, pickup/delivery, bubble sabun, urban lifestyle
- **Jangan** gunakan foto mesin cuci sebagai visual utama
- Ilustrasi harus berwarna netral dengan aksen biru brand
- Format: SVG (lebih baik) atau PNG dengan background transparan
- Semua ilustrasi disimpan di folder `/images/illustrations/`

---

## 12. Button System

| Variant | Style | Penggunaan |
|---|---|---|
| **Primary** | bg `#2D9CDB`, text white, rounded-full | CTA utama |
| **Secondary** | border `#2D9CDB`, text `#2D9CDB`, bg transparent | CTA sekunder |
| **Ghost** | text `#2D9CDB`, no border, no bg | Link navigasi |
| **Dark** | bg `#1E293B`, text white | Footer CTA |

```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #2D9CDB, #56CCF2);
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 16px rgba(45, 156, 219, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(45, 156, 219, 0.45);
}
```

---

## 13. Tone of Voice

### Prinsip Penulisan

| ✅ Gunakan | ❌ Hindari |
|---|---|
| Kalimat pendek dan jelas | Kalimat panjang bertele-tele |
| Aktif dan langsung ke poin | Pasif dan tidak langsung |
| Bahasa Indonesia sehari-hari | Bahasa formal/birokrasi |
| Fokus pada manfaat | Fokus pada fitur teknis |
| CTA yang kuat dan jelas | CTA yang lemah dan ambigu |

### Contoh Tone

| Konteks | ❌ Hindari | ✅ Gunakan |
|---|---|---|
| Headline | "Kami menyediakan layanan laundry berlangganan" | "Laundry yang Jalan Sendiri." |
| Body | "Pelanggan dapat memilih jadwal dan proses akan berlangsung secara otomatis" | "Atur sekali, beres setiap minggu." |
| CTA | "Klik di sini untuk mendaftar" | "Mulai Berlangganan" |
| Error | "Terjadi kesalahan pada sistem" | "Ups, ada yang salah. Coba lagi ya." |

---

## 14. Do's and Don'ts

### Visual

| ✅ Do | ❌ Don't |
|---|---|
| Gunakan banyak white space | Memadatkan layout dengan terlalu banyak elemen |
| Rounded card dengan soft shadow | Card kotak tajam tanpa shadow |
| Gradient biru-ke-cyan untuk aksen | Gradien warna acak yang tidak sesuai brand |
| Ilustrasi flat bertema urban | Foto mesin cuci atau gambar laundry konvensional |
| Icon outline 24px | Icon solid/filled atau ukuran tidak konsisten |

### Copy

| ✅ Do | ❌ Don't |
|---|---|
| Headline max 8 kata | Headline lebih dari 12 kata |
| Subheadline 1–2 kalimat | Paragraf panjang di hero |
| CTA spesifik ("Mulai Berlangganan") | CTA generik ("Klik di sini") |

---

*Brand Guideline ini adalah dokumen hidup. Update dilakukan seiring perkembangan brand WashClub.*
