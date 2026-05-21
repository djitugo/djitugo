import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {
  BRAND_CONTACT,
  BRAND_DESCRIPTION,
  BRAND_FOUNDED,
  BRAND_KEYWORDS,
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_URL,
  absoluteUrl,
} from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_URL),
  title: {
    default: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    template: `%s — ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  keywords: BRAND_KEYWORDS,
  applicationName: BRAND_NAME,
  authors: [{ name: BRAND_NAME, url: BRAND_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "Digital Marketing Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: BRAND_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
    creator: "@djitugo",
    site: "@djitugo",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: BRAND_NAME,
  alternateName: "Djitugo Studio",
  url: BRAND_URL,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/logo.png"),
  description: BRAND_DESCRIPTION,
  email: BRAND_CONTACT.email,
  telephone: BRAND_CONTACT.phone,
  foundingDate: BRAND_FOUNDED,
  founders: [
    { "@type": "Person", name: "Gustu Adi" },
    { "@type": "Person", name: "Komang Joni" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND_CONTACT.street,
    addressLocality: BRAND_CONTACT.area,
    addressRegion: BRAND_CONTACT.region,
    postalCode: BRAND_CONTACT.postal,
    addressCountry: "ID",
  },
  sameAs: [
    BRAND_CONTACT.instagram,
    BRAND_CONTACT.facebook,
    BRAND_CONTACT.linkedin,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: BRAND_URL,
  name: BRAND_NAME,
  description: BRAND_DESCRIPTION,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
