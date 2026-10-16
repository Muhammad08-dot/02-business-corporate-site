import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import LogoWordmark from '@/components/LogoWordmark';
import { caseStudies, clientLogos, firm, img, services } from '@/lib/data';

/**
 * Home: split hero over a stats rail, logo band, numbered services list
 * (editorial rows, not identical cards), one deep case study, principle
 * checklist, navy CTA band.
 */
export default function Home() {
  const featured = caseStudies[1]; // specialty steel — strongest numbers

  return (
    <>
      <Seo
        title="Calderwood Partners — Operations & Growth Consultancy, Chicago"
        description="A 34-person consultancy for industrial, logistics and healthcare operators. We fix the operating numbers: margin, cycle time, fill rate. 140 engagements since 2011."
      />

      {/* ============ HERO ============ */}
      <section className="border-b border-line bg-white">
        <div className="shell grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          <div>
            <p className="kicker">Operations &amp; growth consultancy · Chicago / Toronto</p>
            <h1 className="mt-4 max-w-xl text-hero font-heading font-extrabold">
              We fix the operating numbers.
            </h1>
            <p className="mt-6 max-w-lg text-lead text-navy-soft">
              Margin, cycle time, fill rate, utilization. Since 2011 we’ve
              taken $96M of verified savings out of the middle of industrial,
              logistics and healthcare operations — with a partner in the room
              two days a week and your people owning every model we build.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Start a conversation <ArrowRight size={16} aria-hidden />
              </Link>
              <Link to="/case-studies" className="btn-outline">
                See the receipts
              </Link>
            </div>
          </div>
          <Reveal delay={80}>
            <div className="relative">
              <img
                src={img('1486406146926-c627a92ad1ab', 900, 72)}
                alt="Office towers seen from street level in a business district"
                className="aspect-[4/3] w-full rounded-sharp border border-line object-cover"
              />
              {/* Floating proof chip — one, not everywhere */}
              <div className="absolute -bottom-6 left-6 right-16 rounded-sharp border border-line bg-white p-5 shadow-raised sm:left-10 sm:right-auto sm:w-72">
                <p className="text-stat font-heading font-extrabold text-emerald">−34%</p>
                <p className="mt-1 text-sm leading-snug text-navy-soft">
                  changeover time at a specialty steel producer. No new
                  machines; the $22M capex request was cancelled.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS RAIL ============ */}
      <section aria-label="Firm results" className="border-b border-line bg-fog">
        <div className="shell grid grid-cols-2 gap-x-8 gap-y-10 py-14 lg:grid-cols-4">
          {firm.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="border-l-2 border-emerald pl-4">
                <p className="text-stat font-heading font-extrabold text-navy">{s.value}</p>
                <p className="mt-1.5 text-sm leading-snug text-navy-mute">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CLIENT BAND ============ */}
      <section className="border-b border-line bg-white">
        <div className="shell py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-mute">
            Selected clients — named with permission
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clientLogos.map((l) => (
              <li key={l.name}>
                <LogoWordmark letters={l.letters} word={l.word} name={l.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ SERVICES — numbered rows ============ */}
      <section className="bg-white">
        <div className="shell py-section">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="kicker">What we do</p>
                <h2 className="mt-3 text-h1x font-heading font-bold">
                  Four practices, one method
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-emerald-dark"
              >
                All services <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>

          <ol className="mt-12">
            {services.map((s, i) => (
              <li key={s.slug} className="group border-t border-line last:border-b">
                <Reveal delay={i * 40}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="grid gap-3 py-8 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-6"
                  >
                    <span className="font-heading text-sm font-bold text-navy-mute tabular-nums">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy transition-colors group-hover:text-emerald">
                        {s.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-navy-soft">
                        {s.summary}
                      </p>
                    </div>
                    <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-navy-mute md:block">
                      {s.typical.split('·')[0].trim()}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FEATURED CASE ============ */}
      <section className="border-y border-line bg-fog">
        <div className="shell py-section">
          <Reveal>
            <p className="kicker">Case study · {featured.sector}</p>
          </Reveal>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <img
                src={img(featured.image, 1000, 72)}
                alt="Engineer reviewing production data on a laptop on the factory floor"
                className="aspect-[5/4] w-full rounded-sharp border border-line object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-h1x font-heading font-bold">{featured.headline}</h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-navy-soft">
                {featured.situation}
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-6">
                {featured.results.map((r) => (
                  <div key={r.label}>
                    <dt className="sr-only">{r.label}</dt>
                    <dd>
                      <p className="font-heading text-2xl font-extrabold text-emerald">{r.value}</p>
                      <p className="mt-1 text-xs leading-snug text-navy-mute">{r.label}</p>
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/case-studies"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-emerald-dark"
              >
                Read all four case studies <ArrowRight size={15} aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className="bg-white">
        <div className="shell grid gap-12 py-section lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="kicker">How we work</p>
            <h2 className="mt-3 text-h1x font-heading font-bold">
              Contractual, not cultural.
            </h2>
            <p className="mt-5 text-lead text-navy-soft">
              Every consultancy says “we’re like a partner with you.” Ours is
              written into the engagement letter, in the four sentences below.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-0 divide-y divide-line border-y border-line">
              {[
                ['A partner is on-site two days a week. Not on-call. On-site.', 'Named in the contract, with substitution rights if we miss it twice.'],
                ['Outcome targets are in the agreement.', 'Fill rate, changeover hours, block utilization — whatever the work is actually for, reviewed monthly in writing.'],
                ['Your people own the deliverables by week 12.', 'Paired build, your repos, your stack. We leave with nothing locked and nothing licensed back to you.'],
                ['The success fee only pays on verified, sustained results.', '“Sustained” means two quarters past our last day on site. Verified by your finance team, not ours.'],
              ].map(([title, sub]) => (
                <li key={title} className="flex gap-4 py-5">
                  <Check size={18} className="mt-0.5 shrink-0 text-emerald" aria-hidden />
                  <div>
                    <p className="font-heading text-[1.0625rem] font-semibold text-navy">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-mute">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-navy">
        <div className="shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-h2x font-heading font-bold text-white">
              Tell us what’s bleeding. We’ll tell you if we can stop it.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              First calls are 45 minutes with a partner. If we’re not the right
              firm for it, you’ll hear that on the first call — roughly one
              engagement in four gets referred elsewhere.
            </p>
          </div>
          <Link to="/contact" className="btn-inverse shrink-0">
            Book the call <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
