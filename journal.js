/* The Da Nang Nail Guide · article queue.
   Appended to by ~/.claude/danang-guides/ automation — NEWEST FIRST.
   {slug,title,desc,date:"YYYY-MM-DD",cat,read,tldr:[],body:[{h,p:[]}],faq:[[q,a]]}
   Publishing is date-gated: build.js only renders entries dated today or earlier,
   so future-dated entries queue silently until their day (drip publishing).
   Editorial rules: real prices only (cross-check /prices/), no invented salons,
   ratings or reviews; public facts must be attributable to a public source. */

const JOURNAL = [
{
  slug: "whats-included-nail-appointment-da-nang",
  title: "Tea, a foot massage and no tip: the unbilled half of a Da Nang appointment",
  desc: "Forty-five of the 530 reviews behind this guide describe a massage. Twenty-three describe a drink. Exactly four mention leaving a tip · and not one describes being charged for the massage.",
  date: "2026-08-21",
  cat: "Guides",
  read: 6,
  tldr: [
    "45 of 530 reviews of Da Nang nail salons mention a massage. None of them describe it appearing on the bill.",
    "30 of the 111 shops Google types as nail salons name a second trade on the sign · spa, massage, head wash, lashes, hair.",
    "Ask for hands and feet at the same time. Four reviewers describe two technicians working in parallel; one mani-pedi finished in under an hour.",
    "Tipping barely exists here. Four reviews out of 530 mention it, against travel guides prescribing 10–15%."
  ],
  body: [
    { h: "Forty-five reviews describe a massage. None describe paying for one.",
      p: ["Of the 149 salons in this guide, Google types 111 as nail salons proper rather than spas or massage shops. Those 111 carry 530 public reviews in the dataset behind this site, 411 of them written during 2026. Forty-five of the 530 mention a massage. Twenty-two name feet, legs or calves; seven name shoulders, neck or back; four name hands or arms.",
          "Strip out the obvious explanation and the finding holds. Twenty-three of those forty-five mentions come from shops with neither <em>spa</em> nor <em>massage</em> anywhere in the trading name · fifteen different businesses selling themselves purely as nail shops. And in none of the forty-five does the reviewer describe the massage as a separate charge. One reviewer at a Hải Châu nailroom itemises the opposite: two extra layers of reinforcement gel and a hand massage thrown in, two hours of work, 190,000 VND on the bill.",
          "This is the single most misread thing about the Vietnamese nail trade by people arriving from Europe or North America. At home, the massage is an upsell with its own line and its own price. Here it is inside the service, because the service was never defined as <em>applying colour</em>. It was defined as looking after the hands and feet of whoever is sitting in the chair, and the technician will keep going until that is done."] },
    { h: "Thirty of the 111 name a second trade on the sign",
      p: ["Read the shopfronts as a menu and the model becomes obvious. Across the 149 businesses in this guide, 41 carry <em>spa</em> in the name, 19 carry <em>massage</em>, 10 carry foot or heel work, 7 advertise shampooing or a head spa and 7 carry hair. Narrow to the 111 that Google calls nail salons and 30 of them still name a second trade in their own title.",
          "The one worth knowing about is <em>gội đầu dưỡng sinh</em> · restorative head washing, a forty-to-sixty minute Vietnamese ritual of shampoo, scalp work, neck and shoulders, done lying down. A Hải Châu shop on Nguyễn Đôn Tiết puts that phrase directly in its trading name alongside nails. It is the natural thing to book while gel cures on somebody else's schedule, and there is no Western equivalent to compare it to, which is exactly why nobody books it.",
          "The same fact cuts the other way at the door. A shop whose main revenue is bodywork may run one nail technician against four massage beds, and your slot gets squeezed accordingly. One listing on Võ Nguyên Giáp advertises 50% off all massage treatments between noon and six in its own Google business name · which tells you plainly where that shop's midday priority sits. Check whose trade the room is actually built around before you sit down; it is the same <a href=\"/choosing-a-salon/\">doorway read</a> as the tools and the price list."] },
    { h: "The tea is not decoration. It is the clock starting.",
      p: ["Twenty-three of the 530 reviews mention being brought a drink, across 18 different salons; eleven name tea specifically. Five mention fruit, yogurt or crackers. Iced tea handed to a seated guest is ordinary Vietnamese practice rather than a nail-salon flourish, and it is free in the same unremarkable way it is free at a com tam counter.",
          "The scheduling consequence is the part to plan around. Between the drink, the colour chart and the conversation about shape, a Da Nang appointment carries fifteen to twenty minutes that appear on no menu. So a one-hour gel colour is seventy-five minutes in the chair, and a 40-minute express pedicure is an hour of your afternoon. Work backwards from that when you are booking against a closing time · <a href=\"/journal/nail-salon-opening-hours-da-nang/\">the boards mostly go dark between eight and ten</a>.",
          "Nobody will hurry you through the drink either, which means declining it to save time saves you roughly four minutes and costs you the only part of the appointment where you and the technician negotiate anything. Take the tea. Use it to show the photo."] },
    { h: "Ask for hands and feet at the same time",
      p: ["Four reviewers in the set describe two technicians working on them in parallel. One had a manicure and a pedicure done simultaneously and was out in under an hour. Another describes two technicians on a three-hour set. A third, arriving at a quiet moment, got nails and toes going at once with chrome and art on top. A fourth walked in as a group of three needing two full sets and three pedicures, and the shop phoned in extra staff.",
          "The arithmetic is worth the sentence it takes to ask. Sequentially, a gel colour is about an hour and <a href=\"/services/spa-pedicure/\">an express pedicure ritual is forty minutes</a>, so you are looking at an hour and three quarters before the tea. In parallel it is the length of the longer of the two. Nothing about this is a favour or a special request · it is how a shop with four chairs and six staff prefers to run at one in the afternoon.",
          "Put it in the booking message in those words: manicure and pedicure at the same time, two technicians. The exception is work billed <a href=\"/services/nail-art/\">per nail at 10K to 100K</a>. Hand-painted detail wants one person's undivided attention for two or three hours, and splitting the appointment there buys you nothing except a technician working on your feet while another tries to hold a line steady on your thumb."] },
    { h: "The express pedicure is the worst-value line on a Da Nang menu",
      p: ["Here is the opinion, and the numbers behind it are all on this site's own <a href=\"/prices/\">price tables</a>. The pedicure tiers run 250K for forty minutes, 380K for fifty-five, 450K for sixty-five and 590K for the seventy-five-minute signature with hot stones. A standalone thirty-minute foot and calf massage, bought on its own, is about 190K.",
          "Now look at what forty minutes has to hold: herbal soak, cuticle work, shaping, heel buffing and heel treatment, exfoliation, a mask, the massage, warm towels, oils. Something gets compressed, and the thing that gets compressed is always the massage, because it is the only step with no visible output. You cannot see a rushed calf massage in the photograph afterwards.",
          "So the 130K between the express and the 55-minute tier · a little over five dollars · buys fifteen additional minutes of somebody's hands, on the one item where minutes are the entire product. That is the best marginal spend available in a Da Nang salon, and it is better value than the 180K it costs to put gel colour on toes that are going into sandals for four days. If your budget for the afternoon is fixed, cut the toe polish and buy the time."] },
    { h: "Four reviews out of 530 mention a tip",
      p: ["Four. Two of them mention it only to note that the total they were quoting excluded one. One visitor rounded up out of embarrassment after an awkward moment with a foot scrub. One observes that the more careful staff at their shop get more. That is the entire gratuity conversation across 530 public reviews of Da Nang nail salons, most of them written this year.",
          "Compare that with what the travel-advice sites publish. The 2026 tipping guides · Asia Pioneer Travel, Travelness and the rest of that shelf · converge on 5–10% of the treatment at a neighbourhood spa and 10–15% at the upper end, some suggesting a flat 20–50K note. Nothing in that advice is offensive. It is simply describing a hotel spa in District 1 and being read by somebody about to sit down in a shophouse on Nguyễn Văn Thoại.",
          "The practical version: nobody is waiting for it, and fifteen percent of a <a href=\"/prices/\">200K gel colour is 30,000 đồng</a>. If you want to leave something, leave cash, physically, to the person who did the work · one reviewer in the set notes their salon has no card terminal at all, and no card machine anywhere routes a tip to a specific pair of hands. What actually registers as respect in this trade is asking for the same technician next time and turning up when you said you would.",
          "The bill is where your attention belongs instead, and it has exactly one reliable trap in it. <a href=\"/prices/\">Removal of an existing set is 60–90K</a>, it is legitimate work, and it is the line most likely to appear at the end without having been discussed at the start. Ask about that before you ask about anything else."] }
  ],
  faq: [
    ["What is included in a manicure or pedicure in Da Nang?", "More than the polish. Of 530 public reviews of the 111 nail salons in this guide, 45 mention a massage · 22 of them naming feet, legs or calves · and none describes it as a separate charge. A spa pedicure ritual contains a herbal soak, heel treatment, exfoliation, a mask, foot and calf massage and warm towels for 250–590K depending on the length. Many salons also hand you tea, and 23 reviews mention a drink. What is not included: removal of an old set at 60–90K, gel colour on toes at about 180K, and nail art billed per nail."],
    ["Do you tip at nail salons in Vietnam?", "It is not expected. Only four of the 530 reviews in this dataset mention a tip at all, and in each case the visitor volunteered it. Travel guides published in 2026 suggest 5–10% at a neighbourhood spa and 10–15% at the upper end, which on a 200K gel manicure is 20–30K, but the posted price is already the price the shop wants. If you do tip, hand cash directly to the technician who did the work · some salons have no card terminal, and a card payment cannot be routed to one person."],
    ["Can I get a manicure and pedicure at the same time in Da Nang?", "Yes, and you should ask. Four reviewers in this dataset describe two technicians working on their hands and feet in parallel, one finishing a full manicure and pedicure in under an hour against roughly an hour and three quarters sequentially. Say it plainly when you book: manicure and pedicure at the same time, two technicians. The exception is detailed hand-painted art, which needs one technician's full attention for two to three hours."],
    ["Is the foot massage included in the price of a pedicure in Da Nang?", "Yes, in any spa pedicure ritual · it is a listed step, not an add-on. The question is how many minutes of it you have bought. A 250K express ritual runs forty minutes total and has to fit soak, heel work, exfoliation, mask and massage into it, so the massage is the step that gets shortened. The 380K tier buys fifteen more minutes. A standalone thirty-minute foot and calf massage costs about 190K on its own, which is the clearest way to see what those minutes are worth."]
  ]
},
{
  slug: "book-nail-appointment-da-nang",
  title: "Message, never call: how booking a Da Nang nail salon actually works",
  desc: "144 of the 149 salons in this guide publish a phone number and every one of them is a mobile. In Vietnam that field is a chat address, not a phone line · and 59 salons publish no website at all.",
  date: "2026-08-18",
  cat: "Guides",
  read: 6,
  tldr: [
    "Not one salon in the set publishes a landline. The number is a Zalo address, and Zalo runs at 98% of Vietnamese mobile users.",
    "Zalo's catch for visitors: the sign-up code goes to a +84 number. A passport at a Viettel counter fixes it in fifteen minutes; a data-only eSIM does not.",
    "59 of the 149 publish no web link at all. Of the 90 that do, Instagram beats Facebook 28 to 22 and the grid is the real menu.",
    "Send two photos and one question · the design, your own hand at the length you want, and the total including removal."
  ],
  body: [
    { h: "One hundred and forty-four mobiles. Zero landlines.",
      p: ["Of the 149 salons in this guide, 144 publish a contact number. Every single one is a mobile · 143 sit on the Vietnamese 03/05/07/08/09 mobile prefixes and one is a foreign number. The Da Nang landline code, 0236, appears exactly nowhere in the set. Two salons publish neither a number nor a link and exist on the map as a pin and a name.",
          "That matters more than it sounds, because a Vietnamese mobile number is not primarily a thing you ring. It is an account handle. Zalo, the domestic messaging app, keys accounts to phone numbers, and its reach is not the sort of majority you can route around: 81.3 million monthly active users as of June 2026, 2.2 billion messages a day, and a Q&Me survey published in March 2026 putting usage at 98% of Vietnamese mobile users · ahead of Facebook at 91% and Messenger at 88%. Save the salon's number to your contacts, open Zalo, and the shop is either there or it is not. Usually it is.",
          "So here is the opinion, and I will not soften it: phoning a Da Nang nail salon is the worst available way to book one. You are attempting a second-language negotiation about shape, length and price, over a dryer and a scooter street, with no photo and nothing written down, against a technician whose hands are inside somebody's cuticles. A message costs the shop nothing to answer between clients and leaves you with a quote you can point at later."] },
    { h: "The Zalo catch, and the fifteen-minute fix",
      p: ["The obstacle is registration. Zalo verifies by SMS, and the practical reports from travellers and SIM sellers are consistent enough to plan around: the code wants a Vietnamese +84 number, and most foreign numbers never receive it. Accounts of whether an overseas number can be made to work vary. Do not stake a 7pm appointment on winning that argument.",
          "The fix is small. A Viettel or Vinaphone counter will take a passport, cash and about fifteen to twenty minutes and hand back a working local number. If you prefer an eSIM bought before the flight, read the plan twice: plenty are data-only, and a data-only eSIM cannot receive the SMS you need. Buy the one that includes an actual number. One local number then covers Zalo, Grab and every salon in this article for the length of the trip.",
          "No local number and no intention of getting one? Then your list is the 90 salons that publish a public link, plus walking in. Both work. You are simply choosing from a smaller board."] },
    { h: "Fifty-nine publish nothing · and the website field lies anyway",
      p: ["Fifty-nine of the 149 have no link of any kind on their listing. Of the 90 that do, only 23 point at a website the salon owns. The rest are handles: 28 Instagram, 22 Facebook, 4 TikTok or YouTube, 3 KakaoTalk channels, 2 WhatsApp <em>wa.me</em> links, and 8 stand-ins ranging from a Carrd page and a beacons.ai list to a shared Google Drive folder and, in one case, a TripAdvisor listing.",
          "One salon's website field points at the site of a landscaping company. That is not fraud, it is entropy · the field was filled once and nobody has looked at it since, which is the same reason the hours on these listings drift. Treat the link as a lead, not a fact.",
          "The useful read is that 59 of the 90 links are a social account rather than a site. In this trade the account <em>is</em> the shop's public face, kept current because it brings in work, while the website · when one exists · tends to be the thing that was built in a hurry two years ago."] },
    { h: "Read the last nine posts, not the best nine",
      p: ["An Instagram grid is a portfolio, which means it is edited. The way to un-edit it is to sort by date in your head. Scroll to the most recent nine posts and ignore everything above them. If the newest work is from 2024, you are looking at a shop that has lost the technician who cared about posting, and possibly the technician full stop.",
          "Then check that the recent work is the work you want. A grid full of chrome and cat-eye is a shop that does chrome and cat-eye well · that finish runs about 180K here · and it is not automatically the shop to hand a three-hour hand-painted brief to. <a href=\"/services/nail-art/\">Detailed art is billed per nail, 15K to 100K</a>, so the difference between the right shop and the nearly-right shop is real money as well as a real afternoon. If posts credit an artist by name, ask for that person when you message. Being asked for by name is the most reliable way to be taken seriously by a busy salon anywhere on earth.",
          "What a grid cannot show you is the trolley, the pouches and the bin, and those decide whether the set is safe rather than pretty. That is still a doorway job · the <a href=\"/choosing-a-salon/\">ninety-second check</a> · and no amount of scrolling substitutes for it."] },
    { h: "The market is set up for Korean before English",
      p: ["Count the shop signs and the customer mix stops being a guess. Twenty-six of the 149 salon names in this guide carry Hangul · <em>다낭 네일</em>, <em>네일샵</em>, whole Korean trading names sitting beside the Vietnamese one. Two carry Japanese script. Only 25 carry Vietnamese diacritics at all. Fifteen of the 26 Korean-signed shops are in <a href=\"/salons/area/hai-chau/\">Hải Châu</a>, inland, away from the western beach strip, and all three of the KakaoTalk channels in the set are Hải Châu addresses too. Both WhatsApp links, by contrast, are on the tourist side of the river.",
          "The Vietnamese travel listicles that cover this market · VinWonders, Vinpearl and the rest · have been flagging Korean-speaking staff as a selling point for years, and the signage says they are describing something real rather than repeating each other.",
          "For an English speaker the practical consequence is mild and slightly liberating. You are not the audience those shops are written for, and it does not matter, because the booking protocol below is visual. A Hangul sign is a signal that the shop is used to serving people who do not speak Vietnamese, which is exactly what you want. It is the shop with no sign in any second language and no posted menu that should give you pause."] },
    { h: "Two photos and one question",
      p: ["Send this, in this order. The date and a two-hour window rather than an exact time. The service in plain words · gel colour, BIAB, GelX, pedicure. Whether you are wearing anything that needs taking off, phrased as flatly as possible: <em>I have gel on from another salon, soak-off needed</em>, which is <a href=\"/prices/\">60–90K and the classic surprise line</a> on a final bill. Then the two photos: the design you want, and your own hand at the length you currently have, so the shop can see what it is starting from. Finish with one question · total price, including removal.",
          "Book the time to fit the work, not the other way round. Gel colour with shaping is about an hour. <a href=\"/services/gelx-nail-extensions/\">A GelX full set is roughly an hour</a> at around 280K. Hand-painted work is two to three hours and no message will make it faster. Six to eight in the evening is the only genuinely contested window in the Da Nang day, so ask for that one a day ahead and take anything before four on the same morning.",
          "Then judge the reply. A good one comes back inside a couple of hours · not instantly, because the technician is working · and contains a number. A reply that offers a time but dodges the total is telling you the price will be decided after they have seen your accent, and that is the entire tourist-pricing mechanism in one message. Screenshot the quote. In a city where <a href=\"/prices/\">plain gel colour sits around 200K</a>, the argument you never have to have is worth more than the eight dollars it protects."] }
  ],
  faq: [
    ["How do I book a nail appointment in Da Nang?", "By message, not by phone. 144 of the 149 salons in this guide publish a mobile number and none publishes a landline, because in Vietnam that number doubles as the salon's Zalo account. Message it with your date, the service, whether you need old gel removed, two photos and a request for the total price. If you have no Vietnamese number, use the Instagram or Facebook account instead · 50 of the 149 publish one."],
    ["Do nail salons in Da Nang use WhatsApp or Zalo?", "Zalo, overwhelmingly. Only two salons in this guide publish a WhatsApp link, against 28 on Instagram and 22 on Facebook, and Zalo itself reported 81.3 million monthly users in June 2026 with a 98% share of Vietnamese mobile users in a March 2026 Q&Me survey. Salons in the beach tourist zone are the likeliest to answer on WhatsApp or Instagram; inland shops run on Zalo."],
    ["Do I need a Vietnamese phone number to use Zalo as a tourist?", "In practice, yes · the verification code goes to a +84 number and most foreign numbers do not receive it. A Viettel or Vinaphone counter issues a local number against your passport in about fifteen to twenty minutes. If you buy an eSIM before flying, check that the plan includes a phone number rather than data only, or the code cannot reach you."],
    ["What should I send a salon when I want specific nail art?", "Two photos, not one: the design you are asking for, and your own hand at its current length, so the shop knows whether it is doing an overlay or building tips. Say how long you can sit · detailed hand-painted work is two to three hours · and ask for the total before you agree a time, since art is billed per nail at roughly 15K to 100K each."]
  ]
},
{
  slug: "nail-salon-opening-hours-da-nang",
  title: "Nine to nine, seven days, no lunch: the Da Nang nail week by the clock",
  desc: "143 of the 145 salons in this guide that publish hours never take a day off. The city's nail capacity halves between eight and nine in the evening · and most of what stays open past ten is not a nail salon.",
  date: "2026-08-15",
  cat: "Guides",
  read: 6,
  tldr: [
    "Sunday is a normal working day. 143 of the 145 salons publishing hours are open all seven.",
    "The city opens at nine. 133 are open at 9am, only 40 at 8am, and seven do not start before ten.",
    "Not one of the 145 takes a lunch break, which makes 1pm the emptiest hour on the board.",
    "After eight it collapses: 100 open at 8pm, 56 at 9pm, 40 at 10pm · and only 18 of that forty are nail salons."
  ],
  body: [
    { h: "Seven days, and not one lunch break",
      p: ["Of the 149 salons in this guide, 145 publish opening hours on Google. One hundred and forty-three of those 145 open every day of the week. The exceptions are two: one shop closed on Sundays, and one that lists Wednesday and Thursday as its only trading days while carrying the words <em>mở cửa 24/24</em> · open around the clock · in its own business name. Hold that second one in mind. It is the single best illustration of how much attention the hours field on a Google listing gets.",
          "Not one salon in the set publishes a midday closure. Zero of 145. That is worth sitting with if you are arriving from a country where the beauty trade takes Mondays off and the neighbourhood shuts between twelve and two: the Vietnamese shophouse model runs one long shift, and the nail trade runs it seven days.",
          "So the question in Da Nang is never whether a salon is open today. It is whether the technician you want is free, which is a different problem with a different solution. The one week a year this all stops being true is Tết, when the family businesses close for days and the ones that stay open charge a holiday rate. Nothing in August comes close."] },
    { h: "The city opens at nine",
      p: ["Nine o'clock is not a convention here, it is the convention. 133 of the 145 are open at 9am. At 8am the number is 40. Only seven salons in the entire set do not open until ten or later, and the latest first opening on record is half past eleven.",
          "The nine o'clock chair is the best-value hour in the day and almost nobody books it. The technician has not yet done six sets, the shop is quiet enough to actually discuss what you want, and you get the rest of the day back. The arithmetic is friendly too: <a href=\"/services/spa-pedicure/\">an express pedicure ritual runs about forty minutes at ≈250K, the seventy-five-minute signature ≈590K</a>. Start the signature at nine and you are out at a quarter past ten, before the pavement gets serious about the heat."] },
    { h: "One in the afternoon, when nobody is there",
      p: ["The lunch finding is the most useful thing in this article. Around it, half the small food economy of An Thượng and the Hải Châu shophouse streets goes quiet for an hour or two in the early afternoon. The salons do not. Every one of the 145 runs straight through, and the boards between roughly one and three are as empty as they get.",
          "That is the underused slot in this city. If you want a walk-in with a real choice of technician rather than whoever is free, go at one. It is also, in August, the correct place to spend an hour: mid-afternoon on a beach-road pavement is not a rest, and an air-conditioned chair with your feet in a herbal soak is a better use of the same sixty minutes than a fourth coffee."] },
    { h: "Between eight and ten, the city halves twice",
      p: ["Here is the evening, hour by hour, across the 145: 134 open at 7pm, 100 at 8pm, 56 at 9pm, 40 at 10pm, 27 at 11pm. It does not taper. It falls off a shelf between eight and nine and again between nine and ten.",
          "What changes with it is the composition, and that is the part no listicle tells you. Google types 109 of these businesses as nail salons proper; the rest are spas, massage shops, barbers and beauticians that carry nails on the menu. At 7pm, 101 of the 134 open are nail salons. At 10pm, 18 of the 40 are. Of the thirteen shops that publish a genuine after-midnight closing time · one to four in the morning, on the beach roads mostly · ten have Spa or Massage in the name. The late-night hours on the map belong to the massage economy, not the nail economy.",
          "Which brings me to the eleven listings in this set that simply say <em>Open 24 hours</em>. Treat that as an unedited field rather than an offer. One of the eleven is also listed as closed on Sundays, which cannot both be true, and nobody is filing a set at four in the morning on Nguyễn Văn Thoại. If you need a late slot, ring the shop.",
          "The reason six to eight is the only genuinely contested window in the day is arithmetic on the demand side. Da Nang reported close to 9.8 million visitors in the first half of 2026, up 22.5% year on year, with international arrivals near 5.2 million, or 52.8% of overnight visitors. Those people are sightseeing until dinner and free after it. Everyone wants the same two hours."] },
    { h: "The beachfront works later. Hải Châu goes to bed.",
      p: ["Split the same data by area and the map does something clean. Median closing time on the <a href=\"/salons/area/my-khe-beachfront/\">My Khe beachfront</a> is 10pm. In <a href=\"/salons/area/hai-chau/\">Hải Châu</a> and in My An & An Thượng it is half past eight. Sơn Trà closes at eight.",
          "In counts: 19 of the 30 beachfront salons with published hours close at 10pm or later, against 13 of 64 in Hải Châu. An hour and a half of median difference across four kilometres is not a coincidence · it is who walks past the door after dark, and it is the same footfall that puts the beachfront 10–30% above the city rate for the identical treatment.",
          "The practical version: before nine in the evening, ride inland. Hải Châu holds 69 of the 149 salons in this guide and charges less for the same work. After nine, the beach roads are your list, and you are paying the strip premium for the privilege of it being open. Both of those are fine trades as long as you know which one you are making."] },
    { h: "Work backwards from the closing time, not from your flight",
      p: ["The last-evening appointment is where visitors get burned, and the fix is a single change of reference point. Do not calculate from when you need to leave. Calculate from when the salon shuts.",
          "The durations are not mysterious. A proper soak-off removal is ten to fifteen minutes in foil. A plain gel colour with shaping and cuticle work is about an hour. <a href=\"/services/gelx-nail-extensions/\">A GelX full set is roughly an hour</a> because the tips arrive pre-shaped. A detailed hand-painted set is two to three hours of someone's undivided attention. Pedicure rituals are forty to seventy-five minutes.",
          "So against a board that says 20:30, the last honest start for gel-with-removal is seven o'clock, and for hand-painted work it was half past five. This is the opinion I will defend: the final hour before closing is the worst hour in the week to buy anything <a href=\"/services/nail-art/\">priced per nail</a>. Per-nail work is billed by complexity and delivered by patience, and the one thing you cannot ask a technician to do well at 20:15 is take their time. Order the plain colour, or come back at nine tomorrow morning.",
          "And if the shop is quoting you into a slot that clearly does not fit, that is data. A salon that will start a three-hour set forty minutes before it locks up is telling you something about its standards · the same way the <a href=\"/choosing-a-salon/\">things you can see from the doorway</a> do, and the same way <a href=\"/prices/\">a menu written down</a> does."] }
  ],
  faq: [
    ["Are nail salons open on Sunday in Da Nang?", "Almost all of them. Of the 145 salons in this guide that publish opening hours, 143 trade seven days a week · only one is closed on Sundays. Sunday is a normal working day for the Vietnamese nail trade, and no salon in the set takes a midday break either. The annual exception is Tết, when family-run shops close for several days."],
    ["What time do nail salons open in Da Nang?", "Nine in the morning is the city standard: 133 of 145 are open at 9am. Around 40 open at 8am, and only seven do not start until ten or later. The 9am slot is the quietest of the day and rarely booked, which makes it the easiest walk-in and the calmest appointment."],
    ["Can I get my nails done late at night in Da Nang?", "Until about ten, realistically. 100 salons are open at 8pm, 56 at 9pm and 40 at 10pm · but only 18 of that last forty are nail salons proper. The rest are spas and massage shops with nails on the menu. The genuinely late options sit on the My Khe beachfront, where the median closing time is 10pm against 8:30pm inland. Eleven listings claim 24-hour opening; ring before you plan around one."],
    ["Do I need to book a nail appointment in Da Nang, or can I walk in?", "Walk in between 9 and 11am or between 1 and 4pm and you will almost always be seated. Book for anything between 6 and 8pm, which is the only busy window in the day, and book for extensions or detailed art regardless of the hour, since those need two to three hours the salon has to reserve."]
  ]
},
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
