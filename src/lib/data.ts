/**
 * Calderwood Partners — content model.
 * A 34-person operations consultancy. Every number, name and outcome below
 * is written to read like a real firm's website, because that's the brief.
 */

export const firm = {
  name: 'Calderwood Partners',
  short: 'Calderwood',
  founded: 2011,
  phone: '(312) 555-0147',
  phoneHref: 'tel:+13125550147',
  email: 'intake@calderwoodpartners.com',
  offices: [
    {
      city: 'Chicago',
      address: '540 W North Avenue, Suite 300, Chicago, IL 60642',
      note: 'Main office — West Town, above the old printing works.',
    },
    {
      city: 'Toronto',
      address: '120 Simcoe Street, Suite 710, Toronto, ON M5H 4E3',
      note: 'Two partners and four analysts; Canadian desk.',
    },
  ],
  stats: [
    { value: '140', label: 'engagements completed since 2011' },
    { value: '$96M', label: 'verified client savings booked to date' },
    { value: '34', label: 'people, of whom 11 are partners' },
    { value: '83%', label: 'of new work comes from past clients' },
  ],
};

export const img = (id: string, w = 1200, q = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/* ---------------- Services ---------------- */

export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  deliverables: string[];
  typical: string; // engagement shape
};

export const services: Service[] = [
  {
    slug: 'operations-strategy',
    title: 'Operations Strategy',
    summary:
      'Decide what your operation is actually for — cost, speed, flexibility — and align the P&L line items to prove it.',
    body: [
      'Most mid-size operators have three strategies: the one on the wall, the one the sales team negotiates around, and the one the plants actually execute. We spend the first two weeks finding all three, then the rest of the engagement making them the same.',
      'The output is never a deck. It is a one-page operating plan with named owners, a cost-to-serve model you can rerun yourself, and a sequence of moves ordered by cash impact, not slide appeal.',
    ],
    deliverables: [
      'Cost-to-serve model (yours to keep, built in your data)',
      'Capacity & network scenario planner',
      '18-month sequencing plan with owners',
    ],
    typical: '8–12 weeks · partner-led · fixed fee',
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain & Logistics',
    summary:
      'Fill rates, inventory turns, freight spend — the three dials we turn until they stop fighting each other.',
    body: [
      'We come in allergic to trade-off rhetoric. Yes, service and inventory are a tension; the tension is usually inflated by five-year-old safety-stock parameters, a carrier book nobody has bid since 2019, and a planning meeting that is really a status meeting.',
      'Typical results in our last twelve manufacturing and distribution engagements: fill rate up 4–7 points, inventory down 9–16%, freight spend down 6–11% — without the layoffs the playbooks usually promise.',
    ],
    deliverables: [
      'End-to-end flow & inventory diagnostic',
      'Re-parameterized planning rules (in your ERP, not a spreadsheet)',
      'Carrier bid support and scorecards',
    ],
    typical: '10–16 weeks · hybrid team on-site 2 days/week',
  },
  {
    slug: 'data-systems',
    title: 'Data & Digital Operations',
    summary:
      'One version of the numbers, on a schedule you can set your watch by. Then the dashboards people actually open.',
    body: [
      'Before the dashboards, the plumbing: which system owns which truth, who fixes it at 2am, and why Monday’s numbers changed on Thursday. We have run this project inside SAP, Oracle, NetSuite, and one unforgettable Access database.',
      'We build in the open — your analysts pair with ours, the models land in your stack, and we leave on purpose. Our standing rule: no report ships that no named person reviews weekly.',
    ],
    deliverables: [
      'Data lineage map & source-of-truth register',
      'Ops reporting layer (dbt/warehouse of your choice)',
      'Three production dashboards with owners & cadence',
    ],
    typical: '12–20 weeks · paired build with your team',
  },
  {
    slug: 'transaction-advisory',
    title: 'M&A Operational Diligence',
    summary:
      'The plant-floor truth behind the CIM. We are the team your deal dies for — and the one it should have had anyway.',
    body: [
      'Two to three weeks, on site, talking to shift supervisors instead of VPs. We size the real synergy pool, price the deferred maintenance you inherited, and read the operation the way the seller reads it at 6am, not the way the banker reads it at 6pm.',
      'We have worked 31 deals since 2016 — buy-side for PE and corporates, a handful of sell-side cleanup jobs, and three post-merger integrations that were already behind when they called.',
    ],
    deliverables: [
      'Operational diligence report (7 days from kickoff)',
      '100-day plan with pre-priced workstreams',
      'Synergy model with confidence bands',
    ],
    typical: '2–6 weeks · fixed scope, deal calendar',
  },
];

/* ---------------- Case studies ---------------- */

export type CaseStudy = {
  slug: string;
  client: string; // anonymized the way consultancies actually do it
  sector: string;
  headline: string;
  situation: string;
  whatWeDid: string[];
  results: { value: string; label: string }[];
  duration: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'midwest-freight-carrier',
    client: 'Midwest LTL carrier, $410M revenue',
    sector: 'Logistics',
    headline: 'Terminal density rebuilt around the freight, not the org chart',
    situation:
      'Eleven terminals, four of them losing money on lanes the sales incentive plan kept alive. Service scores were fine; the margin map was a crime scene.',
    whatWeDid: [
      'Rebuilt the lane-level contribution model from nine months of billing data',
      'Redesigned the linehaul network around four consolidation hubs instead of eleven all-to-all terminals',
      'Rewrote the sales incentive to pay on contribution, not revenue — with a two-quarter glide so nobody felt ambushed',
    ],
    results: [
      { value: '+$6.8M', label: 'annualized margin, verified at 14 months' },
      { value: '97.1%', label: 'on-time delivery, up from 91.4%' },
      { value: '0', label: 'involuntary layoffs through the redesign' },
    ],
    duration: '14-week engagement, 2022–2023',
    image: '1553877522-43269d4ea984',
  },
  {
    slug: 'specialty-steel-producer',
    client: 'Specialty steel producer, 3 plants',
    sector: 'Industrial Manufacturing',
    headline: 'Changeover time cut 34% without a single new machine',
    situation:
      'The client had a capital request on the table for $22M of new rolling capacity. The real problem was a 6.5-hour average changeover and scheduling that nobody trusted.',
    whatWeDid: [
      'Filmed every changeover for three weeks; separated internal from external work',
      'Rebuilt the schedule around family-tooling sequences agreed with sales, not imposed on them',
      'Trained 40 operators and 6 supervisors in a setup-reduction method adapted for heavy rolling',
    ],
    results: [
      { value: '4.3 hrs', label: 'average changeover, down from 6.5' },
      { value: '$22M', label: 'capex deferred, then cancelled' },
      { value: '+9 pts', label: 'on-time promise to customer' },
    ],
    duration: '20-week engagement, 2023',
    image: '1581091226825-a6a2a5aee158',
  },
  {
    slug: 'regional-health-system',
    client: 'Regional health system, 4 hospitals',
    sector: 'Healthcare',
    headline: 'Elective-surgery throughput found inside the existing ORs',
    situation:
      'Board approved a $60M tower for “OR capacity.” First week of analysis: block utilization at 61% and a two-week release window nobody owned.',
    whatWeDid: [
      'Instrumented the OR schedule with actual start/stop times, not planned windows',
      'Rebuilt block allocation on 90-day utilization reality, with a monthly review surgeons actually attended',
      'Moved pre-op clearance to a nurse-practitioner track for low-risk cases',
    ],
    results: [
      { value: '+212', label: 'additional elective cases per month' },
      { value: '78%', label: 'block utilization, up from 61%' },
      { value: '$60M', label: 'tower project re-scoped to a $4M renovation' },
    ],
    duration: '26-week engagement, 2024',
    image: '1576091160550-2173dba999ef',
  },
  {
    slug: 'food-brand-co-packer',
    client: 'Ambient food brand with contract manufacturing',
    sector: 'Consumer / Supply Chain',
    headline: 'A 14-week demand-planning rebuild in the middle of a growth year',
    situation:
      'Sales was forecasting on optimism, ops was building to last month’s stockout, and co-packer minimums were paying for inventory nobody would sell before its date code did.',
    whatWeDid: [
      'Stood up one demand S&OP cycle with a written decision log',
      'Negotiated code-date risk sharing into two of the four co-packing contracts',
      'Replaced the monthly “meeting” with a 45-minute weekly consensus with real authority',
    ],
    results: [
      { value: '−23%', label: 'obsolete inventory write-offs, YoY' },
      { value: '96.8%', label: 'in-stock across top 40 SKUs' },
      { value: '1', label: 'planning meeting, replacing five' },
    ],
    duration: '14-week engagement, 2023–2024',
    image: '1454165804606-c3d57bc86b40',
  },
];

/* ---------------- Team ---------------- */

export const team = [
  {
    name: 'Neil Calderwood',
    role: 'Managing Partner',
    based: 'Chicago',
    image: '1560250097-0b93528c311a',
    bio: 'Founded the firm in 2011 after eleven years running plants for a packaging group. Still takes one hands-on engagement a year “to stay honest.”',
  },
  {
    name: 'Gordon Weiss',
    role: 'Senior Partner, Manufacturing',
    based: 'Chicago',
    image: '1472099645785-5658abf4ff4e',
    bio: 'Twenty-two years in heavy manufacturing, the last six of them as a COO who hired consultants and then became one. Owns the changeover method.',
  },
  {
    name: 'Alina Voss',
    role: 'Partner, Supply Chain',
    based: 'Toronto',
    image: '1580489944761-15a19d654956',
    bio: 'Network design and the rare art of telling a sales organization its incentive plan is expensive. Before us: grocery retail and one year on a rail carrier’s turnaround team.',
  },
  {
    name: 'Rajan Menon',
    role: 'Partner, Healthcare Analytics',
    based: 'Chicago',
    image: '1507003211169-0a1dd7228f2d',
    bio: 'Runs the health-system practice. Came from a hospital finance team where he learned that the OR schedule is the most political document in the building.',
  },
  {
    name: 'Claire Donnelly',
    role: 'Principal, Logistics',
    based: 'Chicago',
    image: '1544005313-94ddf0286df2',
    bio: 'Linehaul, last mile, and the freight bid that finds the 8% everyone said wasn’t there. Six years in, formerly carrier-side pricing.',
  },
  {
    name: 'Marco Delgado',
    role: 'Principal, Data & Systems',
    based: 'Toronto',
    image: '1500648767791-00dcc994a43e',
    bio: 'Builds the reporting layer and then deletes half of it. Insists every dashboard have a named owner and a weekly review or it doesn’t ship.',
  },
];

/* ---------------- Pricing ---------------- */

export const pricingModels = [
  {
    name: 'Diagnostic Sprint',
    price: '$18,500',
    cadence: 'fixed fee, 3 weeks',
    for: 'Operators who need the honest picture before committing to anything bigger.',
    includes: [
      'On-site week with full shop-floor access',
      'Financial baseline in your own data',
      'Board-ready findings memo — we present it, then leave',
      'Every model we build stays with you',
    ],
    note: 'Credited in full against any follow-on engagement started within 90 days.',
    featured: false,
  },
  {
    name: 'Operating Partnership',
    price: 'from $14,000',
    cadence: 'per month, 6-month minimum',
    for: 'The standard shape: a partner plus one or two analysts embedded in your cadence until the numbers move and hold.',
    includes: [
      'Weekly on-site days with your leadership team',
      'Named outcome targets in the contract, reviewed monthly',
      'Paired build — your people own the deliverables by week 12',
      'Success fee only on verified, sustained results',
    ],
    note: 'Most clients start with 8 months. Nobody has extended without hitting the first target.',
    featured: true,
  },
  {
    name: 'Interim Leadership',
    price: '$24,000',
    cadence: 'per month, 3-month minimum',
    for: 'A vacancy, a turnaround, or a transformation that needs an operator in the chair — not an advisor in the room.',
    includes: [
      'Partner or senior principal, full-time equivalent',
      'P&L and people responsibility, stated in writing',
      'Handover plan from day one, including their successor',
    ],
    note: 'We run a bench, not a database — every interim lead has done the job they are covering.',
    featured: false,
  },
];

/* ---------------- Blog ---------------- */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readMins: number;
  topic: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'safety-stock-is-a-symptom',
    title: 'Your safety stock is a symptom, not a policy',
    excerpt:
      'Every inflated buffer we’ve been asked to optimize was protecting someone from a meeting. Here’s how to find out who — and what to fix first.',
    author: 'Alina Voss',
    date: '2025-09-12',
    readMins: 6,
    topic: 'Supply Chain',
    image: '1553877522-43269d4ea984',
    body: [
      'Ask a planning team why the buffer is there and you’ll get a statistical answer: service level, lead-time variability, that sort of thing. The answer is usually true and almost never the reason.',
      'The reason is organizational. A plant that has been blamed for every stockout for a decade will build 40 days of cover, and no formula will talk them out of it, because the formula isn’t what’s keeping them up at night. We’ve watched companies cut the same SKU twice: first the math way, which lasted a quarter; then the trust way, which lasted.',
      'So before the parameters, the diagnostics we actually run: Who was punished for the last shortage? Which supplier promise has been quietly broken for two years? Which forecast is being reviewed by someone with no power to change what they see? The answers set the real safety stock. The statistics just write it down.',
      'The uncomfortable corollary: a meaningful share of your working capital is the price of unresolved meetings. Fix the meeting, and the buffer comes down on its own, and nobody has to be convinced of anything.',
    ],
  },
  {
    slug: 'the-or-schedule-is-a-political-document',
    title: 'The OR schedule is a political document',
    excerpt:
      'Hospital block utilization rarely fails for clinical reasons. Notes from twenty-six weeks inside a four-hospital system that found $56M without a tower.',
    author: 'Rajan Menon',
    date: '2025-07-28',
    readMins: 8,
    topic: 'Healthcare Operations',
    image: '1576091160550-2173dba999ef',
    body: [
      'When a system says it has run out of OR capacity, the claim is almost always about schedule architecture, not square footage. Blocks assigned by seniority. A two-week release window with no owner. First-case starts drifting 40 minutes later than planned, every day, in every room, which is not a clinical phenomenon.',
      'Our first week on any hospital engagement is boring on purpose: actual start and stop times, per room, per surgeon, ninety days. No interviews yet. The data arrives before the politics does, and it always has a shape — the under-blocked service, the over-blocked department, the release window nobody dares touch.',
      'Then the conversations, which are where the work is. A surgeon who loses block time is losing status, and no utilization dashboard speaks to that loss. The systems that move are the ones where the COO is willing to say the quiet part out loud in the room, once, carefully, with data that is unimpeachable because the surgeons’ own teams fed it.',
      'The tower we replaced was a $60M ask. The renovation that actually solved it cost $4M and took two quarters. The board approved both in the same building, eight months apart, and the second time nobody remembered the first. That’s not hypocrisy; that’s what happens when the operating truth finally outruns the capital story.',
    ],
  },
  {
    slug: 'dashboards-die-of-overdraft',
    title: 'Dashboards die of overdraft, not neglect',
    excerpt:
      'Nobody stops looking at your BI investment because it’s wrong. They stop because there are eleven of them and only one has their name on it.',
    author: 'Marco Delgado',
    date: '2025-05-16',
    readMins: 5,
    topic: 'Data & Systems',
    image: '1454165804606-c3d57bc86b40',
    body: [
      'The standard failure story for an operations reporting stack is not that the numbers were wrong. It’s that by month nine there were forty dashboards, three of them disagreeing about on-time delivery, and no way to tell which one the VP was using in the Monday review.',
      'We enforce a boring constitution: one source of truth per metric, one named owner per dashboard, one weekly meeting per dashboard where something gets decided. If a dashboard can’t name the meeting and the decision, it doesn’t ship. This rule has killed more of our own work than any client ever has.',
      'The owners push back, every time — “this is just for reference.” Reference is how the eleven dashboards happened the first time. Keep the reference in a folder; the homepage is a budget, and budgets get spent on decisions.',
      'A reporting layer is alive if it argues. If nobody has ever arrived at a meeting prepared to defend a number on it, the layer is decoration, and decoration gets deprecated quietly, by nobody, forever.',
    ],
  },
];

/* ---------------- FAQ ---------------- */

export const faqs = [
  {
    q: 'How big are your teams, and who is actually in the room?',
    a: 'A partner is on every engagement, in the room at least two days a week — that is a contractual term, not a brochure claim. Standard teams are one partner plus one or two analysts. We have 34 people; we have never staffed a project with anyone we wouldn’t hand our own P&L to, which is also why we turn down roughly one engagement in four.',
  },
  {
    q: 'Do you work with companies our size?',
    a: 'Our sweet spot is $50M–$1B in revenue, single business or light multi-business. Below that the math rarely supports a partner-led team; above, we’re usually competing with firms whose name is on the building, and frankly some of our best work has been the smaller team those firms subcontracted to us.',
  },
  {
    q: 'What does an engagement cost?',
    a: 'A Diagnostic Sprint is $18,500 fixed. Operating Partnerships run from $14,000 a month with a six-month minimum. We price on scope and time, never on a percentage of savings — but we do put a modest success fee against verified, sustained results, because we should have to.',
  },
  {
    q: 'How do you handle confidentiality?',
    a: 'Mutual NDA before any data moves, role-limited access to whatever you share, and destruction certificates at close-out. Half our work is inside active M&A processes; the market knows us precisely because nothing has ever leaked. Client names appear on this site only with written permission — which is why the case studies read the way they do.',
  },
  {
    q: 'Who owns the models and the code you build?',
    a: 'You do, from the first commit. Everything is built in your stack, in your repos, paired with your people. We leave no black boxes and no license keys hostage to a “retainer to keep it alive” conversation. It’s the main reason 83% of new work comes from past clients.',
  },
  {
    q: 'We’ve been burned by consultants before. Why are you different?',
    a: 'Fair question, and the honest answer is: sometimes we are, sometimes we’re the same people with better fonts. The concrete differences — partner in the room two days a week, named outcome targets in the contract, deliverables owned by your staff by week 12, success fee on verified results. Ask for three references from companies your exact size and call all of them. We’ll arrange it in a day.',
  },
];

/* ---------------- Client logos (SVG wordmarks) ---------------- */

export const clientLogos = [
  { name: 'Meridian Freight', letters: 'MF', word: 'MERIDIAN' },
  { name: 'Lakeshore Health', letters: 'LH', word: 'LAKESHORE' },
  { name: 'Pratt & Koenig', letters: 'P&K', word: 'PRATT & KOENIG' },
  { name: 'Northstar Foods', letters: 'NS', word: 'NORTHSTAR' },
  { name: 'Vantage Steel', letters: 'VS', word: 'VANTAGE' },
  { name: 'Cedar Point Clinics', letters: 'CP', word: 'CEDAR POINT' },
];
