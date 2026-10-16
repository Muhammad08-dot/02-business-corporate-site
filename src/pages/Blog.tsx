import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { img, posts } from '@/lib/data';

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

/** Journal — ruled list layout, latest piece gets a lead treatment. */
export default function Blog() {
  const [lead, ...rest] = posts;

  return (
    <>
      <Seo
        title="Journal — Calderwood Partners"
        description="Field notes from active engagements: safety stock politics, OR schedule economics, and why dashboards die. Written by the partners who did the work."
      />

      <div className="border-b border-line bg-fog">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="kicker">Journal</p>
            <h1 className="mt-3 max-w-2xl text-h1x font-heading font-bold">
              Field notes, written between engagements.
            </h1>
            <p className="mt-5 max-w-prose text-lead text-navy-soft">
              Three to four pieces a year, each by a partner who personally
              ran the work being described. No ghostwriting, no thought
              leadership about the metaverse.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="bg-white">
        <div className="shell py-section">
          {/* Lead post */}
          <Reveal>
            <Link to={`/blog/${lead.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="overflow-hidden rounded-sharp border border-line">
                <img
                  src={img(lead.image, 1000, 72)}
                  alt=""
                  aria-hidden
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">
                  Latest · {lead.topic}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold leading-snug text-navy group-hover:text-emerald md:text-3xl">
                  {lead.title}
                </h2>
                <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-navy-soft">
                  {lead.excerpt}
                </p>
                <p className="mt-5 text-sm text-navy-mute">
                  {lead.author} · {fmtDate(lead.date)} · {lead.readMins} min read
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                  Read it <ArrowUpRight size={15} aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Older posts — ruled rows */}
          <ol className="mt-16 border-t border-line">
            {rest.map((p, i) => (
              <li key={p.slug} className="border-b border-line">
                <Reveal delay={i * 60}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group grid items-center gap-4 py-7 md:grid-cols-[1fr_auto] md:gap-10"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-mute">
                        {p.topic}
                      </p>
                      <h3 className="mt-1.5 font-heading text-lg font-bold text-navy group-hover:text-emerald">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-navy-soft">
                        {p.excerpt}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-navy-mute tabular-nums">
                      {fmtDate(p.date)} · {p.readMins} min
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
