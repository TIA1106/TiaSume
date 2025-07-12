import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/Resume";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const { userEmail, templateId, resumeData } = body;

    console.log("📥 Incoming resumeData:", resumeData); // You should see this in terminal

    if (!userEmail || !resumeData) {
      return NextResponse.json({ success: false, message: "Missing fields" });
    }

    await Resume.create({
      userEmail,
      templateId,
      resumeData,
    });

    return NextResponse.json({ success: true, message: "Resume saved" });
  } catch (error) {
    console.error("❌ Resume Save Error:", error);
    return NextResponse.json({ success: false, message: "Save failed" });
  }
}
