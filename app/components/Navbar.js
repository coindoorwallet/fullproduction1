"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleEnter = (menu) => setOpenMenu(menu);
  const handleLeave = () => setOpenMenu(null);

  return (
    <nav className="w-full bg-black border-b border-green-500/20 px-10 py-4 flex justify-between items-center">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="CoinDoor Logo"
          width={55}         // ⬅ Bigger logo
          height={55}
          className="object-contain"
        />
      </Link>

      {/* NAV LINKS */}
      <ul className="flex gap-10 text-green-500 font-medium text-lg">
        <li className="relative"
            onMouseEnter={() => handleEnter("markets")}
            onMouseLeave={handleLeave}>
          <Link href="/markets">Markets</Link>
        </li>

        {/* NEWS (with submenu) */}
        <li className="relative"
            onMouseEnter={() => handleEnter("news")}
            onMouseLeave={handleLeave}>
          <span className="cursor-pointer">News</span>

          {openMenu === "news" && (
            <ul className="absolute top-full left-0 mt-2 bg-black border border-green-500/30 rounded-md shadow-lg p-3 w-56">
              <li className="py-2 hover:text-white">
                <Link href="/news/articles">Articles</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/news/research">Research</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/news/social">Social Media Commentary</Link>
              </li>
            </ul>
          )}
        </li>

        {/* COMMUNITY (submenu) */}
        <li className="relative"
            onMouseEnter={() => handleEnter("community")}
            onMouseLeave={handleLeave}>
          <span className="cursor-pointer">Community</span>

          {openMenu === "community" && (
            <ul className="absolute top-full left-0 mt-2 bg-black border border-green-500/30 rounded-md shadow-lg p-3 w-56">
              <li className="py-2 hover:text-white">
                <Link href="/community/newsletter">Newsletter</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/community/podcast">Podcast</Link>
              </li>
            </ul>
          )}
        </li>

        {/* COMPANY (submenu) */}
        <li className="relative"
            onMouseEnter={() => handleEnter("company")}
            onMouseLeave={handleLeave}>
          <span className="cursor-pointer">Company</span>

          {openMenu === "company" && (
            <ul className="absolute top-full left-0 mt-2 bg-black border border-green-500/30 rounded-md shadow-lg p-3 w-56">
              <li className="py-2 hover:text-white">
                <Link href="/company/about">About</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/company/partners">Partners</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/company/become-partner">Become a Partner</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/company/careers">Join Our Team</Link>
              </li>
              <li className="py-2 hover:text-white">
                <Link href="/company/contact">Contact Us</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/merch">Merchandise</Link>
        </li>

        <li>
          <Link href="/educators">Educator Program</Link>
        </li>
      </ul>
    </nav>
  );
}
