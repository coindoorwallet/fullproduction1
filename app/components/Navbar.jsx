"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleEnter = (menu) => setOpenMenu(menu);
  const handleLeave = () => setOpenMenu(null);

  return (
    <nav className="bg-black text-[#52a447] px-8 py-4 flex items-center justify-between">
      
      {/* LOGO */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="CoinDoor Logo"
          width={80}    // ← MAKE LOGO BIGGER
          height={80}
          priority
        />
      </div>

      {/* NAV ITEMS */}
      <ul className="flex items-center gap-10 text-lg font-medium">
        
        <li><a href="/" className="hover:opacity-70">Home</a></li>
        <li><a href="/markets" className="hover:opacity-70">Markets</a></li>

        {/* NEWS DROPDOWN */}
        <li
          className="relative"
          onMouseEnter={() => handleEnter("news")}
          onMouseLeave={handleLeave}
        >
          <span className="cursor-pointer hover:opacity-70">News</span>

          {openMenu === "news" && (
            <div className="absolute left-0 top-full bg-black border border-[#52a447] mt-2 py-2 w-56 z-50">
              <a href="/news/articles" className="block px-4 py-2 hover:bg-[#111]">Articles</a>
              <a href="/news/research" className="block px-4 py-2 hover:bg-[#111]">Research</a>
              <a href="/news/social" className="block px-4 py-2 hover:bg-[#111]">Social Media Commentary</a>
            </div>
          )}
        </li>

        {/* COMMUNITY DROPDOWN */}
        <li
          className="relative"
          onMouseEnter={() => handleEnter("community")}
          onMouseLeave={handleLeave}
        >
          <span className="cursor-pointer hover:opacity-70">Community</span>

          {openMenu === "community" && (
            <div className="absolute left-0 top-full bg-black border border-[#52a447] mt-2 py-2 w-56 z-50">
              <a href="/community/newsletter" className="block px-4 py-2 hover:bg-[#111]">Newsletter</a>
              <a href="/community/podcast" className="block px-4 py-2 hover:bg-[#111]">Podcast</a>
            </div>
          )}
        </li>

        {/* COMPANY DROPDOWN */}
        <li
          className="relative"
          onMouseEnter={() => handleEnter("company")}
          onMouseLeave={handleLeave}
        >
          <span className="cursor-pointer hover:opacity-70">Company</span>

          {openMenu === "company" && (
            <div className="absolute left-0 top-full bg-black border border-[#52a447] mt-2 py-2 w-56 z-50">
              <a href="/company/about" className="block px-4 py-2 hover:bg-[#111]">About</a>
              <a href="/company/partners" className="block px-4 py-2 hover:bg-[#111]">Partners</a>
              <a href="/company/become-a-partner" className="block px-4 py-2 hover:bg-[#111]">Become a Partner</a>
              <a href="/company/join-our-team" className="block px-4 py-2 hover:bg-[#111]">Join Our Team</a>
              <a href="/company/contact" className="block px-4 py-2 hover:bg-[#111]">Contact Us</a>
            </div>
          )}
        </li>

        <li><a href="/merch" className="hover:opacity-70">Merchandise</a></li>

        {/* EDUCATOR PROGRAM (GREEN PILL) */}
        <li>
          <a 
            href="/educator-program"
            className="bg-[#52a447] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#44903c]"
          >
            Educator Program
          </a>
        </li>

      </ul>
    </nav>
  );
}
