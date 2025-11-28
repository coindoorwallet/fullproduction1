"use client";
import { useState } from "react";
import Image from "next/image";

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
        { title: "Join Our Team", href: "/company/jobs" },
        { title: "Contact Us", href: "/company/contact" },
      ],
    },
    { title: "Merchandise", href: "/merch" },
    {
      title: "Educator Program",
      href: "/educators",
      pill: true,
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LOGO */}
        <a href="/" className="logo-container">
          <Image
            src="/logo.png"
            width={90}
            height={90}
            alt="CoinDoor Logo"
            className="logo-img"
          />
        </a>

        {/* MENU */}
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href || "#"}
                className={`menu-link ${item.pill ? "pill" : ""}`}
              >
                {item.title}
              </a>

              {item.submenu && openMenu === index && (
                <ul className="submenu">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <a href={sub.href} className="submenu-link">
                        {sub.title}
                      </a>
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
