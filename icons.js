
(function(){
  const icons = {
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"/>',
    moon:'<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
    map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
    'map-pin':'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    'globe-2':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    'volume-2':'<path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M17 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
    smartphone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
    'share-2':'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    'chevron-left':'<path d="m15 18-6-6 6-6"/>',
    'chevron-right':'<path d="m9 18 6-6-6-6"/>',
    'chevron-down':'<path d="m6 9 6 6 6-6"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    minus:'<path d="M5 12h14"/>',
    maximize:'<path d="M8 3H3v5M21 8V3h-5M16 21h5v-5M3 16v5h5"/>',
    play:'<path d="m8 5 11 7-11 7V5Z"/>',
    pause:'<path d="M8 5v14M16 5v14"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/>',
    navigation:'<path d="m3 11 18-8-8 18-2-8-8-2Z"/>',
    'rotate-3d':'<path d="m12 2 8 4v8l-8 4-8-4V6l8-4Z"/><path d="M12 2v8l8-4M12 10 4 6"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L7.2 9.9a16 16 0 0 0 6 6l1.7-1.7a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.6 1.9Z"/>',
    send:'<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    camera:'<path d="M4 7h3l2-2h6l2 2h3v12H4V7Z"/><circle cx="12" cy="13" r="3"/>',
    fish:'<path d="M3 12c3-5 8-5 12-1 2-2 4-2 6-2-1 3-1 4 0 7-2 0-4 0-6-2-4 4-9 4-12-1Z"/><circle cx="7" cy="11" r=".7"/>',
    'shopping-bag':'<path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    sprout:'<path d="M12 21V9"/><path d="M12 13C8 13 5 10 5 6c4 0 7 2 7 7ZM12 11c0-4 3-7 7-7 0 4-3 7-7 7Z"/>',
    hotel:'<path d="M3 21V5a2 2 0 0 1 2-2h8v18M13 9h6a2 2 0 0 1 2 2v10M3 21h18M7 7h2M7 11h2M7 15h2M16 13h2M16 17h2"/>',
    utensils:'<path d="M7 3v7M4 3v7a3 3 0 0 0 6 0V3M7 13v8M17 3v18M14 3v5c0 2 3 2 3 0"/>',
    'calendar-days':'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>',
    languages:'<path d="M4 5h8M8 3v2M5 5c1 5 3 8 7 10M5 15c3-1 5-3 7-6M14 13h7l-3.5-8L14 13ZM15.5 10h4"/>',
    scan:'<path d="M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4M7 12h10"/>',
    'qr-code':'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3v4h7v-7M17 17h4"/>',
    'mail-check':'<path d="M4 4h16v16H4z"/><path d="m4 6 8 6 8-6M7 17l2 2 4-4"/>'
  };
  function createIcons(){
    document.querySelectorAll('[data-lucide]').forEach(el=>{
      const name=el.getAttribute('data-lucide');
      if(!name)return;
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('viewBox','0 0 24 24');
      svg.setAttribute('fill','none');
      svg.setAttribute('stroke','currentColor');
      svg.setAttribute('stroke-width','1.8');
      svg.setAttribute('stroke-linecap','round');
      svg.setAttribute('stroke-linejoin','round');
      svg.innerHTML=icons[name]||'<circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/>';
      for(const a of [...el.attributes]) if(a.name!=='data-lucide') svg.setAttribute(a.name,a.value);
      el.replaceWith(svg);
    });
  }
  window.lucide={createIcons};
})();
