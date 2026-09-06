import { z } from "zod";

export const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),

  project: z.enum(
    ["living", "bedroom", "dining", "office", "bespoke"],
    {
      message: "Please select a project category.",
    }
  ),

  message: z
    .string()
    .trim()
    .max(2000, "Message is too long.")
    .optional()
    .or(z.literal("")),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;