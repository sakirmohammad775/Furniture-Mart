"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";

const process = [
  {
    number: "01",
    title: "Tell us your vision",
    description:
      "Share your ideas, dimensions, preferences and the way you want the space to feel.",
  },
  {
    number: "02",
    title: "We design around you",
    description:
      "Our team develops a furniture solution that fits your space and lifestyle.",
  },
  {
    number: "03",
    title: "We craft it",
    description:
      "Skilled craftsmen bring the design to life using carefully selected materials.",
  },
  {
    number: "04",
    title: "We deliver & install",
    description:
      "Your finished piece arrives ready for its place in your home or workspace.",
  },
];

export function Bespoke() {
  return (
    <section
      id="bespoke"
      className="overflow-hidden bg-[var(--color-charcoal)] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel number="" dark>
          The Bespoke Experience
        </SectionLabel>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.045em] text-[var(--color-ivory)]">
              Made for
              <br />
              <span className="italic text-white/45">
                your space.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-7 text-white/55 md:text-base md:leading-8">
              Not selected from a catalogue. Not forced into a
              standard size. We create furniture around your
              dimensions, taste and the way you live.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <ImageReveal
              src="https://i.ibb.co.com/whg1DZV2/Bespoke2.webp"
              alt="Bespoke furniture crafted by Heaven Furniture Mart"
              className="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <div className="border-t border-white/15">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="border-b border-white/15 py-7"
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-brass)]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-display text-2xl text-[var(--color-ivory)] md:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-white/45 md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#consultation"
              className="group mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)]"
            >
              Start your project

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:bg-[var(--color-ivory)] group-hover:text-[var(--color-charcoal)]">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}