import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { img, posts } from '@/lib/data';
import NotFound from './NotFound';

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

/** Article view with a related-post footer. */
export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const more = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Seo title={`${post.title} — Calderwood Partners`} description={post.excerpt} />

      <article className="bg-white">
        <header className="border-b border-line bg-fog">
          <div className="shell py-14 md:py-20">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-mute transition-colors hover:text-emerald"
            >
              <ArrowLeft size={14} aria-hidden /> Journal
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald">
              {post.topic}
            </p>
            <h1 className="mt-3 max-w-3xl text-h1x font-heading font-bold">{post.title}</h1>
            <p className="mt-5 text-sm text-navy-mute">
              {post.author} · {fmtDate(post.date)} · {post.readMins} min read
            </p>
          </div>
        </header>

        <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_260px] lg:gap-20">
          <Reveal>
            <div className="max-w-prose">
              {post.body.map((para, i) => (
                <p
                  key={i}
                  className={`text-[1.0625rem] leading-[1.85] text-navy-soft ${i > 0 ? 'mt-6' : ''}`}
                >
                  {para}
                </p>
              ))}

              <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-navy-mute">
                Like this? {post.author} and the rest of the partners write
                what they’re learning while it’s still awkward to publish.
                The{' '}
                <Link to="/contact" className="font-semibold text-emerald hover:text-emerald-dark">
                  intake form
                </Link>{' '}
                mentions it, usually.
              </p>
            </div>
          </Reveal>

          <aside aria-label="Related reading" className="lg:pt-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Keep reading
            </h2>
            <ul className="mt-5 space-y-6">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="group block">
                    <img
                      src={img(p.image, 520, 70)}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-sharp border border-line object-cover"
                    />
                    <h3 className="mt-3 font-heading text-[0.9375rem] font-bold leading-snug text-navy group-hover:text-emerald">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-navy-mute">
                      {p.author} · {p.readMins} min
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
    </>
  );
}
