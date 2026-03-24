import React from "react";

function Template3({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "left", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "600" }}>
            {personalData.name}
          </h1>
          <p style={{ marginTop: "8px" }}>
            {personalData.email} | {personalData.phone}
          </p>
        </div>

        {photo && (
          <img
            src={photo}
            alt="Profile"
            style={{ width: 90, height: 90, objectFit: "cover", borderRadius: "50%" }}
          />
        )}
      </div>

      <hr />

      {/* About Me */}
      {about && (
        <>
          <h2 style={{ marginTop: "20px" }}>About Me</h2>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: "10px", wordBreak: "break-word", overflowWrap: "break-word" }}>
            {about}
          </p>
        </>
      )}

      <h2 style={{ marginTop: "20px" }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i}>
          <strong>{edu.degree}</strong> — {edu.school}
        </div>
      ))}

      <h2 style={{ marginTop: "20px" }}>Experience</h2>
      {experience.map((job, i) => (
        <div key={i}>
          <strong>{job.role}</strong> — {job.company}
          <div>{job.start} - {job.end}</div>
        </div>
      ))}

      <h2 style={{ marginTop: "20px" }}>Skills</h2>
      <p>{skills.join(", ")}</p>

      <h2 style={{ marginTop: "20px" }}>Languages</h2>
      <p>{languages.join(", ")}</p>

      {/* Projects */}
      {projects?.some(p => p.name || p.description || p.link) && (
        <>
          <h2 style={{ marginTop: "20px" }}>Projects</h2>

          {projects.map((p, i) => (
            (p.name || p.description || p.link) && (
              <div key={i} style={{ marginBottom: "10px" }}>
                {p.name && <strong>{p.name}</strong>}

                {p.description && (
                  <p style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word", overflowWrap: "break-word" }}>
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
  );
}

export default Template3;

// updated with about me and projecs