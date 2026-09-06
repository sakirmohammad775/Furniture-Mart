"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { motion } from "motion/react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section
      id="consultation"
      className="bg-[var(--color-charcoal)] px-6 py-24 text-white sm:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
              <span className="h-px w-8 bg-[var(--color-brass)]" />
              Start a Conversation
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-8 max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl"
            >
              Let&apos;s create something
              <span className="block italic text-[var(--color-brass)]">
                that belongs there.
              </span>
            </motion.h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Tell us a little about your space and what you have in mind.
              We&apos;ll get in touch to understand your requirements.
            </p>

            <div className="mt-12 space-y-5 border-t border-white/10 pt-8">
              <a
                href="tel:+8801960481983"
                className="group flex items-center justify-between border-b border-white/10 pb-5 text-sm"
              >
                <span className="text-white/50">Call us</span>

                <span className="flex items-center gap-2 transition-colors group-hover:text-[var(--color-brass)]">
                  +880 1960-481983
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="mailto:heavenfurnituremart@gmail.com"
                className="group flex items-center justify-between border-b border-white/10 pb-5 text-sm"
              >
                <span className="text-white/50">Email</span>

                <span className="flex items-center gap-2 text-right transition-colors group-hover:text-[var(--color-brass)]">
                  heavenfurnituremart@gmail.com
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center border border-white/10 px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-brass)] text-[var(--color-brass)]">
                  <Check size={26} />
                </div>

                <h3 className="mt-8 font-display text-4xl sm:text-5xl">
                  Thank you.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                  Your consultation request has been received. We&apos;ll get
                  in touch with you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brass)]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <Field label="Your name">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone number">
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+880"
                    className={inputClass}
                  />
                </Field>

                <Field label="Email address">
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="What are you looking for?">
                  <select
                    name="project"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="living">Living Room</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="dining">Dining</option>
                    <option value="office">Office & Study</option>
                    <option value="bespoke">Bespoke / Custom</option>
                  </select>
                </Field>

                <Field label="Tell us about your project">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your space, style or requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-4 flex w-full items-center justify-between border border-[var(--color-brass)] px-6 py-5 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[var(--color-brass)] hover:text-[var(--color-charcoal)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {isSubmitting
                      ? "Sending Request..."
                      : "Request a Consultation"}
                  </span>

                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </button>

                <p className="text-xs leading-5 text-white/35">
                  We&apos;ll only use your information to respond to your
                  consultation request.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-transparent text-base text-white outline-none placeholder:text-white/25";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b border-white/20 pb-3">
        <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}