import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Djitugo",
  description:
    "Start a project with Djitugo. Reach the studio in Bali — via form, email or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="( Contact )"
        title={
          <>
            Have a brand <em className="not-italic italic font-light">worth scaling?</em>
          </>
        }
        lede="Tell us about your business, the metric you want to move and the timeline you're working with. We reply within one business day — in Bahasa or English."
        meta={[
          { label: "Reply time", value: "≤ 24 hrs" },
          { label: "Discovery", value: "30-min call" },
          { label: "Min engagement", value: "3 months" },
          { label: "Languages", value: "ID / EN" },
        ]}
      />

      <section className="bg-[color:var(--color-paper)] border-b hairline">
        <div className="container-x py-20 md:py-32 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-10">
            <Block title="Studio">
              <p>
                Jln Bukit Sari Utara No.88X
                <br />
                Padangsambian Kaja
                <br />
                Denpasar Barat, Bali 80117
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)]">
                Mon – Fri · 09:00 – 18:00 WITA
              </p>
            </Block>

            <Block title="Direct">
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@djitugo.com"
                    className="underline-grow text-[15px]"
                  >
                    hello@djitugo.com
                  </a>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                    New projects · partnerships
                  </div>
                </li>
                <li>
                  <a
                    href="https://wa.me/6281337329381"
                    target="_blank"
                    rel="noreferrer"
                    className="underline-grow text-[15px]"
                  >
                    +62 813-3732-9381 · WhatsApp
                  </a>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                    Fastest reply during studio hours
                  </div>
                </li>
                <li>
                  <a
                    href="https://instagram.com/djitugo"
                    target="_blank"
                    rel="noreferrer"
                    className="underline-grow text-[15px]"
                  >
                    @djitugo · Instagram
                  </a>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                    Latest work · culture
                  </div>
                </li>
              </ul>
            </Block>

            <Block title="What to expect">
              <ol className="space-y-3 text-[14.5px]">
                <li className="flex gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1.5 shrink-0">
                    01
                  </span>
                  <span>Reply from your account lead within 24 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1.5 shrink-0">
                    02
                  </span>
                  <span>30-minute discovery call to scope the engagement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1.5 shrink-0">
                    03
                  </span>
                  <span>Proposal with scope, deliverables and timeline.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1.5 shrink-0">
                    04
                  </span>
                  <span>Kick-off and Discovery sprint within two weeks.</span>
                </li>
              </ol>
            </Block>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
                ( The studio )
              </p>
              <h2 className="text-headline font-display mt-4">
                Made in <em className="not-italic italic font-light">Bali.</em>
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Jln+Bukit+Sari+Utara+88X+Denpasar"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline-grow"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="aspect-[16/8] rounded-2xl overflow-hidden border hairline-light relative">
            <iframe
              title="Djitugo studio location"
              src="https://www.google.com/maps?q=Padangsambian+Kaja+Denpasar+Bali&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t hairline pt-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] mb-4">
        {title}
      </p>
      <div className="text-[14.5px] leading-relaxed">{children}</div>
    </div>
  );
}
