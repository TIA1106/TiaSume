import React from 'react';

const Template6 = ({ resume }) => {
  const { profile, projects, experience, skills, education } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-10 font-sans space-y-10"
    >
      {/* Header with Accent Color */}
      <div className="bg-pink-100 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-extrabold text-pink-900">
          {profile?.name || 'Your Name'}
        </h1>
        <p className="text-lg font-medium text-pink-800">
          {profile?.role || 'Creative Role'}
        </p>
        <p className="text-sm text-pink-700 mt-1">
          {profile?.contact || 'you@example.com'}
        </p>
      </div>

      {/* Creative Summary */}
      {profile?.summary && (
        <div>
          <h2 className="text-xl font-bold border-l-4 border-pink-400 pl-3">
            Creative Summary
          </h2>
          <p className="text-gray-800 mt-1 text-sm leading-relaxed">
            {profile.summary}
          </p>
        </div>
      )}

      {/* Featured Projects */}
      {projects?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-l-4 border-pink-400 pl-3">
            Featured Projects
          </h2>
          {projects.map((proj, i) => (
            <div key={i} className="mt-2">
              <p className="text-base font-semibold text-pink-900">
                {proj.name}
              </p>
              <a
                href={proj.link}
                className="text-sm text-blue-600 underline"
              >
                {proj.link}
              </a>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-l-4 border-pink-400 pl-3">
            Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mt-2">
              <div className="flex justify-between text-sm font-medium text-gray-800">
                <span>
                  {exp.role} @ {exp.company}
                </span>
                <span className="italic text-gray-500">
                  {exp.start} – {exp.end}
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-l-4 border-pink-400 pl-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-pink-200 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-l-4 border-pink-400 pl-3">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mt-2 text-sm text-gray-800">
              <p>
                {edu.degree} – {edu.institution}
              </p>
              <p className="italic text-gray-500 text-xs">
                {edu.start} – {edu.end}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template6;
