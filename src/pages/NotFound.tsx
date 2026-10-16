import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';

/** Minimal 404 — sharp navy/fog styling consistent with the rest of the site. */
export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found — Calderwood Partners" description="The page you requested does not exist." />
      <section className="bg-fog">
        <div className="shell flex flex-col items-start py-section">
          <p className="kicker">404</p>
          <h1 className="mt-3 text-h1x font-heading font-bold">
            That page isn't here.
          </h1>
          <p className="mt-5 max-w-prose text-lead text-navy-soft">
            It may have been renamed, archived, or never existed in the first
            place. If you followed a link from one of our emails, let us know
            and we'll fix it.
          </p>
          <Link to="/" className="btn-outline mt-8">
            <ArrowLeft size={15} aria-hidden /> Back to the homepage
          </Link>
        </div>
      </section>
    </>
  );
}
