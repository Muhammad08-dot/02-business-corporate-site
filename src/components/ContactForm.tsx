import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/data';

type Values = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  revenue: string;
  message: string;
};

const empty: Values = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  revenue: '',
  message: '',
};

function validate(v: Values): Partial<Record<keyof Values, string>> {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) e.name = 'Please add a name so we know who we’re meeting.';
  if (!v.company.trim()) e.company = 'Company, please — it helps us route you to the right partner.';
  if (!v.email.trim()) e.email = 'A work email is required for the intro call invite.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = 'That email doesn’t parse — mind checking it?';
  if (v.phone && v.phone.replace(/\D/g, '').length < 10)
    e.phone = 'If you include a number, please make it a full one.';
  if (!v.service) e.service = 'Pick the closest practice area; wrong is fine.';
  if (!v.message.trim()) e.message = 'Two sentences about the situation is plenty.';
  else if (v.message.trim().length < 40)
    e.message = 'A little more detail, please — 40 characters minimum.';
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [touchedSubmit, setTouchedSubmit] = useState(false);

  const set =
    (key: keyof Values) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const next = { ...values, [key]: ev.target.value };
      setValues(next);
      if (touchedSubmit) setErrors(validate(next));
    };

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setTouchedSubmit(true);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`ct-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setState('sending');
    // Demo: simulate the intake endpoint. Wire to POST /api/intake in production.
    setTimeout(() => setState('sent'), 800);
  }

  if (state === 'sent') {
    return (
      <div
        role="status"
        className="rounded-sharp border border-emerald/40 bg-emerald-wash p-8 text-center md:p-10"
      >
        <CheckCircle2 size={30} className="mx-auto text-emerald" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">
          Received — you’ll hear from a partner, not a coordinator.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-soft">
          Expect a reply within one business day with two or three candid
          questions and, if it’s a fit, times for a 45-minute call this week.
          If your matter is urgent:{` `}
          <a href="tel:+13125550147" className="font-semibold text-emerald underline underline-offset-2">
            (312) 555-0147
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setState('idle');
            setTouchedSubmit(false);
          }}
          className="btn-outline mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`ct-${k}-error`} className="field-error">
        <AlertCircle size={13} aria-hidden /> {errors[k]}
      </p>
    ) : null;

  const invalid = (k: keyof Values) =>
    errors[k] ? { 'aria-invalid': true, 'aria-describedby': `ct-${k}-error` } : {};

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className="field-label">
            Your name
          </label>
          <input
            id="ct-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            className="field-input"
            placeholder="Jordan Alvarez"
            {...invalid('name')}
          />
          {err('name')}
        </div>
        <div>
          <label htmlFor="ct-company" className="field-label">
            Company
          </label>
          <input
            id="ct-company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set('company')}
            className="field-input"
            placeholder="Northline Manufacturing"
            {...invalid('company')}
          />
          {err('company')}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-email" className="field-label">
            Work email
          </label>
          <input
            id="ct-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            className="field-input"
            placeholder="jordan@northline.com"
            {...invalid('email')}
          />
          {err('email')}
        </div>
        <div>
          <label htmlFor="ct-phone" className="field-label">
            Phone <span className="font-normal normal-case tracking-normal text-navy-mute">(optional)</span>
          </label>
          <input
            id="ct-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            className="field-input"
            placeholder="(312) 555-0163"
            {...invalid('phone')}
          />
          {err('phone')}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-service" className="field-label">
            Closest practice area
          </label>
          <select
            id="ct-service"
            value={values.service}
            onChange={set('service')}
            className="field-input"
            {...invalid('service')}
          >
            <option value="">Choose one — wrong is fine</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
          {err('service')}
        </div>
        <div>
          <label htmlFor="ct-revenue" className="field-label">
            Company revenue <span className="font-normal normal-case tracking-normal text-navy-mute">(optional)</span>
          </label>
          <select
            id="ct-revenue"
            value={values.revenue}
            onChange={set('revenue')}
            className="field-input"
          >
            <option value="">Prefer not to say</option>
            <option value="lt50">Under $50M</option>
            <option value="50-250">$50M – $250M</option>
            <option value="250-1b">$250M – $1B</option>
            <option value="gt1b">Over $1B</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ct-message" className="field-label">
          What’s going on?
        </label>
        <textarea
          id="ct-message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          className="field-input resize-none"
          placeholder="Two honest sentences beat a polished paragraph. Example: our on-time delivery slipped nine points since March and nobody can tell us why."
          {...invalid('message')}
        />
        {err('message')}
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" className="btn-primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send to intake'}
        </button>
        <p className="text-xs leading-relaxed text-navy-mute">
          Mutual NDA before any data moves. We never share who calls us.
        </p>
      </div>
    </form>
  );
}
