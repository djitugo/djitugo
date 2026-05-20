import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use — Djitugo",
  description:
    "Terms governing your use of the Djitugo website and any services delivered by Djitugo.",
};

const sections = [
  {
    n: "01",
    title: "Acceptance",
    body: (
      <>
        By accessing djitugo.com you agree to these Terms of Use. If you do not agree, please do not use the site. These terms apply to all visitors and to anyone who submits an inquiry through the contact form.
      </>
    ),
  },
  {
    n: "02",
    title: "Use of the site",
    body: (
      <>
        You may browse the site for personal or business purposes. You may not (a) attempt to interfere with the site&apos;s security or availability, (b) scrape content systematically for republishing, (c) use the site for unlawful activity, or (d) attempt to reverse-engineer or harvest source code beyond what your browser already discloses.
      </>
    ),
  },
  {
    n: "03",
    title: "Intellectual property",
    body: (
      <>
        All content on this site — words, layouts, graphics, code, the Djitugo word-mark and the &ldquo;D&rdquo; monogram — is owned by Djitugo or licensed to us. You may share short quotes with proper attribution and a link back. Reproduction beyond fair use requires written permission. Client work shown in our portfolio is published with the client&apos;s consent and remains their intellectual property.
      </>
    ),
  },
  {
    n: "04",
    title: "Services & engagements",
    body: (
      <>
        Marketing materials on this site are not a binding offer. Engagements are governed by a separate written agreement (Statement of Work or Master Services Agreement) signed by both parties. In the event of a conflict, the signed agreement prevails over these terms.
      </>
    ),
  },
  {
    n: "05",
    title: "Third-party content",
    body: (
      <>
        The site may link to external resources, embed maps, or reference partner platforms. We do not control third-party content and are not responsible for its accuracy, availability, or terms.
      </>
    ),
  },
  {
    n: "06",
    title: "Disclaimers",
    body: (
      <>
        The site is provided &ldquo;as is.&rdquo; While we work hard to keep it accurate and available, we make no guarantees about uptime, completeness, or fitness for a particular purpose. Performance metrics referenced in case studies are specific to those engagements and are not promises of future results.
      </>
    ),
  },
  {
    n: "07",
    title: "Limitation of liability",
    body: (
      <>
        To the maximum extent permitted by law, Djitugo is not liable for indirect, incidental, special, or consequential damages arising from your use of the site. Nothing in these terms limits liability for fraud or for any liability that cannot be excluded under Indonesian law.
      </>
    ),
  },
  {
    n: "08",
    title: "Privacy",
    body: (
      <>
        Use of the site is also governed by our{" "}
        <Link href="/privacy" className="underline-grow">
          Privacy Policy
        </Link>
        . By using the site you consent to the data practices described there.
      </>
    ),
  },
  {
    n: "09",
    title: "Changes",
    body: (
      <>
        We may revise these terms periodically. Continued use after the &ldquo;Effective&rdquo; date below constitutes acceptance of the revised terms.
      </>
    ),
  },
  {
    n: "10",
    title: "Governing law",
    body: (
      <>
        These terms are governed by the laws of the Republic of Indonesia. Any dispute will be brought before the courts of Denpasar, Bali, unless we mutually agree to arbitration.
      </>
    ),
  },
  {
    n: "11",
    title: "Contact",
    body: (
      <>
        Questions about these terms?{" "}
        <a href="mailto:hello@djitugo.com" className="underline-grow">
          hello@djitugo.com
        </a>
        .
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="( Terms of use )"
        title={
          <>
            The rules of <em className="not-italic italic font-light">the road.</em>
          </>
        }
        lede="The fine print that governs your use of djitugo.com. Plain English. If anything looks unfair, tell us — we'd rather fix it than enforce it."
        meta={[
          { label: "Effective", value: "2026-05-20" },
          { label: "Last updated", value: "2026-05-20" },
          { label: "Governed by", value: "Indonesian law" },
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
              <Link href="/privacy" className="text-sm underline-grow">
                Read our privacy policy →
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
