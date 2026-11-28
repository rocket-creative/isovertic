// Medical devices, biotech, search, ads, and outreach.
export const b = {
  "claims-matched": {
    title: "Each sentence on the page is matched to an approved claim",
    html: ({ win }) => `<div class="row">${win("", `<h3>Approved claims list</h3>
      <p class="sm"><span class="num">1</span>Indicated for the use stated in the clearance.</p>
      <p class="sm"><span class="num">2</span>Measures the parameter named in the labeling.</p>
      <p class="sm"><span class="num">3</span>Results in the time stated in the instructions for use.</p>
      <p class="sm"><span class="num">4</span>For use by trained clinical staff.</p>
      <div class="note">Regulatory signs this list before any copy is written.</div>`)}
      ${win("draft · product page", `<h3>Website copy</h3>
      <p>The device is cleared for the stated indication. <span class="chip on">1</span></p>
      <p>It measures the named parameter at the bedside. <span class="chip on">2</span></p>
      <p>Staff read the result in the stated time. <span class="chip on">3</span></p>
      <p class="x">It improves patient outcomes.</p><p class="xs blue b" style="margin-top:2px">No matching claim. Removed.</p>
      <p>Designed for trained clinical staff. <span class="chip on">4</span></p>`)}</div>`,
  },
  "device-before": {
    title: "Before clearance: the problem, the technology, the team, the evidence so far",
    html: ({ win }) => win("example-device.com", `<div class="nav"><b>Example Device</b><span>The problem</span><span>Technology</span><span>Team</span><span>Evidence</span></div>
      <h1>A new way to measure what clinicians now estimate.</h1>
      <div class="cols mt2"><div class="card"><h3>The problem</h3><p class="sm">What is hard about the current standard of care, with sources.</p></div><div class="card"><h3>The technology</h3><p class="sm">How the device works, in plain words and a diagram.</p></div>
      <div class="card"><h3>The team</h3><p class="sm">Founders, clinical advisors, and their backgrounds.</p></div><div class="card"><h3>Evidence so far</h3><p class="sm">Bench and early study results, each linked to its source.</p></div></div>
      <div class="note">This device is not cleared by the FDA and is not available for sale. The page makes no claims about what it does for patients.</div>`),
  },
  "device-after": {
    title: "After clearance: the indications, the clinical evidence, the instructions for use",
    html: ({ win }) => win("example-device.com", `<div class="nav"><b>Example Device</b><span>Indications</span><span>Clinical evidence</span><span>For clinicians</span><span>Order</span></div>
      <h1>Cleared for the indication stated in the labeling.</h1>
      <div class="cols3 mt2"><div class="card on"><h3>Indications for use</h3><p class="sm">Quoted from the clearance, word for word.</p></div><div class="card on"><h3>Clinical evidence</h3><p class="sm">The pivotal study: design, size, endpoints, and results, with the publication.</p></div><div class="card on"><h3>Instructions for use</h3><p class="sm">The current version as a page and a PDF.</p><p class="link sm">Download</p></div></div>
      <span class="btn">Talk to a clinical specialist</span>`),
  },
  "biotech-two-levels": {
    title: "A science page written at two levels",
    html: ({ win }) => win("example-bio.com/science", `<h1>Our science</h1><p><span class="chip on">In brief</span><span class="chip">In depth</span></p>
      <div class="cols mt"><div class="card on"><h3>For the investor</h3><p>Many patients stop responding to current treatment. We are developing a medicine that acts on a different target, so it may work where current drugs do not.</p></div>
      <div class="card"><h3>For the specialist</h3><p class="sm">Mechanism of action, target validation data, the preclinical models used, and the readouts, each with a figure and a link to the paper or poster.</p><div class="ph" style="height:96px;margin-top:12px">Figure: dose response in the stated model</div></div></div>`),
  },
  "biotech-pipeline": {
    title: "A pipeline page that shows where each program stands today",
    html: ({ win }) => win("example-bio.com/pipeline", `<div class="fl"><h1>Pipeline</h1><span class="xs s">Updated this quarter</span></div>
      <table class="t" style="margin-top:18px"><tr><th>Program</th><th>Indication</th><th style="width:16%">Discovery</th><th style="width:16%">Preclinical</th><th style="width:16%">Phase 1</th><th style="width:16%">Phase 2</th></tr>
      ${[["EB 101", "Indication A", 3.4], ["EB 102", "Indication B", 2.3], ["EB 201", "Indication C", 1.5]].map(([p, i, n]) => `<tr><td class="b">${p}</td><td class="sm">${i}</td><td colspan="4"><div class="meter" style="height:16px;margin-top:5px"><b style="width:${(n / 4) * 100}%;background:#0F2C3F"></b></div></td></tr>`).join("")}</table>
      <p class="sm s mt2">Each program opens a page with the target, the data so far, and the next milestone.</p>`),
  },
  "biotech-team": {
    title: "A team page with real biographies",
    html: ({ win }) => win("example-bio.com/team", `<h1>Team and advisors</h1><div class="cols3 mt">
      ${[["Chief Executive Officer", "Where they worked before, what they built there, and why they started this company."], ["Chief Scientific Officer", "Their field, the papers that matter here, and the programs they have taken into the clinic."], ["Scientific advisor", "Their institution, their role with the company, and their publications on the target."]]
        .map(([r, t]) => `<div><div class="ph" style="height:150px">Photo</div><h2 class="mt" style="font-size:18px">Name, degree</h2><p class="xs s b" style="margin-top:2px;letter-spacing:.08em;text-transform:uppercase">${r}</p><p class="sm">${t}</p><p class="link xs">Publications</p></div>`).join("")}</div>`),
  },
  "seo-monthly-report": {
    tag: "Sample",
    title: "The monthly report: what we published, how it did, what comes next",
    html: ({ win }) => win("", `<h3>Search and publishing · Example Biosciences · sample month</h3><div class="cols3 mt">
      <div><h2>Published</h2><ul class="dot sm"><li>Service page: assay development</li><li>Article: choosing a readout for potency</li><li>Updated: the quote request page</li></ul></div>
      <div><h2>How it did</h2><table class="kv sm"><tr><td style="width:62%">Visits from search</td><td class="b r">412</td></tr><tr><td>Searches we now show for</td><td class="b r">38</td></tr><tr><td>Quote requests</td><td class="b r">5</td></tr></table></div>
      <div><h2>Next month</h2><ul class="dot sm"><li>Service page: assay validation</li><li>Article from your new poster</li><li>Fix two slow pages</li></ul></div></div>
      <div class="note">One page. Every number links to its source.</div>`),
  },
  "long-search-results": {
    title: "A long, exact search, and the small company with a page for it",
    html: ({ win }) => win("", `<div class="in" style="font-size:18px;border-radius:22px;padding:10px 20px">anti target x antibody validated IHC mouse FFPE tissue</div><p class="xs s mt">Results</p>
      ${[["small-supplier.example", "Anti Target X antibody for IHC on mouse FFPE tissue", "Validated on knockout tissue. Protocol, dilution, and images on the page.", true], ["large-marketplace.example", "Target X antibodies (214 products)", "Browse antibodies by application, host, and conjugate."], ["large-supplier.example", "Target X antibody products", "Our full range of Target X reagents."]]
        .map(([u, t, d, on]) => `<div class="mt" style="${on ? "border-left:4px solid #0AB1FF;padding-left:14px" : "padding-left:18px"}"><p class="xs s" style="margin:0">${u}</p><p class="link b" style="margin-top:2px;font-size:19px">${t}</p><p class="sm s" style="margin-top:2px">${d}</p></div>`).join("")}
      <div class="note">Few people type this search. The ones who do are ready to buy.</div>`),
  },
  "search-console-queries": {
    tag: "Sample",
    title: "The searches that bring people to a site, with clicks beside each one",
    html: ({ win }) => win("", `<h3>Search performance · queries · last 28 days · sample numbers</h3>
      <table class="t"><tr><th>Search</th><th class="r">Clicks</th><th class="r">Times shown</th><th class="r">Average position</th></tr>
      ${[["cell based potency assay development", 64, 910, "4.1"], ["assay validation services", 41, 1260, "7.8"], ["potency assay for biologics cro", 37, 480, "3.2"], ["how to choose a potency assay readout", 22, 530, "5.6"], ["assay transfer package what is included", 12, 140, "2.9"], ["example biosciences", 9, 31, "1.0"]]
        .map(([q, c, i, p]) => `<tr><td>${q}</td><td class="r b">${c}</td><td class="r s">${i.toLocaleString("en-US")}</td><td class="r s">${p}</td></tr>`).join("")}</table>
      <div class="note">We write the next pages from this list: the searches you are shown for but not yet clicked.</div>`),
  },
  "article-corrections": {
    title: "A draft with the scientist's corrections marked",
    html: ({ win }) => `<div class="row">${win("draft · article", `<h1 style="font-size:25px">Choosing a knockout strategy for your gene</h1>
      <p>A <span class="x">conditional</span> <span class="hl">constitutive</span> knockout removes the gene in every cell from the start of development.</p>
      <p>A conditional knockout uses <span class="x">Cre sites</span> <span class="hl">loxP sites</span> so that Cre recombinase removes the gene only in chosen tissues.</p>
      <p class="x">Conditional models always give cleaner data than constitutive models.</p>
      <p>The right choice depends on whether losing the gene everywhere is lethal to the embryo.</p>`)}
      <div style="width:320px;display:flex;flex-direction:column;gap:14px"><div class="card on"><h3>Kristen · term</h3><p class="sm">Constitutive, not conditional. The two were swapped.</p></div><div class="card on"><h3>Kristen · term</h3><p class="sm">The sites are loxP. Cre is the enzyme that cuts them.</p></div><div class="card on"><h3>Kristen · unsupported</h3><p class="sm">No source supports "always". Cut the sentence.</p></div></div></div>`,
  },
  "ads-search-terms": {
    tag: "Sample",
    title: "The searches buyers typed, and the searches told not to show the ad",
    html: ({ win }) => `<div class="row">${win("", `<h3>Searches that showed the ad</h3><table class="t sm"><tr><th>What the buyer typed</th><th class="r">Clicks</th></tr>
      ${[["custom knockout mouse model service", 18], ["conditional knockout mouse quote", 11], ["humanized mouse model provider", 9], ["knockin mouse generation cost", 7]].map(([q, c]) => `<tr><td>${q}</td><td class="r b">${c}</td></tr>`).join("")}</table>`)}
      ${win("", `<h3>Searches told not to show the ad</h3><table class="t sm"><tr><th>Blocked word</th><th>Why</th></tr>
      ${[["jobs, salary, careers", "Job seekers"], ["what is, definition", "Students"], ["pet, feeder, for sale near me", "Not research buyers"], ["free, pdf, protocol", "Not buying a service"]].map(([q, w]) => `<tr><td class="x">${q}</td><td class="s">${w}</td></tr>`).join("")}</table>
      <div class="note">Each search we do not want goes on the right side, so the budget stays on buyers.</div>`)}</div>`,
  },
  "ads-monthly-report": {
    tag: "Sample",
    title: "The ads report leads with cost per qualified inquiry",
    html: ({ win }) => win("", `<h3>Google Ads · Example Biosciences · sample month</h3>
      <div class="cols3 mt"><div class="card on"><h3>Cost per qualified inquiry</h3><p class="big" style="margin-top:12px">$310</p></div><div class="card"><h3>Qualified inquiries</h3><p class="big" style="margin-top:12px;color:#14181B">8</p></div><div class="card"><h3>Ad spend</h3><p class="big" style="margin-top:12px;color:#14181B">$2,480</p></div></div>
      <table class="t sm mt2"><tr><th>Ad group</th><th class="r">Spend</th><th class="r">Inquiries</th><th class="r">Qualified</th><th class="r">Cost per qualified</th></tr>
      <tr><td>Assay development</td><td class="r">$1,240</td><td class="r">7</td><td class="r b">5</td><td class="r b">$248</td></tr><tr><td>Assay validation</td><td class="r">$820</td><td class="r">4</td><td class="r b">3</td><td class="r b">$273</td></tr><tr><td>Brand name</td><td class="r">$420</td><td class="r">2</td><td class="r b">0</td><td class="r s">none</td></tr></table>
      <p class="xs s mt">Qualified means your team confirmed the inquiry was a real buyer. Clicks are in the appendix.</p>`),
  },
  "outreach-email": {
    title: "An outreach email written to one person about their own work",
    html: ({ win }) => win("", `<table class="kv sm" style="margin-top:0"><tr><td style="border-top:0">To</td><td style="border-top:0" class="b">Dr. Maya Chen, principal investigator</td></tr><tr><td>Subject</td><td class="b">Your paper on the Target X pathway</td></tr></table><div class="hr"></div>
      <p>Dr. Chen,</p><p>I read your recent paper on Target X signaling. <span class="hl">In the methods you note that the commercial antibody you used did not work for IHC.</span></p>
      <p>We make a rabbit monoclonal against Target X that is validated for IHC on knockout tissue. <span class="hl">I can send you a sample and the validation data at no cost.</span></p>
      <p>Would that be useful for the follow up study?</p><p class="s">Name, title, direct phone</p>
      <div class="note">One reader, one reason to write, one offer. No list, no template.</div>`),
  },
  "reply-handoff": {
    title: "A reply handed to your team, with who the person is and what they asked",
    html: ({ win }) => `<div class="row">${win("", `<h3>The reply</h3><p class="b">From Dr. Maya Chen</p><p>Yes, a sample would help. We start the follow up study in January. Can you also send the IHC protocol and the recommended dilution?</p>`)}
      <div style="width:400px" class="win"><div class="body" style="background:#F1FAFF"><h3 class="navy">Note for your team</h3>
      <table class="kv sm"><tr><td>Who</td><td class="b">Principal investigator, university lab, publishes on Target X</td></tr><tr><td>Asked for</td><td class="b">Sample, IHC protocol, dilution</td></tr><tr><td>Timing</td><td class="b">Study starts in January</td></tr><tr><td>Next step</td><td class="b">Your scientist replies with the protocol and ships the sample</td></tr></table></div></div></div>`,
  },
};
