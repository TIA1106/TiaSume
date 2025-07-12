import { connectDB } from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ success: false, message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return NextResponse.json({ success: false, message: "Invalid password" });

  return NextResponse.json({ success: true, user: { name: user.name, email: user.email } });
}