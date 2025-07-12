"use client";

import { useEffect, useState } from "react";
import TemplateSelector from "@/components/TemplateSelector";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { generateScreenshotPDF } from "@/utils/generateScreenshotPDF";

export default function ResumePage() {
  const [data, setData] = useState({
    profile: { name: "", role: "", contact: "", summary: "" },
    education: [],
    experience: [],
    projects: [{ name: "", link: "", description: "" }],
    skills: [],
  });
  const [tmpl, setTmpl] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("user"));
  }, []);

  const handleSave = async () => {
    const u = JSON.parse(localStorage.getItem("user") || "{}");
    if (!u.email) return toast.error("Login to save");

    await fetch("/api/resume/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: u.email, templateId: tmpl, resumeData: data }),
    })
      .then((r) => r.json())
    .then((j) => {
      if (j.success) {
        toast.success("Saved!");
        confetti({
                  particleCount: 3000,
                  spread: 2000,
                  origin: { y: 0 },
                  gravity: 1,
                });
      } else {
        toast.error("Save failed");
      }
    });
  };



  return (
    <main className="min-h-screen bg-[#f4f1fb] pt-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#5e548e]">
        🎯 Select Your Resume Template
      </h1>

      <TemplateSelector selected={tmpl} onSelect={setTmpl} />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <ResumeForm data={data} setData={setData} />

        <div className="bg-white p-4 rounded shadow">
          <div id="resume-preview" className="text-black p-3">
            <ResumePreview selectedTemplateId={tmpl} resume={data} />
          </div>

          <button
            onClick={handleSave}
            className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white py-2 rounded"
          >
            💾 Save Resume
          </button>
          <button
  onClick={() => generateScreenshotPDF("resume-preview", data.profile.name)}
  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
>
  📸 Download Screenshot PDF
</button>

          
        </div>
      </div>
    </main>
  );
}
