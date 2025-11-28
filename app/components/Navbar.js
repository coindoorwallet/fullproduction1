"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "/markets" },
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
        { name: "Join Our Team", href: "/company/join" },
        { name: "Contact Us", href: "/company/contact" },
      ],
    },
    { name: "Merchandise", href: "/merch" },
  ];

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "#0D0D0D", padding: "14px 0" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CoinDoor Logo"
            width={70}
            height={70}
            className="cursor-pointer"
            style={{ width: "70px", height: "auto" }} 
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center space-x-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {!item.submenu ? (
                <Link
                  href={item.href}
                  className="font-medium text-[17px]"
                  style={{ color: "#52A447" }}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className="font-medium text-[17px] cursor-pointer"
                  style={{ color: "#52A447" }}
                >
                  {item.name}
                </span>
              )}

              {/* SUBMENU */}
              {item.submenu && openMenu === index && (
                <div
                  className="absolute left-0 mt-3 w-56 rounded-md shadow-md py-2"
                  style={{ backgroundColor: "#1A1A1A", border: "1px solid #333" }}
                >
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block px-4 py-2 text-sm hover:bg-[#111]"
                      style={{ color: "#EAEAEA" }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* EDUCATOR PROGRAM PILL */}
          <Link
            href="/educator-program"
            className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "#52A447",
              color: "white",
              marginLeft: "10px",
            }}
          >
            Educator Program
          </Link>
        </div>
      </div>
    </nav>
  );
}
