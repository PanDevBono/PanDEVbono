import Link from "next/link"
import Image from 'next/image'
import logo from '../../../public/img/logo-500.png'

export default function NavBar() {
  return (
    <header key="1" className="flex items-center h-14 px-4 border-b gap-4 lg:px-6 bg-gray-700 text-white">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
        <Image src={logo} alt="PanDEVbono logo" width={40} />
      </Link>
      <nav className="ml-auto flex-1 lg:ml-0">
        <div className="hidden space-x-4 lg:flex">
          {/* <Link className="font-medium" href="/">
            About Us
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
