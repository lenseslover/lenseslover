/* LENSES LOVER — product catalog (single source of truth)
   Brands → colors. Add new brands/colors here only; all pages read from this. */
window.LL_CATALOG = {
  brands: [
    { key:'eqqual-berre', en:'Eqqual Berre', ar:'إيكوال بيري' }
  ],
  /* color family keys used by shop filters */
  families: [
    { key:'gray',  c1:'#b9c0c6', c2:'#5b6670', ring:'#394048', ar:'رمادي', en:'Gray' },
    { key:'green', c1:'#7fbf9e', c2:'#1f5c42', ring:'#123626', ar:'أخضر',  en:'Green' },
    { key:'blue',  c1:'#7fa8c9', c2:'#28516e', ring:'#1a3244', ar:'أزرق',  en:'Blue' },
    { key:'hazel', c1:'#c9a15b', c2:'#6b4a24', ring:'#4a2f17', ar:'بندقي', en:'Hazel' },
    { key:'brown', c1:'#b0793f', c2:'#5c3a18', ring:'#3d2610', ar:'بني',   en:'Brown' }
  ],
  products: [
    { id:'eqqual-berre-breeze-gray',      brand:'eqqual-berre', ar:'بريز جراي',          en:'Breeze Gray',       family:'gray',  dur:'monthly', price:200 },
    { id:'eqqual-berre-clepatra-gray',    brand:'eqqual-berre', ar:'كليوباترا جراي',     en:'Clepatra Gray',     family:'gray',  dur:'monthly', price:200 },
    { id:'eqqual-berre-cat-gray',         brand:'eqqual-berre', ar:'كات جراي',           en:'Cat Gray',          family:'gray',  dur:'monthly', price:200 },
    { id:'eqqual-berre-mrmr-gray',        brand:'eqqual-berre', ar:'مرمر جراي',          en:'MRMR Gray',         family:'gray',  dur:'monthly', price:200 },
    { id:'eqqual-berre-breeze-green',     brand:'eqqual-berre', ar:'بريز جرين',          en:'Breeze Green',      family:'green', dur:'monthly', price:200 },
    { id:'eqqual-berre-clepatra-green',   brand:'eqqual-berre', ar:'كليوباترا جرين',     en:'Clepatra Green',    family:'green', dur:'monthly', price:200 },
    { id:'eqqual-berre-alovera-green',    brand:'eqqual-berre', ar:'ألوفيرا جرين',       en:'Alovera Green',     family:'green', dur:'monthly', price:200 },
    { id:'eqqual-berre-clepatra-sky-blue',brand:'eqqual-berre', ar:'كليوباترا سكاي بلو', en:'Clepatra Sky Blue', family:'blue',  dur:'monthly', price:200 },
    { id:'eqqual-berre-mona-lisa-blue',   brand:'eqqual-berre', ar:'موناليزا بلو',       en:'Mona Lisa Blue',    family:'blue',  dur:'monthly', price:200 },
    { id:'eqqual-berre-clepatra-hazel',   brand:'eqqual-berre', ar:'كليوباترا هيزل',     en:'Clepatra Hazel',    family:'hazel', dur:'monthly', price:200 },
    { id:'eqqual-berre-breeze-hazel',     brand:'eqqual-berre', ar:'بريز هيزل',          en:'Breeze Hazel',      family:'hazel', dur:'monthly', price:200 },
    { id:'eqqual-berre-mrmr-brown',       brand:'eqqual-berre', ar:'مرمر براون',         en:'MRMR Brown',        family:'brown', dur:'monthly', price:200 }
  ],
  /* bundle offer: any 2 lenses = 350 EGP (auto-applied in cart) */
  offer2: { qty:2, bundle:350, ar:'قطعتين بـ 350 ج.م', en:'2 for 350 EGP' }
};
window.LL_CATALOG.products.forEach(function(p){
  p.img = 'https://cdn.lenseslover.com/products/' + p.id.replace(p.brand+'-','') + '.webp';
});
window.LL_CATALOG.byId = function(id){
  return window.LL_CATALOG.products.find(function(p){ return p.id===id; }) || null;
};
/* pair-offer discount for a cart array [{id, price, qty, offer2}] */
window.LL_CATALOG.offerDiscount = function(cart){
  var o=window.LL_CATALOG.offer2, q=0;
  cart.forEach(function(it){ if(it.offer2) q += (it.qty||1); });
  var pairs=Math.floor(q/o.qty);
  return pairs * (o.qty*200 - o.bundle); /* 50 EGP per pair */
};
