import React from 'react';

const Template1 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-8 font-sans leading-relaxed space-y-6"
    >
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-800">{profile?.name || 'Your Name'}</h1>
        <p className="text-lg text-gray-600">{profile?.role || 'Your Role'}</p>
        <p className="text-sm text-gray-500 mt-1">{profile?.contact || 'you@example.com'}</p>
      </div>

      {/* Summary */}
      {profile?.summary && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Profile Summary</h2>
          <p className="text-gray-700">{profile.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Work Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between text-sm text-gray-700 font-medium">
                <span>{exp.role} — {exp.company}</span>
                <span className="text-gray-500 italic">{exp.start} – {exp.end}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm ml-4">
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
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium text-gray-700">{proj.name}</p>
              <a href={proj.link} className="text-blue-600 underline text-sm">{proj.link}</a>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2 text-gray-700 text-sm">
              <p>{edu.degree} — {edu.institution}</p>
              <p className="italic text-gray-500 text-xs">{edu.start} – {edu.end}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <p className="text-gray-700 text-sm">{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Template1;
