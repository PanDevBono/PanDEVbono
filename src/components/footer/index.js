import Link from "next/link"
import { Github, Mail } from 'lucide-react';
import FooterStrings from '../../strings/footer';

export default function NavBar() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="container">
        <div className="flex">
          <div className="basis-1/2 p-5">
            <div className="flex">
              <div className="basis-7"><a href="https://github.com/PanDEVbono" target="_blank"><Github /></a></div>
              <div className="basis-7"><a href="mailto:pan.dev.bono@gmail.com?subject=I need info about a page creation"><Mail /></a></div>
            </div>
          </div>
          <div className="basis-1/2 p-5"></div>
        </div>
        <div className="flex text-center">
          <div className="basis-1/4"></div>
          <div className="basis-1/2 p-4 border-t-2">
            <Link className="font-medium" href="/">
              {FooterStrings.devInfo.description}
            </Link>
          </div>
          <div className="basis-1/4"></div>
        </div>
      </div>
    </footer>
  );
}
