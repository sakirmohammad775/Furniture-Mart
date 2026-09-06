"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FinalCTA() {
  return (
    <section className="bg-[var(--color-cream)] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="">
          Your Space, Your Story
        </SectionLabel>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl font-display text-5xl leading-[0.92] tracking-[-0.03em] text-[var(--color-brown)] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Have a space
            <span className="block italic text-[var(--color-brass)]">
              in mind?
            </span>
          </motion.h2>

          <a
            href="#consultation"
            className="group flex w-fit items-center gap-5 border-b border-[var(--color-brown)] pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brown)] transition-colors hover:text-[var(--color-brass)] hover:border-[var(--color-brass)]"
          >
            <span>Request a Consultation</span>

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <div className="mt-16 h-px w-full bg-[var(--color-brown)]/10" />

        <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--color-brown)]/55 sm:text-base sm:leading-8">
          Let&apos;s create furniture that feels like it was always meant to
          be there.
        </p>
      </div>
    </section>
  );
}