"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Markets", href: "/markets" },
    {
      title: "News",
      submenu: [
        { title: "Articles", href: "/news/articles" },
        { title: "Research", href: "/news/research" },
        { title: "Social Media Commentary", href: "/news/social" },
      ],
    },
    {
      title: "Community",
      submenu: [
        { title: "Newsletter", href: "/community/newsletter" },
        { title: "Podcast", href: "/community/podcast" },
      ],
    },
    {
      title: "Company",
      submenu: [
        { title: "About", href: "/company/about" },
        { title: "Partners", href: "/company/partners" },
        { title: "Become a Partner", href: "/company/become-partner" },
        { title: "Join Our Team", href: "/company/careers" },
        { title: "Contact Us", href: "/company/contact" },
      ],
    },
  ];

  return (
    <nav className="w-full bg-black border-b border-[#1d1d1d] px-8 py-3 flex items-center">
      {/* LEFT — BIGGER LOGO */}
      <Link href="/" className="flex items-center mr-10">
        <Image
          src="/logo.png"
          alt="CoinDoor Logo"
          width={65}     // bigger
          height={65}    // bigger
          className="object-contain"
        />
      </Link>

      {/* RIGHT — NAV LINKS */}
      <div className="flex-grow flex justify-between items-center">
        <div className="flex gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href || "#"}
                className="text-[#52a447] font-medium hover:opacity-90 transition"
              >
                {item.title}
              </Link>

              {/* SUBMENU */}
              {item.submenu && openMenu === item.title && (
                <div className="absolute left-0 top-full mt-2 bg-[#101010] border border-[#1d1d1d] rounded-lg shadow-lg py-2 w-56 z-50">
                  {item.submenu.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-[#52a447] hover:bg-[#1b1b1b] transition"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* EDUCATOR PROGRAM PILL */}
        <Link
          href="/educators"
          className="ml-6 px-4 py-2 rounded-full bg-[#52a447] text-black font-semibold hover:bg-[#44903a] transition"
        >
          Educator Program
        </Link>
      </div>
    </nav>
  );
}
