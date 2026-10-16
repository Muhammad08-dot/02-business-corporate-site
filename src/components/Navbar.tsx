import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { firm } from '@/lib/data';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case studies' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Journal' },
];

/** Sticky white header with a hairline rule; emerald only on the CTA. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-200 ${
        elevated ? 'border-line shadow-card' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        {/* Wordmark */}
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${firm.name} home`}>
          <span
            className="grid h-8 w-8 place-items-center rounded-sharp bg-navy font-heading text-[0.8125rem] font-extrabold text-white"
            aria-hidden
          >
            CP
          </span>
          <span className="font-heading text-[1.0625rem] font-bold tracking-tight text-navy">
            Calderwood <span className="font-medium text-navy-mute">Partners</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-emerald' : 'text-navy-soft hover:text-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={firm.phoneHref} className="text-sm text-navy-mute transition-colors hover:text-navy">
            {firm.phone}
          </a>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5">
            Start a conversation <ArrowUpRight size={15} aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="p-2 text-navy lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `border-b border-line/70 py-3.5 text-[0.9375rem] font-medium last:border-0 ${
                  isActive ? 'text-emerald' : 'text-navy-soft'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mt-4 mb-2">
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
