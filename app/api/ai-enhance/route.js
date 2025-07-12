// /app/api/ai-enhance/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content:
              "You are a resume writing assistant.Don't exaggerate the applicant's inputs just Rewrite the user's sentence using action verbs, resume-friendly tone. Keep it professional and concise.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenRouter Error:", data.error);
      return NextResponse.json({ success: false, error: data.error.message || "AI failed" });
    }

    return NextResponse.json({
      success: true,
      message: data.choices[0].message.content,
    });
  } catch (err) {
    console.error("AI Enhance Error:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
