import Link from 'next/link';
import { useRouter } from 'next/router';

import { localeNames, locales } from '../../lib/i18n/dictionaries';
import { t, useDictionary } from '../../lib/i18n/translate';

// Each language has its own URL ("/" and "/en"), so switching is a plain link —
// crawlers can follow it and every language gets indexed.
export default function LanguageSwitcher() {
  const { asPath } = useRouter();
  const { locale, dict } = useDictionary();
  const path = asPath.split('#')[0] || '/';

  return (
    <div className="language-switcher" role="group" aria-label={t(dict, 'nav.languageLabel')}>
      {locales.map((code) => (
        <Link
          key={code}
          href={path}
          locale={code}
          hrefLang={code}
          scroll={false}
          aria-current={locale === code ? 'true' : undefined}
          title={localeNames[code]}
          className={`language-switcher-option ${locale === code ? 'is-active' : ''}`}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
