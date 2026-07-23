/* ============================================================
   LENSES LOVER — shared enhancements (loads on every page)
   Adds: trust bar, floating WhatsApp, toast notifications,
         slide-in cart drawer, quick search overlay.
   Self-contained: injects its own CSS + DOM. RTL/EN aware.
   ============================================================ */
(function(){
  'use strict';
  var WA='201011423093';
  var isAr=function(){ return document.body.classList.contains('lang-ar'); };
  var FREE_SHIP=800, SHIP_COST=60;

  /* ---------- inject CSS ---------- */
  var css=`
  /* trust bar */
  .ll-trust{ background:var(--ink-3); border-bottom:1px solid var(--line); overflow:hidden; }
  .ll-trust .row{ display:flex; align-items:center; justify-content:center; gap:34px; padding:9px 18px; font-size:12.5px; color:var(--ivory-dim); flex-wrap:nowrap; white-space:nowrap; }
  .ll-trust .row span{ display:inline-flex; align-items:center; gap:7px; }
  .ll-trust .row .ic{ font-size:14px; }
  .ll-trust .row b{ color:var(--amber-light); font-weight:700; }
  @media (max-width:720px){
    .ll-trust .track{ display:flex; gap:34px; width:max-content; animation:llmarq 16s linear infinite; }
    .ll-trust .row{ justify-content:flex-start; }
    [dir="ltr"] .ll-trust .track{ animation-direction:reverse; }
  }
  @keyframes llmarq{ from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* ---------- الشريط العلوي (إعلانات وعروض) ---------- */
  .ll-banner{ position:relative; z-index:130; background:var(--amber); color:#fff;
    font-size:13.5px; font-weight:700; text-align:center; padding:11px 46px;
    text-decoration:none; display:block; line-height:1.5; }
  .ll-banner:hover{ filter:brightness(1.06); }
  .ll-banner .x{ position:absolute; inset-inline-end:12px; top:50%; transform:translateY(-50%);
    width:24px; height:24px; border-radius:50%; border:none; background:rgba(255,255,255,.22);
    color:#fff; font-size:15px; line-height:1; cursor:pointer; }
  @media (max-width:560px){ .ll-banner{ font-size:12.5px; padding:10px 40px; } }

  /* back to top — زرار عائم بيظهر مع النزول ويختفي فوق */
  .ll-top{ position:fixed; right:22px; bottom:22px; z-index:119;
    width:46px; height:46px; border-radius:50%; border:none;
    background:var(--amber); color:#fff; cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 8px 24px rgba(0,0,0,.35);
    opacity:0; visibility:hidden; transform:translateY(10px);
    transition:opacity .25s ease, transform .25s ease, visibility .25s; }
  .ll-top.show{ opacity:1; visibility:visible; transform:translateY(0); }
  .ll-top:hover{ filter:brightness(1.1); }
  @media (max-width:560px){ .ll-top{ bottom:18px; width:42px; height:42px; } }

  /* floating whatsapp — clean circular FAB that expands on hover */
  .ll-wa{ position:fixed; inset-inline-end:22px; bottom:22px; z-index:120; }
  .ll-wa{ display:none !important; }  /* مخفي بطلب هامدي — امسح السطر ده لو عايز ترجّعه */
  .ll-wa a{ display:flex; align-items:center; gap:0; height:60px; width:60px; border-radius:999px;
    background:#25D366; color:#fff; text-decoration:none; overflow:hidden; white-space:nowrap;
    box-shadow:0 10px 30px -6px rgba(37,211,102,.55), 0 4px 10px rgba(0,0,0,.25);
    transition:width .35s cubic-bezier(.4,0,.2,1), box-shadow .25s ease, transform .25s ease; }
  .ll-wa a:hover{ width:var(--ll-wa-w,196px); box-shadow:0 14px 38px -6px rgba(37,211,102,.7), 0 4px 12px rgba(0,0,0,.3); }
  .ll-wa .ico{ width:60px; height:60px; flex:0 0 60px; display:flex; align-items:center; justify-content:center; }
  .ll-wa .ico svg{ width:30px; height:30px; }
  .ll-wa .lbl{ font-size:14.5px; font-weight:800; opacity:0; transform:translateX(-6px);
    transition:opacity .25s ease .05s, transform .3s ease; padding-inline-end:20px; }
  [dir="rtl"] .ll-wa .lbl{ transform:translateX(6px); }
  .ll-wa a:hover .lbl{ opacity:1; transform:translateX(0); }
  /* gentle attention pulse on the ring */
  .ll-wa::after{ content:""; position:absolute; inset:0; width:60px; height:60px; border-radius:50%;
    inset-inline-end:0; bottom:0; box-shadow:0 0 0 0 rgba(37,211,102,.55); animation:llwapulse 2.6s ease-out infinite; pointer-events:none; z-index:-1; }
  .ll-wa:hover::after{ animation:none; }
  @keyframes llwapulse{ 0%{ box-shadow:0 0 0 0 rgba(37,211,102,.5); } 70%{ box-shadow:0 0 0 16px rgba(37,211,102,0); } 100%{ box-shadow:0 0 0 0 rgba(37,211,102,0); } }
  @media (max-width:560px){ .ll-wa a{ width:56px !important; height:56px; }
    .ll-wa .ico{ width:56px; height:56px; flex-basis:56px; } .ll-wa .lbl{ display:none; }
    .ll-wa::after{ width:56px; height:56px; } }
  @media (prefers-reduced-motion: reduce){ .ll-wa::after{ animation:none; } }

  /* toast */
  .ll-toasts{ position:fixed; inset-inline-start:0; inset-inline-end:0; bottom:24px; z-index:200; display:flex; flex-direction:column; align-items:center; gap:10px; pointer-events:none; padding:0 16px; }
  .ll-toast{ pointer-events:auto; background:var(--ink-2); border:1px solid var(--line); border-radius:14px; padding:13px 18px;
    display:flex; align-items:center; gap:12px; box-shadow:0 18px 44px -14px rgba(0,0,0,.7); max-width:400px; width:100%;
    transform:translateY(20px); opacity:0; transition:transform .3s ease, opacity .3s ease; }
  .ll-toast.show{ transform:translateY(0); opacity:1; }
  .ll-toast .tic{ width:34px; height:34px; border-radius:50%; background:rgba(62,107,85,.2); display:flex; align-items:center; justify-content:center; color:var(--jade-light); flex-shrink:0; }
  .ll-toast .tmsg{ flex:1; font-size:13.5px; color:var(--ivory); }
  .ll-toast .tact{ font-size:12.5px; font-weight:700; color:var(--amber-light); background:none; white-space:nowrap; }
  .ll-toast .tact:hover{ text-decoration:underline; }

  /* backdrop */
  .ll-backdrop{ position:fixed; inset:0; background:rgba(10,8,6,.6); backdrop-filter:blur(3px); z-index:150; opacity:0; visibility:hidden; transition:opacity .3s ease, visibility .3s ease; }
  .ll-backdrop.show{ opacity:1; visibility:visible; }

  /* cart drawer */
  .ll-drawer{ position:fixed; top:0; inset-inline-end:0; height:100%; width:400px; max-width:92vw; background:var(--ink); border-inline-start:1px solid var(--line);
    z-index:160; transform:translateX(100%); transition:transform .35s cubic-bezier(.4,0,.2,1); display:flex; flex-direction:column; }
  [dir="rtl"] .ll-drawer{ transform:translateX(-100%); }
  .ll-drawer.show{ transform:translateX(0); }
  .ll-dhead{ display:flex; align-items:center; justify-content:space-between; padding:20px 22px; border-bottom:1px solid var(--line); }
  .ll-dhead h3{ font-size:17px; display:flex; align-items:center; gap:9px; }
  .ll-dhead .close{ width:34px; height:34px; border-radius:50%; background:var(--ink-2); border:1px solid var(--line); color:var(--ivory); display:flex; align-items:center; justify-content:center; }
  .ll-dhead .close:hover{ border-color:var(--rose); color:var(--rose); }
  .ll-dbody{ flex:1; overflow-y:auto; padding:16px 22px; }
  .ll-ditem{ display:flex; gap:13px; align-items:center; padding:13px 0; border-bottom:1px solid var(--line); }
  .ll-ditem .th{ width:58px; height:58px; border-radius:12px; flex-shrink:0; display:flex; align-items:center; justify-content:center;
    background:radial-gradient(circle at 50% 42%, var(--c1) 0%, var(--c2) 72%, var(--ring) 100%); }
  .ll-ditem .th .pupil{ width:16px; height:16px; border-radius:50%; background:#0b0906; }
  .ll-ditem .info{ flex:1; min-width:0; }
  .ll-ditem .info b{ font-size:13.5px; display:block; }
  .ll-ditem .info .m{ font-size:11.5px; color:var(--ivory-dim); }
  .ll-ditem .info .price{ font-size:13px; color:var(--amber-light); font-weight:700; margin-top:3px; }
  .ll-qty{ display:flex; align-items:center; border:1px solid var(--line); border-radius:999px; overflow:hidden; }
  .ll-qty button{ width:26px; height:26px; background:var(--ink-2); color:var(--ivory); font-size:14px; }
  .ll-qty button:hover{ background:var(--amber); color:var(--ink); }
  .ll-qty span{ min-width:28px; text-align:center; font-size:13px; font-weight:700; }
  .ll-drm{ background:none; color:var(--ivory-dim); font-size:15px; margin-inline-start:4px; }
  .ll-drm:hover{ color:var(--rose); }
  .ll-dempty{ text-align:center; padding:50px 20px; color:var(--ivory-dim); }
  .ll-dempty .ic{ font-size:40px; margin-bottom:14px; }
  .ll-dfoot{ border-top:1px solid var(--line); padding:18px 22px; }
  .ll-dship{ font-size:12px; color:var(--ivory-dim); margin-bottom:8px; text-align:center; }
  .ll-dbar{ height:5px; background:var(--ink-3); border-radius:999px; overflow:hidden; margin-bottom:14px; }
  .ll-dbar i{ display:block; height:100%; background:var(--jade); border-radius:999px; transition:width .4s ease; }
  .ll-dsum{ display:flex; justify-content:space-between; font-size:16px; font-weight:800; margin-bottom:14px; }
  .ll-dgo{ display:block; width:100%; text-align:center; padding:14px; border-radius:999px; background:var(--amber); color:var(--ink); font-size:15px; font-weight:800; box-shadow:0 10px 30px -10px rgba(200,138,62,.6); text-decoration:none; transition:transform .2s ease; }
  .ll-dgo:hover{ transform:translateY(-2px); }
  .ll-dview{ display:block; text-align:center; margin-top:10px; font-size:13px; color:var(--ivory-dim); }
  .ll-dview:hover{ color:var(--amber-light); }

  /* About + Blog hidden from the top nav only — still live in the footer */
  nav.links a[href*="about"],
  nav.links a[href*="blog"]{ display:none !important; }

  /* trust bar hidden temporarily — delete this rule to bring it back */
  .ll-trust{ display:none !important; }

  /* wishlist icon retired from header (page still exists at lenses-lover-wishlist.html) */
  .header-actions a[href*="wishlist"]{ display:none !important; }

  /* ===== light theme ===== */
  html[data-theme="light"]{
    --ink:#faf7f2; --ink-2:#ffffff; --ink-3:#f0e9dd;
    --ivory:#221c14; --ivory-dim:#6e6558;
    --amber:#a8702e; --amber-light:#c88a3e;
    --line: rgba(21,18,14,0.12);
    color-scheme: light;
  }
  html[data-theme="light"] body{ background:var(--ink); color:var(--ivory); }
  html[data-theme="light"] .ll-backdrop{ background:rgba(21,18,14,.45); }
  html[data-theme="light"] .ll-search{ background:rgba(250,247,242,.85); }
  html[data-theme="light"] img{ filter:none; }
  /* pages hardcode the dark header/footer/icon colours — override them in light mode */
  html[data-theme="light"] header{ background:rgba(250,247,242,0.88) !important; }
  html[data-theme="light"] footer{ background:var(--ink-2) !important; }
  html[data-theme="light"] .icon-btn,
  html[data-theme="light"] .lang-toggle{ background:rgba(21,18,14,0.05) !important; }
  html[data-theme="light"] .hero,
  html[data-theme="light"] .marquee{ background:var(--ink) !important; }

  /* theme switch */
  .ll-theme{ margin-top:18px; padding-top:16px; border-top:1px solid var(--line); }
  .ll-theme-lbl{ font-size:11px; color:var(--ivory-dim); margin-bottom:9px; letter-spacing:.5px; }
  .ll-seg{ display:inline-flex; background:var(--ink-3); border-radius:10px; padding:3px; gap:2px; width:100%; }
  .ll-seg button{ flex:1; border:0; background:transparent; border-radius:8px; padding:8px 6px; font:inherit; font-size:12.5px;
    color:var(--ivory-dim); cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; transition:all .2s ease; }
  .ll-seg button.on{ background:var(--ink-2); color:var(--ivory); box-shadow:0 1px 3px rgba(0,0,0,.10); }

  /* brands drawer */
  .ll-brands{ position:fixed; top:0; inset-inline-end:0; height:100%; width:300px; max-width:82vw; background:var(--ink); border-inline-start:1px solid var(--line);
    z-index:160; transform:translateX(100%); transition:transform .35s cubic-bezier(.4,0,.2,1); display:flex; flex-direction:column; }
  [dir="rtl"] .ll-brands{ transform:translateX(-100%); }
  .ll-brands.show{ transform:translateX(0); }
  .ll-blist{ flex:1; overflow-y:auto; padding:8px 22px 22px; }
  .ll-brow{ display:block; padding:15px 0; border-bottom:1px solid var(--line); color:var(--ivory); font-size:15px; text-decoration:none; transition:color .2s ease; }
  .ll-brow:hover{ color:var(--amber); }
  .ll-brow.soon{ color:var(--ivory-dim); opacity:.45; pointer-events:none; display:flex; justify-content:space-between; align-items:center; gap:8px; }
  .ll-brow.soon i{ font-size:11px; font-style:normal; border:1px solid var(--line); border-radius:6px; padding:2px 7px; white-space:nowrap; }
  .ll-ball{ display:block; margin-top:18px; padding:13px 0; color:var(--amber); font-size:14px; text-decoration:none; text-align:center; border:1px solid var(--line); border-radius:12px; }
  .ll-ball:hover{ border-color:var(--amber); }
  .ll-menu-btn{ width:38px; height:38px; border-radius:50%; background:var(--ink-2); border:1px solid var(--line);
    display:flex !important; align-items:center; justify-content:center; color:var(--ivory); flex-shrink:0;
    transition:border-color .25s ease; cursor:pointer; padding:0; }
  .ll-menu-btn:hover{ border-color:var(--amber); }
  /* Phones: the header row is wider than the screen, so body{overflow-x:hidden}
     was clipping the last icons (cart + menu). Shrink everything to fit. */
  @media (max-width:860px){
    .nav-row{ gap:8px !important; padding-block:12px !important; }
    .wrap{ padding-inline:14px !important; }
    .header-actions{ gap:6px !important; flex-shrink:0; }
    .logo{ font-size:17px !important; }
    .lang-toggle{ padding:3px !important; gap:2px !important; }
    .lang-toggle button{ padding:5px 8px !important; font-size:11px !important; }
    .icon-btn{ width:34px !important; height:34px !important; }
    .ll-menu-btn{ width:34px; height:34px; }
    .ll-search-btn{ width:34px !important; height:34px !important; }
  }
  @media (max-width:400px){
    .logo{ font-size:15px !important; }
    .header-actions{ gap:4px !important; }
    .icon-btn, .ll-menu-btn, .ll-search-btn{ width:31px !important; height:31px !important; }
    .lang-toggle button{ padding:4px 6px !important; font-size:10px !important; }
  }

  /* search overlay */
  .ll-search-btn{ width:38px; height:38px; border-radius:50%; background:var(--ink-2); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; color:var(--ivory); transition:border-color .25s ease; }
  .ll-search-btn:hover{ border-color:var(--amber); }
  .ll-search{ position:fixed; inset:0; z-index:170; background:rgba(10,8,6,.75); backdrop-filter:blur(6px); opacity:0; visibility:hidden; transition:opacity .25s ease, visibility .25s ease; padding-top:12vh; }
  .ll-search.show{ opacity:1; visibility:visible; }
  .ll-search-box{ max-width:600px; margin:0 auto; padding:0 20px; }
  .ll-search-in{ display:flex; align-items:center; gap:12px; background:var(--ink-2); border:1px solid var(--line); border-radius:16px; padding:16px 20px; }
  .ll-search-in input{ flex:1; background:none; border:none; color:var(--ivory); font-family:inherit; font-size:16px; outline:none; }
  .ll-search-in .sic{ color:var(--ivory-dim); }
  .ll-search-in .esc{ font-size:11px; color:var(--ivory-dim); border:1px solid var(--line); border-radius:6px; padding:3px 7px; }
  .ll-sresults{ margin-top:14px; background:var(--ink-2); border:1px solid var(--line); border-radius:16px; overflow:hidden; max-height:52vh; overflow-y:auto; }
  .ll-sr{ display:flex; align-items:center; gap:13px; padding:13px 18px; border-bottom:1px solid var(--line); cursor:pointer; text-decoration:none; transition:background .15s ease; }
  .ll-sr:last-child{ border-bottom:none; }
  .ll-sr:hover{ background:var(--ink-3); }
  .ll-sr .th{ width:42px; height:42px; border-radius:10px; flex-shrink:0; display:flex; align-items:center; justify-content:center;
    background:radial-gradient(circle at 50% 42%, var(--c1) 0%, var(--c2) 72%, var(--ring) 100%); }
  .ll-sr .th .pupil{ width:12px; height:12px; border-radius:50%; background:#0b0906; }
  .ll-sr .info b{ font-size:14px; display:block; }
  .ll-sr .info span{ font-size:12px; color:var(--ivory-dim); }
  .ll-sr .price{ margin-inline-start:auto; font-size:13.5px; font-weight:700; color:var(--amber-light); }
  .ll-sempty{ padding:28px; text-align:center; color:var(--ivory-dim); font-size:14px; }
  .ll-shint{ margin-top:12px; text-align:center; font-size:12px; color:var(--ivory-dim); }
  `;
  var st=document.createElement('style'); st.textContent=css + `
  /* ---------- lock horizontal scroll globally (mobile stability) ---------- */
  html, body{ overflow-x:hidden !important; max-width:100% !important; }
  img, svg, video{ max-width:100%; }

  /* hide template credit in footer bottom bar (all pages) */
  .bottom-bar span:nth-child(2){ display:none !important; }

  /* footer breathing room on mobile */
  @media (max-width:640px){
    footer, .foot-grid, .bottom-bar{ padding-inline:16px; box-sizing:border-box; }
    .foot-grid{ grid-template-columns:1fr !important; gap:26px !important; }
    .foot-grid *, .bottom-bar *{ overflow-wrap:anywhere; }
    /* homepage: bestsellers as single large luxury card */
    .grid-solo-mobile{ grid-template-columns:1fr !important; gap:18px !important; }
    .grid-solo-mobile .product-media{ aspect-ratio:3/3.2 !important; }
    /* center a lone last color card */
    .color-grid > :last-child:nth-child(odd){ grid-column:1 / -1; justify-self:center; width:calc(50% - 6px); }
  }

  /* ---------- product cards: photo focus + pro mobile layout (global) ---------- */
  .product-media{ padding:0 !important; aspect-ratio:3/3.9 !important; overflow:hidden; position:relative; }
  .product-media::before, .product-media::after{ display:none !important; } /* kill old decorative rays over photos */
  .product-media img{
    width:100% !important; height:100% !important; display:block;
    object-fit:cover !important; object-position:center 12% !important;
  }
  .tag-badge{ z-index:2; }
  .wish-btn{ z-index:2; }
  @media (max-width:640px){
    .product-grid{ grid-template-columns:repeat(2,minmax(0,1fr)) !important; gap:12px !important; width:100% !important; }
    .product-grid > *{ min-width:0 !important; max-width:100% !important; }
    .product-media{ aspect-ratio:3/3.6 !important; }
    .product-info{ padding:12px 12px 14px !important; }
    .product-info h3{ font-size:15.5px !important; margin:2px 0 !important; }
    .product-info .en-name{ font-size:10.5px !important; }
    .product-info .cat{ font-size:10px !important; }
    .product-info .stars{ font-size:10.5px !important; }
    .price-now{ font-size:15.5px !important; }
    .add-btn{ padding:9px 10px !important; font-size:12.5px !important; border-radius:12px !important; }
    .tag-badge{ font-size:9.5px !important; padding:4px 8px !important; }
    .wish-btn{ width:28px !important; height:28px !important; }
  }

  /* footer social icons — squircle dark (global, matches reference) */
  .social-row{ display:flex; gap:12px; }
  .social-row .icon-btn{
    width:46px; height:46px; border-radius:14px;
    background:var(--ink-3); border:1px solid var(--line);
    color:var(--ivory-dim);
    display:flex; align-items:center; justify-content:center;
    transition:background .25s ease, color .25s ease, border-color .25s ease, transform .25s ease;
  }
  .social-row .icon-btn svg{ width:22px; height:22px; }
  .social-row .icon-btn:hover{
    background:var(--amber); border-color:var(--amber);
    color:var(--ink); transform:translateY(-3px);
  }`; document.head.appendChild(st);

  /* ---------- canonical social links (rewrites every footer .social-row) ---------- */
  var SOCIALS=[
    {label:'facebook', href:'https://www.facebook.com/share/195DYoJEA3/?mibextid=wwXIfr',
     svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/></svg>'},
    {label:'instagram', href:'https://www.instagram.com/lenses_lover1?igsh=Z3Y0cmoyZG1vejF0&utm_source=qr',
     svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>'},
    {label:'tiktok', href:'https://www.tiktok.com/@lenses_lover111?_r=1&_t=ZS-983grLT1W8z',
     svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 3c.4 2 2 3.6 4 3.9V10c-1.5 0-2.9-.5-4-1.3V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a2.8 2.8 0 1 0 2 2.7V3h3z"/></svg>'},
    {label:'whatsapp', href:'https://wa.me/'+WA,
     svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.7 1.2 1.5 2 2.8 2.7.2.1.4.1.5-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.2.1.9-.1 1.6z"/></svg>'}
  ];
  document.querySelectorAll('.social-row').forEach(function(row){
    row.innerHTML=SOCIALS.map(function(s){
      return '<a href="'+s.href+'" target="_blank" rel="noopener" class="icon-btn" aria-label="'+s.label+'">'+s.svg+'</a>';
    }).join('');
  });

  /* ---------- product catalog (shared, mirrors shop) ---------- */
  var CATALOG=(window.LL_CATALOG?window.LL_CATALOG.products:[]).map(function(p){
    return {id:p.id, ar:p.ar, en:p.en, img:p.img, price:p.price,
      ar_m:'شهري · إيكوال بيري', en_m:'Monthly · Eqqual Berre'};
  });

  /* ---------- cart state (sessionStorage) ---------- */
  function loadCart(){
    try{
      var v=localStorage.getItem('ll_cart');
      if(v===null){ // migrate from old sessionStorage cart (one-time)
        v=sessionStorage.getItem('ll_cart');
        if(v!==null){ localStorage.setItem('ll_cart', v); sessionStorage.removeItem('ll_cart'); }
      }
      return JSON.parse(v||'[]');
    }catch(e){ return []; }
  }
  function saveCart(c){ try{ localStorage.setItem('ll_cart', JSON.stringify(c)); }catch(e){} }
  var cart=loadCart();

  function cur(){ return isAr()?'ج.م':'EGP'; }
  function money(n){ return n.toLocaleString('en-US')+' '+cur(); }
  function cartQty(){ return cart.reduce(function(s,i){return s+i.qty;},0); }
  function cartSub(){ return cart.reduce(function(s,i){return s+i.price*i.qty;},0); }

  function syncBadges(){
    var q=cartQty();
    document.querySelectorAll('#cart-count').forEach(function(b){ b.textContent=q; });
  }

  /* ---------- DOM: trust bar (top of body, before header) ---------- */
  var header=document.querySelector('header');
  var trust=document.createElement('div');
  trust.className='ll-trust';
  trust.innerHTML='<div class="track"><div class="row">'+
      '<span><span class="ic">🚚</span><span class="ar">شحن <b>مجاني</b> فوق ٨٠٠ ج.م</span><span class="en">Free shipping over 800 EGP</span></span>'+
      '<span><span class="ic">💵</span><span class="ar">الدفع عند الاستلام</span><span class="en">Cash on delivery</span></span>'+
      '<span><span class="ic">✓</span><span class="ar">منتجات <b>أصلية 100%</b></span><span class="en">100% original products</span></span>'+
      '<span><span class="ic">🔒</span><span class="ar">دفع آمن ١٠٠٪</span><span class="en">100% secure checkout</span></span>'+
    '</div></div>';
  if(header && header.parentNode){ header.parentNode.insertBefore(trust, header); }

  /* ---------- DOM: search button into header-actions ---------- */
  var actions=document.querySelector('.header-actions');
  if(actions){
    var sb=document.createElement('button');
    sb.className='ll-search-btn'; sb.setAttribute('aria-label','search');
    sb.innerHTML='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>';
    actions.insertBefore(sb, actions.firstChild);
    sb.onclick=openSearch;

    var mb=document.createElement('button');
    mb.className='ll-menu-btn'; mb.setAttribute('aria-label','brands');
    mb.innerHTML='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    actions.appendChild(mb);
    mb.onclick=openBrands;
  }

  /* ---------- DOM: floating whatsapp ---------- */
  var wa=document.createElement('div');
  wa.className='ll-wa';
  var waMsgAr='مرحبًا 🌸 عندي استفسار عن منتجات LENSES LOVER';
  var waMsgEn='Hi 🌸 I have a question about LENSES LOVER products';
  wa.innerHTML='<a target="_blank" rel="noopener" aria-label="WhatsApp" href="https://wa.me/'+WA+'">'+
    '<span class="ico"><svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.7 1.2 1.5 2 2.8 2.7.2.1.4.1.5-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.2.1.9-.1 1.6z"/></svg></span>'+
    '<span class="lbl"><span class="ar">كلّمينا واتساب</span><span class="en">Chat with us</span></span></a>';
  document.body.appendChild(wa);
  // measure label so the pill expands to the exact needed width (RTL/EN safe)
  function sizeWa(){
    var a=wa.querySelector('a'), lbl=wa.querySelector('.lbl');
    // temporarily measure
    var w=60 + lbl.scrollWidth + 20;
    wa.style.setProperty('--ll-wa-w', w+'px');
  }
  function refreshWa(){
    var a=wa.querySelector('a');
    a.href='https://wa.me/'+WA+'?text='+encodeURIComponent(isAr()?waMsgAr:waMsgEn);
    sizeWa();
  }
  refreshWa();
  window.addEventListener('resize', sizeWa);

  /* ---------- DOM: toasts container ---------- */
  var toasts=document.createElement('div'); toasts.className='ll-toasts'; document.body.appendChild(toasts);
  function toast(msgAr,msgEn,withCartBtn){
    var t=document.createElement('div'); t.className='ll-toast';
    var act=withCartBtn?'<button class="tact"><span class="ar">شوفي السلة</span><span class="en">View cart</span></button>':'';
    t.innerHTML='<div class="tic">✓</div><div class="tmsg"><span class="ar">'+msgAr+'</span><span class="en">'+msgEn+'</span></div>'+act;
    toasts.appendChild(t);
    if(withCartBtn){ t.querySelector('.tact').onclick=function(){ openDrawer(); }; }
    requestAnimationFrame(function(){ t.classList.add('show'); });
    setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); }, 320); }, 3200);
  }

  /* ---------- DOM: backdrop ---------- */
  var backdrop=document.createElement('div'); backdrop.className='ll-backdrop'; document.body.appendChild(backdrop);
  backdrop.onclick=function(){ closeDrawer(); if(typeof closeBrands==='function') closeBrands(); };

  /* ---------- DOM: cart drawer ---------- */
  var drawer=document.createElement('aside'); drawer.className='ll-drawer';
  drawer.innerHTML=
    '<div class="ll-dhead"><h3>🛍️ <span class="ar">سلة التسوق</span><span class="en">Your Cart</span></h3>'+
      '<button class="close" aria-label="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>'+
    '<div class="ll-dbody" id="ll-dbody"></div>'+
    '<div class="ll-dfoot" id="ll-dfoot"></div>';
  document.body.appendChild(drawer);
  drawer.querySelector('.close').onclick=function(){ closeDrawer(); };

  function openDrawer(){ renderDrawer(); drawer.classList.add('show'); backdrop.classList.add('show'); document.body.style.overflow='hidden'; }
  function closeDrawer(){ drawer.classList.remove('show'); backdrop.classList.remove('show'); document.body.style.overflow=''; }

  function renderDrawer(){
    var body=drawer.querySelector('#ll-dbody');
    var foot=drawer.querySelector('#ll-dfoot');
    if(cart.length===0){
      body.innerHTML='<div class="ll-dempty"><div class="ic">🛒</div><p><span class="ar">سلتك فاضية.</span><span class="en">Your cart is empty.</span></p></div>';
      foot.innerHTML='<a class="ll-dgo" href="lenses-lover-shop.html"><span class="ar">ابدئي التسوق</span><span class="en">Start shopping</span></a>';
      return;
    }
    body.innerHTML='';
    cart.forEach(function(it,idx){
      var row=document.createElement('div'); row.className='ll-ditem';
      row.innerHTML=
        (it.img
          ? '<div class="th" style="background:none;overflow:hidden;"><img src="'+it.img+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px;"></div>'
          : '<div class="th" style="--c1:'+it.c1+';--c2:'+it.c2+';--ring:'+it.ring+'"><div class="pupil"></div></div>')+
        '<div class="info"><b>'+(isAr()?it.ar:it.en)+'</b>'+
          '<div class="m"><span class="ar">'+it.ar_m+'</span><span class="en">'+it.en_m+'</span></div>'+
          '<div class="price">'+money(it.price*it.qty)+'</div></div>'+
        '<div class="ll-qty"><button data-a="dec" data-i="'+idx+'">−</button><span>'+it.qty+'</span><button data-a="inc" data-i="'+idx+'">+</button></div>'+
        '<button class="ll-drm" data-a="rm" data-i="'+idx+'" aria-label="remove">×</button>';
      body.appendChild(row);
    });
    body.querySelectorAll('button[data-a]').forEach(function(b){
      b.onclick=function(){
        var i=+b.dataset.i, a=b.dataset.a;
        if(a==='inc') cart[i].qty++;
        else if(a==='dec') cart[i].qty=Math.max(1,cart[i].qty-1);
        else if(a==='rm') cart.splice(i,1);
        saveCart(cart); syncBadges(); renderDrawer();
      };
    });
    var sub=cartSub();
    var remain=Math.max(0,FREE_SHIP-sub);
    var pct=Math.min(100,(sub/FREE_SHIP)*100);
    var shipMsg=remain>0
      ? '<span class="ar">اضيفي بـ '+remain.toLocaleString('en-US')+' ج.م لشحن مجاني 🎉</span><span class="en">Add '+remain.toLocaleString('en-US')+' EGP for free shipping 🎉</span>'
      : '<span class="ar">✓ حصلتِ على شحن مجاني!</span><span class="en">✓ Free shipping unlocked!</span>';
    var offDisc=(window.LL_CATALOG&&window.LL_CATALOG.offerDiscount)?window.LL_CATALOG.offerDiscount(cart):0;
    var offRow=offDisc>0
      ? '<div class="ll-dsum" style="font-size:13px;color:var(--jade);font-weight:700;"><span><span class="ar">عرض قطعتين بـ 350</span><span class="en">2-for-350 offer</span></span><span>−'+money(offDisc)+'</span></div>'
      : '';
    foot.innerHTML=
      '<div class="ll-dship">'+shipMsg+'</div>'+
      '<div class="ll-dbar"><i style="width:'+pct+'%"></i></div>'+
      offRow+
      '<div class="ll-dsum"><span><span class="ar">الإجمالي</span><span class="en">Subtotal</span></span><span>'+money(sub-offDisc)+'</span></div>'+
      '<a class="ll-dgo" href="lenses-lover-checkout.html"><span class="ar">إتمام الشراء</span><span class="en">Checkout</span></a>'+
      '<a class="ll-dview" href="lenses-lover-cart.html"><span class="ar">عرض السلة الكاملة</span><span class="en">View full cart</span></a>';
  }

  /* ---------- public add-to-cart ---------- */
  window.LL=window.LL||{};
  window.LL.addToCart=function(prod){
    // prod: {ar,en,c1,c2,ring,ar_m,en_m,price}
    var found=cart.find(function(x){ return x.en===prod.en; });
    if(found) found.qty++;
    else cart.push(Object.assign({qty:1}, prod));
    saveCart(cart); syncBadges();
    toast('تمت إضافة «'+prod.ar+'» للسلة', 'Added "'+prod.en+'" to cart', true);
  };
  window.LL.openCart=openDrawer;
  window.LL.toast=toast;

  /* make existing header cart icon open the drawer instead of navigating (except on cart page) */
  var onCartPage=/lenses-lover-cart\.html/.test(location.pathname);
  var cartLink=document.querySelector('.header-actions a[aria-label="cart"]');
  if(cartLink && !onCartPage){
    cartLink.addEventListener('click', function(e){ e.preventDefault(); openDrawer(); });
  }

  /* ---------- auto-wire product "add to cart" buttons on catalog pages ---------- */
  /* Shop & wishlist build cards dynamically with their own handlers; to avoid double-adds
     we only wire buttons that opt-in via data-ll-add, OR expose LL.addToCart for pages to call. */

  /* ---------- theme ---------- */
  var THEME_KEY='ll_theme';
  function sysTheme(){
    try{ return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
    catch(e){ return 'dark'; }
  }
  function savedTheme(){
    try{ return localStorage.getItem(THEME_KEY); }catch(e){ return null; }
  }
  function currentTheme(){
    /* DEFAULT = light. Use 'dark' for dark, or sysTheme() to follow the device. */
    return savedTheme() || 'light';
  }
  function applyTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    try{ localStorage.setItem(THEME_KEY,t); }catch(e){}
    var seg=document.querySelector('.ll-seg');
    if(seg){ seg.querySelectorAll('button').forEach(function(b){ b.classList.toggle('on', b.dataset.t===t); }); }
  }
  applyTheme(currentTheme());
  window.LL_setTheme=applyTheme;

  /* ---------- brands drawer ---------- */
  var SOON = [
    { key:'urban-layer', ar:'أربان لاير',  en:'Urban Layer' },
    { key:'fresh-lady',  ar:'فريش ليدي',   en:'Fresh Lady'  },
    { key:'dahab',       ar:'دهب',         en:'Dahab'       },
    { key:'wonderlook',  ar:'وندرلوك',     en:'Wonderlook'  },
    { key:'luminous',    ar:'لومينوس',     en:'Luminous'    },
    { key:'naturel',     ar:'ناتوريل',     en:'Naturel'     },
    { key:'mylense',     ar:'ماي لينس',    en:'MyLense'     }
  ];

  var brands=document.createElement('aside'); brands.className='ll-brands';
  brands.innerHTML=
    '<div class="ll-dhead">'+
      '<h3><span class="ar">الماركات</span><span class="en">Brands</span></h3>'+
      '<button class="close" aria-label="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>'+
    '</div>'+
    '<div class="ll-blist" id="ll-blist"></div>';
  document.body.appendChild(brands);
  brands.querySelector('.close').onclick=function(){ closeBrands(); };

  function openBrands(){ renderBrands(); brands.classList.add('show'); backdrop.classList.add('show'); document.body.style.overflow='hidden'; }
  function closeBrands(){ brands.classList.remove('show'); backdrop.classList.remove('show'); document.body.style.overflow=''; }

  function renderBrands(){
    var box=brands.querySelector('#ll-blist');
    var ar=isAr(), html='';
    var live=(window.LL_CATALOG && window.LL_CATALOG.brands) ? window.LL_CATALOG.brands : [];
    var liveKeys={};
    live.forEach(function(b){
      liveKeys[b.key]=1;
      html+='<a class="ll-brow" href="lenses-lover-shop.html?brand='+b.key+'">'+(ar?b.ar:b.en)+'</a>';
    });
    SOON.forEach(function(b){
      if(liveKeys[b.key]) return;
      html+='<span class="ll-brow soon">'+(ar?b.ar:b.en)+
        '<i>'+(ar?'قريبًا':'Soon')+'</i></span>';
    });
    html+='<a class="ll-ball" href="lenses-lover-shop.html">'+(ar?'كل المنتجات':'All products')+'</a>';

    var th=currentTheme();
    html+='<div class="ll-theme">'+
      '<div class="ll-theme-lbl">'+(ar?'مظهر الموقع':'Appearance')+'</div>'+
      '<div class="ll-seg">'+
        '<button data-t="light" class="'+(th==='light'?'on':'')+'">'+
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>'+
          (ar?'فاتح':'Light')+'</button>'+
        '<button data-t="dark" class="'+(th==='dark'?'on':'')+'">'+
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/></svg>'+
          (ar?'غامق':'Dark')+'</button>'+
      '</div></div>';

    box.innerHTML=html;
    box.querySelectorAll('.ll-seg button').forEach(function(b){
      b.onclick=function(){ applyTheme(b.dataset.t); };
    });
  }

  /* ---------- search overlay ---------- */
  var search=document.createElement('div'); search.className='ll-search';
  search.innerHTML=
    '<div class="ll-search-box">'+
      '<div class="ll-search-in">'+
        '<span class="sic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg></span>'+
        '<input type="text" id="ll-sq" autocomplete="off">'+
        '<span class="esc">ESC</span>'+
      '</div>'+
      '<div class="ll-sresults" id="ll-sres"></div>'+
      '<div class="ll-shint"><span class="ar">ابحثي باسم اللون أو المنتج</span><span class="en">Search by color or product name</span></div>'+
    '</div>';
  document.body.appendChild(search);
  var sInput=search.querySelector('#ll-sq');
  var sRes=search.querySelector('#ll-sres');

  function openSearch(){
    search.classList.add('show'); document.body.style.overflow='hidden';
    sInput.setAttribute('placeholder', isAr()?'ابحثي عن لون...':'Search a color...');
    setTimeout(function(){ sInput.focus(); }, 50);
    renderSearch('');
  }
  function closeSearch(){ search.classList.remove('show'); document.body.style.overflow=''; sInput.value=''; }
  function renderSearch(q){
    q=q.trim().toLowerCase();
    var list=CATALOG.filter(function(p){
      if(!q) return true;
      return (p.ar+' '+p.en+' '+p.ar_m+' '+p.en_m).toLowerCase().indexOf(q)>-1;
    });
    if(list.length===0){
      sRes.innerHTML='<div class="ll-sempty"><span class="ar">مفيش نتائج لـ «'+q+'»</span><span class="en">No results for "'+q+'"</span></div>';
      return;
    }
    sRes.innerHTML='';
    list.slice(0,6).forEach(function(p){
      var a=document.createElement('a'); a.className='ll-sr'; a.href='lenses-lover-product.html?id='+p.id;
      a.innerHTML='<div class="th" style="background:none;overflow:hidden;"><img src="'+p.img+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:10px;"></div>'+
        '<div class="info"><b>'+(isAr()?p.ar:p.en)+'</b><span><span class="ar">'+p.ar_m+'</span><span class="en">'+p.en_m+'</span></span></div>'+
        '<span class="price">'+money(p.price)+'</span>';
      sRes.appendChild(a);
    });
  }
  sInput && sInput.addEventListener('input', function(){ renderSearch(sInput.value); });
  search.addEventListener('click', function(e){ if(e.target===search) closeSearch(); });
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape'){ closeSearch(); closeDrawer(); closeBrands(); }
    if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); openSearch(); }
  });

  /* ---------- keep language-dependent bits in sync ---------- */
  if(typeof window.setLang==='function'){
    var _sl=window.setLang;
    window.setLang=function(l){ _sl(l); refreshWa(); if(drawer.classList.contains('show')) renderDrawer(); if(brands.classList.contains('show')) renderBrands(); };
  }

  /* ---------- الشريط العلوي ---------- */
  (function(){
    var API='https://lenseslover-orders.skymoonsport.workers.dev/settings';
    var HIDE='ll_banner_hidden';

    function render(st){
      if(!st || st.banner_active !== '1') return;
      var txt=(st.banner_text||'').trim();
      if(!txt) return;
      /* لو العميلة قفلته قبل كده بنفس النص، ميظهرش تاني */
      try{ if(sessionStorage.getItem(HIDE)===txt) return; }catch(e){}

      var link=(st.banner_link||'').trim();
      var el=document.createElement(link ? 'a' : 'div');
      el.className='ll-banner';
      if(link){ el.href=link; }
      el.textContent=txt;

      var x=document.createElement('button');
      x.className='x'; x.setAttribute('aria-label','إغلاق'); x.innerHTML='&times;';
      x.onclick=function(ev){
        ev.preventDefault(); ev.stopPropagation();
        try{ sessionStorage.setItem(HIDE, txt); }catch(e){}
        el.remove();
      };
      el.appendChild(x);

      document.body.insertBefore(el, document.body.firstChild);
    }

    try{
      fetch(API).then(function(r){ return r.json(); })
        .then(function(j){ if(j && j.ok) render(j.settings); })
        .catch(function(){});
    }catch(e){}
  })();

  /* ---------- back to top ---------- */
  var topBtn=document.createElement('button');
  topBtn.className='ll-top';
  topBtn.setAttribute('aria-label','العودة لأعلى الصفحة');
  topBtn.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(topBtn);
  topBtn.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); });
  var _topTick=false;
  function _topCheck(){ topBtn.classList.toggle('show', window.scrollY > window.innerHeight*0.9); _topTick=false; }
  window.addEventListener('scroll', function(){
    if(!_topTick){ _topTick=true; requestAnimationFrame(_topCheck); }
  }, { passive:true });
  _topCheck();

  /* ---------- init ---------- */
  syncBadges();
})();
