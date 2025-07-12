import React from 'react';

const Template5 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-10 font-serif space-y-8 border border-gray-300 shadow-lg"
    >
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wider">
          {profile?.name || 'Your Name'}
        </h1>
        <p className="text-lg font-medium text-gray-700">
          {profile?.role || 'Your Role'}
        </p>
        <p className="text-sm text-gray-500">
          {profile?.contact || 'email@example.com'}
        </p>
      </div>

      {/* Summary */}
      {profile?.summary && (
        <div>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-800 text-sm leading-relaxed">
            {profile.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 pb-1">
            Work Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between text-sm font-semibold text-gray-800">
                <span>{exp.role} — {exp.company}</span>
                <span className="text-gray-600 italic">
                  {exp.start} – {exp.end}
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 pb-1">
            Projects
          </h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <p className="text-sm font-semibold text-gray-800">{proj.name}</p>
              <a
                href={proj.link}
                className="text-xs text-blue-700 underline"
              >
                {proj.link}
              </a>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 pb-1">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm font-medium text-gray-800">
                {edu.degree} — {edu.institution}
              </p>
              <p className="text-xs text-gray-600 italic">
                {edu.start} – {edu.end}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 pb-1">
            Skills
          </h2>
          <p className="text-sm text-gray-700">{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Template5;
