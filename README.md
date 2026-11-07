# Pencil Story — Remotion (1080x1920, 29 detik, 30 fps)

Video storytelling 7 adegan bergaya pencil sketch + warna lembut. Soundtrack memakai
`public/soundtrack.mp3` (file asli Anda, 29,02 dtk, tidak diubah).

## Cara paling mudah dari HP Android: GitHub Actions
1. Buat akun GitHub, lalu repo baru (private juga boleh).
2. Unggah seluruh isi folder ini (ekstrak zip dulu; lewat browser: Add file > Upload files).
   Pastikan folder `.github/workflows/render.yml` ikut terunggah.
3. Buka tab **Actions** > **Render MP4** > **Run workflow**.
4. Tunggu selesai (sekitar 10-25 menit), buka run-nya, unduh artifact **story-mp4**
   (zip berisi `story.mp4`), ekstrak, simpan ke galeri.

## Alternatif cloud: GitHub Codespaces / Gitpod / VPS
```bash
npm install
npx remotion browser ensure
npm run render        # hasil: out/story.mp4
npm run dev           # pratinjau di Remotion Studio
```

## Di komputer sendiri
Butuh Node.js 18+ dan ffmpeg tidak wajib (Remotion membawa sendiri). Jalankan perintah di atas.
Catatan: Termux/Android langsung tidak mendukung Chrome headless yang dibutuhkan Remotion.

## Mengubah isi
- Teks tulisan tangan: prop `lines` di tiap `src/scenes/SceneN.tsx`.
- Durasi adegan: `SCENE_FRAMES` di `src/constants.ts` (total otomatis 870 frame = 29 dtk).
- Warna: objek `C` di `src/constants.ts`.
- Font tulisan tangan (Caveat) diunduh dari Google Fonts saat render, jadi butuh internet.
- Jika muncul peringatan versi Remotion tidak sama: `npx remotion upgrade`.
