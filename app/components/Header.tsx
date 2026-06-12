"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavLinks = (mobile = false) =>
    navItems.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          onClick={() => mobile && setIsOpen(false)}
          className="text-white hover:text-purple-400 transition-colors"
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/">
            <Image
              src={`${basePath}/logo/logo.png`}
              alt="Logo"
              width={30}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {renderNavLinks()}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 rounded-lg bg-[#1a0d31] p-4">
            {renderNavLinks(true)}
          </ul>
        </div>
      </nav>
    </header>
  );
}