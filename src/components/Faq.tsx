import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '@/lib/data';

/** Accessible accordion: real buttons, aria-expanded, one panel at a time. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <dt>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-heading text-[1.0625rem] font-semibold text-navy">
                  {f.q}
                </span>
                <Plus
                  size={18}
                  aria-hidden
                  className={`shrink-0 text-emerald transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
            </dt>
            <dd
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="max-w-prose pb-6 text-[0.9375rem] leading-relaxed text-navy-soft"
            >
              {f.a}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
