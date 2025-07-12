"use client";
import React from "react";
import toast from "react-hot-toast";

const ResumeForm = ({ data, setData }) => {
  if (!data || !data.profile) {
    return <p className="text-gray-500">Loading form...</p>;
  }

  const update = (section, field, value, index) => {
    const updated = { ...data };
    if (index !== undefined) {
      updated[section][index][field] = value;
    } else {
      updated[section][field] = value;
    }
    setData(updated);
  };

  const handleEnhance = async (input, callback) => {
    if (!input || input.trim() === "") return toast.error("Field is empty");
    const res = await fetch("/api/ai-enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const result = await res.json();
    if (result.success) {
      callback(result.message);
      toast.success("Enhanced ✨");
    } else {
      toast.error("Enhancement failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-6 text-sm">
      {/* 👤 Profile */}
      <div>
        <h2 className="font-bold text-lg mb-2">👤 Profile</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Name"
          value={data.profile.name || ""}
          onChange={(e) => update("profile", "name", e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Role"
          value={data.profile.role || ""}
          onChange={(e) => update("profile", "role", e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Contact Email"
          value={data.profile.contact || ""}
          onChange={(e) => update("profile", "contact", e.target.value)}
        />
        <div className="relative">
          <textarea
            className="border p-2 w-full pr-16"
            placeholder="Summary"
            value={data.profile.summary || ""}
            onChange={(e) => update("profile", "summary", e.target.value)}
          />
          <button
            onClick={() =>
              handleEnhance(data.profile.summary, (msg) =>
                update("profile", "summary", msg)
              )
            }
            className="absolute top-2 right-2 text-xs text-blue-600 hover:underline"
          >
            ✨ Enhance
          </button>
        </div>
      </div>

      {/* 🛠️ Skills */}
      <div>
        <h2 className="font-bold text-lg mb-2">🛠️ Skills</h2>
        <input
          className="border p-2 w-full"
          placeholder="Comma-separated: React, Tailwind, Git"
          value={data.skills?.join(", ") || ""}
          onChange={(e) =>
            setData({ ...data, skills: e.target.value.split(", ").map(s => s.trim()) })
          }
        />
      </div>

      {/* 🎓 Education */}
      <div>
        <h2 className="font-bold text-lg mb-2">🎓 Education</h2>
        {data.education?.map((edu, i) => (
          <div key={i} className="mb-4 relative border p-3 rounded bg-gray-50 space-y-2">
            <button
              type="button"
              onClick={() => {
                const updated = [...data.education];
                updated.splice(i, 1);
                setData({ ...data, education: updated });
              }}
              className="absolute top-1 right-2 text-red-600 text-sm hover:underline"
            >
              🗑️ Remove
            </button>
            <input
              className="border p-2 w-full"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => update("education", "degree", e.target.value, i)}
            />
            <input
              className="border p-2 w-full"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => update("education", "institution", e.target.value, i)}
            />
            <div className="flex gap-4">
              <input
                className="border p-2 w-full"
                placeholder="Start"
                value={edu.start}
                onChange={(e) => update("education", "start", e.target.value, i)}
              />
              <input
                className="border p-2 w-full"
                placeholder="End"
                value={edu.end}
                onChange={(e) => update("education", "end", e.target.value, i)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline"
          onClick={() =>
            setData({
              ...data,
              education: [...data.education, { degree: "", institution: "", start: "", end: "" }],
            })
          }
        >
          ➕ Add Education
        </button>
      </div>

      {/* 💼 Experience */}
      <div>
        <h2 className="font-bold text-lg mb-2">💼 Experience</h2>
        {data.experience?.map((exp, i) => (
          <div key={i} className="mb-4 relative border p-3 rounded bg-gray-50 space-y-2">
            <button
              type="button"
              onClick={() => {
                const updated = [...data.experience];
                updated.splice(i, 1);
                setData({ ...data, experience: updated });
              }}
              className="absolute top-1 right-2 text-red-600 text-sm hover:underline"
            >
              🗑️ Remove
            </button>
            <input
              className="border p-2 w-full"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => update("experience", "role", e.target.value, i)}
            />
            <input
              className="border p-2 w-full"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => update("experience", "company", e.target.value, i)}
            />
            <div className="flex gap-4">
              <input
                className="border p-2 w-full"
                placeholder="Start"
                value={exp.start}
                onChange={(e) => update("experience", "start", e.target.value, i)}
              />
              <input
                className="border p-2 w-full"
                placeholder="End"
                value={exp.end}
                onChange={(e) => update("experience", "end", e.target.value, i)}
              />
            </div>
            <div className="relative">
              <textarea
                className="border p-2 w-full pr-16"
                placeholder="Comma-separated responsibilities"
                value={exp.description?.join(", ") || ""}
                onChange={(e) =>
                  update("experience", "description", e.target.value.split(", "), i)
                }
              />
              <button
                onClick={() =>
                  handleEnhance(exp.description?.join(", "), (msg) =>
                    update("experience", "description", msg.split(", "), i)
                  )
                }
                className="absolute top-2 right-2 text-xs text-blue-600 hover:underline"
              >
                ✨ Enhance
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline"
          onClick={() =>
            setData({
              ...data,
              experience: [
                ...data.experience,
                { role: "", company: "", start: "", end: "", description: [] },
              ],
            })
          }
        >
          ➕ Add Experience
        </button>
      </div>

      {/* 📦 Projects */}
      <div>
        <h2 className="font-bold text-lg mb-2">📦 Projects</h2>
        {data.projects?.map((proj, i) => (
          <div key={i} className="mb-4 relative border p-3 rounded bg-gray-50 space-y-2">
            <button
              type="button"
              onClick={() => {
                const updated = [...data.projects];
                updated.splice(i, 1);
                setData({ ...data, projects: updated });
              }}
              className="absolute top-1 right-2 text-red-600 text-sm hover:underline"
            >
              🗑️ Remove
            </button>
            <input
              className="border p-2 w-full"
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) => update("projects", "name", e.target.value, i)}
            />
            <input
              className="border p-2 w-full"
              placeholder="Link"
              value={proj.link}
              onChange={(e) => update("projects", "link", e.target.value, i)}
            />
            <div className="relative">
              <textarea
                className="border p-2 w-full pr-16"
                placeholder="Description"
                value={proj.description}
                onChange={(e) => update("projects", "description", e.target.value, i)}
              />
              <button
                onClick={() =>
                  handleEnhance(proj.description, (msg) =>
                    update("projects", "description", msg, i)
                  )
                }
                className="absolute top-2 right-2 text-xs text-blue-600 hover:underline"
              >
                ✨ Enhance
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline"
          onClick={() =>
            setData({
              ...data,
              projects: [...data.projects, { name: "", link: "", description: "" }],
            })
          }
        >
          ➕ Add Project
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
