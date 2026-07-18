/* LENSES LOVER — product catalog (single source of truth)
   Brands → colors. Add new brands/colors here only; all pages read from this.

   Per-brand fields:
     imgBase : CDN folder for this brand's images
     offer   : { qty, bundle, ar, en }  → "any N of THIS brand = bundle price"
               (offers never mix across brands)
   Per-product fields:
     dur  : 'monthly' | 'yearly'
     type : 'cosmetic' | 'optical'   (optical = also available with prescription)
     n    : how many photos exist (slug-1.webp … slug-n.webp)
*/
window.LL_CATALOG = {
  brands: [
    { key:'eqqual-berre', en:'Eqqual Berre', ar:'إيكوال بيري',
      imgBase:'https://cdn.lenseslover.com/products/',
      offer:{ qty:2, bundle:350, ar:'قطعتين بـ 350 ج.م', en:'2 for 350 EGP' } },

    { key:'meetone', en:'Meetone', ar:'ميتون',
      imgBase:'https://cdn.lenseslover.com/mettone/', numbered:true,
      offer:{ qty:2, bundle:1100, ar:'قطعتين بـ 1100 ج.م', en:'2 for 1100 EGP' } }
  ],

  /* color family keys used by shop filters */
  families: [
    { key:'gray',  c1:'#b9c0c6', c2:'#5b6670', ring:'#394048', ar:'رمادي', en:'Gray' },
    { key:'green', c1:'#7fbf9e', c2:'#1f5c42', ring:'#123626', ar:'أخضر',  en:'Green' },
    { key:'blue',  c1:'#7fa8c9', c2:'#28516e', ring:'#1a3244', ar:'أزرق',  en:'Blue' },
    { key:'hazel', c1:'#c9a15b', c2:'#6b4a24', ring:'#4a2f17', ar:'بندقي', en:'Hazel' },
    { key:'brown', c1:'#b0793f', c2:'#5c3a18', ring:'#3d2610', ar:'بني',   en:'Brown' }
  ],

  /* duration labels */
  durations: {
    monthly: { ar:'شهري', en:'Monthly', arAdj:'شهرية' },
    yearly:  { ar:'سنوي', en:'Yearly',  arAdj:'سنوية' }
  },

  products: [
    /* ---------- Eqqual Berre — monthly, cosmetic only, 200 EGP ---------- */
    { id:'eqqual-berre-breeze-gray',      brand:'eqqual-berre', ar:'بريز جراي',          en:'Breeze Gray',       family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'breeze-gray',       n:1 },
    { id:'eqqual-berre-clepatra-gray',    brand:'eqqual-berre', ar:'كليوباترا جراي',     en:'Clepatra Gray',     family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-gray',     n:1 },
    { id:'eqqual-berre-cat-gray',         brand:'eqqual-berre', ar:'كات جراي',           en:'Cat Gray',          family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'cat-gray',          n:1 },
    { id:'eqqual-berre-mrmr-gray',        brand:'eqqual-berre', ar:'مرمر جراي',          en:'MRMR Gray',         family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'mrmr-gray',         n:1 },
    { id:'eqqual-berre-breeze-green',     brand:'eqqual-berre', ar:'بريز جرين',          en:'Breeze Green',      family:'green', dur:'monthly', type:'cosmetic', price:200, slug:'breeze-green',      n:1 },
    { id:'eqqual-berre-clepatra-green',   brand:'eqqual-berre', ar:'كليوباترا جرين',     en:'Clepatra Green',    family:'green', dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-green',    n:1 },
    { id:'eqqual-berre-alovera-green',    brand:'eqqual-berre', ar:'ألوفيرا جرين',       en:'Alovera Green',     family:'green', dur:'monthly', type:'cosmetic', price:200, slug:'alovera-green',     n:1 },
    { id:'eqqual-berre-clepatra-sky-blue',brand:'eqqual-berre', ar:'كليوباترا سكاي بلو', en:'Clepatra Sky Blue', family:'blue',  dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-sky-blue', n:1 },
    { id:'eqqual-berre-mona-lisa-blue',   brand:'eqqual-berre', ar:'موناليزا بلو',       en:'Mona Lisa Blue',    family:'blue',  dur:'monthly', type:'cosmetic', price:200, slug:'mona-lisa-blue',    n:1 },
    { id:'eqqual-berre-clepatra-hazel',   brand:'eqqual-berre', ar:'كليوباترا هيزل',     en:'Clepatra Hazel',    family:'hazel', dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-hazel',    n:1 },
    { id:'eqqual-berre-breeze-hazel',     brand:'eqqual-berre', ar:'بريز هيزل',          en:'Breeze Hazel',      family:'hazel', dur:'monthly', type:'cosmetic', price:200, slug:'breeze-hazel',      n:1 },
    { id:'eqqual-berre-mrmr-brown',       brand:'eqqual-berre', ar:'مرمر براون',         en:'MRMR Brown',        family:'brown', dur:'monthly', type:'cosmetic', price:200, slug:'mrmr-brown',        n:1 },

    /* ---------- Meetone — yearly, cosmetic only, 600 EGP ---------- */
    { id:'meetone-breeze-gray',       brand:'meetone', ar:'بريز جراي',        en:'Breeze Gray',       family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'breeze-gray',       n:2 },
    { id:'meetone-cleopatra-gray',    brand:'meetone', ar:'كليوباترا جراي',   en:'Cleopatra Gray',    family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'cleopatra-gray',    n:2 },
    { id:'meetone-mexico-gray',       brand:'meetone', ar:'مكسيكو جراي',      en:'Mexico Gray',       family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'mexico-gray',       n:2 },
    { id:'meetone-nadine-gray',       brand:'meetone', ar:'نادين جراي',       en:'Nadine Gray',       family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'nadine-gray',       n:2 },
    { id:'meetone-dawn-gray',         brand:'meetone', ar:'دون جراي',         en:'Dawn Gray',         family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'dawn-gray',         n:2 },
    { id:'meetone-glacier-gray',      brand:'meetone', ar:'جلاسير جراي',      en:'Glacier Gray',      family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'glacier-gray',      n:2 },
    { id:'meetone-me14-russian-gray', brand:'meetone', ar:'روشان جراي',       en:'ME14 Russian Gray', family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'me14-russian-gray', n:2 },

    { id:'meetone-cleopatra-green',   brand:'meetone', ar:'كليوباترا جرين',   en:'Cleopatra Green',   family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'cleopatra-green',   n:2 },
    { id:'meetone-aurora-green',      brand:'meetone', ar:'أورورا جرين',      en:'Aurora Green',      family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-green',      n:2 },
    { id:'meetone-aurora-emerald',    brand:'meetone', ar:'أورورا إميرالد',   en:'Aurora Emerald',    family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-emerald',    n:2 },
    { id:'meetone-aurora-sky-green',  brand:'meetone', ar:'أورورا سكاي جرين', en:'Aurora Sky Green',  family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-sky-green',  n:1 },
    { id:'meetone-nadine-green',      brand:'meetone', ar:'نادين جرين',       en:'Nadine Green',      family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'nadine-green',      n:2 },

    { id:'meetone-oxygen-blue',       brand:'meetone', ar:'أوكسجين بلو',      en:'Oxygen Blue',       family:'blue',  dur:'yearly', type:'cosmetic', price:600, slug:'oxygen-blue',       n:2 },
    { id:'meetone-nadine-blue',       brand:'meetone', ar:'نادين بلو',        en:'Nadine Blue',       family:'blue',  dur:'yearly', type:'cosmetic', price:600, slug:'nadine-blue',       n:2 },

    { id:'meetone-cleopatra-hazel',   brand:'meetone', ar:'كليوباترا هيزل',   en:'Cleopatra Hazel',   family:'hazel', dur:'yearly', type:'cosmetic', price:600, slug:'cleopatra-hazel',   n:2 },
    { id:'meetone-feo-avela',         brand:'meetone', ar:'فيو أفيلا',        en:'Feo Avela',         family:'hazel', dur:'yearly', type:'cosmetic', price:600, slug:'feo-avela',         n:2 },
    { id:'meetone-aurora-maize',      brand:'meetone', ar:'أورورا مايز',      en:'Aurora Maize',      family:'hazel', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-maize',      n:2 },

    { id:'meetone-bobo-brown',        brand:'meetone', ar:'بوبو براون',       en:'BOBO Brown',        family:'brown', dur:'yearly', type:'cosmetic', price:600, slug:'bobo-brown',        n:2 },
    { id:'meetone-yimee-chocolate',   brand:'meetone', ar:'ييمي شوكولاتة',    en:'Yimee Chocolate',   family:'brown', dur:'yearly', type:'cosmetic', price:600, slug:'yimee-chocolate',   n:2 },
    { id:'meetone-midsummer-brown',   brand:'meetone', ar:'ميدسمر براون',     en:'Midsummer Brown',   family:'brown', dur:'yearly', type:'cosmetic', price:600, slug:'midsummer-brown',   n:2 }
  ]
};

(function(){
  var C = window.LL_CATALOG;

  C.brandByKey = {};
  C.brands.forEach(function(b){ C.brandByKey[b.key] = b; });

  /* build image URLs: p.imgs = all photos, p.img = primary (back-compat) */
  C.products.forEach(function(p){
    var b = C.brandByKey[p.brand];
    var base = (b && b.imgBase) || 'https://cdn.lenseslover.com/products/';
    var count = p.n || 1;
    /* numbered:false → legacy flat names (slug.webp), e.g. Eqqual Berre
       numbered:true  → slug-1.webp, slug-2.webp …          e.g. Meetone */
    var numbered = !!(b && b.numbered);
    p.imgs = [];
    for(var i=1;i<=count;i++){
      p.imgs.push(base + p.slug + (numbered ? '-'+i : '') + '.webp');
    }
    p.img = p.imgs[0];
  });

  C.byId = function(id){
    return C.products.find(function(p){ return p.id===id; }) || null;
  };

  /* brand offer helpers */
  C.offerOf = function(brandKey){
    var b = C.brandByKey[brandKey];
    return (b && b.offer) ? b.offer : null;
  };
  C.offerOfProduct = function(p){
    return p ? C.offerOf(p.brand) : null;
  };

  /* legacy alias — some pages still read LL_CATALOG.offer2 */
  C.offer2 = C.offerOf('eqqual-berre');

  /* Pair-offer discount, computed PER BRAND (offers never mix).
     cart items: [{ id, price, qty, offer2 }] */
  C.offerDiscount = function(cart){
    if(!cart || !cart.length) return 0;
    var byBrand = {};
    cart.forEach(function(it){
      if(!it || it.offer2 === false) return;
      var p = C.byId(it.id);
      if(!p) return;
      var o = C.offerOf(p.brand);
      if(!o) return;
      if(!byBrand[p.brand]) byBrand[p.brand] = { offer:o, qty:0, unit:p.price };
      byBrand[p.brand].qty += (it.qty || 1);
    });
    var total = 0;
    Object.keys(byBrand).forEach(function(k){
      var g = byBrand[k];
      var bundles = Math.floor(g.qty / g.offer.qty);
      var savePerBundle = (g.offer.qty * g.unit) - g.offer.bundle;
      if(savePerBundle > 0) total += bundles * savePerBundle;
    });
    return total;
  };

  /* human-readable offer lines for the current cart (used by checkout message) */
  C.offerLines = function(cart, lang){
    var lines = [];
    if(!cart || !cart.length) return lines;
    var byBrand = {};
    cart.forEach(function(it){
      if(!it || it.offer2 === false) return;
      var p = C.byId(it.id);
      if(!p) return;
      var o = C.offerOf(p.brand);
      if(!o) return;
      if(!byBrand[p.brand]) byBrand[p.brand] = { offer:o, qty:0, unit:p.price };
      byBrand[p.brand].qty += (it.qty || 1);
    });
    Object.keys(byBrand).forEach(function(k){
      var g = byBrand[k];
      var bundles = Math.floor(g.qty / g.offer.qty);
      var save = bundles * ((g.offer.qty * g.unit) - g.offer.bundle);
      if(bundles > 0 && save > 0){
        var b = C.brandByKey[k];
        var name = (lang==='en') ? b.en : b.ar;
        var label = (lang==='en') ? g.offer.en : g.offer.ar;
        lines.push(name + ' — ' + label + ': -' + save);
      }
    });
    return lines;
  };

  /* duration label helpers */
  C.durAr    = function(p){ var d=C.durations[p.dur]; return d?d.ar:''; };
  C.durEn    = function(p){ var d=C.durations[p.dur]; return d?d.en:''; };
  C.durArAdj = function(p){ var d=C.durations[p.dur]; return d?d.arAdj:''; };
})();
