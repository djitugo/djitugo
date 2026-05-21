import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import TickerCTA from "@/components/TickerCTA";
import { getRelatedWorks, getWork, works } from "@/lib/works";
import { BRAND_NAME, absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return { title: "Work not found" };
  const title = `${w.client} — case study`;
  const description = w.result;
  const url = absoluteUrl(`/works/${w.slug}`);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${w.client} — ${BRAND_NAME} case study`,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${w.client} — ${BRAND_NAME} case study`,
      description,
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();

  const related = getRelatedWorks(w.slug, 3);
  const url = absoluteUrl(`/works/${w.slug}`);

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case`,
    name: `${w.client} — case study`,
    headline: w.result,
    about: w.brief,
    url,
    inLanguage: "en-US",
    datePublished: `${w.year}-01-01`,
    creator: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
    keywords: [w.industry, ...w.services].join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Works",
        item: absoluteUrl("/works"),
      },
      { "@type": "ListItem", position: 3, name: w.client, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow={`( Case · ${w.industry} · ${w.year} )`}
        title={
          <>
            {w.client.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="not-italic italic font-light">
              {w.client.split(" ").slice(-1)[0]}.
            </em>
          </>
        }
        lede={w.result}
        meta={[
          { label: "Industry", value: w.industry },
          { label: "Year", value: w.year },
          { label: "Services", value: w.services.join(" · ") },
          { label: "Status", value: "Shipped" },
        ]}
      />

      {/* Hero image */}
      <section className="border-b hairline bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain overflow-hidden">
        <div className="container-x py-16 md:py-24">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative border border-[color:var(--color-paper)]/10">
            <CaseArt hue={w.hue} />
          </div>
        </div>
      </section>

      {/* Brief + outcomes side-by-side */}
      <section className="bg-[color:var(--color-paper)]">
        <div className="container-x py-24 md:py-32 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              ( The brief )
            </p>
            <h2 className="text-headline font-display mt-6 max-w-[16ch]">
              {w.brief.split(".")[0]}.
            </h2>
            <p className="mt-8 text-[16px] leading-relaxed text-[color:var(--color-gray-4)] max-w-2xl">
              {w.brief}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] mb-5">
              Outcomes
            </p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
              {w.outcomes.map((o) => (
                <div key={o.metric} className="border-t hairline pt-3">
                  <dd className="font-display text-3xl md:text-4xl tracking-tight">
                    {o.value}
                  </dd>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                    {o.metric}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain border-y hairline">
        <div className="container-x py-24 md:py-32 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
              ( Challenge )
            </p>
            <h2 className="text-headline font-display mt-6">
              What was <em className="not-italic italic font-light">in the way.</em>
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed opacity-80 max-w-md">
              {w.challenge}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
              ( Approach )
            </p>
            <h2 className="text-headline font-display mt-6">
              How we <em className="not-italic italic font-light">shipped it.</em>
            </h2>
            <ol className="mt-8 divide-y hairline-light">
              {w.approach.map((a, i) => (
                <li key={a} className="grid grid-cols-12 gap-4 py-5">
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.28em] opacity-60 pt-1">
                    0{i + 1}
                  </span>
                  <span className="col-span-10 text-[14.5px] leading-relaxed opacity-90">
                    {a}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services used + quote */}
      <section className="bg-[color:var(--color-paper-pure)]">
        <div className="container-x py-24 md:py-32 grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              ( Services involved )
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {w.services.map((s) => (
                <li
                  key={s}
                  className="text-[12px] font-mono uppercase tracking-[0.22em] px-4 py-2 rounded-full border hairline"
                >
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-10 inline-block text-sm underline-grow"
            >
              See all six services →
            </Link>
          </div>

          {w.testimonial && (
            <figure className="col-span-12 md:col-span-7 md:col-start-6">
              <blockquote className="font-display text-3xl md:text-4xl leading-[1.15] tracking-tight">
                <span aria-hidden className="opacity-30 mr-1">
                  &ldquo;
                </span>
                {w.testimonial.quote}
                <span aria-hidden className="opacity-30 ml-1">
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)]">
                {w.testimonial.person}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Related works */}
      <section className="bg-[color:var(--color-paper)] border-t hairline">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                ( More cases )
              </p>
              <h2 className="text-headline font-display mt-4">
                Other <em className="not-italic italic font-light">work.</em>
              </h2>
            </div>
            <Link href="/works" className="text-sm underline-grow">
              See the full archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/works/${r.slug}`}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain block"
              >
                <CaseArt hue={r.hue} />
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em]">
                    <span className="opacity-80">{r.industry}</span>
                    <span className="opacity-60">{r.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-[1.1] pb-[0.1em]">
                      {r.client}
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute top-6 right-6 z-10 h-9 w-9 grid place-items-center rounded-full bg-[color:var(--color-paper)]/15 group-hover:bg-[color:var(--color-paper)] group-hover:text-[color:var(--color-ink)] transition-all"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TickerCTA />
    </>
  );
}

function CaseArt({ hue }: { hue: number }) {
  const rings = 14 + (hue % 10);
  const cx = 50 + (hue % 6) * 4;
  const cy = 50 + ((hue * 3) % 5) * 5;
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`cg-${hue}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#cg-${hue})`} />
      {Array.from({ length: rings }).map((_, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={5 + i * 4}
          fill="none"
          stroke="rgba(246,245,241,0.08)"
          strokeWidth="0.2"
        />
      ))}
    </svg>
  );
}
