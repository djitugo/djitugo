type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  meta?: { label: string; value: string }[];
};

export default function PageHero({ eyebrow, title, lede, meta }: Props) {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-24 border-b hairline bg-[color:var(--color-paper)]">
      <div className="container-x">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-4)]">
          {eyebrow}
        </p>
        <h1 className="text-display font-display mt-8 max-w-[18ch]">{title}</h1>
        {lede && (
          <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-[color:var(--color-gray-4)]">
            {lede}
          </p>
        )}
        {meta && (
          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 max-w-3xl">
            {meta.map((m) => (
              <div key={m.label} className="border-t hairline pt-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)]">
                  {m.label}
                </dt>
                <dd className="font-display text-xl md:text-2xl mt-1">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
