"use client";

import { motion } from "motion/react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";

const materials = [
  "Premium wood",
  "Carefully selected materials",
  "Experienced craftsmen",
  "Attention to detail",
];

export function Craftsmanship() {
  return (
    <section
      id="craft"
      className="bg-[var(--color-cream)] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel number="">
          The Craft
        </SectionLabel>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.04em] text-[var(--color-charcoal)]">
              Good furniture
              <br />
              begins with
              <br />
              <span className="italic text-[var(--color-brown)]/55">
                good craft.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[var(--color-brown)]/65 md:text-base md:leading-8">
              Beautiful design means little without the craftsmanship
              to bring it to life. Every Heaven piece is made with
              careful attention to materials, proportion and finish.
            </p>

            <div className="mt-10 border-t border-[var(--color-brown)]/15">
              {materials.map((material, index) => (
                <motion.div
                  key={material}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="flex items-center justify-between border-b border-[var(--color-brown)]/15 py-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brown)]/70">
                    {material}
                  </span>

                  <span className="font-display text-xl text-[var(--color-brass)]">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <ImageReveal
              src="https://i.ibb.co.com/qLqC3WTp/craft1.jpg"
              alt="Craftsmanship detail at Heaven Furniture Mart"
              className="aspect-[3/4] sm:mt-16"
              sizes="(max-width: 640px) 100vw, 50vw"
            />

            <ImageReveal
              src="https://i.ibb.co.com/8gmqs8Lc/craft2.jpg"
              alt="Furniture material and craftsmanship detail"
              className="aspect-[3/4]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--color-brown)]/15 pt-10 md:mt-32">
          <p className="max-w-5xl font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--color-charcoal)]">
            {`"Every piece we create is designed to bring lasting
            elegance into the homes of our clients."`}
          </p>
        </div>
      </div>
    </section>
  );
}