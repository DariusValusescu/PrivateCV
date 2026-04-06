import React from "react";

function Template2({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div style={{
        width: "30%",
        background: "#5d7fa3",
        color: "white",
        padding: "20px",
        wordBreak: "break-word",
        overflowWrap: "break-word"
      }}>
        {photo && <img src={photo} alt="Profile" style={{ width: "100%" }} />}
        <h3>{personalData.name}</h3>
        <p>{personalData.email}</p>
        <p>{personalData.phone}</p>
        {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}

        <h4>Skills</h4>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {skills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h4>Languages</h4>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {languages.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </div>

      <div style={{
        width: "70%",
        padding: "20px",
        wordBreak: "break-word",
        overflowWrap: "break-word"
      }}>

        {/* About Me */}
        {about && (
          <>
            <h2>About Me</h2>
            <p style={{ whiteSpace: "pre-wrap", marginBottom: "20px" }}>
              {about}
            </p>
          </>
        )}

        <h2>Education</h2>
        {education.map((edu, i) => (
          <p key={i}>{edu.degree} - {edu.school}</p>
        ))}

        <h2 style={{ marginTop: "20px" }}>Experience</h2>
        {experience.map((job, i) => (
          <p key={i}>{job.role} - {job.company}</p>
        ))}

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

export default Template2;

// updatede with about me and projcts