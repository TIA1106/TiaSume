import React from 'react';

const Template10 = ({ resume }) => {
  const { profile, experience, education, skills, projects } = resume;

  return (
    <div
      id="resume-preview"
      className="w-[800px] mx-auto bg-white text-black p-6 font-mono text-sm space-y-6"
    >
      {/* Header */}
      <div>
        <h1>{profile?.name || 'Your Name'}</h1>
        <p>{profile?.role || 'Your Role'}</p>
        <p>{profile?.contact || 'email@example.com'}</p>
      </div>

      {/* Summary */}
      {profile?.summary && (
        <div>
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div>
          <h2>Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx}>
              <p>{exp.role} at {exp.company}</p>
              <p>{exp.start} – {exp.end}</p>
              {exp.description.map((line, i) => (
                <p key={i}>- {line}</p>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div>
          <h2>Projects</h2>
          {projects.map((proj, i) => (
            <div key={i}>
              <p>{proj.name}</p>
              <p>{proj.link}</p>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2>Education</h2>
          {education.map((edu, i) => (
            <div key={i}>
              <p>{edu.degree} — {edu.institution}</p>
              <p>{edu.start} – {edu.end}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2>Skills</h2>
          <p>{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Template10;
