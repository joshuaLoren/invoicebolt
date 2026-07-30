(() => {
  const form = document.getElementById("invoice-form");
  if (!form) return; // not the generator page

  const BASE = window.__BASE__ || "";
  const STORAGE_KEY = "invoicebolt-v1";

  const SYMBOLS = { USD: "$", EUR: "€", GBP: "£", CAD: "CA$", AUD: "A$", INR: "Rs. " };

  const $ = (id) => document.getElementById(id);
  const fields = {
    fromName: $("from-name"), fromEmail: $("from-email"), fromAddress: $("from-address"), fromPhone: $("from-phone"),
    toName: $("to-name"), toEmail: $("to-email"), toAddress: $("to-address"),
    number: $("inv-number"), date: $("inv-date"), due: $("inv-due"),
    currency: $("inv-currency"), tax: $("inv-tax"), discount: $("inv-discount"),
    notes: $("inv-notes"),
  };
  const itemsWrap = $("line-items");
  let logoDataUrl = null;

  // ---------- line items ----------
  function addItem(item = { desc: "", qty: 1, rate: "" }) {
    const row = document.createElement("div");
    row.className = "line-item";
    row.innerHTML = `
      <input type="text" class="item-desc" placeholder="Description of work" aria-label="Description">
      <input type="number" class="item-qty" min="0" step="0.5" aria-label="Quantity">
      <input type="number" class="item-rate" min="0" step="0.01" placeholder="Rate" aria-label="Rate">
      <button type="button" class="remove-item" title="Remove line" aria-label="Remove line">✕</button>`;
    row.querySelector(".item-desc").value = item.desc;
    row.querySelector(".item-qty").value = item.qty;
    row.querySelector(".item-rate").value = item.rate;
    row.querySelector(".remove-item").addEventListener("click", () => { row.remove(); update(); });
    itemsWrap.appendChild(row);
  }

  function readItems() {
    return [...itemsWrap.querySelectorAll(".line-item")].map((row) => ({
      desc: row.querySelector(".item-desc").value,
      qty: parseFloat(row.querySelector(".item-qty").value) || 0,
      rate: parseFloat(row.querySelector(".item-rate").value) || 0,
    }));
  }

  // ---------- state ----------
  function readState() {
    const s = { logo: logoDataUrl, items: readItems() };
    for (const [k, el] of Object.entries(fields)) s[k] = el.value;
    return s;
  }

  function applyState(s) {
    for (const [k, el] of Object.entries(fields)) if (s[k] != null) el.value = s[k];
    itemsWrap.innerHTML = "";
    (s.items && s.items.length ? s.items : [{ desc: "", qty: 1, rate: "" }]).forEach(addItem);
    if (s.logo) setLogo(s.logo);
  }

  function setLogo(dataUrl) {
    logoDataUrl = dataUrl;
    const img = $("pv-logo");
    if (dataUrl) { img.src = dataUrl; img.hidden = false; $("logo-clear").hidden = false; }
    else { img.removeAttribute("src"); img.hidden = true; $("logo-clear").hidden = true; }
  }

  // ---------- money ----------
  const sym = () => SYMBOLS[fields.currency.value] || "$";
  const money = (n) => sym() + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function totals() {
    const items = readItems();
    const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
    const discountPct = parseFloat(fields.discount.value) || 0;
    const discount = subtotal * discountPct / 100;
    const taxPct = parseFloat(fields.tax.value) || 0;
    const tax = (subtotal - discount) * taxPct / 100;
    return { items, subtotal, discount, discountPct, tax, taxPct, total: subtotal - discount + tax };
  }

  // ---------- preview ----------
  const fmtDate = (v) => {
    if (!v) return "";
    const [y, m, d] = v.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  function update() {
    $("pv-from-name").textContent = fields.fromName.value || "Your Business";
    $("pv-from-details").textContent = [fields.fromAddress.value, fields.fromEmail.value, fields.fromPhone.value].filter(Boolean).join("\n");
    $("pv-to-name").textContent = fields.toName.value;
    $("pv-to-details").textContent = [fields.toAddress.value, fields.toEmail.value].filter(Boolean).join("\n");
    $("pv-number").textContent = fields.number.value ? "# " + fields.number.value : "";
    $("pv-date").textContent = fmtDate(fields.date.value);
    $("pv-due").textContent = fmtDate(fields.due.value);

    const t = totals();
    const tbody = $("pv-items");
    tbody.innerHTML = "";
    for (const i of t.items) {
      if (!i.desc && !i.rate) continue;
      const tr = document.createElement("tr");
      const cells = [i.desc, String(i.qty), money(i.rate), money(i.qty * i.rate)];
      cells.forEach((text, idx) => {
        const td = document.createElement("td");
        td.textContent = text;
        if (idx === 3) td.className = "num";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    }

    $("pv-subtotal").textContent = money(t.subtotal);
    $("pv-discount-row").hidden = !t.discount;
    $("pv-discount").textContent = "–" + money(t.discount);
    $("pv-tax-row").hidden = !t.tax;
    $("pv-tax-label").textContent = `Tax (${t.taxPct}%)`;
    $("pv-tax").textContent = money(t.tax);
    $("pv-total").textContent = money(t.total);
    $("pv-notes").textContent = fields.notes.value;

    clearTimeout(update._t);
    update._t = setTimeout(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(readState())), 300);
  }

  // ---------- PDF (jsPDF loaded lazily from CDN on first use) ----------
  let pdfLibs = null;
  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  async function ensurePdfLibs() {
    if (pdfLibs) return pdfLibs;
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js");
    pdfLibs = window.jspdf;
    return pdfLibs;
  }

  async function downloadPdf() {
    const btn = $("download-pdf");
    btn.disabled = true; btn.textContent = "Preparing…";
    try {
      const { jsPDF } = await ensurePdfLibs();
      const doc = new jsPDF({ unit: "pt", format: "letter" });
      const t = totals();
      const W = doc.internal.pageSize.getWidth();
      const M = 48;
      let y = 56;

      // Header: business name left, logo + INVOICE right
      doc.setFont("helvetica", "bold").setFontSize(18).setTextColor(31, 41, 55);
      doc.text(fields.fromName.value || "Invoice", M, y);
      if (logoDataUrl) {
        try {
          const props = doc.getImageProperties(logoDataUrl);
          const h = 40, w = (props.width / props.height) * h;
          const fmt = logoDataUrl.startsWith("data:image/png") ? "PNG" : "JPEG";
          doc.addImage(logoDataUrl, fmt, W - M - w, y - 30, w, h);
        } catch (e) { /* unsupported image format — skip logo in PDF */ }
      }
      doc.setFont("helvetica", "normal").setFontSize(9).setTextColor(107, 114, 128);
      const fromLines = [fields.fromAddress.value, fields.fromEmail.value, fields.fromPhone.value].filter(Boolean);
      fromLines.forEach((l, i) => doc.text(l, M, y + 16 + i * 12));

      doc.setFont("helvetica", "bold").setFontSize(20).setTextColor(79, 70, 229);
      doc.text("INVOICE", W - M, y + (logoDataUrl ? 28 : 0), { align: "right" });
      doc.setFont("helvetica", "normal").setFontSize(10).setTextColor(107, 114, 128);
      if (fields.number.value) doc.text("# " + fields.number.value, W - M, y + (logoDataUrl ? 44 : 16), { align: "right" });

      y += Math.max(fromLines.length * 12 + 30, 70);

      // Bill to + dates
      doc.setFontSize(8).setTextColor(107, 114, 128).text("BILL TO", M, y);
      doc.setFont("helvetica", "bold").setFontSize(11).setTextColor(31, 41, 55);
      doc.text(fields.toName.value || "—", M, y + 14);
      doc.setFont("helvetica", "normal").setFontSize(9).setTextColor(107, 114, 128);
      [fields.toAddress.value, fields.toEmail.value].filter(Boolean).forEach((l, i) => doc.text(l, M, y + 28 + i * 12));
      doc.setFontSize(10).setTextColor(31, 41, 55);
      if (fields.date.value) doc.text(`Date: ${fmtDate(fields.date.value)}`, W - M, y + 2, { align: "right" });
      if (fields.due.value) doc.text(`Due: ${fmtDate(fields.due.value)}`, W - M, y + 16, { align: "right" });
      y += 64;

      // Items table
      const body = t.items.filter((i) => i.desc || i.rate)
        .map((i) => [i.desc, String(i.qty), money(i.rate), money(i.qty * i.rate)]);
      doc.autoTable({
        startY: y, margin: { left: M, right: M },
        head: [["Description", "Qty", "Rate", "Amount"]],
        body,
        theme: "plain",
        headStyles: { fontStyle: "bold", fontSize: 8, textColor: [107, 114, 128], lineWidth: { bottom: 1.2 }, lineColor: [31, 41, 55] },
        styles: { fontSize: 10, cellPadding: 6, textColor: [31, 41, 55], lineWidth: { bottom: 0.5 }, lineColor: [229, 231, 235] },
        columnStyles: { 1: { cellWidth: 50 }, 2: { cellWidth: 80, halign: "right" }, 3: { cellWidth: 90, halign: "right" } },
      });
      y = doc.lastAutoTable.finalY + 18;

      // Totals block, right-aligned
      const totalRows = [["Subtotal", money(t.subtotal)]];
      if (t.discount) totalRows.push([`Discount (${t.discountPct}%)`, "-" + money(t.discount)]);
      if (t.tax) totalRows.push([`Tax (${t.taxPct}%)`, money(t.tax)]);
      doc.setFontSize(10).setFont("helvetica", "normal").setTextColor(31, 41, 55);
      totalRows.forEach(([label, val], i) => {
        doc.text(label, W - M - 180, y + i * 16);
        doc.text(val, W - M, y + i * 16, { align: "right" });
      });
      y += totalRows.length * 16 + 6;
      doc.setLineWidth(1.2).setDrawColor(31, 41, 55).line(W - M - 180, y - 12, W - M, y - 12);
      doc.setFont("helvetica", "bold").setFontSize(12);
      doc.text("Total", W - M - 180, y + 4);
      doc.text(money(t.total), W - M, y + 4, { align: "right" });
      y += 36;

      // Notes
      if (fields.notes.value) {
        doc.setFont("helvetica", "normal").setFontSize(9).setTextColor(107, 114, 128);
        const wrapped = doc.splitTextToSize(fields.notes.value, W - M * 2);
        doc.text(wrapped, M, y);
      }

      const name = (fields.number.value || "invoice").replace(/[^\w-]+/g, "-");
      doc.save(`${name}.pdf`);
    } catch (err) {
      console.error(err);
      alert("PDF download failed — try the Print button instead (choose 'Save as PDF').");
    } finally {
      btn.disabled = false; btn.textContent = "⬇ Download PDF";
    }
  }

  // ---------- template prefill (?template=slug) ----------
  async function applyTemplateFromUrl() {
    const slug = new URLSearchParams(location.search).get("template");
    if (!slug) return;
    try {
      const res = await fetch(`${BASE}/data/templates.json`);
      const templates = await res.json();
      const t = templates[slug];
      if (!t) return;
      itemsWrap.innerHTML = "";
      t.items.forEach(addItem);
      if (!fields.notes.value) fields.notes.value = t.notes;
      update();
      document.getElementById("generator").scrollIntoView();
    } catch (e) { /* offline or bad slug — generator still works */ }
  }

  // ---------- wire up ----------
  $("add-item").addEventListener("click", () => { addItem(); update(); });
  $("download-pdf").addEventListener("click", downloadPdf);
  $("print-invoice").addEventListener("click", () => window.print());
  $("clear-invoice").addEventListener("click", () => {
    if (!confirm("Clear this invoice? Your business details will be kept.")) return;
    const keep = { fromName: fields.fromName.value, fromEmail: fields.fromEmail.value, fromAddress: fields.fromAddress.value, fromPhone: fields.fromPhone.value, logo: logoDataUrl };
    applyState({ ...keep, toName: "", toEmail: "", toAddress: "", number: "", date: "", due: "", tax: "", discount: "", notes: "", items: [] });
    update();
  });
  $("logo-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setLogo(reader.result); update(); };
    reader.readAsDataURL(file);
  });
  $("logo-clear").addEventListener("click", () => { setLogo(null); $("logo-input").value = ""; update(); });
  form.addEventListener("input", update);

  // ---------- init ----------
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try { applyState(JSON.parse(saved)); } catch (e) { addItem(); }
  } else {
    addItem();
    fields.date.valueAsDate = new Date();
    const due = new Date(); due.setDate(due.getDate() + 30);
    fields.due.valueAsDate = due;
    fields.number.value = "INV-001";
  }
  update();
  applyTemplateFromUrl();
})();
