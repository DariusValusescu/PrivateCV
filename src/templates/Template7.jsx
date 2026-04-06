import React from "react";

function TemplateMinimalClean({ data }) {
  const { personalData, experience, education, skills, languages, about, projects } = data;

  const styles = {
    container: {
      fontFamily: "Times New Roman",
      padding: "30px",
      color: "#000",
      background: "#fff",
      maxWidth: "700px",
      margin: "0 auto",
      textAlign: "center",
      overflow: "hidden",
    },
    section: {
      marginTop: "20px",
    }
  };

  return (
    <div style={styles.container}>
      <h1>{personalData.name}</h1>
      <p>{personalData.email} | {personalData.phone}</p>
      {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}

      {/* About Me */}
      {about && (
        <div style={styles.section}>
          <h2>About Me</h2>
          <p style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", overflowWrap: "break-word", margin: 0 }}>
            {about}
          </p>
        </div>
      )}

      <div style={styles.section}>
        <h2>Education</h2>
        {education?.map((edu, i) => (
          <div key={i}>
            <strong>{edu.degree}</strong> — {edu.school}
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2>Experience</h2>
        {experience?.map((job, i) => (
          <div key={i}>
            <strong>{job.role}</strong> — {job.company}
            <div>{job.start} - {job.end}</div>
          </div>
        ))}
      </div>

      {/* Projects */}
      {projects?.some(p => p.name || p.description || p.link) && (
        <div style={styles.section}>
          <h2>Projects</h2>

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
        </div>
      )}

      <div style={styles.section}>
        <h2>Skills</h2>
        <p>{skills?.join(", ")}</p>
      </div>

      <div style={styles.section}>
        <h2>Languages</h2>
        <p>{languages?.join(", ")}</p>
      </div>
    </div>
  );
}

export default TemplateMinimalClean;

// updated with about me and projects