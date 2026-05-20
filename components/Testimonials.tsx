"use client";

const quotes = [
  {
    body:
      "Djitugo built our brand identity and ran our social from zero. Bookings doubled within two quarters.",
    name: "Operations Lead",
    company: "The Mesare Resort",
  },
  {
    body:
      "Their team thinks like operators, not just an agency. Strategy first, beautiful execution second.",
    name: "Marketing Director",
    company: "JobStreet Express",
  },
  {
    body:
      "From photography to ads, we work with one team that owns the outcome. Rare to find in Bali.",
    name: "Founder",
    company: "Salty Skin",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t hairline py-24 md:py-32 bg-[color:var(--color-paper)]">
      <div className="container-x">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] mb-12">
          ( Words from the room )
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {quotes.map((q) => (
            <li
              key={q.company}
              className="flex flex-col gap-8 border-t hairline pt-8"
            >
              <blockquote className="font-display text-2xl md:text-[1.75rem] leading-[1.15] tracking-tight">
                <span aria-hidden className="opacity-30 mr-1">&ldquo;</span>
                {q.body}
                <span aria-hidden className="opacity-30 ml-1">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-auto">
                <div className="font-medium text-sm">{q.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                  {q.company}
                </div>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
