"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "/markets" },
    {
      name: "News",
      sub: [
        { name: "Articles", href: "/news" },
        { name: "Research", href: "/news/research" },
        { name: "Social Media Commentary", href: "/news/social" },
      ],
    },
    {
      name: "Community",
      sub: [
        { name: "Newsletter", href: "/community/newsletter" },
        { name: "Podcast", href: "/community/podcast" },
      ],
    },
    {
      name: "Company",
      sub: [
        { name: "About", href: "/company/about" },
        { name: "Partners", href: "/company/partners" },
        { name: "Become a Partner", href: "/company/become-a-partner" },
        { name: "Join Our Team", href: "/company/careers" },
        { name: "Contact Us", href: "/company/contact" },
      ],
    },
    { name: "Merchandise", href: "/merch" },
    { name: "Educator Program", href: "/educator-program" },
  ];

  return (
    <nav className="w-full bg-black/80 backdrop-blur border-b border-white/10 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="CoinDoor Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href || "#"}
                className="hover:text-gray-300 transition"
              >
                {item.name}
              </Link>

              {item.sub && openMenu === index && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-black border border-white/10 rounded-md shadow-lg py-2">
                  {item.sub.map((subItem, sIdx) => (
                    <Link
                      key={sIdx}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}
