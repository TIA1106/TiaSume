"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success("Signup successful! 🎉");
      router.push("/login");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <main className="min-h-screen pt-24 px-6 bg-[#f4f1fb] text-[#3f2a25]">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-[#5e548e] text-center">✍️ Signup</h1>
        <input
          className="border w-full p-2 rounded mb-4"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border w-full p-2 rounded mb-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border w-full p-2 rounded mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="bg-[#5e548e] hover:bg-[#7d68a7] text-white px-4 py-2 w-full rounded font-semibold"
        >
          Signup
        </button>
      </div>
    </main>
  );
}
