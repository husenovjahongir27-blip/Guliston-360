# GULISTON 360 — GitHub Pages PRO

Bu versiya statik GitHub Pages uchun tayyorlangan.

## Kiritilgan funksiyalar
- Responsive desktop/mobile dizayn
- Interaktiv OpenStreetMap xaritasi
- 6 ta demo obyekt
- Qidiruv va kategoriya filtri
- Obyekt detail oynasi
- 360° Pannellum viewer
- Virtual tur nuqtalari ro‘yxati
- Auto-rotate
- Fullscreen
- Mobil gyro uchun UI
- Sevimlilar (localStorage)
- UZ/RU/EN til almashtirgich UI
- Dark mode
- Geolocation
- Google Maps yo‘nalish tugmasi
- Web Share / clipboard
- QR-kod
- Audio gid (Speech Synthesis)
- GitHub Pages Actions deploy
- `.nojekyll`

## Haqiqiy 360° panoramalar
`app.js` ichidagi `demoPano` qiymatini haqiqiy equirectangular 360° rasm URL manziliga almashtiring.
Professional ko‘p nuqtali tur uchun keyingi bosqichda Marzipano scene/hotspot tizimini ulash mumkin.

## GitHub
1. GitHub → New repository → masalan `guliston360`
2. ZIP ichidagi BARCHA fayllarni repository root'iga yuklang.
3. Settings → Pages → Source: GitHub Actions.
4. Actions'da `Deploy Guliston 360 to GitHub Pages` ishga tushadi.
5. Sayt: https://USERNAME.github.io/guliston360/

## Muhim cheklov
GitHub Pages server-side baza va maxfiy admin loginini o‘zi bajarmaydi. Haqiqiy admin panel, obyekt qo‘shish/o‘chirish, sharhlarni serverda saqlash uchun Supabase/Firebase yoki alohida backend kerak bo‘ladi.
