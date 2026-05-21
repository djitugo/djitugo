import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected Djitugo case studies — hospitality, healthcare, D2C, education and mobility brands shipped from Bali.",
  alternates: { canonical: "/works" },
  openGraph: {
    title: "Works — Djitugo",
    description:
      "Selected case studies from a Bali studio. Hospitality, healthcare, D2C, education, mobility.",
    url: "/works",
    type: "website",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
