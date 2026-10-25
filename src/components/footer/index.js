import Image from 'next/image'
import { Mail } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import logo from '../../../public/img/bono-small.png'
import { t, useDictionary } from '../../lib/i18n/translate';
import { CONTACT_EMAIL, GITHUB_URL, SITE_URL } from '../../lib/site';

export default function Footer() {
  const { dict } = useDictionary();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Image src={logo} width={28} height={28} alt="" />
          <span className="wordmark">Pan<span className="wordmark-dev">Dev</span><span className="wordmark-bono">Bono</span></span>
        </div>

        <div className="footer-social-links">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <GitHubLogoIcon className="footer-icon" />
            <span>{t(dict, 'footer.github')}</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t(dict, 'cta.emailSubject'))}`} className="footer-social-link">
            <Mail className="footer-icon" />
            <span>{t(dict, 'footer.email')}</span>
          </a>
        </div>

        <p className="footer-copyright">
          {t(dict, 'footer.developedBy')}
          <a href={SITE_URL} className="footer-copyright-link">PanDEVbono</a>
          {` · © ${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  );
}
