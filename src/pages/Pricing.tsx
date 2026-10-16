import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';
import { pricingModels } from '@/lib/data';

/** Pricing — three engagement models as ruled columns + FAQ accordion. */
export default function Pricing() {
  return (
    <>
      <Seo
        title="Engagement Models & Pricing — Calderwood Partners"
        description="A fixed-fee Diagnostic Sprint at $18,500, embedded Operating Partnerships from $14,000 a month, and Interim Leadership at $24,000 a month. No hourly billing, ever."
      />

      <div className="border-b border-line bg-fog">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="kicker">Engagement models</p>
            <h1 className="mt-3 max-w-2xl text-h1x font-heading font-bold">
              Three ways to buy fourteen years of pattern matching.
            </h1>
            <p className="mt-5 max-w-prose text-lead text-navy-soft">
              Published pricing is a courtesy to you, not a marketing trick:
              it filters out the calls that were never going to work and lets
              the good ones start at substance. All fees exclude travel, which
              we bill at cost with receipts.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="bg-white">
        <div className="shell grid gap-px bg-line py-section lg:grid-cols-3">
          {pricingModels.map((m, i) => (
            <Reveal key={m.name} delay={i * 70} className="h-full">
              <div
                className={`flex h-full flex-col bg-white p-8 md:p-10 ${
                  m.featured ? 'ring-1 ring-inset ring-emerald' : ''
                }`}
              >
                {m.featured && (
                  <p className="mb-4 inline-flex w-fit rounded-sharp bg-emerald-wash px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
                    Most engagements
                  </p>
                )}
                <h2 className="font-heading text-xl font-bold text-navy">{m.name}</h2>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-navy">{m.price}</span>
                  <span className="text-sm text-navy-mute">{m.cadence}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-soft">{m.for}</p>

                <ul className="mt-7 space-y-3 border-t border-line pt-7">
                  {m.includes.map((inc) => (
                    <li key={inc} className="flex gap-3 text-sm leading-relaxed text-navy-soft">
                      <Check size={16} className="mt-0.5 shrink-0 text-emerald" aria-hidden />
                      {inc}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-line pt-4 text-xs italic leading-relaxed text-navy-mute">
                  {m.note}
                </p>

                <Link
                  to="/contact"
                  className={`mt-auto pt-8 ${m.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  Talk about this one <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-fog">
        <div className="shell grid gap-12 py-section lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="kicker">Questions we actually get</p>
            <h2 className="mt-3 text-h2x font-heading font-bold">
              Answered the way we’d answer them on the call.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-mute">
              If yours isn’t here, the intake form has a message box and a
              partner reads it — not a chatbot, not a coordinator.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}
