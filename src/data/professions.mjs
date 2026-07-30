// One entry per profession template page. Copy here is the SEO content —
// keep intros unique per page (no boilerplate reuse) or Google will treat
// the pages as duplicates.
export default [
  {
    slug: "photographers", name: "Photographers",
    intro: "Whether you shoot weddings, portraits, or product photography, your invoice needs to separate the session fee from deliverables like edited images and prints — clients understand (and pay) itemized invoices faster than a single lump sum.",
    items: [
      { desc: "Photography session (4 hours)", qty: 1, rate: 450 },
      { desc: "Edited digital images (25 photos)", qty: 1, rate: 300 },
      { desc: "Travel to location", qty: 1, rate: 50 },
    ],
    notes: "50% deposit due at booking; balance due within 14 days of image delivery.",
    tips: [
      "Invoice the deposit before the shoot and the balance on delivery — never hand over final images before the balance clears.",
      "Spell out usage rights on the invoice (personal use vs. commercial license) so there's no dispute later.",
      "Charge travel as its own line item; hiding it in the session fee makes your rate look inflated.",
    ],
  },
  {
    slug: "graphic-designers", name: "Graphic Designers",
    intro: "Design work is invisible labor until it's itemized. Breaking a project into concepts, revisions, and final file delivery shows clients what they're paying for and protects you when the revision count starts creeping.",
    items: [
      { desc: "Logo design — 3 initial concepts", qty: 1, rate: 600 },
      { desc: "Revision rounds", qty: 2, rate: 120 },
      { desc: "Final files (vector, web, print packages)", qty: 1, rate: 150 },
    ],
    notes: "Payment due within 15 days. Final files released upon payment.",
    tips: [
      "Put the included revision count on the invoice — extra rounds become visible, billable line items instead of scope creep.",
      "Withhold source files (AI/PSD) until the invoice is paid; deliver previews with watermarks in the meantime.",
      "Bill file-format packages separately — clients who need print-ready or brand-book deliverables will pay for them.",
    ],
  },
  {
    slug: "web-developers", name: "Web Developers",
    intro: "Development invoices work best when they mirror the proposal: milestones for project work, hours for maintenance. A client who can match each invoice line to something they approved pays without questions.",
    items: [
      { desc: "Website development — milestone 2 of 3", qty: 1, rate: 2500 },
      { desc: "Additional feature: contact form integration", qty: 3, rate: 95 },
      { desc: "Hosting setup and deployment", qty: 1, rate: 150 },
    ],
    notes: "Net 15. Late payments accrue 1.5% monthly interest. Site launches after final payment.",
    tips: [
      "Invoice by milestone, not at project end — a 3-milestone schedule means you're never more than a third of the project exposed.",
      "Track change requests as separate line items with hours; it educates clients that new features aren't free.",
      "Keep the production launch (DNS cutover) as the final deliverable after the last payment clears.",
    ],
  },
  {
    slug: "freelance-writers", name: "Freelance Writers",
    intro: "Writers get paid faster when invoices name the actual deliverables — the article titles, word counts, and rates agreed up front — rather than a vague \"content services\" line a client's accounting team will question.",
    items: [
      { desc: "Blog article: \"10 Ways to...\" (1,500 words)", qty: 1, rate: 375 },
      { desc: "Blog article: \"The Complete Guide to...\" (2,000 words)", qty: 1, rate: 500 },
      { desc: "Meta descriptions and social copy", qty: 1, rate: 75 },
    ],
    notes: "Payment due within 15 days of invoice date. Work remains property of the writer until paid in full.",
    tips: [
      "List each article by title and word count — vague line items are the #1 reason content invoices bounce back from accounting.",
      "Invoice per piece on delivery for new clients; move to monthly batch invoicing only after two clean payments.",
      "State that copyright transfers on payment, not on delivery — it's your only real leverage on late payers.",
    ],
  },
  {
    slug: "videographers", name: "Videographers",
    intro: "Video projects sprawl — shoot days, editing hours, licensing, revisions. An invoice that separates production from post-production keeps the conversation about scope honest and makes deposits feel natural to clients.",
    items: [
      { desc: "Filming day (crew + equipment)", qty: 1, rate: 1200 },
      { desc: "Editing and color grading", qty: 8, rate: 85 },
      { desc: "Licensed music track", qty: 1, rate: 60 },
    ],
    notes: "50% deposit to reserve the shoot date; balance due within 14 days of final delivery.",
    tips: [
      "Take a deposit that covers your hard costs (crew, rentals) so a cancellation never puts you out of pocket.",
      "Bill editing hourly with an estimate range — flat-fee edits punish you when clients request 'one more pass.'",
      "Deliver a watermarked review cut; the clean export ships when the final invoice is paid.",
    ],
  },
  {
    slug: "consultants", name: "Consultants",
    intro: "Consulting invoices carry your credibility: a clean, itemized invoice with clear terms signals the same rigor you bring to the engagement. Retainers, hourly work, and expenses should never share a single line.",
    items: [
      { desc: "Consulting services — monthly retainer", qty: 1, rate: 3000 },
      { desc: "Additional strategy sessions", qty: 2, rate: 250 },
      { desc: "Client-site travel expenses (receipts attached)", qty: 1, rate: 340 },
    ],
    notes: "Net 30. Please reference the invoice number with your payment.",
    tips: [
      "Invoice retainers at the start of the month, not the end — you're reserving capacity, not billing in arrears.",
      "Pass through expenses at cost with receipts attached; marking them up quietly is how trust erodes.",
      "Reference the contract or SOW number on every invoice so procurement can approve it without a phone call.",
    ],
  },
  {
    slug: "cleaning-services", name: "Cleaning Services",
    intro: "Cleaning businesses live on repeat clients, and clear invoices are part of the service. Listing rooms, add-ons, and supplies separately shows customers exactly what they got — and makes upsells like deep cleans easy to offer.",
    items: [
      { desc: "Standard house cleaning (3 bed / 2 bath)", qty: 1, rate: 160 },
      { desc: "Deep clean add-on: oven and refrigerator", qty: 1, rate: 45 },
      { desc: "Cleaning supplies", qty: 1, rate: 15 },
    ],
    notes: "Payment due upon receipt. We accept cash, check, Zelle, and Venmo.",
    tips: [
      "Invoice recurring clients on a fixed schedule (same day each week or month) so payment becomes routine.",
      "Line-item add-ons like ovens, windows, and garages — it reminds clients those aren't included by default.",
      "Offer a small discount for prepaid monthly plans; predictable cash flow beats a few extra dollars.",
    ],
  },
  {
    slug: "plumbers", name: "Plumbers",
    intro: "A plumbing invoice has to survive scrutiny — customers compare it to the estimate, insurance companies request it, and disputes hinge on it. Separating labor, parts, and service fees keeps every conversation short.",
    items: [
      { desc: "Service call / diagnostic fee", qty: 1, rate: 89 },
      { desc: "Labor — water heater replacement", qty: 3, rate: 110 },
      { desc: "Parts: 40-gal water heater + fittings", qty: 1, rate: 685 },
    ],
    notes: "Due upon completion. 90-day warranty on labor; manufacturer warranty on parts.",
    tips: [
      "List parts with enough detail (brand, size) that the customer can verify pricing — it preempts the 'I found it cheaper online' call.",
      "State your warranty terms directly on the invoice; it's a selling point and it limits liability.",
      "Collect on completion for residential work — receivables from one-time customers are the hardest money to chase.",
    ],
  },
  {
    slug: "electricians", name: "Electricians",
    intro: "Electrical work is priced on trust and safety. An invoice that itemizes the panel work, materials, and permit fees reads as professional documentation — which matters when the customer files it with their home records or insurance.",
    items: [
      { desc: "Labor — panel upgrade to 200A", qty: 6, rate: 105 },
      { desc: "Materials: panel, breakers, wire", qty: 1, rate: 540 },
      { desc: "Permit and inspection fee", qty: 1, rate: 120 },
    ],
    notes: "Due upon completion. Work performed to NEC code; permit documentation provided on request.",
    tips: [
      "Pass permit fees through at cost as their own line — bundling them into labor makes your rate look higher than it is.",
      "Note the code standard the work meets; it adds legitimacy and helps at resale inspections.",
      "For jobs over a day's work, invoice materials up front and labor on completion.",
    ],
  },
  {
    slug: "handymen", name: "Handyman Services",
    intro: "Handyman jobs are small, varied, and frequent — which makes sloppy invoicing expensive. A clean per-task breakdown gets you paid on the spot and becomes a menu of services for the customer's next call.",
    items: [
      { desc: "Drywall patch and paint (living room)", qty: 1, rate: 140 },
      { desc: "Ceiling fan installation", qty: 1, rate: 95 },
      { desc: "Hardware and materials", qty: 1, rate: 38 },
    ],
    notes: "Payment due upon completion. Cash, check, or card accepted.",
    tips: [
      "Itemize every task even on small jobs — customers who see five completed items pay $300 more happily than one vague line.",
      "Photograph completed work and reference it on the invoice; it closes disputes before they start.",
      "Set a minimum service charge and show it as a line item so short visits stay profitable.",
    ],
  },
  {
    slug: "landscapers", name: "Landscapers",
    intro: "Landscaping mixes one-time projects with recurring maintenance, and your invoices should keep those cleanly separate. Customers on monthly service want predictability; project customers want detail.",
    items: [
      { desc: "Monthly lawn maintenance (mow, edge, blow)", qty: 4, rate: 55 },
      { desc: "Mulch installation (5 cu yd, installed)", qty: 1, rate: 325 },
      { desc: "Shrub trimming and haul-away", qty: 1, rate: 110 },
    ],
    notes: "Due within 10 days. Recurring service is billed on the 1st of each month.",
    tips: [
      "Bill maintenance on the 1st for the month ahead — arrears billing turns every slow-paying customer into a free month of work.",
      "Price materials installed (mulch, sod, plants) rather than splitting material and labor; it's how customers compare quotes.",
      "Note weather-delay policies on the invoice so skipped visits don't become billing disputes.",
    ],
  },
  {
    slug: "painters", name: "Painters",
    intro: "Painting bids are won on price but disputes happen on scope. An invoice that names the rooms, surfaces, and paint products used protects your margin and documents the job for the customer's records.",
    items: [
      { desc: "Interior painting — living room and hallway (walls, 2 coats)", qty: 1, rate: 780 },
      { desc: "Ceiling paint upgrade", qty: 1, rate: 160 },
      { desc: "Paint and supplies (Sherwin-Williams SuperPaint)", qty: 1, rate: 240 },
    ],
    notes: "30% deposit to schedule; balance due on completion and walkthrough.",
    tips: [
      "Name the paint brand and line on the invoice — it justifies your price against lowball bids using contractor-grade paint.",
      "Invoice the deposit to lock the schedule; free estimates are marketing, held dates are not.",
      "Do the final walkthrough with the customer before handing the invoice — collect while satisfaction is highest.",
    ],
  },
  {
    slug: "hair-stylists", name: "Hair Stylists",
    intro: "Independent stylists and booth renters need invoices for bridal parties, on-location work, and product sales — the jobs where card-at-the-chair doesn't happen. An itemized invoice also quietly documents your pricing for repeat bookings.",
    items: [
      { desc: "Bridal hair — bride (trial + day-of)", qty: 1, rate: 250 },
      { desc: "Bridal party styling", qty: 4, rate: 85 },
      { desc: "On-location travel fee", qty: 1, rate: 60 },
    ],
    notes: "Non-refundable 30% deposit to hold the date; balance due one week before the event.",
    tips: [
      "Collect event balances before the day, not after — wedding-day invoices chase worse than any other kind.",
      "Charge trials as their own line; free trials are a discount you're choosing, so show the value.",
      "Add a travel fee line for on-location work even if small — it sets the precedent for farther bookings.",
    ],
  },
  {
    slug: "makeup-artists", name: "Makeup Artists",
    intro: "Whether it's bridal, editorial, or production work, makeup artists juggle deposits, kit fees, and travel. Invoices that separate artistry from expenses look professional to coordinators and keep you whole on costs.",
    items: [
      { desc: "Bridal makeup — bride (trial + day-of)", qty: 1, rate: 275 },
      { desc: "Bridal party makeup", qty: 3, rate: 90 },
      { desc: "Kit fee and touch-up kit", qty: 1, rate: 40 },
    ],
    notes: "Deposit of 30% secures the date; remaining balance due 7 days before the event.",
    tips: [
      "Kit fees are standard in production work — bill one without apology; your product costs are real.",
      "Put early-start surcharges (before 7am) on the invoice as a line item; sunrise weddings should pay for the alarm.",
      "For agency and production jobs, match the invoice to the call sheet: date, production name, usage.",
    ],
  },
  {
    slug: "personal-trainers", name: "Personal Trainers",
    intro: "Trainers selling session packs and monthly programming need invoices that make prepayment the obvious choice. A clear pack price next to the single-session rate does your selling for you.",
    items: [
      { desc: "Personal training — 10-session pack", qty: 1, rate: 650 },
      { desc: "Nutrition plan (initial + 2 check-ins)", qty: 1, rate: 120 },
    ],
    notes: "Payment due before first session of the pack. Sessions expire 90 days from purchase.",
    tips: [
      "Invoice packs up front with an expiration date — open-ended sessions become scheduling debt you carry for free.",
      "Show the per-session math on pack invoices ($65/session vs. $80 drop-in) so the discount is visible.",
      "Bill no-shows per your cancellation policy and reference that policy on every invoice.",
    ],
  },
  {
    slug: "tutors", name: "Tutors",
    intro: "Tutors invoicing parents or adult students do best with simple monthly batches: dates, sessions, subject, rate. Parents paying for results want to see the record of what happened, and monthly invoicing beats chasing per-session payments.",
    items: [
      { desc: "Math tutoring — 60 min sessions (Mar 3, 10, 17, 24)", qty: 4, rate: 60 },
      { desc: "SAT practice test review session", qty: 1, rate: 75 },
    ],
    notes: "Due within 7 days. 24-hour notice required to reschedule without charge.",
    tips: [
      "List session dates on the invoice — it's the record parents check against their calendar, and it kills disputes.",
      "Invoice monthly rather than per session; fewer transactions means fewer chances for payments to slip.",
      "State your cancellation window on every invoice and charge for late cancels consistently from day one.",
    ],
  },
  {
    slug: "djs", name: "DJs",
    intro: "DJ bookings collapse without deposits — the date is the product. Your invoice should lock the date with a deposit, spell out hours and overtime, and price add-ons like lighting and early setup separately.",
    items: [
      { desc: "Wedding reception DJ package (5 hours)", qty: 1, rate: 1100 },
      { desc: "Ceremony sound system add-on", qty: 1, rate: 200 },
      { desc: "Uplighting package", qty: 1, rate: 150 },
    ],
    notes: "Non-refundable 25% deposit reserves your date; balance due 14 days before the event. Overtime billed at $150/hr.",
    tips: [
      "Put the overtime rate on the invoice before the event — negotiating at 11pm on the dance floor never goes your way.",
      "Make the deposit non-refundable and say so; you're turning down other bookings for that date.",
      "Itemize add-ons (lighting, ceremony audio, photo booth) so the base package price stays competitive in comparisons.",
    ],
  },
  {
    slug: "event-planners", name: "Event Planners",
    intro: "Event planning invoices juggle your fee and pass-through vendor costs, and mixing them is how planners end up floating client expenses interest-free. Keep your management fee and reimbursables ruthlessly separate.",
    items: [
      { desc: "Event planning and coordination fee", qty: 1, rate: 2200 },
      { desc: "Vendor deposits paid on client's behalf (florist, rentals)", qty: 1, rate: 1450 },
      { desc: "Day-of coordination assistant", qty: 1, rate: 300 },
    ],
    notes: "Planning fee: 50% at signing, 50% two weeks before the event. Vendor costs invoiced as incurred, due on receipt.",
    tips: [
      "Invoice vendor pass-throughs immediately as incurred — never let client money age on your card.",
      "Split your fee across milestones (signing, month-out, event week) so cash flow matches your workload.",
      "Attach vendor receipts to reimbursable invoices; transparency here is why clients refer you.",
    ],
  },
  {
    slug: "virtual-assistants", name: "Virtual Assistants",
    intro: "VAs bill small amounts frequently, so friction is the enemy: a consistent monthly invoice with an hours log and a rollover policy turns 'did I really use 20 hours?' conversations into thirty-second approvals.",
    items: [
      { desc: "Virtual assistant services — 20-hour monthly package", qty: 1, rate: 700 },
      { desc: "Additional hours beyond package", qty: 3, rate: 40 },
    ],
    notes: "Package billed on the 1st of each month, due within 5 days. Unused hours do not roll over.",
    tips: [
      "Attach or link a simple hours log with each invoice — visibility is what makes retainer clients renew.",
      "Bill the package at the start of the month; you're reserving your calendar, not just logging time.",
      "Price overage hours above the package rate — it nudges clients to upgrade tiers instead of nickel-and-diming.",
    ],
  },
  {
    slug: "social-media-managers", name: "Social Media Managers",
    intro: "Social media management is a monthly retainer business, and your invoice is the monthly reminder of value delivered. Tie line items to the deliverables in your package — posts, platforms, reporting — not just 'management.'",
    items: [
      { desc: "Social media management — 3 platforms (12 posts/mo each)", qty: 1, rate: 1200 },
      { desc: "Paid ads management (ad spend billed separately)", qty: 1, rate: 350 },
      { desc: "Monthly analytics report", qty: 1, rate: 0 },
    ],
    notes: "Retainer due on the 1st of each month. Ad spend is paid directly by the client to the platforms.",
    tips: [
      "Never run client ad spend through your own card — have clients pay platforms directly and bill only your management fee.",
      "Include the monthly report as a $0 line item; showing included value fights the 'what am I paying for?' churn.",
      "Spell out the post volume per platform on the invoice so scope creep ('can you also do TikTok?') is visible.",
    ],
  },
  {
    slug: "bookkeepers", name: "Bookkeepers",
    intro: "A bookkeeper's invoice should model what a clean invoice looks like — your clients will judge your craft by it. Flat monthly pricing with clearly scoped inclusions beats hourly billing for nearly every small-business engagement.",
    items: [
      { desc: "Monthly bookkeeping — up to 150 transactions", qty: 1, rate: 450 },
      { desc: "Accounts receivable follow-up", qty: 1, rate: 100 },
      { desc: "Prior-month cleanup (one-time)", qty: 4, rate: 65 },
    ],
    notes: "Due within 10 days. Monthly service is billed on the 1st.",
    tips: [
      "Price by transaction volume tiers, not hours — clients hate variable bills for what feels like the same service.",
      "Bill cleanup projects separately from ongoing service so the monthly price stays anchored low.",
      "Send your invoice the same day each month; as the bookkeeper, your own billing discipline is the sales pitch.",
    ],
  },
  {
    slug: "translators", name: "Translators",
    intro: "Translation is priced by the word, the page, or the hour depending on the work — and your invoice should show the unit math explicitly. Agencies and direct clients alike approve invoices faster when the count and rate are visible.",
    items: [
      { desc: "Translation EN→ES — technical manual (8,200 words @ $0.12)", qty: 1, rate: 984 },
      { desc: "Rush fee (48-hour turnaround)", qty: 1, rate: 150 },
      { desc: "Certified translation affidavit", qty: 1, rate: 35 },
    ],
    notes: "Net 15. Certified documents ship after payment is received.",
    tips: [
      "Show the word count and per-word rate in the line description — it's the first thing agency PMs verify.",
      "Charge rush fees as a visible percentage or flat line; absorbing rush work silently resets client expectations.",
      "For certified translations, hold the stamped documents until payment — they're your natural collateral.",
    ],
  },
  {
    slug: "carpenters", name: "Carpenters",
    intro: "Custom carpentry invoices bridge the gap between a handshake estimate and a finished piece the client can touch. Itemizing materials at cost and labor by phase keeps change orders clean and your margin intact.",
    items: [
      { desc: "Custom built-in bookshelf — design and materials", qty: 1, rate: 850 },
      { desc: "Fabrication and installation labor", qty: 14, rate: 75 },
      { desc: "Finish: stain and polyurethane", qty: 1, rate: 180 },
    ],
    notes: "50% deposit for materials to begin; balance due on installation.",
    tips: [
      "Collect a materials deposit before you buy lumber — custom work has no resale if the client walks.",
      "Break labor into phases (fabrication, install, finish) so progress invoices map to what the client can see.",
      "Write change orders as new line items on the next invoice, priced when agreed — not remembered at the end.",
    ],
  },
  {
    slug: "lawn-care", name: "Lawn Care",
    intro: "Lawn care runs on volume and repetition: dozens of small invoices a month. Standardized line items and a fixed billing day turn collections into a routine — and free you to sell seasonal extras like aeration and fertilization.",
    items: [
      { desc: "Weekly mowing service (4 visits)", qty: 4, rate: 45 },
      { desc: "Fertilizer application (spring treatment)", qty: 1, rate: 85 },
      { desc: "Core aeration (one-time)", qty: 1, rate: 130 },
    ],
    notes: "Billed monthly on the 1st, due by the 10th. Service pauses on accounts 30+ days past due.",
    tips: [
      "State the pause-on-nonpayment policy on every invoice — it collects better than any late fee.",
      "Invoice seasonal upsells (aeration, overseeding, cleanup) the day the work is done, separate from the monthly bill.",
      "Show the per-visit count each month; customers forget how many times you came, the invoice shouldn't.",
    ],
  },
];
