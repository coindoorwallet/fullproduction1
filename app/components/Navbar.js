"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = {
    news: [
      { label: "Articles", href: "/news/articles" },
      { label: "Research", href: "/news/research" },
      { label: "Social Media Commentary", href: "/news/social" },
    ],
    community: [
      { label: "Newsletter", href: "/community/newsletter" },
      { label: "Podcast", href: "/community/podcast" },
    ],
    company: [
      { label: "About", href: "/company/about" },
      { label: "Partners", href: "/company/partners" },
      { label: "Become a Partner", href: "/company/become-partner" },
      { label: "Join Our Team", href: "/company/join-our-team" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CoinDoor Logo"
            width={120}
            height={40}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex space-x-8 items-center text-white font-medium">
          <NavItem label="Home" href="/" />

          <NavItem label="Markets" href="/markets" />

          <DropdownMenu
            label="News"
            menu={menuItems.news}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            id="news"
          />

          <DropdownMenu
            label="Community"
            menu={menuItems.community}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            id="community"
          />

          <DropdownMenu
            label="Company"
            menu={menuItems.company}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            id="company"
          />

          <NavItem label="Merchandise" href="/merch" />
          <NavItem label="Educator Program" href="/educator-program" />
        </div>

        {/* --- MOBILE BUTTON --- */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 pb-4 space-y-4">
          <MobileItem label="Home" href="/" />
          <MobileItem label="Markets" href="/markets" />

          <MobileDropdown label="News" items={menuItems.news} />
          <MobileDropdown label="Community" items={menuItems.community} />
          <MobileDropdown label="Company" items={menuItems.company} />

          <MobileItem label="Merchandise" href="/merch" />
          <MobileItem label="Educator Program" href="/educator-program" />
        </div>
      )}
    </nav>
  );
}

/* ---------------------------------------------------------------------- */
/* COMPONENTS */
/* ---------------------------------------------------------------------- */

function NavItem({ label, href }) {
  return (
    <Link href={href} className="hover:text-gray-300 transition">
      {label}
    </Link>
  );
}

function DropdownMenu({ label, menu, openMenu, setOpenMenu, id }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button className="flex items-center gap-1 hover:text-gray-300 transition">
        {label}
        <ChevronDown size={16} />
      </button>

      {openMenu === id && (
        <div className="absolute left-0 mt-3 w-56 bg-black border border-white/10 rounded-xl shadow-xl py-3 z-50"
             onMouseEnter={() => setOpenMenu(id)}
             onMouseLeave={() => setOpenMenu(null)}
        >
          {menu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileItem({ label, href }) {
  return (
    <Link href={href} className="block">
      {label}
    </Link>
  );
}

function MobileDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full text-left flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        {label} <ChevronDown size={16} />
      </button>

      {open && (
        <div className="ml-4 mt-2 space-y-2">
          {items.map((i) => (
            <Link key={i.label} href={i.href} className="block text-sm">
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
