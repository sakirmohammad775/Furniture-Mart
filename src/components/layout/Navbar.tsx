"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "Our Craft",
    href: "#craft",
  },
  {
    label: "About",
    href: "#about",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-charcoal)]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-500 md:px-8 lg:px-12 ${
          scrolled ? "py-3.5" : "py-5"
        }`}
      >
       <Logo></Logo>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#consultation"
            className="border border-white/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[var(--color-charcoal)]"
          >
            Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 flex h-11 w-11 items-center justify-center text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-0 min-h-screen bg-[var(--color-charcoal)] px-6 pb-10 pt-28 transition-all duration-300 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-[var(--color-ivory)] transition-colors hover:text-[var(--color-brass)]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#consultation"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-fit border border-[var(--color-brass)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-brass)] hover:text-[var(--color-charcoal)]"
          >
            Request Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}