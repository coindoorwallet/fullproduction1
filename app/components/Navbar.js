"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Markets", href: "/markets" },
  {
    label: "News",
    children: [
      { label: "Articles", href: "/news" },
      { label: "Research", href: "/research" },
      { label: "Social Media Commentary", href: "/social" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Newsletter", href: "/newsletter" },
      { label: "Podcast", href: "/podcast" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Become a Partner", href: "/become-partner" },
      { label: "Join Our Team", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  { label: "Merchandise", href: "/merch" },
  { label: "Educator Program", href: "/educator" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO — INCREASED SIZE */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CoinDoor Logo"
            width={160}    // ← BIGGER
            height={60}
            className="cursor-pointer"
          />
        </Link>

        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href || "#"}
                className="text-[#52a447] font-semibold hover:text-white transition"
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.children && openMenu === index && (
                <ul className="absolute left-0 mt-2 bg-black border border-[#52a447] rounded-lg shadow-lg py-2 w-56 z-50">
                  {item.children.map((child, i) => (
                    <li key={i}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-white hover:bg-[#52a447] hover:text-black transition"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
