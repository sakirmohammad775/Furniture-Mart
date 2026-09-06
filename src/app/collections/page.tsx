"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import {
  allCollections,
  collectionCategories,
  type CollectionCategory,
} from "@/data/allCollection";

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] =
    useState<CollectionCategory>("All");

  const filteredCollections = useMemo(() => {
    if (activeCategory === "All") {
      return allCollections;
    }

    return allCollections.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[var(--color-ivory)]">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="bg-[var(--color-charcoal)] px-5 pb-16 pt-32 text-[var(--color-ivory)] md:px-8 md:pb-24 md:pt-40 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="mb-14 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white md:mb-20"
          >
            <ArrowLeft size={14} />
            Back Home
          </Link>

          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-brass)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Heaven Furniture Mart
              </span>
            </div>

            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.8] tracking-[-0.045em]">
              Our
              <br />
              <span className="italic text-white/65">
                Collections.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Explore our collection of thoughtfully designed furniture,
              crafted to bring character, comfort and lasting elegance
              into your space.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLECTION NAVIGATION
      ========================================================= */}
      <section className="sticky top-0 z-30 border-b border-[var(--color-brown)]/10 bg-[var(--color-ivory)]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] overflow-x-auto px-5 md:px-8 lg:px-12">
          {collectionCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 px-5 py-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 first:pl-0 md:px-7 ${
                  isActive
                    ? "text-[var(--color-charcoal)]"
                    : "text-[var(--color-brown)]/40 hover:text-[var(--color-brown)]"
                }`}
              >
                {category}

                {isActive && (
                  <span className="absolute bottom-0 left-5 right-5 h-px bg-[var(--color-brass)] first:left-0 md:left-7 md:right-7" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          COLLECTION GRID
      ========================================================= */}
      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          {/* Result count */}
          <div className="mb-10 flex items-end justify-between border-b border-[var(--color-brown)]/10 pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-brown)]/40">
                {activeCategory === "All"
                  ? "All Collections"
                  : `${activeCategory} Collection`}
              </p>
            </div>

            <span className="font-display text-2xl text-[var(--color-brown)]/50">
              {String(filteredCollections.length).padStart(2, "0")}
            </span>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-20">
            {filteredCollections.map((item, index) => {
              const isLarge = index % 5 === 0 || index % 5 === 3;

              return (
                <article
                  key={item.id}
                  className={`group ${
                    isLarge
                      ? "lg:col-span-7"
                      : "lg:col-span-5"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-[var(--color-cream)] ${
                      isLarge
                        ? "aspect-[4/3]"
                        : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.category} furniture by Heaven Furniture Mart`}
                      fill
                      sizes={
                        isLarge
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 58vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                      }
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                    {/* Arrow */}
                    <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center bg-[var(--color-ivory)] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight
                        size={17}
                        className="text-[var(--color-charcoal)]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-brass)]">
                        {item.category}
                      </p>

                      <h2 className="font-display text-2xl font-medium text-[var(--color-brown)] md:text-3xl">
                        {item.title}
                      </h2>
                    </div>

                    <span className="pt-1 text-[9px] font-semibold tracking-[0.2em] text-[var(--color-brown)]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredCollections.length === 0 && (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="font-display text-3xl text-[var(--color-brown)]/50">
                No collections found.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="bg-[var(--color-charcoal)] px-5 py-24 text-center text-[var(--color-ivory)] md:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-brass)]">
            Your Space, Your Story
          </span>

          <h2 className="mt-7 font-display text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.85] tracking-[-0.04em]">
            Have something
            <br />
            <span className="italic text-white/60">
              in mind?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/50">
            Tell us what you envision. We will help turn your idea
            into furniture made specifically for you.
          </p>

          <Link
            href="/#consultation"
            className="group mt-10 inline-flex items-center gap-5 bg-[var(--color-ivory)] px-7 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-charcoal)] transition-colors duration-300 hover:bg-[var(--color-brass)]"
          >
            Request a Consultation

            <span className="flex h-7 w-7 items-center justify-center border border-[var(--color-charcoal)]/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}