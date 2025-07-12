import React from 'react';

const Template4 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-8 font-mono space-y-6"
    >
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold uppercase">
          {profile?.name || 'Your Name'}
        </h1>
        <p className="text-sm text-gray-600 italic">
          {profile?.role || 'Your Role'}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {profile?.contact || 'you@example.com'}
        </p>
      </div>

      {/* Summary */}
      {profile?.summary && (
        <div>
          <h2 className="text-base font-semibold mb-1">Summary</h2>
          <p className="text-sm leading-snug">{profile.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-base font-semibold mb-2">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between text-sm">
                <span className="font-medium">
                  {exp.role} @ {exp.company}
                </span>
                <span className="italic text-gray-500">
                  {exp.start}–{exp.end}
                </span>
              </div>
              <ul className="list-disc ml-4 text-xs">
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
          <h2 className="text-base font-semibold mb-2">Projects</h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium text-sm">{proj.name}</p>
              <a
                href={proj.link}
                className="block text-xs text-blue-600 mb-1"
              >
                {proj.link}
              </a>
              <p className="text-xs leading-snug">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-base font-semibold mb-2">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2 text-xs">
              <p>
                {edu.degree}, {edu.institution}
              </p>
              <p className="italic text-gray-500">
                {edu.start}–{edu.end}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="text-base font-semibold mb-2">Skills</h2>
          <p className="text-xs">{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Template4;
