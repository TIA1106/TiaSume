import React from 'react';

const Template3 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto h-auto bg-white text-black font-sans shadow-lg flex"
    >
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-100 p-6 space-y-6">
        {/* Name */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{profile?.name || "Your Name"}</h1>
          <p className="text-sm text-gray-600">{profile?.role || "Your Role"}</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase text-gray-700">Contact</h2>
          <p className="text-xs text-gray-600">{profile?.contact || "email@example.com"}</p>
        </div>

        {/* Skills */}
        {skills?.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold uppercase text-gray-700">Skills</h2>
            <ul className="list-disc ml-4 text-xs text-gray-700">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold uppercase text-gray-700">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="mb-2">
                <p className="text-xs font-medium">{edu.degree}</p>
                <p className="text-xs text-gray-600">{edu.institution}</p>
                <p className="text-[10px] italic text-gray-500">{edu.start} – {edu.end}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 space-y-6">
        {/* Summary */}
        {profile?.summary && (
          <div>
            <h2 className="text-base font-semibold text-gray-800">Profile Summary</h2>
            <p className="text-sm text-gray-700">{profile.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <div>
            <h2 className="text-base font-semibold text-gray-800">Experience</h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-sm font-medium">{exp.role} — {exp.company}</p>
                <p className="text-xs italic text-gray-500">{exp.start} – {exp.end}</p>
                <ul className="list-disc ml-5 text-sm text-gray-700">
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
            <h2 className="text-base font-semibold text-gray-800">Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} className="mb-3">
                <p className="text-sm font-medium">{proj.name}</p>
                <p className="text-xs text-blue-600">{proj.link}</p>
                <p className="text-sm text-gray-700">{proj.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Template3;
