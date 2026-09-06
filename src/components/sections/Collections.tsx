"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { collections } from "@/data/collections";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Collections() {
  return (
    <section
      id="collections"
      className="bg-[var(--color-charcoal)] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel number="" dark>
          Collections
        </SectionLabel>

        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.04em] text-[var(--color-ivory)]">
            Spaces,
            <br />
            <span className="italic text-white/50">
              beautifully considered.
            </span>
          </h2>

          <p className="max-w-xs text-sm leading-7 text-white/50">
            Explore a selection of furniture created for the
            spaces where life happens.
          </p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-12">
          {collections.map((collection, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.article
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden ${
                  isLarge
                    ? "md:col-span-7"
                    : "md:col-span-5"
                }`}
              >
                <div
                  className={`relative ${
                    isLarge
                      ? "aspect-[4/5] md:aspect-[4/5]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={collection.image}
                    alt={`${collection.title} furniture`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                          {collection.number}
                        </span>

                        <h3 className="font-display text-4xl font-medium text-white md:text-5xl">
                          {collection.title}
                        </h3>

                        <p className="mt-3 max-w-sm text-xs leading-6 text-white/65 md:text-sm">
                          {collection.description}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[var(--color-charcoal)]">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}