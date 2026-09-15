'use strict';

require('dotenv').config();

const express     = require('express');
const cors        = require('cors');
const path        = require('path');
const compression = require('compression');

const app  = express();
const port = process.env.PORT || 3000;

/* ── Compression (gzip/brotli) ─────────────────────────── */
app.use(compression({ level: 6 }));

/* ── Middleware ────────────────────────────────────────── */
app.use(cors());
app.use(express.json());

/* ── Static files dengan caching headers ──────────────── */
app.use(express.static(path.join(__dirname), {
  maxAge: '7d',          // cache asset 7 hari
  etag: true,
  lastModified: true,
  setHeaders(res, filePath) {
    // HTML jangan di-cache supaya update langsung kelihatan
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
    // CSS, JS, images — cache 7 hari
    if (/\.(css|js|png|jpg|jpeg|webp|svg|woff2|woff|ttf)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
    }
  }
}));

/* ── Fallback → index.html ─────────────────────────────── */
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ── Start ─────────────────────────────────────────────── */
app.listen(port, () => {
  console.log(`WashClub server berjalan di http://localhost:${port}`);
});
