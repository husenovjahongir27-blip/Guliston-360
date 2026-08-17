const places=[
{id:"square",title:{uz:"Markaziy maydon",ru:"Центральная площадь",en:"Central Square"},cat:"history",icon:"landmark",img:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",pano:"pano1.jpg",lat:40.4896,lng:68.7812,desc:{uz:"Gulistonning markaziy jamoat makonlaridan biri. Turizm yo‘nalishlarida markaziy maydon shahar sayohatining asosiy nuqtalaridan sifatida ko‘rsatiladi.",ru:"Одна из центральных общественных площадей Гулистана и важная точка городского маршрута.",en:"One of Gulistan’s central public spaces and an important point on city visitor routes."},full:{uz:"Guliston bo‘yicha rasmiy turizm manbalarida asosiy shahar maydoni shaharning diqqatga sazovor joylaridan biri sifatida ko‘rsatiladi. Sirdaryo bo‘yicha tur dasturida ham markaziy maydon tashrif nuqtasi sifatida keltirilgan.",ru:"Официальный туристический ресурс относит главную городскую площадь к достопримечательностям Гулистана. Она также включена в туристический маршрут по Сырдарьинской области.",en:"The official tourism resource lists the main city square among Gulistan’s attractions. It is also included as a stop in the Syrdarya regional itinerary."}},
{id:"park",title:{uz:"Guliston shahar bog‘i",ru:"Городской парк Гулистана",en:"Gulistan City Park"},cat:"nature",icon:"trees",img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",pano:"pano2.jpg",lat:40.4943,lng:68.7819,desc:{uz:"Sayr, dam olish va shahar yashil hududlarini tomosha qilish uchun maskan.",ru:"Зелёная зона для прогулок и отдыха.",en:"A green urban area for walks and recreation."},full:{uz:"Guliston shahar bog‘i rasmiy turizm manbalarida shaharning asosiy ko‘rish joylaridan biri sifatida qayd etilgan. Sirdaryo bo‘yicha tur dasturida ham shahar bog‘ida sayr qilish ko‘rsatilgan.",ru:"Городской парк Гулистана указан официальным туристическим ресурсом среди основных мест для посещения. Он также входит в маршрут по Сырдарьинской области.",en:"Gulistan City Park is listed by the official tourism resource among the city’s main places to visit and appears in the regional itinerary."}},
{id:"museum",title:{uz:"Sirdaryo viloyati tarixi va madaniyati davlat muzeyi",ru:"Государственный музей истории и культуры Сырдарьинской области",en:"State Museum of History and Culture of Syrdarya"},cat:"culture",icon:"landmark",img:"https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=80",pano:"pano3.jpg",lat:40.4890,lng:68.7828,desc:{uz:"Sirdaryo hududining tarixi va madaniyatiga oid ma’lumotlarni jamlaydigan muzey.",ru:"Музей, посвящённый истории и культуре Сырдарьинской области.",en:"A museum focused on the history and culture of Syrdarya region."},full:{uz:"Rasmiy turistik marshrutning 1-kun dasturida Sirdaryo viloyati tarixi va madaniyati davlat muzeyiga tashrif kiritilgan. Virtual platformada bu obyekt uchun ekspozitsiyalar, fotosuratlar, audio gid va 360° ichki panorama qo‘shilishi mumkin.",ru:"Государственный музей истории и культуры Сырдарьинской области включён в программу первого дня официального туристического маршрута. Для виртуального тура можно добавить экспозиции, фото, аудиогид и внутреннюю панораму.",en:"The State Museum of History and Culture of Syrdarya is included in the official day-one itinerary. The virtual platform can later add exhibits, photos, an audio guide and an interior 360° panorama."}},
{id:"library",title:{uz:"Alisher Navoiy nomidagi “Bilimdonlar maskani”",ru:"«Bilimdonlar maskani» имени Алишера Навои",en:"Alisher Navoi “Bilimdonlar Maskani”"},cat:"education",icon:"book-open",img:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",pano:"pano4.jpg",lat:40.4877,lng:68.7801,desc:{uz:"Guliston shahridagi ta’lim va madaniyat yo‘nalishidagi maskan.",ru:"Образовательное и культурное пространство в Гулистане.",en:"An educational and cultural place in Gulistan."},full:{uz:"Sirdaryo bo‘yicha rasmiy 4 kunlik sayohat dasturida 1-kun tashrif nuqtasi sifatida Alisher Navoiy nomidagi “Bilimdonlar maskani” keltirilgan.",ru:"В официальной четырёхдневной программе по Сырдарье «Bilimdonlar Maskani» имени Алишера Навои указан как точка посещения в первый день.",en:"The official four-day Syrdarya itinerary lists Alisher Navoi “Bilimdonlar Maskani” as a day-one stop."}},
{id:"theatre",title:{uz:"Viloyat musiqali drama teatri",ru:"Областной музыкально-драматический театр",en:"Regional Musical Drama Theatre"},cat:"culture",icon:"drama",img:"https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",pano:"pano5.jpg",lat:40.4908,lng:68.7852,desc:{uz:"Sirdaryo viloyatining madaniy hayotidagi muhim teatr maskani.",ru:"Важная театральная площадка культурной жизни региона.",en:"An important theatre venue in the region’s cultural life."},full:{uz:"Sirdaryo bo‘yicha rasmiy tur dasturida Viloyat musiqali drama teatriga tashrif 3-kun yo‘nalishiga kiritilgan.",ru:"Областной музыкально-драматический театр включён в третий день официального туристического маршрута по Сырдарье.",en:"The Regional Musical Drama Theatre is included in day three of the official Syrdarya tourism itinerary."}},
{id:"friendship",title:{uz:"O‘zbekiston-Xitoy do‘stlik bog‘i",ru:"Узбекско-китайский парк дружбы",en:"Uzbek-Chinese Friendship Park"},cat:"nature",icon:"trees",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",pano:"pano6.jpg",lat:40.492,lng:68.79,desc:{uz:"Sayr va foto uchun qiziqarli yashil hududlardan biri.",ru:"Зелёная зона для прогулок и фотографий.",en:"A green area suited for walks and photography."},full:{uz:"Uzbekistan Travel manbasida O‘zbekiston-Xitoy do‘stlik bog‘ida kechqurun xitoycha uslubdagi xiyobonda sayr qilish mumkinligi qayd etilgan.",ru:"Uzbekistan Travel отмечает возможность вечерней прогулки по аллее в китайском стиле в Узбекско-китайском парке дружбы.",en:"Uzbekistan Travel notes that visitors can enjoy an evening walk along a Chinese-style avenue in the Uzbek-Chinese Friendship Park."}}
];

const T={
uz:{tourPlacesEy:"360° OBYEKTLAR",tourPlacesTitle:"Virtual sayohat joylari",feedback:"Taklif va shikoyatlar",feedbackEy:"TAKLIF VA SHIKOYATLAR",feedbackTitle:"Fikringiz biz uchun muhim",feedbackText:"Saytdagi xatolik, yangi obyekt, 360° panorama yoki boshqa taklifingizni yuboring.",name:"Ismingiz",email:"Email",type:"Murojaat turi",suggestion:"Taklif",complaint:"Shikoyat",error:"Saytdagi xatolik",other:"Boshqa",message:"Xabar",sendFeedback:"Yuborish",namePh:"Ismingizni kiriting",emailPh:"Sizning emailingiz",messagePh:"Taklif yoki shikoyatingizni yozing...",feedbackHint:"Murojaat loyiha elektron pochtasiga yuboriladi.",subtitle:"Virtual sayohat",home:"Bosh sahifa",places:"Joylar",map:"Xarita",tour:"360° Tur",about:"Loyiha haqida",news:"Yangiliklar",contact:"Aloqa",placeList:"Joylar ro‘yxati",search:"Qidirish...",showMap:"Xaritada ko‘rish",f360:"360° Panorama",f360s:"Yuqori sifatli virtual tur",fmap:"Interaktiv xarita",fmaps:"Barcha joylar xaritada",faudio:"Audio gid",faudios:"Qiziqarli ma’lumotlar",fmobile:"Mobil moslashuv",fmobiles:"Telefon va planshetlar uchun",ffav:"Sevimlilar",ffavs:"Yoqqan joylaringizni saqlang",fshare:"Ulashish",fshares:"Do‘stlaringiz bilan ulashing",discover:"GULISTONNI KASHF ETING",topPlaces:"Asosiy diqqatga sazovor joylar",searchPlace:"Joy qidirish...",allCats:"Barcha kategoriyalar",history:"Tarixiy",culture:"Madaniy",nature:"Tabiiy",education:"Ta’lim",interactive:"INTERAKTIV XARITA",gulMap:"Guliston xaritada",mapText:"Gulistonning asosiy turistik va madaniy maskanlarini xaritada toping. Marker orqali obyekt haqida batafsil ma’lumotga o‘ting.",showAll:"Barchasini ko‘rsatish",aboutEy:"GULISTON HAQIDA",aboutTitle:"“Gullar o‘lkasi” — Sirdaryoning ma’muriy markazi",aboutText:"Guliston Sirdaryo viloyatining ma’muriy markazi. Shahar Mirzacho‘lni o‘zlashtirish, sug‘orish kanallari va temir yo‘l rivoji bilan chambarchas bog‘liq tarixga ega.",fact1:"shahar maqomi berilgan",fact2:"shakllanishining muhim davri",fact3:"quyoshli kunlar haqida turizm manbasida qayd etilgan",extraEy:"QO‘SHIMCHA",extraTitle:"Gulistonda nimalarni kashf etish mumkin?",extra1t:"Milliy taomlar",extra1p:"Sirdaryo hududida baliq taomlari, palov va boshqa o‘zbek milliy taomlarini tatib ko‘rish mumkin.",extra2t:"Suvenirlar",extra2p:"Mahalliy bozorlar va suvenir do‘konlarida xalq amaliy san’ati buyumlarini topish mumkin.",extra3t:"Foto zonalar",extra3p:"Shahar bog‘lari, maydonlar va yashil hududlar sayohat fotosuratlari uchun qulay joylar.",extra4t:"Agroturizm",extra4p:"Sirdaryo viloyatida bog‘, uzumzor va poliz xo‘jaliklariga asoslangan agroturizm imkoniyatlari mavjud.",contactEy:"ALOQA",contactTitle:"Biz bilan bog‘laning",contactText:"Guliston 360° loyihasi bo‘yicha takliflar, 360° panoramalar yoki hamkorlik masalalarida murojaat qilishingiz mumkin.",phone:"Telefon",footer:"© 2026 Guliston 360° — Virtual sayohat platformasi",details:"Batafsil ma’lumot",route:"Yo‘nalish olish",favorite:"Sevimlilarga qo‘shish",remove:"Sevimlilardan olib tashlash",audio:"Audio gid",share:"Ulashish"},
ru:{tourPlacesEy:"360° ОБЪЕКТЫ",tourPlacesTitle:"Места виртуального тура",feedback:"Предложения и жалобы",feedbackEy:"ПРЕДЛОЖЕНИЯ И ЖАЛОБЫ",feedbackTitle:"Ваше мнение важно",feedbackText:"Сообщите об ошибке, предложите новый объект или отправьте другую идею.",name:"Ваше имя",email:"Email",type:"Тип обращения",suggestion:"Предложение",complaint:"Жалоба",error:"Ошибка сайта",other:"Другое",message:"Сообщение",sendFeedback:"Отправить",namePh:"Введите имя",emailPh:"Ваш email",messagePh:"Напишите предложение или жалобу...",feedbackHint:"Обращение будет отправлено на электронную почту проекта.",subtitle:"Виртуальное путешествие",home:"Главная",places:"Места",map:"Карта",tour:"360° Тур",about:"О проекте",news:"Новости",contact:"Контакты",placeList:"Список мест",search:"Поиск...",showMap:"Показать на карте",f360:"360° Панорама",f360s:"Виртуальный тур высокого качества",fmap:"Интерактивная карта",fmaps:"Все места на карте",faudio:"Аудиогид",faudios:"Интересные сведения",fmobile:"Мобильная версия",fmobiles:"Для телефона и планшета",ffav:"Избранное",ffavs:"Сохраняйте понравившиеся места",fshare:"Поделиться",fshares:"Поделитесь с друзьями",discover:"ОТКРОЙТЕ ГУЛИСТАН",topPlaces:"Главные достопримечательности",searchPlace:"Поиск места...",allCats:"Все категории",history:"История",culture:"Культура",nature:"Природа",education:"Образование",interactive:"ИНТЕРАКТИВНАЯ КАРТА",gulMap:"Гулистан на карте",mapText:"Найдите основные туристические и культурные места Гулистана на карте.",showAll:"Показать все",aboutEy:"О ГУЛИСТАНЕ",aboutTitle:"«Земля цветов» — административный центр Сырдарьи",aboutText:"Гулистан — административный центр Сырдарьинской области. История города связана с освоением Мирзачуля, ирригацией и развитием железной дороги.",fact1:"городской статус",fact2:"важный период формирования",fact3:"солнечные дни по туристическому источнику",extraEy:"ДОПОЛНИТЕЛЬНО",extraTitle:"Что ещё открыть в Гулистане?",extra1t:"Национальная кухня",extra1p:"В Сырдарьинской области можно попробовать рыбные блюда, плов и другую узбекскую кухню.",extra2t:"Сувениры",extra2p:"На рынках и в сувенирных магазинах можно найти изделия народных ремесел.",extra3t:"Фотозоны",extra3p:"Парки, площади и зелёные зоны подходят для фотографий.",extra4t:"Агротуризм",extra4p:"В регионе есть возможности агротуризма на базе садов, виноградников и полей.",contactEy:"КОНТАКТЫ",contactTitle:"Свяжитесь с нами",contactText:"Пишите по вопросам проекта, 360° панорам и сотрудничества.",phone:"Телефон",footer:"© 2026 Gulistan 360° — Виртуальная туристическая платформа",details:"Подробнее",route:"Маршрут",favorite:"В избранное",remove:"Удалить из избранного",audio:"Аудиогид",share:"Поделиться"},
en:{tourPlacesEy:"360° PLACES",tourPlacesTitle:"Virtual tour places",feedback:"Suggestions & complaints",feedbackEy:"SUGGESTIONS & COMPLAINTS",feedbackTitle:"Your feedback matters",feedbackText:"Report a problem, suggest a new place, request a 360° panorama or send another idea.",name:"Your name",email:"Email",type:"Message type",suggestion:"Suggestion",complaint:"Complaint",error:"Website error",other:"Other",message:"Message",sendFeedback:"Send",namePh:"Enter your name",emailPh:"Your email",messagePh:"Write your suggestion or complaint...",feedbackHint:"Your message will be sent to the project email.",subtitle:"Virtual tour",home:"Home",places:"Places",map:"Map",tour:"360° Tour",about:"About project",news:"News",contact:"Contact",placeList:"Places list",search:"Search...",showMap:"View on map",f360:"360° Panorama",f360s:"High-quality virtual tour",fmap:"Interactive map",fmaps:"All places on the map",faudio:"Audio guide",faudios:"Interesting information",fmobile:"Mobile friendly",fmobiles:"For phones and tablets",ffav:"Favorites",ffavs:"Save places you like",fshare:"Share",fshares:"Share with friends",discover:"DISCOVER GULISTAN",topPlaces:"Main attractions",searchPlace:"Search place...",allCats:"All categories",history:"Historic",culture:"Culture",nature:"Nature",education:"Education",interactive:"INTERACTIVE MAP",gulMap:"Gulistan on the map",mapText:"Find Gulistan’s main tourist and cultural places on the map.",showAll:"Show all",aboutEy:"ABOUT GULISTAN",aboutTitle:"“Land of flowers” — administrative center of Syrdarya",aboutText:"Gulistan is the administrative center of Syrdarya region. Its history is closely connected with the development of Mirzacho‘l, irrigation canals and the railway.",fact1:"city status",fact2:"important formation period",fact3:"sunny days noted by tourism source",extraEy:"MORE",extraTitle:"What else can you discover in Gulistan?",extra1t:"National cuisine",extra1p:"Syrdarya offers fish dishes, pilaf and other Uzbek national foods.",extra2t:"Souvenirs",extra2p:"Local markets and souvenir shops offer traditional handicrafts.",extra3t:"Photo zones",extra3p:"City parks, squares and green spaces are good for travel photos.",extra4t:"Agrotourism",extra4p:"The region offers agrotourism opportunities around gardens, vineyards and fields.",contactEy:"CONTACT",contactTitle:"Get in touch",contactText:"Contact us about the project, 360° panoramas or cooperation.",phone:"Phone",footer:"© 2026 Gulistan 360° — Virtual tourism platform",details:"Details",route:"Directions",favorite:"Add to favorites",remove:"Remove from favorites",audio:"Audio guide",share:"Share"}
};

const EXTRA_T={
uz:{services:"Xizmatlar",feedback:"Taklif va shikoyatlar",servicesEy:"TURIST UCHUN QULAYLIK",servicesTitle:"Sayohatingizni osonlashtiring",svc1t:"Mehmonxonalar",svc1p:"Gulistonda tunash uchun joylarni topish va xaritada ko‘rish bo‘limi.",svc2t:"Ovqatlanish",svc2p:"Restoran, kafe va milliy taomlar bo‘yicha foydali ma’lumotlar.",svc3t:"Tadbirlar",svc3p:"Shahar tadbirlari, bayramlar va sayyohlar uchun qiziqarli uchrashuvlar.",svc4t:"Yo‘nalishlar",svc4p:"Bir kunlik va ko‘p kunlik sayohat yo‘nalishlarini rejalashtirish.",svc5t:"360° fotolar",svc5p:"Joylarni borishdan oldin virtual ko‘rib chiqish va panorama bilan tanishish.",svc6t:"3 til",svc6p:"Platformadan o‘zbek, rus va ingliz tillarida foydalanish.",feedbackEy:"TAKLIF VA SHIKOYATLAR",feedbackTitle:"Fikringiz biz uchun muhim",feedbackText:"Saytdagi xatolik, yangi obyekt, 360° panorama yoki boshqa taklifingizni yuboring. Murojaatingiz loyiha elektron pochtasiga yuboriladi.",name:"Ismingiz",email:"Email",type:"Murojaat turi",suggestion:"Taklif",complaint:"Shikoyat",error:"Saytdagi xatolik",other:"Boshqa",message:"Xabar",sendFeedback:"Yuborish",feedbackHint:"Yuborish tugmasi orqali murojaat elektron pochtaga jo‘natiladi. Birinchi foydalanishda FormSubmit xizmatining tasdiqlash xati kelishi mumkin.",namePh:"Ismingizni kiriting",emailPh:"Sizning emailingiz",messagePh:"Taklif yoki shikoyatingizni yozing...",footer:"© 2026 Guliston 360° — Virtual sayohat platformasi"},
ru:{services:"Сервисы",feedback:"Предложения и жалобы",servicesEy:"УДОБСТВО ДЛЯ ТУРИСТА",servicesTitle:"Сделайте путешествие проще",svc1t:"Отели",svc1p:"Раздел для поиска мест проживания и просмотра их на карте.",svc2t:"Питание",svc2p:"Полезная информация о ресторанах, кафе и национальной кухне.",svc3t:"События",svc3p:"Городские мероприятия, праздники и интересные встречи.",svc4t:"Маршруты",svc4p:"Планирование однодневных и многодневных поездок.",svc5t:"360° фото",svc5p:"Виртуальный просмотр мест до поездки.",svc6t:"3 языка",svc6p:"Платформа доступна на узбекском, русском и английском.",feedbackEy:"ПРЕДЛОЖЕНИЯ И ЖАЛОБЫ",feedbackTitle:"Ваше мнение важно",feedbackText:"Сообщите об ошибке, предложите новый объект или отправьте другую идею. Обращение будет направлено на электронную почту проекта.",name:"Ваше имя",email:"Email",type:"Тип обращения",suggestion:"Предложение",complaint:"Жалоба",error:"Ошибка сайта",other:"Другое",message:"Сообщение",sendFeedback:"Отправить",feedbackHint:"Обращение отправляется на электронную почту. При первом использовании FormSubmit может потребовать подтверждение.",namePh:"Введите имя",emailPh:"Ваш email",messagePh:"Напишите предложение или жалобу...",footer:"© 2026 Gulistan 360° — Виртуальная туристическая платформа"},
en:{services:"Services",feedback:"Suggestions & complaints",servicesEy:"TOURIST CONVENIENCE",servicesTitle:"Make your trip easier",svc1t:"Hotels",svc1p:"A section for finding accommodation and viewing it on the map.",svc2t:"Food & dining",svc2p:"Useful information about restaurants, cafés and national cuisine.",svc3t:"Events",svc3p:"City events, holidays and interesting activities for visitors.",svc4t:"Routes",svc4p:"Plan one-day and multi-day travel routes.",svc5t:"360° photos",svc5p:"Explore places virtually before visiting.",svc6t:"3 languages",svc6p:"Use the platform in Uzbek, Russian or English.",feedbackEy:"SUGGESTIONS & COMPLAINTS",feedbackTitle:"Your feedback matters",feedbackText:"Report a problem, suggest a new place, request a 360° panorama or send another idea. Your message will be sent to the project email.",name:"Your name",email:"Email",type:"Message type",suggestion:"Suggestion",complaint:"Complaint",error:"Website error",other:"Other",message:"Message",sendFeedback:"Send",feedbackHint:"The message is sent to the project email. On first use, FormSubmit may require an activation confirmation.",namePh:"Enter your name",emailPh:"Your email",messagePh:"Write your suggestion or complaint...",footer:"© 2026 Gulistan 360° — Virtual tourism platform"}};

let lang=localStorage.getItem("g360_lang")||"uz", favorites=JSON.parse(localStorage.getItem("g360_fav")||"[]"), current=0, viewer, auto=true;
const $=s=>document.querySelector(s);
function panoUrl(p){
  const name=(p.pano||"").split("/").pop();
  const candidates=[
    new URL(name,document.baseURI).href,
    new URL("./assets/panos/"+name,document.baseURI).href
  ];
  return candidates[0];
}
function panoAltUrl(p){
  const name=(p.pano||"").split("/").pop();
  return new URL("./assets/panos/"+name,document.baseURI).href;
}

function tr(k){return T[lang][k]||EXTRA_T[lang]?.[k]||T.uz[k]||EXTRA_T.uz[k]||k}
function applyLang(){
 document.documentElement.lang=lang; document.querySelectorAll("[data-i]").forEach(e=>e.textContent=tr(e.dataset.i));
 document.querySelectorAll("[data-ph]").forEach(e=>e.placeholder=tr(e.dataset.ph));
 $("#langName").textContent=lang.toUpperCase(); $("#flag").textContent={uz:"🇺🇿",ru:"🇷🇺",en:"🇬🇧"}[lang];
 renderScenes();renderCards();renderDetail();$("#favCount").textContent=favorites.length;lucide.createIcons();
}
function setLang(l){lang=l;localStorage.setItem("g360_lang",l);$(".langWrap").classList.remove("open");applyLang()}
$("#langBtn").onclick=()=>$(".langWrap").classList.toggle("open");
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
function updateThemeIcon(){
 const btn=$("#themeBtn"); if(!btn)return;
 btn.innerHTML=`<i data-lucide="${document.body.classList.contains("dark")?"sun":"moon"}"></i>`;
 btn.title=document.body.classList.contains("dark")?"Kunduzgi rejim":"Tungi rejim";
 lucide.createIcons();
}
$("#themeBtn").onclick=()=>{
 document.body.classList.toggle("dark");
 localStorage.setItem("g360_dark",document.body.classList.contains("dark"));
 updateThemeIcon();
};
if(localStorage.getItem("g360_dark")==="true")document.body.classList.add("dark");
const scenePlaces=places;
function renderScenes(){
 const q=($("#search")?.value||"").toLowerCase().trim();
 const list=places.filter(p=>(p.title[lang]+" "+p.desc[lang]).toLowerCase().includes(q));
 $("#thumbs").innerHTML=list.map(p=>{
   const i=places.indexOf(p), fav=favorites.includes(p.id);
   return `<article class="tourObjectCard ${i===current?"active":""}" onclick="loadScene(${i})">
     <div class="tourObjectImg"><img src="${panoUrl(p)}" alt="${p.title[lang]}" loading="lazy" onerror="this.src=panoUrl(places[${i}])"><span class="tour360Badge">360°</span></div>
     <div class="tourObjectBody"><span class="tag">${catName(p.cat)}</span><h3>${p.title[lang]}</h3><p>${p.desc[lang]}</p>
       <div class="tourObjectActions"><button class="main" onclick="event.stopPropagation();loadScene(${i})">360°</button><button onclick="event.stopPropagation();showDetails('${p.id}')">${tr("details")}</button><button class="heartMini ${fav?"isFav":""}" onclick="event.stopPropagation();toggleFav('${p.id}')" aria-label="${fav?tr("remove"):tr("favorite")}"><i data-lucide="heart"></i></button></div>
     </div>
   </article>`;
 }).join("");
 $("#sceneCount").textContent=`${current+1} / ${places.length}`;
 $("#sceneTitle").textContent=places[current]?.title?.[lang]||"";
 lucide.createIcons();
}
function renderThumbs(){renderScenes()}
function renderDetail(){
 const p=places[current];
 if(!p)return;
 $("#sceneTitle").textContent=p.title[lang];
 $("#sceneCount").textContent=`${current+1} / ${places.length}`;
}
function renderCards(){
 const q=($("#placeSearch")?.value||"").toLowerCase(), c=$("#catFilter")?.value||"all";
 const list=places.filter(p=>(p.title[lang]+" "+p.desc[lang]).toLowerCase().includes(q)&&(c==="all"||p.cat===c));
 $("#placeCards").innerHTML=list.map((p)=>`<article class="placeCard"><img src="${panoUrl(p)}" onerror="this.src='${p.img}';"><div class="placeBody"><span class="tag">${catName(p.cat)}</span><h3>${p.title[lang]}</h3><p>${p.desc[lang]}</p><div class="cardActions"><button class="main" onclick="loadScene(${places.indexOf(p)});scrollToId('home')">360°</button><button onclick="showDetails('${p.id}')">${tr("details")}</button><button onclick="toggleFav('${p.id}')">♥</button></div></div></article>`).join("");
}
$("#search").oninput=renderScenes;$("#placeSearch").oninput=renderCards;$("#catFilter").onchange=renderCards;
function loadScene(i){
 current=(i+places.length)%places.length;
 if(viewer){viewer.loadScene(places[current].id,0,0,100)}else{showPanoFallback()}
 renderScenes();renderDetail();lucide.createIcons();
 window.setTimeout(()=>document.querySelector(".tourHero")?.scrollIntoView({behavior:"smooth",block:"start"}),0);
}
function prevScene(){loadScene(current-1)}function nextScene(){loadScene(current+1)}
function zoomIn(){viewer?.setHfov(Math.max(40,viewer.getHfov()-10))}function zoomOut(){viewer?.setHfov(Math.min(120,viewer.getHfov()+10))}
function toggleFullscreen(){viewer?.toggleFullscreen?.()}
function toggleAuto(){if(!viewer)return;if(auto){viewer.stopAutoRotate();auto=false;$("#autoIcon").setAttribute("data-lucide","play")}else{viewer.startAutoRotate(-2);auto=true;$("#autoIcon").setAttribute("data-lucide","pause")}lucide.createIcons()}
function updateFavHeader(){
 const b=$("#favBtn");
 if(!b)return;
 const active=favorites.length>0;
 b.classList.toggle("favActive",active);
}
function toggleFav(id){
 favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];
 localStorage.setItem("g360_fav",JSON.stringify(favorites));
 updateFavHeader();
 renderDetail();renderScenes();renderCards();lucide.createIcons();
}
$("#favBtn").onclick=()=>{
 if(!favorites.length){alert(tr("ffavs"));return;}
 const items=favorites.map(id=>places.find(p=>p.id===id)).filter(Boolean);
 $("#modalContent").innerHTML=`<h2>${tr("ffav")}</h2><div class="sceneList">${items.map(p=>`<div class="sceneItem" onclick="loadScene(${places.indexOf(p)});closeModal();scrollToId('home')"><img class="sceneThumb" src="${p.img}"><span><b>${p.title[lang]}</b><small>${catName(p.cat)}</small></span></div>`).join("")}</div>`;
 $("#qrBox").hidden=true;$("#modal").classList.add("show");
};
function showDetails(id){
 const p=places.find(x=>x.id===id);
 $("#modalContent").innerHTML=`<img class="detailImage" src="${panoUrl(p)}" alt="${p.title[lang]}" onerror="this.src='${p.img}';"><span class="tag">${catName(p.cat)}</span><h2>${p.title[lang]}</h2><p style="line-height:1.8;color:#61746b">${p.full[lang]}</p><p style="line-height:1.8;color:#61746b"><b>${lang==="uz"?"Manzil":lang==="ru"?"Адрес":"Location"}:</b> ${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}</p><div class="detailBtns"><button class="primaryBtn" onclick="route('${p.id}')">${tr("route")}</button><button class="secondaryBtn" onclick="speak('${p.id}')">${tr("audio")}</button><button class="secondaryBtn" onclick="share('${p.id}')">${tr("share")}</button><button class="secondaryBtn" onclick="makeQR('${p.id}')"><i data-lucide="qr-code"></i> QR</button></div>`;
 $("#qrBox").hidden=true;$("#qrCode").innerHTML="";$("#qrText").textContent="";
 $("#modal").classList.add("show");lucide.createIcons();
}
function makeQR(id){
 const p=places.find(x=>x.id===id), url=location.href.split("#")[0]+"#"+p.id;
 $("#qrBox").hidden=false;$("#qrCode").innerHTML="";$("#qrText").textContent=url;
 if(window.QRCode){
   new QRCode($("#qrCode"),{text:url,width:150,height:150,colorDark:"#10241d",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});
 }else{
   $("#qrCode").textContent="QR kutubxonasi yuklanmadi";
 }
} 
function closeModal(){$("#modal").classList.remove("show");$("#qrBox").hidden=true}
function route(id){const p=places.find(x=>x.id===id);window.open(`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`,"_blank")}
function speak(id){const p=places.find(x=>x.id===id);if(!speechSynthesis)return;const u=new SpeechSynthesisUtterance(p.full[lang]);u.lang={uz:"uz-UZ",ru:"ru-RU",en:"en-US"}[lang];speechSynthesis.cancel();speechSynthesis.speak(u)}
function share(id){const p=places.find(x=>x.id===id),url=location.href.split("#")[0]+"#"+id;if(navigator.share)navigator.share({title:p.title[lang],text:p.desc[lang],url});else navigator.clipboard?.writeText(url).then(()=>alert("Link copied"))}
window.addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}
let map=null;
const markers=[];
function initMap(){
 if(!window.L || !document.getElementById("leafletMap")) return;
 map=L.map("leafletMap").setView([40.49,68.783],14);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap",maxZoom:19}).addTo(map);
 places.forEach((p,i)=>{markers[i]=L.marker([p.lat,p.lng]).addTo(map).bindPopup(`<b>${p.title.uz}</b><br><button onclick="loadScene(${i});scrollToId('home')">360°</button>`)});
}
function fitMap(){
 if(!map){initMap();if(!map)return}
 map.fitBounds(L.latLngBounds(places.map(p=>[p.lat,p.lng])).pad(.15));
}
function panoCandidates(p){
  const name=(p.pano||"").split("/").pop();
  const list=[];
  if(name) list.push(new URL(name,document.baseURI).href);
  if(p.pano){ const u=new URL(p.pano,document.baseURI).href; if(!list.includes(u)) list.push(u); }
  if(name) list.push(new URL("./assets/panos/"+name,document.baseURI).href);
  return [...new Set(list)];
}
let fallbackOffset=0,fallbackDragX=0,fallbackStart=0,fallbackDragging=false;
function showPanoFallback(){
 const box=$("#panorama"); if(!box)return;
 const p=places[current]; if(!p)return;
 box.innerHTML=`<div class="fallbackPanoWrap" tabindex="0"><div class="fallbackTrack" id="fallbackTrack"><img id="fallbackPanoA" class="panoFallback" alt="360° panorama"><img id="fallbackPanoB" class="panoFallback" alt="" aria-hidden="true"></div><div class="fallbackBadge">360°</div><button class="fallbackArrow fallbackPrev" onclick="fallbackShift(-1)" aria-label="Oldingi">‹</button><button class="fallbackArrow fallbackNext" onclick="fallbackShift(1)" aria-label="Keyingi">›</button></div>`;
 const a=$("#fallbackPanoA"), b=$("#fallbackPanoB"), track=$("#fallbackTrack");
 const candidates=panoCandidates(p); let n=0;
 const tryNext=()=>{
   if(n>=candidates.length){
     a.classList.add("panoMissing");b.classList.add("panoMissing");
     box.insertAdjacentHTML("beforeend",`<div class="panoError"><b>Panorama rasmi topilmadi</b><span>pano${current+1}.jpg GitHub repository ROOT qismida bo‘lishi kerak.</span></div>`);
     return;
   }
   a.src=candidates[n++];
 };
 a.onload=()=>{
   b.src=a.src;
   track.style.transform="translate3d(0,0,0)";
   $("#panoLoading")?.remove();
   bindFallbackDrag();
 };
 a.onerror=tryNext; tryNext();
}
function fallbackShift(dir){
 fallbackOffset += dir*35;
 const track=$("#fallbackTrack"); if(track) track.style.transform=`translate3d(${fallbackOffset}%,0,0)`;
}
function bindFallbackDrag(){
 const wrap=$("#panorama .fallbackPanoWrap"); if(!wrap||wrap.dataset.bound)return;
 wrap.dataset.bound="1";
 const down=e=>{fallbackDragging=true;fallbackStart=e.clientX||e.touches?.[0]?.clientX||0;fallbackDragX=fallbackOffset;wrap.setPointerCapture?.(e.pointerId)};
 const move=e=>{if(!fallbackDragging)return;const x=e.clientX||e.touches?.[0]?.clientX||0;fallbackOffset=fallbackDragX+(x-fallbackStart)/wrap.clientWidth*100;const t=$("#fallbackTrack");if(t)t.style.transform=`translate3d(${fallbackOffset}%,0,0)`};
 const up=()=>fallbackDragging=false;
 wrap.addEventListener("pointerdown",down);wrap.addEventListener("pointermove",move);wrap.addEventListener("pointerup",up);wrap.addEventListener("pointercancel",up);
}
function clearPanoLoading(){ $("#panoLoading")?.remove(); }
function initViewer(){
 const p=places[current];
 if(!p){return}
 if(!window.pannellum){
   showPanoFallback();
   return;
 }
 // Keep the original panorama element clean before Pannellum initializes.
 const box=$("#panorama"); if(box) box.innerHTML="";
 viewer=pannellum.viewer("panorama",{
   default:{firstScene:p.id,sceneFadeDuration:450,autoRotate:-2,autoLoad:true,showControls:false},
   scenes:Object.fromEntries(places.map(q=>[q.id,{type:"equirectangular",panorama:panoUrl(q),autoLoad:true}]))
 });
 viewer.on("load",()=>clearPanoLoading());
 // If the image fails to arrive, Pannellum can leave a dark canvas without a useful error.
 setTimeout(()=>{
   const box=$("#panorama");
   const canvas=box?.querySelector("canvas");
   if(!canvas || canvas.width<10 || canvas.height<10) showPanoFallback();
 },2500);
 viewer.on("scenechange",id=>{
   current=places.findIndex(q=>q.id===id);
   renderScenes();renderDetail();lucide.createIcons();
 });
 viewer.on("error",()=>showPanoFallback());
}

function init(){
 renderScenes();renderThumbs();renderCards();renderDetail();initViewer();fitMap();applyLang();updateFavHeader();updateThemeIcon();lucide.createIcons();
 const hash=location.hash.replace("#","");
 const idx=places.findIndex(p=>p.id===hash);
 if(idx>=0){loadScene(idx)}
}
window.addEventListener("load",()=>init());
