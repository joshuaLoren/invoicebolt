import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from "node:fs";
import { join } from "node:path";
import config from "./config.mjs";
import professions from "./src/data/professions.mjs";
import guides from "./src/data/guides.mjs";
import pages from "./src/data/pages.mjs";

const SRC = "./src";
const DIST = "./dist";
const ORIGIN = config.SITE_URL + config.BASE;

const layout = readFileSync(join(SRC, "templates/layout.html"), "utf8");
const tplIndex = readFileSync(join(SRC, "templates/index.html"), "utf8");
const tplProfession = readFileSync(join(SRC, "templates/profession.html"), "utf8");
const tplArticle = readFileSync(join(SRC, "templates/article.html"), "utf8");

const fill = (tpl, vars) =>
  tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => (k in vars ? vars[k] : ""));

function renderPage(outPath, { title, description, canonical, content, jsonld = "" }) {
  const html = fill(layout, {
    BRAND: config.BRAND,
    TAGLINE: config.TAGLINE,
    BASE: config.BASE,
    YEAR: config.YEAR,
    TITLE: title,
    DESCRIPTION: description,
    CANONICAL: canonical,
    CONTENT: content,
    JSONLD: jsonld,
  });
  const dir = join(DIST, outPath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

// --- Static assets ---
cpSync(join(SRC, "css"), join(DIST, "css"), { recursive: true });
cpSync(join(SRC, "js"), join(DIST, "js"), { recursive: true });
// Root-level passthrough files (e.g. Google verification file) live in src/public
cpSync(join(SRC, "public"), DIST, { recursive: true });
writeFileSync(join(DIST, ".nojekyll"), "");

// Client-side prefill data for /?template=<slug>
mkdirSync(join(DIST, "data"), { recursive: true });
writeFileSync(
  join(DIST, "data/templates.json"),
  JSON.stringify(
    Object.fromEntries(
      professions.map((p) => [p.slug, { name: p.name, items: p.items, notes: p.notes }])
    )
  )
);

// --- Homepage (the generator) ---
const templateLinks = professions
  .map((p) => `<li><a href="${config.BASE}/invoice-template/${p.slug}/">${p.name} invoice template</a></li>`)
  .join("\n");

const faqJsonld = `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: config.BRAND,
      url: ORIGIN + "/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: config.TAGLINE,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this invoice generator really free?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Every feature — line items, tax, discounts, logo upload, and PDF download — is free with no sign-up, no watermark, and no limits on how many invoices you create." },
        },
        {
          "@type": "Question",
          name: "Do I need to create an account?",
          acceptedAnswer: { "@type": "Answer", text: "No. There is no account system at all. Your invoice details are saved privately in your own browser (localStorage), so your business info is already filled in next time you visit." },
        },
        {
          "@type": "Question",
          name: "Is my data uploaded anywhere?",
          acceptedAnswer: { "@type": "Answer", text: "No. The invoice and PDF are generated entirely in your browser. Nothing you type is sent to a server." },
        },
        {
          "@type": "Question",
          name: "Can I add my logo and sales tax?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Upload a logo, set a tax rate and discount, choose a currency, and add as many line items as you need. The PDF updates to match." },
        },
      ],
    },
  ],
})}</script>`;

renderPage("", {
  title: `Free Invoice Generator — No Sign-Up, No Watermark | ${config.BRAND}`,
  description:
    "Create a professional invoice in your browser and download the PDF free. No account, no watermark, no limits. Add your logo, tax, discounts, and line items.",
  canonical: ORIGIN + "/",
  content: fill(tplIndex, { BASE: config.BASE, BRAND: config.BRAND, TEMPLATE_LINKS: templateLinks }),
  jsonld: faqJsonld,
});

// --- Profession template pages ---
for (const p of professions) {
  const itemRows = p.items
    .map((i) => `<tr><td>${i.desc}</td><td>${i.qty}</td><td>$${i.rate.toFixed(2)}</td></tr>`)
    .join("\n");
  const tips = p.tips.map((t) => `<li>${t}</li>`).join("\n");
  renderPage(`invoice-template/${p.slug}`, {
    title: `Free ${p.name} Invoice Template — Fill Out & Download PDF | ${config.BRAND}`,
    description: `Free invoice template for ${p.name.toLowerCase()}. Pre-filled with typical ${p.name.toLowerCase()} line items — customize it and download a professional PDF, no sign-up needed.`,
    canonical: `${ORIGIN}/invoice-template/${p.slug}/`,
    content: fill(tplProfession, {
      BASE: config.BASE,
      NAME: p.name,
      NAME_LOWER: p.name.toLowerCase(),
      SLUG: p.slug,
      INTRO: p.intro,
      TIPS: tips,
      ITEM_ROWS: itemRows,
      NOTES: p.notes,
    }),
  });
}

// --- Guides ---
for (const g of guides) {
  renderPage(`guides/${g.slug}`, {
    title: `${g.title} | ${config.BRAND}`,
    description: g.description,
    canonical: `${ORIGIN}/guides/${g.slug}/`,
    content: fill(tplArticle, { BASE: config.BASE, TITLE: g.title, BODY: g.html.replaceAll("__BASE__", config.BASE).replaceAll("__CONTACT__", config.CONTACT_EMAIL) }),
  });
}

// --- Static pages (about, privacy, terms) ---
for (const pg of pages) {
  renderPage(pg.slug, {
    title: `${pg.title} | ${config.BRAND}`,
    description: pg.description,
    canonical: `${ORIGIN}/${pg.slug}/`,
    content: fill(tplArticle, { BASE: config.BASE, TITLE: pg.title, BODY: pg.html.replaceAll("__BASE__", config.BASE).replaceAll("__CONTACT__", config.CONTACT_EMAIL) }),
  });
}

// --- robots.txt, sitemap.xml, 404 ---
writeFileSync(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);

const urls = [
  "/",
  ...professions.map((p) => `/invoice-template/${p.slug}/`),
  ...guides.map((g) => `/guides/${g.slug}/`),
  ...pages.map((p) => `/${p.slug}/`),
];
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${ORIGIN}${u}</loc></url>`).join("\n") +
    `\n</urlset>\n`
);

writeFileSync(
  join(DIST, "404.html"),
  fill(layout, {
    BRAND: config.BRAND, TAGLINE: config.TAGLINE, BASE: config.BASE, YEAR: config.YEAR,
    TITLE: `Page not found | ${config.BRAND}`, DESCRIPTION: "Page not found.",
    CANONICAL: ORIGIN + "/", JSONLD: "",
    CONTENT: `<section class="article"><h1>Page not found</h1><p>That page doesn't exist. <a href="${config.BASE}/">Create a free invoice instead →</a></p></section>`,
  })
);

console.log(`Built ${urls.length + 1} pages to ${DIST}/`);
