import Link from "next/link"
import Image from 'next/image'
import { Mail } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import FooterStrings from '../../strings/footer';
import logo from '../../../public/img/logo-name.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-divider-container">
        <div className="section-divider-line"></div>
        <div className="section-divider-dot"></div>
        <div className="section-divider-dot"></div>
        <div className="section-divider-dot"></div>
        <div className="section-divider-line"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
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
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <a href="https://pandevbono.com" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">
              <span>Developed by</span>
              <Image
                src={logo}
                width={100}
                height={30}
                alt="PanDEVbono logo"
                className="footer-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
