/**
 * Central SEO configuration.
 * Edit BRAND_URL once and the whole site picks up the right canonical / OG / sitemap host.
 */

export const BRAND_URL = "https://www.djitugo.com";
export const BRAND_NAME = "Djitugo";
export const BRAND_TAGLINE = "Where Creativity Meets Technology";
export const BRAND_DESCRIPTION =
  "Djitugo is a Bali-based digital marketing studio. Strategy, social media, ads, web, branding and photography — engineered to compound. Trusted by 700+ brands across Indonesia.";

export const BRAND_KEYWORDS = [
  "digital marketing bali",
  "djitugo",
  "bali agency",
  "social media management bali",
  "ads management indonesia",
  "web development bali",
  "branding bali",
  "commercial photography bali",
  "djitugo pictures",
  "marketing agency denpasar",
];

export const BRAND_CONTACT = {
  email: "hello@djitugo.com",
  phone: "+62 813-3732-9381",
  whatsapp: "https://wa.me/6281337329381",
  instagram: "https://instagram.com/djitugo",
  facebook: "https://facebook.com/djitugo.official",
  linkedin: "https://linkedin.com/company/djitugo",
  street: "Jln Bukit Sari Utara No.88X",
  area: "Padangsambian Kaja, Denpasar Barat",
  region: "Bali",
  postal: "80117",
  country: "Indonesia",
};

export const BRAND_FOUNDED = "2018";

export function absoluteUrl(path: string = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${BRAND_URL}${path === "/" ? "" : path}`;
}
