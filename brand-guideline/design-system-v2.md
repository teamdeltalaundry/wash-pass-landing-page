# WashClub Design System
**Versi:** 2.0  
**Tanggal:** Juli 2026  
**Format:** CSS Custom Properties + Component Specs  
**Font:** Poppins (Google Fonts)  
**Style:** Modern · Rounded · Clean · Startup

---

> Dokumen ini adalah implementasi teknis dari Brand Guideline.  
> Semua nilai di sini adalah **source of truth** untuk developer.  
> Copy-paste langsung ke `styles/design-system.css`.

---

## DAFTAR ISI

1. [Design Tokens](#1-design-tokens)
2. [Typography](#2-typography)
3. [Spacing](#3-spacing)
4. [Border Radius](#4-border-radius)
5. [Shadows](#5-shadows)
6. [Buttons](#6-buttons)
7. [Cards](#7-cards)
8. [Icons](#8-icons)
9. [Form Elements](#9-form-elements)
10. [Badges & Tags](#10-badges--tags)
11. [Layout Utilities](#11-layout-utilities)
12. [Animation Tokens](#12-animation-tokens)
13. [Complete CSS File](#13-complete-css-file)

---

---

## 1. DESIGN TOKENS

### Color System

```
PRIMARY PALETTE
────────────────────────────────────────────────────
  WashClub Blue     #2D9CDB    rgb(45, 156, 219)
  Sky Blue          #56CCF2    rgb(86, 204, 242)

DARK / TEXT
────────────────────────────────────────────────────
  Dark Navy         #1E293B    rgb(30, 41, 59)

BACKGROUND
────────────────────────────────────────────────────
  Page Background   #F8FBFF    rgb(248, 251, 255)

NEUTRAL SCALE
────────────────────────────────────────────────────
  White             #FFFFFF
  Gray 50           #F8FAFC
  Gray 100          #F1F5F9
  Gray 200          #E2E8F0
  Gray 300          #CBD5E1
  Gray 400          #94A3B8
  Gray 500          #64748B
  Gray 600          #475569
  Gray 700          #334155
  Gray 800          #1E293B    (same as Dark)

FUNCTIONAL
────────────────────────────────────────────────────
  Success           #22C55E
  Success Light     #DCFCE7
  Warning           #F59E0B
  Warning Light     #FEF3C7
  Error             #EF4444
  Error Light       #FEE2E2
  Info              #3B82F6
  Info Light        #DBEAFE
```

### CSS Custom Properties

```css
/* ─────────────────────────────────────────
   WASHCLUB DESIGN TOKENS
   File: styles/design-system.css
   ───────────────────────────────────────── */

:root {

  /* === BRAND COLORS === */
  --clr-primary:        #2D9CDB;
  --clr-primary-hover:  #2589c4;
  --clr-primary-light:  #EBF5FF;
  --clr-secondary:      #56CCF2;
  --clr-secondary-light:#E0F7FE;

  /* === SURFACE COLORS === */
  --clr-dark:           #1E293B;
  --clr-dark-deeper:    #0F172A;
  --clr-bg:             #F8FBFF;
  --clr-white:          #FFFFFF;

  /* === NEUTRAL SCALE === */
  --clr-gray-50:        #F8FAFC;
  --clr-gray-100:       #F1F5F9;
  --clr-gray-200:       #E2E8F0;
  --clr-gray-300:       #CBD5E1;
  --clr-gray-400:       #94A3B8;
  --clr-gray-500:       #64748B;
  --clr-gray-600:       #475569;
  --clr-gray-700:       #334155;
  --clr-gray-800:       #1E293B;

  /* === FUNCTIONAL COLORS === */
  --clr-success:        #22C55E;
  --clr-success-light:  #DCFCE7;
  --clr-warning:        #F59E0B;
  --clr-warning-light:  #FEF3C7;
  --clr-error:          #EF4444;
  --clr-error-light:    #FEE2E2;
  --clr-info:           #3B82F6;
  --clr-info-light:     #DBEAFE;

  /* === GRADIENTS === */
  --gradient-primary:   linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%);
  --gradient-primary-v: linear-gradient(180deg, #2D9CDB 0%, #56CCF2 100%);
  --gradient-bg:        linear-gradient(180deg, #F8FBFF 0%, #EBF5FF 100%);
  --gradient-dark:      linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  --gradient-card:      linear-gradient(135deg,
                          rgba(45,156,219,0.08) 0%,
                          rgba(86,204,242,0.04) 100%);
  --gradient-glow:      radial-gradient(
                          ellipse 60% 50% at 50% 50%,
                          rgba(86,204,242,0.22) 0%,
                          transparent 70%);

  /* === GLASS === */
  --glass-bg:           rgba(255, 255, 255, 0.72);
  --glass-border:       1px solid rgba(45, 156, 219, 0.12);
  --glass-dark-bg:      rgba(30, 41, 59, 0.80);

}
```

---

## 2. TYPOGRAPHY

### Type Scale Visual

```
DISPLAY   72px / 800  lh 1.05  ls -0.04em   → Hero besar
H1        56px / 800  lh 1.10  ls -0.03em   → Page hero
H2        40px / 700  lh 1.20  ls -0.02em   → Section title
H3        28px / 700  lh 1.30  ls -0.01em   → Card title
H4        22px / 600  lh 1.40  ls  0        → Sub-section
H5        18px / 600  lh 1.40  ls  0        → Small title
Body XL   20px / 400  lh 1.75  ls  0        → Lead paragraph
Body L    18px / 400  lh 1.75  ls  0        → Subheadline
Body      16px / 400  lh 1.70  ls  0        → Default body
Body S    14px / 400  lh 1.60  ls  0        → Secondary text
Caption   12px / 500  lh 1.50  ls +0.02em  → Labels, captions
Overline  13px / 600  lh 1.50  ls +0.08em  → Section overline
```

### CSS

```css
:root {
  /* === FONT === */
  --font-sans:    'Poppins', -apple-system, BlinkMacSystemFont,
                  'Segoe UI', sans-serif;

  /* === FONT WEIGHTS === */
  --fw-light:     300;
  --fw-regular:   400;
  --fw-medium:    500;
  --fw-semibold:  600;
  --fw-bold:      700;
  --fw-extrabold: 800;

  /* === FONT SIZES === */
  --fs-xs:        0.75rem;     /* 12px */
  --fs-sm:        0.875rem;    /* 14px */
  --fs-base:      1rem;        /* 16px */
  --fs-lg:        1.125rem;    /* 18px */
  --fs-xl:        1.25rem;     /* 20px */
  --fs-2xl:       1.5rem;      /* 24px */
  --fs-3xl:       1.75rem;     /* 28px */
  --fs-4xl:       2.5rem;      /* 40px */
  --fs-5xl:       3.5rem;      /* 56px */
  --fs-display:   4.5rem;      /* 72px */

  /* === LINE HEIGHTS === */
  --lh-tight:     1.1;
  --lh-snug:      1.25;
  --lh-normal:    1.5;
  --lh-relaxed:   1.7;
  --lh-loose:     1.75;

  /* === LETTER SPACING === */
  --ls-tight:     -0.04em;
  --ls-snug:      -0.02em;
  --ls-normal:    0;
  --ls-wide:      0.04em;
  --ls-wider:     0.08em;
}

/* ── Base ─────────────────────────────── */
*,
*::before,
*::after { box-sizing: border-box; }

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  line-height: var(--lh-relaxed);
  color: var(--clr-dark);
  background-color: var(--clr-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── Headings ─────────────────────────── */
.text-display {
  font-size: clamp(2.5rem, 6vw, var(--fs-display));
  font-weight: var(--fw-extrabold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
}

h1, .h1 {
  font-size: clamp(2rem, 5vw, var(--fs-5xl));
  font-weight: var(--fw-extrabold);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

h2, .h2 {
  font-size: clamp(1.75rem, 4vw, var(--fs-4xl));
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: var(--ls-snug);
}

h3, .h3 {
  font-size: clamp(1.25rem, 2.5vw, var(--fs-3xl));
  font-weight: var(--fw-bold);
  line-height: 1.3;
  letter-spacing: -0.01em;
}

h4, .h4 {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
  line-height: 1.4;
}

h5, .h5 {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  line-height: 1.4;
}

/* ── Text Utilities ───────────────────── */
.text-lead    { font-size: var(--fs-lg);  line-height: var(--lh-loose); }
.text-body    { font-size: var(--fs-base); line-height: var(--lh-relaxed); }
.text-sm      { font-size: var(--fs-sm);  line-height: var(--lh-normal); }
.text-xs      { font-size: var(--fs-xs);  line-height: var(--lh-normal); }

.text-muted   { color: var(--clr-gray-500); }
.text-primary { color: var(--clr-primary); }
.text-dark    { color: var(--clr-dark); }
.text-white   { color: var(--clr-white); }

.overline {
  font-size: 0.8125rem;
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--clr-primary);
}

p { margin-block: 0; }
p + p { margin-block-start: 1em; }
```

---

## 3. SPACING

### Scale Visual

```
TOKEN     VALUE    PX      USAGE
──────────────────────────────────────────────
space-1   0.25rem   4px    Micro gap, icon margin
space-2   0.5rem    8px    Tight inner padding
space-3   0.75rem  12px    Gap between small elements
space-4   1rem     16px    Default padding, base gap
space-5   1.25rem  20px    Medium gap
space-6   1.5rem   24px    Card padding small, grid gap
space-7   1.75rem  28px    —
space-8   2rem     32px    Card padding default
space-10  2.5rem   40px    Section inner gap
space-12  3rem     48px    Section header margin
space-14  3.5rem   56px    —
space-16  4rem     64px    Section padding mobile
space-20  5rem     80px    Section padding desktop
space-24  6rem     96px    Large section padding
space-32  8rem    128px    Hero padding
space-40  10rem   160px    Hero padding top (with navbar)
```

### CSS

```css
:root {
  --space-1:   0.25rem;    /* 4px  */
  --space-2:   0.5rem;     /* 8px  */
  --space-3:   0.75rem;    /* 12px */
  --space-4:   1rem;       /* 16px */
  --space-5:   1.25rem;    /* 20px */
  --space-6:   1.5rem;     /* 24px */
  --space-7:   1.75rem;    /* 28px */
  --space-8:   2rem;       /* 32px */
  --space-10:  2.5rem;     /* 40px */
  --space-12:  3rem;       /* 48px */
  --space-14:  3.5rem;     /* 56px */
  --space-16:  4rem;       /* 64px */
  --space-20:  5rem;       /* 80px */
  --space-24:  6rem;       /* 96px */
  --space-32:  8rem;       /* 128px */
  --space-40:  10rem;      /* 160px */
}
```

---

## 4. BORDER RADIUS

### Scale Visual

```
TOKEN       VALUE     USAGE
──────────────────────────────────────────────────────
radius-xs    4px      Micro badge, tag kecil
radius-sm    8px      Input, select, tooltip, small card
radius-md   12px      Icon box, dropdown item
radius-lg   16px      Card standar, FAQ item
radius-xl   20px      Pricing card, modal
radius-2xl  24px      Large card, hero element
radius-3xl  32px      Decorative section bg
radius-full 9999px    Pill button, avatar, badge populer
```

### CSS

```css
:root {
  --radius-xs:    4px;
  --radius-sm:    8px;
  --radius-md:    12px;
  --radius-lg:    16px;
  --radius-xl:    20px;
  --radius-2xl:   24px;
  --radius-3xl:   32px;
  --radius-full:  9999px;
}
```

### Mapping per Komponen

| Komponen | Radius Token |
|---|---|
| Semua button | `radius-full` |
| Card (standar) | `radius-lg` |
| Card (pricing) | `radius-xl` |
| Card (hero element) | `radius-2xl` |
| Input, Select | `radius-sm` |
| Badge, Pill | `radius-full` |
| Icon box | `radius-md` |
| Tooltip | `radius-sm` |
| Modal | `radius-2xl` (atas), 0 (bawah) |
| Image container | `radius-xl` |
| FAQ item | `radius-lg` |
| Navbar mobile panel | `radius-2xl` (bawah) |

---

## 5. SHADOWS

### Elevation System

```
LEVEL    TOKEN          VALUE                                      USAGE
─────────────────────────────────────────────────────────────────────────
  0      —              none                                       Flat
  1      shadow-sm      0 1px 3px rgba(30,41,59,.05),             Card resting
                        0 1px 2px rgba(30,41,59,.03)
  2      shadow-md      0 4px 12px rgba(30,41,59,.08),            Card hover,
                        0 2px 4px rgba(30,41,59,.04)              dropdown
  3      shadow-lg      0 8px 24px rgba(30,41,59,.10),            Modal, overlay
                        0 4px 8px rgba(30,41,59,.05)              panel
  4      shadow-xl      0 16px 40px rgba(45,156,219,.12),         Featured card,
                        0 8px 16px rgba(45,156,219,.06)           popular pricing
  5      shadow-2xl     0 24px 60px rgba(45,156,219,.18),         Hero element,
                        0 12px 24px rgba(45,156,219,.10)          spotlight
  –      shadow-btn     0 4px 16px rgba(45,156,219,.38)           CTA button rest
  –      shadow-btn-h   0 8px 28px rgba(45,156,219,.48)           CTA button hover
  –      shadow-input   0 0 0 3px rgba(45,156,219,.18)            Input focus ring
  –      shadow-inset   inset 0 1px 3px rgba(30,41,59,.06)        Pressed state
```

> **Catatan desain:** Shadow WashClub menggunakan **warna biru brand**, bukan hitam.
> Ini menciptakan tampilan yang lebih segar, modern, dan on-brand.

### CSS

```css
:root {
  --shadow-sm:     0 1px 3px rgba(30,41,59,.05),
                   0 1px 2px rgba(30,41,59,.03);

  --shadow-md:     0 4px 12px rgba(30,41,59,.08),
                   0 2px 4px rgba(30,41,59,.04);

  --shadow-lg:     0 8px 24px rgba(30,41,59,.10),
                   0 4px 8px rgba(30,41,59,.05);

  --shadow-xl:     0 16px 40px rgba(45,156,219,.12),
                   0 8px 16px rgba(45,156,219,.06);

  --shadow-2xl:    0 24px 60px rgba(45,156,219,.18),
                   0 12px 24px rgba(45,156,219,.10);

  --shadow-btn:    0 4px 16px rgba(45,156,219,.38);
  --shadow-btn-h:  0 8px 28px rgba(45,156,219,.48);
  --shadow-input:  0 0 0 3px rgba(45,156,219,.18);
  --shadow-inset:  inset 0 1px 3px rgba(30,41,59,.06);
}
```

---

---

## 6. BUTTONS

### Anatomy

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   [leading-icon]   LABEL TEXT   [trailing-icon]     │
│                                                     │
└─────────────────────────────────────────────────────┘
        ↑ pill shape — border-radius: 9999px
```

### Variants

```
PRIMARY         Gradient biru → cyan. Shadow biru. CTA utama.
SECONDARY       Outline biru. Transparent bg. CTA sekunder.
GHOST           Text biru only. Untuk link / soft action.
WHITE           Bg putih. Untuk dark section / CTA akhir.
OUTLINE WHITE   Border putih. Untuk dark background.
DANGER          Bg merah. Untuk destructive action.
```

### Size Scale

```
TOKEN    HEIGHT    PADDING H    FONT     RADIUS
────────────────────────────────────────────────
sm       36px      20px         14px     full
md       48px      32px         16px     full   ← default
lg       56px      40px         18px     full
xl       64px      48px         20px     full
```

### CSS

```css
/* ─── BUTTON BASE ─────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0.875rem 2rem;          /* 14px 32px — md default */
  border-radius: var(--radius-full);
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  font-weight: var(--fw-semibold);
  line-height: 1;
  letter-spacing: -0.01em;
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  transition:
    transform       0.2s ease,
    box-shadow      0.2s ease,
    background      0.2s ease,
    color           0.2s ease,
    border-color    0.2s ease,
    opacity         0.2s ease;
}

/* Focus ring — keyboard accessibility */
.btn:focus-visible {
  outline: 3px solid var(--clr-primary);
  outline-offset: 3px;
}

/* Disabled state */
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.42;
  cursor: not-allowed;
  pointer-events: none;
}

/* ─── PRIMARY ──────────────────────────────────────── */
.btn-primary {
  background: var(--gradient-primary);
  color: #ffffff;
  border-color: transparent;
  box-shadow: var(--shadow-btn);
}
.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-btn-h);
}
.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow-btn);
}

/* ─── SECONDARY ────────────────────────────────────── */
.btn-secondary {
  background: transparent;
  color: var(--clr-primary);
  border-color: var(--clr-primary);
}
.btn-secondary:hover:not(:disabled) {
  background: var(--clr-primary);
  color: #ffffff;
  box-shadow: var(--shadow-btn);
}

/* ─── GHOST ────────────────────────────────────────── */
.btn-ghost {
  background: transparent;
  color: var(--clr-primary);
  border-color: transparent;
  padding-inline: var(--space-4);
}
.btn-ghost:hover:not(:disabled) {
  background: var(--clr-primary-light);
}

/* ─── WHITE ────────────────────────────────────────── */
.btn-white {
  background: #ffffff;
  color: var(--clr-primary);
  border-color: transparent;
  box-shadow: var(--shadow-lg);
}
.btn-white:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

/* ─── OUTLINE WHITE ────────────────────────────────── */
.btn-outline-white {
  background: transparent;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.45);
}
.btn-outline-white:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.7);
}

/* ─── DANGER ───────────────────────────────────────── */
.btn-danger {
  background: var(--clr-error);
  color: #ffffff;
  border-color: transparent;
}
.btn-danger:hover:not(:disabled) {
  background: #dc2626;
  transform: translateY(-1px);
}

/* ─── SIZE VARIANTS ────────────────────────────────── */
.btn-sm { padding: 0.625rem 1.25rem;  font-size: var(--fs-sm); }
.btn-lg { padding: 1.0625rem 2.5rem;  font-size: var(--fs-lg); }
.btn-xl { padding: 1.25rem 3rem;      font-size: var(--fs-xl); }

/* ─── ICON ONLY ────────────────────────────────────── */
.btn-icon {
  padding: 0.75rem;
  aspect-ratio: 1;
}
.btn-icon.btn-sm { padding: 0.5rem; }
.btn-icon.btn-lg { padding: 1rem; }

/* ─── LOADING STATE ────────────────────────────────── */
.btn.loading {
  pointer-events: none;
  opacity: 0.75;
  position: relative;
}
.btn.loading > *:not(.btn-spinner) { opacity: 0; }
.btn-spinner {
  position: absolute;
  inset: 50% auto auto 50%;
  translate: -50% -50%;
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255,255,255,0.35);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
```

### Usage Examples (HTML)

```html
<!-- Primary CTA -->
<a href="#paket" class="btn btn-primary">
  Mulai Berlangganan
</a>

<!-- Secondary -->
<a href="#paket" class="btn btn-secondary">
  Lihat Paket →
</a>

<!-- Large CTA -->
<button class="btn btn-primary btn-lg">
  Mulai Berlangganan Sekarang
</button>

<!-- Dark section (white bg) -->
<button class="btn btn-white">Mulai Berlangganan</button>
<button class="btn btn-outline-white">Tanya via WhatsApp</button>

<!-- With icon -->
<button class="btn btn-ghost">
  <i data-lucide="arrow-right" class="icon-sm"></i>
  Lihat Semua Paket
</button>

<!-- Loading state -->
<button class="btn btn-primary loading">
  <span class="btn-spinner"></span>
  Memproses...
</button>
```

---

---

## 7. CARDS

### Card Taxonomy

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  card            │  │  card-feature    │  │  card-pricing    │
│  (base)          │  │  (benefits)      │  │  (plans)         │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  card-pain       │  │  card-addon      │  │  card-glass      │
│  (problem)       │  │  (add-ons)       │  │  (floating UI)   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

### CSS

```css
/* ─── BASE CARD ────────────────────────────────────── */
.card {
  background: var(--clr-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  border: 1px solid var(--clr-gray-100);
  box-shadow: var(--shadow-sm);
  transition:
    transform    0.25s ease,
    box-shadow   0.25s ease,
    border-color 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--clr-gray-200);
}

/* ─── ICON BOX (inside cards) ──────────────────────── */
.icon-box {
  display: inline-grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}
.icon-box-primary {
  background: var(--gradient-card);
  color: var(--clr-primary);
}
.icon-box-muted {
  background: var(--clr-gray-100);
  color: var(--clr-gray-500);
}
.icon-box-danger {
  background: rgba(239, 68, 68, 0.08);
  color: var(--clr-error);
}
.icon-box-success {
  background: rgba(34, 197, 94, 0.08);
  color: var(--clr-success);
}

/* ─── FEATURE CARD (Benefits section) ─────────────── */
.card-feature {
  padding: var(--space-6) var(--space-7);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.card-feature .icon-box { margin-bottom: var(--space-1); }
.card-feature h3,
.card-feature .card-title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--clr-dark);
  margin: 0;
}
.card-feature p,
.card-feature .card-desc {
  font-size: var(--fs-sm);
  color: var(--clr-gray-500);
  line-height: 1.65;
  margin: 0;
}

/* ─── PAIN POINT CARD (Problem section) ────────────── */
.card-pain {
  text-align: center;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}
.card-pain .icon-box { margin-inline: auto; }
.card-pain .card-title {
  font-size: var(--fs-base);
  font-weight: var(--fw-semibold);
  color: var(--clr-dark);
}
.card-pain .card-desc {
  font-size: var(--fs-sm);
  color: var(--clr-gray-500);
  line-height: 1.65;
}

/* ─── PRICING CARD ─────────────────────────────────── */
.card-pricing {
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  background: var(--clr-white);
  border: 2px solid var(--clr-gray-200);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}
.card-pricing:hover {
  border-color: var(--clr-primary);
  box-shadow: var(--shadow-xl);
}

/* Popular variant */
.card-pricing.popular {
  border-color: var(--clr-primary);
  box-shadow: var(--shadow-xl);
  transform: scale(1.03);
  z-index: 1;
}
@media (max-width: 768px) {
  .card-pricing.popular { transform: none; }
}

/* Popular badge */
.badge-popular {
  position: absolute;
  top: -14px;
  left: 50%;
  translate: -50% 0;
  background: var(--gradient-primary);
  color: #ffffff;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  padding: 5px 18px;
  border-radius: var(--radius-full);
  white-space: nowrap;
  letter-spacing: 0.02em;
  box-shadow: var(--shadow-btn);
}

/* Pricing card inner layout */
.card-pricing-header { display: flex; flex-direction: column; gap: var(--space-2); }
.card-pricing-name   { font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--clr-gray-500); }
.card-pricing-price  {
  font-size: var(--fs-5xl);
  font-weight: var(--fw-extrabold);
  color: var(--clr-dark);
  line-height: 1;
  letter-spacing: -0.03em;
}
.card-pricing-period { font-size: var(--fs-sm); color: var(--clr-gray-400); margin-left: 2px; }
.card-pricing-desc   { font-size: var(--fs-sm); color: var(--clr-gray-500); }

/* Benefit list inside pricing card */
.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--fs-sm);
  color: var(--clr-gray-700);
}
.benefit-item svg {
  width: 18px;
  height: 18px;
  color: var(--clr-success);
  flex-shrink: 0;
}

/* ─── ADD-ON CARD ──────────────────────────────────── */
.card-addon {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--clr-gray-200);
  background: var(--clr-white);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.card-addon:hover {
  border-color: var(--clr-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.card-addon-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--gradient-card);
  color: var(--clr-primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.card-addon-body { flex: 1; min-width: 0; }
.card-addon-name  { font-size: var(--fs-base); font-weight: var(--fw-semibold); color: var(--clr-dark); }
.card-addon-price { font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--clr-primary); }
.card-addon-desc  { font-size: var(--fs-xs); color: var(--clr-gray-500); margin-top: 2px; }

/* ─── GLASS CARD ───────────────────────────────────── */
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

/* ─── STEP CARD (How It Works) ─────────────────────── */
.card-step {
  position: relative;
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  background: var(--clr-white);
  border: 1.5px solid var(--clr-gray-100);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: box-shadow 0.25s, transform 0.25s;
}
.card-step:hover { box-shadow: var(--shadow-xl); transform: translateY(-4px); }
.card-step-number {
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: var(--fw-extrabold);
  color: var(--clr-primary-light);
  line-height: 1;
  letter-spacing: -0.04em;
  /* overlaps as decorative background number */
  position: absolute;
  top: var(--space-4);
  right: var(--space-6);
  pointer-events: none;
  user-select: none;
}
.card-step-icon   { color: var(--clr-primary); }
.card-step-title  { font-size: var(--fs-xl); font-weight: var(--fw-bold); color: var(--clr-dark); }
.card-step-desc   { font-size: var(--fs-sm); color: var(--clr-gray-500); line-height: 1.65; }
```

### HTML Examples

```html
<!-- Feature card -->
<div class="card card-feature">
  <div class="icon-box icon-box-primary">
    <i data-lucide="truck" class="icon-xl"></i>
  </div>
  <h3 class="card-title">Pickup Otomatis</h3>
  <p class="card-desc">Kami datang sendiri sesuai jadwal. Kamu tidak perlu ke mana-mana.</p>
</div>

<!-- Pricing card (popular) -->
<div class="card-pricing popular">
  <span class="badge-popular">⭐ Paling Populer</span>
  <div class="card-pricing-header">
    <span class="card-pricing-name">Couple Pack</span>
    <div>
      <span class="card-pricing-price">Rp179.000</span>
      <span class="card-pricing-period">/bulan</span>
    </div>
    <p class="card-pricing-desc">Solusi terbaik untuk berdua.</p>
  </div>
  <ul class="benefit-list">
    <li class="benefit-item">
      <i data-lucide="check" aria-hidden="true"></i>
      20 kg per bulan
    </li>
    <!-- more items -->
  </ul>
  <a href="#" class="btn btn-primary">Pilih Paket Ini</a>
</div>
```

---

---

## 8. ICONS

### System Rules

```
Library:        Lucide Icons — https://lucide.dev
Style:          Outline (stroke-based)
Stroke cap:     round
Stroke join:    round
Fill:           none
Color:          currentColor
Viewbox:        0 0 24 24
Default stroke: 1.5px (action icons: 2px)
```

### Size Tokens

```
TOKEN     SIZE   STROKE   USAGE
────────────────────────────────────────────────────
icon-xs   12px   1.5px    Micro label, inline badge
icon-sm   16px   1.5px    Inline text, trust badges
icon-md   20px   2px      FAQ chevron, action buttons
icon-lg   24px   1.5px    Navbar, default body icon
icon-xl   40px   1.5px    Feature card, pain card
icon-2xl  48px   2px      How-it-works step
```

### CSS

```css
/* ─── BASE ICON RESET ──────────────────────────────── */
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
  pointer-events: none;
}

/* ─── SIZE TOKENS ──────────────────────────────────── */
.icon-xs  { width: 12px; height: 12px; }
.icon-sm  { width: 16px; height: 16px; }
.icon-md  { width: 20px; height: 20px; stroke-width: 2; }
.icon-lg  { width: 24px; height: 24px; }
.icon-xl  { width: 40px; height: 40px; }
.icon-2xl { width: 48px; height: 48px; stroke-width: 2; }

/* ─── COLOR VARIANTS ───────────────────────────────── */
.icon-primary { color: var(--clr-primary); }
.icon-muted   { color: var(--clr-gray-500); }
.icon-white   { color: var(--clr-white); }
.icon-success { color: var(--clr-success); }
.icon-warning { color: var(--clr-warning); }
.icon-danger  { color: var(--clr-error); }

/* ─── ICON SPIN (loader) ───────────────────────────── */
.icon-spin { animation: spin 0.75s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ─── FAQ CHEVRON TRANSITION ───────────────────────── */
.faq-icon {
  transition: transform 0.3s ease;
  color: var(--clr-primary);
  flex-shrink: 0;
}
.faq-item.open .faq-icon { transform: rotate(180deg); }
```

### Icon Map — All 44 Icons

```
SECTION         ICON NAME (Lucide)        TOKEN        FILE
────────────────────────────────────────────────────────────────────
Navbar          Menu                      icon-lg      ic-menu.svg
                X                         icon-lg      ic-close.svg
                ArrowUp                   icon-lg      ic-arrow-up.svg
                ExternalLink              icon-sm      ic-external-link.svg

Hero            PlayCircle                icon-lg      ic-play.svg
                ArrowDown                 icon-lg      ic-arrow-down.svg
                CheckCircle               icon-sm      ic-check-circle.svg
                Sparkles                  icon-md      ic-sparkles.svg

Problem         Clock                     icon-xl      ic-clock.svg
                MessageCircle             icon-xl      ic-message-repeat.svg
                CalendarX                 icon-xl      ic-calendar-x.svg
                Layers                    icon-xl      ic-layers.svg
                Wallet                    icon-xl      ic-wallet-alert.svg

How It Works    ListChecks                icon-2xl     ic-list-check.svg
                CalendarClock             icon-2xl     ic-calendar-clock.svg
                RefreshCw                 icon-2xl     ic-refresh-auto.svg

Pricing         Star                      icon-sm      ic-star.svg
                Check                     icon-sm      ic-check.svg
                Minus                     icon-sm      ic-minus.svg
                Tag                       icon-md      ic-tag.svg

Benefits        Truck                     icon-xl      ic-truck.svg
                Gift                      icon-xl      ic-gift.svg
                Banknote                  icon-xl      ic-banknote.svg
                Zap                       icon-xl      ic-zap.svg
                CalendarCheck             icon-xl      ic-calendar-check.svg
                Smartphone                icon-xl      ic-smartphone.svg

Add-ons         PlusCircle                icon-lg      ic-plus-circle.svg
                Zap (reuse)               icon-lg      ic-bolt.svg
                Shirt                     icon-lg      ic-shirt.svg
                Home                      icon-lg      ic-home.svg
                Wind                      icon-lg      ic-wind.svg
                Droplets                  icon-lg      ic-droplets.svg

FAQ             ChevronDown               icon-md      ic-chevron-down.svg
                ChevronUp                 icon-md      ic-chevron-up.svg
                HelpCircle                icon-lg      ic-help-circle.svg

Footer          Instagram                 icon-lg      ic-instagram.svg
                (WhatsApp custom)         icon-lg      ic-whatsapp.svg
                MapPin                    icon-sm      ic-map-pin.svg
                Mail                      icon-sm      ic-mail.svg

Misc            ArrowRight                icon-md      ic-arrow-right.svg
                ShieldCheck               icon-md      ic-shield-check.svg
                Info                      icon-sm      ic-info.svg
                AlertCircle               icon-sm      ic-alert-circle.svg
                Loader2                   icon-md      ic-loader.svg
```

### Implementation — Lucide CDN

```html
<!-- Load once before </body> -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- Use anywhere in HTML -->
<i data-lucide="truck"          class="icon-xl icon-primary" aria-hidden="true"></i>
<i data-lucide="chevron-down"   class="icon-md faq-icon"     aria-hidden="true"></i>
<i data-lucide="check"          class="icon-sm icon-success"  aria-hidden="true"></i>
<i data-lucide="loader-2"       class="icon-md icon-spin"     aria-hidden="true"></i>

<!-- Initialize -->
<script>lucide.createIcons();</script>
```

### Accessibility Rules

```html
<!-- Decorative icon (has text label nearby) -->
<i data-lucide="truck" class="icon-xl" aria-hidden="true"></i>
<span>Pickup Otomatis</span>

<!-- Functional icon (no text — must have aria-label on parent) -->
<button aria-label="Buka menu navigasi">
  <i data-lucide="menu" class="icon-lg" aria-hidden="true"></i>
</button>

<!-- Social media link -->
<a href="https://instagram.com/washclub.id"
   aria-label="Ikuti WashClub di Instagram"
   target="_blank"
   rel="noopener noreferrer">
  <i data-lucide="instagram" class="icon-lg" aria-hidden="true"></i>
</a>
```

---

## 9. FORM ELEMENTS

```css
/* ─── FIELD WRAPPER ────────────────────────────────── */
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

/* ─── LABEL ────────────────────────────────────────── */
.label {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--clr-gray-700);
}
.label.required::after {
  content: ' *';
  color: var(--clr-error);
}

/* ─── INPUT / TEXTAREA / SELECT ────────────────────── */
.input,
.textarea,
.select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--clr-gray-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  color: var(--clr-dark);
  background: var(--clr-white);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  -webkit-appearance: none;
  appearance: none;
}
.input::placeholder,
.textarea::placeholder { color: var(--clr-gray-400); }

/* Focus */
.input:focus,
.textarea:focus,
.select:focus {
  border-color: var(--clr-primary);
  box-shadow: var(--shadow-input);
}

/* States */
.input.error,
.textarea.error,
.select.error   { border-color: var(--clr-error);   }
.input.success,
.textarea.success { border-color: var(--clr-success); }
.input:disabled { background: var(--clr-gray-100); color: var(--clr-gray-400); cursor: not-allowed; }

/* Textarea */
.textarea { resize: vertical; min-height: 120px; line-height: 1.6; }

/* Select custom arrow */
.select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.75rem;
}

/* ─── HELPER / ERROR TEXT ──────────────────────────── */
.field-hint  { font-size: 0.8125rem; color: var(--clr-gray-500); }
.field-error { font-size: 0.8125rem; color: var(--clr-error);    display: flex; align-items: center; gap: var(--space-1); }
.field-success { font-size: 0.8125rem; color: var(--clr-success); }
```

---

## 10. BADGES & TAGS

```css
/* ─── BASE BADGE ───────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: 0.02em;
  white-space: nowrap;
  line-height: 1.5;
}

/* Variants */
.badge-primary { background: rgba(45,156,219,0.12);  color: #1a7ab5; }
.badge-success { background: rgba(34,197,94,0.12);   color: #15803d; }
.badge-warning { background: rgba(245,158,11,0.12);  color: #b45309; }
.badge-error   { background: rgba(239,68,68,0.12);   color: #dc2626; }
.badge-gray    { background: var(--clr-gray-100);    color: var(--clr-gray-600); }
.badge-dark    { background: var(--clr-dark);        color: var(--clr-white); }
.badge-gradient { background: var(--gradient-primary); color: var(--clr-white); box-shadow: var(--shadow-btn); }

/* Size */
.badge-sm { font-size: 10px; padding: 2px 8px; }
.badge-lg { font-size: var(--fs-sm); padding: 6px 16px; }

/* Trust badge (hero section) */
.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--clr-gray-600);
}
.trust-badge .icon-sm { color: var(--clr-success); }
```

---

## 11. LAYOUT UTILITIES

```css
/* ─── CONTAINER ────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--space-6);       /* 24px mobile */
}
@media (min-width: 768px) {
  .container { padding-inline: var(--space-12); }  /* 48px tablet */
}
@media (min-width: 1280px) {
  .container { padding-inline: var(--space-6); }   /* back to 24px — max-width handles it */
}

/* ─── SECTION ──────────────────────────────────────── */
.section {
  padding-block: var(--space-20);          /* 80px default */
}
@media (max-width: 767px) {
  .section { padding-block: var(--space-16); }     /* 64px mobile */
}

/* ─── SECTION HEADER ───────────────────────────────── */
.section-header {
  text-align: center;
  max-width: 600px;
  margin-inline: auto;
  margin-bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.section-header .overline  { margin-bottom: var(--space-1); }
.section-header h2         { margin: 0; }
.section-header .text-lead { color: var(--clr-gray-500); margin: 0; }

/* ─── GRID ─────────────────────────────────────────── */
.grid {
  display: grid;
  gap: var(--space-6);
}
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-5 { grid-template-columns: repeat(5, 1fr); }
.grid-6 { grid-template-columns: repeat(6, 1fr); }

/* Auto-fit grids (fills available columns) */
.grid-auto-sm { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.grid-auto-md { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.grid-auto-lg { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }

/* Responsive collapse */
@media (max-width: 1024px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 1024px) { .grid-5, .grid-6 { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px)  {
  .grid-2, .grid-3, .grid-4,
  .grid-5, .grid-6 { grid-template-columns: 1fr; }
}

/* ─── FLEX UTILITIES ───────────────────────────────── */
.flex         { display: flex; }
.flex-col     { flex-direction: column; }
.items-center { align-items: center; }
.items-start  { align-items: flex-start; }
.justify-between { justify-content: space-between; }
.justify-center  { justify-content: center; }
.gap-2 { gap: var(--space-2); }
.gap-3 { gap: var(--space-3); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }

/* ─── VISIBILITY ───────────────────────────────────── */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
@media (max-width: 767px)  { .hide-mobile  { display: none !important; } }
@media (min-width: 768px)  { .hide-desktop { display: none !important; } }
```

---

## 12. ANIMATION TOKENS

```css
:root {
  /* ─── DURATION ─────────────────────────────────────── */
  --dur-fast:   0.15s;
  --dur-base:   0.25s;
  --dur-slow:   0.4s;
  --dur-reveal: 0.6s;

  /* ─── EASING ───────────────────────────────────────── */
  --ease-default:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth:   cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ─── SCROLL REVEAL ────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity   var(--dur-reveal) var(--ease-out),
    transform var(--dur-reveal) var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays */
.reveal-d1 { transition-delay: 0.10s; }
.reveal-d2 { transition-delay: 0.20s; }
.reveal-d3 { transition-delay: 0.30s; }
.reveal-d4 { transition-delay: 0.40s; }
.reveal-d5 { transition-delay: 0.50s; }
.reveal-d6 { transition-delay: 0.60s; }

/* Reveal from left */
.reveal-left  { transform: translateX(-24px); }
.reveal-left.visible  { transform: translateX(0); }

/* Reveal from right */
.reveal-right { transform: translateX(24px); }
.reveal-right.visible { transform: translateX(0); }

/* Scale in */
.reveal-scale { transform: scale(0.95); opacity: 0; }
.reveal-scale.visible { transform: scale(1); opacity: 1; }

/* ─── FLOAT (hero illustration) ────────────────────── */
@keyframes float {
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-14px); }
}
.anim-float {
  animation: float 4.5s var(--ease-smooth) infinite;
}

/* ─── PULSE GLOW (popular badge) ───────────────────── */
@keyframes pulse-glow {
  0%, 100% { box-shadow: var(--shadow-btn); }
  50%       { box-shadow: 0 0 0 8px rgba(45,156,219,0); }
}
.anim-pulse {
  animation: pulse-glow 2.5s ease-in-out infinite;
}

/* ─── BOUNCE (scroll indicator) ────────────────────── */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}
.anim-bounce {
  animation: bounce 1.8s ease-in-out infinite;
}

/* ─── SPIN ─────────────────────────────────────────── */
@keyframes spin { to { transform: rotate(360deg); } }
.anim-spin { animation: spin 0.75s linear infinite; }

/* ─── REDUCED MOTION ───────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .reveal       { opacity: 1; transform: none; transition: none; }
  .anim-float,
  .anim-pulse,
  .anim-bounce,
  .anim-spin    { animation: none; }
  *,
  *::before,
  *::after      { transition-duration: 0.01ms !important; }
}

/* ─── INTERSECTION OBSERVER (JS) ───────────────────── */
/*
  Paste this in your main JS file:

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
*/
```

---

---

## 13. COMPLETE CSS FILE

Ini adalah file CSS lengkap yang siap di-copy ke `styles/design-system.css`.  
Paste ke `<head>` setelah Google Fonts import.

```css
/* ═══════════════════════════════════════════════════════
   WASHCLUB DESIGN SYSTEM — v2.0
   styles/design-system.css
   ═══════════════════════════════════════════════════════ */

/* ─── GOOGLE FONTS ──────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ─── RESET ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
img, svg { display: block; max-width: 100%; }
button { cursor: pointer; font: inherit; background: none; border: none; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }

/* ─── DESIGN TOKENS ─────────────────────────────────── */
:root {

  /* Colors */
  --clr-primary:        #2D9CDB;
  --clr-primary-hover:  #2589c4;
  --clr-primary-light:  #EBF5FF;
  --clr-secondary:      #56CCF2;
  --clr-secondary-light:#E0F7FE;
  --clr-dark:           #1E293B;
  --clr-dark-deeper:    #0F172A;
  --clr-bg:             #F8FBFF;
  --clr-white:          #FFFFFF;

  --clr-gray-50:        #F8FAFC;
  --clr-gray-100:       #F1F5F9;
  --clr-gray-200:       #E2E8F0;
  --clr-gray-300:       #CBD5E1;
  --clr-gray-400:       #94A3B8;
  --clr-gray-500:       #64748B;
  --clr-gray-600:       #475569;
  --clr-gray-700:       #334155;
  --clr-gray-800:       #1E293B;

  --clr-success:        #22C55E;
  --clr-success-light:  #DCFCE7;
  --clr-warning:        #F59E0B;
  --clr-warning-light:  #FEF3C7;
  --clr-error:          #EF4444;
  --clr-error-light:    #FEE2E2;

  /* Gradients */
  --gradient-primary:   linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%);
  --gradient-bg:        linear-gradient(180deg, #F8FBFF 0%, #EBF5FF 100%);
  --gradient-dark:      linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  --gradient-card:      linear-gradient(135deg, rgba(45,156,219,.08) 0%, rgba(86,204,242,.04) 100%);
  --gradient-glow:      radial-gradient(ellipse 60% 50% at 50% 50%, rgba(86,204,242,.22) 0%, transparent 70%);

  /* Glass */
  --glass-bg:           rgba(255, 255, 255, 0.72);
  --glass-border:       1px solid rgba(45, 156, 219, 0.12);

  /* Font */
  --font-sans:    'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --fw-light:     300;
  --fw-regular:   400;
  --fw-medium:    500;
  --fw-semibold:  600;
  --fw-bold:      700;
  --fw-extrabold: 800;
  --fs-xs:        0.75rem;
  --fs-sm:        0.875rem;
  --fs-base:      1rem;
  --fs-lg:        1.125rem;
  --fs-xl:        1.25rem;
  --fs-2xl:       1.5rem;
  --fs-3xl:       1.75rem;
  --fs-4xl:       2.5rem;
  --fs-5xl:       3.5rem;
  --fs-display:   4.5rem;

  /* Spacing */
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-5:   1.25rem;
  --space-6:   1.5rem;
  --space-7:   1.75rem;
  --space-8:   2rem;
  --space-10:  2.5rem;
  --space-12:  3rem;
  --space-14:  3.5rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;
  --space-32:  8rem;
  --space-40:  10rem;

  /* Border Radius */
  --radius-xs:   4px;
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   20px;
  --radius-2xl:  24px;
  --radius-3xl:  32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm:    0 1px 3px rgba(30,41,59,.05), 0 1px 2px rgba(30,41,59,.03);
  --shadow-md:    0 4px 12px rgba(30,41,59,.08), 0 2px 4px rgba(30,41,59,.04);
  --shadow-lg:    0 8px 24px rgba(30,41,59,.10), 0 4px 8px rgba(30,41,59,.05);
  --shadow-xl:    0 16px 40px rgba(45,156,219,.12), 0 8px 16px rgba(45,156,219,.06);
  --shadow-2xl:   0 24px 60px rgba(45,156,219,.18), 0 12px 24px rgba(45,156,219,.10);
  --shadow-btn:   0 4px 16px rgba(45,156,219,.38);
  --shadow-btn-h: 0 8px 28px rgba(45,156,219,.48);
  --shadow-input: 0 0 0 3px rgba(45,156,219,.18);

  /* Animation */
  --dur-fast:   0.15s;
  --dur-base:   0.25s;
  --dur-slow:   0.4s;
  --dur-reveal: 0.6s;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ─── BASE ───────────────────────────────────────────── */
body {
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  line-height: 1.7;
  color: var(--clr-dark);
  background-color: var(--clr-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── TYPOGRAPHY ────────────────────────────────────── */
.text-display {
  font-size: clamp(2.5rem, 6vw, var(--fs-display));
  font-weight: var(--fw-extrabold);
  line-height: 1.05;
  letter-spacing: -0.04em;
}
h1, .h1 { font-size: clamp(2rem, 5vw, var(--fs-5xl)); font-weight: var(--fw-extrabold); line-height: 1.1; letter-spacing: -0.03em; }
h2, .h2 { font-size: clamp(1.75rem, 4vw, var(--fs-4xl)); font-weight: var(--fw-bold); line-height: 1.2; letter-spacing: -0.02em; }
h3, .h3 { font-size: clamp(1.25rem, 2.5vw, var(--fs-3xl)); font-weight: var(--fw-bold); line-height: 1.3; letter-spacing: -0.01em; }
h4, .h4 { font-size: var(--fs-2xl); font-weight: var(--fw-semibold); line-height: 1.4; }
h5, .h5 { font-size: var(--fs-lg); font-weight: var(--fw-semibold); line-height: 1.4; }
.overline { font-size: 0.8125rem; font-weight: var(--fw-semibold); letter-spacing: 0.08em; text-transform: uppercase; color: var(--clr-primary); }
.text-lead    { font-size: var(--fs-lg); line-height: 1.75; }
.text-muted   { color: var(--clr-gray-500); }
.text-primary { color: var(--clr-primary); }
.text-sm      { font-size: var(--fs-sm); }
.text-xs      { font-size: var(--fs-xs); }

/* ─── LAYOUT ────────────────────────────────────────── */
.container { width: 100%; max-width: 1200px; margin-inline: auto; padding-inline: var(--space-6); }
@media (min-width: 768px)  { .container { padding-inline: var(--space-12); } }
@media (min-width: 1280px) { .container { padding-inline: var(--space-6); } }

.section { padding-block: var(--space-20); }
@media (max-width: 767px) { .section { padding-block: var(--space-16); } }

.section-header { text-align: center; max-width: 600px; margin-inline: auto; margin-bottom: var(--space-12); display: flex; flex-direction: column; gap: var(--space-3); }

.grid   { display: grid; gap: var(--space-6); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-5 { grid-template-columns: repeat(5, 1fr); }
.grid-auto-sm { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.grid-auto-md { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.grid-auto-lg { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
@media (max-width: 1024px) { .grid-4, .grid-5 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 767px)  { .grid-2, .grid-3, .grid-4, .grid-5 { grid-template-columns: 1fr; } }

/* ─── BUTTONS ───────────────────────────────────────── */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2); padding: 0.875rem 2rem; border-radius: var(--radius-full); font-family: var(--font-sans); font-size: var(--fs-base); font-weight: var(--fw-semibold); line-height: 1; letter-spacing: -0.01em; cursor: pointer; border: 2px solid transparent; text-decoration: none; white-space: nowrap; transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base), color var(--dur-base), border-color var(--dur-base), opacity var(--dur-base); }
.btn:focus-visible { outline: 3px solid var(--clr-primary); outline-offset: 3px; }
.btn:disabled { opacity: 0.42; cursor: not-allowed; pointer-events: none; }
.btn-primary { background: var(--gradient-primary); color: #fff; box-shadow: var(--shadow-btn); }
.btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: var(--shadow-btn-h); }
.btn-secondary { background: transparent; color: var(--clr-primary); border-color: var(--clr-primary); }
.btn-secondary:hover:not(:disabled) { background: var(--clr-primary); color: #fff; box-shadow: var(--shadow-btn); }
.btn-ghost { background: transparent; color: var(--clr-primary); padding-inline: var(--space-4); }
.btn-ghost:hover:not(:disabled) { background: var(--clr-primary-light); }
.btn-white { background: #fff; color: var(--clr-primary); box-shadow: var(--shadow-lg); }
.btn-white:hover:not(:disabled) { transform: translateY(-2px); box-shadow: var(--shadow-xl); }
.btn-outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,.45); }
.btn-outline-white:hover:not(:disabled) { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.7); }
.btn-sm { padding: 0.625rem 1.25rem; font-size: var(--fs-sm); }
.btn-lg { padding: 1.0625rem 2.5rem; font-size: var(--fs-lg); }
.btn-xl { padding: 1.25rem 3rem; font-size: var(--fs-xl); }
.btn-icon { padding: 0.75rem; aspect-ratio: 1; }

/* ─── CARDS ─────────────────────────────────────────── */
.card { background: var(--clr-white); border-radius: var(--radius-lg); padding: var(--space-8); border: 1px solid var(--clr-gray-100); box-shadow: var(--shadow-sm); transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
.icon-box { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: var(--radius-md); flex-shrink: 0; }
.icon-box-primary { background: var(--gradient-card); color: var(--clr-primary); }
.icon-box-danger  { background: rgba(239,68,68,.08); color: var(--clr-error); }
.icon-box-success { background: rgba(34,197,94,.08); color: var(--clr-success); }
.card-feature { padding: var(--space-6) var(--space-7); display: flex; flex-direction: column; gap: var(--space-3); }
.card-pain { text-align: center; padding: var(--space-6); display: flex; flex-direction: column; align-items: center; gap: var(--space-3); }
.card-pricing { position: relative; border-radius: var(--radius-xl); padding: var(--space-8); background: var(--clr-white); border: 2px solid var(--clr-gray-200); display: flex; flex-direction: column; gap: var(--space-6); transition: box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base); }
.card-pricing:hover { border-color: var(--clr-primary); box-shadow: var(--shadow-xl); }
.card-pricing.popular { border-color: var(--clr-primary); box-shadow: var(--shadow-xl); transform: scale(1.03); z-index: 1; }
@media (max-width: 767px) { .card-pricing.popular { transform: none; } }
.badge-popular { position: absolute; top: -14px; left: 50%; translate: -50% 0; background: var(--gradient-primary); color: #fff; font-size: var(--fs-xs); font-weight: var(--fw-semibold); padding: 5px 18px; border-radius: var(--radius-full); white-space: nowrap; box-shadow: var(--shadow-btn); }
.benefit-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-3); }
.benefit-item { display: flex; align-items: center; gap: var(--space-3); font-size: var(--fs-sm); color: var(--clr-gray-700); }
.card-addon { display: flex; align-items: flex-start; gap: var(--space-4); padding: var(--space-5) var(--space-6); border-radius: var(--radius-lg); border: 1.5px solid var(--clr-gray-200); background: var(--clr-white); transition: border-color var(--dur-base), box-shadow var(--dur-base), transform var(--dur-base); }
.card-addon:hover { border-color: var(--clr-primary); box-shadow: var(--shadow-md); transform: translateY(-2px); }
.card-glass { background: var(--glass-bg); backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%); border: var(--glass-border); border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); }

/* ─── ICONS ─────────────────────────────────────────── */
[data-lucide], .icon { display: inline-block; vertical-align: middle; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; fill: none; flex-shrink: 0; }
.icon-xs  { width: 12px; height: 12px; }
.icon-sm  { width: 16px; height: 16px; }
.icon-md  { width: 20px; height: 20px; stroke-width: 2; }
.icon-lg  { width: 24px; height: 24px; }
.icon-xl  { width: 40px; height: 40px; }
.icon-2xl { width: 48px; height: 48px; stroke-width: 2; }
.icon-primary { color: var(--clr-primary); }
.icon-muted   { color: var(--clr-gray-500); }
.icon-white   { color: var(--clr-white); }
.icon-success { color: var(--clr-success); }
.icon-danger  { color: var(--clr-error); }
.faq-icon { transition: transform var(--dur-slow) var(--ease-out); color: var(--clr-primary); flex-shrink: 0; }
.faq-item.open .faq-icon { transform: rotate(180deg); }

/* ─── FORMS ─────────────────────────────────────────── */
.field { display: flex; flex-direction: column; gap: var(--space-2); }
.label { font-size: var(--fs-sm); font-weight: var(--fw-medium); color: var(--clr-gray-700); }
.label.required::after { content: ' *'; color: var(--clr-error); }
.input, .textarea, .select { width: 100%; padding: 0.75rem 1rem; border: 1.5px solid var(--clr-gray-300); border-radius: var(--radius-sm); font-family: var(--font-sans); font-size: var(--fs-base); color: var(--clr-dark); background: var(--clr-white); outline: none; appearance: none; transition: border-color var(--dur-base), box-shadow var(--dur-base); }
.input::placeholder, .textarea::placeholder { color: var(--clr-gray-400); }
.input:focus, .textarea:focus, .select:focus { border-color: var(--clr-primary); box-shadow: var(--shadow-input); }
.input.error, .textarea.error { border-color: var(--clr-error); }
.field-hint  { font-size: 0.8125rem; color: var(--clr-gray-500); }
.field-error { font-size: 0.8125rem; color: var(--clr-error); }

/* ─── BADGES ────────────────────────────────────────── */
.badge { display: inline-flex; align-items: center; gap: var(--space-1); padding: 4px 12px; border-radius: var(--radius-full); font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: 0.02em; white-space: nowrap; }
.badge-primary  { background: rgba(45,156,219,.12); color: #1a7ab5; }
.badge-success  { background: rgba(34,197,94,.12);  color: #15803d; }
.badge-warning  { background: rgba(245,158,11,.12); color: #b45309; }
.badge-error    { background: rgba(239,68,68,.12);  color: #dc2626; }
.badge-gray     { background: var(--clr-gray-100);  color: var(--clr-gray-600); }
.badge-gradient { background: var(--gradient-primary); color: #fff; box-shadow: var(--shadow-btn); }

/* ─── ANIMATIONS ────────────────────────────────────── */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity var(--dur-reveal) var(--ease-out), transform var(--dur-reveal) var(--ease-out); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-d1 { transition-delay: 0.1s; } .reveal-d2 { transition-delay: 0.2s; }
.reveal-d3 { transition-delay: 0.3s; } .reveal-d4 { transition-delay: 0.4s; }
.reveal-d5 { transition-delay: 0.5s; } .reveal-d6 { transition-delay: 0.6s; }
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
@keyframes pulse-glow { 0%,100%{box-shadow:var(--shadow-btn)} 50%{box-shadow:0 0 0 8px rgba(45,156,219,0)} }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
@keyframes spin { to{transform:rotate(360deg)} }
.anim-float  { animation: float 4.5s var(--ease-smooth) infinite; }
.anim-pulse  { animation: pulse-glow 2.5s ease-in-out infinite; }
.anim-bounce { animation: bounce 1.8s ease-in-out infinite; }
.anim-spin   { animation: spin 0.75s linear infinite; }

/* ─── ACCESSIBILITY ─────────────────────────────────── */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
[id] { scroll-margin-top: 80px; }

/* ─── REDUCED MOTION ────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .anim-float, .anim-pulse, .anim-bounce, .anim-spin { animation: none; }
  *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

---

## QUICK REFERENCE CHEATSHEET

```
╔══════════════════╦═══════════════════════════════════╗
║  COLORS          ║  VALUE                            ║
╠══════════════════╬═══════════════════════════════════╣
║  Primary         ║  #2D9CDB  var(--clr-primary)      ║
║  Secondary       ║  #56CCF2  var(--clr-secondary)    ║
║  Dark            ║  #1E293B  var(--clr-dark)         ║
║  Background      ║  #F8FBFF  var(--clr-bg)           ║
║  Gray 500        ║  #64748B  var(--clr-gray-500)     ║
║  Success         ║  #22C55E  var(--clr-success)      ║
║  Error           ║  #EF4444  var(--clr-error)        ║
╠══════════════════╬═══════════════════════════════════╣
║  SPACING         ║  --space-4 = 16px  (base)         ║
║                  ║  --space-6 = 24px  (card gap)     ║
║                  ║  --space-8 = 32px  (card padding) ║
║                  ║  --space-12= 48px  (section gap)  ║
║                  ║  --space-20= 80px  (section pad)  ║
╠══════════════════╬═══════════════════════════════════╣
║  RADIUS          ║  --radius-sm   =  8px (input)     ║
║                  ║  --radius-lg   = 16px (card)      ║
║                  ║  --radius-xl   = 20px (pricing)   ║
║                  ║  --radius-full = pill (button)    ║
╠══════════════════╬═══════════════════════════════════╣
║  SHADOWS         ║  --shadow-sm   card resting       ║
║                  ║  --shadow-xl   featured card      ║
║                  ║  --shadow-btn  CTA button         ║
╠══════════════════╬═══════════════════════════════════╣
║  BUTTONS         ║  .btn-primary  (gradient CTA)     ║
║                  ║  .btn-secondary (outline)         ║
║                  ║  .btn-white    (dark section)     ║
╠══════════════════╬═══════════════════════════════════╣
║  ICONS           ║  .icon-sm  16px  (inline)         ║
║                  ║  .icon-lg  24px  (default)        ║
║                  ║  .icon-xl  40px  (feature card)   ║
╚══════════════════╩═══════════════════════════════════╝
```

---

*Design System WashClub v2.0 — Single source of truth untuk semua implementasi.*  
*File CSS: `styles/design-system.css` | Revisi via `brand-guideline/design-system-v2.md`*
