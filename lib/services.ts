export type Service = {
  num: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  body: string;
  longBody: string;
  deliverables: string[];
  outcomes: string[];
  process: { n: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
  tone: "dark" | "light";
};

export const services: Service[] = [
  {
    num: "01",
    slug: "all-in-one",
    title: "All-in-One Digital Marketing",
    shortTitle: "All-in-One",
    tagline: "One team, one roadmap, one P&L.",
    body: "We sit in the operator's seat. Strategy, content, paid media, web and analytics — orchestrated by a single account team toward the metric that matters to your business.",
    longBody:
      "Most agencies sell discrete services and hand you a folder of deliverables every month. We sell outcomes. Your retainer covers strategy, creative, media buying, web, and reporting — coordinated by one account director who carries the number you actually care about. We're built for founders who don't want to be the GM of their own marketing function.",
    deliverables: [
      "Quarterly growth strategy",
      "Channel mix & budget plan",
      "Weekly creative production",
      "Always-on ads management",
      "Monthly executive dashboard",
      "Quarterly business review",
    ],
    outcomes: [
      "Predictable pipeline",
      "Lower CAC, higher LTV",
      "One source of truth for marketing performance",
    ],
    process: [
      { n: "01", title: "90-day plan", body: "Strategy, calendar and channel budget for the quarter." },
      { n: "02", title: "Weekly cadence", body: "Production sprint, ads review and reporting refresh." },
      { n: "03", title: "Quarterly review", body: "Performance retrospective and next-cycle plan." },
    ],
    faq: [
      { q: "Is there a minimum engagement?", a: "Yes — 3 months. Real outcomes need at least one full quarterly cycle." },
      { q: "Do we keep our existing platforms?", a: "Usually yes. We work in your stack; we don't sell tooling." },
    ],
    tone: "dark",
  },
  {
    num: "02",
    slug: "social",
    title: "Social Media Management",
    shortTitle: "Social",
    tagline: "Content that earns attention, not just impressions.",
    body: "Instagram, TikTok and Facebook ecosystems built around your brand's point of view. Calendars planned in 30-day sprints, produced in-studio, optimized in flight.",
    longBody:
      "Social isn't a feed, it's a relationship engine. We build content systems that compound: pillars rooted in your point of view, formats that fit each platform's grammar, and a publishing rhythm your audience can rely on. Every asset is briefed, shot, edited and scheduled in-house — no off-shore agencies, no template carousels.",
    deliverables: [
      "Brand voice & visual system",
      "Monthly content calendar",
      "Reels, carousels, statics",
      "Community management",
      "Performance reporting",
      "Trend response sprints",
    ],
    outcomes: [
      "Follower growth that converts",
      "Higher save & share rates",
      "Consistent on-brand output",
    ],
    process: [
      { n: "01", title: "Voice & pillars", body: "We lock the brand voice and 3-5 content pillars in week one." },
      { n: "02", title: "Production sprint", body: "Weekly creative production cycle: brief → shoot → edit → schedule." },
      { n: "03", title: "Optimize", body: "Bi-weekly review of saves, reach and conversion to refine the calendar." },
    ],
    faq: [
      { q: "How many posts per month?", a: "Typically 12-20, mixed between reels, carousels and statics." },
      { q: "Do you handle community management?", a: "Yes — DMs, comments and proactive outreach are included." },
    ],
    tone: "light",
  },
  {
    num: "03",
    slug: "ads",
    title: "Ads Management",
    shortTitle: "Ads",
    tagline: "Performance from week one, optimized to scale.",
    body: "Meta, Google, TikTok, LinkedIn and YouTube — running on a single creative engine. We test fast, kill what doesn't work, and double the budget on what does.",
    longBody:
      "Paid media without creative volume is gambling. We pair every campaign with a creative engine that produces 20-40 variants per cycle, then let the platforms vote with your money. Every Friday we cut the bottom quartile and scale the winners. No mystery dashboards — you see what's running and why every week.",
    deliverables: [
      "Funnel & audience mapping",
      "Creative variants in bulk",
      "Pixel & conversion tracking",
      "Weekly bid & budget review",
      "Attribution reporting",
      "Landing-page optimization",
    ],
    outcomes: [
      "Scalable cost per result",
      "Higher ROAS over time",
      "Clear attribution down to creative",
    ],
    process: [
      { n: "01", title: "Funnel map", body: "Identify the funnel stages and the metric per stage." },
      { n: "02", title: "Creative engine", body: "Set up the production cadence that feeds the platforms." },
      { n: "03", title: "Scale", body: "Weekly bid review, weekly creative kill list, weekly scale up." },
    ],
    faq: [
      { q: "Minimum ad spend?", a: "We work from IDR 25M/month and up — below that the testing math doesn't work." },
      { q: "Do you do TikTok ads?", a: "Yes — and TikTok creative is built by the same team that runs your organic." },
    ],
    tone: "light",
  },
  {
    num: "04",
    slug: "web",
    title: "Web Development",
    shortTitle: "Web",
    tagline: "Conversion-first sites, engineered like product.",
    body: "Next.js, headless CMS, Tailwind systems and modern motion. Optional AI chat & automation integrations so the site sells while you sleep.",
    longBody:
      "Your website is the only marketing asset that works 24/7 with zero marginal cost. We build it like product engineers, not WordPress decorators: a design system you can extend, a stack that ships fast, motion that doesn't tank Lighthouse, and optional AI chat layers that turn the site into a sales-qualified lead generator.",
    deliverables: [
      "UX & wireframe sprint",
      "Design system & components",
      "Headless CMS integration",
      "AI chat / agent (optional)",
      "Speed & SEO hardening",
      "Analytics & event tracking",
    ],
    outcomes: [
      "Page Speed 90+",
      "Conversion lift",
      "Easy to update in-house",
    ],
    process: [
      { n: "01", title: "Discover & wireframe", body: "Audit current site, map user journeys, wireframe key pages." },
      { n: "02", title: "Design & build", body: "Design system → component library → page assembly." },
      { n: "03", title: "Ship & iterate", body: "Launch, instrument, then iterate against real traffic." },
    ],
    faq: [
      { q: "What stack do you use?", a: "Next.js + Tailwind + your choice of headless CMS (Sanity, Contentful, or custom)." },
      { q: "Do you handle ongoing hosting?", a: "We typically deploy to Vercel or your existing host. Maintenance retainers available." },
    ],
    tone: "dark",
  },
  {
    num: "05",
    slug: "branding",
    title: "Branding & Design",
    shortTitle: "Branding",
    tagline: "Identity systems for a digital-first world.",
    body: "Logo systems, type, color, motion principles and a brand book your team can actually use. Designed to extend cleanly into web, social and packaging.",
    longBody:
      "Most brand identities are made for printed business cards. We design them for the channels you actually live in: a 1080×1080 carousel, a 9:16 reel, a mobile landing page, a chat avatar. Type, color, motion and tone are codified into a usable system — not a 60-page PDF that nobody opens.",
    deliverables: [
      "Brand audit & positioning",
      "Logo & wordmark system",
      "Type, color, grid tokens",
      "Brand guidelines book",
      "Asset library handover",
      "Launch toolkit",
    ],
    outcomes: [
      "Cohesive cross-channel look",
      "Faster creative production",
      "Premium brand equity",
    ],
    process: [
      { n: "01", title: "Audit & strategy", body: "Audit current brand, define positioning and audience." },
      { n: "02", title: "Design system", body: "Logo, type, color, motion, and component principles." },
      { n: "03", title: "Roll-out", body: "Apply across web, social, print and internal docs." },
    ],
    faq: [
      { q: "Do you do logo-only projects?", a: "Yes, but we recommend bundling with a basic system — logos rarely survive solo." },
      { q: "How long does a full rebrand take?", a: "Typically 6-10 weeks for strategy, identity and asset library." },
    ],
    tone: "light",
  },
  {
    num: "06",
    slug: "photography",
    title: "Commercial Photography",
    shortTitle: "Photography",
    tagline: "Made in Bali by @djitugopictures.",
    body: "Product, lifestyle and campaign imagery shot in-studio or on location. Same team handles reels, behind-the-scenes and stills — one cohesive look.",
    longBody:
      "Stock photography is a tax on your brand equity. Our @djitugopictures team produces a library of imagery that's yours forever: product photography, lifestyle scenes, campaign hero shots and the BTS reels that travel further than the finished campaign. Shot in our Bali studio or on location across Indonesia.",
    deliverables: [
      "Pre-production & shot list",
      "Studio or location shoot",
      "Retouching & finishing",
      "Reels & motion edits",
      "Licensed asset library",
      "BTS content",
    ],
    outcomes: [
      "On-brand visual library",
      "Faster campaign launches",
      "Story-led, not stock-led",
    ],
    process: [
      { n: "01", title: "Pre-production", body: "Concept, shot list, talent, location and props." },
      { n: "02", title: "Shoot day", body: "Studio or location, with the full creative team on set." },
      { n: "03", title: "Post & deliver", body: "Retouching, editing, motion versions, library handover." },
    ],
    faq: [
      { q: "Do you have a studio?", a: "Yes — full-service studio in Denpasar, plus a roster of location partners across Bali." },
      { q: "Can we license existing imagery?", a: "Some, depending on the client release. Most shoots are custom." },
    ],
    tone: "light",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelated(currentSlug: string, count = 2) {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
