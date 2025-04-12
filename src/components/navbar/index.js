import Link from "next/link"
import Image from 'next/image'
import logo from '../../../public/img/bono.png'

export default function NavBar() {
  return (
    <header key="1" className="navbar">
      <Link className="navbar-logo" href="/">
        {/* <Image src={logo} alt="PanDEVbono logo" width={40} /> */}
      </Link>
      <nav className="navbar-nav">
        <div className="navbar-links">
          {/* <Link className="navbar-link" href="/">
            About Us
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
