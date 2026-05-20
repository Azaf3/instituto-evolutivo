import { useEffect } from 'react';

export default function SEO({ title, description, path = '' }) {
  const siteName = 'Instituto Evolutivo de Educação';
  const baseUrl = 'https://www.institutoeducativoevolutivo.com.br';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = `${baseUrl}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
      setMeta('twitter:description', description, 'name');
    }

    setMeta('og:title', fullTitle, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', siteName, 'property');
    setMeta('og:image', `${baseUrl}/img-logos/logo-colorido-iee.jpg`, 'property');
    setMeta('twitter:card', 'summary', 'name');
    setMeta('twitter:title', fullTitle, 'name');

    return () => {
      document.title = siteName;
    };
  }, [fullTitle, description, fullUrl]);

  return null;
}
