import { useEffect } from 'react';

/**
 * Per-route SEO: document title + meta description (SPA-safe).
 * Keeps the head in sync without pulling in a helmet dependency.
 */
export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);

  return null;
}
