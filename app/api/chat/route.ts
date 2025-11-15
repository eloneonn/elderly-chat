import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, profile, sessionId } = body;

    // Get n8n webhook URL from environment variable
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    console.log("n8nWebhookUrl", n8nWebhookUrl);

    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { error: "N8N_WEBHOOK_URL environment variable is not set" },
        { status: 500 }
      );
    }

    // Forward the request to n8n webhook
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatInput: message,
        sessionId: sessionId,
        profile: {
          id: profile.id,
          name: profile.name,
          interests: profile.interests,
          activityLevel: profile.activityLevel,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook returned ${response.status}`);
    }

    const data = await response.json();

    // Return the response from n8n
    return NextResponse.json({
      message: data.output || "No response from n8n",
    });
  } catch (error) {
    console.error("Error calling n8n webhook:", error);
    return NextResponse.json(
      { error: "Failed to communicate with n8n backend" },
      { status: 500 }
    );
  }
}
