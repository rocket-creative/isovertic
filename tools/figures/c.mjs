// Contract manufacturers, consultants, redesign, device launch, and automation.
const ai = (who, q, a, note) => ({ win }) => win("", `<div class="msg me"><span class="xs s b">${who}</span><p style="margin-top:4px">${q}</p></div><div class="msg"><span class="xs s b">AI ASSISTANT</span>${a}</div><div class="note">${note}</div>`);

export const c = {
  "cdmo-capability": {
    title: "A capability page an engineer can check against a drawing",
    html: ({ win }) => win("example-manufacturing.com/capabilities/injection-molding", `<h1>Medical injection molding</h1>
      <table class="kv"><tr><td>Process</td><td class="b">Injection molding and overmolding in a cleanroom</td></tr><tr><td>Materials</td><td class="b">The resins run, listed by name and grade</td></tr><tr><td>Scale</td><td class="b">From prototype lots to stated annual volumes</td></tr><tr><td>Equipment</td><td class="b">Press count and tonnage range, cleanroom class</td></tr><tr><td>Tolerances</td><td class="b">Stated in millimeters for each feature type</td></tr></table>
      <span class="btn">Send a drawing for review</span>`),
  },
  "cdmo-quality": {
    title: "A quality page in plain words",
    html: ({ win }) => win("example-manufacturing.com/quality", `<h1>Quality and registrations</h1><div class="cols mt">
      <div><h2>Registrations</h2><table class="kv sm"><tr><td style="width:50%">FDA establishment</td><td class="b">Registered, number stated</td></tr><tr><td>ISO 13485</td><td class="b">Certified, <span class="link">certificate</span></td></tr><tr><td>Cleanroom</td><td class="b">ISO class stated</td></tr></table></div>
      <div><h2>Audit history</h2><table class="kv sm"><tr><td style="width:50%">Last FDA inspection</td><td class="b">Month, year, and outcome</td></tr><tr><td>Last certification audit</td><td class="b">Month, year, and outcome</td></tr><tr><td>Customer audits</td><td class="b">Welcome, with how to book one</td></tr></table></div></div>
      <div class="note">A quality manager finds the answers here and does not have to send a questionnaire to get them.</div>`),
  },
  "ai-answer-cdmo": {
    title: "An AI assistant answers who can make one component",
    html: ai("BUYER", "Who can overmold a silicone grip onto a stainless steel surgical handle, in a cleanroom, at about 20,000 units a year?",
      `<p style="margin-top:4px">Two manufacturers state this capability on their websites:</p><ul class="dot"><li><span class="hl b">Manufacturer A</span> lists silicone overmolding on metal, cleanroom production, and that volume range.</li><li><span class="hl b">Manufacturer B</span> lists silicone overmolding for surgical instruments and its ISO 13485 certificate.</li></ul><p class="sm s">Sources: the capability page of each company.</p>`,
      "The assistant names the companies whose pages state the process, the material, and the scale."),
  },
  "ai-answer-consulting": {
    title: "A quality director describes a finding and asks who can help",
    html: ai("QUALITY DIRECTOR", "Our audit found gaps in design history file traceability under ISO 13485. Who can help us remediate before the follow up audit?",
      `<p style="margin-top:4px">Firms that describe this exact work on their websites include:</p><ul class="dot"><li><span class="hl b">Firm A</span>, which has a page on design history file remediation with its method and a typical timeline.</li><li><span class="hl b">Firm B</span>, which publishes a guide to traceability findings.</li></ul><p class="sm s">Sources: the page each firm wrote about this problem.</p>`,
      "A firm with only a list of services gives the assistant nothing to match to the question."),
  },
  "consulting-problem-page": {
    title: "A problem page with the heading in the client's own words",
    html: ({ win }) => win("example-consulting.com/problems/audit-finding-design-history-file", `<h3>ISO 13485 · design controls</h3>
      <h1 class="mt"><span class="hl">"Our auditor says our design history file does not trace."</span></h1>
      <p class="s">What that finding means, why it happens, and how we fix it before the follow up audit.</p>
      <div class="cols3 mt2"><div><h2>What it means</h2><p class="sm">Requirements, design outputs, and test records do not link to each other.</p></div><div><h2>Why it happens</h2><p class="sm">The file was assembled after the design work, not during it.</p></div><div><h2>How we fix it</h2><p class="sm">We rebuild the trace matrix with your engineers and close each gap with evidence.</p></div></div>
      <span class="btn">Describe your finding</span>`),
  },
  "consulting-how-works": {
    title: "A page on how the consultant works",
    html: ({ win }) => win("example-consulting.com/how-we-work", `<h1>What a project looks like</h1><div class="cols3 mt2">
      <div class="card on"><h3>Weeks 1 and 2</h3><p class="b">Gap assessment</p><p class="sm">We read the file and the finding. You get a written list of gaps.</p></div>
      <div class="card on"><h3>Weeks 3 to 8</h3><p class="b">Remediation</p><p class="sm">We work with your engineers, in your system, one gap at a time.</p></div>
      <div class="card on"><h3>Week 9</h3><p class="b">Mock audit</p><p class="sm">We audit the file the way the auditor will.</p></div></div>
      <h2 class="mt2">What you get</h2><ul class="dot sm"><li>The gap list, the completed trace matrix, and the mock audit report</li><li>A fixed price stated before work starts</li></ul>`),
  },
  "outdated-site-signs": {
    title: "Three signs a website is out of date",
    html: ({ win }) => win("example-labs.com", `<div class="nav"><b>Example Labs</b><span>Products</span><span>News</span><span>Contact</span></div>
      <div class="cols" style="gap:40px"><div><h2>Latest news</h2><p class="sm"><span class="ring b">March 2024</span> &nbsp; Example Labs to exhibit at the spring conference</p><p class="xs blue b">Sign 2: the newest news item is more than a year old</p>
      <p class="sm s mt">January 2024 &nbsp; New distributor announced</p></div>
      <div><h2>Contact us</h2><div class="ring" style="margin-top:14px;padding:6px"><span class="lab" style="margin-top:0">Message</span><div class="in" style="min-height:70px"></div><span class="btn" style="margin-top:10px">Submit</span></div><p class="xs blue b" style="margin-top:14px">Sign 3: no name, no phone number, no reply time</p></div></div>
      <div class="hr" style="margin-top:26px"></div><p class="sm s"><span class="ring b" style="color:#14181B">© 2021 Example Labs</span> &nbsp; All rights reserved.</p><p class="xs blue b">Sign 1: an old copyright year</p>`),
  },
  "search-console-pages": {
    tag: "Sample",
    title: "Which pages bring in visitors today, so the redesign keeps them",
    html: ({ win }) => win("", `<h3>Search performance · pages · last 12 months · sample numbers</h3>
      <table class="t"><tr><th>Page</th><th class="r">Clicks from search</th><th>In the redesign</th></tr>
      ${[["/products/cell-counter", "3,120", "Keep the address, rewrite the page"], ["/applications/cell-viability", "1,840", "Keep the address, rewrite the page"], ["/blog/how-to-count-cells", "1,275", "Keep as is"], ["/support/manuals", "610", "Keep, add text beside each PDF"], ["/news/2019-trade-show", "4", "Retire, point to the news page"]]
        .map(([p, c, d]) => `<tr><td style="font-family:Consolas,monospace;font-size:15px">${p}</td><td class="r b">${c}</td><td class="sm">${d}</td></tr>`).join("")}</table>
      <div class="note">We check this list before we move anything. A page that brings visitors keeps its address.</div>`),
  },
  "redesign-before": {
    title: "Before: the page as it is today",
    html: ({ win }) => win("example-labs.com/products/cell-counter", `<div class="nav" style="border-color:#0F2C3F"><b class="navy" style="font-size:20px;letter-spacing:.04em">◆ EXAMPLE LABS</b><span>Home</span><span>Products</span><span>About Us</span><span>Contact Us</span></div>
      <p class="b navy" style="font-size:20px">Welcome to Example Labs!</p>
      <p class="sm">Example Labs is a leading provider of innovative solutions for the life science community. Our cutting edge products deliver best in class performance. We are committed to excellence, quality, and customer satisfaction in everything we do. Our team of dedicated professionals brings decades of combined experience.</p>
      <p class="sm">For more information about our products please download our brochure or contact us.</p>
      <p class="link sm">Download brochure (PDF, 14 MB)</p><p class="link sm">Click here to contact us</p>`),
  },
  "redesign-after": {
    title: "After: the same logo, colors, and fonts, with new writing and layout",
    html: ({ win }) => win("example-labs.com/products/cell-counter", `<div class="nav" style="border-color:#0F2C3F"><b class="navy" style="font-size:20px;letter-spacing:.04em">◆ EXAMPLE LABS</b><span>Products</span><span>Applications</span><span>Support</span><span>Contact</span></div>
      <div class="cols" style="grid-template-columns:1.2fr 1fr"><div><h1 class="navy">Count cells and read viability in under a minute.</h1><p class="s">A benchtop counter for labs that count before every passage.</p><span class="btn">Request a quote</span><span class="sm s" style="margin-left:14px">Reply within one business day</span></div>
      <div><table class="kv sm" style="margin-top:0"><tr><td style="border-top:0;width:52%">Sample volume</td><td style="border-top:0" class="b">20 microliters</td></tr><tr><td>Time per sample</td><td class="b">Stated in seconds</td></tr><tr><td>Cell size range</td><td class="b">Stated in micrometers</td></tr></table><p class="link sm">All specifications</p></div></div>`),
  },
  "redirect-list": {
    title: "Every old page address, and the new page it points to",
    html: ({ win }) => win("", `<h3>Redirect list · checked before launch</h3>
      <table class="t" style="font-family:Consolas,monospace;font-size:15px"><tr><th style="font-family:Archivo">Old address</th><th></th><th style="font-family:Archivo">New address</th><th class="r" style="font-family:Archivo">Tested</th></tr>
      ${[["/products.php?id=12", "/products/cell-counter"], ["/products.php?id=14", "/products/plate-reader"], ["/about-us.html", "/about"], ["/news/2019-trade-show", "/news"], ["/contact-us.html", "/contact"], ["/downloads/brochure.pdf", "/products"]]
        .map(([o, n]) => `<tr><td class="s">${o}</td><td class="blue b">→</td><td>${n}</td><td class="r blue b" style="font-family:Archivo">✓</td></tr>`).join("")}</table>
      <div class="note">No old link, bookmark, or search result lands on an error page after launch.</div>`),
  },
  "device-technology-page": {
    title: "A technology page for a device that is not yet cleared",
    html: ({ win }) => win("example-device.com/technology", `<h1>How the device works</h1>
      <div class="cols mt"><div><p class="sm" style="display:flex"><span class="num">1</span><span>A sensor on the skin reads an optical signal.</span></p><p class="sm" style="display:flex"><span class="num">2</span><span>The device converts the signal to a measurement.</span></p><p class="sm" style="display:flex"><span class="num">3</span><span>The reading appears on the handheld display.</span></p>
      <p class="sm s">Bench data and the methods are in our <span class="link">technical paper</span>.</p></div><div class="ph" style="height:200px">Diagram: sensor, signal path, display</div></div>
      <div class="note"><span class="b">Investigational device.</span> Not cleared by the FDA. Not available for sale in the United States. This page describes how the device works and makes no claim about safety or effectiveness.</div>`),
  },
  "launch-signup": {
    title: "A clinician asks to hear from the company at launch",
    html: ({ win }) => win("example-device.com/updates", `<div class="cols" style="grid-template-columns:1fr 1.1fr;gap:44px"><div><h1>Hear from us at launch</h1><p class="s">One email when the device is cleared and available. Nothing before that, and no sales calls.</p><p class="xs s mt2">The device is investigational and is not cleared by the FDA.</p></div>
      <div><span class="lab" style="margin-top:0">Name</span><div class="in"></div><span class="lab">Work email</span><div class="in"></div><span class="lab">Specialty</span><div class="in">Emergency medicine</div><span class="lab">Hospital or practice</span><div class="in"></div><span class="btn">Tell me at launch</span></div></div>`),
  },
  "ai-device-claim-circled": {
    title: "An AI assistant repeats a claim the company is not allowed to make",
    html: ai("CLINICIAN", "What does the Example Device do?",
      `<p style="margin-top:4px">The Example Device is a handheld monitor that reads an optical signal through the skin. It is cleared for use by trained clinical staff. Some sources say it <span class="ring b">reduces hospital readmissions</span>.</p><p class="sm s">Sources: a 2023 news article, a distributor's product listing.</p>`,
      "That claim is not in the cleared labeling. It came from an old article. The audit finds claims like this and where the assistant got them."),
  },
  "publication-watch": {
    title: "A publication watch result: the citation, the record, the summary, the draft post",
    html: ({ win }) => win("", `<div class="cols" style="gap:34px"><div><h3>New paper that used your product</h3>
      <p class="b">Author A, Author B, Author C. Title of the paper as published. <i>Journal name.</i> Year.</p><p class="link sm">Open the PubMed record</p>
      <h3 class="mt2">How the product was used</h3><p class="sm">The authors used the company's antibody for IHC on mouse tissue, as stated in the methods section. The summary says only what the paper says.</p></div>
      <div><h3>Draft post for you to edit</h3><div class="card mt" style="margin-top:12px"><p class="sm" style="margin-top:0">New in <i>Journal name</i>: Author A and colleagues used our Target X antibody for IHC in their study of the pathway. Congratulations to the team. Link to the paper below.</p></div>
      <span class="btn ghost">Edit</span><span class="btn" style="margin-left:10px">Approve</span><p class="xs s mt">Nothing is posted until a person approves it.</p></div></div>`),
  },
  "quote-reply-and-alert": {
    title: "The buyer gets a reply in minutes, and the team gets the alert",
    html: ({ win }) => `<div class="row">${win("", `<h3>To the buyer · 3 minutes after the form</h3><p class="b">We have your quote request</p><p class="sm">Hello Dr. Rivera,</p><p class="sm">Thank you. A scientist on our team reads your request today, and your written quote arrives within one business day.</p><p class="sm">The specifications you asked about are on <span class="link">this page</span>.</p>`)}
      <div style="width:430px" class="win"><div class="body" style="background:#F1FAFF"><h3 class="navy">To the team · same minute</h3><p class="b">An inquiry is waiting</p>
      <table class="kv sm"><tr><td>From</td><td class="b">Dr. Rivera, university core lab</td></tr><tr><td>Wants</td><td class="b">Quote for the cell counter</td></tr><tr><td>Asked about</td><td class="b">Cell size range</td></tr><tr><td>Reply due</td><td class="b">Tomorrow, end of day</td></tr></table><span class="btn">Open the request</span></div></div></div>`,
  },
  "row-to-catalog-page": {
    title: "One row of the spreadsheet, and the catalog page built from it",
    html: ({ win }) => `<div style="display:flex;flex-direction:column;gap:18px;flex:1;min-height:0"><div class="win" style="flex:none"><div class="body" style="padding:14px 22px"><table class="t sm" style="margin-top:0;font-family:Consolas,monospace"><tr><th>catalog_no</th><th>target</th><th>host</th><th>clonality</th><th>applications</th><th>reactivity</th><th>size</th></tr>
      <tr><td class="hl">EX 1042</td><td class="hl">Target X</td><td class="hl">Rabbit</td><td class="hl">Monoclonal</td><td class="hl">WB, IHC</td><td class="hl">Human, Mouse</td><td class="hl">100 µL</td></tr></table></div></div>
      ${win("example-reagents.com/antibodies/ex-1042", `<h1>Anti <span class="hl">Target X</span> antibody, <span class="hl">rabbit</span> <span class="hl">monoclonal</span></h1><table class="kv"><tr><td>Catalog number</td><td class="b"><span class="hl">EX 1042</span></td></tr><tr><td>Applications</td><td class="b"><span class="hl">WB, IHC</span></td></tr><tr><td>Species reactivity</td><td class="b"><span class="hl">Human, Mouse</span></td></tr><tr><td>Size</td><td class="b"><span class="hl">100 µL</span></td></tr></table><p class="sm s mt">The page is built from the row. Change the row and the page changes with it.</p>`)}</div>`,
  },
  "newsletter-draft-approve": {
    title: "A newsletter drafted by software, edited and approved by a person",
    html: ({ win }) => win("", `<div class="fl"><h3>Draft · monthly newsletter · waiting for approval</h3><span><span class="btn ghost" style="margin:0">Request changes</span><span class="btn ring" style="margin:0 0 0 10px">Approve and schedule</span></span></div><div class="hr"></div>
      <h1 class="mt" style="font-size:25px">New this month: IHC validation data for Target X</h1>
      <p>We added knockout validation images to <span class="x">all of our antibodies</span> <span class="hl">the Target X antibody page</span>.</p>
      <p>Two new papers cited our reagents this month. <span class="x">They prove our antibodies are the best available.</span></p>
      <p>We will be at the spring conference, <span class="hl">booth number to be confirmed</span>.</p>
      <div class="note">Three edits by the reviewer. Nothing sends until a person presses approve.</div>`),
  },
  "run-record": {
    tag: "Sample",
    title: "The record of what ran: what it made, its source, and who approved it",
    html: ({ win }) => win("", `<table class="t sm" style="margin-top:0"><tr><th>When</th><th>What ran</th><th>What it made</th><th>Source</th><th>Approved by</th></tr>
      ${[["Mon 9:02", "Publication watch", "1 summary, 1 draft post", "PubMed record", "Marketing lead"], ["Mon 9:14", "Quote reply", "1 reply to a buyer", "Form entry", "Sent automatically"], ["Tue 8:30", "Catalog update", "12 product pages", "Spreadsheet rows 40 to 51", "Product manager"], ["Wed 10:05", "Newsletter draft", "1 draft, 3 edits", "This month's updates", "Marketing lead"], ["Thu 9:01", "Publication watch", "No new papers", "PubMed search", "Nothing to approve"]]
        .map(([w, a, m, s, p]) => `<tr><td class="s">${w}</td><td class="b">${a}</td><td>${m}</td><td class="link">${s}</td><td>${p}</td></tr>`).join("")}</table>
      <div class="note">Every line can be opened to see exactly what was made and what it was made from.</div>`),
  },
};
