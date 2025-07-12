import React from 'react';

const Template7 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-gray-900 text-gray-100 p-8 font-sans space-y-6"
    >
      {/* Header */}
      <div className="border-b border-gray-700 pb-4">
        <h1 className="text-4xl font-bold">{profile?.name || 'Your Name'}</h1>
        <p className="text-lg text-gray-300">{profile?.role || 'Your Role'}</p>
        <p className="text-sm text-gray-500 mt-1">{profile?.contact || 'you@example.com'}</p>
      </div>

      {/* Summary */}
      {profile?.summary && (
        <div>
          <h2 className="text-xl font-semibold border-l-4 border-gray-700 pl-3">
            Profile Summary
          </h2>
          <p className="mt-1 text-gray-300 text-sm">{profile.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-l-4 border-gray-700 pl-3">
            Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mt-2">
              <div className="flex justify-between text-sm text-gray-200">
                <span className="font-medium">{exp.role} — {exp.company}</span>
                <span className="italic text-gray-500">{exp.start} – {exp.end}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mt-1">
                {exp.description.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-l-4 border-gray-700 pl-3">
            Projects
          </h2>
          {projects.map((proj, i) => (
            <div key={i} className="mt-2">
              <p className="font-medium text-gray-100">{proj.name}</p>
              <a href={proj.link} className="text-blue-400 text-xs underline">
                {proj.link}
              </a>
              <p className="text-gray-300 text-sm mt-1">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-l-4 border-gray-700 pl-3">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mt-2 text-gray-200 text-sm">
              <p>{edu.degree} — {edu.institution}</p>
              <p className="italic text-gray-500 text-xs">{edu.start} – {edu.end}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-l-4 border-gray-700 pl-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template7;
