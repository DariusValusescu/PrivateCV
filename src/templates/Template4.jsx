import React from "react";

function Template4({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  return (
    <div style={{ padding: "20px", fontSize: "14px", textAlign: "left", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {photo && (
          <img
            src={photo}
            alt="Profile"
            style={{ width: 70, height: 70, objectFit: "cover", borderRadius: "50%", marginRight: 15 }}
          />
        )}

        <div>
          <h2 style={{ margin: 0 }}>{personalData.name}</h2>
          <p style={{ margin: 0 }}>{personalData.email}</p>
          <p style={{ margin: 0 }}>{personalData.phone}</p>
        </div>
      </div>

      <hr />

      {/* About Me */}
      {about && (
        <>
          <h3 style={{ marginTop: "15px" }}>About Me</h3>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: "10px", wordBreak: "break-word", overflowWrap: "break-word" }}>
            {about}
          </p>
        </>
      )}

      <h3 style={{ marginTop: "15px" }}>Education</h3>
      {education.map((edu, i) => (
        <p key={i}>
          {edu.degree} - {edu.school}
        </p>
      ))}

      <h3 style={{ marginTop: "15px" }}>Experience</h3>
      {experience.map((job, i) => (
        <p key={i}>
          {job.role} @ {job.company} ({job.start}-{job.end})
        </p>
      ))}

      <h3 style={{ marginTop: "15px" }}>Skills</h3>
      <p>{skills.join(", ")}</p>

      <h3 style={{ marginTop: "15px" }}>Languages</h3>
      <p>{languages.join(", ")}</p>

      {/* Projects */}
      {projects?.some(p => p.name || p.description || p.link) && (
        <>
          <h3 style={{ marginTop: "15px" }}>Projects</h3>

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

export default Template4;

// updated with about me and projects