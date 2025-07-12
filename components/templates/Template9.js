import React from 'react';

const Template9 = ({ resume }) => {
  const { profile, education, experience, projects, skills } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-10 font-sans space-y-8"
    >
      {/* Header */}
      <div className="bg-blue-100 p-6 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold text-blue-900">{profile?.name || 'Your Name'}</h1>
        <p className="text-sm text-blue-700">{profile?.role || 'Aspiring Role'}</p>
        <p className="text-xs text-blue-600 mt-1">{profile?.contact || 'email@example.com'}</p>
      </div>

      {/* Summary */}
      {profile?.summary && (
        <div>
          <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">About Me</h2>
          <p className="text-sm text-gray-700 mt-1">{profile.summary}</p>
        </div>
      )}

      {/* Education first */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">Education</h2>
          <div className="mt-2 space-y-2">
            {education.map((edu, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-gray-800">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.institution} ({edu.start} – {edu.end})</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlight Projects */}
      {projects?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">Projects</h2>
          <div className="mt-2 space-y-2">
            {projects.map((proj, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                <a href={proj.link} className="text-xs text-blue-600 underline">{proj.link}</a>
                <p className="text-sm text-gray-700">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Internships/Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">Internships</h2>
          <div className="mt-2 space-y-3">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <p className="text-sm font-medium">{exp.role} @ {exp.company}</p>
                <p className="text-xs italic text-gray-500">{exp.start} – {exp.end}</p>
                <ul className="list-disc ml-6 text-sm text-gray-700 mt-1">
                  {exp.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">Skills</h2>
          <p className="text-sm text-gray-800">{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Template9;
