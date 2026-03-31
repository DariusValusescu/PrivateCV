import React from "react";

function TemplateUniqueTimeline({ data }) {
  const {
    personalData = {},
    experience = [],
    education = [],
    skills = [],
    languages = [],
    photo,
    about,
    projects = []
  } = data || {};

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "30px",
        background: "#f7f7f7",
        overflow: "hidden",
        wordBreak: "break-word",
        overflowWrap: "break-word"
      }}
    >

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
        {photo && (
          <img
            src={photo}
            alt="Profile"
            style={{ width: 80, height: 80, borderRadius: "50%", marginRight: 20, objectFit: "cover" }}
          />
        )}
        <div>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "600" }}>
            {personalData.name}
          </h1>
          <p style={{ margin: "5px 0" }}>
            {personalData.email} | {personalData.phone}
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "30px", alignItems: "stretch" }}>

        {/* LEFT SIDE */}
        <div style={{ flex: 2, paddingRight: "20px", borderRight: "3px solid #5d7fa3" }}>

          {/* ABOUT ME */}
          {about && (
            <div style={{ marginBottom: "20px" }}>
              <h2>About Me</h2>
              <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                {about}
              </p>
            </div>
          )}

          {/* EDUCATION */}
          {education.some(e => e.degree || e.school) && (
            <div style={{ marginBottom: "20px" }}>
              <h2>Education</h2>
              {education.map((edu, i) => (
                (edu.degree || edu.school) && (
                  <div key={i}>
                    <strong>{edu.degree}</strong> — {edu.school}
                  </div>
                )
              ))}
            </div>
          )}

          {/* EXPERIENCE */}
          {experience.some(e => e.role || e.company) && (
            <div style={{ marginBottom: "20px" }}>
              <h2>Experience</h2>
              {experience.map((job, i) => (
                (job.role || job.company) && (
                  <div key={i}>
                    <strong>{job.role}</strong> — {job.company}
                    <div>{job.start} - {job.end}</div>
                  </div>
                )
              ))}
            </div>
          )}

          {/* PROJECTS */}
          {projects?.some(p => p.name || p.description || p.link) && (
            <div style={{ marginTop: "30px" }}>
              <h2>Projects</h2>

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
            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>

          {/* SKILLS */}
          {skills.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2>Skills</h2>
              {skills.map((s, i) => (
                s && (
                  <div
                    key={i}
                    style={{
                      background: "#5d7fa3",
                      color: "white",
                      padding: "5px 10px",
                      margin: "5px 0",
                      borderRadius: "5px",
                      display: "inline-block"
                    }}
                  >
                    {s}
                  </div>
                )
              ))}
            </div>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2>Languages</h2>
              <p>{languages.join(", ")}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default TemplateUniqueTimeline;