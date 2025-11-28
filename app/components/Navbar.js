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
        { title: "Become a Partner", href: "/company/become-a-partner" },
        { title: "Join Our Team", href: "/company/careers" },
        { title: "Contact Us", href: "/company/contact" },
      ],
    },
    { title: "Merchandise", href: "/merch" },
    { title: "Educator Program", href: "/educator-program" },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO ONLY */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="CoinDoor Logo" 
              className="h-14 w-auto"     // larger logo
            />
          </Link>

          {/* NAV ITEMS */}
          <ul className="flex gap-10">
            {menuItems.map((item, idx) => (
              <li 
                key={idx} 
                className="relative"
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link 
                  href={item.href ?? "#"} 
                  className="text-gray-800 font-medium hover:text-black transition"
                >
                  {item.title}
                </Link>

                {/* DROPDOWN */}
                {item.submenu && openMenu === item.title && (
                  <ul className="absolute left-0 mt-3 bg-white border border-gray-200 shadow-lg rounded-lg w-56 py-3"
                      onMouseEnter={() => setOpenMenu(item.title)}
                      onMouseLeave={() => setOpenMenu(null)}
                  >
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link 
                          href={sub.href} 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black"
                        >
                          {sub.title}
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
    </nav>
  );
}
