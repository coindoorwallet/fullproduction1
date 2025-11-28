"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Navbar
 * - Assumes this file lives at app/components/Navbar.js
 * - Uses pure CSS hover + group so submenus remain visible when cursor goes over submenu
 * - Logo bigger and reserved space so menu doesn't touch it
 * - Center nav takes available width and spreads items
 * - "Educator Program" is styled as green pill #52a447
 */

const NAV_ITEMS = [
  { key: "home", label: "Home", href: "/" },
  { key: "markets", label: "Markets", href: "/markets" },
  {
    key: "news",
    label: "News",
    href: "/news",
    submenu: [
      { label: "Articles", href: "/news/articles" },
      { label: "Research", href: "/news/research" },
      { label: "Social Media Commentary", href: "/news/social" },
    ],
  },
  {
    key: "community",
    label: "Community",
    href: "/community",
    submenu: [
      { label: "Newsletter", href: "/community/newsletter" },
      { label: "Podcast", href: "/community/podcast" },
    ],
  },
  {
    key: "company",
    label: "Company",
    href: "/company",
    submenu: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/company/partners" },
      { label: "Become a Partner", href: "/company/become-a-partner" },
      { label: "Join Our Team", href: "/company/careers" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
  { key: "merch", label: "Merchandise", href: "/merch" },
];

export default function Navbar() {
  // small state to control mobile or focused opening if necessary later
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 py-4 bg-black">
      <div className="container flex items-center">
        {/* Logo block: fixed width so menu can spread without hitting logo */}
        <div className="flex items-center mr-6" style={{ minWidth: 140 }}>
          <Link href="/">
            <a className="flex items-center gap-3">
              {/* Make logo noticeably larger */}
              <img
                src="/logo.png"
                alt="CoinDoor"
                style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 10 }}
              />
              {/* label removed intentionally (per your request) */}
            </a>
          </Link>
        </div>

        {/* Center nav: flex-1 so it expands, items spread across available width */}
        <nav className="flex-1">
          <ul className="flex items-center justify-between gap-4">
            {NAV_ITEMS.map((item) => {
              const hasSub = !!item.submenu;
              return (
                <li key={item.key} className="relative group">
                  {/* main link/button */}
                  <Link href={item.href}>
                    <a
                      className={`px-3 py-2 inline-block font-semibold ${
                        item.key === "educator" ? "pill" : ""
                      }`}
                      style={{
                        color: "#52a447", // force green titles per request
                      }}
                    >
                      {item.label}
                    </a>
                  </Link>

                  {/* submenu (if any). It's inside the same parent (.group) so hovering the submenu keeps it visible) */}
                  {hasSub && (
                    <div className="absolute left-0 mt-2 w-56 z-50 hidden group-hover:block">
                      <div className="card p-2">
                        <ul>
                          {item.submenu.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href}>
                                <a className="block px-3 py-2 rounded hover:bg-neutral-900">{s.label}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}

            {/* Educator Program as pill to the far right of nav (if you want it separated visually) */}
            <li>
              <Link href="/educator-program">
                <a
                  className="px-4 py-2 rounded-full font-semibold"
                  style={{
                    background: "#52a447",
                    color: "#001f0a",
                  }}
                >
                  Educator Program
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* optional right space for icons / login (keeps navbar balanced) */}
        <div style={{ minWidth: 140 }} />
      </div>
    </header>
  );
}
