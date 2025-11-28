"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Markets", href: "/markets" },
    {
      title: "News",
      children: [
        { title: "Articles", href: "/news/articles" },
        { title: "Research", href: "/news/research" },
        { title: "Social Media Commentary", href: "/news/social" },
      ],
    },
    {
      title: "Community",
      children: [
        { title: "Newsletter", href: "/community/newsletter" },
        { title: "Podcast", href: "/community/podcast" },
      ],
    },
    {
      title: "Company",
      children: [
        { title: "About", href: "/company/about" },
        { title: "Partners", href: "/company/partners" },
        { title: "Become a Partner", href: "/company/become-partner" },
        { title: "Join Our Team", href: "/company/careers" },
        { title: "Contact Us", href: "/company/contact" },
      ],
    },
    {
      title: "Merchandise",
      href: "/merch",
    },
    {
      title: "Educator Program",
      href: "/educator",
      pill: true,
    },
  ];

  return (
    <nav className="w-full bg-[#0c0f0d] border-b border-[#1d251c]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO — increased size */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="CoinDoor Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </Link>

        {/* MENU */}
        <ul className="flex items-center space-x-10">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* Main title */}
              <Link
                href={item.href || "#"}
                className={`text-white hover:text-[#52a447] transition ${
                  item.pill
                    ? "bg-[#52a447] text-black px-4 py-2 rounded-full font-medium ml-4"
                    : "text-[#52a447]"
                }`}
              >
                {item.title}
              </Link>

              {/* Submenu */}
              {item.children && openMenu === item.title && (
                <div className="absolute left-0 mt-3 bg-[#111712] border border-[#1d251c] rounded-lg shadow-lg z-30 min-w-[220px]">
                  {item.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.href}
                      className="block px-4 py-3 text-white hover:bg-[#1a2219] hover:text-[#52a447]"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
