"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="w-full bg-black text-white border-b border-[#1A1A1A] px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          width={42}         // bigger logo
          height={42}
          alt="CoinDoor Logo"
          className="object-contain"
        />
      </Link>

      {/* NAV LINKS */}
      <div className="flex items-center gap-8 relative">
        
        {/* HOME */}
        <Link href="/" className="hover:text-[#00ff7f] transition">Home</Link>

        {/* MARKETS */}
        <Link href="/markets" className="hover:text-[#00ff7f] transition">Markets</Link>

        {/* NEWS (dropdown) */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("news")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <span className="cursor-pointer hover:text-[#00ff7f]">News</span>

          {openMenu === "news" && (
            <div className="absolute top-full left-0 bg-[#111] border border-[#222] rounded-md shadow-lg py-2 w-56">
              <Link href="/news" className="block px-4 py-2 hover:bg-[#1d1d1d]">Articles</Link>
              <Link href="/news/research" className="block px-4 py-2 hover:bg-[#1d1d1d]">Research</Link>
              <Link href="/news/social" className="block px-4 py-2 hover:bg-[#1d1d1d]">Social Media Commentary</Link>
            </div>
          )}
        </div>

        {/* COMMUNITY (dropdown) */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("community")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <span className="cursor-pointer hover:text-[#00ff7f]">Community</span>

          {openMenu === "community" && (
            <div className="absolute top-full left-0 bg-[#111] border border-[#222] rounded-md shadow-lg py-2 w-56">
              <Link href="/community/newsletter" className="block px-4 py-2 hover:bg-[#1d1d1d]">Newsletter</Link>
              <Link href="/community/podcast" className="block px-4 py-2 hover:bg-[#1d1d1d]">Podcast</Link>
            </div>
          )}
        </div>

        {/* COMPANY (dropdown) */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("company")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <span className="cursor-pointer hover:text-[#00ff7f]">Company</span>

          {openMenu === "company" && (
            <div className="absolute top-full left-0 bg-[#111] border border-[#222] rounded-md shadow-lg py-2 w-56">
              <Link href="/company/about" className="block px-4 py-2 hover:bg-[#1d1d1d]">About</Link>
              <Link href="/company/partners" className="block px-4 py-2 hover:bg-[#1d1d1d]">Partners</Link>
              <Link href="/company/become-partner" className="block px-4 py-2 hover:bg-[#1d1d1d]">Become a Partner</Link>
              <Link href="/company/careers" className="block px-4 py-2 hover:bg-[#1d1d1d]">Join Our Team</Link>
              <Link href="/company/contact" className="block px-4 py-2 hover:bg-[#1d1d1d]">Contact Us</Link>
            </div>
          )}
        </div>

        {/* MERCH */}
        <Link href="/merch" className="hover:text-[#00ff7f] transition">Merchandise</Link>

        {/* EDUCATOR PROGRAM */}
        <Link href="/educators" className="hover:text-[#00ff7f] transition">Educator Program</Link>
      </div>
    </nav>
  );
}
