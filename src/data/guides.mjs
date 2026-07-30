// Long-form guide content. Each entry becomes /guides/<slug>/.
export default [
  {
    slug: "how-to-invoice-as-a-freelancer",
    title: "How to Invoice as a Freelancer: A Practical Guide",
    description: "Step-by-step guide to invoicing as a freelancer: what to send, when to send it, how to set payment terms, and how to handle late payers.",
    html: `
<p class="lead">Invoicing is the least glamorous part of freelancing and the only part that turns work into money. This guide covers the full loop: setting terms before the work, sending an invoice that gets approved on the first pass, and following up when payment slips.</p>

<h2>1. Set payment terms before you start the work</h2>
<p>Every invoicing problem is easier to prevent than to fix, and prevention happens in the proposal, not the invoice. Before starting any project, agree in writing (email counts) on three things: the price or rate, when you'll invoice (on delivery? monthly? by milestone?), and how long the client has to pay. If a client won't confirm payment terms before the work starts, that's information worth having early.</p>
<p>For new clients, ask for a deposit — 30–50% is normal in most creative and trade work. A deposit isn't just cash flow protection; it's a test. Clients who pay deposits promptly almost always pay final invoices promptly.</p>

<h2>2. Choose the right payment window</h2>
<p>"Net 30" is a convention inherited from corporate accounts-payable departments, not a law of nature. For freelance work, shorter is normal and reasonable:</p>
<ul>
<li><strong>Due on receipt</strong> — right for one-time services delivered in person (trades, events, sessions).</li>
<li><strong>Net 7–15</strong> — the sweet spot for most freelance project work.</li>
<li><strong>Net 30</strong> — accept it when invoicing companies with formal AP processes; it's often the price of larger contracts.</li>
</ul>
<p>Whatever you choose, print it on the invoice as a date ("Due August 15"), not just a term ("Net 15"). Dates get calendared; terms get interpreted.</p>

<h2>3. Send an invoice that gets approved on the first pass</h2>
<p>Most late payments aren't malicious — they're invoices that stalled in someone's inbox because something was missing or unclear. An invoice gets paid fastest when the person approving it can verify every line without emailing you back. That means: a unique invoice number, the date and due date, line items that match what was agreed (names, word counts, hours, milestones — not "services rendered"), the total in plain sight, and exactly how to pay you. Our checklist of <a href="__BASE__/guides/what-to-include-on-an-invoice/">what to include on an invoice</a> covers all nine essentials.</p>
<p>Send the invoice the moment the work is delivered — same day, ideally same email. Every day between delivery and invoice is a day the client's memory of the value fades.</p>

<h2>4. Make it easy to pay you</h2>
<p>Every extra step between "approved" and "paid" costs you days. List your payment methods directly on the invoice, and offer at least one instant option (bank transfer details, or a payment link) alongside whatever the client's AP department prefers. If you invoice companies, ask up front whether they need a W-9, a vendor registration, or a PO number — discovering that after you've sent the invoice restarts the clock.</p>

<h2>5. Follow up on a schedule, not a mood</h2>
<p>Late-payment follow-up works when it's boring and predictable. A sequence that works:</p>
<ul>
<li><strong>Due date + 1 day:</strong> a friendly one-line nudge with the invoice re-attached.</li>
<li><strong>Due date + 7:</strong> a direct note asking when payment will be sent, addressed to the person who hired you (not just AP).</li>
<li><strong>Due date + 14:</strong> a statement that work pauses until the account is current — and then actually pause.</li>
</ul>
<p>Late fees (1–1.5% monthly is typical) matter less for the revenue than for the signal; state them on the invoice and you'll rarely need to charge them. For more on speeding up the cycle, see <a href="__BASE__/guides/how-to-get-paid-faster/">how to get paid faster</a>.</p>

<h2>6. Keep records like a business, because you are one</h2>
<p>Number invoices sequentially (INV-001, INV-002...) and never reuse a number. Keep a copy of every invoice you send — you'll need them for taxes, and a numbered paper trail is what turns a payment dispute from your word against theirs into a records question. A simple folder of PDFs plus a spreadsheet of number, client, amount, and status is genuinely enough at freelance scale.</p>

<h2>Start with the invoice itself</h2>
<p>You can apply everything above in the next ten minutes: our <a href="__BASE__/">free invoice generator</a> produces a clean, professional PDF with no sign-up and no watermark, and it remembers your business details for next time.</p>
`,
  },
  {
    slug: "what-to-include-on-an-invoice",
    title: "What to Include on an Invoice: The 9 Essentials",
    description: "The nine things every invoice needs to get paid without questions: identification, dates, line items, totals, payment terms, and more — with examples.",
    html: `
<p class="lead">An invoice has one job: to get approved and paid without anyone needing to email you a question. These nine elements are what make that happen. Miss one and your invoice risks a round-trip through someone's inbox; include all nine and it reads as professional paperwork that gets processed.</p>

<h2>1. The word "Invoice"</h2>
<p>It sounds trivial, but documents that don't announce themselves get misfiled. "Invoice" at the top tells the recipient — and their accounting software's OCR — exactly what this document is and that it requires payment action.</p>

<h2>2. A unique invoice number</h2>
<p>Every invoice needs an identifier no other invoice of yours shares: INV-001, 2026-014, whatever scheme you like, as long as it's sequential and never reused. Invoice numbers are how payments get matched to invoices, how you reference "the outstanding balance on INV-007" in a follow-up, and what tax authorities expect to see in your records.</p>

<h2>3. Your business details</h2>
<p>Your name (or business name), address, email, and phone number. If you're registered for sales tax, VAT, or GST, include the registration number — many business clients can't legally process your invoice without it.</p>

<h2>4. Your client's details</h2>
<p>The client's business name and address, and ideally the specific contact who commissioned the work. Invoices addressed to "Acme Corp" alone can wander an AP department; invoices addressed to a person get championed by that person.</p>

<h2>5. Issue date and due date</h2>
<p>The issue date starts the payment clock; the due date ends it. Write the due date as an actual date — "Due August 15, 2026" — rather than only "Net 15." A date is unambiguous, calendarable, and enforceable.</p>

<h2>6. Itemized line items</h2>
<p>Each deliverable or work block gets its own line with a description, quantity, rate, and amount. The test: could the client match each line to something they asked for? "Consulting — 6 hours @ $150" passes. "Services rendered — $900" invites a phone call. Specific line items also protect you: they document scope, so extra requests are visibly extra.</p>

<h2>7. Subtotal, tax, and total</h2>
<p>Show the math: subtotal, then any discount, then tax at a stated rate, then the total due. Whether you must charge sales tax, VAT, or GST depends on where you are, what you sell, and where the client is. Freelance services are taxable in many places — check your local rules once, then encode the answer into every invoice.</p>

<h2>8. Payment terms and methods</h2>
<p>State how to pay you (bank transfer details, payment link, accepted methods) and any conditions: late fees, deposit already applied, or ownership terms like "deliverables remain property of the contractor until paid in full." Every payment method you make the client look up is a day added to your payment cycle.</p>

<h2>9. Notes</h2>
<p>The notes field is for anything that prevents a question: the PO number the client gave you, a thank-you, warranty terms, or what happens next ("final files will be delivered on receipt of payment"). One well-used notes field replaces a whole follow-up email thread.</p>

<h2>Put it into practice</h2>
<p>Our <a href="__BASE__/">free invoice generator</a> has fields for all nine essentials and produces a clean PDF in about a minute — no account, no watermark. If you invoice regularly, it remembers your details for next time. And if you're new to freelancing, start with our full guide on <a href="__BASE__/guides/how-to-invoice-as-a-freelancer/">how to invoice as a freelancer</a>.</p>
`,
  },
  {
    slug: "how-to-get-paid-faster",
    title: "How to Get Paid Faster: 8 Tactics That Actually Work",
    description: "Practical tactics for faster invoice payment: deposits, shorter terms, instant payment options, milestone billing, and follow-up scripts that work.",
    html: `
<p class="lead">The gap between "work delivered" and "money in your account" is where freelancers and small businesses quietly bleed. Most of that gap isn't caused by bad clients — it's caused by defaults you can change. Here are eight tactics, roughly in order of impact.</p>

<h2>1. Take deposits</h2>
<p>The single highest-impact change. A 30–50% deposit before work starts means you're never fully exposed, filters out the clients most likely to pay late, and shifts the final payment from "the whole fee" to "the remaining balance" — psychologically much easier to release. For custom or scheduled work (trades, events, builds), deposits should be non-negotiable.</p>

<h2>2. Shorten your terms</h2>
<p>Net 30 exists for corporate procurement, not for you. Move project work to net 7 or net 15 and most clients won't blink — the ones who push back to net 30 were going to pay in 45 anyway. Print the due date as a date, not a term.</p>

<h2>3. Invoice immediately</h2>
<p>Send the invoice with the deliverable, in the same email if possible. Invoicing a week later doesn't just delay the clock by a week — it signals that payment timing is casual, and clients mirror the energy you bring to billing.</p>

<h2>4. Bill by milestone, not at the end</h2>
<p>On any project longer than two weeks, break payment into milestones tied to visible deliverables. Three invoices of $2,000 reliably beat one invoice of $6,000: each is easier to approve, and a payment problem surfaces after you're 33% exposed instead of 100%.</p>

<h2>5. Remove payment friction</h2>
<p>Every step between "approved" and "paid" costs days. Put full payment instructions on the invoice itself. Offer an instant option (bank details or a payment link) alongside whatever the client's system requires. For business clients, ask about W-9s, vendor onboarding, and PO numbers <em>before</em> you send the first invoice — those discoveries are the most common cause of a 30-day invoice taking 60.</p>

<h2>6. Use retention leverage</h2>
<p>Structure delivery so the final, most valuable piece transfers on payment: source files after the balance clears, the site launches after final payment, certified documents ship on receipt. This isn't hostile — stated up front on the invoice ("final files delivered on receipt of payment"), it's simply professional terms, and it converts your deliverable into collateral.</p>

<h2>7. Follow up on a fixed schedule</h2>
<p>Decide the schedule once and automate the willpower away: a friendly nudge the day after the due date, a direct "when can I expect payment?" a week later, and a work-pause notice at two weeks. The content matters less than the consistency — clients learn within one cycle whether your due dates mean anything.</p>

<h2>8. State late fees (even if you rarely charge them)</h2>
<p>A line like "overdue balances accrue 1.5% monthly" changes behavior mostly by existing. It signals that you treat invoicing as business, gives your follow-ups something concrete to reference, and in many jurisdictions you can only charge late fees you disclosed in advance — so disclose them.</p>

<h2>The compounding effect</h2>
<p>None of these tactics is dramatic alone, but they compound: a deposit plus net-15 plus same-day invoicing plus one follow-up routinely takes an average payment cycle from six weeks to under two. Start with the invoice itself — our <a href="__BASE__/">free generator</a> lets you set due dates, deposits, and payment terms on a clean professional PDF, free with no sign-up. For the full picture, read <a href="__BASE__/guides/what-to-include-on-an-invoice/">what to include on an invoice</a>.</p>
`,
  },
  {
    slug: "invoice-vs-receipt-vs-quote",
    title: "Invoice vs. Receipt vs. Quote: What's the Difference?",
    description: "Invoices request payment, receipts prove it, quotes propose it. When to send each document, what goes on it, and how they work together.",
    html: `
<p class="lead">Three documents, three moments in the same transaction: a <strong>quote</strong> proposes the price before the work, an <strong>invoice</strong> requests payment after (or during) the work, and a <strong>receipt</strong> proves payment happened. Mixing them up is harmless with a small client and expensive with a business one — accounting departments process each differently.</p>

<h2>The quote: before the work</h2>
<p>A quote (or estimate, or proposal) says: <em>here's what this will cost if you say yes.</em> It's issued before work begins, it's not a demand for payment, and it usually has an expiration date ("valid for 30 days") because your availability and material costs change.</p>
<p>The practical distinction between a <strong>quote</strong> and an <strong>estimate</strong>: a quote is a fixed price you're committing to; an estimate is an educated guess that the final bill may vary from. Say which one you're giving — trades disputes live in this gap.</p>

<h2>The invoice: requesting payment</h2>
<p>An invoice says: <em>the work is done (or a milestone is reached) — here's what you owe and by when.</em> It's the only one of the three documents that starts a payment clock, which is why it carries a unique number, an issue date, a due date, itemized charges, and payment instructions. See our full checklist of <a href="__BASE__/guides/what-to-include-on-an-invoice/">what belongs on an invoice</a>.</p>
<p>An unpaid invoice is also a legal record: in a payment dispute, the numbered invoice matching the agreed scope is your primary evidence. That's why invoice numbers should be sequential and never reused.</p>

<h2>The receipt: proving payment</h2>
<p>A receipt says: <em>payment was received.</em> It matters most in cash transactions, in-person services, and anywhere the payer needs proof for reimbursement or taxes. For invoice-based work, a receipt can be as simple as re-sending the invoice stamped "PAID" with the date and method — many freelancers do exactly that, and it's perfectly standard.</p>

<h2>How they flow together</h2>
<ul>
<li><strong>Quote</strong> → client approves → work happens</li>
<li><strong>Invoice</strong> → issued on delivery or milestone → payment clock runs</li>
<li><strong>Receipt</strong> → payment arrives → proof issued, transaction closed</li>
</ul>
<p>For repeat clients the quote step often collapses into an email ("same rate as last time?") — that's fine, as long as <em>something</em> in writing establishes the price before the invoice arrives. Invoices should never contain price surprises; they should be the bill for a price already agreed.</p>

<h2>One tool, all three</h2>
<p>Because the documents share a skeleton (parties, line items, amounts), you can produce all three with our <a href="__BASE__/">free invoice generator</a>: change the title line and terms in the notes field to issue a quote, and re-download with a "PAID" note for a receipt. No sign-up, no watermark. If you're setting up your invoicing from scratch, start with <a href="__BASE__/guides/how-to-invoice-as-a-freelancer/">how to invoice as a freelancer</a>.</p>
`,
  },
];
