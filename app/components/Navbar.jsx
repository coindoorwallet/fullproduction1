"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CoinDoor Logo"
            width={52}
            height={52}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">

          <NavItem label="Home" href="/" />

          <NavItem label="Markets" href="/markets" />

          <Dropdown label="News">
            <DropdownItem label="Articles" href="/news/articles" />
            <DropdownItem label="Research" href="/news/research" />
            <DropdownItem label="Social Media Commentary" href="/news/social" />
          </Dropdown>

          <Dropdown label="Community">
            <DropdownItem label="Newsletter" href="/community/newsletter" />
            <DropdownItem label="Podcast" href="/community/podcast" />
          </Dropdown>

          <Dropdown label="Company">
            <DropdownItem label="About" href="/company/about" />
            <DropdownItem label="Partners" href="/company/partners" />
            <DropdownItem label="Become a Partner" href="/company/become-a-partner" />
            <DropdownItem label="Join Our Team" href="/company/careers" />
            <DropdownItem label="Contact Us" href="/company/contact" />
          </Dropdown>

          <NavItem label="Merchandise" href="/merch" />

          <NavItem label="Educator Program" href="/educators" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 pb-6 space-y-3 border-t border-white/10">

          <MobileItem label="Home" href="/" />
          <MobileItem label="Markets" href="/markets" />

          <MobileDropdown label="News">
            <MobileItem label="Articles" href="/news/articles" />
            <MobileItem label="Research" href="/news/research" />
            <MobileItem label="Social Media Commentary" href="/news/social" />
          </MobileDropdown>

          <MobileDropdown label="Community">
            <MobileItem label="Newsletter" href="/community/newsletter" />
            <MobileItem label="Podcast" href="/community/podcast" />
          </MobileDropdown>

          <MobileDropdown label="Company">
            <MobileItem label="About" href="/company/about" />
            <MobileItem label="Partners" href="/company/partners" />
            <MobileItem label="Become a Partner" href="/company/become-a-partner" />
            <MobileItem label="Join Our Team" href="/company/careers" />
            <MobileItem label="Contact Us" href="/company/contact" />
          </MobileDropdown>

          <MobileItem label="Merchandise" href="/merch" />
          <MobileItem label="Educator Program" href="/educators" />
        </div>
      )}
    </nav>
  );
}

/* ---------------- COMPONENTS ---------------- */

function NavItem({ label, href }) {
  return (
    <Link href={href} className="hover:text-blue-400 transition">
      {label}
    </Link>
  );
}

function Dropdown({ label, children }) {
  return (
    <div className="relative group">
      <button className="hover:text-blue-400 transition">{label}</button>

      {/* Dropdown Menu */}
      <div className="absolute left-0 mt-3 hidden group-hover:block bg-black/95 border border-white/10 shadow-xl rounded-lg py-3 w-56">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ label, href }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 hover:bg-white/10 transition text-sm"
    >
      {label}
    </Link>
  );
}

/* Mobile helpers */

function MobileItem({ label, href }) {
  return (
    <Link href={href} className="block py-2 text-lg font-light">
      {label}
    </Link>
  );
}

function MobileDropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-2 text-lg font-light"
      >
        {label}
      </button>

      {open && <div className="ml-4 space-y-2">{children}</div>}
    </div>
  );
}
