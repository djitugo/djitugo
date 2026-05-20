export type Work = {
  slug: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  result: string;
  feature?: boolean;
  size: "tall" | "wide" | "square";
  hue: number;
  brief: string;
  challenge: string;
  approach: string[];
  outcomes: { metric: string; value: string }[];
  testimonial?: { quote: string; person: string };
};

export const works: Work[] = [
  {
    slug: "mesare-resort",
    client: "The Mesare Resort",
    industry: "Hospitality",
    year: "2025",
    services: ["Web", "Social", "SEO"],
    result: "Bookings doubled in 2 quarters after a brand refresh + always-on social.",
    feature: true,
    size: "wide",
    hue: 12,
    brief:
      "A boutique resort in central Bali looking to break free from OTA dependence and double direct bookings. The Mesare team had a beautiful product but no system to consistently showcase it.",
    challenge:
      "70% of revenue came from third-party OTAs at high commission rates. The existing website was a static brochure with no booking funnel, and social channels were posting sporadically with no creative direction.",
    approach: [
      "Refreshed the brand voice with a focus on stillness, locality and ritual.",
      "Rebuilt the website as a conversion-first booking funnel with direct rates.",
      "Launched always-on social: 12 reels + 8 stills per month, shot in-house.",
      "Layered SEO targeting niche searches: 'private villa Ubud', 'wellness retreat Bali'.",
    ],
    outcomes: [
      { metric: "Direct bookings", value: "2.0×" },
      { metric: "OTA dependence", value: "−38%" },
      { metric: "Organic traffic", value: "4.5×" },
      { metric: "Engagement rate", value: "6.2%" },
    ],
    testimonial: {
      quote:
        "Djitugo built our brand identity and ran our social from zero. Bookings doubled within two quarters.",
      person: "Operations Lead, The Mesare Resort",
    },
  },
  {
    slug: "jobstreet-express",
    client: "JobStreet Express",
    industry: "Recruitment",
    year: "2024",
    services: ["Campaign", "Ads"],
    result: "Multi-channel launch campaign across Meta + Google with 4.2× ROAS.",
    size: "tall",
    hue: 0,
    brief:
      "JobStreet's new fast-hiring product launch needed creative volume and paid media muscle to break through in the Indonesian recruitment market.",
    challenge:
      "A new product in a category JobStreet wasn't known for. Internal teams could not produce the creative volume needed for an aggressive media test.",
    approach: [
      "Sprint-built 30 creative variants across Meta, TikTok and Google.",
      "Ran a 4-week structured test to find the winning hook and visual.",
      "Scaled the top 3 creative families with weekly creative refreshes.",
      "Layered retargeting and lookalike audiences to compound results.",
    ],
    outcomes: [
      { metric: "Blended ROAS", value: "4.2×" },
      { metric: "Cost per app install", value: "−54%" },
      { metric: "Creative variants", value: "30+" },
      { metric: "Campaign duration", value: "8 wks" },
    ],
    testimonial: {
      quote:
        "Their team thinks like operators, not just an agency. Strategy first, beautiful execution second.",
      person: "Marketing Director, JobStreet Express",
    },
  },
  {
    slug: "chandra-bali-villas",
    client: "Chandra Bali Villas",
    industry: "Luxury Villas",
    year: "2025",
    services: ["Branding", "Photography"],
    result: "Identity system + photo library that scaled to OTAs and direct booking.",
    size: "square",
    hue: 30,
    brief:
      "A multi-property luxury villa group rebranding for the next decade. Existing assets were inconsistent across properties — some shot 5+ years ago, none on-brand.",
    challenge:
      "Six properties with overlapping but distinct positioning. The challenge was a brand system flexible enough to feel custom per villa, cohesive enough to feel like one group.",
    approach: [
      "Crafted a master brand with property sub-marks that share type and motion.",
      "Produced a 200+ asset photo library across all six villas in 10 shoot days.",
      "Built a brand guidelines book the in-house team uses for OTA listings.",
      "Designed the launch toolkit — signage, collateral, social templates.",
    ],
    outcomes: [
      { metric: "Photo assets", value: "200+" },
      { metric: "Direct rate increase", value: "+22%" },
      { metric: "OTA listing CTR", value: "+38%" },
      { metric: "Brand consistency", value: "100%" },
    ],
  },
  {
    slug: "salty-skin",
    client: "Salty Skin",
    industry: "Skincare D2C",
    year: "2024",
    services: ["Social", "Reels"],
    result: "Reels engine producing 12 assets/month, 5× higher save rate.",
    size: "square",
    hue: 6,
    brief:
      "Indonesia-born marine skincare brand needing a reels machine that could keep up with their product launch cadence.",
    challenge:
      "Founder-led content was authentic but inconsistent. The brand needed a production system that maintained the founder's voice while scaling output 4×.",
    approach: [
      "Built a content framework: 3 pillars × 4 formats × monthly themes.",
      "Set up an in-studio shoot day twice a month for batch production.",
      "Trained the founder for camera-facing presence in 2 days of coaching.",
      "Implemented a Notion-based approval flow so nothing ships unreviewed.",
    ],
    outcomes: [
      { metric: "Reels per month", value: "12" },
      { metric: "Save rate", value: "5×" },
      { metric: "Follower growth", value: "+78%" },
      { metric: "DM conversions", value: "+140%" },
    ],
    testimonial: {
      quote:
        "From photography to ads, we work with one team that owns the outcome. Rare to find in Bali.",
      person: "Founder, Salty Skin",
    },
  },
  {
    slug: "bali-family-dental",
    client: "Bali Family Dental",
    industry: "Healthcare",
    year: "2024",
    services: ["Web", "Ads"],
    result: "New site + lead funnel cut cost per appointment by 38%.",
    size: "wide",
    hue: 20,
    brief:
      "A family dental clinic targeting both expat and local audiences. Existing site was hard to book on; ads were running but with no clear funnel.",
    challenge:
      "Mixed audience (English-speaking expats + Indonesian families) with very different intent signals. The previous funnel converted at 1.1%.",
    approach: [
      "Designed dual-language site with audience-tailored landing pages.",
      "Implemented WhatsApp-first booking with a fallback web form.",
      "Restructured ad campaigns to separate expat vs local creative streams.",
      "Added a chatbot to qualify leads outside business hours.",
    ],
    outcomes: [
      { metric: "Cost per appointment", value: "−38%" },
      { metric: "Conversion rate", value: "3.4×" },
      { metric: "Off-hours bookings", value: "+62%" },
      { metric: "Bookings / month", value: "200+" },
    ],
  },
  {
    slug: "love-scooter-bali",
    client: "Love Scooter Bali",
    industry: "Mobility",
    year: "2023",
    services: ["Brand", "Web", "Ads"],
    result: "Full rebrand and booking-first site, ranked top-3 for category search.",
    size: "tall",
    hue: 14,
    brief:
      "Scooter rental operator competing in Bali's crowded mobility market. Founder needed a brand that signaled trust and a site that ranked.",
    challenge:
      "A category dominated by generic, sketchy-looking sites. To win, the brand had to feel as polished as global rental platforms while keeping the local edge.",
    approach: [
      "Rebranded with a confident logotype and travel-tag visual system.",
      "Built a booking-first site with same-day rental funnel.",
      "Implemented technical SEO targeting Bali category search terms.",
      "Launched paid retargeting against travel intent audiences.",
    ],
    outcomes: [
      { metric: "Organic ranking", value: "Top 3" },
      { metric: "Direct bookings", value: "+180%" },
      { metric: "Avg booking value", value: "+22%" },
      { metric: "Repeat-rental rate", value: "+45%" },
    ],
  },
  {
    slug: "i-am-fit-bali",
    client: "I Am Fit Bali",
    industry: "Fitness",
    year: "2024",
    services: ["Branding", "Social"],
    result: "Studio identity + community-first social grew membership 2.7×.",
    size: "square",
    hue: 22,
    brief:
      "A boutique fitness studio launching a second location and needing a brand that scaled with new programming.",
    challenge:
      "First location relied on word-of-mouth and founder presence. Second location needed a system that could attract members without the founder running social personally.",
    approach: [
      "Built an identity around community ritual — not just workouts.",
      "Designed a content engine around members' transformations and rituals.",
      "Launched a launch-month campaign with a referral mechanic.",
      "Created branded merch that doubled as marketing.",
    ],
    outcomes: [
      { metric: "Membership growth", value: "2.7×" },
      { metric: "Referral signups", value: "+220%" },
      { metric: "Avg class fill rate", value: "92%" },
      { metric: "Member retention", value: "+34%" },
    ],
  },
  {
    slug: "bb-resort-nusa-penida",
    client: "BB Resort Nusa Penida",
    industry: "Hospitality",
    year: "2023",
    services: ["Web", "Photography"],
    result: "Site & gallery showcasing the island — direct bookings up 60%.",
    size: "wide",
    hue: 8,
    brief:
      "A waterfront resort on Nusa Penida wanting to escape OTA pricing pressure with a site that could justify direct booking premiums.",
    challenge:
      "Nusa Penida is hard to reach and harder to communicate visually. The site had to do the selling that the location couldn't show in person.",
    approach: [
      "Shot a 150-asset library including drone, room, restaurant and beach.",
      "Built a slow-loading-by-design site that treats imagery as the product.",
      "Designed a booking flow that incentivized 3+ night stays.",
      "Integrated direct-booking-only perks (private boat transfer, sunset session).",
    ],
    outcomes: [
      { metric: "Direct bookings", value: "+60%" },
      { metric: "Avg stay length", value: "+1.8 nights" },
      { metric: "Room rate", value: "+18%" },
      { metric: "Time on site", value: "3:48" },
    ],
  },
  {
    slug: "ninobu",
    client: "Ninobu",
    industry: "F&B",
    year: "2024",
    services: ["Brand", "Social"],
    result: "Brand world + content engine for a new dining concept.",
    size: "square",
    hue: 16,
    brief:
      "Pre-opening F&B concept that needed a brand world and pre-launch social momentum before service began.",
    challenge:
      "No physical product to show, three months pre-launch. The brand had to land culturally before the doors opened.",
    approach: [
      "Defined the brand world before the menu — a fictional travelogue concept.",
      "Pre-launched the Instagram 8 weeks before opening with daily journal posts.",
      "Designed a wordmark and packaging system flexible enough for a future menu evolution.",
      "Built a launch night campaign with a curated guest list mechanic.",
    ],
    outcomes: [
      { metric: "Pre-opening followers", value: "12K" },
      { metric: "Opening week bookings", value: "100% full" },
      { metric: "Press features", value: "8" },
      { metric: "Avg ticket size", value: "+22% vs target" },
    ],
  },
  {
    slug: "ruang-bahasa",
    client: "Ruang Bahasa",
    industry: "Education",
    year: "2024",
    services: ["Web", "Social"],
    result: "Course-led site + Reels strategy that scaled enrollments 3×.",
    size: "tall",
    hue: 4,
    brief:
      "An Indonesian language school for expats needing a digital presence that matched the warmth and rigor of their in-person teaching.",
    challenge:
      "Word-of-mouth driven growth was capped. Online enrollment was less than 10% of total — a digital funnel had to be built from scratch.",
    approach: [
      "Designed a course-led website with clear pricing, levels and CTAs.",
      "Built a Reels content engine: 8 grammar tips + 4 student stories per month.",
      "Implemented a Stripe-based enrollment flow with free trial class hook.",
      "Set up a referral mechanic for current students.",
    ],
    outcomes: [
      { metric: "Online enrollments", value: "3×" },
      { metric: "Free-trial conversion", value: "42%" },
      { metric: "Avg course revenue", value: "+28%" },
      { metric: "Reels saves", value: "+580%" },
    ],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function getRelatedWorks(currentSlug: string, count = 3) {
  return works.filter((w) => w.slug !== currentSlug).slice(0, count);
}

export function workSizeSpan(size: Work["size"]): string {
  const map: Record<Work["size"], string> = {
    tall: "md:col-span-4 md:row-span-2 aspect-[3/4]",
    wide: "md:col-span-8 aspect-[16/9]",
    square: "md:col-span-4 aspect-square",
  };
  return map[size];
}
