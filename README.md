# GULISTON 360° — Flag Design

GitHub Pages uchun tayyor yangi dizayn.

## Nimalar yangilandi
- O‘zbekiston bayrog‘i ranglari asosidagi dizayn
- Katta panorama markazga va ekranning butun kengligiga chiqarildi
- Chapda obyektlar ro‘yxati
- O‘ngda obyektning batafsil ma’lumoti
- Tabiiy ko‘rinishdagi Lucide ikonkalari
- UZ / RU / EN tillari amalda ishlaydi
- Til almashtirishda sahifadagi matnlar tarjima qilinadi
- Gyro/orientation funksiyasi butunlay olib tashlandi
- 360° auto-rotate, zoom, fullscreen
- Hotspot orqali panorama → panorama o‘tish
- Interaktiv xarita
- Sevimlilar
- Audio gid
- Google Maps yo‘nalishi
- Ulashish
- Obyektlarning batafsil ma’lumot oynasi
- Guliston haqida ma’lumot
- Milliy taomlar, suvenir, foto zona, agroturizm bo‘limlari
- Aloqa: telefon, Telegram, Instagram, email
- Mobil responsive dizayn

## Ma'lumot manbalari
Guliston bo‘yicha obyektlar va umumiy ma’lumotlar Uzbekistan Travel va Sirdaryo/Guliston rasmiy manbalaridagi ochiq ma’lumotlarga tayangan.

## GitHub
Hozirgi repository'dagi `index.html`, `style.css`, `app.js` fayllarini almashtiring va `main` branchga commit qiling. Pages sozlamangiz `main` + `/(root)` bo‘lsa, sayt avtomatik yangilanadi.

## 360° suratlar
`app.js` ichidagi `places` massivida har bir obyekt uchun `pano` URL mavjud. Haqiqiy Guliston 360° equirectangular rasmlari tayyor bo‘lgach, shu URL'lar almashtiriladi.


## V3 tuzatishlari
- Tungi rejim to‘liq ishlaydigan dark theme bilan yangilandi.
- Sevimli obyekt tanlanganda yurak qizil bo‘ladi.
- Panorama balandligi kamaytirildi; sahifaning qolgan bo‘limlariga scroll qilish qulay.
- “Keyingi bo‘lim” tugmasi qo‘shildi.
- QR-kod qayta qo‘shildi.
- QR kod obyektning batafsil oynasidan yaratiladi.
- 360°, xarita, obyektlar, aloqa va qo‘shimcha bo‘limlar saqlab qolindi.
- Mahalliy CSS/JS fayllarga cache-busting (`?v=3`) qo‘shildi.
- Mobil va kompyuter uchun alohida o‘lchamlar yaxshilandi.
- Favoritlar ro‘yxati alohida oynada ko‘rsatiladi.


## V4 — Professional tourism platform
- Services section: hotels, dining, events, routes, 360° photos, 3 languages.
- Suggestions & complaints form at the bottom.
- Form is configured for `husenovjahongir27@gmail.com` via FormSubmit.
- Instagram uses an embedded SVG icon, so it remains visible even if the icon library has a loading issue.
- Dark mode has explicit overrides for cards, headings, forms, navigation, modal windows and legacy inline text.
- Panorama section is bounded, so the rest of the website is easy to reach.
- QR, favorites, map, audio guide, sharing and detailed object pages remain enabled.

### Feedback email
The form posts to FormSubmit. The first submission can trigger an activation email for the destination address. After activation, submissions are forwarded to the configured email.
If you prefer a completely self-hosted solution later, connect a small backend or serverless function instead of FormSubmit.


## V5 — Admin panel
Admin panel qo‘shildi:
- obyekt qo‘shish
- obyektni tahrirlash
- obyektni o‘chirish
- 3 tildagi nom va tavsif
- rasm URL
- 360° panorama URL
- koordinatalar
- kategoriya
- JSON eksport
- JSON import
- brauzerda saqlash

Demo parol: `360admin`

### Muhim
GitHub Pages statik hosting bo‘lgani uchun bu V5 admin ma’lumotlarni hozircha brauzer LocalStorage'ida saqlaydi. Bu real umumiy server bazasi emas: bir brauzerda kiritilgan ma’lumot boshqa qurilmaga avtomatik tarqalmaydi. Keyingi production bosqichida Supabase yoki Firebase backend ulansa, admin orqali qo‘shilgan obyektlar barcha foydalanuvchilarga real vaqtda ko‘rinadi va rasm/360° fayllarni serverga yuklash mumkin.
