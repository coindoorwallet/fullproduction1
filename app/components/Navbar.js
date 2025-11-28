"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "Markets",
    href: "/markets",
  },
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
      { title: "Become a Partner", href: "/company/become-a-partner" },
      { title: "Join Our Team", href: "/company/jobs" },
      { title: "Contact Us", href: "/company/contact" },
    ],
  },
  { title: "Merchandise", href: "/merch" },
  { title: "Educator Program", href: "/educators" },
];

export default function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <nav className="w-full bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="CoinDoor Logo"
                width={80}     // ← LOGO SIZE BUFFED
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* NAV ITEMS */}
          <div className="flex-grow flex justify-center">
            <ul className="flex space-x-10">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                >
                  <Link
                    href={item.href || "#"}
                    className="text-[#52a447] font-medium hover:opacity-80 transition"
                  >
                    {item.title}
                  </Link>

                  {/* DROPDOWN */}
                  {item.children && active === index && (
                    <ul className="absolute top-full left-0 bg-black border border-neutral-700 mt-2 rounded-md shadow-lg z-50 w-56">
                      {item.children.map((child, i) => (
                        <li key={i} className="border-b border-neutral-800 last:border-none">
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-[#52a447] hover:bg-neutral-900"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
