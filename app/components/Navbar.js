"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { 
    name: "Markets", 
    href: "/markets" 
  },
  {
    name: "News",
    submenu: [
      { name: "Articles", href: "/news" },
      { name: "Research", href: "/news/research" },
      { name: "Social Media Commentary", href: "/news/social" },
    ],
  },
  {
    name: "Community",
    submenu: [
      { name: "Newsletter", href: "/community/newsletter" },
      { name: "Podcast", href: "/community/podcast" },
    ],
  },
  {
    name: "Company",
    submenu: [
      { name: "About", href: "/company/about" },
      { name: "Partners", href: "/company/partners" },
      { name: "Become a Partner", href: "/company/become-partner" },
      { name: "Join Our Team", href: "/company/careers" },
      { name: "Contact Us", href: "/company/contact" },
    ],
  },
  {
    name: "Merchandise",
    href: "/merch",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="w-full bg-white shadow-md py-4 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CoinDoor Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* RIGHT — NAVIGATION */}
        <div className="flex items-center gap-10">

          {menuItems.map((item, index) =>
            item.submenu ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="text-[#52a447] font-semibold cursor-pointer">
                  {item.name}
                </span>

                {openMenu === item.name && (
                  <div className="absolute left-0 top-8 bg-white rounded-md shadow-lg py-2 w-56 z-50">
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={index} href={item.href}>
                <span className="text-[#52a447] font-semibold cursor-pointer">
                  {item.name}
                </span>
              </Link>
            )
          )}

          {/* EDUCATOR PROGRAM PILL */}
          <Link
            href="/educators"
            className="bg-[#52a447] px-4 py-2 rounded-full text-white font-semibold hover:bg-green-700 transition"
          >
            Educator Program
          </Link>
        </div>
      </div>
    </nav>
  );
}
