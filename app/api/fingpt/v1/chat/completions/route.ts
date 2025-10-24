import { NextRequest, NextResponse } from "next/server";

const FINGPT_BASE_URL = process.env.FINGPT_BASE_URL || "http://localhost:8000";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📡 Chat completions request:", body);

    const {
      ticker,
      end_date,
      past_weeks = 4,
      include_financials = true,
      temperature = 0.2,
      stream = true,
    } = body;

    // Validate required fields
    if (!ticker) {
      return NextResponse.json(
        { error: "Missing required field: ticker" },
        { status: 400 }
      );
    }

    // Prepare request for FinGPT service
    const fingptRequest = {
      ticker: ticker.toUpperCase(),
      end_date: end_date || new Date().toISOString().split("T")[0],
      past_weeks,
      include_financials,
      temperature,
      stream,
    };

    console.log("📤 Forwarding to FinGPT:", fingptRequest);

    const response = await fetch(`${FINGPT_BASE_URL}/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fingptRequest),
    });

    console.log("📥 FinGPT response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ FinGPT service error:", errorText);
      return NextResponse.json(
        { error: "FinGPT service error", details: errorText },
        { status: response.status }
      );
    }

    // Handle streaming response
    if (stream) {
      console.log("📺 Streaming response enabled");
      return new NextResponse(response.body, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    }

    // Handle non-streaming response
    const data = await response.json();
    console.log("✅ Non-streaming response received");
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Chat completions error:", error);
    return NextResponse.json(
      { error: "Failed to connect to FinGPT service", details: String(error) },
      { status: 503 }
    );
  }
}