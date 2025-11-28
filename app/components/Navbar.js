"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = {
    News: ["Articles", "Research", "Social Media Commentary"],
    Community: ["Newsletter", "Podcast"],
    Company: ["About", "Partners", "Become a Partner", "Join Our Team", "Contact Us"],
  };

  return (
    <nav className="w-full bg-black border-b border-[#1f1f1f] px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* LOGO */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          width={52}       // bigger
          height={52}      // bigger
          alt="CoinDoor Logo"
        />
      </Link>

      {/* MENU */}
      <div className="flex space-x-8 text-green-500 font-semibold text-lg">
        
        <Link href="/">Home</Link>
        <Link href="/markets">Markets</Link>

        {/* DROPDOWN GROUPS */}
        {["News", "Community", "Company"].map((section) => (
          <div
            key={section}
            className="relative"
            onMouseEnter={() => setOpenMenu(section)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer">{section}</span>

            {openMenu === section && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-[#1f1f1f] rounded-lg shadow-lg py-2">
                {menuItems[section].map((item) => (
                  <Link
                    key={item}
                    href={`/${section.toLowerCase()}/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 text-green-500 hover:bg-[#111]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/merchandise">Merchandise</Link>
        <Link href="/educator-program">Educator Program</Link>
      </div>
    </nav>
  );
}
