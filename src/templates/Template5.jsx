import React from "react";

function Template5({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  return (
    <div style={{ textAlign: "center", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ background: "#5d7fa3", color: "white", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {photo && (
          <img
            src={photo}
            alt="Profile"
            style={{ width: 100, height: 100, objectFit: "cover", borderRadius: "5px", marginRight: 20 }}
          />
        )}

        <div style={{ textAlign: "left" }}>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "600" }}>
            {personalData.name}
          </h1>
          <p style={{ marginTop: "8px", marginBottom: 0 }}>{personalData.email}</p>
          <p style={{ margin: 0 }}>{personalData.phone}</p>
          {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}
        </div>
      </div>

      {/* About Me */}
      {about && (
        <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", wordBreak: "break-word", overflowWrap: "break-word" }}>
          <h2>About Me</h2>
          <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
            {about}
          </p>
        </div>
      )}

      <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", wordBreak: "break-word", overflowWrap: "break-word" }}>
        <h2>Education</h2>
        {education.map((edu, i) => (
          <div key={i}>
            <strong>{edu.degree}</strong> - {edu.school}
          </div>
        ))}

        <h2 style={{ marginTop: "20px" }}>Experience</h2>
        {experience.map((job, i) => (
          <div key={i}>
            <strong>{job.role}</strong> at {job.company}
            <div>{job.start} - {job.end}</div>
          </div>
        ))}

        <h2 style={{ marginTop: "20px" }}>Skills</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {skills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h2 style={{ marginTop: "20px" }}>Languages</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {languages.map((l, i) => <li key={i}>{l}</li>)}
        </ul>

        {/* Projects */}
        {projects?.some(p => p.name || p.description || p.link) && (
          <>
            <h2 style={{ marginTop: "20px" }}>Projects</h2>

            {projects.map((p, i) => (
              (p.name || p.description || p.link) && (
                <div key={i} style={{ marginBottom: "10px" }}>
                  {p.name && <strong>{p.name}</strong>}

                  {p.description && (
                    <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                      {p.description}
                    </p>
                  )}

                  {p.link && (
                    <p style={{ margin: 0 }}>
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.link}
                      </a>
                    </p>
                  )}
                </div>
              )
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Template5;

// updated with about me and personal info