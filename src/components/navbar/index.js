import Link from "next/link"
import Image from 'next/image'
import logo from '../../../public/img/bono-small.png'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#ai', label: 'AI' },
  { href: '#stack', label: 'Stack' },
];

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="navbar-logo" href="/">
          <Image src={logo} alt="PanDEVbono logo" width={32} height={32} />
          <span className="wordmark">Pan<span className="wordmark-dev">Dev</span><span className="wordmark-bono">Bono</span></span>
        </Link>
        <nav className="navbar-nav">
          <div className="navbar-links">
            {links.map((link) => (
              <a key={link.href} className="navbar-link" href={link.href}>{link.label}</a>
            ))}
          </div>
          <a className="navbar-cta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
