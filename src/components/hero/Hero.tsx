"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-charcoal)]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0">
        <motion.div
          initial={{
            scale: shouldReduceMotion ? 1 : 1.08,
          }}
          animate={{ scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://i.ibb.co.com/Q3vGrGBs/hero2.avif"
            alt="Elegant dining furniture interior by Heaven Furniture Mart"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overall cinematic overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Stronger lower contrast for typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

        {/* Subtle side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-10 sm:pb-14 md:px-8 md:pb-20 lg:px-12 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end mt-32">
          {/* Main content */}
          <div className="max-w-6xl">
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.25,
                duration: shouldReduceMotion ? 0 : 0.7,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[var(--color-brass)]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-[10px] md:text-xs">
                Bespoke Furniture
              </p>

              <span className="hidden h-1 w-1 rounded-full bg-[var(--color-brass)] sm:block" />

              <p className="hidden text-[9px] font-semibold uppercase tracking-[0.3em] text-white/55 sm:block md:text-xs">
                Chattogram
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.35,
                duration: shouldReduceMotion ? 0 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl font-display text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.78] tracking-[-0.045em] text-white"
            >
              <span className="block">Furniture,</span>

              <span className="block">Crafted</span>

              <span className="block pl-[0.08em] italic text-white/75">
                Around You.
              </span>
            </motion.h1>

            {/* Description + CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.65,
                duration: shouldReduceMotion ? 0 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-7 sm:mt-10 md:flex-row md:items-end md:gap-10"
            >
              <p className="max-w-md text-[13px] leading-6 text-white/70 sm:text-sm sm:leading-7 md:text-base">
                Bespoke furniture designed around your space, taste and
                lifestyle — crafted with intention in Chattogram.
              </p>

              <a
                href="#consultation"
                className="group inline-flex w-fit items-center gap-5 bg-[var(--color-ivory)] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-charcoal)] transition-all duration-300 hover:bg-[var(--color-brass)] sm:px-7 sm:py-5 sm:text-xs"
              >
                <span>Request a Consultation</span>

                <span className="flex h-7 w-7 items-center justify-center border border-[var(--color-charcoal)]/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — BRAND DETAIL
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: shouldReduceMotion ? 0 : 1,
              duration: shouldReduceMotion ? 0 : 0.8,
            }}
            className="hidden lg:block"
          >
            <div className="flex flex-col items-end gap-4 text-right">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Designed
              </span>

              <span className="h-10 w-px bg-[var(--color-brass)]/70" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Crafted
              </span>

              <span className="h-10 w-px bg-[var(--color-brass)]/70" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Customized
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM META
        ========================================================= */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 1.25,
            duration: shouldReduceMotion ? 0 : 0.8,
          }}
          className="mt-14 flex items-center justify-between border-t border-white/15 pt-5 sm:mt-16 md:mt-20"
        >
          <a
            href="#about"
            className="group flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white sm:text-[10px]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:translate-y-1">
              <ArrowDown size={12} />
            </span>

            <span>Scroll to explore</span>
          </a>

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35 sm:text-[10px]">
            Est. 2020
          </span>
        </motion.div>
      </div>
    </section>
  );
}