"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState({ news:false, community:false, company:false });

  function toggle(menu, val){
    setOpen(prev => ({ ...prev, [menu]: val }));
  }

  return (
    <nav className="border-b border-neutral-800 py-4 bg-black">
      <div className="container flex items-center justify-between">
        {/* Logo only (no text) */}
        <Link href="/">
          <img src="/logo.png" alt="CoinDoor" width="56" height="56" style={{ borderRadius: 8 }} />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="header-link">Home</Link>

          <Link href="/markets" className="header-link">Markets</Link>

          {/* News dropdown */}
          <div
            onMouseEnter={() => toggle("news", true)}
            onMouseLeave={() => toggle("news", false)}
            className="relative"
          >
            <button className="header-link">News</button>

            <div
              className={`absolute right-0 mt-2 w-48 bg-[var(--panel)] border border-neutral-800 rounded shadow-lg z-50 ${open.news ? "block" : "hidden"}`}
              onMouseEnter={() => toggle("news", true)}
              onMouseLeave={() => toggle("news", false)}
            >
              <Link href="/news/articles" className="block px-4 py-2 hover:bg-neutral-900">Articles</Link>
              <Link href="/news/research" className="block px-4 py-2 hover:bg-neutral-900">Research</Link>
              <Link href="/news/social" className="block px-4 py-2 hover:bg-neutral-900">Social Media Commentary</Link>
            </div>
          </div>

          {/* Community dropdown */}
          <div
            onMouseEnter={() => toggle("community", true)}
            onMouseLeave={() => toggle("community", false)}
            className="relative"
          >
            <button className="header-link">Community</button>

            <div
              className={`absolute right-0 mt-2 w-40 bg-[var(--panel)] border border-neutral-800 rounded shadow-lg z-50 ${open.community ? "block" : "hidden"}`}
              onMouseEnter={() => toggle("community", true)}
              onMouseLeave={() => toggle("community", false)}
            >
              <Link href="/newsletter" className="block px-4 py-2 hover:bg-neutral-900">Newsletter</Link>
              <Link href="/podcast" className="block px-4 py-2 hover:bg-neutral-900">Podcast</Link>
            </div>
          </div>

          {/* Company dropdown */}
          <div
            onMouseEnter={() => toggle("company", true)}
            onMouseLeave={() => toggle("company", false)}
            className="relative"
          >
            <button className="header-link">Company</button>

            <div
              className={`absolute right-0 mt-2 w-56 bg-[var(--panel)] border border-neutral-800 rounded shadow-lg z-50 ${open.company ? "block" : "hidden"}`}
              onMouseEnter={() => toggle("company", true)}
              onMouseLeave={() => toggle("company", false)}
            >
              <Link href="/about" className="block px-4 py-2 hover:bg-neutral-900">About</Link>
              <Link href="/partners" className="block px-4 py-2 hover:bg-neutral-900">Partners</Link>
              <Link href="/partners/apply" className="block px-4 py-2 hover:bg-neutral-900">Become a Partner</Link>
              <Link href="/careers" className="block px-4 py-2 hover:bg-neutral-900">Join Our Team</Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-neutral-900">Contact Us</Link>
            </div>
          </div>

          <Link href="/merchandise" className="header-link">Merchandise</Link>

          <Link href="/educator-program" className="pill">Educator Program</Link>
        </div>
      </div>
    </nav>
  );
}
