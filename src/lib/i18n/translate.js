import { useRouter } from 'next/router';

import { defaultLocale, getDictionary } from './dictionaries';

// Looks up a dotted key ("hero.title") and fails loudly when it is missing,
// so a forgotten translation breaks the build instead of shipping blank copy.
export function t(dict, key) {
  const value = key.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return acc[part];
    }
    return undefined;
  }, dict);

  if (typeof value !== 'string') {
    throw new Error(`Missing translation for key: ${key}`);
  }

  return value;
}

// Current locale and its dictionary, taken from the URL ("/" = es, "/en" = en).
export function useDictionary() {
  const { locale = defaultLocale } = useRouter();
  return { locale, dict: getDictionary(locale) };
}
