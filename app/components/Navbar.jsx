"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { title: "Markets", link: "/markets" },

    {
      title: "News",
      submenu: [
        { title: "Articles", link: "/news" },
        { title: "Research", link: "/research" },
        { title: "Social Media", link: "/social" },
      ],
    },

    {
      title: "Community",
      submenu: [
        { title: "Newsletter", link: "/newsletter" },
        { title: "Podcast", link: "/podcast" },
        { title: "Developers Forum", link: "/forum" },
        { title: "Make a Donation", link: "/donate" },
        { title: "Satoshi's Secret", link: "/satoshi" },
      ],
    },

    {
      title: "Company",
      submenu: [
        { title: "About Us", link: "/about" },
        { title: "Contact Us", link: "/contact" },
        { title: "Follow Us", link: "/follow" },
        { title: "Join our Team", link: "/careers" },
        { title: "Our Passion", link: "/passion" },
        { title: "Corporate Profile", link: "/profile" },
      ],
    },

    { title: "Merchandise", link: "/merch" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          CoinDoor
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Top-level item */}
              <Link
                href={item.link ?? "#"}
                className="hover:text-green-400 transition-colors"
              >
                {item.title}
              </Link>

              {/* Submenu */}
              {item.submenu && openDropdown === item.title && (
                <div className="absolute left-0 top-full mt-2 bg-[#0d0d0d] border border-white/10 rounded-lg shadow-xl p-4 min-w-[200px]">
                  <div className="flex flex-col gap-3">
                    {item.submenu.map((sub, sidx) => (
                      <Link
                        key={sidx}
                        href={sub.link}
                        className="text-sm hover:text-green-400 transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* EDUCATOR PROGRAM BUTTON */}
          <Link
            href="/educator-program"
            className="px-4 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition-all"
          >
            Educator Program
          </Link>
        </div>
      </div>
    </nav>
  );
}
