import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { services } from '@/lib/data';

/** Services — alternating full-width sections with anchor targets. */
export default function Services() {
  return (
    <>
      <Seo
        title="Services — Calderwood Partners"
        description="Operations strategy, supply chain & logistics, data & digital operations, and M&A operational diligence for $50M–$1B operators."
      />

      <div className="border-b border-line bg-fog">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="kicker">Services</p>
            <h1 className="mt-3 max-w-2xl text-h1x font-heading font-bold">
              Four practices. None of them produce a binder.
            </h1>
            <p className="mt-5 max-w-prose text-lead text-navy-soft">
              Every engagement ends with your people running the thing we
              built, and a number in your P&amp;L that wasn’t there before.
              Pick the closest match — the first call will sort out the rest.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="divide-y divide-line">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-24 bg-white" aria-labelledby={`h-${s.slug}`}>
            <div className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="font-heading text-sm font-bold text-navy-mute tabular-nums">
                    0{i + 1}
                  </p>
                  <h2 id={`h-${s.slug}`} className="mt-2 text-h2x font-heading font-bold">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
                    {s.typical}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <div className="prose-calderwood max-w-prose">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-[0.9375rem] leading-[1.8] text-navy-soft [&+p]:mt-5">
                      {p}
                    </p>
                  ))}
                </div>

                <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  What you leave with
                </h3>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {s.deliverables.map((d) => (
                    <li key={d} className="py-3 text-[0.9375rem] text-navy-soft">
                      {d}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-emerald-dark"
                >
                  Discuss a {s.title.toLowerCase()} engagement{' '}
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </Reveal>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
