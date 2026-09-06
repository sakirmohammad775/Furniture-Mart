"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { SectionLabel } from "@/components/ui/SectionLabel";

export function Showroom() {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden bg-[var(--color-charcoal)]"
    >
      <div className="relative min-h-[80svh]">
        <motion.div
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <img
            src="https://i.ibb.co.com/rGQy9Yfh/hero1.avif"
            alt="Heaven Furniture Mart showroom in Agrabad, Chattogram"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-between px-5 py-10 md:px-8 md:py-14 lg:px-12">
          <SectionLabel number="" dark>
            Visit Heaven
          </SectionLabel>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.045em] text-white">
                See it.
                <br />
                <span className="italic text-white/55">
                  Feel it.
                </span>
                <br />
                Love it.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <div className="border-t border-white/20 pt-6">
                <div className="flex gap-4">
                  <MapPin
                    size={18}
                    strokeWidth={1.3}
                    className="mt-1 shrink-0 text-[var(--color-brass)]"
                  />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Showroom
                    </p>

                    <p className="mt-3 text-sm leading-7 text-white/80">
                      Agrabad Access Road
                      <br />
                      Chattogram, Bangladesh
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart+Agrabad+Chattogram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-white"
                >
                  Get directions

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}