/* City-wide nail prices, from salons that publish their own.
   Until October 2026 the "typical" tables on this site were one salon's menu
   (the guide's pick) presented as the city norm. They are now ranges computed
   from every Da Nang salon we found with a public price list, the pick
   included as one salon among six, and each line says how many salons it
   rests on. A line resting on fewer than three salons is not published.
   Prices in thousands of VND, as published (a "from" price counts at its
   floor). Checked 02/10/2026; re-check before each refresh. */
const CHECKED='2026-10-02';
const HOUSES=[
  {name:"LENA Nails & Beauty",source:"https://lenanailsdanang.com/services",
   items:{gel:[200],ext:[400,500],pedi:[200],removal:[30],art:[20]}},
  {name:"Liti Nail & Hair",source:"https://litinailhair.vn/service/",
   items:{gel:[200],biab:[400],ext:[500],pedi:[200],removal:[60],art:[20,120]}},
  {name:"Sunam Nail & Spa",source:"https://www.sunamdanang.com/",note:"BIAB is a 200K add-on to the 250K gel service",
   items:{gel:[250],biab:[450],ext:[400],pedi:[250],removal:[20]}},
  {name:"Amor Spa",source:"https://amorspadanang.com/",
   items:{gel:[300],pedi:[300],removal:[150]}},
  {name:"Nail Bơ",source:"https://nailbo.vn/",note:"its úp móng service is a set of soft-gel tips",
   items:{gel:[70],ext:[60],removal:[10],art:[5,20]}},
  {name:"Reborn Nails & Retreat",source:"https://rebornnaildanang.com/",
   items:{gel:[200],biab:[300,400],ext:[280,550],removal:[60],art:[10,100]}}
];
const LINES=[
  {key:"gel",label:"Gel polish, full colour"},
  {key:"biab",label:"BIAB / builder gel on natural nails"},
  {key:"ext",label:"Nail extensions, full set"},
  {key:"pedi",label:"Pedicure with gel colour"},
  {key:"removal",label:"Gel removal"},
  {key:"art",label:"Nail art, per nail"}
].map(l=>{
  const hits=HOUSES.map(h=>h.items[l.key]).filter(Boolean);
  const all=hits.flat();
  return {...l,lo:Math.min(...all),hi:Math.max(...all),n:hits.length};
}).filter(l=>l.n>=3);
const range=Object.fromEntries(LINES.map(l=>[l.key,`${l.lo}K – ${l.hi}K`]));
module.exports={CHECKED,HOUSES,LINES,range,N:HOUSES.length};
