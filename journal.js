/* The Da Nang Nail Guide · article queue.
   Appended to by ~/.claude/danang-guides/ automation — NEWEST FIRST.
   {slug,title,desc,date:"YYYY-MM-DD",cat,read,tldr:[],body:[{h,p:[]}],faq:[[q,a]]}
   Publishing is date-gated: build.js only renders entries dated today or earlier,
   so future-dated entries queue silently until their day (drip publishing).
   Editorial rules: real prices only (cross-check /prices/), no invented salons,
   ratings or reviews; public facts must be attributable to a public source. */

const JOURNAL = [
{
  slug: "gel-manicure-da-nang-what-to-pay",
  title: "Gel manicure in Da Nang: what you should actually pay",
  desc: "The going rate for a gel manicure in Da Nang, what pushes the price up, and the three questions that separate a fair bill from a tourist bill.",
  date: "2026-08-05",
  cat: "Prices",
  read: 5,
  tldr: [
    "The city-wide going rate for gel polish is around 200K (~$8). Beach-side, expect 10–30% more.",
    "Removal is the classic hidden line · a fair salon quotes it before you sit down (60–90K).",
    "Nail art is priced per nail, from about 10K for stickers to 100K for detailed hand-painting.",
    "If a quote is far above 300K for plain gel colour, you are paying for the postcode."
  ],
  body: [
    { h: "The number to anchor on",
      p: ["Across Da Nang in 2026, plain gel colour sits around 200,000 VND. That is the figure to hold in your head when you read any menu. Salons in the An Thượng tourist quarter and along the beach roads run higher · the treatment is the same, the rent is not.",
          "Prices in Vietnam are usually written in thousands: 200K means 200,000 VND, a little under nine US dollars."] },
    { h: "What legitimately raises the price",
      p: ["Three things justify a bigger number: structure, product and art. Builder systems (BIAB, hard gel) run around 300K because the product itself costs more and takes skill to shape. Soft-gel extension systems like GelX sit near 280K for a full set.",
          "Hand-painted art is billed per nail, and that is normal · a detailed design can take longer than the manicure itself. Expect roughly 15K–100K per nail depending on complexity, and confirm the total before the first brushstroke."] },
    { h: "The three questions that keep a bill honest",
      p: ["Ask what removal costs · the answer should be immediate and under 100K. Ask whether the quoted price includes base, top coat and cuticle work · it should. Ask which gel brand the salon uses · a serious salon answers without hesitating, because the product is their pride.",
          "Any hesitation on those three is your signal to walk. Da Nang has too many good salons to settle."] },
    { h: "Where the deals genuinely are",
      p: ["Move one or two streets inland from the beachfront and prices drop while the workmanship does not. The neighbourhood pages of this guide break down what to expect area by area · see <a href=\"/salons/\">where to get your nails done in Da Nang</a>.",
          "And if a salon posts its full menu with prices in writing, treat that as the strongest quality signal there is. The confident ones have nothing to hide."] }
  ],
  faq: [
    ["How much does a gel manicure cost in Da Nang?", "Around 200,000 VND (about $8) for plain gel colour in 2026. Tourist-district and beach-side salons charge 10–30% more; builder gel and extensions cost more because of the product involved."],
    ["Do Da Nang nail salons charge for removal?", "Most do, and a fair one tells you before you sit down. Expect 60–90K for gel removal. Treat an evasive answer on removal pricing as a red flag."],
    ["Is it cheaper to get nails done in Da Nang than in Korea or Japan?", "Substantially. Comparable gel work in Seoul or Tokyo typically costs three to five times the Da Nang price, which is why nail appointments are a fixture of many travellers' itineraries here."],
    ["Should I book ahead or walk in?", "For plain colour, walk-ins are usually fine outside evenings. For extensions, detailed art or weekend slots, book a day ahead · most salons take bookings over WhatsApp or Facebook Messenger."]
  ]
},
{
  slug: "nail-salon-hygiene-checklist-da-nang",
  title: "The 90-second hygiene check before you trust any Da Nang salon",
  desc: "Five things to look for in the first minute inside a nail salon in Da Nang · single-use tools, steriliser, posted prices, product brands and ventilation.",
  date: "2026-08-07",
  cat: "Guides",
  read: 4,
  tldr: [
    "Look for single-use files and buffers, opened in front of you.",
    "A visible steriliser (UV cabinet or autoclave) is the single strongest signal.",
    "Posted written prices correlate strongly with honest practice.",
    "Trust your nose · a salon that manages fumes manages everything else."
  ],
  body: [
    { h: "Why ninety seconds is enough",
      p: ["You can read a nail salon before anyone touches your hands. The habits that protect you · tool hygiene, product quality, honest pricing · are all visible from the doorway, and no amount of marble and neon can fake them.",
          "This checklist works anywhere in Vietnam, but it was written street by street in Da Nang."] },
    { h: "One · the tools",
      p: ["Files, buffers and wooden sticks cannot be sterilised properly and should be single-use. The good salons open them in front of you; some hand you the file to keep. Metal implements should come out of a sealed pouch or straight from a steriliser cabinet."] },
    { h: "Two · the steriliser",
      p: ["Look behind the desk. A UV cabinet or autoclave in active use · lights on, tools inside · is the strongest single signal a salon sends. Its absence is not automatically damning in a tiny neighbourhood shop, but its presence tells you the owner spends money where clients cannot usually see it."] },
    { h: "Three · the menu",
      p: ["Written prices, posted where you can read them before sitting down, are a hygiene signal too · they mean the salon runs on process rather than improvisation. It is the same discipline that governs how tools get cleaned.",
          "Cross-check what you read against the <a href=\"/prices/\">going rates in this guide</a> and you will know within seconds whether a menu is honest."] },
    { h: "Four and five · product and air",
      p: ["Ask what gel system the salon uses. Korean and Japanese systems dominate the quality end of the Da Nang market and a proud salon names its brand instantly. Anonymous unlabelled pots are a walk-away signal.",
          "Finally, breathe. Acrylic and gel work produces fumes, and a salon that ventilates properly cares about the people in the room · including the technicians who spend twelve hours a day there."] }
  ],
  faq: [
    ["Are nail salons in Da Nang hygienic?", "The good ones are exemplary · single-use kits, sterilised implements, brand-name products. Quality varies widely though, which is why a quick visual check matters: look for single-use files, a working steriliser and posted prices."],
    ["What should I avoid in a nail salon?", "Reused files or buffers, metal tools stored loose in drawers, unlabelled product pots, no visible steriliser, and any reluctance to quote prices · including removal · before you sit down."],
    ["Can I bring my own nail tools to a salon?", "Yes, and no good salon will be offended. Many regulars in Vietnam keep a personal kit. That said, at a salon that opens single-use tools in front of you, it is unnecessary."]
  ]
}
];

module.exports = { JOURNAL };
