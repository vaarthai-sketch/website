import { NextResponse } from "next/server";

// Google Apps Script Web App URL (logs RSVP to Google Sheet + emails guest confirmation & pastor@vaarthai.org.au)
const DEFAULT_RSVP_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_RSVP_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbwaaXnP5jFrHTBdqTEiG3AKq8YckkhlY73_HzhzvmEIm6xTDEuHPipidsU0uWQl38a4Iw/exec";

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

    // 1. Forward to Google Apps Script Webhook (sends confirmation email to guest + pastor@vaarthai.org.au + logs to Google Sheet)
    if (DEFAULT_RSVP_WEBHOOK_URL) {
      try {
        await fetch(DEFAULT_RSVP_WEBHOOK_URL, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
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

    // 2. Also send via FormSubmit as backup to info@vaarthai.org.au & pastor@vaarthai.org.au
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
      message: "RSVP recorded and confirmation emails dispatched.",
    });
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
