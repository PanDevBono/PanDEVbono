import Link from "next/link"
import Image from 'next/image'
import logo from '../../../public/img/bono-small.png'
import LanguageSwitcher from '../language-switcher/index';
import { t, useDictionary } from '../../lib/i18n/translate';

const links = [
  { href: '#services', key: 'nav.services' },
  { href: '#ai', key: 'nav.ai' },
  { href: '#stack', key: 'nav.stack' },
  { href: '#faq', key: 'nav.faq' },
];

export default function NavBar() {
  const { dict } = useDictionary();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="navbar-logo" href="/" aria-label="PanDEVbono">
          <Image src={logo} alt="" width={32} height={32} />
          <span className="wordmark">Pan<span className="wordmark-dev">Dev</span><span className="wordmark-bono">Bono</span></span>
        </Link>
        <nav className="navbar-nav">
          <div className="navbar-links">
            {links.map((link) => (
              <a key={link.href} className="navbar-link" href={link.href}>{t(dict, link.key)}</a>
            ))}
          </div>
          <LanguageSwitcher />
          <a className="navbar-cta" href="#contact">{t(dict, 'nav.contact')}</a>
        </nav>
      </div>
    </header>
  );
}
