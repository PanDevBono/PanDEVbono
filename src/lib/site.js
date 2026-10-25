export const SITE_URL = 'https://pandevbono.com';
export const SITE_NAME = 'PanDEVbono';
export const CONTACT_EMAIL = 'pan.dev.bono@gmail.com';
export const GITHUB_URL = 'https://github.com/PanDEVbono';
// Social share image per locale (1200x630).
export const ogImage = (locale) => `/og-image-${locale}.png`;

// Absolute URL of a page in a given locale; the default locale (es) has no prefix.
export function localeUrl(locale, path = '/') {
  if (locale === 'es') {
    return `${SITE_URL}${path}`;
  }
  return `${SITE_URL}/${locale}${path === '/' ? '' : path}`;
}
