"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import ReactDOM from "react-dom/client";

const ResumePreview = dynamic(() => import("@/components/ResumePreview"), { ssr: false });

export default function DashboardPage() {
  const [resumes, setResumes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user") || "{}");
    if (!u.email) return;
    fetch(`/api/resume/get?email=${u.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setResumes(data.resumes);
        else toast.error("Could not load resumes.");
      })
      .catch(() => toast.error("Fetch error."));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this resume?")) return;
    const res = await fetch(`/api/resume/delete?id=${id}`, { method: "DELETE" });
    const j = await res.json();
    if (j.success) {
      toast.success("Deleted!");
      setResumes((prev) => prev.filter((r) => r._id !== id));
    } else toast.error("Delete failed");
  };

  return (
    <>
      <main className="min-h-screen pt-24 px-6 bg-[#f4f1fb]">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#5e548e]">
          📦 Your Saved Resumes
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((r) => (
            <div key={r._id} className="bg-white p-4 shadow rounded border">
              <h2 className="text-xl font-semibold mb-1">
                {r.resumeData.profile.name || "Untitled"}
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                Template #{r.templateId} • {new Date(r.createdAt).toLocaleDateString()}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => router.push(`/resume/edit/${r._id}`)}
                  className="px-3 py-1 bg-[#9f86c0] hover:bg-[#be95c4] text-white rounded text-sm"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(r._id)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                >
                  🗑️ Delete
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
