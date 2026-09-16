export const onRequestPost = async ({ request }) => {
  try {
    const body = await request.json();

    const required = [
      "tenancyType",
      "disrepairIssues",
      "issueReported",
      "firstName",
      "lastName",
      "phone",
      "email",
      "address",
      "gdprConsent",
    ];

    const missing = required.filter(
      (field) => body[field] === undefined || body[field] === null
    );

    if (missing.length > 0 || !body.gdprConsent) {
      return Response.json(
        { success: false, errors: { gdprConsent: "You must consent to our privacy policy to proceed" } },
        { status: 400 }
      );
    }

    if (!(Array.isArray(body.disrepairIssues) && body.disrepairIssues.length > 0)) {
      return Response.json(
        { success: false, errors: { disrepairIssues: "Please select at least one disrepair issue" } },
        { status: 400 }
      );
    }

    const lead = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      ...body,
      submittedAt: new Date().toISOString(),
      source: "website-eligibility-form",
      status: "new",
    };

    // TODO: Integrate with CRM, LeadByte, Zapier, or email service.
    // Example webhook integration:
    // await fetch(env.LEAD_WEBHOOK_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(lead),
    // });

    console.log("New lead received:", JSON.stringify(lead));

    return Response.json({
      success: true,
      message: "Your eligibility check has been submitted successfully.",
      referenceId: lead.id,
    });
  } catch {
    return Response.json(
      { success: false, message: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
};