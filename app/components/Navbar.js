"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between relative z-50">
      {/* LOGO */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="CoinDoor Logo"
          width={42}
          height={42}
          className="cursor-pointer"
        />
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-[16px] font-medium">
        <Link href="/">Home</Link>
        <Link href="/markets">Markets</Link>

        {/* NEWS */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("news")}
          onMouseLeave={() => toggleMenu(null)}
        >
          <span className="cursor-pointer">News</span>
          {openMenu === "news" && (
            <div className="absolute top-full left-0 bg-white border shadow-md rounded-md w-48 py-2 flex flex-col">
              <Link className="px-4 py-2 hover:bg-gray-100" href="/news">
                Articles
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/research">
                Research
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/commentary">
                Social Media Commentary
              </Link>
            </div>
          )}
        </div>

        {/* COMMUNITY */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("community")}
          onMouseLeave={() => toggleMenu(null)}
        >
          <span className="cursor-pointer">Community</span>
          {openMenu === "community" && (
            <div className="absolute top-full left-0 bg-white border shadow-md rounded-md w-48 py-2 flex flex-col">
              <Link className="px-4 py-2 hover:bg-gray-100" href="/newsletter">
                Newsletter
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/podcast">
                Podcast
              </Link>
            </div>
          )}
        </div>

        {/* COMPANY */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("company")}
          onMouseLeave={() => toggleMenu(null)}
        >
          <span className="cursor-pointer">Company</span>
          {openMenu === "company" && (
            <div className="absolute top-full left-0 bg-white border shadow-md rounded-md w-48 py-2 flex flex-col">
              <Link className="px-4 py-2 hover:bg-gray-100" href="/about">
                About
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/partners">
                Partners
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/become-partner">
                Become a Partner
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/careers">
                Join Our Team
              </Link>
              <Link className="px-4 py-2 hover:bg-gray-100" href="/contact">
                Contact Us
              </Link>
            </div>
          )}
        </div>

        <Link href="/merch">Merchandise</Link>
        <Link href="/educator-program">Educator Program</Link>
      </div>
    </nav>
  );
}
