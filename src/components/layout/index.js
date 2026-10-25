import Head from 'next/head';
import NavBar from '../navbar/index';
import Footer from '../footer/index';
import { locales, ogLocales } from '../../lib/i18n/dictionaries';
import { t, useDictionary } from '../../lib/i18n/translate';
import { CONTACT_EMAIL, GITHUB_URL, SITE_NAME, SITE_URL, localeUrl, ogImage } from '../../lib/site';

// Site-wide entities for search engines and AI assistants (schema.org JSON-LD).
function organizationSchema(locale, dict) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/img/logo-vertical.png`,
        email: CONTACT_EMAIL,
        sameAs: [GITHUB_URL],
        description: t(dict, 'meta.description'),
        knowsLanguage: locales,
        knowsAbout: [
          'Web development', 'Mobile app development', 'Desktop app development',
          'Android', 'iOS', 'Windows', 'macOS', 'Linux',
          'Next.js', 'React', 'Angular', 'Node.js', 'Ruby on Rails',
          'Amazon Web Services', 'Google Cloud Platform', 'Cloudflare',
          'AI tools management', 'Claude', 'ChatGPT', 'Gemini', 'GitHub Copilot',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t(dict, 'services.title'),
          itemListElement: dict.services.items.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: locales,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${localeUrl(locale)}#webpage`,
        url: localeUrl(locale),
        name: t(dict, 'meta.title'),
        description: t(dict, 'meta.description'),
        inLanguage: locale,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export default function Layout({ children, path = '/', schema = [] }) {
  const { locale, dict } = useDictionary();
  const title = t(dict, 'meta.title');
  const description = t(dict, 'meta.description');
  const url = localeUrl(locale, path);
  const image = `${SITE_URL}${ogImage(locale)}`;
  const structuredData = [organizationSchema(locale, dict), ...schema];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#060A0C" />
        <link rel="canonical" href={url} />

        {/* One URL per language, linked to each other */}
        {locales.map((code) => (
          <link key={`hreflang-${code}`} rel="alternate" hrefLang={code} href={localeUrl(code, path)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={localeUrl('es', path)} />

        {/* Social previews */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t(dict, 'meta.ogImageAlt')} />
        <meta property="og:locale" content={ogLocales[locale]} />
        {locales.filter((code) => code !== locale).map((code) => (
          <meta key={`og-locale-${code}`} property="og:locale:alternate" content={ogLocales[code]} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </Head>
      <NavBar></NavBar>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}
