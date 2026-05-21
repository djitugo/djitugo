import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import TickerCTA from "@/components/TickerCTA";
import { getRelated, getService, services } from "@/lib/services";
import { BRAND_NAME, absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service not found" };
  const title = s.title;
  const description = s.body;
  const url = absoluteUrl(`/services/${s.slug}`);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${BRAND_NAME}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${BRAND_NAME}`,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = getRelated(s.slug, 2);
  const url = absoluteUrl(`/services/${s.slug}`);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.title,
    serviceType: s.title,
    description: s.longBody,
    url,
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "Country", name: "Indonesia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.title} deliverables`,
      itemListElement: s.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d },
      })),
    },
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
        name: "Services",
        item: absoluteUrl("/services"),
      },
      { "@type": "ListItem", position: 3, name: s.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow={`( Service ${s.num} / 06 )`}
        title={
          <>
            {s.title.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="not-italic italic font-light">
              {s.title.split(" ").slice(-1)[0]}.
            </em>
          </>
        }
        lede={s.longBody}
        meta={[
          { label: "Engagement", value: "Retainer" },
          { label: "Min term", value: "3 months" },
          { label: "Deliverables", value: `${s.deliverables.length}+` },
          { label: "Discovery", value: "30-min call" },
        ]}
      />

      {/* Breadcrumb */}
      <section className="border-b hairline bg-[color:var(--color-paper)]">
        <div className="container-x py-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
          <div className="flex items-center gap-3">
            <Link href="/services" className="underline-grow">
              All services
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-[color:var(--color-ink)]">{s.shortTitle}</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {services.map((sv) => (
              <Link
                key={sv.slug}
                href={`/services/${sv.slug}`}
                className={`px-2 py-1 rounded-full ${
                  sv.slug === s.slug
                    ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                    : "hover:bg-[color:var(--color-ink)]/5"
                }`}
              >
                {sv.num}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + outcomes */}
      <section
        className={`py-24 md:py-32 relative overflow-hidden ${
          s.tone === "dark"
            ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain"
            : "bg-[color:var(--color-paper-pure)]"
        }`}
      >
        <div className="container-x relative z-10 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
              ( What we deliver )
            </p>
            <h2 className="text-headline font-display mt-6">
              {s.tagline.split(",")[0]}
              {s.tagline.includes(",") && (
                <em className="not-italic italic font-light">
                  ,{s.tagline.split(",").slice(1).join(",")}
                </em>
              )}
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60 mb-5">
                Deliverables
              </p>
              <ul className="space-y-3 text-[14.5px]">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="opacity-40">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60 mb-5">
                Outcomes
              </p>
              <ul className="space-y-3 text-[14.5px]">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="opacity-40">+</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className={`pointer-events-none absolute -bottom-[5vw] left-0 right-0 font-display text-[clamp(7rem,22vw,20rem)] leading-[0.82] text-center tracking-[-0.06em] select-none ${
            s.tone === "dark"
              ? "text-[color:var(--color-paper)]/[0.05]"
              : "text-[color:var(--color-ink)]/[0.04]"
          }`}
        >
          {s.num}
        </div>
      </section>

      {/* Process */}
      <section className="border-y hairline bg-[color:var(--color-paper)]">
        <div className="container-x py-24 md:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
            ( How we run this )
          </p>
          <h2 className="text-headline font-display mt-6">
            A repeatable <em className="not-italic italic font-light">three-step rhythm.</em>
          </h2>

          <ol className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {s.process.map((p) => (
              <li
                key={p.n}
                className="border hairline rounded-2xl p-7 md:p-9 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors duration-500 group"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] group-hover:text-[color:var(--color-paper)]/60">
                  {p.n} / 03
                </span>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight mt-4">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[color:var(--color-gray-4)] group-hover:text-[color:var(--color-paper)]/75">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      {s.faq.length > 0 && (
        <section className="bg-[color:var(--color-paper-pure)]">
          <div className="container-x py-24 md:py-32 grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                ( FAQ )
              </p>
              <h2 className="text-headline font-display mt-6">
                Quick <em className="not-italic italic font-light">questions.</em>
              </h2>
            </div>
            <dl className="col-span-12 md:col-span-7 md:col-start-6 divide-y hairline">
              {s.faq.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-display text-2xl tracking-tight">
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--color-gray-4)] max-w-xl">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="border-t hairline bg-[color:var(--color-paper)]">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                ( Pairs well with )
              </p>
              <h2 className="text-headline font-display mt-4">
                Related services.
              </h2>
            </div>
            <Link href="/services" className="text-sm underline-grow">
              See all six →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group border hairline rounded-2xl p-7 md:p-9 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors duration-500"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] group-hover:text-[color:var(--color-paper)]/60">
                    {r.num}
                  </span>
                  <span className="h-9 w-9 grid place-items-center rounded-full bg-[color:var(--color-ink)]/5 group-hover:bg-[color:var(--color-paper)]/15 transition-colors transition-transform group-hover:rotate-45">
                    →
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[color:var(--color-gray-4)] group-hover:text-[color:var(--color-paper)]/75 max-w-md">
                  {r.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TickerCTA />
    </>
  );
}
