import { Link } from 'react-router-dom';
import { firm } from '@/lib/data';

/** Dark navy footer: sitemap, offices, and a straight closing line. */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <p className="font-heading text-lg font-bold">
            Calderwood <span className="font-medium text-white/60">Partners</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Operations and growth consultancy for industrial, logistics and
            healthcare operators between $50M and $1B. Chicago and Toronto
            since {firm.founded}.
          </p>
          <p className="mt-6 text-sm">
            <a href={firm.phoneHref} className="text-white/80 hover:text-white">
              {firm.phone}
            </a>
            <span className="mx-2 text-white/30">·</span>
            <a href={`mailto:${firm.email}`} className="text-emerald-light hover:text-white">
              {firm.email}
            </a>
          </p>
        </div>

        <nav aria-label="Company">
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: '/about', label: 'About & team' },
              { to: '/case-studies', label: 'Case studies' },
              { to: '/blog', label: 'Journal' },
              { to: '/pricing', label: 'Engagement models' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: '/services#operations-strategy', label: 'Operations strategy' },
              { to: '/services#supply-chain', label: 'Supply chain & logistics' },
              { to: '/services#data-systems', label: 'Data & digital' },
              { to: '/services#transaction-advisory', label: 'M&A diligence' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            Offices
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-white/75">
            {firm.offices.map((o) => (
              <li key={o.city}>
                <span className="font-semibold text-white">{o.city}</span>
                <br />
                {o.address}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Calderwood Partners LLC. All rights reserved.</p>
          <p>Illinois · Ontario · We answer the phone ourselves.</p>
        </div>
      </div>
    </footer>
  );
}
