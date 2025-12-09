import { NextRequest, NextResponse } from "next/server";

// Replace this with your Hugging Face Space URL
const RENDER_URL = "https://glaciershrinkageanalyzer-backend.onrender.com/analyze";

export async function POST(req: NextRequest) {
  try {
    // Receive the form data from the frontend
    const formData = await req.formData();

    // Forward it to Hugging Face
    const response = await fetch(RENDER_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Hugging Face request failed: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return the JSON response to frontend
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Server error while forwarding request." },
      { status: 500 }
    );
  }
}