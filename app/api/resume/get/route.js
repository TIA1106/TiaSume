import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/Resume";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const email = req.nextUrl.searchParams.get("email");

  try {
    const resumes = await Resume.find({ userEmail: email });
    return NextResponse.json({ success: true, resumes });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching resumes", error });
  }
}