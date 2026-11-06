import { NextResponse } from "next/server";

// Ready-to-use Google Apps Script webhook URL (can be overridden via env var GOOGLE_SHEETS_RSVP_WEBHOOK_URL)
const DEFAULT_RSVP_WEBHOOK_URL = process.env.GOOGLE_SHEETS_RSVP_WEBHOOK_URL || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      rsvpCode,
      eventId,
      eventTitle,
      name,
      email,
      phone,
      adults,
      children,
      totalHeadcount,
      reminderOptIn,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const brisbaneTime = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Brisbane",
    });

    const payload = {
      _subject: `Event RSVP [${rsvpCode}]: ${totalHeadcount} guests (${adults} Adults, ${children} Children) - ${name}`,
      _template: "table",
      _replyto: email,
      _cc: "info@vaarthai.org.au",
      RSVP_CheckIn_Code: rsvpCode,
      Event: eventTitle,
      Name: name,
      Email: email,
      Phone: phone || "Not provided",
      Adults: String(adults),
      Children: String(children),
      Total_Headcount: String(totalHeadcount),
      Day_Before_Reminder: reminderOptIn ? "Yes" : "No",
      Submitted_At_Brisbane: brisbaneTime,
    };

    // 1. Forward to Google Apps Script Webhook if configured (sends confirmation email to guest + pastor@vaarthai.org.au + logs to Google Sheet)
    if (DEFAULT_RSVP_WEBHOOK_URL) {
      try {
        await fetch(DEFAULT_RSVP_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            rsvpCode,
            eventId,
            eventTitle,
            name,
            email,
            phone: phone || "Not provided",
            adults: Number(adults),
            children: Number(children),
            totalHeadcount: Number(totalHeadcount),
            reminderOptIn: Boolean(reminderOptIn),
            submittedAt: brisbaneTime,
          }),
        });
      } catch (err) {
        console.error("Failed to call GOOGLE_SHEETS_RSVP_WEBHOOK_URL:", err);
      }
    }

    // 2. Send via FormSubmit to both pastor@vaarthai.org.au and info@vaarthai.org.au with proper Origin/Referer headers
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://www.vaarthai.org.au",
      Referer: `https://www.vaarthai.org.au/events/${eventId || "carolights-26"}`,
    };

    await Promise.allSettled([
      fetch("https://formsubmit.co/ajax/pastor@vaarthai.org.au", {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      }),
      fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers,
        body: JSON.stringify({
          ...payload,
          _cc: "pastor@vaarthai.org.au",
        }),
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "RSVP recorded and notifications dispatched.",
    });
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
