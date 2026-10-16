import { MapPin, Phone, Mail } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { firm } from '@/lib/data';

/** Contact — form + office block. The page a real prospect lands on. */
export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — Calderwood Partners"
        description="Tell us what's broken. A partner reads every inquiry within one business day. Two offices: Chicago and Toronto."
      />

      <div className="border-b border-line bg-fog">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="kicker">Contact</p>
            <h1 className="mt-3 max-w-2xl text-h1x font-heading font-bold">
              Start with the problem, not the RFP.
            </h1>
            <p className="mt-5 max-w-prose text-lead text-navy-soft">
              A partner reads every form that comes through here — not a
              coordinator, not a chatbot. If what you need falls outside our
              practice, we'll say so and point you to someone who does it better.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="bg-white">
        <div className="shell grid gap-16 py-section lg:grid-cols-[1.5fr_1fr]">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Office details */}
          <Reveal delay={80}>
            <div className="space-y-10">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Direct lines
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-navy-soft">
                  <li className="flex items-center gap-2.5">
                    <Phone size={15} className="text-emerald" aria-hidden />
                    <a href={firm.phoneHref} className="hover:text-emerald">{firm.phone}</a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={15} className="text-emerald" aria-hidden />
                    <a href={`mailto:${firm.email}`} className="hover:text-emerald">{firm.email}</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Offices
                </h2>
                <ul className="mt-4 space-y-6">
                  {firm.offices.map((o) => (
                    <li key={o.city}>
                      <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                        <MapPin size={14} className="text-emerald" aria-hidden />
                        {o.city}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-navy-soft">{o.address}</p>
                      <p className="mt-1 text-xs italic text-navy-mute">{o.note}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line pt-6">
                <p className="text-xs leading-relaxed text-navy-mute">
                  Response time: one business day.
                  If it's urgent and there's a deal deadline attached, call
                  the Chicago line and ask for Neil — he'll pick up or call
                  back within two hours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
