import React from 'react';

const Template8 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-8 font-sans space-y-8"
    >
      {/* Header with Icons */}
      <div className="flex items-center space-x-4 border-b pb-4">
        <span className="text-2xl">👤</span>
        <div>
          <h1 className="text-3xl font-bold">{profile?.name || 'Your Name'}</h1>
          <p className="text-sm text-gray-600">{profile?.role || 'Your Role'}</p>
        </div>
      </div>

      {/* Contact & Skills Tags */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-1 text-sm text-gray-700">
          <span>📞</span>
          <span>{profile?.contact || 'you@example.com'}</span>
        </div>
        {skills?.map((skill, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full flex items-center space-x-1"
          >
            <span>🏷️</span>
            <span>{skill}</span>
          </span>
        ))}
      </div>

      {/* Timeline: Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center space-x-2">
            <span>🕒</span>
            <span>Experience Timeline</span>
          </h2>
          <div className="border-l-2 border-gray-300 pl-6 space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-3 top-1 bg-white border-2 border-indigo-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-indigo-500 text-xs">•</span>
                </div>
                <p className="font-medium">{exp.start} – {exp.end} @ {exp.company}</p>
                <p className="italic text-gray-500 text-sm">{exp.role}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                  {exp.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Grid with Icons */}
      {projects?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center space-x-2">
            <span>📦</span>
            <span>Projects</span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="border p-4 rounded-lg hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800">{proj.name}</h3>
                <p className="text-xs text-blue-600 underline">{proj.link}</p>
                <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education List with Icon */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center space-x-2">
            <span>🎓</span>
            <span>Education</span>
          </h2>
          <ul className="space-y-4">
            {education.map((edu, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="mt-1">•</span>
                <div>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-xs text-gray-500">{edu.institution} ({edu.start} – {edu.end})</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Template8;
