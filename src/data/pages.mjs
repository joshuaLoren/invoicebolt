// Static pages: about, privacy, terms. Privacy policy includes the
// third-party advertising disclosures AdSense requires.
export default [
  {
    slug: "about",
    title: "About Invoicebolt",
    description: "Why Invoicebolt exists: a genuinely free invoice generator with no sign-up, no watermark, and no data collection.",
    html: `
<p class="lead">Invoicebolt exists because "free invoice generator" almost never means free. The tools that rank for that search want an account before you can download, stamp a watermark on your PDF, or cap you at three invoices before the paywall appears.</p>
<p>This one is different by design:</p>
<ul>
<li><strong>No account.</strong> There is no sign-up flow because there is no server keeping your data. Your invoice details live in your own browser's local storage, which is why they're pre-filled the next time you visit.</li>
<li><strong>No watermark, no caps.</strong> The PDF you download is clean and yours, whether it's your first invoice or your five hundredth.</li>
<li><strong>Nothing leaves your device.</strong> The invoice and the PDF are generated entirely in your browser. What you type is never transmitted to us — we couldn't read your invoices if we wanted to.</li>
</ul>
<p>The site is supported by advertising, which is what keeps the generator free without gating features. If you find it useful, the best thanks is telling another freelancer about it.</p>
<p>Questions or suggestions? Email <a href="mailto:__CONTACT__">__CONTACT__</a>.</p>
`,
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "Invoicebolt's privacy policy: invoice data stays in your browser, and how advertising and analytics cookies are used on this site.",
    html: `
<p><em>Last updated: July 30, 2026</em></p>

<h2>Your invoice data</h2>
<p>Everything you type into the invoice generator — names, addresses, line items, logos, notes — is processed entirely in your browser. This data is <strong>never transmitted to our servers</strong>. To make repeat invoicing convenient, it is saved in your browser's local storage on your own device. You can erase it at any time by clicking "Start over" in the generator or clearing your browser's site data for this website.</p>

<h2>What we don't collect</h2>
<p>We do not have accounts, so we do not collect names, email addresses, passwords, or payment information. We cannot see, store, or recover any invoice you create.</p>

<h2>Advertising</h2>
<p>This site is supported by advertising. We may use third-party advertising partners, including Google AdSense, to serve ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visits to this site and/or other sites on the Internet.</p>
<p>You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" rel="nofollow">Google Ad Settings</a>. You can also opt out of some third-party vendors' use of cookies for personalized advertising at <a href="https://youradchoices.com/" rel="nofollow">youradchoices.com</a>.</p>

<h2>Analytics</h2>
<p>We may use privacy-respecting, aggregate analytics to understand how many people visit and which pages are useful. This data does not identify you personally and never includes anything you type into the generator.</p>

<h2>Third-party services</h2>
<p>The PDF download feature loads an open-source PDF library (jsPDF) from a public content delivery network (CDN) the first time you use it. The CDN may log standard technical request data (such as IP address) as described in its own privacy policy. Your invoice contents are not sent to the CDN — only the library code is downloaded from it.</p>

<h2>Children's privacy</h2>
<p>This site is a business tool and is not directed at children under 13. We do not knowingly collect personal information from anyone, including children.</p>

<h2>Changes to this policy</h2>
<p>If this policy changes, the new version will be posted on this page with an updated date.</p>

<h2>Contact</h2>
<p>Questions about this policy: <a href="mailto:__CONTACT__">__CONTACT__</a>.</p>
`,
  },
  {
    slug: "terms",
    title: "Terms of Use",
    description: "Terms of use for Invoicebolt, the free browser-based invoice generator.",
    html: `
<p><em>Last updated: July 30, 2026</em></p>

<h2>The service</h2>
<p>Invoicebolt is a free, browser-based tool for creating invoices. It is provided "as is," without warranties of any kind, express or implied. We do our best to keep the generator accurate and available, but we do not guarantee uninterrupted availability or error-free operation.</p>

<h2>Your invoices are your responsibility</h2>
<p>You are responsible for the accuracy and legality of invoices you create, including tax rates, registration numbers, and compliance with the invoicing requirements of your jurisdiction. Invoicebolt does not provide tax, accounting, or legal advice — content on this site is general information, not professional advice for your situation.</p>

<h2>Acceptable use</h2>
<p>You may use this tool for lawful invoicing purposes. You may not use it to create fraudulent, deceptive, or unlawful documents.</p>

<h2>Data</h2>
<p>Invoice data you enter is stored only in your own browser, as described in our <a href="__BASE__/privacy/">privacy policy</a>. Because we hold no copy, we cannot recover invoices you lose by clearing your browser data — download PDFs of anything you need to keep.</p>

<h2>Limitation of liability</h2>
<p>To the maximum extent permitted by law, Invoicebolt and its operator are not liable for any indirect, incidental, or consequential damages arising from use of this site, including lost profits, lost data, or business disputes connected to invoices created with the tool.</p>

<h2>Contact</h2>
<p>Questions about these terms: <a href="mailto:__CONTACT__">__CONTACT__</a>.</p>
`,
  },
];
