"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Testimonial() {
  return (
    <section className="bg-[var(--color-ivory)] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.25fr_1fr] lg:gap-20">
          {/* Label */}
          <div>
            <SectionLabel number="">
              Our Philosophy
            </SectionLabel>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <Quote
              size={38}
              strokeWidth={1}
              className="mb-8 text-[var(--color-brass)]"
            />

            <blockquote className="font-display text-4xl leading-[1.08] tracking-[-0.02em] text-[var(--color-brown)] sm:text-5xl md:text-6xl lg:text-7xl">
              “At Heaven Furniture Mart, we believe furniture is more than
              just function; it is a reflection of lifestyle, taste, and
              comfort.”
            </blockquote>

            <div className="mt-10 flex items-center gap-5">
              <div className="h-px w-12 bg-[var(--color-brass)]" />

              <div>
                <p className="text-sm font-semibold tracking-wide text-[var(--color-brown)]">
                  Abul Kalam Bhuiyan
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-brown)]/50">
                  Managing Director
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-sm leading-7 text-[var(--color-brown)]/65 sm:text-base sm:leading-8">
              Every piece we create is designed to bring lasting elegance
              into the homes of our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}