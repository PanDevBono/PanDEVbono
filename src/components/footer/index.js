import Image from 'next/image'
import { Mail } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import FooterStrings from '../../strings/footer';
import logo from '../../../public/img/bono-small.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Image src={logo} width={28} height={28} alt="PanDEVbono logo" />
          <span className="wordmark">Pan<span className="wordmark-dev">Dev</span><span className="wordmark-bono">Bono</span></span>
        </div>

        <div className="footer-social-links">
          <a href="https://github.com/PanDEVbono" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <GitHubLogoIcon className="footer-icon" />
            <span>GitHub</span>
          </a>
          <a href="mailto:pan.dev.bono@gmail.com?subject=I need info about a page creation" className="footer-social-link">
            <Mail className="footer-icon" />
            <span>Email</span>
          </a>
        </div>

        <p className="footer-copyright">
          {FooterStrings.devInfo.description}
          <a href="https://pandevbono.com" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">PanDEVbono</a>
          {` · © ${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  );
}
