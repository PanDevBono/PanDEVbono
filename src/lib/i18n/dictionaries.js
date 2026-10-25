import en from './locales/en.json';
import es from './locales/es.json';

// Keep in sync with the i18n block in next.config.mjs.
export const locales = ['es', 'en'];
export const defaultLocale = 'es';

export const localeNames = {
  es: 'Español',
  en: 'English',
};

// Open Graph locale codes.
export const ogLocales = {
  es: 'es_ES',
  en: 'en_US',
};

const dictionaries = { es, en };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
