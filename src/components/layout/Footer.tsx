import Link from "next/link";
import {
  ArrowUpRight,
  
} from "lucide-react";
import { company } from "@/data/company";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brown)] px-6 py-16 text-white sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-4xl tracking-[-0.02em]"
            >
              {company.name}
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              {company.description}
            </p>

            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-brass)]">
              {company.tagline}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <a
                href="#collections"
                className="w-fit text-sm text-white/65 transition-colors hover:text-white"
              >
                Collections
              </a>

              <a
                href="#craft"
                className="w-fit text-sm text-white/65 transition-colors hover:text-white"
              >
                Our Craft
              </a>

              <a
                href="#bespoke"
                className="w-fit text-sm text-white/65 transition-colors hover:text-white"
              >
                Bespoke
              </a>

              <a
                href="#showroom"
                className="w-fit text-sm text-white/65 transition-colors hover:text-white"
              >
                Showroom
              </a>

              <a
                href="#consultation"
                className="w-fit text-sm text-white/65 transition-colors hover:text-white"
              >
                Consultation
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Contact
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/65">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex w-fit items-center gap-2 transition-colors hover:text-white"
              >
                {company.phone}
                <ArrowUpRight size={14} />
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex w-fit items-center gap-2 transition-colors hover:text-white"
              >
                {company.email}
                <ArrowUpRight size={14} />
              </a>

              <p className="max-w-xs leading-6">
                {company.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={company.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/45 transition-colors hover:text-white"
            >
              <FaFacebook size={18} strokeWidth={1.5} />
            </a>

            <a
              href={company.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/45 transition-colors hover:text-white"
            >
              <FaInstagram size={18} strokeWidth={1.5} />
            </a>

            <a
              href={company.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/45 transition-colors hover:text-white"
            >
              <FaYoutube size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}