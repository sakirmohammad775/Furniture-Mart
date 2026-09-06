"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/data/company";

import {
  consultationSchema,
  type ConsultationInput,
} from "@/lib/validation/consultation";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      project: undefined,
      message: "",
    },
  });

  async function onSubmit(data: ConsultationInput) {
    setServerError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);

      setServerError(
        "We couldn't send your request. Please try again or contact us directly."
      );
    }
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
            <SectionLabel number="" dark>
              Start a Conversation
            </SectionLabel>

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
              Tell us a little about your space and what you have
              in mind. Our team will get in touch to understand your
              requirements.
            </p>

            <div className="mt-12 space-y-5 border-t border-white/10 pt-8">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="group flex items-center justify-between border-b border-white/10 pb-5 text-sm"
              >
                <span className="text-white/50">Call us</span>

                <span className="flex items-center gap-2 transition-colors group-hover:text-[var(--color-brass)]">
                  {company.phone}
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="group flex items-center justify-between border-b border-white/10 pb-5 text-sm"
              >
                <span className="text-white/50">Email</span>

                <span className="flex items-center gap-2 text-right transition-colors group-hover:text-[var(--color-brass)]">
                  {company.email}
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
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            {submitted ? (
              <SuccessMessage
                onReset={() => setSubmitted(false)}
              />
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
                noValidate
              >
                {/* Name */}
                <Field
                  label="Your name"
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>

                {/* Phone */}
                <Field
                  label="Phone number"
                  error={errors.phone?.message}
                >
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+880"
                    className={inputClass}
                  />
                </Field>

                {/* Email */}
                <Field
                  label="Email address"
                  error={errors.email?.message}
                >
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                {/* Project */}
                <Field
                  label="What are you looking for?"
                  error={errors.project?.message}
                >
                  <select
                    {...register("project")}
                    id="project"
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>

                    <option value="living">
                      Living Room
                    </option>

                    <option value="bedroom">
                      Bedroom
                    </option>

                    <option value="dining">
                      Dining
                    </option>

                    <option value="office">
                      Office & Study
                    </option>

                    <option value="bespoke">
                      Bespoke / Custom
                    </option>
                  </select>
                </Field>

                {/* Message */}
                <Field
                  label="Tell us about your project"
                  error={errors.message?.message}
                >
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    placeholder="Tell us about your space, dimensions, style or requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {/* Server error */}
                {serverError && (
                  <div
                    role="alert"
                    className="border border-red-300/20 bg-red-300/5 px-4 py-3 text-sm text-red-200"
                  >
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-4 flex w-full items-center justify-between border border-[var(--color-brass)] px-6 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[var(--color-brass)] hover:text-[var(--color-charcoal)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {isSubmitting
                      ? "Sending Request..."
                      : "Request a Consultation"}
                  </span>

                  {isSubmitting ? (
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                  ) : (
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </button>

                <p className="text-xs leading-5 text-white/35">
                  We&apos;ll only use your information to respond to
                  your consultation request.
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
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={`border-b ${
          error
            ? "border-red-400/70"
            : "border-white/20"
        } pb-3`}
      >
        <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
          {label}
        </label>

        {children}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessMessage({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center border border-white/10 px-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-brass)] text-[var(--color-brass)]">
        <Check size={26} strokeWidth={1.5} />
      </div>

      <h3 className="mt-8 font-display text-4xl sm:text-5xl">
        Thank you.
      </h3>

      <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
        Your consultation request has been received. Our team
        will get in touch with you shortly.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brass)] transition-opacity hover:opacity-70"
      >
        Send another request
      </button>
    </div>
  );
}