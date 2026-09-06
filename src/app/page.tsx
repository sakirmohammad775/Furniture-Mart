import { Hero } from "@/components/hero/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { Collections } from "@/components/sections/Collections";
import { WhyHeaven } from "@/components/sections/WhyHeaven";
import { Bespoke } from "@/components/sections/Bespoke";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { Showroom } from "@/components/sections/Showroom";
import { Testimonial } from "@/components/sections/Testimonial";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      

      <main>
        {/* 01 — First impression */}
        <Hero />

        {/* 02 — Brand philosophy */}
        <BrandIntro />

        {/* 03 — Product categories */}
        <Collections />

        {/* 04 — Trust */}
        <WhyHeaven />

        {/* 05 — Custom furniture */}
        <Bespoke />

        {/* 06 — Craftsmanship */}
        <Craftsmanship />

        {/* 07 — Physical showroom */}
        <Showroom />

        {/* 08 — Brand authority */}
        <Testimonial />

        {/* 09 — Conversion */}
        <ConsultationForm />

        {/* Final emotional CTA */}
        <FinalCTA />
      </main>

      
    </>
  );
}