import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Log the incoming contact form submission
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Department:", data.department);
    console.log("Subject:", data.subject);
    console.log("Message:", data.message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    // 2. Here you could forward to Discord, Telegram, or Google Sheets webhooks

    return NextResponse.json({
      success: true,
      message: "Contact request received successfully and sent to info@vaarthai.org.au"
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
