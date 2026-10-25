import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * `en.json` is the reference; every other locale must match it exactly.
 *
 * `t()` throws "Missing translation for key" rather than falling back, so a
 * missing key here breaks the page in one language only. Mirrors the parity
 * suite in showmunity-web.
 *
 * Note `defaultLocale` is "es" while the reference is en.json, because en is
 * where new copy gets written first.
 */
const load = (name) => JSON.parse(readFileSync(new URL(`../locales/${name}.json`, import.meta.url), 'utf8'));

const en = load('en');
const LOCALES = [['es', load('es')]];

/**
 * Arrays are part of the shape — `services.items` and `faq.items` are lists of
 * copy. Recursing into them yields indexed paths like `faq.items.0.question`,
 * so a locale with a different number of items shows up as missing or extra keys.
 */
const leaves = (node, prefix = '') =>
  typeof node === 'string'
    ? [[prefix.slice(0, -1), node]]
    : Object.entries(node).flatMap(([key, value]) => leaves(value, `${prefix}${key}.`));

const flatten = (node) => leaves(node).map(([key]) => key);

/** {placeholder} style interpolation, if any copy grows some. */
const placeholders = (value) =>
  (value.match(/\{\{?\s*[\w.]+\s*\}?\}/g) ?? []).map((m) => m.replace(/[{}\s]/g, '')).sort();

describe('translation parity', () => {
  const englishKeys = flatten(en);

  it('has keys to check at all', () => {
    // Guards against flatten() silently returning [] after a restructure.
    assert.ok(englishKeys.length > 0);
  });

  for (const [name, locale] of LOCALES) {
    describe(name, () => {
      const localeKeys = flatten(locale);

      it('is missing no key that en defines', () => {
        assert.deepEqual(englishKeys.filter((key) => !localeKeys.includes(key)), []);
      });

      it('defines no key that en does not', () => {
        assert.deepEqual(localeKeys.filter((key) => !englishKeys.includes(key)), []);
      });

      it('has no blank values', () => {
        assert.deepEqual(leaves(locale).filter(([, value]) => value.trim() === '').map(([key]) => key), []);
      });

      it('keeps every interpolation placeholder en uses', () => {
        const englishValues = new Map(leaves(en));
        const mismatched = leaves(locale)
          .filter(([key, value]) => {
            const source = englishValues.get(key);
            if (source === undefined) return false;
            return placeholders(source).join(',') !== placeholders(value).join(',');
          })
          .map(([key]) => key);

        assert.deepEqual(mismatched, []);
      });
    });
  }
});
