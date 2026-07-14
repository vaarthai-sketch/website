import { NextResponse } from "next/server";
import { churchConfig } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const sydneyTime = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
    });

    // 1. Submit directly to Google Forms (which saves to Google Sheets automatically!)
    try {
      const actionUrl = process.env.GOOGLE_FORM_URL || churchConfig.newsletterForm.actionUrl;
      const entryName = process.env.GOOGLE_FORM_ENTRY_NAME || churchConfig.newsletterForm.entryNameId;
      const entryEmail = process.env.GOOGLE_FORM_ENTRY_EMAIL || churchConfig.newsletterForm.entryEmailId;

      const formData = new URLSearchParams();
      formData.append(entryName, name);
      formData.append(entryEmail, email);

      await fetch(actionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
    } catch (err) {
      console.error("Failed to submit to Google Forms:", err);
    }

    // 2. If Google Sheets Webhook URL is configured, send directly to Google Sheets
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, date: sydneyTime }),
        });
      } catch (err) {
        console.error("Failed to send to Google Sheets webhook:", err);
      }
    }

    // 2. Send email notification automatically in the background via FormSubmit to info@vaarthai.org.au
    try {
      await fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[New Subscriber] வார்த்தை திருச்சபை - Weekly Newsletter (${name})`,
          Name: name,
          Email: email,
          SubscribedAt: sydneyTime,
          _template: "table",
        }),
      });
    } catch (err) {
      console.error("Failed to send background email notification:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the weekly newsletter.",
    });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
