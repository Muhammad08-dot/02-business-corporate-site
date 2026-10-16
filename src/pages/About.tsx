import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { firm, img, team } from '@/lib/data';

const beliefs = [
  [
    'Operators, not analysts.',
    'Every partner has run something — a plant, a network, a P&L. We hire for scar tissue and teach the frameworks, not the other way around.',
  ],
  [
    'Small on purpose.',
    'Thirty-four people. The partner who pitches you is the partner who stays late when the numbers don’t move. Growth beyond this turns that into a staffing spreadsheet, and we’ve seen how that ends.',
  ],
  [
    'We can be wrong publicly.',
    'Two of our last ten engagements missed their targets. We told those prospects before they asked, and we still reference both companies, with permission, when someone’s situation matches ours to decline.',
  ],
];

export default function About() {
  return (
    <>
      <Seo
        title="About & Team — Calderwood Partners"
        description="Who we are: a 34-person consultancy in Chicago and Toronto built by operators. The firm's history, beliefs, and the partners you'd actually meet."
      />

      <div className="border-b border-line bg-fog">
        <div className="shell grid gap-12 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="kicker">About</p>
            <h1 className="mt-3 text-h1x font-heading font-bold">
              Built by operators who got tired of advising operators.
            </h1>
            <div className="mt-6 max-w-prose space-y-4 text-[0.9375rem] leading-[1.8] text-navy-soft">
              <p>
                Neil Calderwood spent eleven years running plants for a
                packaging group and four months watching a strategy firm
                present his own operation back to him in a font he disliked.
                In 2011 he started this firm with one rule: the people doing
                the work have done the work.
              </p>
              <p>
                Fourteen years later: thirty-four people, two offices, one
                hundred and forty completed engagements, and a client
                retention rate (83% of new work from past clients) that we
                think explains everything else about how this place runs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={img('1497366811353-6870744d04b2', 900, 72)}
              alt="The Calderwood Partners meeting room in Chicago — a long table beside floor-to-ceiling windows"
              loading="lazy"
              className="h-full min-h-64 w-full rounded-sharp border border-line object-cover"
            />
          </Reveal>
        </div>
      </div>

      {/* Beliefs — ruled rows, not cards */}
      <section className="bg-white">
        <div className="shell py-section">
          <Reveal>
            <h2 className="text-h2x font-heading font-bold">What we believe, briefly</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {beliefs.map(([t, b], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="grid gap-3 py-8 md:grid-cols-[3rem_1fr_2fr] md:gap-8">
                  <span className="font-heading text-sm font-bold text-navy-mute tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy">{t}</h3>
                  <p className="max-w-prose text-[0.9375rem] leading-relaxed text-navy-soft">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line bg-fog">
        <div className="shell py-section">
          <Reveal>
            <p className="kicker">The partners you’d meet</p>
            <h2 className="mt-3 text-h2x font-heading font-bold">
              Six of the eleven. The others will be on your project.
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={(i % 3) * 60}>
                  <img
                    src={img(m.image, 600, 72)}
                    alt={`Portrait of ${m.name}, ${m.role} at Calderwood Partners`}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-sharp border border-line object-cover"
                  />
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">{m.name}</h3>
                  <p className="text-sm font-semibold text-emerald">
                    {m.role} <span className="font-normal text-navy-mute">· {m.based}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-soft">{m.bio}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
              <p className="max-w-md text-sm leading-relaxed text-navy-mute">
                Hiring? We add one or two operators a year, always from the
                floor up. {firm.offices[0].city} and {firm.offices[1].city}
                only — remote doesn’t work in this job, and we’ve tried.
              </p>
              <Link to="/contact" className="btn-outline">
                Say hello anyway <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
