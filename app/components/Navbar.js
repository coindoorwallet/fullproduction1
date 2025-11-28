"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "news" | "community" | "company" | null
  const containerRef = useRef(null);
  useOutsideClick(containerRef, () => {
    setOpenMenu(null);
    setMobileOpen(false);
  });

  const navItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "markets", label: "Markets", href: "/markets" },
    {
      key: "news",
      label: "News",
      submenu: [
        { label: "Articles", href: "/news/articles" },
        { label: "Research", href: "/news/research" },
        { label: "Social Media Commentary", href: "/news/social" },
      ],
    },
    {
      key: "community",
      label: "Community",
      submenu: [
        { label: "Newsletter", href: "/community/newsletter" },
        { label: "Podcast", href: "/community/podcast" },
      ],
    },
    {
      key: "company",
      label: "Company",
      submenu: [
        { label: "About", href: "/about" },
        { label: "Partners", href: "/company/partners" },
        { label: "Become a Partner", href: "/company/become-a-partner" },
        { label: "Join Our Team", href: "/company/join" },
        { label: "Contact Us", href: "/company/contact" },
      ],
    },
    { key: "merch", label: "Merchandise", href: "/merchandise" },
    { key: "educator", label: "Educator Program", href: "/educator-program", pill: true },
  ];

  return (
    <header ref={containerRef} className="border-b border-neutral-800">
      <div className="container flex items-center justify-between py-4">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="CoinDoor logo" width="44" height="44" style={{ borderRadius: 8 }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            if (!item.submenu) {
              return item.pill ? (
                <Link
                  key={item.key}
                  href={item.href}
                  className="px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold"
                >
                  {item.label}
                </Link>
              ) : (
                <Link key={item.key} href={item.href} className="header-link">
                  {item.label}
                </Link>
              );
            }

            // item has submenu
            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.key)}
                onMouseLeave={() => setOpenMenu((prev) => (prev === item.key ? null : prev))}
              >
                <button
                  onClick={() => setOpenMenu((prev) => (prev === item.key ? null : item.key))}
                  aria-haspopup="menu"
                  aria-expanded={openMenu === item.key}
                  className="header-link flex items-center gap-2"
                >
                  {item.label}
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  role="menu"
                  className={`absolute right-0 mt-3 w-56 rounded-lg border border-neutral-800 bg-[var(--panel)] shadow-lg transition-opacity ${
                    openMenu === item.key ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {item.submenu.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm hover:bg-neutral-900"
                        onClick={() => setOpenMenu(null)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded hover:bg-white/5"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden border-t border-neutral-800 ${mobileOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => {
            if (!item.submenu) {
              return (
                <Link key={item.key} href={item.href} className="block px-2 py-2 rounded hover:bg-neutral-900">
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.key} className="border-t border-neutral-800">
                <button
                  onClick={() => setOpenMenu((prev) => (prev === item.key ? null : item.key))}
                  className="w-full text-left px-2 py-2 flex items-center justify-between"
                >
                  {item.label}
                  <span className="opacity-70">{openMenu === item.key ? "−" : "+"}</span>
                </button>

                {openMenu === item.key && (
                  <div className="pl-4">
                    {item.submenu.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-2 py-2 text-sm hover:bg-neutral-900">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
