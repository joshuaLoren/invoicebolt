// One entry per profession template page. Copy here is the SEO content —
// keep intros unique per page (no boilerplate reuse) or Google will treat
// the pages as duplicates.
export default [
  {
    "slug": "photographers",
    "name": "Photographers",
    "intro": "Whether you shoot weddings, portraits, or product photography, your invoice needs to separate the session fee from deliverables like edited images and prints — clients understand (and pay) itemized invoices faster than a single lump sum.",
    "items": [
      {
        "desc": "Photography session (4 hours)",
        "qty": 1,
        "rate": 450
      },
      {
        "desc": "Edited digital images (25 photos)",
        "qty": 1,
        "rate": 300
      },
      {
        "desc": "Travel to location",
        "qty": 1,
        "rate": 50
      }
    ],
    "notes": "50% deposit due at booking; balance due within 14 days of image delivery.",
    "tips": [
      "Invoice the deposit before the shoot and the balance on delivery — never hand over final images before the balance clears.",
      "Spell out usage rights on the invoice (personal use vs. commercial license) so there's no dispute later.",
      "Charge travel as its own line item; hiding it in the session fee makes your rate look inflated."
    ]
  },
  {
    "slug": "graphic-designers",
    "name": "Graphic Designers",
    "intro": "Design work is invisible labor until it's itemized. Breaking a project into concepts, revisions, and final file delivery shows clients what they're paying for and protects you when the revision count starts creeping.",
    "items": [
      {
        "desc": "Logo design — 3 initial concepts",
        "qty": 1,
        "rate": 600
      },
      {
        "desc": "Revision rounds",
        "qty": 2,
        "rate": 120
      },
      {
        "desc": "Final files (vector, web, print packages)",
        "qty": 1,
        "rate": 150
      }
    ],
    "notes": "Payment due within 15 days. Final files released upon payment.",
    "tips": [
      "Put the included revision count on the invoice — extra rounds become visible, billable line items instead of scope creep.",
      "Withhold source files (AI/PSD) until the invoice is paid; deliver previews with watermarks in the meantime.",
      "Bill file-format packages separately — clients who need print-ready or brand-book deliverables will pay for them."
    ]
  },
  {
    "slug": "web-developers",
    "name": "Web Developers",
    "intro": "Development invoices work best when they mirror the proposal: milestones for project work, hours for maintenance. A client who can match each invoice line to something they approved pays without questions.",
    "items": [
      {
        "desc": "Website development — milestone 2 of 3",
        "qty": 1,
        "rate": 2500
      },
      {
        "desc": "Additional feature: contact form integration",
        "qty": 3,
        "rate": 95
      },
      {
        "desc": "Hosting setup and deployment",
        "qty": 1,
        "rate": 150
      }
    ],
    "notes": "Net 15. Late payments accrue 1.5% monthly interest. Site launches after final payment.",
    "tips": [
      "Invoice by milestone, not at project end — a 3-milestone schedule means you're never more than a third of the project exposed.",
      "Track change requests as separate line items with hours; it educates clients that new features aren't free.",
      "Keep the production launch (DNS cutover) as the final deliverable after the last payment clears."
    ]
  },
  {
    "slug": "freelance-writers",
    "name": "Freelance Writers",
    "intro": "Writers get paid faster when invoices name the actual deliverables — the article titles, word counts, and rates agreed up front — rather than a vague \"content services\" line a client's accounting team will question.",
    "items": [
      {
        "desc": "Blog article: \"10 Ways to...\" (1,500 words)",
        "qty": 1,
        "rate": 375
      },
      {
        "desc": "Blog article: \"The Complete Guide to...\" (2,000 words)",
        "qty": 1,
        "rate": 500
      },
      {
        "desc": "Meta descriptions and social copy",
        "qty": 1,
        "rate": 75
      }
    ],
    "notes": "Payment due within 15 days of invoice date. Work remains property of the writer until paid in full.",
    "tips": [
      "List each article by title and word count — vague line items are the #1 reason content invoices bounce back from accounting.",
      "Invoice per piece on delivery for new clients; move to monthly batch invoicing only after two clean payments.",
      "State that copyright transfers on payment, not on delivery — it's your only real leverage on late payers."
    ]
  },
  {
    "slug": "videographers",
    "name": "Videographers",
    "intro": "Video projects sprawl — shoot days, editing hours, licensing, revisions. An invoice that separates production from post-production keeps the conversation about scope honest and makes deposits feel natural to clients.",
    "items": [
      {
        "desc": "Filming day (crew + equipment)",
        "qty": 1,
        "rate": 1200
      },
      {
        "desc": "Editing and color grading",
        "qty": 8,
        "rate": 85
      },
      {
        "desc": "Licensed music track",
        "qty": 1,
        "rate": 60
      }
    ],
    "notes": "50% deposit to reserve the shoot date; balance due within 14 days of final delivery.",
    "tips": [
      "Take a deposit that covers your hard costs (crew, rentals) so a cancellation never puts you out of pocket.",
      "Bill editing hourly with an estimate range — flat-fee edits punish you when clients request 'one more pass.'",
      "Deliver a watermarked review cut; the clean export ships when the final invoice is paid."
    ]
  },
  {
    "slug": "consultants",
    "name": "Consultants",
    "intro": "Consulting invoices carry your credibility: a clean, itemized invoice with clear terms signals the same rigor you bring to the engagement. Retainers, hourly work, and expenses should never share a single line.",
    "items": [
      {
        "desc": "Consulting services — monthly retainer",
        "qty": 1,
        "rate": 3000
      },
      {
        "desc": "Additional strategy sessions",
        "qty": 2,
        "rate": 250
      },
      {
        "desc": "Client-site travel expenses (receipts attached)",
        "qty": 1,
        "rate": 340
      }
    ],
    "notes": "Net 30. Please reference the invoice number with your payment.",
    "tips": [
      "Invoice retainers at the start of the month, not the end — you're reserving capacity, not billing in arrears.",
      "Pass through expenses at cost with receipts attached; marking them up quietly is how trust erodes.",
      "Reference the contract or SOW number on every invoice so procurement can approve it without a phone call."
    ]
  },
  {
    "slug": "cleaning-services",
    "name": "Cleaning Services",
    "intro": "Cleaning businesses live on repeat clients, and clear invoices are part of the service. Listing rooms, add-ons, and supplies separately shows customers exactly what they got — and makes upsells like deep cleans easy to offer.",
    "items": [
      {
        "desc": "Standard house cleaning (3 bed / 2 bath)",
        "qty": 1,
        "rate": 160
      },
      {
        "desc": "Deep clean add-on: oven and refrigerator",
        "qty": 1,
        "rate": 45
      },
      {
        "desc": "Cleaning supplies",
        "qty": 1,
        "rate": 15
      }
    ],
    "notes": "Payment due upon receipt. We accept cash, check, Zelle, and Venmo.",
    "tips": [
      "Invoice recurring clients on a fixed schedule (same day each week or month) so payment becomes routine.",
      "Line-item add-ons like ovens, windows, and garages — it reminds clients those aren't included by default.",
      "Offer a small discount for prepaid monthly plans; predictable cash flow beats a few extra dollars."
    ]
  },
  {
    "slug": "plumbers",
    "name": "Plumbers",
    "intro": "A plumbing invoice has to survive scrutiny — customers compare it to the estimate, insurance companies request it, and disputes hinge on it. Separating labor, parts, and service fees keeps every conversation short.",
    "items": [
      {
        "desc": "Service call / diagnostic fee",
        "qty": 1,
        "rate": 89
      },
      {
        "desc": "Labor — water heater replacement",
        "qty": 3,
        "rate": 110
      },
      {
        "desc": "Parts: 40-gal water heater + fittings",
        "qty": 1,
        "rate": 685
      }
    ],
    "notes": "Due upon completion. 90-day warranty on labor; manufacturer warranty on parts.",
    "tips": [
      "List parts with enough detail (brand, size) that the customer can verify pricing — it preempts the 'I found it cheaper online' call.",
      "State your warranty terms directly on the invoice; it's a selling point and it limits liability.",
      "Collect on completion for residential work — receivables from one-time customers are the hardest money to chase."
    ]
  },
  {
    "slug": "electricians",
    "name": "Electricians",
    "intro": "Electrical work is priced on trust and safety. An invoice that itemizes the panel work, materials, and permit fees reads as professional documentation — which matters when the customer files it with their home records or insurance.",
    "items": [
      {
        "desc": "Labor — panel upgrade to 200A",
        "qty": 6,
        "rate": 105
      },
      {
        "desc": "Materials: panel, breakers, wire",
        "qty": 1,
        "rate": 540
      },
      {
        "desc": "Permit and inspection fee",
        "qty": 1,
        "rate": 120
      }
    ],
    "notes": "Due upon completion. Work performed to NEC code; permit documentation provided on request.",
    "tips": [
      "Pass permit fees through at cost as their own line — bundling them into labor makes your rate look higher than it is.",
      "Note the code standard the work meets; it adds legitimacy and helps at resale inspections.",
      "For jobs over a day's work, invoice materials up front and labor on completion."
    ]
  },
  {
    "slug": "handymen",
    "name": "Handyman Services",
    "intro": "Handyman jobs are small, varied, and frequent — which makes sloppy invoicing expensive. A clean per-task breakdown gets you paid on the spot and becomes a menu of services for the customer's next call.",
    "items": [
      {
        "desc": "Drywall patch and paint (living room)",
        "qty": 1,
        "rate": 140
      },
      {
        "desc": "Ceiling fan installation",
        "qty": 1,
        "rate": 95
      },
      {
        "desc": "Hardware and materials",
        "qty": 1,
        "rate": 38
      }
    ],
    "notes": "Payment due upon completion. Cash, check, or card accepted.",
    "tips": [
      "Itemize every task even on small jobs — customers who see five completed items pay $300 more happily than one vague line.",
      "Photograph completed work and reference it on the invoice; it closes disputes before they start.",
      "Set a minimum service charge and show it as a line item so short visits stay profitable."
    ]
  },
  {
    "slug": "landscapers",
    "name": "Landscapers",
    "intro": "Landscaping mixes one-time projects with recurring maintenance, and your invoices should keep those cleanly separate. Customers on monthly service want predictability; project customers want detail.",
    "items": [
      {
        "desc": "Monthly lawn maintenance (mow, edge, blow)",
        "qty": 4,
        "rate": 55
      },
      {
        "desc": "Mulch installation (5 cu yd, installed)",
        "qty": 1,
        "rate": 325
      },
      {
        "desc": "Shrub trimming and haul-away",
        "qty": 1,
        "rate": 110
      }
    ],
    "notes": "Due within 10 days. Recurring service is billed on the 1st of each month.",
    "tips": [
      "Bill maintenance on the 1st for the month ahead — arrears billing turns every slow-paying customer into a free month of work.",
      "Price materials installed (mulch, sod, plants) rather than splitting material and labor; it's how customers compare quotes.",
      "Note weather-delay policies on the invoice so skipped visits don't become billing disputes."
    ]
  },
  {
    "slug": "painters",
    "name": "Painters",
    "intro": "Painting bids are won on price but disputes happen on scope. An invoice that names the rooms, surfaces, and paint products used protects your margin and documents the job for the customer's records.",
    "items": [
      {
        "desc": "Interior painting — living room and hallway (walls, 2 coats)",
        "qty": 1,
        "rate": 780
      },
      {
        "desc": "Ceiling paint upgrade",
        "qty": 1,
        "rate": 160
      },
      {
        "desc": "Paint and supplies (Sherwin-Williams SuperPaint)",
        "qty": 1,
        "rate": 240
      }
    ],
    "notes": "30% deposit to schedule; balance due on completion and walkthrough.",
    "tips": [
      "Name the paint brand and line on the invoice — it justifies your price against lowball bids using contractor-grade paint.",
      "Invoice the deposit to lock the schedule; free estimates are marketing, held dates are not.",
      "Do the final walkthrough with the customer before handing the invoice — collect while satisfaction is highest."
    ]
  },
  {
    "slug": "hair-stylists",
    "name": "Hair Stylists",
    "intro": "Independent stylists and booth renters need invoices for bridal parties, on-location work, and product sales — the jobs where card-at-the-chair doesn't happen. An itemized invoice also quietly documents your pricing for repeat bookings.",
    "items": [
      {
        "desc": "Bridal hair — bride (trial + day-of)",
        "qty": 1,
        "rate": 250
      },
      {
        "desc": "Bridal party styling",
        "qty": 4,
        "rate": 85
      },
      {
        "desc": "On-location travel fee",
        "qty": 1,
        "rate": 60
      }
    ],
    "notes": "Non-refundable 30% deposit to hold the date; balance due one week before the event.",
    "tips": [
      "Collect event balances before the day, not after — wedding-day invoices chase worse than any other kind.",
      "Charge trials as their own line; free trials are a discount you're choosing, so show the value.",
      "Add a travel fee line for on-location work even if small — it sets the precedent for farther bookings."
    ]
  },
  {
    "slug": "makeup-artists",
    "name": "Makeup Artists",
    "intro": "Whether it's bridal, editorial, or production work, makeup artists juggle deposits, kit fees, and travel. Invoices that separate artistry from expenses look professional to coordinators and keep you whole on costs.",
    "items": [
      {
        "desc": "Bridal makeup — bride (trial + day-of)",
        "qty": 1,
        "rate": 275
      },
      {
        "desc": "Bridal party makeup",
        "qty": 3,
        "rate": 90
      },
      {
        "desc": "Kit fee and touch-up kit",
        "qty": 1,
        "rate": 40
      }
    ],
    "notes": "Deposit of 30% secures the date; remaining balance due 7 days before the event.",
    "tips": [
      "Kit fees are standard in production work — bill one without apology; your product costs are real.",
      "Put early-start surcharges (before 7am) on the invoice as a line item; sunrise weddings should pay for the alarm.",
      "For agency and production jobs, match the invoice to the call sheet: date, production name, usage."
    ]
  },
  {
    "slug": "personal-trainers",
    "name": "Personal Trainers",
    "intro": "Trainers selling session packs and monthly programming need invoices that make prepayment the obvious choice. A clear pack price next to the single-session rate does your selling for you.",
    "items": [
      {
        "desc": "Personal training — 10-session pack",
        "qty": 1,
        "rate": 650
      },
      {
        "desc": "Nutrition plan (initial + 2 check-ins)",
        "qty": 1,
        "rate": 120
      }
    ],
    "notes": "Payment due before first session of the pack. Sessions expire 90 days from purchase.",
    "tips": [
      "Invoice packs up front with an expiration date — open-ended sessions become scheduling debt you carry for free.",
      "Show the per-session math on pack invoices ($65/session vs. $80 drop-in) so the discount is visible.",
      "Bill no-shows per your cancellation policy and reference that policy on every invoice."
    ]
  },
  {
    "slug": "tutors",
    "name": "Tutors",
    "intro": "Tutors invoicing parents or adult students do best with simple monthly batches: dates, sessions, subject, rate. Parents paying for results want to see the record of what happened, and monthly invoicing beats chasing per-session payments.",
    "items": [
      {
        "desc": "Math tutoring — 60 min sessions (Mar 3, 10, 17, 24)",
        "qty": 4,
        "rate": 60
      },
      {
        "desc": "SAT practice test review session",
        "qty": 1,
        "rate": 75
      }
    ],
    "notes": "Due within 7 days. 24-hour notice required to reschedule without charge.",
    "tips": [
      "List session dates on the invoice — it's the record parents check against their calendar, and it kills disputes.",
      "Invoice monthly rather than per session; fewer transactions means fewer chances for payments to slip.",
      "State your cancellation window on every invoice and charge for late cancels consistently from day one."
    ]
  },
  {
    "slug": "djs",
    "name": "DJs",
    "intro": "DJ bookings collapse without deposits — the date is the product. Your invoice should lock the date with a deposit, spell out hours and overtime, and price add-ons like lighting and early setup separately.",
    "items": [
      {
        "desc": "Wedding reception DJ package (5 hours)",
        "qty": 1,
        "rate": 1100
      },
      {
        "desc": "Ceremony sound system add-on",
        "qty": 1,
        "rate": 200
      },
      {
        "desc": "Uplighting package",
        "qty": 1,
        "rate": 150
      }
    ],
    "notes": "Non-refundable 25% deposit reserves your date; balance due 14 days before the event. Overtime billed at $150/hr.",
    "tips": [
      "Put the overtime rate on the invoice before the event — negotiating at 11pm on the dance floor never goes your way.",
      "Make the deposit non-refundable and say so; you're turning down other bookings for that date.",
      "Itemize add-ons (lighting, ceremony audio, photo booth) so the base package price stays competitive in comparisons."
    ]
  },
  {
    "slug": "event-planners",
    "name": "Event Planners",
    "intro": "Event planning invoices juggle your fee and pass-through vendor costs, and mixing them is how planners end up floating client expenses interest-free. Keep your management fee and reimbursables ruthlessly separate.",
    "items": [
      {
        "desc": "Event planning and coordination fee",
        "qty": 1,
        "rate": 2200
      },
      {
        "desc": "Vendor deposits paid on client's behalf (florist, rentals)",
        "qty": 1,
        "rate": 1450
      },
      {
        "desc": "Day-of coordination assistant",
        "qty": 1,
        "rate": 300
      }
    ],
    "notes": "Planning fee: 50% at signing, 50% two weeks before the event. Vendor costs invoiced as incurred, due on receipt.",
    "tips": [
      "Invoice vendor pass-throughs immediately as incurred — never let client money age on your card.",
      "Split your fee across milestones (signing, month-out, event week) so cash flow matches your workload.",
      "Attach vendor receipts to reimbursable invoices; transparency here is why clients refer you."
    ]
  },
  {
    "slug": "virtual-assistants",
    "name": "Virtual Assistants",
    "intro": "VAs bill small amounts frequently, so friction is the enemy: a consistent monthly invoice with an hours log and a rollover policy turns 'did I really use 20 hours?' conversations into thirty-second approvals.",
    "items": [
      {
        "desc": "Virtual assistant services — 20-hour monthly package",
        "qty": 1,
        "rate": 700
      },
      {
        "desc": "Additional hours beyond package",
        "qty": 3,
        "rate": 40
      }
    ],
    "notes": "Package billed on the 1st of each month, due within 5 days. Unused hours do not roll over.",
    "tips": [
      "Attach or link a simple hours log with each invoice — visibility is what makes retainer clients renew.",
      "Bill the package at the start of the month; you're reserving your calendar, not just logging time.",
      "Price overage hours above the package rate — it nudges clients to upgrade tiers instead of nickel-and-diming."
    ]
  },
  {
    "slug": "social-media-managers",
    "name": "Social Media Managers",
    "intro": "Social media management is a monthly retainer business, and your invoice is the monthly reminder of value delivered. Tie line items to the deliverables in your package — posts, platforms, reporting — not just 'management.'",
    "items": [
      {
        "desc": "Social media management — 3 platforms (12 posts/mo each)",
        "qty": 1,
        "rate": 1200
      },
      {
        "desc": "Paid ads management (ad spend billed separately)",
        "qty": 1,
        "rate": 350
      },
      {
        "desc": "Monthly analytics report",
        "qty": 1,
        "rate": 0
      }
    ],
    "notes": "Retainer due on the 1st of each month. Ad spend is paid directly by the client to the platforms.",
    "tips": [
      "Never run client ad spend through your own card — have clients pay platforms directly and bill only your management fee.",
      "Include the monthly report as a $0 line item; showing included value fights the 'what am I paying for?' churn.",
      "Spell out the post volume per platform on the invoice so scope creep ('can you also do TikTok?') is visible."
    ]
  },
  {
    "slug": "bookkeepers",
    "name": "Bookkeepers",
    "intro": "A bookkeeper's invoice should model what a clean invoice looks like — your clients will judge your craft by it. Flat monthly pricing with clearly scoped inclusions beats hourly billing for nearly every small-business engagement.",
    "items": [
      {
        "desc": "Monthly bookkeeping — up to 150 transactions",
        "qty": 1,
        "rate": 450
      },
      {
        "desc": "Accounts receivable follow-up",
        "qty": 1,
        "rate": 100
      },
      {
        "desc": "Prior-month cleanup (one-time)",
        "qty": 4,
        "rate": 65
      }
    ],
    "notes": "Due within 10 days. Monthly service is billed on the 1st.",
    "tips": [
      "Price by transaction volume tiers, not hours — clients hate variable bills for what feels like the same service.",
      "Bill cleanup projects separately from ongoing service so the monthly price stays anchored low.",
      "Send your invoice the same day each month; as the bookkeeper, your own billing discipline is the sales pitch."
    ]
  },
  {
    "slug": "translators",
    "name": "Translators",
    "intro": "Translation is priced by the word, the page, or the hour depending on the work — and your invoice should show the unit math explicitly. Agencies and direct clients alike approve invoices faster when the count and rate are visible.",
    "items": [
      {
        "desc": "Translation EN→ES — technical manual (8,200 words @ $0.12)",
        "qty": 1,
        "rate": 984
      },
      {
        "desc": "Rush fee (48-hour turnaround)",
        "qty": 1,
        "rate": 150
      },
      {
        "desc": "Certified translation affidavit",
        "qty": 1,
        "rate": 35
      }
    ],
    "notes": "Net 15. Certified documents ship after payment is received.",
    "tips": [
      "Show the word count and per-word rate in the line description — it's the first thing agency PMs verify.",
      "Charge rush fees as a visible percentage or flat line; absorbing rush work silently resets client expectations.",
      "For certified translations, hold the stamped documents until payment — they're your natural collateral."
    ]
  },
  {
    "slug": "carpenters",
    "name": "Carpenters",
    "intro": "Custom carpentry invoices bridge the gap between a handshake estimate and a finished piece the client can touch. Itemizing materials at cost and labor by phase keeps change orders clean and your margin intact.",
    "items": [
      {
        "desc": "Custom built-in bookshelf — design and materials",
        "qty": 1,
        "rate": 850
      },
      {
        "desc": "Fabrication and installation labor",
        "qty": 14,
        "rate": 75
      },
      {
        "desc": "Finish: stain and polyurethane",
        "qty": 1,
        "rate": 180
      }
    ],
    "notes": "50% deposit for materials to begin; balance due on installation.",
    "tips": [
      "Collect a materials deposit before you buy lumber — custom work has no resale if the client walks.",
      "Break labor into phases (fabrication, install, finish) so progress invoices map to what the client can see.",
      "Write change orders as new line items on the next invoice, priced when agreed — not remembered at the end."
    ]
  },
  {
    "slug": "lawn-care",
    "name": "Lawn Care",
    "intro": "Lawn care runs on volume and repetition: dozens of small invoices a month. Standardized line items and a fixed billing day turn collections into a routine — and free you to sell seasonal extras like aeration and fertilization.",
    "items": [
      {
        "desc": "Weekly mowing service (4 visits)",
        "qty": 4,
        "rate": 45
      },
      {
        "desc": "Fertilizer application (spring treatment)",
        "qty": 1,
        "rate": 85
      },
      {
        "desc": "Core aeration (one-time)",
        "qty": 1,
        "rate": 130
      }
    ],
    "notes": "Billed monthly on the 1st, due by the 10th. Service pauses on accounts 30+ days past due.",
    "tips": [
      "State the pause-on-nonpayment policy on every invoice — it collects better than any late fee.",
      "Invoice seasonal upsells (aeration, overseeding, cleanup) the day the work is done, separate from the monthly bill.",
      "Show the per-visit count each month; customers forget how many times you came, the invoice shouldn't."
    ]
  },
  {
    "slug": "roofers",
    "name": "Roofers",
    "intro": "Most roof jobs get paid by an insurance company, a lender, or a homeowner comparing three bids — and all of them read line items closely. Pricing by the square, separating tear-off from installation, and listing flashing and ventilation work keeps your invoice consistent with the adjuster's scope and speeds up the final draw.",
    "items": [
      {
        "desc": "Tear-off & disposal — existing shingles (per square)",
        "qty": 22,
        "rate": 90
      },
      {
        "desc": "Architectural shingle installation, incl. underlayment (per square)",
        "qty": 22,
        "rate": 485
      },
      {
        "desc": "Flashing, drip edge & ridge vent package",
        "qty": 1,
        "rate": 850
      }
    ],
    "notes": "50% deposit due at material order; balance due upon final inspection. Where insurance applies, payments follow the carrier's draw schedule.",
    "tips": [
      "Mirror the adjuster's scope — use the same line-item structure and unit counts (squares, linear feet) as the Xactimate estimate so the carrier can match your invoice without a supplement round-trip.",
      "Tie your deposit to the material order, not the contract signing — shingle prices move quarterly, and a 30-50% deposit collected when you buy materials protects your margin without spooking the customer.",
      "Reference the signed lien waiver on your final invoice — lenders and title companies often won't release the last draw without one, and noting it removes the excuse for a stalled payment."
    ]
  },
  {
    "slug": "hvac-technicians",
    "name": "HVAC Technicians",
    "intro": "Refrigerant is where HVAC invoices get contested. With the A2L transition pushing R-410A prices through the roof, customers see the per-pound number and balk — unless you itemize type, quantity, and recovery work. A clean split between diagnostic fee, labor, and parts also makes your maintenance-plan discount visible instead of invisible.",
    "items": [
      {
        "desc": "Diagnostic / service call fee",
        "qty": 1,
        "rate": 119
      },
      {
        "desc": "Refrigerant — R-454B, incl. recovery & leak check (per lb)",
        "qty": 4,
        "rate": 95
      },
      {
        "desc": "Labor — evaporator coil leak repair",
        "qty": 2,
        "rate": 145
      }
    ],
    "notes": "Due upon completion. Maintenance-plan members receive priority scheduling and 15% off labor (reflected above). 1-year warranty on repair labor.",
    "tips": [
      "Itemize refrigerant by type and pounds — with R-410A phasing out and A2L systems now standard, per-pound prices vary wildly, and an unitemized 'refrigerant charge' is the fastest route to a dispute.",
      "Even if you bill flat-rate, list the diagnostic fee as its own line and state whether it's waived with repair — it's the single most common cause of HVAC invoice arguments.",
      "On equipment installs, record model and serial numbers plus the warranty registration date on the invoice — a manufacturer claim five years from now starts with the customer digging up this document."
    ]
  },
  {
    "slug": "pressure-washing",
    "name": "Pressure Washing",
    "intro": "Pressure washing sells on before-and-after photos, but it bills on square footage and surfaces. An invoice that prices each surface separately — house wash, driveway, deck — shows the customer exactly what the bundle saved them, and hands you a clean baseline to quote from when they call back next spring.",
    "items": [
      {
        "desc": "House soft wash — 2-story, up to 2,500 sq ft",
        "qty": 1,
        "rate": 395
      },
      {
        "desc": "Concrete cleaning — driveway & walkways (per sq ft)",
        "qty": 800,
        "rate": 0.22
      },
      {
        "desc": "Wood deck wash & brighten",
        "qty": 1,
        "rate": 250
      }
    ],
    "notes": "Residential: due on completion by card or ACH. Commercial and HOA accounts: Net 15.",
    "tips": [
      "Photograph every surface before you start and add 'pre-existing condition photos on file' to the invoice — oxidation streaks, failing paint, and window scratches all get blamed on the last person who touched the house.",
      "Show bundle pricing as full-rate lines with a visible discount line rather than one lump sum — the customer sees real value, and you don't anchor next year's single-surface job at the bundled price.",
      "Invoice commercial route work (storefronts, HOAs, restaurants) monthly with a per-visit breakdown on Net 15 — property managers need it for their books, and it beats chasing a check after every visit."
    ]
  },
  {
    "slug": "window-cleaners",
    "name": "Window Cleaners",
    "intro": "Per-pane pricing is what separates window cleaning pros from a guy with a squeegee. Putting the pane count on the invoice — inside, outside, screens, tracks — means a mid-job scope change is a number instead of an argument, and it turns a one-time clean into a documented baseline for quarterly route work.",
    "items": [
      {
        "desc": "Exterior window cleaning (per pane)",
        "qty": 28,
        "rate": 8
      },
      {
        "desc": "Interior window cleaning (per pane)",
        "qty": 28,
        "rate": 5
      },
      {
        "desc": "Screen cleaning & track detail (per window)",
        "qty": 14,
        "rate": 6
      }
    ],
    "notes": "Due on completion for one-time cleans. Recurring route customers billed monthly, Net 10.",
    "tips": [
      "Always invoice with the pane count, not just a lump price — when the customer adds 'oh, and the garage door windows too,' you append a line item instead of eating the extra work.",
      "Bill hard-water stain removal as a separate restoration line at 2-3x your cleaning rate — it takes different chemistry and real time, and folding it into the clean trains customers to expect it free.",
      "For storefront routes, keep a card on file and auto-bill monthly — a $40 weekly clean isn't worth generating four invoices for, and route profitability lives or dies on collection friction."
    ]
  },
  {
    "slug": "pool-cleaning",
    "name": "Pool Cleaning",
    "intro": "Pool service is subscription work with variable costs bolted on — chemical spikes, filter cleans, storm cleanups. When your invoice separates the flat monthly rate from the extras, customers stop questioning why July cost more than April, and you stop eating chlorine price hikes.",
    "items": [
      {
        "desc": "Weekly pool service visit (skim, vacuum, chemical balance)",
        "qty": 4,
        "rate": 55
      },
      {
        "desc": "Filter cartridge deep clean",
        "qty": 1,
        "rate": 95
      },
      {
        "desc": "Chemical surcharge — shock treatment + stabilizer",
        "qty": 1,
        "rate": 48
      }
    ],
    "notes": "Billed monthly in advance; due by the 1st. Auto-pay available. Service pauses require 7 days' notice.",
    "tips": [
      "Bill route customers monthly in advance on auto-pay — chasing 80 small checks every month is how pool routes lose money, and a skipped payment should pause service, not start a collections project.",
      "Break chemicals out as their own line with a note when costs spike (chlorine pricing still swings hard) — customers accept a documented surcharge far better than a quiet rate increase.",
      "Quote green-to-clean recoveries as a separate project with before photos attached to the invoice — never fold a $400 algae recovery into the monthly rate, or the customer will expect it free next time."
    ]
  },
  {
    "slug": "moving-services",
    "name": "Moving Services",
    "intro": "Hourly rates get moving companies into disputes; the invoice gets them out. Customers remember the quote, not the flight of stairs, the third stop, or the hour of shrink-wrapping. An invoice that logs crew size, truck time, and materials line by line turns 'that's not what you said' into a two-minute conversation.",
    "items": [
      {
        "desc": "Moving crew — 3 movers + 26-ft truck",
        "qty": 5,
        "rate": 189
      },
      {
        "desc": "Travel time / trip fee",
        "qty": 1,
        "rate": 149
      },
      {
        "desc": "Packing materials (boxes, shrink wrap, mattress bags)",
        "qty": 1,
        "rate": 95
      }
    ],
    "notes": "Balance due on delivery, before unloading is complete. Card, cash, or certified funds; personal checks not accepted on move day.",
    "tips": [
      "Collect a deposit ($100–300 is the norm) to hold the date, and state your cancellation window on the invoice — a no-show customer in peak May–September season costs you a full day's revenue.",
      "Have the customer initial the start time and end time on the work order and reference both on the invoice — clock disputes are the number one chargeback in this trade.",
      "Show your valuation coverage (the standard $0.60/lb or the full-value option they chose) as its own line — it proves coverage was offered, which is what damage claims turn on."
    ]
  },
  {
    "slug": "junk-removal",
    "name": "Junk Removal",
    "intro": "Junk removal is priced by the truckload fraction, and every customer thinks their pile is smaller than it is. An invoice that names the load size, the surcharge items, and the disposal fees behind them defends your number after the truck has already driven away.",
    "items": [
      {
        "desc": "Junk haul — 1/2 truckload (approx. 8 cu yd)",
        "qty": 1,
        "rate": 420
      },
      {
        "desc": "Mattress / box spring disposal surcharge",
        "qty": 2,
        "rate": 35
      },
      {
        "desc": "Refrigerator disposal (refrigerant recovery fee)",
        "qty": 1,
        "rate": 60
      }
    ],
    "notes": "Payment due on-site at completion — card or cash. Final price confirmed with customer before loading begins.",
    "tips": [
      "Photograph the pile before loading and the truck after, and attach both to the invoice — load-fraction disputes end instantly when the customer can see what a half truck actually looked like.",
      "List regulated-item fees (mattresses, tires, paint, e-waste, anything with freon) as separate pass-through lines — transfer stations charge you per item, and the invoice should show the customer why.",
      "Charge residential one-offs on-site before you drive away, but offer net-15 terms to property managers and estate attorneys — repeat commercial cleanout work is worth extending credit for."
    ]
  },
  {
    "slug": "mobile-mechanics",
    "name": "Mobile Mechanics",
    "intro": "Parts markup is where mobile mechanic invoices win or lose trust. Your customer can look up the rotor price mid-conversation, so the invoice has to make the convenience visible instead — the call-out, the diagnosis, the labor at their curb. Itemize all three and the total explains itself.",
    "items": [
      {
        "desc": "Mobile service call-out / diagnostic fee",
        "qty": 1,
        "rate": 75
      },
      {
        "desc": "Labor — front brake pads and rotors, both axles inspected",
        "qty": 2,
        "rate": 120
      },
      {
        "desc": "Parts: ceramic pads + coated rotors (front pair)",
        "qty": 1,
        "rate": 210
      }
    ],
    "notes": "Due on completion, before departure. Diagnostic fee credited toward same-day approved repairs. 12-month/12,000-mile warranty on parts and labor.",
    "tips": [
      "Invoice the call-out fee even when the customer declines the repair — frame it as a credit toward approved work rather than a freebie, or every driveway visit becomes a free estimate.",
      "Put part numbers and brand tier (OEM vs. aftermarket) on the invoice — customers will compare against online prices, and naming the part is what justifies the difference.",
      "Record VIN, mileage, and any declined recommendations on every invoice — you have no shop to hold the car in, so the paper trail is your only leverage in warranty claims and 'it broke after you left' disputes."
    ]
  },
  {
    "slug": "pet-sitters",
    "name": "Pet Sitters",
    "intro": "Pet sitting is calendar billing: every line ties to a date the client was out of town, and they will check. Itemizing each visit, walk, and overnight against the trip dates — plus any holiday surcharge — turns \"wait, what am I paying for?\" into a ten-second glance.",
    "items": [
      {
        "desc": "Drop-in visits — 30 min, feeding + walk (2 dogs)",
        "qty": 10,
        "rate": 30
      },
      {
        "desc": "Overnight stay in client's home",
        "qty": 3,
        "rate": 95
      },
      {
        "desc": "Holiday surcharge (per overnight)",
        "qty": 3,
        "rate": 20
      }
    ],
    "notes": "50% due at booking to hold dates; balance due the day you return. Holiday bookings non-refundable within 7 days of the start date.",
    "tips": [
      "Collect 50% at booking — and full prepayment for holiday weeks. A client who cancels their trip has zero motivation to pay for dates you held open and turned other clients away from.",
      "List each visit with its date and time window, not just \"10 visits.\" When a client insists they got home Thursday morning, the dated line items settle it without an awkward phone call.",
      "Keep the holiday surcharge as its own line instead of quietly raising the visit rate. Thanksgiving and Christmas clients accept a visible surcharge, and your base rate stays clean for repeat bookings the rest of the year."
    ]
  },
  {
    "slug": "babysitters",
    "name": "Babysitters",
    "intro": "Most babysitting money moves over Venmo with no paper trail — until a family needs receipts for their dependent-care FSA, or a regular gig drifts into \"we'll settle up later.\" A simple itemized invoice fixes both, and it makes raising your rate or enforcing a minimum far less awkward.",
    "items": [
      {
        "desc": "After-school care — 2 children (Mon–Wed)",
        "qty": 9,
        "rate": 22
      },
      {
        "desc": "Saturday evening sit — 2 children",
        "qty": 5,
        "rate": 25
      },
      {
        "desc": "Late-night hours (after midnight)",
        "qty": 1,
        "rate": 35
      }
    ],
    "notes": "Due at end of night via Venmo, Zelle, or cash. Regular families billed Fridays, payable by Sunday.",
    "tips": [
      "Families using a dependent-care FSA need your name, address, and SSN or EIN on the invoice to get reimbursed — offering that up front makes you the sitter they book first.",
      "Put your minimum (three or four hours) in writing on every invoice. A ninety-minute booking still costs you the whole evening, and a stated minimum ends the negotiation before it starts.",
      "For regular families, invoice weekly instead of per sit. Small one-off amounts get rounded down or forgotten; a single weekly total gets paid in one clean transfer."
    ]
  },
  {
    "slug": "massage-therapists",
    "name": "Massage Therapists",
    "intro": "Bodywork gets paid three ways — card at the table, prepaid packages, and HSA/FSA or insurance reimbursement — and each needs different paperwork. An invoice that names the service, session length, and date (and can double as a superbill with your NPI) keeps reimbursements flowing and package clients from losing count.",
    "items": [
      {
        "desc": "60-minute therapeutic massage",
        "qty": 1,
        "rate": 120
      },
      {
        "desc": "90-minute deep tissue session",
        "qty": 1,
        "rate": 165
      },
      {
        "desc": "Add-on: cupping / hot stone therapy",
        "qty": 1,
        "rate": 25
      }
    ],
    "notes": "Due at time of service. HSA/FSA cards accepted. 24-hour notice required to cancel without charge.",
    "tips": [
      "If a client wants insurance reimbursement, format the invoice as a superbill: CPT code (97124 for massage therapy), the diagnosis code from the referring provider, plus your NPI and license number. Missing any one of these gets the claim bounced.",
      "Actually bill late cancels and no-shows, and cite the policy line on the invoice when you do. A cancellation policy you never enforce trains clients that your Tuesday 2 p.m. slot is optional.",
      "On package clients' receipts, show sessions used and sessions remaining. It prevents \"I thought I had two left\" disputes and works as a built-in nudge to rebook before the package runs out."
    ]
  },
  {
    "slug": "barbers",
    "name": "Barbers",
    "intro": "Behind the chair, payment is instant — where barbers actually need invoices is everything else: wedding parties, on-location house calls, monthly grooming memberships, and proving cash-heavy income to a landlord or lender. Itemizing per head and separating the travel fee keeps event clients from balking at the total.",
    "items": [
      {
        "desc": "On-location cuts — wedding party",
        "qty": 6,
        "rate": 60
      },
      {
        "desc": "Hot towel shave — groom",
        "qty": 1,
        "rate": 45
      },
      {
        "desc": "Travel & setup fee",
        "qty": 1,
        "rate": 75
      }
    ],
    "notes": "50% non-refundable deposit reserves the date; balance due on-site before services begin. Gratuity not included.",
    "tips": [
      "Take a non-refundable 50% deposit on every wedding or event booking. A Saturday morning on location is a Saturday of chair revenue you can never get back if the party ghosts.",
      "Itemize group bookings per person — groom, groomsmen, fathers — so the person paying can split costs cleanly. A lump sum invites haggling; a per-head list doesn't.",
      "Even if daily cuts stay cash-and-Venmo, invoice your event work and memberships. When tips never hit paper, those invoices become the documented income a mortgage lender or landlord actually accepts."
    ]
  },
  {
    "slug": "estheticians",
    "name": "Estheticians",
    "intro": "Most esthetician revenue clears at the checkout counter, so the jobs that actually need an invoice — bridal parties, mobile events, corporate wellness days — are your biggest tickets and your riskiest. Itemizing each service, headcount, and travel fee keeps a $700 group booking from turning into a day-of negotiation.",
    "items": [
      {
        "desc": "Signature facial — bridal party (60 min)",
        "qty": 4,
        "rate": 125
      },
      {
        "desc": "On-location setup & travel fee",
        "qty": 1,
        "rate": 75
      },
      {
        "desc": "Retail: post-treatment skincare kit",
        "qty": 2,
        "rate": 68
      }
    ],
    "notes": "50% deposit due at booking; balance due day of service. 48-hour cancellation notice required or the deposit is forfeited.",
    "tips": [
      "Keep retail products on separate lines from services — in most states products are sales-taxable while services aren't, and a mixed line creates a mess at filing time.",
      "For bridal and group bookings, invoice a non-refundable deposit and list the confirmed headcount on the invoice — day-of dropouts are the most common dispute, and a headcount in writing settles it.",
      "Print your cancellation and no-show fee policy on the invoice itself; a policy that only lives in your booking app's fine print is nearly impossible to enforce when a client pushes back."
    ]
  },
  {
    "slug": "music-teachers",
    "name": "Music Teachers",
    "intro": "Per-lesson billing is where music teachers lose money — every cancellation becomes a refund conversation. A monthly tuition invoice that itemizes lesson count, materials, and recital fees reframes payment as enrollment rather than attendance, and gives parents a clean paper trail when the book fee shows up mid-semester.",
    "items": [
      {
        "desc": "Private piano lessons — 30 min weekly",
        "qty": 4,
        "rate": 45
      },
      {
        "desc": "Method books & sheet music",
        "qty": 1,
        "rate": 34
      },
      {
        "desc": "Spring recital fee (venue & accompanist share)",
        "qty": 1,
        "rate": 25
      }
    ],
    "notes": "Tuition due by the 1st of each month; a $15 late fee applies after the 10th, and lessons pause at 15 days past due.",
    "tips": [
      "Bill monthly in advance, not per lesson in arrears — tuition-style billing survives cancellations, and chasing $45 after a missed lesson costs more than it recovers.",
      "State your makeup-lesson policy directly on the invoice (e.g., one makeup per month with 24-hour notice) — it is the single most disputed item in private teaching, and families rarely reread your studio policy doc.",
      "Invoice summer as a prepaid package before school lets out in May — students quietly disappear in June, and a paid-up block of lessons is the only retention tool that reliably works."
    ]
  },
  {
    "slug": "notaries",
    "name": "Notaries",
    "intro": "State law caps what a notary can charge per notarial act — but not travel, printing, or signing-agent fees. That makes itemization a compliance issue, not a style choice: an invoice that lumps everything into one number can look like overcharging if your commission is ever audited.",
    "items": [
      {
        "desc": "Notarial acts — acknowledgments",
        "qty": 4,
        "rate": 10
      },
      {
        "desc": "Mobile travel fee (within 20 miles)",
        "qty": 1,
        "rate": 50
      },
      {
        "desc": "Loan signing package (print, witness, scan-back)",
        "qty": 1,
        "rate": 150
      }
    ],
    "notes": "Due at time of service for mobile appointments; loan signings billed to escrow/title, net 30.",
    "tips": [
      "Never combine the per-act notarial fee with travel or convenience fees on one line — most states cap the act fee by statute, and a lumped total is the fastest way to draw a complaint to the Secretary of State.",
      "Reference your journal entry date or number on the invoice; it ties the payment to a specific notarial act if a signing is ever challenged in court.",
      "Invoice loan signings to the title or escrow company the same day you complete them — escrow files close and get archived quickly, and a late invoice against a closed file is the hardest one to collect."
    ]
  },
  {
    "slug": "illustrators",
    "name": "Illustrators",
    "intro": "An illustration invoice is really two documents: a bill for the work and a record of what rights the client bought. Spelling out the license — scope, duration, exclusivity — on the invoice itself is what protects you when the artwork shows up somewhere it wasn't paid to go.",
    "items": [
      {
        "desc": "Editorial illustration — full page, flat fee",
        "qty": 1,
        "rate": 1200
      },
      {
        "desc": "Additional revision round (beyond 2 included)",
        "qty": 1,
        "rate": 95
      },
      {
        "desc": "Extended license: 2-year print + digital use",
        "qty": 1,
        "rate": 450
      }
    ],
    "notes": "50% deposit to begin; balance net 15 on final delivery. All rights transfer upon receipt of full payment.",
    "tips": [
      "Bill the usage license as its own line item, separate from the creation fee — it makes expanded-use upsells natural and gives you clear standing if the art is used beyond the agreed scope.",
      "Collect 30-50% before sketches begin and state a kill fee (typically 25-50% of the remaining balance) so a project cancelled at the concept stage still pays for work done.",
      "Add 'all rights transfer upon receipt of full payment' to every invoice — it is your strongest leverage against the client who publishes first and pays never."
    ]
  }
];
