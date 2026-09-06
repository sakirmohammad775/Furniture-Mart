import { ArrowDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BrandIntro() {
  return (
    <section
      id="about"
      className="bg-[var(--color-ivory)] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel>The Heaven Philosophy</SectionLabel>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[var(--color-charcoal)]">
              Furniture should
              <br />
              <span className="italic text-[var(--color-brown)]/60">
                do more
              </span>
              <br />
              than fill a room.
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-[var(--color-brown)]/70 md:text-base md:leading-8">
              At Heaven Furniture Mart, we believe furniture is more
              than function. Every piece is designed around the people,
              spaces and lifestyles it belongs to.
            </p>

            <p className="mt-6 text-sm leading-7 text-[var(--color-brown)]/70 md:text-base md:leading-8">
              From a statement sofa to a completely bespoke interior,
              we bring together thoughtful design, premium materials
              and skilled craftsmanship.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown)]/50">
              <ArrowDown size={14} />
              Designed. Crafted. Customized.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}