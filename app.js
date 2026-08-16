const places=[
{id:"square",name:"Markaziy maydon",cat:"Madaniyat",icon:"🏛️",lat:40.4896,lng:68.7812,desc:"Guliston shahrining markaziy hududi va sayr uchun muhim maskan.",info:"Shahar markazidagi ochiq jamoat makoni. Virtual tur loyihasida asosiy yo‘nalishlardan biri sifatida ishlatilishi mumkin."},
{id:"park",name:"Shahar madaniyat va istirohat bog‘i",cat:"Istirohat",icon:"🌳",lat:40.4943,lng:68.7819,desc:"Sayr va oilaviy hordiq uchun yashil hudud.",info:"Dam olish, sayr qilish va shahar muhitini his qilish uchun mos hudud."},
{id:"museum",name:"O‘lkashunoslik muzeyi",cat:"Muzey",icon:"🏺",lat:40.4890,lng:68.7828,desc:"Sirdaryo hududi tarixi va madaniyatiga oid maskan.",info:"Muzey sahifasida tarixiy ma’lumotlar, fotosuratlar, audio gid va 360° ichki panorama joylashtiriladi."},
{id:"theatre",name:"Drama teatri",cat:"Madaniyat",icon:"🎭",lat:40.4908,lng:68.7852,desc:"Gulistondagi madaniy tadbirlar maskani.",info:"Sahna san’ati va madaniy hayotni virtual tur orqali targ‘ib qilish uchun mos obyekt."},
{id:"sport",name:"Alpomish sport majmuasi",cat:"Sport",icon:"🏟️",lat:40.4934,lng:68.7767,desc:"Sport tadbirlari uchun foydalaniladigan majmua.",info:"Sport inshootlari va tadbirlarini virtual ko‘rsatish uchun alohida panorama nuqtalari yaratish mumkin."},
{id:"library",name:"Bilimdonlar maskani",cat:"Ta'lim",icon:"📚",lat:40.4877,lng:68.7801,desc:"Ta’lim va madaniyat yo‘nalishidagi obyekt.",info:"Ta’lim va madaniyat obyektlarini yagona raqamli xaritada jamlash konsepsiyasining bir qismi."}
];
const demoPano="https://pannellum.org/images/alma.jpg";
let favorites=JSON.parse(localStorage.getItem("gul360_favs")||"[]");
let currentLang=localStorage.getItem("gul360_lang")||"UZ";
let viewer,auto=true;
const $=s=>document.querySelector(s);
function toast(t){$("#toast").textContent=t;$("#toast").classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>$("#toast").classList.remove("show"),2500)}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}
function renderPlaces(){
 const q=($("#search").value||"").toLowerCase(), cat=$("#cat").value;
 const list=places.filter(p=>(p.name+" "+p.desc).toLowerCase().includes(q)&&(cat==="all"||p.cat===cat));
 $("#placeGrid").innerHTML=list.map(p=>`<article class="card"><div class="cover">${p.icon}</div><div class="body"><span class="tag">${p.cat.toUpperCase()}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="cardBtns"><button class="mini" onclick="detail('${p.id}')">Batafsil</button><button class="mini dark" onclick="focusPlace('${p.id}')">📍 Xaritada</button><button class="mini" onclick="openScene('${p.id}')">360°</button><button class="mini fav ${favorites.includes(p.id)?"on":""}" onclick="toggleFav('${p.id}')">${favorites.includes(p.id)?"♥":"♡"}</button></div></div></article>`).join("")||`<p>Hech narsa topilmadi.</p>`;
 $("#favCount").textContent=favorites.length;
}
function toggleFav(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("gul360_favs",JSON.stringify(favorites));renderPlaces();toast(favorites.includes(id)?"Sevimlilarga qo‘shildi":"Sevimlilardan olib tashlandi")}
function detail(id){
 const p=places.find(x=>x.id===id); if(!p)return;
 $("#modalContent").innerHTML=`<div class="detail"><div class="detailIcon">${p.icon}</div><span class="eyebrow">${p.cat}</span><h2>${p.name}</h2><p>${p.info}</p><p><b>📍 Koordinata:</b> ${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}</p><div class="detailBtns"><button class="btn primary small" onclick="openScene('${p.id}');closeModal()">360° tur</button><button class="btn ghost small" onclick="focusPlace('${p.id}');closeModal()">Xaritada</button><button class="btn ghost small" onclick="routeTo('${p.id}')">Yo‘nalish</button><button class="btn ghost small" onclick="sharePlace('${p.id}')">Ulashish</button><button class="btn ghost small" onclick="qr('${p.id}')">QR-kod</button><button class="btn ghost small" onclick="speak('${p.id}')">🔊 Audio</button></div></div>`;
 $("#modal").classList.add("show");
}
function closeModal(){$("#modal").classList.remove("show")}
window.addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
const map=L.map("map",{zoomControl:true}).setView([40.490,68.783],14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(map);
const markers={};
places.forEach(p=>{markers[p.id]=L.marker([p.lat,p.lng]).addTo(map).bindPopup(`<b>${p.icon} ${p.name}</b><br><small>${p.desc}</small><br><button style="margin-top:8px" onclick="detail('${p.id}')">Batafsil</button>`);});
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p)return;scrollToId("mapSection");setTimeout(()=>{map.setView([p.lat,p.lng],16);markers[id].openPopup()},400)}
function fitAll(){map.fitBounds(L.latLngBounds(places.map(p=>[p.lat,p.lng])).pad(.15))}
function locateUser(){if(!navigator.geolocation)return toast("Brauzer joylashuvni qo‘llamaydi");navigator.geolocation.getCurrentPosition(pos=>{const a=[pos.coords.latitude,pos.coords.longitude];L.circleMarker(a,{radius:8,color:"#087552"}).addTo(map).bindPopup("Sizning joylashuvingiz").openPopup();map.setView(a,15)},()=>toast("Joylashuvga ruxsat berilmadi"))}
function routeTo(id){const p=places.find(x=>x.id===id);window.open(`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`,"_blank")}
function shareUrl(url,text){if(navigator.share)navigator.share({title:"Guliston 360",text,url}).catch(()=>{});else navigator.clipboard?.writeText(url).then(()=>toast("Havola nusxalandi"))}
function sharePlace(id){const p=places.find(x=>x.id===id);shareUrl(location.href.split("#")[0]+"#place-"+id,p.name)}
function shareTour(){shareUrl(location.href.split("#")[0]+"#tour","Guliston 360° virtual tur")}
function qr(id){const p=places.find(x=>x.id===id);const u=encodeURIComponent(location.href.split("#")[0]+"#place-"+id);$("#modalContent").innerHTML=`<div class="detail"><span class="eyebrow">QR-KOD</span><h2>${p.name}</h2><p>Telefon kamerasi bilan skanerlang.</p><img alt="QR" style="width:240px;display:block;margin:15px auto" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${u}"><div class="detailBtns"><button class="btn primary small" onclick="closeModal()">Yopish</button></div></div>`}
function speak(id){const p=places.find(x=>x.id===id);if(!("speechSynthesis" in window))return toast("Audio funksiyasi brauzerda mavjud emas");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(`${p.name}. ${p.info}`);u.lang=currentLang==="RU"?"ru-RU":currentLang==="EN"?"en-US":"uz-UZ";speechSynthesis.speak(u);toast("Audio gid ishga tushdi")}
function initViewer(){viewer=pannellum.viewer("panorama",{type:"equirectangular",panorama:demoPano,autoLoad:true,autoRotate:-2,showControls:true,compass:true,title:"Guliston 360° — Demo",author:"Guliston 360"});viewer.on("load",()=>{auto=true});}
function toggleAuto(){if(!viewer)return;if(auto){viewer.stopAutoRotate();auto=false;toast("Avtomatik aylanish o‘chirildi")}else{viewer.startAutoRotate(-2);auto=true;toast("Avtomatik aylanish yoqildi")}}
function fullscreenPano(){document.querySelector(".viewer")?.requestFullscreen?.()}
function toggleGyro(){toast("Telefoningizda panoramani sensor bilan boshqarish brauzer ruxsatiga bog‘liq.")}
function openScene(id){scrollToId("tour");setTimeout(()=>{const p=places.find(x=>x.id===id);$("#panoTitle").textContent=p.name+" — 360° demo";viewer?.loadScene?.("default")||viewer?.load?.();toast("Virtual tur: "+p.name)},500)}
function renderScenes(){$("#sceneList").innerHTML=places.map(p=>`<div class="scene" onclick="openScene('${p.id}')"><span class="sceneIcon">${p.icon}</span><span><b>${p.name}</b><small>${p.cat}</small></span></div>`).join("")}
function toggleTheme(){document.body.classList.toggle("dark");localStorage.setItem("gul360_theme",document.body.classList.contains("dark")?"dark":"light");$("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾"}
function toggleLang(){const arr=["UZ","RU","EN"];currentLang=arr[(arr.indexOf(currentLang)+1)%3];localStorage.setItem("gul360_lang",currentLang);$("#langBtn").textContent=currentLang;toast("Til: "+currentLang)}
$("#themeBtn").onclick=toggleTheme;$("#langBtn").onclick=toggleLang;$("#favNav").onclick=()=>{if(!favorites.length)return toast("Sevimlilar hozircha bo‘sh");$("#search").value="";$("#cat").value="all";$("#placeGrid").innerHTML=places.filter(p=>favorites.includes(p.id)).map(p=>`<article class="card"><div class="cover">${p.icon}</div><div class="body"><span class="tag">SEVIMLI</span><h3>${p.name}</h3><p>${p.desc}</p><button class="mini dark" onclick="detail('${p.id}')">Batafsil</button></div></article>`).join("");scrollToId("places")};
$("#menuBtn").onclick=()=>$("#mobileMenu").classList.add("open");function closeMenu(){$("#mobileMenu").classList.remove("open")}
if(localStorage.getItem("gul360_theme")==="dark")toggleTheme();
$("#langBtn").textContent=currentLang;renderPlaces();renderScenes();initViewer();fitAll();
window.detail=detail;window.closeModal=closeModal;window.focusPlace=focusPlace;window.toggleFav=toggleFav;window.openScene=openScene;window.routeTo=routeTo;window.sharePlace=sharePlace;window.shareTour=shareTour;window.qr=qr;window.speak=speak;window.locateUser=locateUser;window.fitAll=fitAll;window.toggleAuto=toggleAuto;window.toggleGyro=toggleGyro;window.fullscreenPano=fullscreenPano;window.scrollToId=scrollToId;window.closeMenu=closeMenu;
