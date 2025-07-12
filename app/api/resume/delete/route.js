import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/Resume";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  await connectDB();

  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, message: "Missing resume ID" });
  }

  try {
    await Resume.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Resume deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ success: false, message: "Delete failed", error });
  }
}
