/**
 * WashClub — main.js
 * Navbar · FAQ Accordion · Scroll Reveal · Back to Top · Lucide Init
 */

'use strict';

/* ═══════════════════════════════════════════════════════
   1. LUCIDE ICONS — initialize after DOM ready
   ═══════════════════════════════════════════════════════ */
function initIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ═══════════════════════════════════════════════════════
   2. NAVBAR
   - Glassmorphism on scroll
   - Mobile hamburger toggle
   - Active link on scroll (IntersectionObserver)
   - Smooth scroll for anchor links
   ═══════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!navbar) return;

  // ── Glassmorphism on scroll ──────────────────────────
  const SCROLL_THRESHOLD = 50;

  function handleNavScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run on load

  // ── Mobile toggle ────────────────────────────────────
  if (toggle && navLinks) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');

      // swap icon
      const icon = toggle.querySelector('[data-lucide]');
      if (icon) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });

    // close on link click (mobile)
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
        const icon = toggle.querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      });
    });

    // close on outside click
    document.addEventListener('click', e => {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        const icon = toggle.querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      }
    });
  }

  // ── Smooth scroll for anchor hrefs ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Active nav link via IntersectionObserver ─────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const linkMap  = {};
  document.querySelectorAll('.nav-link[href^="#"]').forEach(l => {
    linkMap[l.getAttribute('href').slice(1)] = l;
  });

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Object.values(linkMap).forEach(l => l.classList.remove('active'));
        const active = linkMap[entry.target.id];
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ═══════════════════════════════════════════════════════
   3. FAQ ACCORDION
   ═══════════════════════════════════════════════════════ */
function initFAQ() {
  const triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  // Sync initial open state — ensure content.hidden matches aria-expanded
  triggers.forEach(trigger => {
    const contentId = trigger.getAttribute('aria-controls');
    const content   = document.getElementById(contentId);
    if (!content) return;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    content.hidden = !isOpen;
  });

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item      = trigger.closest('.faq-item');
      const contentId = trigger.getAttribute('aria-controls');
      const content   = document.getElementById(contentId);
      const isOpen    = item.classList.contains('open');

      // close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem === item) return;
        openItem.classList.remove('open');
        openItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        const c = document.getElementById(
          openItem.querySelector('.faq-trigger').getAttribute('aria-controls')
        );
        if (c) c.hidden = true;
      });

      // toggle current
      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (content) content.hidden = isOpen;
    });

    // Keyboard navigation: ArrowDown / ArrowUp / Home / End
    trigger.addEventListener('keydown', (e) => {
      const all   = Array.from(triggers);
      const index = all.indexOf(trigger);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        all[(index + 1) % all.length].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        all[(index - 1 + all.length) % all.length].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        all[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        all[all.length - 1].focus();
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════
   4. SCROLL REVEAL (IntersectionObserver)
   ═══════════════════════════════════════════════════════ */
function initReveal() {
  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ═══════════════════════════════════════════════════════
   5. BACK TO TOP
   ═══════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function handleBttScroll() {
    if (window.scrollY > 400) {
      btn.hidden = false;
      requestAnimationFrame(() => btn.classList.add('visible'));
    } else {
      btn.classList.remove('visible');
    }
  }

  // Hide after transition ends — single persistent listener
  btn.addEventListener('transitionend', () => {
    if (!btn.classList.contains('visible')) btn.hidden = true;
  });

  window.addEventListener('scroll', handleBttScroll, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════
   6. ICON SPIN (loader-2 in status-item)
      Lucide doesn't add animation — we handle it via CSS
      class, but we also re-init if needed post-DOM change
   ═══════════════════════════════════════════════════════ */
function initSpinIcons() {
  document.querySelectorAll('[data-lucide="loader-2"]').forEach(el => {
    el.classList.add('icon-spin');
  });
}

/* ═══════════════════════════════════════════════════════
   7. NAVBAR HEIGHT CSS VAR (for scroll-margin compensation)
   ═══════════════════════════════════════════════════════ */
function setNavbarHeightVar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const update = () => {
    document.documentElement.style.setProperty(
      '--navbar-height', navbar.offsetHeight + 'px'
    );
  };
  update();
  window.addEventListener('resize', update, { passive: true });
}

/* ═══════════════════════════════════════════════════════
   8. WAITLIST FORM
   - Open / close modal
   - Field validation
   - Submit to Google Apps Script via fetch
   - Show Thank You popup on success
   ═══════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════
   9. CLUBBY DRAG — Draggable floating widget
   - Mouse & touch support
   - Clamp dalam viewport
   - Simpan posisi ke localStorage
   - Threshold 6px: bedakan klik vs drag
   ═══════════════════════════════════════════════════════ */
function initClubbyDrag(wrap, btn, isPanelOpenFn) {
  if (!wrap || !btn) return;

  const STORAGE_KEY  = 'clubby-pos';
  const DRAG_THRESH  = 6;    // px minimum sebelum dianggap drag
  const EDGE_MARGIN  = 12;   // px jarak minimum dari tepi viewport

  /* ── State ──────────────────────────────────────────── */
  let startX = 0, startY = 0;     // posisi pointer saat mousedown
  let originLeft = 0, originTop = 0; // posisi wrap saat drag mulai
  let dragged = false;            // apakah sudah melewati threshold

  /* ── Helpers ────────────────────────────────────────── */

  /** Konversi posisi wrap (top/left) agar tidak keluar viewport */
  function clamp(left, top) {
    const w = wrap.offsetWidth  || 72;
    const h = wrap.offsetHeight || 72;
    const maxLeft = window.innerWidth  - w - EDGE_MARGIN;
    const maxTop  = window.innerHeight - h - EDGE_MARGIN;
    return {
      left: Math.max(EDGE_MARGIN, Math.min(left, maxLeft)),
      top:  Math.max(EDGE_MARGIN, Math.min(top,  maxTop)),
    };
  }

  /** Terapkan posisi top/left ke wrap (override bottom/right) */
  function applyPos(left, top) {
    wrap.style.right  = 'auto';
    wrap.style.bottom = 'auto';
    wrap.style.left   = left + 'px';
    wrap.style.top    = top  + 'px';
  }

  /** Simpan posisi ke localStorage */
  function savePos(left, top) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ left, top }));
    } catch (_) { /* private browsing — abaikan */ }
  }

  /** Muat posisi dari localStorage saat init */
  function loadPos() {
    try {
      // Di mobile, selalu reset posisi ke default (kanan bawah)
      if (window.innerWidth <= 479) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const { left, top } = JSON.parse(raw);
      if (typeof left === 'number' && typeof top === 'number') {
        const pos = clamp(left, top);
        applyPos(pos.left, pos.top);
      }
    } catch (_) { /* data korup — abaikan */ }
  }

  /* ── Drag lifecycle ─────────────────────────────────── */

  function onDragStart(clientX, clientY) {
    const rect = wrap.getBoundingClientRect();
    startX     = clientX;
    startY     = clientY;
    originLeft = rect.left;
    originTop  = rect.top;
    dragged    = false;

    // Pastikan wrap pakai top/left sejak awal drag
    applyPos(originLeft, originTop);
    wrap.classList.remove('is-dropping');
  }

  function onDragMove(clientX, clientY) {
    const dx = clientX - startX;
    const dy = clientY - startY;

    // Aktifkan drag hanya setelah melewati threshold
    if (!dragged) {
      if (Math.abs(dx) < DRAG_THRESH && Math.abs(dy) < DRAG_THRESH) return;
      dragged = true;
      wrap.classList.add('is-dragging');
    }

    const pos = clamp(originLeft + dx, originTop + dy);
    applyPos(pos.left, pos.top);
  }

  function onDragEnd(clientX, clientY) {
    if (dragged) {
      const dx = clientX - startX;
      const dy = clientY - startY;
      const pos = clamp(originLeft + dx, originTop + dy);
      wrap.classList.remove('is-dragging');
      wrap.classList.add('is-dropping');
      applyPos(pos.left, pos.top);
      savePos(pos.left, pos.top);

      // Hapus kelas dropping setelah transisi selesai
      wrap.addEventListener('transitionend', () => {
        wrap.classList.remove('is-dropping');
      }, { once: true });
    }
    dragged = false;
  }

  /* ── Mouse events ───────────────────────────────────── */

  btn.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    if (isPanelOpenFn && isPanelOpenFn()) return; // jangan drag saat panel terbuka
    e.preventDefault();
    onDragStart(e.clientX, e.clientY);

    function onMouseMove(e) { onDragMove(e.clientX, e.clientY); }
    function onMouseUp(e)   {
      onDragEnd(e.clientX, e.clientY);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup',   onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup',   onMouseUp);
  });

  /* ── Touch events ───────────────────────────────────── */

  btn.addEventListener('touchstart', e => {
    if (isPanelOpenFn && isPanelOpenFn()) return; // jangan drag saat panel terbuka
    const t = e.touches[0];
    onDragStart(t.clientX, t.clientY);
  }, { passive: true });

  btn.addEventListener('touchmove', e => {
    const t = e.touches[0];
    onDragMove(t.clientX, t.clientY);
    if (dragged) e.preventDefault(); // cegah scroll saat drag
  }, { passive: false });

  btn.addEventListener('touchend', e => {
    const t = e.changedTouches[0];
    onDragEnd(t.clientX, t.clientY);
  });

  /* ── Expose apakah gerakan terakhir adalah drag ─────── */
  wrap._wasDragged = () => dragged;

  /* ── Re-clamp saat resize (orientasi berubah, dll) ──── */
  window.addEventListener('resize', () => {
    const rect = wrap.getBoundingClientRect();
    const pos  = clamp(rect.left, rect.top);
    applyPos(pos.left, pos.top);
  }, { passive: true });

  /* ── Load posisi tersimpan ──────────────────────────── */
  loadPos();
}

/* ═══════════════════════════════════════════════════════
   10. CLUBBY — Floating Mascot + Chat Widget
   ═══════════════════════════════════════════════════════ */
function initClubby() {
  const wrap       = document.getElementById('clubby');
  const bubble     = document.getElementById('clubby-bubble');
  const btn        = document.getElementById('clubby-btn');
  const panel      = document.getElementById('clubby-panel');
  const panelClose = document.getElementById('clubby-panel-close');
  const messages   = document.getElementById('clubby-messages');
  const quickBtns  = document.querySelectorAll('.clubby-quick-btn');
  const inputEl    = document.getElementById('clubby-input');
  const sendBtn    = document.getElementById('clubby-send');

  if (!wrap || !bubble || !btn || !panel || !messages) return;

  /* ── Knowledge Base ─────────────────────────────────
     Jawaban statis — tidak menggunakan API.
     Array = beberapa bubble dikirim berurutan.
  ───────────────────────────────────────────────────── */
  const KB = {
    paket: [
      `WashClub punya <strong>3 paket bulanan</strong> — semua sudah termasuk gratis antar jemput dan pickup rutin mingguan:`,
      `📦 <strong>Solo Pocket — Rp99.000/bulan</strong><br>Cocok buat yang tinggal sendiri.<br>• 10 kg per bulan<br>• 4x pickup per bulan<br>• Selesai dalam 3 hari kerja<br>• Bisa batal kapan saja`,
      `👫 <strong>Couple Pack — Rp179.000/bulan</strong> ⭐ Paling Populer<br>Solusi terbaik untuk berdua.<br>• 20 kg per bulan<br>• 4x pickup per bulan<br>• Selesai dalam 3 hari kerja<br>• Hemat vs. 2 paket Solo`,
      `👨‍👩‍👧 <strong>Family Pack — Rp329.000/bulan</strong><br>Untuk keluarga yang aktif.<br>• 40 kg per bulan<br>• 4x pickup per bulan<br>• Prioritas selesai <strong>48 jam</strong><br>• Kapasitas terbesar`,
      `💡 Semua harga sudah termasuk PPN. Tidak ada biaya tersembunyi.<br><br>Sisa kuota hingga 3 kg bisa dibawa ke bulan berikutnya jika langganan diperpanjang.<br><br><a href="#paket" class="clubby-link">Lihat detail lengkap paket →</a>`,
    ],
    coverage: [
      `📍 <strong>Coverage Area WashClub</strong>`,
      `WashClub akan mulai melayani area <strong>SCBD (Sudirman Central Business District)</strong>, Jakarta Selatan saat resmi diluncurkan.`,
      `Setelah launching di SCBD, kami akan terus memperluas jangkauan ke area lainnya.<br><br>Daftar waitlist sekarang agar kamu dapat notifikasi pertama saat WashClub hadir di areamu! 🎉`,
    ],
    'cara-kerja': [
      `⚙️ <strong>Cara kerja WashClub</strong> — cuma 3 langkah:`,
      `1️⃣ <strong>Pilih Paket</strong><br>Pilih Solo Pocket, Couple Pack, atau Family Pack sesuai kebutuhanmu. Tidak perlu install app — cukup lewat website ini.`,
      `2️⃣ <strong>Tentukan Jadwal Pickup</strong><br>Pilih hari dan jam yang paling cocok buatmu. Jadwal berlaku otomatis setiap minggu.`,
      `3️⃣ <strong>Langsung Berjalan Otomatis</strong><br>Setiap minggu tim kami datang, menjemput laundry, mencuci, dan mengantarkan balik. Tanpa chat, tanpa ribet.`,
      `✅ Tidak perlu ada di rumah — bisa titip ke satpam atau resepsionis.<br>✅ Tim kami konfirmasi sebelum datang.<br>✅ Ubah jadwal minimal 24 jam sebelumnya.<br><br><a href="#cara-kerja" class="clubby-link">Pelajari lebih lanjut →</a>`,
    ],
    faq: [
      `❓ <strong>Pertanyaan yang sering ditanya:</strong>`,
      `<strong>Apakah WashClub sudah beroperasi?</strong><br>Belum. WashClub sedang dalam tahap persiapan dan membuka waitlist sebelum resmi diluncurkan.`,
      `<strong>Kapan WashClub diluncurkan?</strong><br>Tanggal launching akan segera diumumkan kepada seluruh member waitlist.`,
      `<strong>Harus ada di rumah saat pickup?</strong><br>Tidak harus. Bisa titip ke satpam, resepsionis, atau taruh di depan pintu.`,
      `<strong>Berapa lama laundry selesai?</strong><br>Solo Pocket &amp; Couple Pack: <em>3 hari kerja</em>.<br>Family Pack: prioritas <em>48 jam</em>.<br>Ada Express Pass untuk lebih cepat (+Rp5.000/kg).`,
      `<strong>Bisa batal kapan saja?</strong><br>Ya, tanpa biaya penalti. Berlaku di akhir periode berjalan.`,
      `<strong>Cucian melebihi kuota?</strong><br>Extra Load Rp10.000/kg. Kami konfirmasi dulu — tidak ada tagihan kejutan.<br><br><a href="#faq" class="clubby-link">Lihat semua FAQ →</a>`,
    ],
    'waiting-list': [
      `🎉 <strong>Gabung Waitlist WashClub — Gratis!</strong>`,
      `WashClub belum resmi beroperasi, tapi kamu bisa daftar lebih awal sekarang.<br><br>Keuntungan daftar waitlist:<br>✅ Diskon eksklusif member pertama<br>✅ Prioritas jadwal pickup di areamu`,
      `Hanya butuh nama dan username Instagram. Gratis, tanpa komitmen! 👇`,
    ],
  };

  /* ── State ────────────────────────────────────────── */
  let isPanelOpen   = false;
  let dismissTimer  = null;
  let isTyping      = false;   // guard: cegah duplikat typing row

  /* ── Speech Bubble ───────────────────────────────── */
  function showBubble() {
    bubble.classList.add('is-visible');
    bubble.setAttribute('aria-hidden', 'false');
  }
  function hideBubble() {
    bubble.classList.remove('is-visible');
    bubble.setAttribute('aria-hidden', 'true');
  }
  function scheduleAutoDismiss(ms = 5000) {
    clearTimeout(dismissTimer);
    dismissTimer = setTimeout(hideBubble, ms);
  }

  /* ── Panel open / close ──────────────────────────── */
  function isMobile() {
    return window.innerWidth <= 479;
  }

  function openPanel() {
    isPanelOpen = true;
    hideBubble();
    clearTimeout(dismissTimer);
    // Mobile: pindah ke kiri bawah saat panel terbuka
    if (isMobile()) {
      wrap.classList.add('clubby-panel-open-mobile');
    }
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Tutup chat Clubby');
    // Tunda focus sampai setelah CSS transition selesai (~280ms)
    // requestAnimationFrame saja tidak cukup di iOS Safari
    setTimeout(() => panelClose.focus(), 300);
  }

  function closePanel() {
    isPanelOpen = false;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Buka chat Clubby, asisten WashClub');
    // Mobile: kembali ke kanan bawah saat panel ditutup
    if (isMobile()) {
      wrap.classList.remove('clubby-panel-open-mobile');
      // Reset inline drag styles jika tidak ada saved position
      // supaya CSS rule right: 1.25rem bisa aktif kembali
      const savedPos = localStorage.getItem('clubby-pos');
      if (!savedPos) {
        wrap.style.left   = '';
        wrap.style.top    = '';
        wrap.style.right  = '';
        wrap.style.bottom = '';
      }
    }
    btn.focus();
  }

  // Tutup panel saat thank-you popup muncul
  document.addEventListener('clubby:close', () => {
    if (isPanelOpen) closePanel();
  });

  /* ── Chat helpers ────────────────────────────────── */
  function scrollToBottom() {
    messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
  }

  function addMessage(html, role) {
    const row = document.createElement('div');
    const displayRole = role === 'error' ? 'bot' : role;
    row.className = `clubby-msg clubby-msg--${displayRole}${role === 'error' ? ' clubby-msg--error' : ''}`;
    const bub = document.createElement('div');
    bub.className = 'clubby-msg-bubble';
    bub.innerHTML = html;
    row.appendChild(bub);
    messages.appendChild(row);
    scrollToBottom();
  }

  function showTypingIndicator() {
    if (isTyping) return;
    isTyping = true;
    const row = document.createElement('div');
    row.id = 'clubby-typing-row';
    row.className = 'clubby-msg clubby-msg--bot';
    row.innerHTML = '<div class="clubby-typing"><span></span><span></span><span></span></div>';
    messages.appendChild(row);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    const row = document.getElementById('clubby-typing-row');
    if (row) row.remove();
    isTyping = false;
  }

  /* ── KB topic matcher — cari topik dari teks bebas ── */
  function matchTopic(text) {
    const t = text.toLowerCase();
    if (/paket|harga|biaya|solo|couple|family|kuota|kg|berlangganan|subscription/.test(t)) return 'paket';
    if (/area|coverage|wilayah|lokasi|kota|scbd|jakarta|sudirman/.test(t)) return 'coverage';
    if (/cara|kerja|langkah|bagaimana|gimana|proses|alur/.test(t)) return 'cara-kerja';
    if (/faq|pertanyaan|tanya|cancel|batal|ubah|jadwal|aman|pickup|jemput|antar/.test(t)) return 'faq';
    if (/waitlist|daftar|gabung|waiting|list/.test(t)) return 'waiting-list';
    return null;
  }

  /* ── Send free-text message ──────────────────────── */
  function sendUserMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;
    if (inputEl) inputEl.value = '';
    addMessage(trimmed, 'user');

    const topic = matchTopic(trimmed);
    const bubbles = topic ? KB[topic] : null;

    showTypingIndicator();
    setTimeout(() => {
      if (bubbles) {
        const items = Array.isArray(bubbles) ? bubbles : [bubbles];
        items.forEach((html, i) => {
          setTimeout(() => {
            hideTypingIndicator();
            addMessage(html, 'bot');
            if (i < items.length - 1) showTypingIndicator();
          }, i * 650);
        });
      } else {
        hideTypingIndicator();
        addMessage('Maaf, aku belum punya jawaban untuk itu. Coba tanyakan seputar <strong>paket</strong>, <strong>cara kerja</strong>, <strong>area layanan</strong>, atau <strong>FAQ</strong> WashClub ya. 😊', 'bot');
      }
      if (inputEl) inputEl.focus();
    }, 700);
  }

  /* ── Quick reply handler ─────────────────────────── */
  quickBtns.forEach(qBtn => {
    qBtn.addEventListener('click', () => {
      const topic = qBtn.dataset.topic;
      const label = qBtn.textContent.trim();

      // Waiting List: show bubbles then open modal
      if (topic === 'waiting-list') {
        const bubbles = KB['waiting-list'];
        addMessage(label, 'user');
        showTypingIndicator();
        bubbles.forEach((html, i) => {
          setTimeout(() => {
            hideTypingIndicator();
            addMessage(html, 'bot');
            if (i < bubbles.length - 1) showTypingIndicator();
          }, 800 + i * 650);
        });
        const totalDelay = 800 + bubbles.length * 650 + 900;
        setTimeout(() => {
          closePanel();
          document.querySelector('[data-open-waitlist]')?.click();
        }, totalDelay);
        return;
      }

      // Semua topik lain → langsung dari KB statis
      const bubbles = KB[topic];
      if (!bubbles) {
        addMessage(label, 'user');
        showTypingIndicator();
        setTimeout(() => {
          hideTypingIndicator();
          addMessage('Maaf, aku belum punya jawaban untuk topik itu. 🙏', 'bot');
        }, 600);
        return;
      }

      addMessage(label, 'user');
      showTypingIndicator();
      const items = Array.isArray(bubbles) ? bubbles : [bubbles];
      items.forEach((html, i) => {
        setTimeout(() => {
          hideTypingIndicator();
          addMessage(html, 'bot');
          if (i < items.length - 1) showTypingIndicator();
        }, 800 + i * 650);
      });
    });
  });

  /* ── Toggle floating button ──────────────────────── */
  btn.addEventListener('click', () => {
    // Jika interaksi sebelumnya adalah drag, abaikan klik ini
    if (wrap._wasDragged && wrap._wasDragged()) return;
    isPanelOpen ? closePanel() : openPanel();
  });

  /* ── Close via header button ─────────────────────── */
  panelClose.addEventListener('click', closePanel);

  /* ── Close on Escape ─────────────────────────────── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isPanelOpen) closePanel();
  });

  /* ── Click outside panel → close ────────────────── */
  document.addEventListener('click', e => {
    if (isPanelOpen &&
        !panel.contains(e.target) &&
        !btn.contains(e.target)) {
      closePanel();
    }
  });

  /* ── Input: Enter to send ────────────────────────── */
  if (inputEl) {
    inputEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendUserMessage(inputEl.value);
      }
    });
  }

  /* ── Send button click ───────────────────────────── */
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      if (inputEl) sendUserMessage(inputEl.value);
    });
  }

  /* ═══════════════════════════════════════════════════
     ENTRY + GREETING SEQUENCE
     Triggered on window 'load' (fully loaded), not DOMContentLoaded.
     Timeline:
       0ms    — window.load fires
       1500ms — Clubby slides up with bounce
       2250ms — wave #1
       3200ms — wave #2
       3800ms — bubble shows, typing effect starts
       ~5600ms — second message types in
       ~11600ms — bubble fades out smoothly
  ═══════════════════════════════════════════════════ */

  let greetingDone  = false; // prevent double-firing
  let blinkTimer    = null;

  // ── Typing effect helper ───────────────────────────
  // Writes text char-by-char into a <p> element.
  // Returns a Promise that resolves when done.
  function typeText(el, text, speed) {
    return new Promise(resolve => {
      let i = 0;
      // Insert blinking cursor
      const cursor = document.createElement('span');
      cursor.className = 'clubby-bubble-cursor';
      cursor.setAttribute('aria-hidden', 'true');
      el.appendChild(cursor);

      const tick = () => {
        if (i < text.length) {
          cursor.insertAdjacentText('beforebegin', text[i]);
          i++;
          setTimeout(tick, speed);
        } else {
          cursor.remove();
          resolve();
        }
      };
      tick();
    });
  }

  // ── Smooth hide bubble ─────────────────────────────
  function hideBubbleSmooth() {
    return new Promise(resolve => {
      bubble.classList.remove('is-visible');
      bubble.classList.add('is-hiding');
      const onEnd = () => {
        bubble.classList.remove('is-hiding');
        bubble.setAttribute('aria-hidden', 'true');
        resolve();
      };
      bubble.addEventListener('transitionend', onEnd, { once: true });
      // Fallback in case transitionend doesn't fire
      setTimeout(onEnd, 400);
    });
  }

  // ── Wave helper ────────────────────────────────────
  // Adds .is-waving to svg, removes it after animation ends.
  function playWave() {
    return new Promise(resolve => {
      const svg = btn.querySelector('.clubby-svg');
      if (!svg) { resolve(); return; }
      svg.classList.add('is-waving');
      const onEnd = () => { svg.classList.remove('is-waving'); resolve(); };
      svg.addEventListener('animationend', onEnd, { once: true });
      setTimeout(onEnd, 1000); // fallback
    });
  }

  // ── Blink scheduler ───────────────────────────────
  function scheduleBlink() {
    const delay = 8000 + Math.random() * 7000; // 8–15s
    blinkTimer = setTimeout(() => {
      if (isPanelOpen) { scheduleBlink(); return; }
      const svg = btn.querySelector('.clubby-svg');
      if (svg) {
        svg.classList.add('is-blinking');
        svg.addEventListener('animationend', () => {
          svg.classList.remove('is-blinking');
        }, { once: true });
        setTimeout(() => svg.classList.remove('is-blinking'), 300); // fallback
      }
      scheduleBlink();
    }, delay);
  }

  // ── Main greeting sequence ─────────────────────────
  async function runGreeting() {
    if (greetingDone) return;
    greetingDone = true;

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Entry animation
    wrap.classList.add('clubby-entry');
    await new Promise(resolve => {
      wrap.addEventListener('animationend', resolve, { once: true });
      setTimeout(resolve, 900); // fallback
    });
    wrap.classList.remove('clubby-entry');
    wrap.classList.add('clubby-ready');

    // 2. loadPos after entry — prevents position conflict during animation
    // (initClubbyDrag is called after, so we call loadPos manually here)
    // Note: initClubbyDrag will also call loadPos — it's idempotent, no issue.

    if (reduced) {
      // Skip animations, just show bubble statically
      bubble.innerHTML = '<p>Halo! 👋 Aku Clubby.</p><p>Asisten WashClub kamu.</p>';
      showBubble();
      scheduleAutoDismiss(6000);
      scheduleBlink();
      return;
    }

    // 3. Pause float animation during greeting — hanya bubble yang bergerak
    wrap.classList.add('greeting-active');

    // 4. Wave twice (750ms gap between waves)
    await new Promise(r => setTimeout(r, 550));
    await playWave();
    await new Promise(r => setTimeout(r, 750));
    await playWave();
    await new Promise(r => setTimeout(r, 300));

    // 5. Show bubble — message 1 with typing effect
    bubble.innerHTML = ''; // clear static HTML from index.html
    const p1 = document.createElement('p');
    bubble.appendChild(p1);
    showBubble();
    await typeText(p1, 'Halo! 👋 Aku Clubby.', 42);

    // 6. Short pause then message 2
    await new Promise(r => setTimeout(r, 600));
    const p2 = document.createElement('p');
    bubble.appendChild(p2);
    await typeText(p2, 'Selamat datang di WashClub. Aku siap membantu menemukan paket laundry yang paling cocok untukmu.', 28);

    // 7. Bubble stays visible ~6s then fades out smoothly
    await new Promise(r => setTimeout(r, 6000));
    await hideBubbleSmooth();

    // 8. Resume float animation setelah greeting selesai
    wrap.classList.remove('greeting-active');

    // 9. Start blink cycle
    scheduleBlink();
  }

  // ── Trigger on window load (fully loaded) ─────────
  if (document.readyState === 'complete') {
    setTimeout(runGreeting, 6000);
  } else {
    window.addEventListener('load', () => setTimeout(runGreeting, 6000), { once: true });
  }

  // ── Speech bubble click → open panel ──────────────
  bubble.addEventListener('click', () => {
    clearTimeout(dismissTimer);
    hideBubble();
    openPanel();
  });

  /* ── Init drag (after entry so loadPos doesn't fight animation) ── */
  initClubbyDrag(wrap, btn, () => isPanelOpen);
}

/* ═══════════════════════════════════════════════════════
   HERO WAITLIST FORM — Submit inline form ke Google Sheets
   ═══════════════════════════════════════════════════════ */
function initHeroWaitlistForm() {
  const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxBe8CExlsQ1ukmz7xf3wZBPVVDn9zm-CXWYmpEa00gEUV18CDa8_9FI1i0no_tSrk/exec';

  const form       = document.getElementById('waitlist-form-hero');
  const submitBtn  = document.getElementById('hero-submit');
  const submitText = submitBtn && submitBtn.querySelector('.wl-submit-text');
  const submitLoad = submitBtn && submitBtn.querySelector('.wl-submit-loading');
  const namaInput  = document.getElementById('hero-nama');
  const igInput    = document.getElementById('hero-ig');
  const namaError  = document.getElementById('hero-nama-error');
  const igError    = document.getElementById('hero-ig-error');
  const tyPopup    = document.getElementById('thankyou-popup');
  const btnTyClose = document.getElementById('ty-close');

  if (!form || !submitBtn) return;

  // ── Thank you popup helpers ──────────────────────────
  function openThankyou() {
    if (!tyPopup) return;
    tyPopup.hidden = false;

    // Tutup panel Clubby jika sedang terbuka
    document.dispatchEvent(new CustomEvent('clubby:close'));

    // GA4 Lead Event — dikirim saat thank you popup muncul
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      form_id: 'waitlist-form-hero',
      form_name: 'Waitlist WashClub'
    });
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    requestAnimationFrame(() => {
      const btn = tyPopup.querySelector('button');
      if (btn) btn.focus();
    });
  }

  function closeThankyou() {
    if (!tyPopup) return;
    tyPopup.hidden = true;
    document.body.style.overflow = '';
  }

  if (btnTyClose) btnTyClose.addEventListener('click', closeThankyou);
  if (tyPopup) {
    tyPopup.addEventListener('click', (e) => {
      if (e.target === tyPopup) closeThankyou();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tyPopup && !tyPopup.hidden) closeThankyou();
  });

  function setError(errorEl, msg) {
    if (errorEl) errorEl.textContent = msg;
  }
  function clearError(errorEl) {
    if (errorEl) errorEl.textContent = '';
  }

  function setSubmitting(loading) {
    submitBtn.disabled = loading;
    if (submitText) submitText.hidden = loading;
    if (submitLoad) {
      submitLoad.hidden = !loading;
      submitLoad.style.display = loading ? 'inline-flex' : 'none';
    }
  }

  function validate() {
    let valid = true;
    clearError(namaError);
    clearError(igError);

    const nama = namaInput.value.trim();
    const ig   = igInput.value.trim();
    // Normalise: pastikan dimulai dengan @
    const igClean = ig.startsWith('@') ? ig : (ig ? '@' + ig : '');

    if (!nama) {
      setError(namaError, 'Nama lengkap wajib diisi.');
      valid = false;
    } else if (nama.length < 2) {
      setError(namaError, 'Nama terlalu pendek.');
      valid = false;
    }

    if (!ig) {
      setError(igError, 'Username Instagram wajib diisi.');
      valid = false;
    } else if (!/^@?[\w.]{1,30}$/.test(ig)) {
      setError(igError, 'Masukkan username Instagram yang valid, contoh: @budisantoso.');
      valid = false;
    }

    return { valid, nama, instagram: igClean };
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    SFX.playClick(); // A — suara klik tombol
    const { valid, nama, instagram } = validate();
    if (!valid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    setSubmitting(true);

    try {
      await fetch(GAS_ENDPOINT, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams({ nama, instagram }).toString(),
      });

      // Success — ganti tombol jadi konfirmasi
      form.reset();
      clearError(namaError);
      clearError(igError);
      if (submitLoad) {
        submitLoad.hidden = true;
        submitLoad.style.display = 'none';
      }
      if (submitText) {
        submitText.textContent = '✓ Kamu sudah terdaftar!';
        submitText.hidden = false;
      }
      submitBtn.disabled = true;
      // Stop flicker animation setelah submit berhasil
      submitBtn.style.animation = 'none';
      SFX.playSuccess(); // B — suara success
      openThankyou();

    } catch (err) {
      console.error('[WashClub] Hero form submit error:', err);
      setError(namaError, 'Terjadi kesalahan. Silakan coba lagi.');
      setSubmitting(false);
    }
  });

  // Inline error on blur
  namaInput.addEventListener('blur', () => {
    const val = namaInput.value.trim();
    if (!val) setError(namaError, 'Nama lengkap wajib diisi.');
    else clearError(namaError);
  });

  igInput.addEventListener('blur', () => {
    const val = igInput.value.trim();
    if (!val) setError(igError, 'Username Instagram wajib diisi.');
    else if (!/^@?[\w.]{1,30}$/.test(val)) setError(igError, 'Masukkan username Instagram yang valid, contoh: @budisantoso.');
    else clearError(igError);
  });
}

/* ═══════════════════════════════════════════════════════
   10B. SOUND EFFECTS — Web Audio API (no external files)
   ═══════════════════════════════════════════════════════ */
const SFX = (() => {
  let ctx = null;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  // A — Klik tombol: suara "click" pendek
  function playClick() {
    try {
      const c = getCtx();
      const o = c.createOscillator();
      const g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(880, c.currentTime);
      o.frequency.exponentialRampToValueAtTime(440, c.currentTime + 0.08);
      g.gain.setValueAtTime(0.3, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
      o.start(c.currentTime);
      o.stop(c.currentTime + 0.08);
    } catch(_) {}
  }

  // B — Thank you popup: suara "success" ceria
  function playSuccess() {
    try {
      const c = getCtx();
      [523, 659, 784, 1047].forEach((freq, i) => {
        const o = c.createOscillator();
        const g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = 'sine';
        const t = c.currentTime + i * 0.12;
        o.frequency.setValueAtTime(freq, t);
        g.gain.setValueAtTime(0.25, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        o.start(t);
        o.stop(t + 0.25);
      });
    } catch(_) {}
  }

  // C — Flicker: suara buzz/elektrik pendek
  function playBuzz() {
    try {
      const c = getCtx();
      const bufSize = c.sampleRate * 0.05;
      const buf = c.createBuffer(1, bufSize, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.15;
      const src = c.createBufferSource();
      const g   = c.createGain();
      src.buffer = buf;
      src.connect(g); g.connect(c.destination);
      g.gain.setValueAtTime(0.4, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
      src.start(c.currentTime);
    } catch(_) {}
  }

  return { playClick, playSuccess, playBuzz };
})();

/* ═══════════════════════════════════════════════════════
   11. INIT — DOMContentLoaded
   ═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initNavbar();
  initFAQ();
  initReveal();
  initBackToTop();
  setNavbarHeightVar();
  initHeroWaitlistForm();
  initClubby();

  // Live Counter — angka berubah random supaya terlihat real
  // Promo overlay slide rotation
  const promoSlides  = document.querySelectorAll('.hero-promo-slide');
  const promoContainer = document.querySelector('.hero-promo-left');
  const promoOverlay = document.querySelector('.hero-promo-overlay');
  const promoArrow   = document.getElementById('promo-arrow');

  // Set tinggi container = slide tertinggi supaya tidak layout shift
  if (promoContainer && promoSlides.length > 0) {
    // Tampilkan semua slide sementara untuk ukur tinggi
    promoSlides.forEach(s => {
      s.style.position = 'relative';
      s.style.opacity  = '1';
      s.style.display  = 'block';
    });
    const maxH = Math.max(...Array.from(promoSlides).map(s => s.offsetHeight));
    promoContainer.style.minHeight = maxH + 'px';
    // Kembalikan ke state awal
    promoSlides.forEach((s, i) => {
      s.style.position = '';
      s.style.opacity  = '';
      s.style.display  = '';
      if (i !== 0) s.classList.remove('is-active');
    });
    promoSlides[0].classList.add('is-active');
  }
  if (promoSlides.length > 1) {
    const durations = [4500, 3500];
    let current = 0;

    function nextPromoSlide() {
      promoSlides[current].classList.remove('is-active');
      // D — hapus glow
      if (promoOverlay) promoOverlay.classList.remove('is-glowing');
      // C — sembunyikan arrow
      if (promoArrow) promoArrow.classList.remove('is-visible');

      current = (current + 1) % promoSlides.length;
      promoSlides[current].classList.add('is-active');

      // D — tambah glow di slide 1
      if (current === 0 && promoOverlay) {
        promoOverlay.classList.add('is-glowing');
      }
      // C — tampilkan arrow di slide 2 setelah 1.5s
      if (current === 1 && promoArrow) {
        setTimeout(() => promoArrow.classList.add('is-visible'), 1500);
      }

      setTimeout(nextPromoSlide, durations[current]);
    }

    // Init slide 1 dengan glow
    if (promoOverlay) promoOverlay.classList.add('is-glowing');
    setTimeout(nextPromoSlide, durations[0]);
  }

  // C — Buzz sound saat flicker animasi iterasi (mobile only) — dihapus

  // re-run spin after lucide renders icons
  requestAnimationFrame(() => {
    setTimeout(initSpinIcons, 50);
  });
});
