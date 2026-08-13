export const NAV_GROUPS = {
  products: [
    { name: "Match-Day Jerseys", href: "/products" },
    { name: "Training Tees", href: "/products" },
    { name: "Hoodies & Fleece", href: "/products" },
    { name: "Tracksuits", href: "/products" },
    { name: "Shorts & Bottoms", href: "/products" },
    { name: "Compression & Base Layer", href: "/products" },
    { name: "Custom OEM / ODM", href: "/products" },
  ],
  manufacturing: [
    { name: "Production Process", href: "/manufacturing" },
    { name: "Fabric Technology", href: "/manufacturing" },
    { name: "Facility & Capacity", href: "/manufacturing" },
    { name: "Compliance & Audit", href: "/manufacturing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Certifications", href: "/about" },
    { name: "Careers", href: "/about" },
  ],
};

export const ANNOUNCEMENTS = [
  "New season performance range now in production — lead times 30–45 days",
  "3 production samples free for first-time clients this quarter",
  "Holiday deadline: order by September 5 for November 1 delivery",
  "WRAP + OEKO-TEX + SEDEX compliant — full audit report on request",
];

export const MARQUEE_ITEMS = [
  "Moisture Wicking",
  "4-Way Stretch",
  "Anti-Odor Finish",
  "Flatlock Seams",
  "Taped Necklines",
  "Sublimation Print",
  "Quick-Dry Knits",
  "Bamboo Blend",
  "Compression Fit",
  "Reflective Trims",
];

export const HERO_STATS = [
  { value: 12, suffix: "+", label: "Years in Sportswear" },
  { value: 2.4, suffix: "M+", label: "Units per Month", decimals: 1 },
  { value: 850, suffix: "+", label: "Production Staff" },
  { value: 40, suffix: "+", label: "Export Markets" },
];

const MEDIA = import.meta.env.BASE_URL + "factory-media/";

export const PRODUCTS = [
  {
    id: 1,
    cat: "Jerseys",
    name: "Match-Day Jerseys",
    tag: "Sublimated performance knit",
    img: MEDIA + "Sports Shirt 3.jpg",
    desc: "Laser-cut moisture grids, dropped-shoulder athletic cut, pressed neck tape. Full sublimation print with your crest and sponsor panels.",
    gsm: "135–160 GSM",
    moq: "Request for sample",
    lead: "35–45 days",
    fabric: "Polyester performance knit · wicking finish",
    sizes: "S – 4XL",
  },
  {
    id: 2,
    cat: "Training Tees",
    name: "Training & Baselayer Tees",
    tag: "Quick-dry everyday performance",
    img: MEDIA + "Sports t Shirt.jpg",
    desc: "MOIST-WICK 180 heavyweight rings for gym, cross-fit and daily logo programs. Pre-shrunk, colorfast and pill-resistant.",
    gsm: "180 GSM",
    moq: "Request for sample",
    lead: "30–40 days",
    fabric: "100% combed cotton / poly blends",
    sizes: "XS – 5XL",
  },
  {
    id: 3,
    cat: "Hoodies & Fleece",
    name: "Hoodies & Fleeceware",
    tag: "3-end fleece, brass hardware",
    img: MEDIA + "Sports wear hoodie and trouser.jpg",
    desc: "3-end brushed fleece with double-needle binding, flat drawcords with metal aglets and double-layer hoods. Gym to street.",
    gsm: "300–330 GSM",
    moq: "Request for sample",
    lead: "40–50 days",
    fabric: "Brushed 3-end fleece",
    sizes: "S – 4XL",
  },
  {
    id: 4,
    cat: "Tracksuits",
    name: "Tracksuits & Active Sets",
    tag: "Full kit coordination",
    img: MEDIA + "Sports hoodie and trousers 3.jpg",
    desc: "Matching jacket, pant and short sets in double mesh, tricot and fleece. Tracked trims, rib cuffs and dropped crotch panels.",
    gsm: "220–280 GSM",
    moq: "Request for sample",
    lead: "45–55 days",
    fabric: "Double-mesh / tricot / fleece",
    sizes: "XS – 4XL",
  },
  {
    id: 5,
    cat: "Shorts & Bottoms",
    name: "Shorts & Performance Bottoms",
    tag: "Stretch liner systems",
    img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&h=650&q=80",
    desc: "Squat-proof twill, compression liners and tear-away panels for teams and retail programs. Full inner-short options.",
    gsm: "240–290 GSM",
    moq: "Request for sample",
    lead: "35–45 days",
    fabric: "Stretch twill / tricot mesh",
    sizes: "XS – 4XL",
  },
  {
    id: 6,
    cat: "Compression",
    name: "Compression & Base Layer",
    tag: "4-way stretch recovery",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&h=650&q=80",
    desc: "Seam-free base layers with channeled knit zones for thermoregulation and long-distance compression programs.",
    gsm: "190–230 GSM",
    moq: "Request for sample",
    lead: "40–50 days",
    fabric: "Nylon-spandex power mesh",
    sizes: "S – 3XL",
  },
  {
    id: 7,
    cat: "Sports Bras",
    name: "Sports Bras & Performance Wear",
    tag: "Support engineered per style",
    img: MEDIA + "Woman Sports bra.jpg",
    desc: "Medium and high-impact silhouettes with molded cups, soft-touch straps and internal moisture banks.",
    gsm: "200–260 GSM",
    moq: "Request for sample",
    lead: "45–55 days",
    fabric: "Supplex byte / power knit",
    sizes: "XS – XXL",
  },
  {
    id: 8,
    cat: "OEM / ODM",
    name: "Custom OEM / ODM Programs",
    tag: "Your brand, our factory",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&h=650&q=80",
    desc: "Design room, tech packs, sampling and full packaging solutions. We take you from sketch to shipped cartons.",
    gsm: "Any",
    moq: "Request for sample",
    lead: "30–60 days",
    fabric: "Fully flexible",
    sizes: "Any",
  },
];

export const FABRICS = [
  {
    name: "Compression Mesh",
    desc: "Digital knit with individual moisture-wicking fibers. Persistent airflow for high-heat training.",
    use: "Base layers, training tees",
    gsm: "190 GSM",
    tone: "from-[#D9B45B]/40",
  },
  {
    name: "Double-Mesh RapidDry",
    desc: "Two-layer quick-dry structure. Sweat is pushed to the outer face and evaporates fast.",
    use: "SS tracksuit bottoms, warm-up",
    gsm: "160 GSM",
    tone: "from-[#3E8E7E]/40",
  },
  {
    name: "VISCO Piqué",
    desc: "Compact swiss-piqué with anti-bacterial finish. Crisp drape for polos and golf programs.",
    use: "Polos, rugby, golf",
    gsm: "220 GSM",
    tone: "from-[#7C5CBF]/40",
  },
  {
    name: "3-End Fleece",
    desc: "Heavy brushed fleece, bamboo or cotton face. Hoodies, joggers and trackers.",
    use: "Hoodies, fleece bottoms",
    gsm: "330 GSM",
    tone: "from-[#C05621]/40",
  },
  {
    name: "AirFlow Tricot",
    desc: "Open-mesh tricot with inner-strength points. Woven-grade stability in a knit package.",
    use: "Tracksuits, reversible kits",
    gsm: "240 GSM",
    tone: "from-[#C5A54F]/40",
  },
  {
    name: "Bamboo Blend",
    desc: "Bamboo-viscose and organic cotton. Naturally antimicrobial moisture control.",
    use: "Guest tees, retail programs",
    gsm: "170 GSM",
    tone: "from-[#6FA34F]/40",
  },
];

export const PROCESS = [
  {
    num: "01",
    title: "Design & Tech Pack",
    desc: "Send your tech packs, sketches or a garment we reverse-engineer. We turn them into production-ready patterns and spec sheets.",
    time: "Days 1–4",
  },
  {
    num: "02",
    title: "Sampling & Approval",
    desc: "Cutting-sample within 7–10 days, with fit revisions tracked against size sets. Photo approval, lactic audit, sign-off.",
    time: "Days 5–14",
  },
  {
    num: "03",
    title: "Fabric & Trims",
    desc: "Knitting, dyeing and finishing in-house. Lab dips, bulk testing and woven labels all controlled under one roof.",
    time: "Days 15–25",
  },
  {
    num: "04",
    title: "Cutting & Sewing",
    desc: "CAD markers cut on automated spreaders. 400+ sewing stations running single-piece-flow with hourly production checks.",
    time: "Days 20–35",
  },
  {
    num: "05",
    title: "Print, Wash & Shade",
    desc: "Sublimation, DTG, embroidery, enzyme wash and garment dye. Graded shade bands locked per batch.",
    time: "Days 30–40",
  },
  {
    num: "06",
    title: "QC, Packing & Delivery",
    desc: "500-stage inline inspection, AQL 2.5 random audits, ironed and poly-bagged per your retail spec. Ex-works FOB or DDP.",
    time: "Days 40–55",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our 12-piece jersey program landed three weeks early. The lab certifications matched the fabric reports to the letter — I stopped checking.",
    name: "Marcus Ellery",
    role: "Brand Manager, California Retailer",
  },
  {
    quote:
      "They think like a U.S. vendor — sample scheduling, fit updates, sticker-level packaging instructions. Three programs moved to Peak Mode.",
    name: "Sofia Reyes",
    role: "Sourcing Director, Texas Streetwear Label",
  },
  {
    quote:
      "MOA that scales down with you. We started at 600 pieces a style, now the whole gym line runs through their factory floor.",
    name: "Daniel Park",
    role: "Founder, NYC Importer",
  },
];

export const MILESTONES = [
  { year: "2013", title: "Factory founded", desc: "12 sewing stations, Sialkot, Pakistan." },
  { year: "2016", title: "First export program", desc: "50,000 units to a Dubai-based sports retailer." },
  { year: "2019", title: "In-house knits & dyeing", desc: "Trims and fabric control move under one roof." },
  { year: "2022", title: "U.S. sales desk", desc: "Pacific-time account managers for West Coast buyers." },
  { year: "2024", title: "2.4M monthly capacity", desc: "400+ sewing stations with inline production control." },
  { year: "2026", title: "40 markets & counting", desc: "Exports to 40+ countries on five continents." },
];

export const VALUES = [
  { title: "Precision", desc: "Every spec sheet, every lab dip, every stitch measured." },
  { title: "Speed", desc: "Sampling in days. Production that holds the calendar." },
  { title: "Radical Transparency", desc: "Batch photos, loading dates and audit reports on demand." },
  { title: "Accountability", desc: "One point of contact from tech pack to delivered cartons." },
];

export const CERTIFICATIONS = [
  "OEKO-TEX Standard 100",
  "WRAP Certified",
  "Sedex SMETA 4-Pillar",
  "BSCI",
  "ISO 9001:2015",
  "GOTS Certified Organic",
  "Higg Index",
  "Global Recycled Standard",
];

export const FACILITY = [
  { label: "Annual Athletic Capacity", value: "28.8M" },
  { label: "Sewing Stations", value: "400" },
  { label: "Knitting Capacity", value: "12,000" },
  { label: "Certified Auditors", value: "8" },
];

export const EQUIPMENT = [
  "CAD Plotter & Marker",
  "Automated Spreading",
  "CNC Cutter",
  "Overlock & Flatlock Lines",
  "Sublimation Presses",
  "DTG Printers",
  "DTF Transfer Station",
  "Multi-head Embroidery",
  "Garment Wash Plant",
  "Laser Etching",
  "Metal Detection",
  "Moisture Management Lab",
];

export const COMPARISON = [
  { metric: "Factory standing", us: "Single-site audit-ready", other: "Split orders, variable quality" },
  { metric: "Quality control", us: "AQL 2.5 + 500-point inline", other: "End-of-line only" },
  { metric: "Sampling time", us: "3–10 days, incl. revisions", other: "20–40 days" },
  { metric: "Lead time", us: "30–55 days", other: "60–90 days often" },
  { metric: "Samples", us: "Free — request for sample", other: "Paid, 4–6 weeks typical" },
  { metric: "U.S. hour support", us: "Pacific–Eastern desk", other: "Reply in days" },
  { metric: "Payment options", us: "LC, T/T, DDP", other: "T/T only, 50% down" },
];