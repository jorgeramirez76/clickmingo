// All site copy + business data — edit here, the site updates everywhere.

export const BUSINESS = {
  name: "ClickMingo",
  tagline: "Stand out. Get clicks. Close deals.",
  voice: "Built by closers. Designed to convert.",
  email: "hello@clickmingo.com",
  phone: "732-997-7003", // ← update with real ClickMingo number
  phoneE164: "+17329977003",
  city: "Long Branch, NJ",
  service_area: "Monmouth County · Greater NJ · Remote nationwide",
}

export type Service = {
  id: string
  title: string
  oneLiner: string
  bullets: string[]
  numeral: string
}

export const SERVICES: Service[] = [
  {
    id: "websites",
    numeral: "01",
    title: "Conversion Websites",
    oneLiner: "Sites built like landing pages, not brochures. Designed to convert visitors into bookings, calls, and orders.",
    bullets: [
      "React + Vite + Tailwind — fast, mobile-first, SEO-ready",
      "Custom design (no templates, no Wix)",
      "Lead capture forms with instant email/SMS routing",
      "Analytics + heatmaps so we know what's working",
      "Hosting + maintenance included",
    ],
  },
  {
    id: "apps",
    numeral: "02",
    title: "Phone Apps & PWAs",
    oneLiner: "Native-feeling apps for iOS and Android — without the App Store gatekeepers eating your margin.",
    bullets: [
      "Progressive Web Apps (installable, push notifications)",
      "Native iOS / Android via React Native when needed",
      "Custom dashboards, ordering apps, member portals",
      "Built-in user accounts, payments, file uploads",
    ],
  },
  {
    id: "marketing",
    numeral: "03",
    title: "Marketing That Sells",
    oneLiner: "Not just ads. End-to-end systems that turn strangers into qualified leads — built by someone who's actually closed deals.",
    bullets: [
      "Google + Meta ads with proper conversion tracking",
      "Cold email + SMS sequences that don't get marked spam",
      "SEO that ranks for buyer intent, not vanity keywords",
      "Lead magnets, landing pages, and follow-up automations",
    ],
  },
  {
    id: "integrations",
    numeral: "04",
    title: "Integrations & Automations",
    oneLiner: "Connect the tools you already pay for so they actually talk to each other. Stripe, Slice, Clover, GoHighLevel, HubSpot, Twilio.",
    bullets: [
      "Stripe + Clover checkout flows (custom, low fees)",
      "GoHighLevel build-outs (pipelines, snapshots, automations)",
      "Replace Slice/DoorDash with your own ordering — keep the margin",
      "API integrations: CRM ↔ phones ↔ email ↔ billing",
      "Make.com / Zapier / n8n workflow automation",
    ],
  },
]

export type CaseStudy = {
  id: string
  brand: string
  vertical: string
  problem: string
  solution: string
  result: string
  url?: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "harmony",
    brand: "Harmony Aesthetics",
    vertical: "Med Spa · Englishtown, NJ",
    problem: "Brand-new physician-led practice with strong Instagram, no website, no booking funnel.",
    solution: "Editorial-luxury site, 5 pages, embedded Aesthetic Record booking, Google Map, mobile call/menu bar, custom inquiry form.",
    result: "Live in 1 week. Doctor's first patients booked through site within days of launch.",
    url: "https://jorgeramirez76.github.io/harmony-aesthetics-site/",
  },
  {
    id: "tjrg",
    brand: "The Jorge Ramirez Group",
    vertical: "Real Estate · Monmouth County, NJ",
    problem: "Generic Keller Williams template wasn't ranking, wasn't converting.",
    solution: "Full site rebuild with neighborhood pages, IDX integration, lead magnets, schema markup, technical SEO sweep.",
    result: "Resolved 4 Google Search Console errors, 191 orphan pages, 1,570 translation issues. Calls now coming directly from organic search.",
  },
  {
    id: "aisp",
    brand: "AI Sales Pipeline",
    vertical: "SaaS · GoHighLevel reseller",
    problem: "GHL builds for other realtors needed a credible buying experience and clear pricing page.",
    solution: "Marketing site + Spanish version, lead capture, simulation page using Brandon Mulrenin reverse-selling scripts.",
    result: "Closing real estate agents on the GHL package; revenue stream replicated to multiple verticals.",
  },
]

export const STATS = [
  { value: "60+", label: "House flips closed personally" },
  { value: "$0 → $25K/mo", label: "GHL builds for clients" },
  { value: "9 yrs", label: "Sales + ops experience" },
  { value: "<7 days", label: "Average launch time" },
]

export const PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "30-min call. We talk about what you sell, who you sell to, and where the leaks are. No pitch. We either click or we don't.",
  },
  {
    step: "02",
    title: "Proposal & lock-in",
    body: "Within 24 hrs you get a fixed-price proposal — scope, timeline, deliverables. 50% to start, 50% at launch. Optional payment plan.",
  },
  {
    step: "03",
    title: "Build sprint",
    body: "1–4 weeks depending on scope. You get a private project link to watch progress live. Daily standups by text if you want them.",
  },
  {
    step: "04",
    title: "Launch + handoff",
    body: "We push live, set up analytics, train your team, and stay on call for 30 days. Optional monthly maintenance keeps things sharp.",
  },
]

export const PRICING = [
  {
    tier: "Starter Site",
    price: "$2,500",
    when: "5-page brochure site for service businesses",
    features: [
      "Custom design (no templates)",
      "Mobile + SEO ready",
      "Contact form → your inbox",
      "Hosting + 1 year domain included",
      "30 days post-launch support",
    ],
    cta: "Start here",
    href: "/contact?tier=starter",
    feature: false,
  },
  {
    tier: "Conversion Engine",
    price: "$10,000",
    when: "Full system — site + integrations + lead capture",
    features: [
      "Everything in Starter",
      "Custom integrations (Stripe / Clover / GHL / etc.)",
      "Online ordering or booking funnel",
      "Lead routing → SMS + email",
      "Analytics + heatmap setup",
      "90 days post-launch support",
    ],
    cta: "Most popular",
    href: "/contact?tier=engine",
    feature: true,
  },
  {
    tier: "Custom Build",
    price: "Quote",
    when: "Apps, marketplaces, complex integrations, recurring SaaS",
    features: [
      "Discovery workshop",
      "Custom scope, fixed price",
      "Native iOS/Android if needed",
      "Multi-month engagements",
      "Optional retained dev hours",
    ],
    cta: "Let's talk",
    href: "/contact?tier=custom",
    feature: false,
  },
]

export const TESTIMONIALS = [
  {
    quote: "Jorge built us an entire AI sales pipeline that's now bringing in business while we sleep. He knows what he's doing.",
    name: "Real Estate Agent",
    role: "AI Sales Pipeline client",
  },
  {
    quote: "He doesn't just build websites — he builds revenue. Different conversation than every other 'web guy' we've talked to.",
    name: "Service Business Owner",
    role: "Monmouth County, NJ",
  },
]

export const TECH_LOGOS = [
  "STRIPE", "CLOVER", "GOHIGHLEVEL", "SLICE", "TWILIO", "HUBSPOT", "MAKE.COM", "ZAPIER",
  "OPENAI", "AIRTABLE", "SUPABASE", "VERCEL", "CLOUDFLARE", "REACT", "TAILWIND", "WORDPRESS",
]
