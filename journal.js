/* The Da Nang Nail Guide · article queue.
   Appended to by ~/.claude/danang-guides/ automation — NEWEST FIRST.
   {slug,title,desc,date:"YYYY-MM-DD",cat,read,tldr:[],body:[{h,p:[]}],faq:[[q,a]]}
   Publishing is date-gated: build.js only renders entries dated today or earlier,
   so future-dated entries queue silently until their day (drip publishing).
   Editorial rules: real prices only (cross-check /prices/), no invented salons,
   ratings or reviews; public facts must be attributable to a public source. */

const JOURNAL = [
{
  slug: "da-nang-ward-names-salon-addresses",
  title: "Mỹ An is not an address any more: finding a salon after the ward reshuffle",
  desc: "Da Nang deleted its districts on 1 July 2025, Mỹ An stopped being a ward, and the city now legally reaches 30 km south. What that changes when you are looking for a nail salon · and what it does not.",
  date: "2026-08-13",
  cat: "Guides",
  read: 6,
  tldr: [
    "Da Nang has no districts. Quận Ngũ Hành Sơn is gone · Ngũ Hành Sơn is now a ward, and a much smaller thing than the word used to mean.",
    "Mỹ An kept its name and lost its address. 35 of the 149 salons in this guide now read Ngũ Hành Sơn; exactly two still say Mỹ An.",
    "Đà Nẵng now includes Hội An and Điện Bàn. A result labelled Da Nang can sit 17 km down the coast.",
    "Save the pin, not the text. Street names and house numbers survived the reform untouched · ward names did not."
  ],
  body: [
    { h: "The district tier was deleted, not renamed",
      p: ["On 1 July 2025 Vietnam moved to two-tier local government and the district level stopped existing nationwide. Not merged, not relabelled · removed. Đà Nẵng absorbed the whole of Quảng Nam province in the same movement, under Resolution 1659/NQ-UBTVQH15 passed by the National Assembly Standing Committee that June, and the enlarged city came out the other side as 23 wards, 70 communes and one special zone. Ninety-four units in total.",
          "Seven of the old Da Nang district names were then recycled as ward names: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu and Cẩm Lệ wards, plus Hòa Vang commune. That single decision is why this article needs to exist. The words on the page did not change. What they point at did, and it shrank."] },
    { h: "Mỹ An kept its name and lost its address",
      p: ["Mỹ An ward, along with Khuê Mỹ, Hòa Hải and Hòa Quý, was folded into one Ngũ Hành Sơn ward. So the quarter that every hotel, every taxi driver and every listicle calls Mỹ An has no administrative existence at all. It survives the way neighbourhoods usually do · on shopfronts, in conversation, on the alley signs.",
          "You can watch the changeover inside this guide's own data. Of the 149 salons listed, 35 addresses now end in Ngũ Hành Sơn and precisely two still carry Mỹ An, both as part of a street reference rather than a ward. Not one address in the set still contains the word Quận. Google's address layer has converted; the salons' own Facebook pages, printed menus and name cards mostly have not, and that gap is not sloppiness.",
          "The beach side did the same thing. An Hải Bắc, An Hải Tây, An Hải Đông and Phước Mỹ collapsed into a single An Hải ward, and 33 addresses here now read An Hải. What that tidiness hides is that the new line does not follow the neighbourhood: seven salons this guide files under the <a href=\"/salons/area/my-khe-beachfront/\">My Khe beachfront</a> carry Ngũ Hành Sơn addresses, and two in the <a href=\"/salons/area/my-an-and-an-thuong/\">My An and An Thượng cluster</a> carry An Hải ones. The area pages here are drawn around where you would actually walk, which is exactly why they did not move on 1 July."] },
    { h: "“Da Nang” now reaches thirty kilometres south",
      p: ["Hội An stopped being a city on the same morning. It is now Phường Hội An, Hội An Tây, Hội An Đông and Xã Tân Hiệp · four units inside Đà Nẵng. Điện Bàn, the coastal strip between the two, broke into wards of its own.",
          "The practical consequence is a search-result problem. As an administrative label, Da Nang now covers ground half an hour's drive past Ngũ Hành Sơn, so a listicle, a maps result or a booking confirmation saying Da Nang no longer promises you are anywhere near My Khe. One entry in this guide is addressed Võ Nguyên Giáp, Điện Bàn Đông · a street name that also exists on the Da Nang beachfront, on a salon sitting 17 km from My Khe in a straight line. The label is correct. It is also useless to anyone staying in An Thượng."] },
    { h: "Book the pin. The text will disagree with itself all year.",
      p: ["Street names and house numbers came through the reform untouched, and that is the entire workaround: the part of a Vietnamese address a driver actually uses did not change, and the part that changed is the part nobody navigates by.",
          "So keep the pin. When a salon sends a location on Zalo or Messenger, save the pin rather than retyping the address, and when you order a Grab, route to the pin rather than to the ward. In the An Thượng grid the problem barely arises, because there the address is the alley number · this guide has salons on An Thượng 3, 5, 9, 14, 26, 27, 29, 32, 34 and 37, with <a href=\"/salons/street/an-thuong-3/\">four of them on An Thượng 3</a> alone. Say the alley number to a driver and you are finished.",
          "Expect the written record to contradict itself for the rest of the year. Vietnamese tech press reported Google Maps still serving Vietnamese addresses in the old four-tier format months after the switch, with the district line only due to start disappearing from mid-February. Hotel confirmations, e-visa forms, Booking listings and Maps are each converting on their own schedule. A mismatch between two of them is not evidence that a salon moved."] },
    { h: "The ward name is now the least useful field in the address",
      p: ["Worth saying plainly: the ward was never a useful way to choose a salon, and now it is not even stable. Nothing in an administrative label predicts the work or the bill. Distance from the sand does · the same treatment one street back from the beach runs 10–30% under the beachfront rate, and the city norm for plain gel colour is still about 200K. That gradient is rent and geography. It did not notice the reform, and <a href=\"/prices/\">the price tables</a> are unchanged.",
          "What predicts the work is what you can see from the door: single-use files, a steriliser with its light on, a menu written down. That is a <a href=\"/choosing-a-salon/\">ninety-second check</a> and it beats any amount of address forensics.",
          "One thing I would change in how you search, though. Stop typing ward names into Google. Type the street. “nail An Thượng 32” finds what you want; “nail Mỹ An ward” finds a ward that no longer exists, plus a lot of blog posts from 2023."] }
  ],
  faq: [
    ["Is Hoi An part of Da Nang now?", "Yes. On 1 July 2025 Hội An stopped being a separate city and was reorganised into Phường Hội An, Hội An Tây, Hội An Đông and Xã Tân Hiệp, all inside Đà Nẵng. It is still roughly 30 km south of the Da Nang beach strip, so a salon labelled Da Nang is not necessarily near My Khe · check the map pin before you book."],
    ["Why does my Da Nang nail salon's address say Ngũ Hành Sơn instead of Mỹ An?", "Because Mỹ An ward no longer exists. It was merged with Khuê Mỹ, Hòa Hải and Hòa Quý into one Ngũ Hành Sơn ward on 1 July 2025, and Ngũ Hành Sơn is now a ward rather than the district it used to be. The salon has not moved. Google's address data updated; most salons' own pages and printed cards have not."],
    ["Do I need the new ward names to book a Grab in Da Nang?", "No. Street names and house numbers did not change in the 2025 reform, and that is what a driver navigates by. Route to the saved map pin and give the street plus the number. Ward names are the one part of a Vietnamese address currently in flux across Maps, hotel confirmations and government forms."],
    ["Did the 2025 merger change nail salon prices in Da Nang?", "No. Prices track distance from the beach rather than administrative boundaries · plain gel colour sits around 200K city-wide, with roughly a 10–30% premium along the beachfront strip. The ward reshuffle moved none of those numbers."]
  ]
},
{
  slug: "gel-nails-beach-holiday-da-nang",
  title: "Gel nails and a week at My Khe: book the hands last, the toes first",
  desc: "Salt water is not what kills a manicure on a Da Nang beach holiday. Sand, sunscreen and hot pavement are · and the order you book things in matters more than the salon you pick.",
  date: "2026-08-10",
  cat: "Guides",
  read: 6,
  tldr: [
    "Cured gel is waterproof the moment you leave the lamp. The 24-hour rule belongs to air-dry polish.",
    "Toes on arrival, hands in the last 48 hours · toenails grow about a third as fast, so a pedicure outlives the trip.",
    "Sunscreen is why a white French goes cream by day five. Mid-tone colours do not show it.",
    "Swimming twice a day? Order BIAB (≈300K) rather than plain gel (≈200K), and skip the 3D work."
  ],
  body: [
    { h: "Cured is not drying",
      p: ["Gel polymerises under the lamp. It is hard when you stand up, which means you can walk out of a salon on Võ Nguyên Giáp and be in the water twenty minutes later. The twenty-four-hour caution people carry into Vietnam belongs to air-dry lacquer, not to anything cured. Lifeguards at My Khe are on duty from 5am to 8pm according to published beach guides, so the same-day swim is yours to take.",
          "What decides whether your set survives the week is not the water, it is the seal. Ask the technician to cap the free edge · a thin line of gel run over the tip of the nail rather than stopping short of it. It costs nothing, most good salons here do it without being asked, and it is worth roughly an extra week of wear on a beach trip."] },
    { h: "The sand is the problem, not the sea",
      p: ["Warm salt water does nothing to cured gel. Published guides to My Khe put the summer sea at 27–30°C, and at that temperature it is a bath, not a solvent. Sand is another matter. It is an abrasive, and a towel loaded with it is a buffing block you are rubbing over your top coat twice a day.",
          "High-shine finishes show it first. A cat-eye or chrome full set runs about 180K and it is exactly the finish that looks tired by day five, because the effect lives in the reflectivity of the surface and the surface is what the sand takes off. Matte and satin tops age more gracefully on a beach week, which is the opposite of what most people assume.",
          "Then there is the thermal cycle: air-conditioned room, 35°C pavement, sea, back to air conditioning, four times a day. Lifting starts at the cuticle line, and that daily expansion is what starts it."] },
    { h: "Sunscreen, and why the white French goes cream",
      p: ["Chemical UV filters are the usual explanation for pale gel picking up a yellow cast over a fortnight in the sun. It does not dissolve anything · the colour simply shifts, and it shifts most on white French tips, milky nudes, baby pink and pale grey. Anything mid-tone or deeper hides it completely. If you are on the sand daily and you want the set to look the same on the flight home as it did in the chair, that is your whole colour brief.",
          "The other sunscreen problem is adhesion. Do not put cream on your hands the morning of an appointment. A careful salon wipes the nail plate with alcohol before base coat anyway, but starting from clean dry hands is free and removes the variable."] },
    { h: "Toes first, hands last",
      p: ["Here is the ordering rule, and it is the one thing in this article worth arguing about: book the pedicure on your first or second day and leave the manicure until the final forty-eight hours.",
          "Toenails grow at roughly a third the rate of fingernails, and your feet do not open packaging, scrub sand out of a swimsuit or scrape a hire-bike lock. Gel polish for toes sits around 180K on top of a spa pedicure, and a set applied on day one of a two-week trip still reads as new when you land back home. Do it early and you get the benefit for the entire holiday · including the heel work, which is the part that actually matters after a week of sandals and hot pavement. The <a href=\"/services/spa-pedicure/\">tiers run 250K to 590K</a> and are separated by minutes, not adjectives.",
          "Fingers invert the logic. A 200K gel set that meets six days of My Khe looks its age by the end, and you will have paid full price to watch it degrade. Book it for the day before you fly and it travels home intact. The exception is honest: if the nails are for photographs taken during the trip rather than after it, do them early and accept that you may be paying about 55K for a single tip repair somewhere in the middle. That is a fair trade, not a failure · <a href=\"/prices/\">the price tables</a> are there so you can make it with your eyes open."] },
    { h: "If you are in the water twice a day, order something else",
      p: ["Plain gel is the wrong product for a swimmer. It is a colour layer, not a structural one, and the free edge is where it goes first. <a href=\"/services/biab-builder-gel/\">BIAB at around 300K</a> adds a builder layer that stops the tip splitting and refills at three to four weeks rather than being redone. GelX sits near 280K and gives you length that flexes instead of snapping.",
          "Shape short. Almond or squoval, filed level with the fingertip or barely past it. Long stiletto tips and a swimsuit strap are not compatible, and neither are long tips and the zip of a dry bag.",
          "And leave the 3D work for the city half of the trip. Charms, pearls and gel flowers are billed at 20K to 80K per nail here, which makes them tempting, and they are precisely the elements that catch on a towel and come off. Flat art survives the beach; anything with height does not."] },
    { h: "After August, none of this applies",
      p: ["Da Nang's dry season runs roughly February to August. From September the climate tables put the city at fifteen to twenty rain days a month, and October is the wet peak. The sea turns over, the beach empties, and the entire reason to delay your manicure disappears. This advice has a shelf life measured in weeks.",
          "Capacity is the August counterweight. Vietnamese press reported 7.74 million overnight visitors to the city in the first five months of 2026, up nearly 21% year on year, and the beachfront band is where that lands: 33 of the salons in this guide sit in the My Khe beachfront zone against 29 in My An and An Thượng. Evening slots there go. Book a day ahead for anything after 5pm, or ride ten minutes inland to <a href=\"/salons/area/hai-chau/\">Hai Châu, where 69 of them are</a> and the same work is cheaper. Whichever you pick, run the <a href=\"/choosing-a-salon/\">90-second check</a> at the door · a beach-side address guarantees a view, nothing more."] }
  ],
  faq: [
    ["Can I swim with gel nails?", "Yes, and immediately. Cured gel is waterproof from the moment you leave the lamp, so the 24-hour wait people apply to air-dry polish is unnecessary. Sea water does not dissolve it. What actually shortens a set on a beach holiday is sand abrasion on the top coat and sunscreen discolouring pale colours."],
    ["How long do gel nails last on a beach holiday in Da Nang?", "Two to three weeks under normal wear, closer to ten to fourteen days with daily sand and sea. Toe gel lasts far longer — often the whole trip and several weeks after — because toenails grow roughly a third as fast as fingernails."],
    ["Does sunscreen ruin gel nails?", "It does not damage the gel, but chemical UV filters are the usual explanation for pale gel picking up a yellow cast over a beach week. White French tips, milky nudes and baby pinks show it; mid-tone and dark colours do not. Separately, avoid putting cream on your hands right before an appointment, because it interferes with adhesion."],
    ["Should I get my nails done at the start or the end of my Da Nang trip?", "Toes at the start, hands at the end. A pedicure done on arrival still looks new on the flight home and you get the heel work for the whole holiday. A fingernail set done on day one has been through six days of sand by the time you leave, so book it for the final 48 hours instead."]
  ]
},
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
