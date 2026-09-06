import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  consultationSchema,
} from "@/lib/validation/consultation";

const resend = new Resend(process.env.RESEND_API_KEY);

const projectLabels = {
  living: "Living Room",
  bedroom: "Bedroom",
  dining: "Dining",
  office: "Office & Study",
  bespoke: "Bespoke / Custom",
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = consultationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form fields.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    const projectType = projectLabels[data.project];

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Heaven Furniture <onboarding@resend.dev>",

      to: process.env.CONSULTATION_TO_EMAIL!,

      replyTo: data.email || undefined,

      subject: `New Consultation Request — ${projectType}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Consultation Request</h2>

          <p>
            A new consultation request has been submitted
            through the Heaven Furniture Mart website.
          </p>

          <hr />

          <p>
            <strong>Name:</strong> ${escapeHtml(data.name)}
          </p>

          <p>
            <strong>Phone:</strong> ${escapeHtml(data.phone)}
          </p>

          <p>
            <strong>Email:</strong>
            ${data.email ? escapeHtml(data.email) : "Not provided"}
          </p>

          <p>
            <strong>Project:</strong> ${projectType}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${escapeHtml(data.message || "No additional message provided.")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your request right now. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your consultation request has been received.",
    });
  } catch (error) {
    console.error("Consultation API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}