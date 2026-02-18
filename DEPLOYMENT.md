# Deployment Guide - OSKN Profile Portfolio

## Deploy ke Vercel dengan GitHub Integration (Recommended)

Ini adalah cara termudah dan paling reliable untuk deploy:

### Step 1: Buka Vercel
1. Kunjungi https://vercel.com/new
2. Login dengan GitHub account Anda

### Step 2: Import Project
1. Pilih "Import Git Repository"
2. Paste URL: `https://github.com/lintangrafi/oskn-profile`
3. Klik "Continue"

### Step 3: Configure Project
- **Project Name**: `oskn-profile` (atau nama lain yang Anda prefer)
- **Framework Preset**: Akan auto-detect Next.js
- **Root Directory**: `.` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- Environment Variables: (leave empty untuk sekarang)

### Step 4: Deploy
1. Klik "Deploy"
2. Tunggu proses build selesai (3-5 menit)
3. Setelah selesai, Anda akan mendapat URL publik!

## Custom Domain (Optional)

Setelah deploy berhasil, untuk menambahkan custom domain:

1. Buka Project Settings di Vercel
2. Pergi ke "Domains"
3. Klik "Add"
4. Masukkan domain Anda
5. Ikuti instruksi DNS dari Vercel

## Troubleshooting

Jika build gagal di Vercel tetapi lokal berhasil:

1. **Bersihkan dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Cek Node version** - Vercel menggunakan Node 18.x
   
3. **Lihat Build Logs** di Vercel Dashboard untuk error detail

## Environment Variables (jika diperlukan)

Tambahkan di Vercel Project Settings → Environment Variables jika ada `.env` file

## Next.js Optimization

Build yang slow? Optimize dengan:
- Lazy load images: `loading="lazy"` pada Image components
- Remove unused CSS
- Compress static assets

---

Portfolio Anda sudah di-push ke GitHub!
Sekarang tinggal deploy via Vercel Web UI 🚀
