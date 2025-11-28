"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const linkClasses =
    "text-[#52a447] font-semibold hover:text-white transition";

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "/markets" },
    {
      name: "News",
      children: [
        { name: "Articles", href: "/news/articles" },
        { name: "Research", href: "/news/research" },
        { name: "Social Media Commentary", href: "/news/social" },
      ],
    },
    {
      name: "Community",
      children: [
        { name: "Newsletter", href: "/community/newsletter" },
        { name: "Podcast", href: "/community/podcast" },
      ],
    },
    {
      name: "Company",
      children: [
        { name: "About", href: "/company/about" },
        { name: "Partners", href: "/company/partners" },
        { name: "Become a Partner", href: "/company/become-partner" },
        { name: "Join Our Team", href: "/company/careers" },
        { name: "Contact Us", href: "/company/contact" },
      ],
    },
    { name: "Merchandise", href: "/merch" },
  ];

  return (
    <nav className="w-full bg-black flex items-center justify-between px-10 py-4 shadow-lg sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="CoinDoor Logo"
          width={55}
          height={55}
          className="object-contain"
        />
      </div>

      {/* MENU */}
      <div className="flex gap-10 items-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenMenu(item.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            {!item.children ? (
              <Link href={item.href} className={linkClasses}>
                {item.name}
              </Link>
            ) : (
              <span className={linkClasses + " cursor-pointer"}>
                {item.name}
              </span>
            )}

            {/* DROPDOWN */}
            {item.children && openMenu === item.name && (
              <div className="absolute left-0 mt-2 bg-black border border-[#52a447] rounded-md shadow-lg w-56">
                {item.children.map((sub, i) => (
                  <Link
                    key={i}
                    href={sub.href}
                    className="block px-4 py-2 text-[#52a447] hover:bg-[#52a447] hover:text-black transition"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* EDUCATOR PROGRAM BUTTON */}
        <Link
          href="/educator-program"
          className="px-4 py-2 rounded-full bg-[#52a447] text-black font-bold hover:bg-white hover:text-black transition"
        >
          Educator Program
        </Link>
      </div>
    </nav>
  );
}
