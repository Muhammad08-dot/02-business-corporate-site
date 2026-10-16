import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { caseStudies, img } from '@/lib/data';

/** Case studies — deep write-ups stacked as alternating spreads. */
export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies — Calderwood Partners"
        description="Verified results from four engagements: a freight carrier margin rebuild, a 34% changeover cut, an OR throughput rescue, and a demand-planning rebuild."
      />

      <div className="border-b border-line bg-fog">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="kicker">Case studies</p>
            <h1 className="mt-3 max-w-2xl text-h1x font-heading font-bold">
              Four engagements, receipts attached.
            </h1>
            <p className="mt-5 max-w-prose text-lead text-navy-soft">
              Clients are anonymized where they asked us to be — the numbers
              are not, and every one of them was verified by the client’s own
              finance team after we left. References available on request,
              including the two projects that missed their targets.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="divide-y divide-line">
        {caseStudies.map((c, i) => (
          <article key={c.slug} id={c.slug} className="scroll-mt-24 bg-white">
            <div
              className={`shell grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <img
                  src={img(c.image, 1000, 72)}
                  alt={`${c.sector} operations scene`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-sharp border border-line object-cover"
                />
                <p className="mt-3 text-xs text-navy-mute">{c.duration}</p>
              </Reveal>

              <Reveal delay={60}>
                <p className="kicker">{c.sector}</p>
                <h2 className="mt-3 text-h2x font-heading font-bold">{c.headline}</h2>
                <p className="mt-2 text-sm font-semibold text-navy-mute">{c.client}</p>
                <p className="mt-5 max-w-prose text-[0.9375rem] leading-[1.8] text-navy-soft">
                  {c.situation}
                </p>

                <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  What we did
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {c.whatWeDid.map((w) => (
                    <li key={w} className="flex gap-3 text-[0.9375rem] leading-relaxed text-navy-soft">
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-emerald" aria-hidden />
                      {w}
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 grid grid-cols-1 gap-5 rounded-sharp border border-line bg-fog p-6 sm:grid-cols-3">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <dt className="sr-only">{r.label}</dt>
                      <dd>
                        <p className="font-heading text-xl font-extrabold text-emerald">{r.value}</p>
                        <p className="mt-1 text-xs leading-snug text-navy-mute">{r.label}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-navy">
        <div className="shell flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl text-h2x font-heading font-bold text-white">
            Want the unanonymized version?
          </h2>
          <Link to="/contact" className="btn-inverse shrink-0">
            Ask for references <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
