import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      prayerText,
      privacyLevel,
      allowContact,
      isUrgent,
    } = body;

    if (!prayerText || !phone) {
      return NextResponse.json(
        { error: "Prayer text and phone are required." },
        { status: 400 }
      );
    }

    const sydneyTime = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
    });

    const recipient = privacyLevel === "pastor-only" ? "pastor@vaarthai.org.au" : "info@vaarthai.org.au";

    // 1. If Google Sheets Webhook URL is configured, send directly to Google Sheets
    if (process.env.GOOGLE_SHEETS_PRAYER_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_PRAYER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name || "Anonymous",
            email: email || "N/A",
            phone,
            prayerText,
            privacyLevel,
            allowContact,
            isUrgent,
            submittedAt: sydneyTime,
          }),
        });
      } catch (err) {
        console.error("Failed to send prayer request to Google Sheets:", err);
      }
    }

    // 2. Send background email notification via FormSubmit
    try {
      await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[${isUrgent ? "URGENT " : ""}Prayer Request] ஜெப விண்ணப்பம் - ${name || "விசுவாசி"}`,
          Name: name || "Anonymous",
          Email: email || "N/A",
          Phone: phone,
          PrivacyLevel: privacyLevel === "pastor-only" ? "Pastor Only (Confidential)" : "Prayer Team",
          Urgent: isUrgent ? "Yes" : "No",
          AllowContact: allowContact ? "Yes" : "No",
          PrayerText: prayerText,
          SubmittedAt: sydneyTime,
          _template: "table",
        }),
      });
    } catch (err) {
      console.error("Failed to send prayer request background email:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Successfully submitted prayer request.",
    });
  } catch (error) {
    console.error("Prayer API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
