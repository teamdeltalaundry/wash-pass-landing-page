# WashClub — Design System
**Versi:** 1.0  
**Tanggal:** Juli 2026  
**Referensi:** Brand Guideline v1.0

---

## 1. Design Tokens (CSS Custom Properties)

```css
:root {
  /* === COLOR === */
  --color-primary:      #2D9CDB;
  --color-secondary:    #56CCF2;
  --color-dark:         #1E293B;
  --color-bg:           #F8FBFF;
  --color-white:        #FFFFFF;
  --color-gray-100:     #F1F5F9;
  --color-gray-300:     #CBD5E1;
  --color-gray-500:     #64748B;
  --color-gray-700:     #334155;
  --color-success:      #22C55E;
  --color-warning:      #F59E0B;
  --color-error:        #EF4444;

  /* === GRADIENT === */
  --gradient-primary:   linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%);
  --gradient-bg:        linear-gradient(180deg, #F8FBFF 0%, #EBF5FF 100%);
  --glass-bg:           rgba(255, 255, 255, 0.7);
  --glass-border:       1px solid rgba(45, 156, 219, 0.15);

  /* === TYPOGRAPHY === */
  --font-family:        'Poppins', sans-serif;
  --font-300:           300;
  --font-400:           400;
  --font-500:           500;
  --font-600:           600;
  --font-700:           700;
  --font-800:           800;

  /* === FONT SIZE === */
  --text-xs:            0.75rem;   /* 12px */
  --text-sm:            0.875rem;  /* 14px */
  --text-base:          1rem;      /* 16px */
  --text-lg:            1.125rem;  /* 18px */
  --text-xl:            1.25rem;   /* 20px */
  --text-2xl:           1.5rem;    /* 24px */
  --text-3xl:           2.25rem;   /* 36px */
  --text-4xl:           3rem;      /* 48px */
  --text-5xl:           3.5rem;    /* 56px */
  --text-display:       4.5rem;    /* 72px */

  /* === SPACING === */
  --space-1:   0.25rem;  /* 4px */
  --space-2:   0.5rem;   /* 8px */
  --space-3:   0.75rem;  /* 12px */
  --space-4:   1rem;     /* 16px */
  --space-6:   1.5rem;   /* 24px */
  --space-8:   2rem;     /* 32px */
  --space-12:  3rem;     /* 48px */
  --space-16:  4rem;     /* 64px */
  --space-20:  5rem;     /* 80px */
  --space-24:  6rem;     /* 96px */
  --space-32:  8rem;     /* 128px */

  /* === BORDER RADIUS === */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 9999px;

  /* === SHADOW === */
  --shadow-sm:  0 1px 3px rgba(30,41,59,0.06), 0 1px 2px rgba(30,41,59,0.04);
  --shadow-md:  0 4px 12px rgba(30,41,59,0.08), 0 2px 4px rgba(30,41,59,0.04);
  --shadow-lg:  0 8px 24px rgba(30,41,59,0.10), 0 4px 8px rgba(30,41,59,0.06);
  --shadow-xl:  0 16px 40px rgba(45,156,219,0.12), 0 8px 16px rgba(45,156,219,0.08);
  --shadow-btn: 0 4px 16px rgba(45,156,219,0.35);

  /* === TRANSITION === */
  --transition-fast:   0.15s ease;
  --transition-base:   0.25s ease;
  --transition-slow:   0.4s ease;

  /* === Z-INDEX === */
  --z-navbar:  100;
  --z-overlay: 200;
  --z-modal:   300;
}
```

---

## 2. Typography System

```css
/* Base */
body {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-400);
  line-height: 1.7;
  color: var(--color-dark);
  background-color: var(--color-bg);
}

/* Headings */
h1, .h1 {
  font-size: var(--text-4xl);      /* 48px */
  font-weight: var(--font-700);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-dark);
}
h2, .h2 {
  font-size: var(--text-3xl);      /* 36px */
  font-weight: var(--font-700);
  line-height: 1.3;
  letter-spacing: -0.01em;
}
h3, .h3 {
  font-size: var(--text-2xl);      /* 24px */
  font-weight: var(--font-600);
  line-height: 1.4;
}
h4, .h4 {
  font-size: var(--text-xl);       /* 20px */
  font-weight: var(--font-600);
  line-height: 1.4;
}

/* Display (Hero) */
.text-display {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-800);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

/* Overline / Section Label */
.overline {
  font-size: var(--text-sm);
  font-weight: var(--font-600);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

/* Body variants */
.text-lead  { font-size: var(--text-lg); line-height: 1.7; }
.text-sm    { font-size: var(--text-sm); }
.text-xs    { font-size: var(--text-xs); }
.text-muted { color: var(--color-gray-500); }
```

---

## 3. Button Components

```css
/* Base button */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 14px 32px;
  border-radius: var(--radius-full);
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-600);
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  transition: transform var(--transition-base), box-shadow var(--transition-base),
              background var(--transition-base), color var(--transition-base);
  white-space: nowrap;
}
.btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}

/* Primary */
.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-white);
  box-shadow: var(--shadow-btn);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(45, 156, 219, 0.45);
}

/* Secondary / Outline */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-primary);
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
.btn-ghost:hover { background: rgba(45, 156, 219, 0.08); }

/* White (untuk CTA section gelap) */
.btn-white {
  background: var(--color-white);
  color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}
.btn-white:hover { transform: translateY(-2px); }

/* Outline white */
.btn-outline-white {
  background: transparent;
  color: var(--color-white);
  border-color: rgba(255,255,255,0.5);
}
.btn-outline-white:hover { background: rgba(255,255,255,0.1); }

/* Size variants */
.btn-sm { padding: 10px 20px; font-size: var(--text-sm); }
.btn-lg { padding: 18px 40px; font-size: var(--text-lg); }
```

---

## 4. Card Components

```css
/* Base card */
.card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-100);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Feature card (Kenapa WashClub) */
.card-feature {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.card-feature .icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, rgba(45,156,219,0.1), rgba(86,204,242,0.1));
  display: grid;
  place-items: center;
  color: var(--color-primary);
}

/* Pain point card */
.card-pain {
  text-align: center;
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-100);
}

/* Pricing card */
.card-pricing {
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  border: 2px solid var(--color-gray-100);
}
.card-pricing.popular {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-xl);
  transform: scale(1.02);
}
.badge-popular {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-primary);
  color: var(--color-white);
  font-size: var(--text-xs);
  font-weight: var(--font-600);
  padding: 6px 18px;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

/* Glass card */
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
}
```

---

## 5. Layout System

```css
/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--space-6);
}
@media (min-width: 768px) {
  .container { padding-inline: var(--space-12); }
}

/* Section */
.section {
  padding-block: var(--space-20);  /* 80px */
}
@media (max-width: 768px) {
  .section { padding-block: var(--space-16); }  /* 64px */
}

/* Section header (overline + headline + subheadline) */
.section-header {
  text-align: center;
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Grid utilities */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }

@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}
```

---

## 6. Navbar Component

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  padding-block: var(--space-4);
  transition: background var(--transition-base), box-shadow var(--transition-base);
}
.navbar.scrolled {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: var(--glass-border);
  box-shadow: var(--shadow-sm);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}
.nav-logo img { height: 32px; width: auto; }
.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  list-style: none;
}
.nav-link {
  font-size: var(--text-sm);
  font-weight: var(--font-500);
  color: var(--color-dark);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.nav-link:hover { color: var(--color-primary); }

/* Mobile hamburger */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-dark);
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-toggle { display: block; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-white);
    padding: var(--space-6);
    box-shadow: var(--shadow-lg);
    gap: var(--space-4);
  }
}
```

---

## 7. FAQ Accordion Component

```css
.faq-list { display: flex; flex-direction: column; gap: var(--space-3); }

.faq-item {
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}
.faq-item.open { border-color: var(--color-primary); }

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-500);
  color: var(--color-dark);
  text-align: left;
  gap: var(--space-4);
}
.faq-trigger:hover { color: var(--color-primary); }

.faq-icon {
  flex-shrink: 0;
  transition: transform var(--transition-base);
  color: var(--color-primary);
}
.faq-item.open .faq-icon { transform: rotate(180deg); }

.faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}
.faq-item.open .faq-content { max-height: 400px; }

.faq-body {
  padding: 0 var(--space-6) var(--space-6);
  color: var(--color-gray-700);
  line-height: 1.7;
}
```

```js
// FAQ Accordion — JavaScript
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Tutup semua
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Buka yang diklik (jika sebelumnya tertutup)
    if (!isOpen) item.classList.add('open');
    // Update aria
    trigger.setAttribute('aria-expanded', !isOpen);
  });
});
```

---

## 8. Animation System

```css
/* Scroll-triggered reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* Float animation (untuk ilustrasi hero) */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
.anim-float { animation: float 4s ease-in-out infinite; }

/* Pulse (untuk badge "Paling Populer") */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(45,156,219,0.3); }
  50%       { box-shadow: 0 0 0 8px rgba(45,156,219,0); }
}
.anim-pulse { animation: pulse-glow 2s ease-in-out infinite; }
```

```js
// Intersection Observer untuk .reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

## 9. Icon Usage

```html
<!-- Via Lucide CDN — cara pakai -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- Contoh ikon outline -->
<i data-lucide="truck" class="icon-40" aria-hidden="true"></i>
<i data-lucide="calendar-check" class="icon-24" aria-hidden="true"></i>

<script>lucide.createIcons();</script>
```

```css
/* Icon sizing */
[data-lucide] {
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
  flex-shrink: 0;
}
.icon-16 { width: 16px; height: 16px; }
.icon-24 { width: 24px; height: 24px; }
.icon-40 { width: 40px; height: 40px; }

/* Icon wrapper (feature card) */
.icon-box {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, rgba(45,156,219,0.1), rgba(86,204,242,0.1));
  display: grid;
  place-items: center;
  color: var(--color-primary);
}
```

---

## 10. Benefit List (Kartu Paket)

```css
.benefit-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-block: var(--space-6);
}
.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-gray-700);
}
.benefit-item .check-icon {
  width: 18px;
  height: 18px;
  color: var(--color-success);
  flex-shrink: 0;
}
```

---

## 11. Breakpoint Reference

```css
/* Mobile first */
/* xs  — default          (320px+) */
/* sm  — @media (min-width: 480px)  */
/* md  — @media (min-width: 768px)  */
/* lg  — @media (min-width: 1024px) */
/* xl  — @media (min-width: 1280px) */
/* 2xl — @media (min-width: 1440px) */
```

---

## 12. Checklist Komponen

| Komponen | Status |
|---|---|
| Design tokens (CSS vars) | ✅ Defined |
| Typography system | ✅ Defined |
| Button variants (5) | ✅ Defined |
| Card variants (4) | ✅ Defined |
| Layout / grid | ✅ Defined |
| Navbar | ✅ Defined |
| FAQ accordion | ✅ Defined |
| Animation system | ✅ Defined |
| Icon system | ✅ Defined |
| Benefit list | ✅ Defined |
| Hero section | ⏳ Siap untuk implementasi |
| Pricing cards | ⏳ Siap untuk implementasi |
| CTA section | ⏳ Siap untuk implementasi |
| Footer | ⏳ Siap untuk implementasi |

---

*Design System ini adalah kontrak visual antara desain dan kode. Semua implementasi HTML/CSS harus mengacu pada token dan komponen di dokumen ini.*
