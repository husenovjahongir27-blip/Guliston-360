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
