'use strict';

require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app  = express();
const port = process.env.PORT || 3000;

/* ── Middleware ────────────────────────────────────────── */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

/* ── Fallback → index.html ─────────────────────────────── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ── Start ─────────────────────────────────────────────── */
app.listen(port, () => {
  console.log(`WashClub server berjalan di http://localhost:${port}`);
});
