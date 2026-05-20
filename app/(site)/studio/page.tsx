import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TickerCTA from "@/components/TickerCTA";

export const metadata: Metadata = {
  title: "Studio — Djitugo",
  description:
    "An independent digital studio built in Bali since 2018. Strategy, design, technology — one team, one outcome.",
};

const founders = [
  {
    name: "Gustu Adi",
    role: "Co-founder · Strategy",
    bio: "Leads strategy and account growth. Operator's mind, marketer's eye. Believes the best campaigns start with a clear P&L.",
  },
  {
    name: "Komang Joni",
    role: "Co-founder · Creative",
    bio: "Leads creative and brand systems. Self-taught designer, fast-talker. Obsessed with finding the one detail that makes a brand feel inevitable.",
  },
];

const team = [
  { name: "Production team", role: "Photographers, retouchers, editors", count: "8" },
  { name: "Design team", role: "Brand, UI, motion", count: "6" },
  { name: "Engineering", role: "Web, AI integrations, automation", count: "4" },
  { name: "Strategy & ads", role: "Strategists, paid media specialists", count: "5" },
  { name: "Account team", role: "Project managers, client leads", count: "4" },
  { name: "Operations", role: "Studio, HR, finance", count: "3" },
];

const values = [
  {
    n: "01",
    title: "Outcomes over output",
    body: "We don't bill by the asset. We bill by the cycle, the result, the system we leave behind.",
  },
  {
    n: "02",
    title: "Small enough to care",
    body: "One account lead from day one. No agency-of-record handoff. You text, we answer.",
  },
  {
    n: "03",
    title: "Big enough to ship",
    body: "Twelve specialists in-house. We don't subcontract the work that defines your brand.",
  },
  {
    n: "04",
    title: "Made for the channels that matter",
    body: "Reels, search, paid social, email, live chat. We follow the audience, not the trend.",
  },
];

const milestones = [
  { year: "2018", text: "Djitugo founded in Denpasar by Gustu Adi and Komang Joni." },
  { year: "2020", text: "First long-term retainer with a hospitality group during the rebound." },
  { year: "2022", text: "In-house photography arm launched as @djitugopictures." },
  { year: "2024", text: "Crossed 500 clients served. Opened a second studio space." },
  { year: "2026", text: "Brand refresh and new identity system: black and white." },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="( The studio )"
        title={
          <>
            An independent studio,<br />
            <em className="not-italic italic font-light">built in Bali.</em>
          </>
        }
        lede="Djitugo has been quietly building digital businesses for Indonesian and global brands since 2018 — from UMKM founders to multinational hotel groups. One studio, one team, one outcome."
        meta={[
          { label: "Founded", value: "2018" },
          { label: "Team", value: "30+" },
          { label: "Clients served", value: "700+" },
          { label: "Rating", value: "4.8 / 5" },
        ]}
      />

      {/* Mission */}
      <section className="bg-[color:var(--color-paper-pure)] border-b hairline">
        <div className="container-x py-20 md:py-32 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              ( Mission )
            </p>
            <h2 className="text-headline font-display mt-6 max-w-[14ch]">
              Empower the next wave of Indonesian brands.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[16px] leading-relaxed text-[color:var(--color-gray-4)]">
              Indonesia&apos;s MSMEs hold the world&apos;s 4th-largest consumer base in their hands. Most of them ship great products with marketing built on a phone, in a hurry, with no system behind it.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-gray-4)]">
              Our job is to be the marketing department they couldn&apos;t hire alone — strategy, design, ads, content, technology, all under one roof. The same studio that runs growth for a Denpasar dental clinic also runs campaigns for multi-property resort groups. Same craft, same care.
            </p>
            <p className="mt-6 italic font-display text-2xl md:text-3xl text-[color:var(--color-ink)] max-w-md leading-[1.15]">
              We don&apos;t chase trends. We build brands that earn attention on the channels that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain">
        <div className="container-x py-24 md:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
            ( Founders )
          </p>
          <h2 className="text-headline font-display mt-6 max-w-[14ch]">
            Two operators. <em className="not-italic italic font-light">One studio.</em>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {founders.map((f) => (
              <article
                key={f.name}
                className="border hairline-light rounded-2xl p-7 md:p-10 flex flex-col gap-6 relative overflow-hidden"
              >
                <div className="aspect-[5/4] -mx-7 -mt-7 md:-mx-10 md:-mt-10 mb-2 bg-[color:var(--color-ink-2)] grid place-items-center relative overflow-hidden">
                  <svg
                    viewBox="0 0 400 320"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden
                  >
                    <rect width="400" height="320" fill="#161616" />
                    {Array.from({ length: 24 }).map((_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 14}
                        x2="400"
                        y2={i * 14 + 4}
                        stroke="rgba(246,245,241,0.05)"
                      />
                    ))}
                    <text
                      x="50%"
                      y="55%"
                      textAnchor="middle"
                      fill="rgba(246,245,241,0.5)"
                      fontFamily="serif"
                      fontSize="62"
                      fontStyle="italic"
                    >
                      {f.name.split(" ")[0].toLowerCase()}.
                    </text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                    {f.name}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60 mt-2">
                    {f.role}
                  </p>
                </div>
                <p className="text-[14.5px] leading-relaxed opacity-80">{f.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[color:var(--color-paper)] border-y hairline">
        <div className="container-x py-24 md:py-32 grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              ( Team )
            </p>
            <h2 className="text-headline font-display mt-6 max-w-[10ch]">
              Thirty heads. <em className="not-italic italic font-light">One brief.</em>
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--color-gray-4)] max-w-md">
              Production, design, engineering, strategy, ads and operations — all under one roof in Denpasar. We don&apos;t subcontract the work that matters.
            </p>
          </div>
          <ul className="col-span-12 md:col-span-7 md:col-start-6 divide-y hairline">
            {team.map((t) => (
              <li key={t.name} className="grid grid-cols-12 gap-4 py-6">
                <div className="col-span-2 font-display text-3xl md:text-4xl tracking-tight">
                  {t.count}
                </div>
                <div className="col-span-7">
                  <div className="font-medium">{t.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                    {t.role}
                  </div>
                </div>
                <div className="col-span-3 text-right font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] pt-2">
                  in-house
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[color:var(--color-paper-pure)]">
        <div className="container-x py-24 md:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
            ( Values )
          </p>
          <h2 className="text-headline font-display mt-6 max-w-[16ch]">
            How we think when no one&apos;s looking.
          </h2>
          <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {values.map((v) => (
              <li
                key={v.n}
                className="border hairline rounded-2xl p-7 md:p-10 group hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors duration-500"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] group-hover:text-[color:var(--color-paper)]/60">
                  {v.n} / 04
                </span>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight mt-4">
                  {v.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[color:var(--color-gray-4)] group-hover:text-[color:var(--color-paper)]/75 max-w-md">
                  {v.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[color:var(--color-paper)] border-t hairline">
        <div className="container-x py-24 md:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
            ( Timeline )
          </p>
          <h2 className="text-headline font-display mt-6">
            <em className="not-italic italic font-light">Eight years</em> in motion.
          </h2>
          <ol className="mt-16 divide-y hairline max-w-3xl">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-12 gap-4 py-6">
                <div className="col-span-3 md:col-span-2 font-display text-2xl md:text-3xl tracking-tight">
                  {m.year}
                </div>
                <p className="col-span-9 md:col-span-10 text-[14.5px] leading-relaxed text-[color:var(--color-gray-4)] pt-2">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-full pl-6 pr-2 py-2 text-sm tracking-wide"
            >
              Work with the studio
              <span className="h-10 w-10 grid place-items-center rounded-full bg-[color:var(--color-paper)] text-[color:var(--color-ink)] transition-transform group-hover:rotate-45">
                →
              </span>
            </Link>
            <Link href="/works" className="text-sm underline-grow self-center">
              See what we&apos;ve shipped →
            </Link>
          </div>
        </div>
      </section>

      <TickerCTA />
    </>
  );
}
