"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleHover = (menu) => {
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    setOpenMenu(null);
  };

  return (
    <nav className="w-full bg-[#0c0c0c] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO — bigger + visible */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CoinDoor Logo"
            width={65}
            height={65}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* NAV LINKS */}
        <ul className="flex items-center space-x-10 text-[#52a447] font-medium text-sm">
          
          <li><Link href="/">Home</Link></li>

          <li><Link href="/markets">Markets</Link></li>

          {/* NEWS DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => handleHover("news")}
            onMouseLeave={handleLeave}
          >
            <span className="cursor-pointer">News</span>
            {openMenu === "news" && (
              <div className="absolute top-6 left-0 bg-black border border-[#1f1f1f] rounded-md py-2 w-48 shadow-xl z-50">
                <Link className="dropdown-item" href="/news">Articles</Link>
                <Link className="dropdown-item" href="/news/research">Research</Link>
                <Link className="dropdown-item" href="/news/social">Social Media Commentary</Link>
              </div>
            )}
          </li>

          {/* COMMUNITY DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => handleHover("community")}
            onMouseLeave={handleLeave}
          >
            <span className="cursor-pointer">Community</span>
            {openMenu === "community" && (
              <div className="absolute top-6 left-0 bg-black border border-[#1f1f1f] rounded-md py-2 w-48 shadow-xl z-50">
                <Link className="dropdown-item" href="/community/newsletter">Newsletter</Link>
                <Link className="dropdown-item" href="/community/podcast">Podcast</Link>
              </div>
            )}
          </li>

          {/* COMPANY DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => handleHover("company")}
            onMouseLeave={handleLeave}
          >
            <span className="cursor-pointer">Company</span>
            {openMenu === "company" && (
              <div className="absolute top-6 left-0 bg-black border border-[#1f1f1f] rounded-md py-2 w-48 shadow-xl">
                <Link className="dropdown-item" href="/company/about">About</Link>
                <Link className="dropdown-item" href="/company/partners">Partners</Link>
                <Link className="dropdown-item" href="/company/become-a-partner">Become a Partner</Link>
                <Link className="dropdown-item" href="/company/careers">Join Our Team</Link>
                <Link className="dropdown-item" href="/company/contact">Contact Us</Link>
              </div>
            )}
          </li>

          <li><Link href="/merch">Merchandise</Link></li>

          {/* EDUCATOR PROGRAM — green pill */}
          <li>
            <Link
              href="/educator-program"
              className="px-4 py-2 rounded-full bg-[#52a447] text-black font-semibold hover:opacity-90 transition"
            >
              Educator Program
            </Link>
          </li>

        </ul>
      </div>

      <style jsx>{`
        .dropdown-item {
          display: block;
          padding: 8px 12px;
          color: #eaeaea;
          font-size: 13px;
        }
        .dropdown-item:hover {
          background: #111;
        }
      `}</style>
    </nav>
  );
}
