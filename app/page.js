"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f1fb] text-[#3f2a25]">
      <section className="grid md:grid-cols-2 grid-cols-1 h-screen">
        
        <div className="flex flex-col justify-center items-center gap-6 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5e548e]">
            👋 Welcome to <span className="text-[#9f86c0]">TiaSumé</span>
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Craft stunning resumes effortlessly with AI enhancement, beautiful templates,
            and quick PDF export — all in a soothing lavender experience.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => router.push("/signup")}
              className="bg-[#5e548e] text-white px-5 py-2 rounded hover:bg-[#7d68a7] font-semibold"
            >
              ✍️ Signup
            </button>
            <button
              onClick={() => router.push("/login")}
              className="bg-[#9f86c0] text-white px-5 py-2 rounded hover:bg-[#be95c4] font-semibold"
            >
              🔐 Login
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          
          <Image
            className="mix-blend-normal pt-9"
            src="/home.png"
            width={600}
            height={100}
            alt="hero image"
            priority
          />
        </div>
      </section>
    </main>
  );
}
