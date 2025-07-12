"use client";

export default function TemplateSelector({ selected, onSelect }) {
  const templates = [
  { id: 1, label: "🌟 Classic Clean" },
  { id: 2, label: "🖤 Dark Mode Pro" },
  { id: 3, label: "🎓 Fresher Focus" },
  { id: 4, label: "📐 Minimal Edge" },
  { id: 5, label: "🎨 Creative Flair" },
  { id: 6, label: "💼 Corporate Grid" },
  { id: 7, label: "🌈 Modern Color" },
  { id: 8, label: "🧾 Monochrome Text" },
  { id: 9, label: "🧠 Smart Timeline" },
  { id: 10, label: "📊 Skill Matrix" },
];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center text-sm">
      {templates.map((tpl) => (
        <button
          key={tpl.id}
          onClick={() => onSelect(tpl.id)}
          className={`px-3 py-2 rounded font-semibold border shadow-sm transition-all duration-150 ${
            selected === tpl.id
              ? "bg-[#5e548e] text-white border-[#5e548e] focus:outline-[#5e548e]"
              : "bg-white text-[#3f2a25] border-gray-300 hover:bg-gray-100"
          }`}
        >
          {tpl.label}
        </button>
      ))}
    </div>
  );
}
