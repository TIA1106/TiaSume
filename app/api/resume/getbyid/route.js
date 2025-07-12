import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/Resume";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, message: "ID missing" });
  }

  try {
    const resume = await Resume.findById(id);
    if (!resume) {
      return NextResponse.json({ success: false, message: "Resume not found" });
    }

    return NextResponse.json({ success: true, resume });
  } catch (err) {
    console.error("Resume fetch error:", err);
    return NextResponse.json({ success: false, message: "Error fetching resume", error: err });
  }
}
