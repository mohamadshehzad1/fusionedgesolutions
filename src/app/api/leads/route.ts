import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = leadFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const lead = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      ...validatedData.data,
      submittedAt: new Date().toISOString(),
      source: "website-eligibility-form",
      status: "new",
    };

    // TODO: Integrate with CRM, LeadByte, Zapier, or email service
    // Example webhook integration:
    // await fetch(process.env.LEAD_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(lead),
    // });

    console.log("New lead received:", lead);

    return NextResponse.json({
      success: true,
      message: "Your eligibility check has been submitted successfully.",
      referenceId: lead.id,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
