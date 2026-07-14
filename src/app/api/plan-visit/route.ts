import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      plannedDate,
      adultsCount,
      kidsCount,
      kidsAges,
      specialNeeds,
    } = body;

    if (!name || !phone || !plannedDate) {
      return NextResponse.json(
        { error: "Name, phone, and planned date are required." },
        { status: 400 }
      );
    }

    const sydneyTime = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
    });

    // 1. If Google Sheets Webhook URL is configured, send directly to Google Sheets
    if (process.env.GOOGLE_SHEETS_VISIT_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_VISIT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            plannedDate,
            adultsCount,
            kidsCount,
            kidsAges,
            specialNeeds,
            submittedAt: sydneyTime,
          }),
        });
      } catch (err) {
        console.error("Failed to send plan visit to Google Sheets:", err);
      }
    }

    // 2. Send background email notification automatically via FormSubmit to info@vaarthai.org.au
    try {
      await fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Plan Your Visit] புதிய வருகை பதிவு - ${name} (${plannedDate})`,
          Name: name,
          Email: email || "N/A",
          Phone: phone,
          PlannedDate: plannedDate,
          Adults: adultsCount,
          Kids: kidsCount,
          KidsAges: kidsAges || "N/A",
          SpecialNeeds: specialNeeds || "N/A",
          SubmittedAt: sydneyTime,
          _template: "table",
        }),
      });
    } catch (err) {
      console.error("Failed to send plan visit background email:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Successfully submitted visit plan.",
    });
  } catch (error) {
    console.error("Plan Visit API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
