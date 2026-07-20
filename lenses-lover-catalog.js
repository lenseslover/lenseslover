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
      offer:{ qty:2, bundle:1100, ar:'قطعتين بـ 1100 ج.م', en:'2 for 1100 EGP' } },

    { key:'urban-layer', en:'Urban Layer', ar:'أربان لاير',
      imgBase:'https://cdn.lenseslover.com/urbanlayer/', numbered:true,
      pricing:{ monthly:350, yearly:750 } },

    { key:'fresh-lady', en:'Fresh Lady', ar:'فريش ليدي',
      imgBase:'https://cdn.lenseslover.com/freshlady/', numbered:true,
      opticalPlus:150,
      offer:{ qty:2, bundle:350, cosmeticOnly:true, ar:'قطعتين تجميلي بـ 350 ج.م', en:'2 cosmetic for 350 EGP' } },

    { key:'dahab', en:'Dahab', ar:'دهب',
      imgBase:'https://cdn.lenseslover.com/dahab/', numbered:true,
      pricing:{ monthly:300, yearly:1000 },
      opticalPlus:150 }
  ],

  /* color family keys used by shop filters */
  families: [
    { key:'gray',  c1:'#b9c0c6', c2:'#5b6670', ring:'#394048', ar:'رمادي', en:'Gray' },
    { key:'green', c1:'#7fbf9e', c2:'#1f5c42', ring:'#123626', ar:'أخضر',  en:'Green' },
    { key:'blue',  c1:'#7fa8c9', c2:'#28516e', ring:'#1a3244', ar:'أزرق',  en:'Blue' },
    { key:'hazel', c1:'#c9a15b', c2:'#6b4a24', ring:'#4a2f17', ar:'بندقي', en:'Hazel' },
    { key:'brown', c1:'#b0793f', c2:'#5c3a18', ring:'#3d2610', ar:'بني',   en:'Brown' },
    { key:'purple', c1:'#b39ddb', c2:'#4a2c6b', ring:'#32204a', ar:'بنفسجي', en:'Purple' },
    { key:'yellow', c1:'#e6d27a', c2:'#8a7420', ring:'#5c4d13', ar:'أصفر',   en:'Yellow' }
  ],

  /* duration labels */
  durations: {
    monthly: { ar:'شهري', en:'Monthly', arAdj:'شهرية' },
    yearly:  { ar:'سنوي', en:'Yearly',  arAdj:'سنوية' },
    both:    { ar:'شهري أو سنوي', en:'Monthly or Yearly', arAdj:'شهرية أو سنوية' }
  },

  products: [
    /* ---------- Eqqual Berre — monthly, cosmetic only, 200 EGP ---------- */
    { id:'eqqual-berre-breeze-gray',      brand:'eqqual-berre', ar:'بريز جراي',          en:'Breeze Gray',       family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'breeze-gray',       n:1, featured:true },
    { id:'eqqual-berre-clepatra-gray',    brand:'eqqual-berre', ar:'كليوباترا جراي',     en:'Clepatra Gray',     family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-gray',     n:1, featured:true },
    { id:'eqqual-berre-cat-gray',         brand:'eqqual-berre', ar:'كات جراي',           en:'Cat Gray',          family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'cat-gray',          n:1, featured:true },
    { id:'eqqual-berre-mrmr-gray',        brand:'eqqual-berre', ar:'مرمر جراي',          en:'MRMR Gray',         family:'gray',  dur:'monthly', type:'cosmetic', price:200, slug:'mrmr-gray',         n:1, featured:true },
    { id:'eqqual-berre-breeze-green',     brand:'eqqual-berre', ar:'بريز جرين',          en:'Breeze Green',      family:'green', dur:'monthly', type:'cosmetic', price:200, slug:'breeze-green',      n:1 },
    { id:'eqqual-berre-clepatra-green',   brand:'eqqual-berre', ar:'كليوباترا جرين',     en:'Clepatra Green',    family:'green', dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-green',    n:1 },
    { id:'eqqual-berre-alovera-green',    brand:'eqqual-berre', ar:'ألوفيرا جرين',       en:'Alovera Green',     family:'green', dur:'monthly', type:'cosmetic', price:200, slug:'alovera-green',     n:1 },
    { id:'eqqual-berre-clepatra-sky-blue',brand:'eqqual-berre', ar:'كليوباترا سكاي بلو', en:'Clepatra Sky Blue', family:'blue',  dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-sky-blue', n:1 },
    { id:'eqqual-berre-mona-lisa-blue',   brand:'eqqual-berre', ar:'موناليزا بلو',       en:'Mona Lisa Blue',    family:'blue',  dur:'monthly', type:'cosmetic', price:200, slug:'mona-lisa-blue',    n:1 },
    { id:'eqqual-berre-clepatra-hazel',   brand:'eqqual-berre', ar:'كليوباترا هيزل',     en:'Clepatra Hazel',    family:'hazel', dur:'monthly', type:'cosmetic', price:200, slug:'clepatra-hazel',    n:1 },
    { id:'eqqual-berre-breeze-hazel',     brand:'eqqual-berre', ar:'بريز هيزل',          en:'Breeze Hazel',      family:'hazel', dur:'monthly', type:'cosmetic', price:200, slug:'breeze-hazel',      n:1 },
    { id:'eqqual-berre-mrmr-brown',       brand:'eqqual-berre', ar:'مرمر براون',         en:'MRMR Brown',        family:'brown', dur:'monthly', type:'cosmetic', price:200, slug:'mrmr-brown',        n:1 },

    /* ---------- Meetone — yearly, cosmetic only, 600 EGP ---------- */
    { id:'meetone-breeze-gray',       brand:'meetone', ar:'بريز جراي',        en:'Breeze Gray',       family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'breeze-gray',       n:2, featured:true },
    { id:'meetone-cleopatra-gray',    brand:'meetone', ar:'كليوباترا جراي',   en:'Cleopatra Gray',    family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'cleopatra-gray',    n:2 },
    { id:'meetone-mexico-gray',       brand:'meetone', ar:'مكسيكو جراي',      en:'Mexico Gray',       family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'mexico-gray',       n:2 },
    { id:'meetone-nadine-gray',       brand:'meetone', ar:'نادين جراي',       en:'Nadine Gray',       family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'nadine-gray',       n:2 },
    { id:'meetone-dawn-gray',         brand:'meetone', ar:'دون جراي',         en:'Dawn Gray',         family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'dawn-gray',         n:2 },
    { id:'meetone-glacier-gray',      brand:'meetone', ar:'جلاسير جراي',      en:'Glacier Gray',      family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'glacier-gray',      n:2 },
    { id:'meetone-me14-russian-gray', brand:'meetone', ar:'روشان جراي',       en:'ME14 Russian Gray', family:'gray',  dur:'yearly', type:'cosmetic', price:600, slug:'me14-russian-gray', n:2 },

    { id:'meetone-cleopatra-green',   brand:'meetone', ar:'كليوباترا جرين',   en:'Cleopatra Green',   family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'cleopatra-green',   n:2 },
    { id:'meetone-aurora-green',      brand:'meetone', ar:'أورورا جرين',      en:'Aurora Green',      family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-green',      n:2, featured:true },
    { id:'meetone-aurora-emerald',    brand:'meetone', ar:'أورورا إميرالد',   en:'Aurora Emerald',    family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-emerald',    n:2 },
    { id:'meetone-aurora-sky-green',  brand:'meetone', ar:'أورورا سكاي جرين', en:'Aurora Sky Green',  family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-sky-green',  n:1 },
    { id:'meetone-nadine-green',      brand:'meetone', ar:'نادين جرين',       en:'Nadine Green',      family:'green', dur:'yearly', type:'cosmetic', price:600, slug:'nadine-green',      n:2 },

    { id:'meetone-oxygen-blue',       brand:'meetone', ar:'أوكسجين بلو',      en:'Oxygen Blue',       family:'blue',  dur:'yearly', type:'cosmetic', price:600, slug:'oxygen-blue',       n:2 },
    { id:'meetone-nadine-blue',       brand:'meetone', ar:'نادين بلو',        en:'Nadine Blue',       family:'blue',  dur:'yearly', type:'cosmetic', price:600, slug:'nadine-blue',       n:2 },

    { id:'meetone-cleopatra-hazel',   brand:'meetone', ar:'كليوباترا هيزل',   en:'Cleopatra Hazel',   family:'hazel', dur:'yearly', type:'cosmetic', price:600, slug:'cleopatra-hazel',   n:2, featured:true },
    { id:'meetone-feo-avela',         brand:'meetone', ar:'فيو أفيلا',        en:'Feo Avela',         family:'hazel', dur:'yearly', type:'cosmetic', price:600, slug:'feo-avela',         n:2 },
    { id:'meetone-aurora-maize',      brand:'meetone', ar:'أورورا مايز',      en:'Aurora Maize',      family:'hazel', dur:'yearly', type:'cosmetic', price:600, slug:'aurora-maize',      n:2 },

    { id:'meetone-bobo-brown',        brand:'meetone', ar:'بوبو براون',       en:'BOBO Brown',        family:'brown', dur:'yearly', type:'cosmetic', price:600, slug:'bobo-brown',        n:2, featured:true },
    { id:'meetone-yimee-chocolate',   brand:'meetone', ar:'ييمي شوكولاتة',    en:'Yimee Chocolate',   family:'brown', dur:'yearly', type:'cosmetic', price:600, slug:'yimee-chocolate',   n:2 },
    { id:'meetone-midsummer-brown',   brand:'meetone', ar:'ميدسمر براون',     en:'Midsummer Brown',   family:'brown', dur:'yearly', type:'cosmetic', price:600, slug:'midsummer-brown',   n:2 },

    /* ---------- Urban Layer — 35 لون، شهري 350 / سنوي 750، optical (مقاسات -0.50 لـ -6.00) ---------- */
    { id:'urban-layer-al-blue', brand:'urban-layer', ar:'آل بلو', en:'Al Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'al-blue', n:1, featured:true },
    { id:'urban-layer-angeles-n-blue', brand:'urban-layer', ar:'أنجلوس إن بلو', en:'Angeles N Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'angeles-n-blue', n:1 },
    { id:'urban-layer-angeles-n-violet', brand:'urban-layer', ar:'أنجلوس إن فيوليت', en:'Angeles N Violet', family:'blue', dur:'both', type:'optical', price:350, slug:'angeles-n-violet', n:2, featured:true },
    { id:'urban-layer-breeze-light-blue', brand:'urban-layer', ar:'بريز لايت بلو', en:'Breeze Light Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'breeze-light-blue', n:1, featured:true },
    { id:'urban-layer-gemini-light-blue', brand:'urban-layer', ar:'جيميني لايت بلو', en:'Gemini Light Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'gemini-light-blue', n:1 },
    { id:'urban-layer-gogh-n-blue', brand:'urban-layer', ar:'جوخ إن بلو', en:'Gogh N Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'gogh-n-blue', n:1, featured:true },
    { id:'urban-layer-melrose-ash-blue', brand:'urban-layer', ar:'ميلروز آش بلو', en:'Melrose Ash Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'melrose-ash-blue', n:1 },
    { id:'urban-layer-melrose-blue', brand:'urban-layer', ar:'ميلروز بلو', en:'Melrose Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'melrose-blue', n:1 },
    { id:'urban-layer-new-york-n-blue', brand:'urban-layer', ar:'نيويورك إن بلو', en:'New York N Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'new-york-n-blue', n:1 },
    { id:'urban-layer-orlando-n-blue', brand:'urban-layer', ar:'أورلاندو إن بلو', en:'Orlando N Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'orlando-n-blue', n:1 },
    { id:'urban-layer-siri-ash-blue', brand:'urban-layer', ar:'سيري آش بلو', en:'Siri Ash Blue', family:'blue', dur:'both', type:'optical', price:350, slug:'siri-ash-blue', n:3 },
    { id:'urban-layer-angeles-n-gray', brand:'urban-layer', ar:'أنجلوس إن جراي', en:'Angeles N Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'angeles-n-gray', n:1 },
    { id:'urban-layer-angeles-n-ice-gray', brand:'urban-layer', ar:'أنجلوس إن آيس جراي', en:'Angeles N Ice Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'angeles-n-ice-gray', n:3 },
    { id:'urban-layer-brooklyn-fa-gray', brand:'urban-layer', ar:'بروكلين إف إيه جراي', en:'Brooklyn FA Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'brooklyn-fa-gray', n:1 },
    { id:'urban-layer-daddario-gray', brand:'urban-layer', ar:'داداريو جراي', en:'Daddario Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'daddario-gray', n:1 },
    { id:'urban-layer-mercury-gray', brand:'urban-layer', ar:'ميركوري جراي', en:'Mercury Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'mercury-gray', n:1 },
    { id:'urban-layer-nebula-gray', brand:'urban-layer', ar:'نيبولا جراي', en:'Nebula Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'nebula-gray', n:1 },
    { id:'urban-layer-opal-gray', brand:'urban-layer', ar:'أوبال جراي', en:'Opal Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'opal-gray', n:1 },
    { id:'urban-layer-siri-gray', brand:'urban-layer', ar:'سيري جراي', en:'Siri Gray', family:'gray', dur:'both', type:'optical', price:350, slug:'siri-gray', n:2 },
    { id:'urban-layer-alexa-green', brand:'urban-layer', ar:'أليكسا جرين', en:'Alexa Green', family:'green', dur:'both', type:'optical', price:350, slug:'alexa-green', n:1 },
    { id:'urban-layer-breeze-green', brand:'urban-layer', ar:'بريز جرين', en:'Breeze Green', family:'green', dur:'both', type:'optical', price:350, slug:'breeze-green', n:1 },
    { id:'urban-layer-chelsea-n-green', brand:'urban-layer', ar:'تشيلسي إن جرين', en:'Chelsea N Green', family:'green', dur:'both', type:'optical', price:350, slug:'chelsea-n-green', n:1 },
    { id:'urban-layer-cleopatra-lime', brand:'urban-layer', ar:'كليوباترا لايم', en:'Cleopatra Lime', family:'green', dur:'both', type:'optical', price:350, slug:'cleopatra-lime', n:1 },
    { id:'urban-layer-melrose-green', brand:'urban-layer', ar:'ميلروز جرين', en:'Melrose Green', family:'green', dur:'both', type:'optical', price:350, slug:'melrose-green', n:1 },
    { id:'urban-layer-nebula-green', brand:'urban-layer', ar:'نيبولا جرين', en:'Nebula Green', family:'green', dur:'both', type:'optical', price:350, slug:'nebula-green', n:1 },
    { id:'urban-layer-siri-145-green', brand:'urban-layer', ar:'سيري ١٤.٥ جرين', en:'Siri 14.5 Green', family:'green', dur:'both', type:'optical', price:350, slug:'siri-145-green', n:2 },
    { id:'urban-layer-siri-green', brand:'urban-layer', ar:'سيري جرين', en:'Siri Green', family:'green', dur:'both', type:'optical', price:350, slug:'siri-green', n:2 },
    { id:'urban-layer-siri-lime', brand:'urban-layer', ar:'سيري لايم', en:'Siri Lime', family:'green', dur:'both', type:'optical', price:350, slug:'siri-lime', n:1 },
    { id:'urban-layer-new-york-n-hazel', brand:'urban-layer', ar:'نيويورك إن هيزل', en:'New York N Hazel', family:'hazel', dur:'both', type:'optical', price:350, slug:'new-york-n-hazel', n:1 },
    { id:'urban-layer-yukon-r-yellow', brand:'urban-layer', ar:'يوكون آر يلو', en:'Yukon R Yellow', family:'hazel', dur:'both', type:'optical', price:350, slug:'yukon-r-yellow', n:2 },
    { id:'urban-layer-al-brown', brand:'urban-layer', ar:'آل براون', en:'Al Brown', family:'brown', dur:'both', type:'optical', price:350, slug:'al-brown', n:1 },
    { id:'urban-layer-angeles-n-brown', brand:'urban-layer', ar:'أنجلوس إن براون', en:'Angeles N Brown', family:'brown', dur:'both', type:'optical', price:350, slug:'angeles-n-brown', n:1 },
    { id:'urban-layer-dark-night-black', brand:'urban-layer', ar:'دارك نايت بلاك', en:'Dark Night Black', family:'brown', dur:'both', type:'optical', price:350, slug:'dark-night-black', n:2 },
    { id:'urban-layer-mercury-brown', brand:'urban-layer', ar:'ميركوري براون', en:'Mercury Brown', family:'brown', dur:'both', type:'optical', price:350, slug:'mercury-brown', n:1 },
    { id:'urban-layer-nebula-brown', brand:'urban-layer', ar:'نيبولا براون', en:'Nebula Brown', family:'brown', dur:'both', type:'optical', price:350, slug:'nebula-brown', n:1 }
,

    /* ---------- Fresh Lady — شهري 350 / سنوي 750، optical (-0.50 لـ -6.00) ---------- */
    { id:'fresh-lady-athena-circle-cloud', brand:'fresh-lady', ar:'أثينا سيركل كلاود', en:'Athena Circle Cloud', family:'gray', dur:'monthly', type:'optical', price:200, slug:'athena-circle-cloud', n:1 },
    { id:'fresh-lady-athena-circle-grey', brand:'fresh-lady', ar:'أثينا سيركل جراي', en:'Athena Circle Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'athena-circle-grey', n:1 },
    { id:'fresh-lady-athena-marble', brand:'fresh-lady', ar:'أثينا ماربل', en:'Athena Marble', family:'gray', dur:'monthly', type:'optical', price:200, slug:'athena-marble', n:1 },
    { id:'fresh-lady-athena-mist', brand:'fresh-lady', ar:'أثينا ميست', en:'Athena Mist', family:'gray', dur:'monthly', type:'optical', price:200, slug:'athena-mist', n:1 },
    { id:'fresh-lady-athena-snowy', brand:'fresh-lady', ar:'أثينا سنووي', en:'Athena Snowy', family:'gray', dur:'monthly', type:'optical', price:200, slug:'athena-snowy', n:1 },
    { id:'fresh-lady-aurora-silver', brand:'fresh-lady', ar:'أورورا سيلفر', en:'Aurora Silver', family:'gray', dur:'monthly', type:'optical', price:200, slug:'aurora-silver', n:1 },
    { id:'fresh-lady-ballet-gaze-giselle-grey', brand:'fresh-lady', ar:'باليه جيز جيزيل جراي', en:'Ballet Gaze Giselle Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'ballet-gaze-giselle-grey', n:2 },
    { id:'fresh-lady-cleopatra-gray', brand:'fresh-lady', ar:'كليوباترا جراي', en:'Cleopatra Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'cleopatra-gray', n:2, featured:true },
    { id:'fresh-lady-cocktail-vodka-lime-blue-gray', brand:'fresh-lady', ar:'كوكتيل فودكا لايم بلو جراي', en:'Cocktail Vodka Lime Blue Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'cocktail-vodka-lime-blue-gray', n:2 },
    { id:'fresh-lady-dark-gray-w6', brand:'fresh-lady', ar:'دارك جراي W6', en:'Dark Gray W6', family:'gray', dur:'monthly', type:'optical', price:200, slug:'dark-gray-w6', n:2 },
    { id:'fresh-lady-diamond-grey', brand:'fresh-lady', ar:'دايموند جراي', en:'Diamond Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'diamond-grey', n:1 },
    { id:'fresh-lady-dubai-gray', brand:'fresh-lady', ar:'دبي جراي', en:'Dubai Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'dubai-gray', n:2, featured:true },
    { id:'fresh-lady-glitter-gray', brand:'fresh-lady', ar:'جليتر جراي', en:'Glitter Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'glitter-gray', n:1 },
    { id:'fresh-lady-hidro-hd-grafite', brand:'fresh-lady', ar:'هيدرو إتش دي جرافيت', en:'Hidro HD Grafite', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-grafite', n:1 },
    { id:'fresh-lady-hidro-hd-ice', brand:'fresh-lady', ar:'هيدرو إتش دي آيس', en:'Hidro HD Ice', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-ice', n:1 },
    { id:'fresh-lady-hidrocor-cristal', brand:'fresh-lady', ar:'هيدروكور كريستال', en:'Hidrocor Cristal', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidrocor-cristal', n:1 },
    { id:'fresh-lady-hidrocor-grafite', brand:'fresh-lady', ar:'هيدروكور جرافيت', en:'Hidrocor Grafite', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidrocor-grafite', n:2 },
    { id:'fresh-lady-hidrocor-ice', brand:'fresh-lady', ar:'هيدروكور آيس', en:'Hidrocor Ice', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidrocor-ice', n:1 },
    { id:'fresh-lady-hidrocor-ice-gray-k41', brand:'fresh-lady', ar:'هيدروكور آيس جراي K41', en:'Hidrocor Ice Gray K41', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidrocor-ice-gray-k41', n:2 },
    { id:'fresh-lady-hidrocor-quartzo', brand:'fresh-lady', ar:'هيدروكور كوارتزو', en:'Hidrocor Quartzo', family:'gray', dur:'monthly', type:'optical', price:200, slug:'hidrocor-quartzo', n:1 },
    { id:'fresh-lady-holesale-pony-gray-ns6', brand:'fresh-lady', ar:'Holesale بوني جراي NS6', en:'Holesale PONY GRAY NS6', family:'gray', dur:'monthly', type:'optical', price:200, slug:'holesale-pony-gray-ns6', n:2 },
    { id:'fresh-lady-i-heart-iris-gray', brand:'fresh-lady', ar:'آي هارت آيريس جراي', en:'I Heart Iris Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'i-heart-iris-gray', n:1 },
    { id:'fresh-lady-lareen-crystal', brand:'fresh-lady', ar:'لارين كريستال', en:'Lareen Crystal', family:'gray', dur:'monthly', type:'optical', price:200, slug:'lareen-crystal', n:1 },
    { id:'fresh-lady-lareen-venice', brand:'fresh-lady', ar:'لارين فينيس', en:'Lareen Venice', family:'gray', dur:'monthly', type:'optical', price:200, slug:'lareen-venice', n:1 },
    { id:'fresh-lady-lareen-wolf-grey', brand:'fresh-lady', ar:'لارين وولف جراي', en:'Lareen Wolf Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'lareen-wolf-grey', n:1 },
    { id:'fresh-lady-limestone-gray-ns23', brand:'fresh-lady', ar:'لايم ستون جراي NS23', en:'Limestone GRAY NS23', family:'gray', dur:'monthly', type:'optical', price:200, slug:'limestone-gray-ns23', n:2 },
    { id:'fresh-lady-lumirere-gray-k20', brand:'fresh-lady', ar:'لوميرير جراي K20', en:'Lumirere Gray K20', family:'gray', dur:'monthly', type:'optical', price:200, slug:'lumirere-gray-k20', n:1 },
    { id:'fresh-lady-mousse-grey', brand:'fresh-lady', ar:'موس جراي', en:'Mousse Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'mousse-grey', n:1 },
    { id:'fresh-lady-paris-gray-k35', brand:'fresh-lady', ar:'باريس جراي K35', en:'Paris Gray K35', family:'gray', dur:'monthly', type:'optical', price:200, slug:'paris-gray-k35', n:1 },
    { id:'fresh-lady-pearl-gray-natural', brand:'fresh-lady', ar:'بيرل جراي ناتشورال', en:'Pearl Gray Natural', family:'gray', dur:'monthly', type:'optical', price:200, slug:'pearl-gray-natural', n:2 },
    { id:'fresh-lady-polar-lights-blue-grey', brand:'fresh-lady', ar:'بولار لايتس بلو جراي', en:'Polar Lights Blue Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'polar-lights-blue-grey', n:1 },
    { id:'fresh-lady-polar-lights-grey', brand:'fresh-lady', ar:'بولار لايتس جراي', en:'Polar Lights Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'polar-lights-grey', n:1 },
    { id:'fresh-lady-queen-grey', brand:'fresh-lady', ar:'كوين جراي', en:'Queen Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'queen-grey', n:1 },
    { id:'fresh-lady-retro-marble', brand:'fresh-lady', ar:'ريترو ماربل', en:'Retro Marble', family:'gray', dur:'monthly', type:'optical', price:200, slug:'retro-marble', n:2 },
    { id:'fresh-lady-rococo-courtship-gray', brand:'fresh-lady', ar:'روكوكو كورتشيب جراي', en:'Rococo Courtship Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'rococo-courtship-gray', n:3 },
    { id:'fresh-lady-rococo-elegance-grey', brand:'fresh-lady', ar:'روكوكو إليجانس جراي', en:'Rococo Elegance Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'rococo-elegance-grey', n:2 },
    { id:'fresh-lady-rococo-triumph-grey', brand:'fresh-lady', ar:'روكوكو ترايمف جراي', en:'Rococo Triumph Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'rococo-triumph-grey', n:2 },
    { id:'fresh-lady-sea-gray', brand:'fresh-lady', ar:'سي جراي', en:'SEA Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'sea-gray', n:1 },
    { id:'fresh-lady-sea-gray-natural', brand:'fresh-lady', ar:'سي جراي ناتشورال', en:'SEA Gray Natural', family:'gray', dur:'monthly', type:'optical', price:200, slug:'sea-gray-natural', n:2 },
    { id:'fresh-lady-sailor-moon-gray', brand:'fresh-lady', ar:'سيلور مون جراي', en:'Sailor Moon Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'sailor-moon-gray', n:1 },
    { id:'fresh-lady-scandi-gray-natural', brand:'fresh-lady', ar:'سكاندي جراي ناتشورال', en:'Scandi Gray Natural', family:'gray', dur:'monthly', type:'optical', price:200, slug:'scandi-gray-natural', n:2 },
    { id:'fresh-lady-seafoam-grey', brand:'fresh-lady', ar:'سي فوم جراي', en:'Seafoam Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'seafoam-grey', n:1 },
    { id:'fresh-lady-sky-gray-k30', brand:'fresh-lady', ar:'سكاي جراي K30', en:'Sky Gray K30', family:'gray', dur:'monthly', type:'optical', price:200, slug:'sky-gray-k30', n:2 },
    { id:'fresh-lady-solotica-natural-cristal', brand:'fresh-lady', ar:'سولوتيكا ناتشورال كريستال', en:'Solotica Natural Cristal', family:'gray', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-cristal', n:1 },
    { id:'fresh-lady-solotica-natural-grafite', brand:'fresh-lady', ar:'سولوتيكا ناتشورال جرافيت', en:'Solotica Natural Grafite', family:'gray', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-grafite', n:1 },
    { id:'fresh-lady-solotica-natural-ice-natural', brand:'fresh-lady', ar:'سولوتيكا ناتشورال آيس ناتشورال', en:'Solotica Natural Ice Natural', family:'gray', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-ice-natural', n:1 },
    { id:'fresh-lady-spacewalk-saturn-gray', brand:'fresh-lady', ar:'سبيس ووك ساتورن جراي', en:'Spacewalk Saturn Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'spacewalk-saturn-gray', n:2 },
    { id:'fresh-lady-star-orbit-warm-gray', brand:'fresh-lady', ar:'ستار أوربت وورم جراي', en:'Star Orbit Warm Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'star-orbit-warm-gray', n:1 },
    { id:'fresh-lady-starshine-a-claros', brand:'fresh-lady', ar:'ستارشاين إيه كلاروس', en:'Starshine A.Claros', family:'gray', dur:'monthly', type:'optical', price:200, slug:'starshine-a-claros', n:1 },
    { id:'fresh-lady-starshine-a-gris', brand:'fresh-lady', ar:'ستارشاين إيه جري', en:'Starshine A.Gris', family:'gray', dur:'monthly', type:'optical', price:200, slug:'starshine-a-gris', n:1 },
    { id:'fresh-lady-starshine-ad-gray', brand:'fresh-lady', ar:'ستارشاين إيه دي جراي', en:'Starshine Ad.Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'starshine-ad-gray', n:1 },
    { id:'fresh-lady-starshine-whale', brand:'fresh-lady', ar:'ستارشاين ويل', en:'Starshine Whale', family:'gray', dur:'monthly', type:'optical', price:200, slug:'starshine-whale', n:1 },
    { id:'fresh-lady-stunna-girl-romona-grey', brand:'fresh-lady', ar:'ستونا جيرل رومونا جراي', en:'Stunna Girl Romona Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'stunna-girl-romona-grey', n:2, featured:true },
    { id:'fresh-lady-three-tone-crystal-grey', brand:'fresh-lady', ar:'ثري تون كريستال جراي', en:'Three Tone Crystal Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'three-tone-crystal-grey', n:1 },
    { id:'fresh-lady-three-tone-grey', brand:'fresh-lady', ar:'ثري تون جراي', en:'Three Tone Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'three-tone-grey', n:1 },
    { id:'fresh-lady-vika-tricolor-grey', brand:'fresh-lady', ar:'فيكا تراي كولور جراي', en:'Vika Tricolor Grey', family:'gray', dur:'monthly', type:'optical', price:200, slug:'vika-tricolor-grey', n:1 },
    { id:'fresh-lady-wildness-gray', brand:'fresh-lady', ar:'وايلدنس جراي', en:'Wildness Gray', family:'gray', dur:'monthly', type:'optical', price:200, slug:'wildness-gray', n:1 },
    { id:'fresh-lady-aloe-vera-ns24', brand:'fresh-lady', ar:'ألو فيرا NS24', en:'Aloe Vera NS24', family:'green', dur:'monthly', type:'optical', price:200, slug:'aloe-vera-ns24', n:2 },
    { id:'fresh-lady-butterfly-fairy-green', brand:'fresh-lady', ar:'باترفلاي فيري جرين', en:'Butterfly Fairy Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'butterfly-fairy-green', n:1 },
    { id:'fresh-lady-cocktail-mint-julep-green', brand:'fresh-lady', ar:'كوكتيل منت جوليب جرين', en:'Cocktail Mint Julep Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'cocktail-mint-julep-green', n:2 },
    { id:'fresh-lady-cocktail-vesper-martini-grey-green', brand:'fresh-lady', ar:'كوكتيل فيسبر مارتيني جراي جرين', en:'Cocktail Vesper Martini Grey Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'cocktail-vesper-martini-grey-green', n:1 },
    { id:'fresh-lady-electric-blink-green', brand:'fresh-lady', ar:'إلكتريك بلينك جرين', en:'Electric Blink Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'electric-blink-green', n:1 },
    { id:'fresh-lady-gem-green-me39', brand:'fresh-lady', ar:'جيم جرين ME39', en:'Gem Green ME39', family:'green', dur:'monthly', type:'optical', price:200, slug:'gem-green-me39', n:2 },
    { id:'fresh-lady-i-heart-iris-green', brand:'fresh-lady', ar:'آي هارت آيريس جرين', en:'I Heart Iris Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'i-heart-iris-green', n:1 },
    { id:'fresh-lady-la-girl-green', brand:'fresh-lady', ar:'لا جيرل جرين', en:'La Girl Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'la-girl-green', n:1 },
    { id:'fresh-lady-love-story-endorphin-green', brand:'fresh-lady', ar:'لاف ستوري إندورفين جرين', en:'Love Story Endorphin Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'love-story-endorphin-green', n:2 },
    { id:'fresh-lady-queen-green', brand:'fresh-lady', ar:'كوين جرين', en:'Queen Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'queen-green', n:1 },
    { id:'fresh-lady-rococo-encounter-green', brand:'fresh-lady', ar:'روكوكو إنكاونتر جرين', en:'Rococo Encounter Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'rococo-encounter-green', n:3 },
    { id:'fresh-lady-rococo-infatuation-green', brand:'fresh-lady', ar:'روكوكو إنفاتشويشن جرين', en:'Rococo Infatuation Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'rococo-infatuation-green', n:2 },
    { id:'fresh-lady-rococo-joy-green', brand:'fresh-lady', ar:'روكوكو جوي جرين', en:'Rococo Joy Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'rococo-joy-green', n:2 },
    { id:'fresh-lady-rococo-marquise-green', brand:'fresh-lady', ar:'روكوكو ماركيز جرين', en:'Rococo Marquise Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'rococo-marquise-green', n:2 },
    { id:'fresh-lady-seafoam-green', brand:'fresh-lady', ar:'سي فوم جرين', en:'Seafoam Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'seafoam-green', n:1 },
    { id:'fresh-lady-solotica-natural-esmeral', brand:'fresh-lady', ar:'سولوتيكا ناتشورال إزميرالد', en:'Solotica Natural Esmeral', family:'green', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-esmeral', n:1 },
    { id:'fresh-lady-stunna-girl-kamille-green', brand:'fresh-lady', ar:'ستونا جيرل كاميل جرين', en:'Stunna Girl Kamille Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'stunna-girl-kamille-green', n:2 },
    { id:'fresh-lady-three-tone-emerald', brand:'fresh-lady', ar:'ثري تون إميرالد', en:'Three Tone Emerald', family:'green', dur:'monthly', type:'optical', price:200, slug:'three-tone-emerald', n:1 },
    { id:'fresh-lady-three-tone-green', brand:'fresh-lady', ar:'ثري تون جرين', en:'Three Tone Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'three-tone-green', n:1 },
    { id:'fresh-lady-three-tone-kallaite', brand:'fresh-lady', ar:'ثري تون كالايت', en:'Three Tone Kallaite', family:'green', dur:'monthly', type:'optical', price:200, slug:'three-tone-kallaite', n:1 },
    { id:'fresh-lady-urban-green', brand:'fresh-lady', ar:'أوربان جرين', en:'Urban Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'urban-green', n:2 },
    { id:'fresh-lady-vika-tricolor-green', brand:'fresh-lady', ar:'فيكا تراي كولور جرين', en:'Vika Tricolor Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'vika-tricolor-green', n:1 },
    { id:'fresh-lady-wildness-green', brand:'fresh-lady', ar:'وايلدنس جرين', en:'Wildness Green', family:'green', dur:'monthly', type:'optical', price:200, slug:'wildness-green', n:1 },
    { id:'fresh-lady-ballet-gaze-swan-lake-blue', brand:'fresh-lady', ar:'باليه جيز سوان ليك بلو', en:'Ballet Gaze Swan Lake Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'ballet-gaze-swan-lake-blue', n:2 },
    { id:'fresh-lady-cocktail-blue-margarita-blue', brand:'fresh-lady', ar:'كوكتيل بلو مارجريتا بلو', en:'Cocktail Blue Margarita Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'cocktail-blue-margarita-blue', n:2 },
    { id:'fresh-lady-electric-blink-blue', brand:'fresh-lady', ar:'إلكتريك بلينك بلو', en:'Electric Blink Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'electric-blink-blue', n:1 },
    { id:'fresh-lady-fruit-juice-blue', brand:'fresh-lady', ar:'فروت جوس بلو', en:'Fruit Juice Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'fruit-juice-blue', n:1 },
    { id:'fresh-lady-hidro-hd-azul', brand:'fresh-lady', ar:'هيدرو إتش دي أزول', en:'Hidro HD Azul', family:'blue', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-azul', n:1 },
    { id:'fresh-lady-hidro-hd-marine', brand:'fresh-lady', ar:'هيدرو إتش دي مارين', en:'Hidro HD Marine', family:'blue', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-marine', n:1 },
    { id:'fresh-lady-hidrocor-azul', brand:'fresh-lady', ar:'هيدروكور أزول', en:'Hidrocor Azul', family:'blue', dur:'monthly', type:'optical', price:200, slug:'hidrocor-azul', n:1 },
    { id:'fresh-lady-honolulu-blue-k47', brand:'fresh-lady', ar:'هونولولو بلو K47', en:'Honolulu Blue K47', family:'blue', dur:'monthly', type:'optical', price:200, slug:'honolulu-blue-k47', n:2 },
    { id:'fresh-lady-i-heart-iris-blue', brand:'fresh-lady', ar:'آي هارت آيريس بلو', en:'I Heart Iris Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'i-heart-iris-blue', n:1 },
    { id:'fresh-lady-la-girl-blue', brand:'fresh-lady', ar:'لا جيرل بلو', en:'La Girl Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'la-girl-blue', n:1 },
    { id:'fresh-lady-love-story-5-ht-dark-blue', brand:'fresh-lady', ar:'لاف ستوري ٥ إتش تي دارك بلو', en:'Love Story 5-HT Dark Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'love-story-5-ht-dark-blue', n:2 },
    { id:'fresh-lady-love-story-dopamine-light-blue', brand:'fresh-lady', ar:'لاف ستوري دوبامين لايت بلو', en:'Love Story Dopamine Light Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'love-story-dopamine-light-blue', n:2 },
    { id:'fresh-lady-mentha-blue-k44', brand:'fresh-lady', ar:'منتا بلو K44', en:'Mentha Blue K44', family:'blue', dur:'monthly', type:'optical', price:200, slug:'mentha-blue-k44', n:1 },
    { id:'fresh-lady-queen-blue', brand:'fresh-lady', ar:'كوين بلو', en:'Queen Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'queen-blue', n:1 },
    { id:'fresh-lady-rococo-flirting-blue', brand:'fresh-lady', ar:'روكوكو فليرتنج بلو', en:'Rococo Flirting Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'rococo-flirting-blue', n:3 },
    { id:'fresh-lady-rococo-passion-blue', brand:'fresh-lady', ar:'روكوكو باشون بلو', en:'Rococo Passion Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'rococo-passion-blue', n:2 },
    { id:'fresh-lady-sailor-moon-blue', brand:'fresh-lady', ar:'سيلور مون بلو', en:'Sailor Moon Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'sailor-moon-blue', n:1 },
    { id:'fresh-lady-seafoam-blue', brand:'fresh-lady', ar:'سي فوم بلو', en:'Seafoam Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'seafoam-blue', n:1 },
    { id:'fresh-lady-solotica-natural-azul-for', brand:'fresh-lady', ar:'سولوتيكا ناتشورال أزول For', en:'Solotica Natural Azul For', family:'blue', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-azul-for', n:1 },
    { id:'fresh-lady-solotica-natural-marine', brand:'fresh-lady', ar:'سولوتيكا ناتشورال مارين', en:'Solotica Natural Marine', family:'blue', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-marine', n:1 },
    { id:'fresh-lady-starshine-ad-blue', brand:'fresh-lady', ar:'ستارشاين إيه دي بلو', en:'Starshine Ad.Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'starshine-ad-blue', n:1 },
    { id:'fresh-lady-starshine-lolite', brand:'fresh-lady', ar:'ستارشاين لولايت', en:'Starshine Lolite', family:'blue', dur:'monthly', type:'optical', price:200, slug:'starshine-lolite', n:1 },
    { id:'fresh-lady-stunna-girl-chole-blue', brand:'fresh-lady', ar:'ستونا جيرل كلوي بلو', en:'Stunna Girl Chole Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'stunna-girl-chole-blue', n:2 },
    { id:'fresh-lady-three-tone-blue', brand:'fresh-lady', ar:'ثري تون بلو', en:'Three Tone Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'three-tone-blue', n:1 },
    { id:'fresh-lady-three-tone-ocean-blue', brand:'fresh-lady', ar:'ثري تون أوشن بلو', en:'Three Tone Ocean Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'three-tone-ocean-blue', n:1 },
    { id:'fresh-lady-three-tone-sky-blue', brand:'fresh-lady', ar:'ثري تون سكاي بلو', en:'Three Tone Sky Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'three-tone-sky-blue', n:1 },
    { id:'fresh-lady-tiffany-blue-k32', brand:'fresh-lady', ar:'تيفاني بلو K32', en:'Tiffany Blue K32', family:'blue', dur:'monthly', type:'optical', price:200, slug:'tiffany-blue-k32', n:2 },
    { id:'fresh-lady-vika-tricolor-blue', brand:'fresh-lady', ar:'فيكا تراي كولور بلو', en:'Vika Tricolor Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'vika-tricolor-blue', n:1 },
    { id:'fresh-lady-wildness-blue', brand:'fresh-lady', ar:'وايلدنس بلو', en:'Wildness Blue', family:'blue', dur:'monthly', type:'optical', price:200, slug:'wildness-blue', n:1 },
    { id:'fresh-lady-athena-caramel', brand:'fresh-lady', ar:'أثينا كراميل', en:'Athena Caramel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'athena-caramel', n:1 },
    { id:'fresh-lady-athena-honey', brand:'fresh-lady', ar:'أثينا هني', en:'Athena Honey', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'athena-honey', n:1 },
    { id:'fresh-lady-aurora-gold', brand:'fresh-lady', ar:'أورورا جولد', en:'Aurora Gold', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'aurora-gold', n:1 },
    { id:'fresh-lady-cleopatra-hazel', brand:'fresh-lady', ar:'كليوباترا هيزل', en:'Cleopatra Hazel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'cleopatra-hazel', n:2 },
    { id:'fresh-lady-diva-butter-ns16', brand:'fresh-lady', ar:'ديفا بتر NS16', en:'DIVA BUTTER NS16', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'diva-butter-ns16', n:1 },
    { id:'fresh-lady-diamond-ember-k36', brand:'fresh-lady', ar:'دايموند إمبر K36', en:'Diamond Ember K36', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'diamond-ember-k36', n:2 },
    { id:'fresh-lady-fantasy-desert', brand:'fresh-lady', ar:'فانتازي ديزرت', en:'Fantasy Desert', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'fantasy-desert', n:1 },
    { id:'fresh-lady-glitter-hazel', brand:'fresh-lady', ar:'جليتر هيزل', en:'Glitter Hazel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'glitter-hazel', n:1 },
    { id:'fresh-lady-gorgeous-three-tone', brand:'fresh-lady', ar:'جورجس ثري تون', en:'Gorgeous Three Tone', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'gorgeous-three-tone', n:2 },  /* family:auto */
    { id:'fresh-lady-hidro-hd-ambar', brand:'fresh-lady', ar:'هيدرو إتش دي أمبر', en:'Hidro HD Ambar', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-ambar', n:1 },
    { id:'fresh-lady-hidro-hd-avela', brand:'fresh-lady', ar:'هيدرو إتش دي أفيلا', en:'Hidro HD Avela', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-avela', n:1 },
    { id:'fresh-lady-hidro-hd-mel', brand:'fresh-lady', ar:'هيدرو إتش دي ميل', en:'Hidro HD Mel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-mel', n:1 },
    { id:'fresh-lady-hidro-hd-ocre', brand:'fresh-lady', ar:'هيدرو إتش دي أوكر', en:'Hidro HD Ocre', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidro-hd-ocre', n:1 },
    { id:'fresh-lady-hidrocor-avela', brand:'fresh-lady', ar:'هيدروكور أفيلا', en:'Hidrocor Avela', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidrocor-avela', n:2 },
    { id:'fresh-lady-hidrocor-mel', brand:'fresh-lady', ar:'هيدروكور ميل', en:'Hidrocor Mel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidrocor-mel', n:1, featured:true },
    { id:'fresh-lady-hidrocor-ocre', brand:'fresh-lady', ar:'هيدروكور أوكر', en:'Hidrocor Ocre', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'hidrocor-ocre', n:2 },
    { id:'fresh-lady-honey-f01-three-tones', brand:'fresh-lady', ar:'هني F01 ثري Tones', en:'Honey F01 Three Tones', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'honey-f01-three-tones', n:1 },
    { id:'fresh-lady-honey-mo-05', brand:'fresh-lady', ar:'هني Mo 05', en:'Honey Mo-05', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'honey-mo-05', n:2 },
    { id:'fresh-lady-lareen-golden-hazel', brand:'fresh-lady', ar:'لارين جولدن هيزل', en:'Lareen Golden Hazel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'lareen-golden-hazel', n:1 },
    { id:'fresh-lady-ocre-brown-hazel-hi2', brand:'fresh-lady', ar:'أوكر براون هيزل HI2', en:'OCRE Brown/hazel Hi2', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'ocre-brown-hazel-hi2', n:2 },
    { id:'fresh-lady-solotica-natural-ambar', brand:'fresh-lady', ar:'سولوتيكا ناتشورال أمبر', en:'Solotica Natural Ambar', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-ambar', n:1 },
    { id:'fresh-lady-solotica-natural-avela', brand:'fresh-lady', ar:'سولوتيكا ناتشورال أفيلا', en:'Solotica Natural Avela', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-avela', n:1 },
    { id:'fresh-lady-solotica-natural-mel', brand:'fresh-lady', ar:'سولوتيكا ناتشورال ميل', en:'Solotica Natural Mel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'solotica-natural-mel', n:1 },
    { id:'fresh-lady-spacewalk-jupiter-amber', brand:'fresh-lady', ar:'سبيس ووك جوبيتر أمبر', en:'Spacewalk Jupiter Amber', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'spacewalk-jupiter-amber', n:2 },
    { id:'fresh-lady-star-orbit-brown-gold', brand:'fresh-lady', ar:'ستار أوربت براون جولد', en:'Star Orbit Brown Gold', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'star-orbit-brown-gold', n:1 },
    { id:'fresh-lady-star-orbit-caramel-stone', brand:'fresh-lady', ar:'ستار أوربت كراميل ستون', en:'Star Orbit Caramel Stone', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'star-orbit-caramel-stone', n:1 },
    { id:'fresh-lady-starshine-ad-arena', brand:'fresh-lady', ar:'ستارشاين إيه دي أرينا', en:'Starshine Ad.Arena', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'starshine-ad-arena', n:1 },
    { id:'fresh-lady-swan-swarovski-k39', brand:'fresh-lady', ar:'سوان سواروفسكي K39', en:'Swan,swarovski K39', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'swan-swarovski-k39', n:2 },  /* family:auto */
    { id:'fresh-lady-three-tone-hazel', brand:'fresh-lady', ar:'ثري تون هيزل', en:'Three Tone Hazel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'three-tone-hazel', n:1 },
    { id:'fresh-lady-three-tone-honey', brand:'fresh-lady', ar:'ثري تون هني', en:'Three Tone Honey', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'three-tone-honey', n:1 },
    { id:'fresh-lady-vision-hazel', brand:'fresh-lady', ar:'فيجن هيزل', en:'Vision Hazel', family:'hazel', dur:'monthly', type:'optical', price:200, slug:'vision-hazel', n:1 },
    { id:'fresh-lady-athena-brown', brand:'fresh-lady', ar:'أثينا براون', en:'Athena Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'athena-brown', n:1 },
    { id:'fresh-lady-athena-caffe', brand:'fresh-lady', ar:'أثينا كافيه', en:'Athena Caffe', family:'brown', dur:'monthly', type:'optical', price:200, slug:'athena-caffe', n:1 },
    { id:'fresh-lady-athena-latte', brand:'fresh-lady', ar:'أثينا لاتيه', en:'Athena Latte', family:'brown', dur:'monthly', type:'optical', price:200, slug:'athena-latte', n:1 },
    { id:'fresh-lady-ballet-gaze-nutcracker-brown', brand:'fresh-lady', ar:'باليه جيز نات كراكر براون', en:'Ballet Gaze Nutcracker Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'ballet-gaze-nutcracker-brown', n:2 },
    { id:'fresh-lady-butter-cup-brown', brand:'fresh-lady', ar:'بتر كب براون', en:'Butter Cup Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'butter-cup-brown', n:2 },
    { id:'fresh-lady-cherry-lumirere-brown-k40', brand:'fresh-lady', ar:'شيري لوميرير براون K40', en:'CHERRY Lumirere Brown K40', family:'brown', dur:'monthly', type:'optical', price:200, slug:'cherry-lumirere-brown-k40', n:2 },
    { id:'fresh-lady-cocktail-tequila-sunrise-brown', brand:'fresh-lady', ar:'كوكتيل تيكيلا صن رايز براون', en:'Cocktail Tequila Sunrise Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'cocktail-tequila-sunrise-brown', n:2 },
    { id:'fresh-lady-diamond-black', brand:'fresh-lady', ar:'دايموند بلاك', en:'Diamond Black', family:'brown', dur:'monthly', type:'optical', price:200, slug:'diamond-black', n:1 },
    { id:'fresh-lady-diamond-brown', brand:'fresh-lady', ar:'دايموند براون', en:'Diamond Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'diamond-brown', n:1 },
    { id:'fresh-lady-dubai-brown', brand:'fresh-lady', ar:'دبي براون', en:'Dubai Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'dubai-brown', n:2 },
    { id:'fresh-lady-electric-blink-brown', brand:'fresh-lady', ar:'إلكتريك بلينك براون', en:'Electric Blink Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'electric-blink-brown', n:1 },
    { id:'fresh-lady-fruit-juice-brown', brand:'fresh-lady', ar:'فروت جوس براون', en:'Fruit Juice Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'fruit-juice-brown', n:1 },
    { id:'fresh-lady-glacier-brown', brand:'fresh-lady', ar:'جلاسير براون', en:'Glacier Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'glacier-brown', n:1 },
    { id:'fresh-lady-glitter', brand:'fresh-lady', ar:'جليتر', en:'Glitter', family:'brown', dur:'monthly', type:'optical', price:200, slug:'glitter', n:2 },  /* family:auto */
    { id:'fresh-lady-grapefruit', brand:'fresh-lady', ar:'جريب فروت', en:'Grapefruit', family:'brown', dur:'monthly', type:'optical', price:200, slug:'grapefruit', n:1 },  /* family:auto */
    { id:'fresh-lady-i-heart-iris-brown', brand:'fresh-lady', ar:'آي هارت آيريس براون', en:'I Heart Iris Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'i-heart-iris-brown', n:1 },
    { id:'fresh-lady-karst-sun-kiss-k38', brand:'fresh-lady', ar:'كارست صن كيس K38', en:'Karst,sun Kiss K38', family:'brown', dur:'monthly', type:'optical', price:200, slug:'karst-sun-kiss-k38', n:1 },  /* family:auto */
    { id:'fresh-lady-la-girl-brown', brand:'fresh-lady', ar:'لا جيرل براون', en:'La Girl Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'la-girl-brown', n:1 },
    { id:'fresh-lady-lareen-victoria', brand:'fresh-lady', ar:'لارين فيكتوريا', en:'Lareen Victoria', family:'brown', dur:'monthly', type:'optical', price:200, slug:'lareen-victoria', n:1 },  /* family:auto */
    { id:'fresh-lady-love-story-pea-brown', brand:'fresh-lady', ar:'لاف ستوري بي إي إيه براون', en:'Love Story PEA Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'love-story-pea-brown', n:2 },
    { id:'fresh-lady-milk-coffee-natural', brand:'fresh-lady', ar:'ميلك كوفي ناتشورال', en:'Milk Coffee Natural', family:'brown', dur:'monthly', type:'optical', price:200, slug:'milk-coffee-natural', n:2 },
    { id:'fresh-lady-mousse-brown', brand:'fresh-lady', ar:'موس براون', en:'Mousse Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'mousse-brown', n:1 },
    { id:'fresh-lady-mousse-choco', brand:'fresh-lady', ar:'موس شوكو', en:'Mousse Choco', family:'brown', dur:'monthly', type:'optical', price:200, slug:'mousse-choco', n:1 },
    { id:'fresh-lady-nebula-two-tone', brand:'fresh-lady', ar:'نيبولا تو تون', en:'Nebula Two Tone', family:'brown', dur:'monthly', type:'optical', price:200, slug:'nebula-two-tone', n:2 },  /* family:auto */
    { id:'fresh-lady-opera-two-tone', brand:'fresh-lady', ar:'أوبرا تو تون', en:'Opera Two Tone', family:'brown', dur:'monthly', type:'optical', price:200, slug:'opera-two-tone', n:2 },  /* family:auto */
    { id:'fresh-lady-polar-lights-brown', brand:'fresh-lady', ar:'بولار لايتس براون', en:'Polar Lights Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'polar-lights-brown', n:1 },
    { id:'fresh-lady-queen-brown', brand:'fresh-lady', ar:'كوين براون', en:'Queen Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'queen-brown', n:1 },
    { id:'fresh-lady-queen-chocolate', brand:'fresh-lady', ar:'كوين شوكولاتة', en:'Queen Chocolate', family:'brown', dur:'monthly', type:'optical', price:200, slug:'queen-chocolate', n:1 },
    { id:'fresh-lady-retro-hawaii', brand:'fresh-lady', ar:'ريترو هاواي', en:'Retro Hawaii', family:'brown', dur:'monthly', type:'optical', price:200, slug:'retro-hawaii', n:2 },  /* family:auto */
    { id:'fresh-lady-rococo-adoration-brown', brand:'fresh-lady', ar:'روكوكو أدوريشن براون', en:'Rococo Adoration Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'rococo-adoration-brown', n:2 },
    { id:'fresh-lady-rococo-love-letter-brown', brand:'fresh-lady', ar:'روكوكو لاف ليتر براون', en:'Rococo Love Letter Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'rococo-love-letter-brown', n:2 },
    { id:'fresh-lady-rococo-madame-brown', brand:'fresh-lady', ar:'روكوكو مادام براون', en:'Rococo Madame Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'rococo-madame-brown', n:2 },
    { id:'fresh-lady-spacewalk-mars-rust', brand:'fresh-lady', ar:'سبيس ووك مارس رست', en:'Spacewalk Mars Rust', family:'brown', dur:'monthly', type:'optical', price:200, slug:'spacewalk-mars-rust', n:2 },
    { id:'fresh-lady-star-orbit-burned-cinamon', brand:'fresh-lady', ar:'ستار أوربت بيرند سينامون', en:'Star Orbit Burned Cinamon', family:'brown', dur:'monthly', type:'optical', price:200, slug:'star-orbit-burned-cinamon', n:1 },
    { id:'fresh-lady-star-orbit-dark-sepia', brand:'fresh-lady', ar:'ستار أوربت دارك سيبيا', en:'Star Orbit Dark Sepia', family:'brown', dur:'monthly', type:'optical', price:200, slug:'star-orbit-dark-sepia', n:1 },
    { id:'fresh-lady-star-orbit-mocca', brand:'fresh-lady', ar:'ستار أوربت موكا', en:'Star Orbit Mocca', family:'brown', dur:'monthly', type:'optical', price:200, slug:'star-orbit-mocca', n:1 },
    { id:'fresh-lady-starshine-a-tan', brand:'fresh-lady', ar:'ستارشاين إيه تان', en:'Starshine A.Tan', family:'brown', dur:'monthly', type:'optical', price:200, slug:'starshine-a-tan', n:1 },
    { id:'fresh-lady-starshine-cinnamon', brand:'fresh-lady', ar:'ستارشاين سينامون', en:'Starshine Cinnamon', family:'brown', dur:'monthly', type:'optical', price:200, slug:'starshine-cinnamon', n:1 },
    { id:'fresh-lady-starshine-fonesta', brand:'fresh-lady', ar:'ستارشاين فونيستا', en:'Starshine Fonesta', family:'brown', dur:'monthly', type:'optical', price:200, slug:'starshine-fonesta', n:1 },  /* family:auto */
    { id:'fresh-lady-stunna-girl-nadine-brown', brand:'fresh-lady', ar:'ستونا جيرل نادين براون', en:'Stunna Girl Nadine Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'stunna-girl-nadine-brown', n:2 },
    { id:'fresh-lady-three-tone-brown', brand:'fresh-lady', ar:'ثري تون براون', en:'Three Tone Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'three-tone-brown', n:1 },
    { id:'fresh-lady-wildness-brown', brand:'fresh-lady', ar:'وايلدنس براون', en:'Wildness Brown', family:'brown', dur:'monthly', type:'optical', price:200, slug:'wildness-brown', n:1 },
    { id:'fresh-lady-diamond-purple', brand:'fresh-lady', ar:'دايموند بيربل', en:'Diamond Purple', family:'purple', dur:'monthly', type:'optical', price:200, slug:'diamond-purple', n:1 },
    { id:'fresh-lady-electric-blink-purple', brand:'fresh-lady', ar:'إلكتريك بلينك بيربل', en:'Electric Blink Purple', family:'purple', dur:'monthly', type:'optical', price:200, slug:'electric-blink-purple', n:1 },
    { id:'fresh-lady-fruit-juice-violet', brand:'fresh-lady', ar:'فروت جوس فيوليت', en:'Fruit Juice Violet', family:'purple', dur:'monthly', type:'optical', price:200, slug:'fruit-juice-violet', n:1 },
    { id:'fresh-lady-mousse-pink', brand:'fresh-lady', ar:'موس بينك', en:'Mousse Pink', family:'purple', dur:'monthly', type:'optical', price:200, slug:'mousse-pink', n:1 },
    { id:'fresh-lady-sailor-moon-violet', brand:'fresh-lady', ar:'سيلور مون فيوليت', en:'Sailor Moon Violet', family:'purple', dur:'monthly', type:'optical', price:200, slug:'sailor-moon-violet', n:1 },
    { id:'fresh-lady-vika-tricolor-purple', brand:'fresh-lady', ar:'فيكا تراي كولور بيربل', en:'Vika Tricolor Purple', family:'purple', dur:'monthly', type:'optical', price:200, slug:'vika-tricolor-purple', n:1 },
    { id:'fresh-lady-violette', brand:'fresh-lady', ar:'فيوليت', en:'Violette', family:'purple', dur:'monthly', type:'optical', price:200, slug:'violette', n:1 },
    { id:'fresh-lady-bella-yellow', brand:'fresh-lady', ar:'بيلا يلو', en:'Bella Yellow', family:'yellow', dur:'monthly', type:'optical', price:200, slug:'bella-yellow', n:1 },
    { id:'fresh-lady-polar-lights-yellow', brand:'fresh-lady', ar:'بولار لايتس يلو', en:'Polar Lights Yellow', family:'yellow', dur:'monthly', type:'optical', price:200, slug:'polar-lights-yellow', n:1 },
    { id:'fresh-lady-vika-tricolor-yellow', brand:'fresh-lady', ar:'فيكا تراي كولور يلو', en:'Vika Tricolor Yellow', family:'yellow', dur:'monthly', type:'optical', price:200, slug:'vika-tricolor-yellow', n:1 }
,

    /* ---------- Dahab — تجميلي: شهري 300 / سنوي 1000 · نظر: +150 (450/1150) ---------- */
    { id:'dahab-black', brand:'dahab', ar:'بلاك', en:'Black', family:'gray', dur:'both', type:'optical', price:300, slug:'black', n:4 },
    { id:'dahab-diamond', brand:'dahab', ar:'دايموند', en:'Diamond', family:'gray', dur:'both', type:'optical', price:300, slug:'diamond', n:4 },
    { id:'dahab-grayish', brand:'dahab', ar:'جرايش', en:'Grayish', family:'gray', dur:'both', type:'optical', price:300, slug:'grayish', n:4 },
    { id:'dahab-ice', brand:'dahab', ar:'آيس', en:'Ice', family:'gray', dur:'both', type:'optical', price:300, slug:'ice', n:4 },
    { id:'dahab-lumirere-gray', brand:'dahab', ar:'لوميرير جراي', en:'Lumirere Gray', family:'gray', dur:'both', type:'optical', price:300, slug:'lumirere-gray', n:4, featured:true },
    { id:'dahab-marbel', brand:'dahab', ar:'ماربل', en:'Marbel', family:'gray', dur:'both', type:'optical', price:300, slug:'marbel', n:2 },
    { id:'dahab-natural-gray', brand:'dahab', ar:'ناتشورال جراي', en:'Natural Gray', family:'gray', dur:'both', type:'optical', price:300, slug:'natural-gray', n:4 },
    { id:'dahab-perle', brand:'dahab', ar:'بيرل', en:'Perle', family:'gray', dur:'both', type:'optical', price:300, slug:'perle', n:4 },
    { id:'dahab-sabrin-gray', brand:'dahab', ar:'صابرين جراي', en:'Sabrin Gray', family:'gray', dur:'both', type:'optical', price:300, slug:'sabrin-gray', n:4 },
    { id:'dahab-sabrin-soul', brand:'dahab', ar:'صابرين سول', en:'Sabrin Soul', family:'gray', dur:'both', type:'optical', price:300, slug:'sabrin-soul', n:4 },  /* family:auto — راجعه */
    { id:'dahab-smokey', brand:'dahab', ar:'سموكي', en:'Smokey', family:'gray', dur:'both', type:'optical', price:300, slug:'smokey', n:2 },
    { id:'dahab-swarovski', brand:'dahab', ar:'سواروفسكي', en:'Swarovski', family:'gray', dur:'both', type:'optical', price:300, slug:'swarovski', n:4 },
    { id:'dahab-khaki', brand:'dahab', ar:'كاكي', en:'Khaki', family:'green', dur:'both', type:'optical', price:300, slug:'khaki', n:4 },
    { id:'dahab-lumirere-green', brand:'dahab', ar:'لوميرير جرين', en:'Lumirere Green', family:'green', dur:'both', type:'optical', price:300, slug:'lumirere-green', n:4 },
    { id:'dahab-mentha', brand:'dahab', ar:'منتا', en:'Mentha', family:'green', dur:'both', type:'optical', price:300, slug:'mentha', n:3 },
    { id:'dahab-natural-green', brand:'dahab', ar:'ناتشورال جرين', en:'Natural Green', family:'green', dur:'both', type:'optical', price:300, slug:'natural-green', n:4 },
    { id:'dahab-olive', brand:'dahab', ar:'أوليف', en:'Olive', family:'green', dur:'both', type:'optical', price:300, slug:'olive', n:4 },
    { id:'dahab-sabrin-gray-green', brand:'dahab', ar:'صابرين جراي جرين', en:'Sabrin Gray Green', family:'green', dur:'both', type:'optical', price:300, slug:'sabrin-gray-green', n:4 },
    { id:'dahab-aqua', brand:'dahab', ar:'أكوا', en:'Aqua', family:'blue', dur:'both', type:'optical', price:300, slug:'aqua', n:4 },
    { id:'dahab-lumirere-blue', brand:'dahab', ar:'لوميرير بلو', en:'Lumirere Blue', family:'blue', dur:'both', type:'optical', price:300, slug:'lumirere-blue', n:4 },
    { id:'dahab-natural-blue', brand:'dahab', ar:'ناتشورال بلو', en:'Natural Blue', family:'blue', dur:'both', type:'optical', price:300, slug:'natural-blue', n:4 },
    { id:'dahab-sky', brand:'dahab', ar:'سكاي', en:'Sky', family:'blue', dur:'both', type:'optical', price:300, slug:'sky', n:4 },
    { id:'dahab-tiffany-blue', brand:'dahab', ar:'تيفاني بلو', en:'Tiffany Blue', family:'blue', dur:'both', type:'optical', price:300, slug:'tiffany-blue', n:4 },
    { id:'dahab-topaz', brand:'dahab', ar:'توباز', en:'Topaz', family:'blue', dur:'both', type:'optical', price:300, slug:'topaz', n:4 },
    { id:'dahab-alaska', brand:'dahab', ar:'ألاسكا', en:'Alaska', family:'hazel', dur:'both', type:'optical', price:300, slug:'alaska', n:4 },  /* family:auto — راجعه */
    { id:'dahab-caramel', brand:'dahab', ar:'كراميل', en:'Caramel', family:'hazel', dur:'both', type:'optical', price:300, slug:'caramel', n:2 },
    { id:'dahab-cat-eye', brand:'dahab', ar:'كات آي', en:'Cat Eye', family:'hazel', dur:'both', type:'optical', price:300, slug:'cat-eye', n:4 },
    { id:'dahab-creamy', brand:'dahab', ar:'كريمي', en:'Creamy', family:'hazel', dur:'both', type:'optical', price:300, slug:'creamy', n:4 },
    { id:'dahab-gold', brand:'dahab', ar:'جولد', en:'Gold', family:'hazel', dur:'both', type:'optical', price:300, slug:'gold', n:1 },
    { id:'dahab-hawaii', brand:'dahab', ar:'هاواي', en:'Hawaii', family:'hazel', dur:'both', type:'optical', price:300, slug:'hawaii', n:3 },  /* family:auto — راجعه */
    { id:'dahab-hind', brand:'dahab', ar:'هند', en:'Hind', family:'hazel', dur:'both', type:'optical', price:300, slug:'hind', n:4 },  /* family:auto — راجعه */
    { id:'dahab-honey', brand:'dahab', ar:'هني', en:'Honey', family:'hazel', dur:'both', type:'optical', price:300, slug:'honey', n:4, featured:true },
    { id:'dahab-kaf', brand:'dahab', ar:'كاف', en:'Kaf', family:'hazel', dur:'both', type:'optical', price:300, slug:'kaf', n:2 },  /* family:auto — راجعه */
    { id:'dahab-lumirere-hazel', brand:'dahab', ar:'لوميرير هيزل', en:'Lumirere Hazel', family:'hazel', dur:'both', type:'optical', price:300, slug:'lumirere-hazel', n:4 },
    { id:'dahab-mix', brand:'dahab', ar:'ميكس', en:'Mix', family:'hazel', dur:'both', type:'optical', price:300, slug:'mix', n:2 },  /* family:auto — راجعه */
    { id:'dahab-natural-hazel', brand:'dahab', ar:'ناتشورال هيزل', en:'Natural Hazel', family:'hazel', dur:'both', type:'optical', price:300, slug:'natural-hazel', n:4, featured:true },
    { id:'dahab-rain', brand:'dahab', ar:'رين', en:'Rain', family:'hazel', dur:'both', type:'optical', price:300, slug:'rain', n:4 },  /* family:auto — راجعه */
    { id:'dahab-sun-kiss', brand:'dahab', ar:'صن كيس', en:'Sun Kiss', family:'hazel', dur:'both', type:'optical', price:300, slug:'sun-kiss', n:4 },
    { id:'dahab-argan', brand:'dahab', ar:'أرجان', en:'Argan', family:'brown', dur:'both', type:'optical', price:300, slug:'argan', n:3 },
    { id:'dahab-brown', brand:'dahab', ar:'براون', en:'Brown', family:'brown', dur:'both', type:'optical', price:300, slug:'brown', n:2 },
    { id:'dahab-brownish', brand:'dahab', ar:'براونش', en:'Brownish', family:'brown', dur:'both', type:'optical', price:300, slug:'brownish', n:2 },
    { id:'dahab-cappuccino', brand:'dahab', ar:'كابتشينو', en:'Cappuccino', family:'brown', dur:'both', type:'optical', price:300, slug:'cappuccino', n:4, featured:true },
    { id:'dahab-lumirere-brown', brand:'dahab', ar:'لوميرير براون', en:'Lumirere Brown', family:'brown', dur:'both', type:'optical', price:300, slug:'lumirere-brown', n:4 },
    { id:'dahab-marron', brand:'dahab', ar:'مارون', en:'Marron', family:'brown', dur:'both', type:'optical', price:300, slug:'marron', n:2 },
    { id:'dahab-medusa', brand:'dahab', ar:'ميدوزا', en:'Medusa', family:'brown', dur:'both', type:'optical', price:300, slug:'medusa', n:4 },  /* family:auto — راجعه */
    { id:'dahab-solitaire', brand:'dahab', ar:'سوليتير', en:'Solitaire', family:'brown', dur:'both', type:'optical', price:300, slug:'solitaire', n:4 },  /* family:auto — راجعه */
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

  /* السلة ممكن تبعت id مركّب للمتغيرات (مثال: 'urban-layer-siri-gray:yearly:-2.25/-3.00')
     الدالة دي بترجع المنتج الأصلي سواء جالها id بسيط أو مركّب أو baseId */
  C.resolve = function(it){
    if(!it) return null;
    if(typeof it === 'string') return C.byId(it) || C.byId(String(it).split(':')[0]);
    return C.byId(it.baseId || it.id) || C.byId(String(it.id||'').split(':')[0]);
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
      var p = C.resolve(it);
      if(!p) return;
      var o = C.offerOf(p.brand);
      if(!o) return;
      /* لو العرض للتجميلي فقط، القطع الطبية (سعرها أعلى من الأساسي) متتحسبش فيه */
      if(o.cosmeticOnly && (it.price != null) && Number(it.price) !== Number(p.price)) return;
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
      var p = C.resolve(it);
      if(!p) return;
      var o = C.offerOf(p.brand);
      if(!o) return;
      /* لو العرض للتجميلي فقط، القطع الطبية (سعرها أعلى من الأساسي) متتحسبش فيه */
      if(o.cosmeticOnly && (it.price != null) && Number(it.price) !== Number(p.price)) return;
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
  /* أسعار المدد لبراند بيبيع نفس اللون بمدتين (زي Urban Layer) */
  C.pricingOf = function(p){
    var b = C.brandByKey[p.brand];
    return (b && b.pricing) ? b.pricing : null;   // {monthly, yearly} أو null
  };

  /* زيادة سعر النظر — بتتضاف على السعر الأساسي لما العميل يختار "طبي"
     فريش ليدي: 200 تجميلي → 350 طبي · دهب: 300/1000 تجميلي → 450/1150 طبي */
  C.opticalPlusOf = function(p){
    var b = C.brandByKey[p.brand];
    return (b && b.opticalPlus) ? b.opticalPlus : 0;
  };

  C.durAr    = function(p){ var d=C.durations[p.dur]; return d?d.ar:''; };
  C.durEn    = function(p){ var d=C.durations[p.dur]; return d?d.en:''; };
  C.durArAdj = function(p){ var d=C.durations[p.dur]; return d?d.arAdj:''; };
})();
