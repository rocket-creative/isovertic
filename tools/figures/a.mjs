// Reports, the website pages, and the first industry pages.
const meter = (label, n, of) => `<div class="mt"><div class="fl"><span class="xs s b" style="letter-spacing:.1em;text-transform:uppercase">${label}</span><span class="b">${n} of ${of}</span></div><div class="meter"><b style="width:${(n / of) * 100}%"></b></div></div>`;
const lines = (n, w = [100, 96, 88, 92, 70]) => Array.from({ length: n }, (_, i) => `<div class="line" style="width:${w[i % w.length]}%"></div>`).join("");

export const a = {
  "snapshot-report": {
    tag: "Sample",
    title: "The one page snapshot report, with sample numbers",
    html: ({ win }) => win("", `<div class="cols" style="grid-template-columns:1.05fr 1fr;gap:36px">
      <div><h3>AI visibility snapshot · Example Biosciences</h3>
        <p class="mt" style="display:flex;align-items:baseline;gap:14px"><span class="big">31</span><span class="b" style="font-size:20px">of 120 answers named the company</span></p>
        <p class="sm s">10 buyer questions, asked 3 times each on 4 assistants.</p>
        ${meter("ChatGPT", 11, 30)}${meter("Gemini", 6, 30)}${meter("Perplexity", 12, 30)}${meter("Claude", 2, 30)}
        <h3 class="mt2">What the AI got wrong</h3>
        <p class="sm">Two answers gave a turnaround time that the company's own site does not state.</p></div>
      <div><h3>Who was named instead</h3>
        <table class="kv"><tr><td style="width:auto;color:#14181B" class="b">Competitor A</td><td class="r s">74 answers</td></tr><tr><td style="width:auto;color:#14181B" class="b">Competitor B</td><td class="r s">58 answers</td></tr><tr><td style="width:auto;color:#14181B" class="b">Competitor C</td><td class="r s">40 answers</td></tr></table>
        <h3 class="mt2">The three fixes that matter most</h3>
        <p class="sm" style="display:flex"><span class="num">1</span><span>Give each service its own page. Today five services share one page.</span></p>
        <p class="sm" style="display:flex"><span class="num">2</span><span>Put the specifications on the page as text. They are inside a PDF now.</span></p>
        <p class="sm" style="display:flex"><span class="num">3</span><span>Let the AI crawlers in. The site's robots file blocks two of them.</span></p></div></div>`),
  },
  "audit-competitors": {
    tag: "Sample",
    title: "The full audit compares you with up to four competitors",
    html: ({ win }) => win("", `<h3>Full AI visibility audit · 50 buyer questions · 5 assistants · sample numbers</h3>
      <table class="t" style="margin-top:22px"><tr><th>Company</th><th>ChatGPT</th><th>Gemini</th><th>Perplexity</th><th>Claude</th><th>Google AI</th><th class="r">Named in</th></tr>
      ${[["Example Biosciences", 14, 9, 17, 6, 11, true], ["Competitor A", 31, 28, 33, 22, 30], ["Competitor B", 25, 19, 27, 18, 21], ["Competitor C", 12, 15, 10, 9, 14], ["Competitor D", 6, 4, 9, 3, 5]]
        .map(([n, ...v]) => { const on = v[5] === true; const nums = v.slice(0, 5); const sum = nums.reduce((x, y) => x + y, 0);
          return `<tr${on ? ' style="background:#F1FAFF"' : ""}><td class="b${on ? " navy" : ""}">${n}${on ? " (you)" : ""}</td>${nums.map((x) => `<td>${x} of 50</td>`).join("")}<td class="r b">${sum} of 250</td></tr>`; }).join("")}</table>
      <p class="sm s mt2">Each cell counts the questions where the assistant named that company. Every number links to the saved answers behind it.</p>
      <div class="note">Where Competitor A is named and you are not, the report shows the page of theirs the assistant cited.</div>`),
  },
  "audit-fix-list": {
    tag: "Sample",
    title: "The fix list from a full audit, most important first",
    html: ({ win }) => win("", `<h3>Fix list · Example Biosciences</h3>
      <table class="t" style="margin-top:18px"><tr><th style="width:44px">#</th><th>Fix</th><th>Why it is first</th><th style="width:120px">Effort</th></tr>
      <tr><td class="b navy">1</td><td class="b">Let the AI crawlers read the site</td><td class="sm">The robots file blocks two crawlers, so those assistants cannot read any page.</td><td class="sm">One hour</td></tr>
      <tr><td class="b navy">2</td><td class="b">One page for each service</td><td class="sm">31 of 50 questions name a single service. No page answers them.</td><td class="sm">Two weeks</td></tr>
      <tr><td class="b navy">3</td><td class="b">Specifications as text, not PDF</td><td class="sm">Assistants quoted a competitor's numbers where yours sit in a download.</td><td class="sm">One week</td></tr>
      <tr><td class="b navy">4</td><td class="b">Correct the turnaround time</td><td class="sm">Two assistants repeat an old figure from a 2022 press release.</td><td class="sm">One day</td></tr>
      <tr><td class="b navy">5</td><td class="b">Cite your papers on the method page</td><td class="sm">Answers that name you cite a third party list, not your site.</td><td class="sm">Three days</td></tr></table>`),
  },
  "page-as-visitor": {
    title: "The page as a visitor sees it",
    html: ({ win }) => win("example-biosciences.com/services/assay-development", `<div class="nav"><b>Example Biosciences</b><span>Services</span><span>Science</span><span>About</span><span>Contact</span></div>
      <h1>Cell based assay development</h1><p class="s">Custom assays for potency, binding, and signaling, built and validated in our lab.</p>
      <div class="cols mt2"><div><h2>What you get</h2><ul class="dot sm"><li>A written assay plan before work starts</li><li>Validation data with acceptance criteria</li><li>A transfer package for your own lab</li></ul><span class="btn">Request a quote</span></div>
      <div><h2>Typical timeline</h2><table class="kv sm"><tr><td>Feasibility</td><td>2 weeks</td></tr><tr><td>Development</td><td>6 weeks</td></tr><tr><td>Validation</td><td>4 weeks</td></tr></table></div></div>`),
  },
  "page-as-crawler": {
    title: "The same page as an AI crawler receives it",
    html: ({ win }) => win("example-biosciences.com/services/assay-development", `<div><div style="height:300px"></div>
      <div class="note" style="font-size:16px">The words on this page only appear after the browser runs code. Most programs that AI companies use to read websites do not run that code. They receive the page above: nothing.</div>
      <p class="xs s" style="font-family:Consolas,monospace;margin-top:16px">&lt;body&gt;&lt;div id="root"&gt;&lt;/div&gt;&lt;script src="/app.js"&gt;&lt;/script&gt;&lt;/body&gt;</p></div>`),
  },
  "monitoring-report": {
    tag: "Sample",
    title: "The monthly monitoring report, with the runs behind every number",
    html: ({ win }) => win("", `<div class="fl"><h3>AI visibility monitoring · Example Biosciences · sample month</h3><span class="xs s">20 questions × 3 runs = 60 runs per assistant</span></div>
      <table class="t" style="margin-top:20px"><tr><th>Assistant</th><th style="width:42%">Named in</th><th>This month</th><th>Last month</th><th class="r">Change</th></tr>
      ${[["ChatGPT", 27, 21], ["Gemini", 18, 18], ["Perplexity", 33, 24], ["Claude", 9, 6], ["Google AI answers", 22, 15]].map(([n, x, y]) => `<tr><td class="b">${n}</td><td><div class="meter" style="margin-top:8px"><b style="width:${(x / 60) * 100}%"></b></div></td><td>${x} of 60 runs</td><td class="s">${y} of 60 runs</td><td class="r b ${x > y ? "blue" : "s"}">${x > y ? "+" + (x - y) : "no change"}</td></tr>`).join("")}</table>
      <div class="cols mt2"><div><h3>What changed</h3><p class="sm">Perplexity now cites the new assay development page in 9 answers.</p></div><div><h3>Next month</h3><p class="sm">Publish the two service pages the assistants still have nothing to cite for.</p></div></div>`),
  },
  "draft-review-marked": {
    title: "A draft page in review, with the client's changes marked",
    html: ({ win }) => `<div class="row">${win("draft · services/toxicology", `<h1>GLP toxicology studies</h1>
      <p>We run repeat dose studies in rodents <span class="x">and large animals</span> <span class="hl">and rabbits</span> in our own vivarium.</p>
      <p>Draft reports arrive <span class="hl">within six weeks of the last necropsy</span>.</p>
      <p class="s">Study directors answer sponsor questions directly.</p>
      <h2 class="mt2">Study types</h2><ul class="dot sm"><li>14 and 28 day repeat dose</li><li>Dose range finding</li><li class="x">Carcinogenicity</li></ul>`)}
      <div style="width:330px;display:flex;flex-direction:column;gap:14px">
      <div class="card on"><h3>Change 1 · Study director</h3><p class="sm">We do not run large animal studies. Say rabbits.</p></div>
      <div class="card on"><h3>Change 2 · Quality lead</h3><p class="sm">State the report time. Six weeks from last necropsy is what we commit to.</p></div>
      <div class="card on"><h3>Change 3 · Study director</h3><p class="sm">Remove carcinogenicity. We refer those out.</p></div>
      <p class="xs s">Three changes in this round. The page goes live when the client approves it.</p></div></div>`,
  },
  "claim-linked-to-source": {
    title: "Every technical statement links to where it came from",
    html: ({ win }) => win("example-biosciences.com/technology", `<div class="nav"><b>Example Biosciences</b><span>Technology</span><span>Services</span><span>Publications</span></div>
      <h1>How the platform works</h1>
      <p style="font-size:19px;line-height:1.6">The assay detects the target protein in 25 microliters of plasma <span class="hl link">[1]</span> and gives the same result across three sites <span class="hl link">[2]</span>.</p>
      <div class="hr"></div><h3 class="mt">Sources</h3>
      <p class="sm"><span class="b navy">[1]</span> Author A, Author B, Author C. Title of the validation paper. <i>Journal name.</i> Year. <span class="link">Read the paper</span></p>
      <p class="sm"><span class="b navy">[2]</span> Multi site reproducibility dataset, with the protocol. <span class="link">Download the dataset</span></p>
      <div class="note">A reader, a reviewer, or an AI assistant can check each claim in one click.</div>`),
  },
  "cro-search": {
    title: "A sponsor types the whole study into the search box",
    html: ({ win }) => win("", `<div class="in" style="font-size:18px;border-radius:22px;padding:10px 20px">28 day repeat dose oral toxicity study rat OECD 407 GLP CRO</div>
      <p class="xs s mt">Results</p>
      ${[["CRO A", "28 day repeat dose oral toxicity in rats (OECD 407), GLP", "Study design, endpoints, timeline, and how to request a quote. One page for this study.", true], ["CRO B", "Toxicology services", "General toxicology, safety pharmacology, and more."], ["CRO C", "Repeat dose toxicity studies", "Rodent and non rodent repeat dose studies under GLP."]]
        .map(([n, t, d, on]) => `<div class="mt" style="${on ? "border-left:4px solid #0AB1FF;padding-left:14px" : "padding-left:18px"}"><p class="xs s" style="margin:0">${n.toLowerCase().replace(" ", "-")}.example</p><p class="link b" style="margin-top:2px;font-size:19px">${t}</p><p class="sm s" style="margin-top:2px">${d}</p></div>`).join("")}
      <div class="note">The CRO with a page for this exact study is the one that matches the search.</div>`),
  },
  "cro-service-page": {
    title: "A service line page that states the model, method, readouts, time, and standard",
    html: ({ win }) => win("example-cro.com/studies/28-day-oral-toxicity-rat", `<h1>28 day repeat dose oral toxicity study in rats</h1>
      <table class="kv"><tr><td>Model</td><td class="b">Sprague Dawley rat, both sexes</td></tr>
      <tr><td>Method</td><td class="b">Daily oral gavage, three dose groups and a control</td></tr>
      <tr><td>Readouts</td><td class="b">Clinical observations, body weight, hematology, clinical chemistry, organ weights, histopathology</td></tr>
      <tr><td>Turnaround</td><td class="b">Draft report a stated number of weeks after the last necropsy</td></tr>
      <tr><td>Standard</td><td class="b">OECD Test Guideline 407, run under GLP</td></tr></table>
      <span class="btn">Request a quote for this study</span>`),
  },
  "cro-quote-form": {
    title: "A quote request form that asks what a study director needs to know",
    html: ({ win }) => win("example-cro.com/request-a-quote", `<h1>Request a quote</h1><div class="cols" style="margin-top:6px">
      <div><span class="lab">Species</span><div class="in">Rat</div><span class="lab">Endpoints</span><div class="in" style="min-height:74px">Hematology, clinical chemistry, histopathology</div><span class="lab">Work email</span><div class="in s">name@company.com</div></div>
      <div><span class="lab">Timeline</span><div class="in">Start within 8 weeks</div><span class="lab">Compliance level</span><div><span class="chip on">GLP</span><span class="chip">Non GLP</span><span class="chip">Not sure yet</span></div><span class="lab">Test article</span><div class="in">Small molecule, oral</div></div></div>
      <span class="btn">Send request</span><span class="sm s" style="margin-left:16px">A study director replies within one business day.</span>`),
  },
  "cro-page-top": {
    title: "The top of the page answers the sponsor's first three questions",
    html: ({ win }) => win("example-cro.com/studies/28-day-oral-toxicity-rat", `<div class="nav"><b>Example CRO</b><span>Studies</span><span>Facility</span><span>Team</span><span>Contact</span></div>
      <h1>28 day repeat dose oral toxicity study in rats</h1>
      <div class="cols3 mt2"><div class="card on"><h3>Have you run it before?</h3><p class="b">We have run this study design since 2015.</p></div>
      <div class="card on"><h3>Who runs it?</h3><p class="b">A named study director with a short biography and a photo.</p></div>
      <div class="card on"><h3>How fast do you answer?</h3><p class="b">A study director replies within one business day.</p></div></div>
      <span class="btn">Request a quote</span>`),
  },
  "antibody-product-page": {
    title: "An antibody product page with everything a buyer checks",
    html: ({ win }) => win("example-reagents.com/antibodies/anti-target-x-rabbit-monoclonal", `<div class="cols" style="grid-template-columns:1.25fr 1fr"><div><h1>Anti Target X antibody, rabbit monoclonal</h1>
      <table class="kv sm"><tr><td>Target</td><td class="b">Target X (gene symbol and UniProt ID)</td></tr><tr><td>Clonality</td><td class="b">Monoclonal, clone number stated</td></tr><tr><td>Host</td><td class="b">Rabbit</td></tr><tr><td>Applications</td><td><span class="chip on">WB</span><span class="chip on">IHC</span><span class="chip on">Flow</span></td></tr><tr><td>Species reactivity</td><td><span class="chip">Human</span><span class="chip">Mouse</span></td></tr></table></div>
      <div><div class="ph" style="height:200px">Validation image:<br>western blot, knockout lane beside wild type</div>
      <h3 class="mt">Citations</h3><p class="sm"><span class="link">12 papers cite this antibody</span>, listed with the application each one used.</p></div></div>`),
  },
  "ai-answer-antibody": {
    title: "An AI assistant answers a buyer and cites the supplier's page",
    html: ({ win }) => win("", `<div class="msg me"><span class="xs s b">BUYER</span><p style="margin-top:4px">Which antibody against Target X works for IHC on mouse tissue?</p></div>
      <div class="msg"><span class="xs s b">AI ASSISTANT</span><p style="margin-top:4px">For IHC on mouse tissue, one option is the rabbit monoclonal from <span class="hl b">Supplier A</span>. Its product page lists IHC as a validated application, shows mouse reactivity, and includes a knockout validation image.</p>
      <p class="sm s">Sources: <span class="link hl">supplier-a.example/antibodies/anti-target-x</span></p></div>
      <div class="note">The assistant can only cite a page that states the target, the application, and the species in words it can read.</div>`),
  },
  "instrument-application": {
    title: "An application page: what the instrument does for one workflow, with data",
    html: ({ win }) => win("example-instruments.com/applications/cell-viability", `<h1>Cell viability counts in under a minute</h1><p class="s">For labs that count cells before every passage.</p>
      <div class="cols mt2"><div><h2>The workflow</h2><p class="sm" style="display:flex"><span class="num">1</span><span>Load 20 microliters of sample.</span></p><p class="sm" style="display:flex"><span class="num">2</span><span>The instrument images and counts.</span></p><p class="sm" style="display:flex"><span class="num">3</span><span>Read the count and viability on screen.</span></p></div>
      <div><h2>The data</h2><div class="ph" style="height:150px;margin-top:10px">Chart: instrument count against manual count, with the sample size</div><p class="xs s">Method and raw data: <span class="link">download</span></p></div></div>`),
  },
  "instrument-specs": {
    title: "Specifications as text on the page, with the PDF as a link",
    html: ({ win }) => win("example-instruments.com/products/cell-counter/specifications", `<div class="fl"><h1>Specifications</h1><span class="btn ghost ring" style="margin:0">Download the PDF</span></div>
      <table class="kv"><tr><td>Sample volume</td><td class="b">20 microliters</td></tr><tr><td>Cell size range</td><td class="b">Stated in micrometers</td></tr><tr><td>Concentration range</td><td class="b">Stated in cells per milliliter</td></tr><tr><td>Time per sample</td><td class="b">Stated in seconds</td></tr><tr><td>Dimensions and weight</td><td class="b">Stated with units</td></tr><tr><td>Power</td><td class="b">100 to 240 V</td></tr></table>
      <div class="note">Search engines and AI assistants read the table. Purchasing prints the PDF.</div>`),
  },
  "first-reply-email": {
    title: "The first reply arrives while the buyer is still at the desk",
    html: ({ win }) => win("", `<table class="kv sm" style="margin-top:0"><tr><td style="border-top:0">From</td><td style="border-top:0" class="b">Example Instruments</td></tr><tr><td>Subject</td><td class="b">We have your quote request for the cell counter</td></tr><tr><td>Received</td><td>2 minutes after the form was sent</td></tr></table>
      <div class="hr"></div><p>Hello Dr. Rivera,</p><p>Thank you for your request. Here is what happens next:</p>
      <ul class="dot"><li>An application scientist reads your request today.</li><li>You receive a written quote within one business day.</li><li>If you would like a demonstration, reply to this email and we will schedule one.</li></ul>
      <p>The specifications you asked about are on <span class="link">this page</span>.</p>`),
  },
  "dx-test-page": {
    title: "A test page with what a laboratory director looks for",
    html: ({ win }) => win("example-diagnostics.com/tests/respiratory-panel", `<h1>Respiratory pathogen panel</h1>
      <table class="kv"><tr><td>Intended use</td><td class="b">Quoted from the cleared labeling, word for word</td></tr>
      <tr><td>Performance</td><td class="b">Sensitivity and specificity with confidence intervals and the study size</td></tr>
      <tr><td>Specimen requirements</td><td class="b">Specimen type, collection device, volume, storage, and stability</td></tr>
      <tr><td>Turnaround time</td><td class="b">Time from receipt at the laboratory to result</td></tr></table>
      <span class="btn">Order this test</span><span class="btn ghost" style="margin-left:10px">Package insert (PDF)</span>`),
  },
  "dx-three-paths": {
    title: "A diagnostics home page with one path for each reader",
    html: ({ win }) => win("example-diagnostics.com", `<div class="nav"><b>Example Diagnostics</b><span>Tests</span><span>Science</span><span>About</span><span>Contact</span></div>
      <h1>Answers from one sample, in days.</h1>
      <div class="cols3 mt2"><div class="card on"><h3>Laboratories</h3><p class="b">Performance data, specimen requirements, and workflow fit.</p><p class="link sm">For laboratories</p></div>
      <div class="card on"><h3>Clinicians</h3><p class="b">When to order the test and what the result means.</p><p class="link sm">For clinicians</p></div>
      <div class="card on"><h3>Patients</h3><p class="b">What the test is, how the sample is taken, and when results arrive.</p><p class="link sm">For patients</p></div></div>`),
  },
  lines,
};
delete a.lines;
