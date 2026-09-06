"use client";

import { motion } from "motion/react";
import {
  Compass,
  Hammer,
  House,
  Layers3,
  Truck,
  Wallet,
} from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    number: "01",
    title: "Free design consultation",
    description:
      "Start with an idea. We'll help turn it into something tangible.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Fully bespoke",
    description:
      "Every piece is built around your space, dimensions and taste.",
    icon: House,
  },
  {
    number: "03",
    title: "Premium materials",
    description:
      "Carefully selected materials paired with skilled craftsmanship.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "In-house craftsmanship",
    description:
      "Your furniture is crafted with attention to every detail.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Delivery & installation",
    description:
      "From our workshop to your home, we take care of the final step.",
    icon: Truck,
  },
  {
    number: "06",
    title: "Easy payment options",
    description:
      "Flexible payment options designed around your project.",
    icon: Wallet,
  },
];

export function WhyHeaven() {
  return (
    <section className="bg-[var(--color-ivory)] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel number="">
          Why Heaven
        </SectionLabel>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[var(--color-charcoal)]">
              Made with
              <br />
              <span className="italic text-[var(--color-brown)]/55">
                intention.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[var(--color-brown)]/65 md:text-base md:leading-8">
              From the first conversation to the final installation,
              every detail is considered to create furniture that
              feels distinctly yours.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="divide-y divide-[var(--color-brown)]/15 border-y border-[var(--color-brown)]/15">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    className="group flex gap-5 py-7 md:gap-8 md:py-8"
                  >
                    <span className="pt-1 text-[10px] font-semibold tracking-[0.15em] text-[var(--color-brass)]">
                      {reason.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <h3 className="font-display text-2xl font-medium text-[var(--color-charcoal)] md:text-3xl">
                          {reason.title}
                        </h3>

                        <Icon
                          size={20}
                          strokeWidth={1.2}
                          className="shrink-0 text-[var(--color-brown)]/40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>

                      <p className="mt-3 max-w-lg text-xs leading-6 text-[var(--color-brown)]/55 md:text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}