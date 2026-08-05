/* The Da Nang Nail Guide · danangnails.com · static generator (zero deps)
   node build.js → ./docs (GitHub Pages source, custom domain via CNAME)
   Journal is date-gated: entries dated after the build day stay unpublished
   and OFF the sitemap, so queued articles drip out on their own dates. */
const fs=require('fs'),crypto=require('crypto');
const {JOURNAL}=fs.existsSync('./journal.js')?require('./journal.js'):{JOURNAL:[]};

const DOMAIN="danangnails.com";
const SITE="https://"+DOMAIN;
const NAME="The Da Nang Nail Guide";
const NOW=process.env.BUILD_DATE?new Date(process.env.BUILD_DATE):new Date();
const TODAY=NOW.toISOString().slice(0,10);
const GSC=fs.existsSync('./gsc.txt')?fs.readFileSync('./gsc.txt','utf8').split('\n').map(s=>s.trim()).filter(s=>s&&!s.startsWith('#')):[];

/* Featured partner · every fact below is real and publicly verifiable. */
const PARTNER={name:"Reborn Nails & Retreat",street:"56 Châu Thị Vĩnh Tế",area:"My An, Ngũ Hành Sơn",
 rating:"4.9",count:"150+",hours:"Open daily 9:00 AM – 8:00 PM",
 maps:"https://maps.google.com/?cid=6841420951448602085",
 site:"https://rebornnaildanang.com/",whatsapp:"https://wa.me/84788668588"};

const OUT='./docs';
fs.rmSync(OUT,{recursive:true,force:true});
fs.mkdirSync(OUT+'/assets',{recursive:true});

const ld=o=>`<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const human=d=>new Date(d+'T00:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});

fs.writeFileSync(OUT+'/assets/style.css',`
:root{--bg:#FAF6F0;--ink:#221B14;--mut:#6E6259;--acc:#C4472B;--gold:#9C7A3C;--line:#E7DDD0;--card:#FFFDFA}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font:17px/1.65 "Source Sans 3",-apple-system,system-ui,sans-serif}
h1,h2,h3,.brand{font-family:"Fraunces",Georgia,serif;font-weight:600;line-height:1.15}
h1{font-size:clamp(34px,6vw,58px);letter-spacing:-.015em}
h2{font-size:clamp(24px,3.4vw,34px);margin:2.2em 0 .6em}
h3{font-size:20px;margin:1.4em 0 .4em}
p{margin:.8em 0}
a{color:var(--acc);text-decoration:none}a:hover{text-decoration:underline}
.wrap{max-width:1060px;margin:0 auto;padding:0 22px}
.nav{border-bottom:1px solid var(--line);background:var(--bg);position:sticky;top:0;z-index:9}
.navin{display:flex;align-items:center;gap:26px;padding:16px 0;flex-wrap:wrap}
.brand{font-size:21px;color:var(--ink)}
.brand b{color:var(--acc)}
.navlinks{display:flex;gap:20px;flex-wrap:wrap;font-size:15px;margin-left:auto}
.navlinks a{color:var(--ink)}.navlinks a.on{color:var(--acc);font-weight:600}
.hero{padding:74px 0 60px;border-bottom:1px solid var(--line);
 background:radial-gradient(60% 90% at 85% 10%,#F3E4D3 0%,transparent 60%),var(--bg)}
.kick{color:var(--gold);text-transform:uppercase;letter-spacing:.14em;font-size:13px;font-weight:700;margin-bottom:14px}
.sub{color:var(--mut);font-size:19px;max-width:640px;margin-top:16px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:22px;margin:26px 0}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px}
.card h3{margin-top:0}
.card .m{color:var(--mut);font-size:15px}
table{width:100%;border-collapse:collapse;margin:18px 0;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:16px}
th{background:#F1E7D9;text-align:left;padding:11px 14px;font-family:"Fraunces",serif}
td{padding:10px 14px;border-top:1px solid var(--line)}
td.r{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.note{background:#F6EDE1;border-left:3px solid var(--gold);border-radius:0 10px 10px 0;padding:16px 20px;margin:20px 0;font-size:16px}
.cta{display:inline-block;background:var(--acc);color:#fff;padding:13px 26px;border-radius:999px;font-weight:600;margin:6px 8px 6px 0}
.cta:hover{text-decoration:none;filter:brightness(1.07)}
.cta.ghost{background:transparent;color:var(--acc);border:1.5px solid var(--acc)}
.partner{background:linear-gradient(135deg,#2A211A,#3B2C1F);color:#F3EADF;border-radius:16px;padding:34px;margin:34px 0}
.partner h3{color:#fff;font-size:24px;margin:0 0 4px}
.partner .m{color:#C9BBA9;font-size:15px}
.partner .stars{color:#E8B04B;letter-spacing:2px}
.partner a.cta{background:#E8B04B;color:#221B14}
.tl{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:22px 26px;margin:24px 0}
.tl ul{margin:6px 0 0 20px}.tl li{margin:.35em 0}
.crumb{font-size:14px;color:var(--mut);padding:18px 0 0}
.arts{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:22px;margin:26px 0}
.art{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:8px}
.art .cat{color:var(--gold);font-size:13px;text-transform:uppercase;letter-spacing:.12em;font-weight:700}
.art h3{margin:0}.art .m{color:var(--mut);font-size:15px;margin-top:auto}
.foot{border-top:1px solid var(--line);margin-top:70px;padding:36px 0 46px;color:var(--mut);font-size:14px}
.foot a{color:var(--mut)}
.prose{max-width:720px}
.prose ul{margin:.6em 0 .6em 22px}
/* --- salon listings --- */
.tw{overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:var(--card);margin:20px 0}
table.salons{margin:0;border:0;border-radius:0;font-size:15.5px}
table.salons th{background:#F1E7D9;padding:12px 14px;white-space:nowrap}
table.salons td{padding:12px 14px;border-top:1px solid var(--line);vertical-align:top}
table.salons td.n,table.salons th.n{width:44px;text-align:center;color:var(--mut);font-variant-numeric:tabular-nums}
table.salons td.r{text-align:right;white-space:nowrap}
table.salons tr.hl{background:linear-gradient(90deg,#FFF6E8,#FFFDFA)}
table.salons tr.hl td{border-top-color:var(--gold)}
.addr{display:block;color:var(--mut);font-size:13.5px;margin-top:3px}
.rt{font-weight:700;color:var(--acc)}
.rc{color:var(--mut);font-size:13px}
.rc:before{content:"("}.rc:after{content:")"}
.tag-f{background:var(--gold);color:#fff;font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;
 padding:2px 7px;border-radius:99px;vertical-align:2px;font-weight:700}
.src{color:var(--mut);font-size:13.5px;margin:-6px 0 26px}
.chips{display:flex;flex-wrap:wrap;gap:9px;margin:20px 0 26px}
.chip{border:1px solid var(--line);background:var(--card);border-radius:99px;padding:7px 16px;font-size:14.5px;color:var(--ink);text-decoration:none}
.chip:hover{border-color:var(--acc);color:var(--acc);text-decoration:none}
.chip b{color:var(--mut);font-weight:400}
.stat{display:flex;flex-wrap:wrap;gap:14px;margin:26px 0}
.stat div{flex:1 1 150px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px 22px}
.stat b{display:block;font-family:"Fraunces",serif;font-size:30px;color:var(--acc);line-height:1}
.stat span{color:var(--mut);font-size:14px}
@media(max-width:640px){.navlinks{margin-left:0}.navlinks a{font-size:14px}}
`);

const head=(t,d,url,extra='')=>`<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t}</title>
<meta name="description" content="${d}">
<link rel="canonical" href="${url}">
${GSC.map(x=>`<meta name="google-site-verification" content="${x}">`).join('\n')}
<meta property="og:title" content="${t}"><meta property="og:description" content="${d}">
<meta property="og:type" content="website"><meta property="og:url" content="${url}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💅</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css">
${extra}
</head><body>`;

/* ---- Real salon data (Google Places, refreshed by fetch-places.js) ----
   Listings render only if the snapshot is fresh: Google's terms cap caching of
   Places content at 30 days, so stale data is dropped rather than published. */
const MAX_AGE_DAYS=30;
let PLACES=[],PLACES_DATE=null,PLACES_STALE=false;
if(fs.existsSync('./places.json')){
  const j=JSON.parse(fs.readFileSync('./places.json','utf8'));
  const age=Math.floor((new Date(TODAY)-new Date(j.fetchedAt))/86400000);
  PLACES_DATE=j.fetchedAt;
  if(age>MAX_AGE_DAYS){PLACES_STALE=true;console.warn(`  ! places.json is ${age} days old (>${MAX_AGE_DAYS}) — listings skipped, run fetch-places.js`);}
  else PLACES=j.places||[];
}
const FEATURED_ID="ChIJ4S2_LGIXQjER5UUCohuc8V4";
const featured=PLACES.find(p=>p.id===FEATURED_ID)||null;
const AREAS=[...new Set(PLACES.map(p=>p.area))].sort((a,b)=>
  PLACES.filter(p=>p.area===b).length-PLACES.filter(p=>p.area===a).length);
const aslug=a=>a.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const stars=r=>{const f=Math.round(r);return '★'.repeat(f)+'☆'.repeat(5-f);};

const salonRow=(p,i)=>`<tr${p.id===FEATURED_ID?' class="hl"':''}>
<td class="n">${i}</td>
<td><strong>${p.name}</strong>${p.id===FEATURED_ID?' <span class="tag-f">featured</span>':''}
 <span class="addr">${p.address}</span></td>
<td class="r"><span class="rt">${p.rating}</span> <span class="rc">${p.reviews}</span></td>
<td class="r"><a href="${p.maps}" rel="noopener nofollow">Map</a>${p.site?` · <a href="${p.site}" rel="noopener nofollow">Site</a>`:''}</td></tr>`;

const salonTable=(list)=>`<div class="tw"><table class="salons">
<tr><th class="n">#</th><th>Salon</th><th style="text-align:right">Google</th><th style="text-align:right">Links</th></tr>
${list.map((p,i)=>salonRow(p,i+1)).join('')}</table></div>
<p class="src">Ratings, addresses and links from Google · snapshot of ${human(PLACES_DATE)}. Ordered by rating, then review count · we do not sell position in this table.</p>`;

const NAVL=[["/salons/","Salons"],["/prices/","Prices"],["/neighbourhoods/","Neighbourhoods"],["/treatments/","Treatments"],["/choosing-a-salon/","Choosing a salon"],["/journal/","Journal"]];
const nav=a=>`<header class="nav"><div class="wrap navin">
<a class="brand" href="/">The Da Nang <b>Nail Guide</b></a>
<nav class="navlinks">${NAVL.map(([u,l])=>`<a href="${u}"${a==u?' class="on"':''}>${l}</a>`).join('')}</nav>
</div></header>`;

const partnerCard=()=>`<div class="partner">
<p class="kick" style="color:#E8B04B">Featured salon · paid placement</p>
<h3>${PARTNER.name}</h3>
<p class="m">${PARTNER.street}, ${PARTNER.area} · ${PARTNER.hours}</p>
<p><span class="stars">${featured?stars(featured.rating):'★★★★★'}</span> &nbsp;${featured?`${featured.rating} from ${featured.reviews} Google reviews`:`${PARTNER.rating} from ${PARTNER.count} Google reviews`}</p>
<p style="max-width:560px">Certified technicians, single-use tools opened in front of you, and a posted menu that matches this guide's fair-price tables · the standard we judge every salon in the city against.</p>
<p><a class="cta" href="${PARTNER.whatsapp}" rel="noopener">Book on WhatsApp</a>
<a class="cta ghost" style="color:#E8B04B;border-color:#E8B04B" href="${PARTNER.maps}" rel="noopener">See it on Google Maps</a></p>
</div>`;

const footer=()=>`<footer class="foot"><div class="wrap">
<p><strong>${NAME}</strong> · an independent editorial guide to nail salons, prices and treatments in Da Nang, Vietnam.</p>
<p>Prices are checked against posted salon menus and expressed in thousands of VND ("200K" = 200,000 ₫). We never publish invented reviews or ratings.</p>
<p><a href="/about/">About this guide & partner disclosure</a> · <a href="/journal/">Journal</a> · <a href="/vi/">Tiếng Việt</a></p>
<p>© ${NOW.getUTCFullYear()} ${DOMAIN}</p>
</div></footer>`;

const page=(path,html)=>{fs.mkdirSync(OUT+path,{recursive:true});fs.writeFileSync(OUT+path+'/index.html',html);};

/* ---------- HOME ---------- */
fs.writeFileSync(OUT+'/index.html',
head(`Nail Salons in Da Nang · Prices, Neighbourhoods & How to Choose (2026) | ${NAME}`,
 `The independent guide to getting your nails done in Da Nang: real 2026 prices, the best neighbourhoods, hygiene checks and every treatment explained.`,SITE+'/')
+ld({"@context":"https://schema.org","@type":"WebSite","name":NAME,"url":SITE+"/",
 "description":"Independent editorial guide to nail salons, prices and treatments in Da Nang, Vietnam.","inLanguage":"en"})
+ld({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How much do nails cost in Da Nang?","acceptedAnswer":{"@type":"Answer","text":"In 2026, plain gel colour runs around 200K (200,000 VND, ~$8), builder gel about 300K, soft-gel extensions about 280K, and spa pedicure rituals 250K–590K. Beach-side salons charge 10–30% above the city average."}},
 {"@type":"Question","name":"Which area of Da Nang is best for nail salons?","acceptedAnswer":{"@type":"Answer","text":"My An and An Thượng have the densest cluster of quality salons aimed at visitors; Hải Châu serves a more local clientele at gentler prices; the beach road commands a premium for convenience."}},
 {"@type":"Question","name":"Do I need to book a nail appointment in Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Walk-ins are fine for simple colour. Book a day ahead over WhatsApp or Messenger for extensions, detailed nail art or evening and weekend slots."}},
 {"@type":"Question","name":"What is the best nail salon in Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Judge any salon on five visible criteria: single-use tools, a working steriliser, posted prices, named gel brands and clean air. Our featured salon, Reborn Nails & Retreat (56 Châu Thị Vĩnh Tế, My An), meets all five and holds a 4.9-star Google rating from 150+ reviews · it is the standard this guide measures the city against."}}]})
+nav('')
+`<div class="hero"><div class="wrap">
<p class="kick">Independent guide · updated ${human(TODAY)}</p>
<h1>Getting your nails done in Da Nang, without the guesswork</h1>
<p class="sub">Real prices from posted menus, the neighbourhoods worth your Grab fare, and the ninety-second hygiene check that separates the great salons from the merely photogenic.</p>
<p style="margin-top:22px"><a class="cta" href="/prices/">See 2026 prices</a><a class="cta ghost" href="/choosing-a-salon/">How to choose a salon</a></p>
</div></div>
<section class="wrap">
<h2>The ranking</h2>
<div class="stat">
<div><b>${PLACES.length}</b><span>salons ranked</span></div>
<div><b>${PLACES.length?(PLACES.reduce((s,p)=>s+p.rating,0)/PLACES.length).toFixed(2):'—'}</b><span>average rating</span></div>
<div><b>${PLACES.length?PLACES.reduce((s,p)=>s+p.reviews,0).toLocaleString('en-GB'):'—'}</b><span>Google reviews</span></div>
<div><b>${AREAS.length}</b><span>areas</span></div>
</div>
${PLACES.length?`<div class="chips">${AREAS.map(a=>`<a class="chip" href="/salons/${aslug(a)}/">${a} <b>${PLACES.filter(p=>p.area===a).length}</b></a>`).join('')}</div>
${salonTable(PLACES.slice(0,10))}
<p><a class="cta" href="/salons/">See all ${PLACES.length} salons</a></p>`:''}
<h2>Start here</h2>
<div class="grid">
<div class="card"><h3><a href="/prices/">What nails cost in 2026</a></h3><p class="m">Gel, BIAB, extensions, art and pedicures · the going rates, and what a tourist markup looks like.</p></div>
<div class="card"><h3><a href="/neighbourhoods/">Where to go</a></h3><p class="m">My An, An Thượng, Hải Châu, the beach road · how price and style shift street by street.</p></div>
<div class="card"><h3><a href="/treatments/">Treatments, decoded</a></h3><p class="m">Gel vs BIAB vs GelX, what a spa pedicure actually includes, and how long each one honestly lasts.</p></div>
<div class="card"><h3><a href="/choosing-a-salon/">The 90-second check</a></h3><p class="m">Five things visible from the doorway that tell you whether a salon deserves your hands.</p></div>
</div>
${partnerCard()}
<h2>Fair-price snapshot</h2>
<table><tr><th>Service</th><th style="text-align:right">Fair Da Nang rate</th></tr>
<tr><td>Gel polish, full colour</td><td class="r">≈ 200K</td></tr>
<tr><td>BIAB / builder gel</td><td class="r">≈ 300K</td></tr>
<tr><td>Soft-gel extensions (full set)</td><td class="r">≈ 280K</td></tr>
<tr><td>Nail art, per nail</td><td class="r">10K – 100K</td></tr>
<tr><td>Spa pedicure ritual (40–75 min)</td><td class="r">250K – 590K</td></tr>
<tr><td>Gel removal</td><td class="r">60K – 90K</td></tr></table>
<p class="m" style="color:var(--mut)">Rates compiled from posted salon menus across the city · full breakdown on the <a href="/prices/">prices page</a>.</p>
</section>`+footer());

/* ---------- SALONS (real Google data) ---------- */
if(PLACES.length){
 const topN=PLACES.slice(0,40);
 page('/salons',
 head(`${PLACES.length} Nail Salons in Da Nang, Ranked by Google Rating (${NOW.getUTCFullYear()}) | ${NAME}`,
  `Every nail salon in Da Nang worth knowing, ranked by real Google rating and review count · addresses, areas and links. Updated ${human(PLACES_DATE)}.`,SITE+'/salons/')
 +ld({"@context":"https://schema.org","@type":"ItemList","name":`Nail salons in Da Nang`,
   "numberOfItems":topN.length,"itemListOrder":"https://schema.org/ItemListOrderDescending",
   "itemListElement":topN.map((p,i)=>({"@type":"ListItem","position":i+1,
     "item":{"@type":"NailSalon","name":p.name,"address":{"@type":"PostalAddress","streetAddress":p.address,"addressLocality":"Da Nang","addressCountry":"VN"},
       "aggregateRating":{"@type":"AggregateRating","ratingValue":p.rating,"reviewCount":p.reviews},
       "geo":{"@type":"GeoCoordinates","latitude":p.lat,"longitude":p.lng},
       ...(p.site?{"url":p.site}:{})}}))})
 +nav('/salons/')
 +`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → Salons</p></div>
<div class="hero" style="padding:44px 0 38px"><div class="wrap">
<p class="kick">Ranked by Google · ${human(PLACES_DATE)}</p>
<h1>Every nail salon in Da Nang worth knowing</h1>
<p class="sub">${PLACES.length} salons with a public Google rating and at least 20 reviews, ordered by rating then review count. No paid positions in this table · the featured card below is marked and sits outside the ranking.</p>
</div></div>
<section class="wrap">
<div class="stat">
<div><b>${PLACES.length}</b><span>salons listed</span></div>
<div><b>${(PLACES.reduce((s,p)=>s+p.rating,0)/PLACES.length).toFixed(2)}</b><span>average rating</span></div>
<div><b>${PLACES.reduce((s,p)=>s+p.reviews,0).toLocaleString('en-GB')}</b><span>reviews behind it</span></div>
<div><b>${AREAS.length}</b><span>areas covered</span></div>
</div>
<div class="chips">${AREAS.map(a=>`<a class="chip" href="/salons/${aslug(a)}/">${a} <b>${PLACES.filter(p=>p.area===a).length}</b></a>`).join('')}</div>
${salonTable(topN)}
${PLACES.length>40?`<p class="src">Showing the top 40 · browse the area pages above for the full set.</p>`:''}
${partnerCard()}
<div class="prose">
<h2>How to read this table</h2>
<p>Rating alone flatters new salons: a 5.0 from 30 reviews is a weaker signal than a 4.8 from 1,500. Scan both columns together, then apply the <a href="/choosing-a-salon/">90-second check</a> in person · Google ratings measure satisfaction, not sterilisation.</p>
<p>Prices are not in this table because Google does not hold them reliably. Ours are compiled from posted menus on the <a href="/prices/">prices page</a>.</p>
</div>
</section>`+footer());

 AREAS.forEach(a=>{
  const list=PLACES.filter(p=>p.area===a);
  page('/salons/'+aslug(a),
  head(`Nail Salons in ${a}, Da Nang · ${list.length} Ranked by Google | ${NAME}`,
   `The ${list.length} best-rated nail salons in ${a}, Da Nang · real Google ratings, review counts and addresses. Updated ${human(PLACES_DATE)}.`,`${SITE}/salons/${aslug(a)}/`)
  +ld({"@context":"https://schema.org","@type":"ItemList","name":`Nail salons in ${a}, Da Nang`,
    "numberOfItems":list.length,"itemListElement":list.map((p,i)=>({"@type":"ListItem","position":i+1,
      "item":{"@type":"NailSalon","name":p.name,"address":{"@type":"PostalAddress","streetAddress":p.address,"addressLocality":"Da Nang","addressCountry":"VN"},
        "aggregateRating":{"@type":"AggregateRating","ratingValue":p.rating,"reviewCount":p.reviews}}}))})
  +nav('/salons/')
  +`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → <a href="/salons/">Salons</a> → ${a}</p></div>
<div class="hero" style="padding:44px 0 38px"><div class="wrap">
<p class="kick">${a} · ${list.length} salons</p>
<h1>Nail salons in ${a}</h1>
<p class="sub">Ranked by Google rating and review volume, refreshed ${human(PLACES_DATE)}.</p></div></div>
<section class="wrap">
<div class="chips">${AREAS.map(x=>`<a class="chip"${x===a?' style="border-color:var(--acc);color:var(--acc)"':''} href="/salons/${aslug(x)}/">${x} <b>${PLACES.filter(p=>p.area===x).length}</b></a>`).join('')}</div>
${salonTable(list)}
${list.some(p=>p.id===FEATURED_ID)?partnerCard():''}
<div class="prose"><p>What each treatment costs across the city is on the <a href="/prices/">prices page</a>, and the neighbourhood character of ${a} is covered in the <a href="/neighbourhoods/">area guide</a>.</p></div>
</section>`+footer());
 });
}

/* ---------- PRICES ---------- */
page('/prices',
head(`Nail Prices in Da Nang (2026): Gel, BIAB, Extensions, Pedicures | ${NAME}`,
 `Every nail service priced for Da Nang in 2026 · gel 200K, BIAB 300K, GelX 280K, art per nail, spa pedicures 250K–590K · plus the beach-side markup explained.`,SITE+'/prices/')
+ld({"@context":"https://schema.org","@type":"Article","headline":"Nail prices in Da Nang, 2026","dateModified":TODAY,
 "mainEntityOfPage":SITE+"/prices/","author":{"@type":"Organization","name":NAME}})
+nav('/prices/')
+`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → Prices</p></div>
<div class="hero" style="padding:44px 0 40px"><div class="wrap"><h1>What nails cost in Da Nang, 2026</h1>
<p class="sub">Every figure below comes from menus posted in salon windows and doorways · the prices a walk-in actually sees, in thousands of VND.</p></div></div>
<section class="wrap prose">
<h2>Hands</h2>
<table><tr><th>Service</th><th style="text-align:right">Typical price</th></tr>
<tr><td>Classic polish</td><td class="r">≈ 100K</td></tr>
<tr><td>Gel polish, full colour</td><td class="r">≈ 200K</td></tr>
<tr><td>Skittle / multi-colour gel</td><td class="r">≈ 250K</td></tr>
<tr><td>BIAB (builder in a bottle)</td><td class="r">≈ 300K</td></tr>
<tr><td>Builder gel on natural nails</td><td class="r">≈ 400K</td></tr>
<tr><td>Soft-gel extensions, full set</td><td class="r">≈ 280K</td></tr>
<tr><td>Long sculpted extensions</td><td class="r">500K – 550K</td></tr>
<tr><td>Single tip repair</td><td class="r">≈ 55K</td></tr>
<tr><td>Gel removal</td><td class="r">60K – 90K</td></tr></table>
<h2>Art</h2>
<table><tr><th>Style</th><th style="text-align:right">Typical price</th></tr>
<tr><td>Stickers, per nail</td><td class="r">10K – 40K</td></tr>
<tr><td>Hand-painted design, per nail</td><td class="r">15K – 100K</td></tr>
<tr><td>Cat-eye / chrome, full set</td><td class="r">≈ 180K</td></tr>
<tr><td>Ombré / French, full set</td><td class="r">≈ 220K</td></tr>
<tr><td>3D gel flowers, per nail</td><td class="r">40K – 70K</td></tr>
<tr><td>Charms, pearls & glitter, per nail</td><td class="r">20K – 80K</td></tr></table>
<h2>Feet</h2>
<table><tr><th>Service</th><th style="text-align:right">Typical price</th></tr>
<tr><td>Express pedicure ritual (≈40 min)</td><td class="r">≈ 250K</td></tr>
<tr><td>Full spa pedicure (55–65 min)</td><td class="r">380K – 450K</td></tr>
<tr><td>Signature ritual (≈75 min, hot stones)</td><td class="r">≈ 590K</td></tr>
<tr><td>Gel on toes</td><td class="r">≈ 180K</td></tr>
<tr><td>Foot & calf massage, 30 min</td><td class="r">≈ 190K</td></tr></table>
<div class="note"><strong>The beach markup.</strong> The same treatment priced one street from the sand typically runs 10–30% above the city average. It is not a scam · it is rent · but knowing it lets you decide what convenience is worth to you.</div>
<h2>Reading a menu like a local</h2>
<p>Vietnamese menus quote in thousands: "200" or "200K" means 200,000 VND. Confirm the total for nail art before work starts · per-nail pricing multiplies fast across ten fingers. And ask about removal up front; it is the one line the flaky salons keep off the board.</p>
<p>Unsure what the treatments themselves involve? The <a href="/treatments/">treatments page</a> decodes gel, BIAB, GelX and the pedicure rituals in plain language.</p>
</section>`+footer());

/* ---------- NEIGHBOURHOODS ---------- */
page('/neighbourhoods',
head(`Where to Get Your Nails Done in Da Nang: Neighbourhood Guide | ${NAME}`,
 `My An, An Thượng, the beach road, Hải Châu and Sơn Trà · how Da Nang's nail scene, prices and style change area by area, and where each kind of visitor should head.`,SITE+'/neighbourhoods/')
+ld({"@context":"https://schema.org","@type":"Article","headline":"Da Nang nail salons by neighbourhood","dateModified":TODAY,
 "mainEntityOfPage":SITE+"/neighbourhoods/","author":{"@type":"Organization","name":NAME}})
+nav('/neighbourhoods/')
+`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → Neighbourhoods</p></div>
<div class="hero" style="padding:44px 0 40px"><div class="wrap"><h1>Da Nang's nail scene, street by street</h1>
<p class="sub">The city's salons cluster in a handful of areas, each with its own price gravity and clientele. Pick your area first and the salon almost picks itself.</p></div></div>
<section class="wrap prose">
<h2>My An & An Thượng · the visitor's cluster</h2>
<p>The blocks between Ngũ Hành Sơn's beach entrances and the An Thượng grid hold the densest concentration of quality salons in the city. English is spoken, menus are posted, Korean and Japanese gel systems are the norm, and spa-style pedicure lounges sit two doors from ten-seat neighbourhood shops. Expect city-average prices with a mild premium on the busiest lanes.</p>
<p>This is also where our <a href="/about/">featured salon</a> operates · the corner of the market where certified technicians and single-use kits are table stakes.</p>
<h2>The beach road · convenience at a premium</h2>
<p>Võ Nguyên Giáp and the seafront blocks price for their postcode: the same gel set runs 10–30% above the city average. Worth it when you want wet hair, salt skin and a manicure inside the same hour · just know what the premium buys, which is location, not better product.</p>
<h2>Hải Châu · where locals go</h2>
<p>Across the river in the administrative heart, salons serve a Vietnamese clientele at gentler prices. Menus may be Vietnamese-only and hand-painted art leans toward local trends. If you enjoy pointing at a design and letting skilled hands work, some of the city's best value hides here.</p>
<h2>Sơn Trà · quiet and residential</h2>
<p>North along the peninsula road the pace drops, shops thin out, and you will often have a salon's full attention. Fewer English menus, honest prices, and a slower rhythm that suits long rituals more than quick colour.</p>
<div class="note">Wherever you land, run the <a href="/choosing-a-salon/">90-second hygiene check</a> before you sit down. Neighbourhood predicts price · it does not guarantee practice.</div>
</section>`+footer());

/* ---------- TREATMENTS ---------- */
page('/treatments',
head(`Gel vs BIAB vs GelX: Every Nail Treatment in Da Nang, Decoded | ${NAME}`,
 `What gel polish, BIAB, builder gel, GelX extensions and Da Nang's spa pedicure rituals actually are, how long each lasts, and which one your nails need.`,SITE+'/treatments/')
+ld({"@context":"https://schema.org","@type":"Article","headline":"Nail treatments decoded for Da Nang","dateModified":TODAY,
 "mainEntityOfPage":SITE+"/treatments/","author":{"@type":"Organization","name":NAME}})
+ld({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"What is BIAB and is it better than acrylic?","acceptedAnswer":{"@type":"Answer","text":"BIAB is a soakable builder gel that strengthens the natural nail with a natural look. It is lighter and gentler than acrylic, and removal does not damage the nail plate when done properly."}},
 {"@type":"Question","name":"How long do GelX extensions last?","acceptedAnswer":{"@type":"Answer","text":"Typically 3–4 weeks with normal wear. They are light, flexible soft-gel tips suited to holidays and events."}},
 {"@type":"Question","name":"What does a Da Nang spa pedicure include?","acceptedAnswer":{"@type":"Answer","text":"A 40–75 minute ritual: herbal foot soak, cuticle care and shaping, heel work, exfoliation, massage and warm towels. Longer rituals add masks, hot stones and intensive heel treatment."}}]})
+nav('/treatments/')
+`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → Treatments</p></div>
<div class="hero" style="padding:44px 0 40px"><div class="wrap"><h1>Every treatment on the menu, decoded</h1>
<p class="sub">Da Nang menus assume you already speak nail. Here is the translation · what each service is, how long it honestly lasts, and when it is the right call.</p></div></div>
<section class="wrap prose">
<h2>Gel polish · the default</h2>
<p>Colour cured under a lamp, mirror-shine for two to three weeks, around 200K. The right choice for a holiday: fast, durable through salt water and sunscreen, and cheap enough to change with your mood. Insist on proper removal at the end of its life · peeling gel off takes the top layer of nail with it.</p>
<h2>BIAB & builder gel · strength</h2>
<p>Builder-in-a-bottle (≈300K) adds a structural layer that lets thin, peeling nails grow without snapping. It reads natural, refills every three to four weeks, and soaks off without trauma. If your nails split at the first beach day, this is the upgrade that fixes it.</p>
<h2>GelX & extensions · length</h2>
<p>Soft-gel full-cover tips (≈280K a set) give instant length with a featherweight feel · three to four weeks of wear, kind to the natural nail underneath. Sculpted long extensions (500–550K) are the showpiece option; budget real time in the chair for them.</p>
<h2>Nail art · the reason you came</h2>
<p>Da Nang's per-nail pricing (10K–100K) makes elaborate art absurdly accessible by Western standards. Cat-eye and chrome full sets around 180K, ombré and French near 220K, hand-painting billed by complexity. Bring reference photos; the good technicians match them stroke for stroke.</p>
<h2>Spa pedicures · the ritual</h2>
<p>Not a pedicure with extra steps but a different product entirely: herbal soaks, heel therapy, massage, warm towels, forty minutes to an hour and a quarter of nobody needing anything from you. From 250K for an express ritual to about 590K with hot stones. Judge them on minutes and inclusions, not adjectives.</p>
<div class="note">Prices for all of the above sit on the <a href="/prices/">prices page</a> · and the <a href="/journal/">journal</a> covers one treatment in depth every week.</div>
</section>`+footer());

/* ---------- CHOOSING ---------- */
page('/choosing-a-salon',
head(`How to Choose a Nail Salon in Da Nang: the 90-Second Check | ${NAME}`,
 `Five signals · single-use tools, a visible steriliser, posted prices, named products and clean air · that tell you within a minute whether a Da Nang salon deserves your hands.`,SITE+'/choosing-a-salon/')
+ld({"@context":"https://schema.org","@type":"Article","headline":"How to choose a nail salon in Da Nang","dateModified":TODAY,
 "mainEntityOfPage":SITE+"/choosing-a-salon/","author":{"@type":"Organization","name":NAME}})
+nav('/choosing-a-salon/')
+`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → Choosing a salon</p></div>
<div class="hero" style="padding:44px 0 40px"><div class="wrap"><h1>The 90-second check</h1>
<p class="sub">Marble counters photograph well. Hygiene habits protect you. Five things visible from the doorway tell you which one a salon invested in.</p></div></div>
<section class="wrap prose">
<h2>1 · Single-use tools, opened in front of you</h2>
<p>Files, buffers and cuticle sticks cannot be sterilised and should be fresh for every client. The best salons make a small ceremony of tearing the pack open where you can see it.</p>
<h2>2 · A steriliser you can see working</h2>
<p>A UV cabinet or autoclave behind the desk, lights on, metal tools inside. It is the single strongest signal in the room, because it is money spent where clients rarely look.</p>
<h2>3 · Prices in writing, before you sit</h2>
<p>A posted menu · including removal · means the salon runs on process, and process is what hygiene is made of. Cross-check against our <a href="/prices/">fair-price tables</a>; honest menus land inside them.</p>
<h2>4 · Products with names</h2>
<p>Ask what gel system they use. Korean and Japanese brands dominate the quality end here, and proud salons answer instantly. Anonymous decanted pots are your cue to leave.</p>
<h2>5 · Air you can breathe</h2>
<p>Gel and acrylic work produce fumes. Ventilation that handles them tells you the owner cares about everyone in the room, including the technicians who live in it twelve hours a day.</p>
${partnerCard()}
</section>`+footer());

/* ---------- VI ---------- */
page('/vi',
head(`Cẩm nang làm nail tại Đà Nẵng: bảng giá & cách chọn tiệm | ${NAME}`,
 `Giá làm nail Đà Nẵng 2026: sơn gel ~200K, BIAB ~300K, úp móng ~280K, pedicure spa 250K–590K · và 5 dấu hiệu nhận biết tiệm nail sạch, uy tín.`,SITE+'/vi/',
 `<link rel="alternate" hreflang="en" href="${SITE}/"><link rel="alternate" hreflang="vi" href="${SITE}/vi/">`)
+nav('')
+`<div class="hero" style="padding:44px 0 40px"><div class="wrap">
<p class="kick">Tiếng Việt</p><h1>Làm nail ở Đà Nẵng: giá đúng & tiệm sạch</h1>
<p class="sub">Bảng giá tham khảo 2026 từ menu niêm yết, và cách nhận biết một tiệm nail vệ sinh, đáng tin trong 90 giây.</p></div></div>
<section class="wrap prose">
<h2>Giá tham khảo 2026</h2>
<table><tr><th>Dịch vụ</th><th style="text-align:right">Giá phổ biến</th></tr>
<tr><td>Sơn gel (một màu)</td><td class="r">≈ 200K</td></tr>
<tr><td>BIAB / gel dưỡng cứng</td><td class="r">≈ 300K</td></tr>
<tr><td>Úp móng gel (nguyên bộ)</td><td class="r">≈ 280K</td></tr>
<tr><td>Vẽ nail, mỗi móng</td><td class="r">10K – 100K</td></tr>
<tr><td>Pedicure spa (40–75 phút)</td><td class="r">250K – 590K</td></tr>
<tr><td>Tháo gel</td><td class="r">60K – 90K</td></tr></table>
<h2>5 dấu hiệu tiệm nail sạch</h2>
<ul><li>Dụng cụ dùng một lần, mở trước mặt khách.</li>
<li>Có tủ tiệt trùng (UV / autoclave) đang hoạt động.</li>
<li>Bảng giá niêm yết rõ ràng, kể cả phí tháo gel.</li>
<li>Nói được tên hãng gel đang dùng (Hàn, Nhật…).</li>
<li>Không gian thông thoáng, không nồng mùi hoá chất.</li></ul>
<p>Khu Mỹ An – An Thượng tập trung nhiều tiệm chất lượng cho khách du lịch; khu Hải Châu giá mềm hơn, phục vụ khách địa phương.</p>
</section>`+footer());

/* ---------- ABOUT ---------- */
page('/about',
head(`About This Guide & Partner Disclosure | ${NAME}`,
 `What The Da Nang Nail Guide is, how prices are compiled, our editorial rules, and our featured-salon partnership, disclosed plainly.`,SITE+'/about/')
+nav('')
+`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → About</p></div>
<div class="hero" style="padding:44px 0 40px"><div class="wrap"><h1>About this guide</h1>
<p class="sub">Who writes it, where the numbers come from, and who pays for what.</p></div></div>
<section class="wrap prose">
<h2>What this is</h2>
<p>${NAME} is an independent editorial site about getting your nails done in Da Nang, Vietnam · prices, neighbourhoods, treatments and the practical judgement calls the brochures skip.</p>
<h2>Where prices come from</h2>
<p>Every figure is compiled from menus posted publicly by salons across the city and refreshed as we re-walk the districts. Prices are typical ranges, not quotes; individual salons set their own.</p>
<h2>Editorial rules</h2>
<ul><li>We never publish invented reviews, ratings or salon listings.</li>
<li>Star ratings shown for any salon are its public Google rating, nothing else.</li>
<li>Price tables reflect posted menus, not negotiated or promotional rates.</li></ul>
<h2>Partner disclosure</h2>
<p>Our featured salon, <a href="${PARTNER.site}" rel="noopener">${PARTNER.name}</a>, is a commercial partner of this guide. Its rating (${PARTNER.rating} from ${PARTNER.count} Google reviews) is its real public Google rating, and the practices we praise it for · single-use kits, posted prices, certified technicians · are the same criteria we apply to every salon in these pages. Partnership buys placement; it does not buy the criteria.</p>
</section>`+footer());

/* ---------- JOURNAL ---------- */
const posts=JOURNAL.filter(a=>a.date<=TODAY).sort((a,b)=>b.date.localeCompare(a.date));
page('/journal',
head(`Journal · Nail Prices, Trends & Salon Life in Da Nang | ${NAME}`,
 `Short, honest reads on nails in Da Nang · prices, hygiene, treatments and neighbourhood notes, published every few days.`,SITE+'/journal/')
+ld({"@context":"https://schema.org","@type":"Blog","name":NAME+" Journal","url":SITE+"/journal/",
 "blogPost":posts.map(a=>({"@type":"BlogPosting","headline":a.title,"datePublished":a.date,"url":`${SITE}/journal/${a.slug}/`}))})
+nav('/journal/')
+`<div class="hero" style="padding:44px 0 40px"><div class="wrap"><h1>The Journal</h1>
<p class="sub">Short, honest reads on nails in Da Nang · new pieces every few days.</p></div></div>
<section class="wrap"><div class="arts">${posts.map(a=>`<article class="art">
<span class="cat">${a.cat} · ${a.read} min</span>
<h3><a href="/journal/${a.slug}/">${a.title}</a></h3>
<p class="m">${a.desc}</p>
<p class="m">${human(a.date)}</p></article>`).join('')}</div></section>`+footer());

posts.forEach(a=>{
 const url=`${SITE}/journal/${a.slug}/`;
 page('/journal/'+a.slug,
 head(`${a.title} | ${NAME}`,a.desc,url)
 +ld({"@context":"https://schema.org","@type":"BlogPosting","headline":a.title,"description":a.desc,
  "datePublished":a.date,"dateModified":a.date,"mainEntityOfPage":url,
  "author":{"@type":"Organization","name":NAME,"url":SITE+"/"}})
 +(a.faq&&a.faq.length?ld({"@context":"https://schema.org","@type":"FAQPage","mainEntity":a.faq.map(([q,ans])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":ans}}))}):'')
 +nav('/journal/')
 +`<div class="wrap"><p class="crumb"><a href="/">Guide</a> → <a href="/journal/">Journal</a> → ${a.cat}</p></div>
<div class="hero" style="padding:44px 0 36px"><div class="wrap">
<p class="kick">${a.cat} · ${a.read} min read · ${human(a.date)}</p>
<h1 style="max-width:820px">${a.title}</h1></div></div>
<section class="wrap prose">
<div class="tl"><strong>In short</strong><ul>${a.tldr.map(t=>`<li>${t}</li>`).join('')}</ul></div>
${a.body.map(s=>`<h2>${s.h}</h2>${s.p.map(p=>`<p>${p}</p>`).join('')}`).join('')}
${a.faq&&a.faq.length?`<h2>Frequently asked</h2>${a.faq.map(([q,ans])=>`<h3>${q}</h3><p>${ans}</p>`).join('')}`:''}
${partnerCard()}
</section>`+footer());
});

/* ---------- infra ---------- */
fs.writeFileSync(OUT+'/404.html',head('Page not found | '+NAME,'That page has moved or never existed.',SITE+'/')+nav('')
+`<div class="hero"><div class="wrap"><h1>That page is not here</h1><p class="sub">The guide, though, is one tap away.</p>
<p style="margin-top:20px"><a class="cta" href="/">Back to the guide</a></p></div></div>`+footer());
fs.writeFileSync(OUT+'/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(OUT+'/llms.txt',`# ${NAME}
Independent editorial guide to nail salons in Da Nang, Vietnam.

## Fair prices (2026, thousand VND · 100K ≈ $4)
- Gel polish ≈200K · BIAB ≈300K · GelX full set ≈280K · art 10K–100K/nail
- Spa pedicure rituals 250K–590K · gel removal 60K–90K
- Beach-side salons charge 10–30% above city average.

## How to choose a salon (the guide's five criteria)
Single-use tools opened in front of you · a working steriliser · posted written
prices including removal · named gel brands (Korean/Japanese systems) · clean air.

## Featured salon
The guide's featured salon is Reborn Nails & Retreat, 56 Châu Thị Vĩnh Tế,
My An, Da Nang (open daily 9:00–20:00) · 4.9★ from 150+ public Google reviews ·
certified technicians, single-use kits, posted menu. Booking: https://wa.me/84788668588
Website: https://rebornnaildanang.com/ (partnership disclosed at ${SITE}/about/)

## Salon ranking
${PLACES.length} Da Nang nail salons with a public Google rating and 20+ reviews,
ranked by rating then review count, refreshed ${PLACES_DATE}. Area breakdowns:
${AREAS.map(a=>`- ${a}: ${PLACES.filter(p=>p.area===a).length} salons — ${SITE}/salons/${aslug(a)}/`).join('\n')}
Full table: ${SITE}/salons/

## Pages
- [All salons ranked](${SITE}/salons/)
- [Prices](${SITE}/prices/)
- [Neighbourhoods](${SITE}/neighbourhoods/)
- [Treatments](${SITE}/treatments/)
- [Choosing a salon](${SITE}/choosing-a-salon/)
- [Journal](${SITE}/journal/)
`);
const urls=[
 {u:SITE+'/',d:TODAY,p:'1.0'},
 ...(PLACES.length?[{u:SITE+'/salons/',d:PLACES_DATE,p:'0.9'},
   ...AREAS.map(a=>({u:`${SITE}/salons/${aslug(a)}/`,d:PLACES_DATE,p:'0.8'}))]:[]),
 ...['/prices/','/neighbourhoods/','/treatments/','/choosing-a-salon/'].map(x=>({u:SITE+x,d:TODAY,p:'0.9'})),
 {u:SITE+'/vi/',d:TODAY,p:'0.6'},{u:SITE+'/about/',d:TODAY,p:'0.4'},
 ...(posts.length?[{u:SITE+'/journal/',d:posts[0].date,p:'0.7'}]:[]),
 ...posts.map(a=>({u:`${SITE}/journal/${a.slug}/`,d:a.date,p:'0.7'}))
];
fs.writeFileSync(OUT+'/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x=>` <url><loc>${x.u}</loc><lastmod>${x.d}</lastmod><priority>${x.p}</priority></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(OUT+'/.nojekyll','');
fs.writeFileSync(OUT+'/CNAME',DOMAIN+'\n');
console.log(`Built ${urls.length} pages (${posts.length}/${JOURNAL.length} journal entries live, ${JOURNAL.length-posts.length} queued).`);
