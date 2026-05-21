import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Djitugo collects, uses, and protects the personal data of visitors and clients.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    n: "01",
    title: "Who we are",
    body: (
      <>
        Djitugo (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an independent digital marketing studio based in Bali, Indonesia. This policy explains how we collect and use personal data when you visit djitugo.com, fill in our contact form, or work with us as a client.
      </>
    ),
  },
  {
    n: "02",
    title: "What we collect",
    body: (
      <>
        <ul className="space-y-3 mt-3">
          <li>
            <strong className="font-medium">Information you give us</strong> — when you submit the contact brief: name, company, email, phone, project type, budget, and the message you write.
          </li>
          <li>
            <strong className="font-medium">Information collected automatically</strong> — basic analytics (page views, referrer, country, device type) gathered through privacy-friendly tools to help us improve the site.
          </li>
          <li>
            <strong className="font-medium">Cookies</strong> — see Section 05.
          </li>
        </ul>
      </>
    ),
  },
  {
    n: "03",
    title: "How we use it",
    body: (
      <>
        We use personal data to respond to inquiries, deliver contracted work, send service-related communications, and improve the site. We do not sell or rent personal data to third parties.
      </>
    ),
  },
  {
    n: "04",
    title: "Where it lives",
    body: (
      <>
        Form submissions arrive in our team inbox. The site is hosted on Vercel and may transit through Vercel&apos;s edge network outside Indonesia. We engage only reputable processors and require equivalent data-protection standards.
      </>
    ),
  },
  {
    n: "05",
    title: "Cookies",
    body: (
      <>
        We use a small number of cookies. Essential cookies are required for the site to work and are always on. Analytics cookies are loaded only after consent — you can choose &ldquo;Essentials only&rdquo; in the cookie banner. We do not use third-party advertising trackers.
      </>
    ),
  },
  {
    n: "06",
    title: "Your rights",
    body: (
      <>
        You can request access, correction, or deletion of your personal data, or withdraw consent at any time. Write to{" "}
        <a href="mailto:hello@djitugo.com" className="underline-grow">
          hello@djitugo.com
        </a>
        . We respond within 30 days.
      </>
    ),
  },
  {
    n: "07",
    title: "Retention",
    body: (
      <>
        Contact-form submissions are retained for up to 24 months unless the inquiry leads to an engagement, in which case relevant data is retained for the duration of the contract plus 5 years for tax and audit reasons.
      </>
    ),
  },
  {
    n: "08",
    title: "Children",
    body: (
      <>
        The site is intended for business audiences. We do not knowingly collect personal data from children under the age of 13.
      </>
    ),
  },
  {
    n: "09",
    title: "Changes",
    body: (
      <>
        We may update this policy occasionally. The &ldquo;Effective&rdquo; date below reflects the most recent version. Material changes will be highlighted on this page.
      </>
    ),
  },
  {
    n: "10",
    title: "Contact",
    body: (
      <>
        Djitugo — privacy lead.{" "}
        <a href="mailto:hello@djitugo.com" className="underline-grow">
          hello@djitugo.com
        </a>
        . Bali, Indonesia.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="( Privacy policy )"
        title={
          <>
            How we handle <em className="not-italic italic font-light">your data.</em>
          </>
        }
        lede="Plain-language version of how Djitugo collects and uses personal information. If anything is unclear, write to us — we'll explain in human terms."
        meta={[
          { label: "Effective", value: "2026-05-20" },
          { label: "Last updated", value: "2026-05-20" },
          { label: "Jurisdiction", value: "Indonesia" },
          { label: "Contact", value: "hello@djitugo.com" },
        ]}
      />

      <section className="bg-[color:var(--color-paper)]">
        <div className="container-x py-20 md:py-28 grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-3 md:sticky md:top-28 self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] mb-5">
              Contents
            </p>
            <ol className="space-y-2 text-[13px] font-mono uppercase tracking-[0.22em]">
              {sections.map((s) => (
                <li key={s.n}>
                  <a href={`#s${s.n}`} className="underline-grow">
                    <span className="opacity-50 mr-2">{s.n}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="col-span-12 md:col-span-8 md:col-start-5 space-y-14">
            {sections.map((s) => (
              <section key={s.n} id={`s${s.n}`} className="scroll-mt-32">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                  {s.n}
                </div>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-3">
                  {s.title}
                </h2>
                <div className="mt-5 text-[15px] leading-relaxed text-[color:var(--color-gray-4)] max-w-2xl">
                  {s.body}
                </div>
              </section>
            ))}

            <div className="border-t hairline pt-10 flex flex-wrap gap-6 items-center">
              <Link href="/terms" className="text-sm underline-grow">
                Read our terms of use →
              </Link>
              <Link href="/contact" className="text-sm underline-grow">
                Or get in touch →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
