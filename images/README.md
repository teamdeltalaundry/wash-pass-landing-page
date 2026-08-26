# WashClub — Image Assets

Folder ini berisi seluruh aset gambar untuk landing page WashClub.

---

## Struktur Folder

```
images/
├── illustrations/          # Ilustrasi SVG/PNG per section
│   ├── hero-mockup.svg         [PLACEHOLDER] Smartphone mockup jadwal pickup
│   ├── problem-stress.svg      [PLACEHOLDER] Ilustrasi orang kerepotan laundry
│   ├── solution-auto.svg       [PLACEHOLDER] Ilustrasi otomatisasi laundry
│   ├── how-1-choose.svg        [PLACEHOLDER] Ilustrasi memilih paket
│   ├── how-2-schedule.svg      [PLACEHOLDER] Ilustrasi menentukan jadwal
│   └── how-3-auto.svg          [PLACEHOLDER] Ilustrasi laundry berjalan otomatis
│
├── og/                     # Open Graph & Social Media images
│   └── og-image.png            [PLACEHOLDER] OG image 1200x630px untuk SEO
│
└── misc/                   # Gambar pendukung lainnya
    └── pattern-bg.svg          [PLACEHOLDER] Background pattern ringan (opsional)
```

---

## Detail Spesifikasi Aset

### illustrations/

| File | Dimensi | Format | Deskripsi | Status |
|---|---|---|---|---|
| `hero-mockup.svg` | 480×560px | SVG | Smartphone mockup menampilkan UI jadwal pickup otomatis WashClub. Warna brand #2D9CDB. | **PLACEHOLDER** |
| `problem-stress.svg` | 400×400px | SVG | Ilustrasi flat orang urban yang kelelahan mengurus laundry menumpuk. | **PLACEHOLDER** |
| `solution-auto.svg` | 400×400px | SVG | Ilustrasi flat smartphone + kalender + bubble yang menggambarkan automasi laundry. | **PLACEHOLDER** |
| `how-1-choose.svg` | 280×280px | SVG | Ilustrasi tangan memilih paket di layar smartphone. | **PLACEHOLDER** |
| `how-2-schedule.svg` | 280×280px | SVG | Ilustrasi kalender dengan tanda centang jadwal terpilih. | **PLACEHOLDER** |
| `how-3-auto.svg` | 280×280px | SVG | Ilustrasi kurir/motor pickup dengan tanda check otomatis. | **PLACEHOLDER** |

### og/

| File | Dimensi | Format | Deskripsi | Status |
|---|---|---|---|---|
| `og-image.png` | 1200×630px | PNG | Open Graph image untuk Facebook, WhatsApp, Twitter share. Gunakan logo + tagline di atas background brand. | **PLACEHOLDER** |

### misc/

| File | Dimensi | Format | Deskripsi | Status |
|---|---|---|---|---|
| `pattern-bg.svg` | tile | SVG | Subtle dot/grid pattern untuk background section tertentu. Warna sangat muda dari #2D9CDB (opacity 5%). | **PLACEHOLDER** |

---

## Panduan Ilustrasi

- **Style:** Flat / semi-flat, modern, clean
- **Warna utama:** #2D9CDB, #56CCF2, #F8FBFF
- **Warna aksen:** #1E293B untuk elemen gelap
- **Stroke:** 1.5–2px, rounded caps
- **Background ilustrasi:** Transparan atau #F8FBFF
- **Format:** SVG diutamakan untuk kualitas retina dan file size kecil

## Tema Ilustrasi

Gunakan ilustrasi yang menggambarkan:
- 📱 Smartphone & aplikasi
- 📅 Kalender & jadwal
- 🚗 Pickup & delivery urban
- 🫧 Bubble sabun (identitas laundry, bukan mesin cuci)
- 🏙️ Urban lifestyle — apartemen, kos, keluarga muda
- 🔄 Subscription & otomatisasi

**Jangan gunakan:**
- ❌ Foto mesin cuci
- ❌ Foto ember/papan cuci
- ❌ Ilustrasi laundry konvensional
- ❌ Foto wajah orang nyata (kecuali ada foto resmi)

---

## Referensi Lengkap

Untuk spesifikasi detail setiap aset (dimensi, AI prompt, prioritas), lihat:
**`images/image-asset-plan.md`**

---

## Cara Mengganti Placeholder

1. Generate ilustrasi menggunakan AI prompt dari `image-asset-plan.md`
2. Optimasi SVG dengan SVGO sebelum digunakan
3. Simpan dengan nama file yang sama persis
4. Hapus tag `[PLACEHOLDER]` dari file ini setelah diganti

---

*Seluruh placeholder dapat diganti di kemudian hari tanpa mengubah struktur kode.*
