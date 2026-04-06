import React from "react";

function TemplateModernSidebar({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  const styles = {
    container: {
      display: "flex",
      fontFamily: "Arial",
      minHeight: "100%",
    },
    sidebar: {
      width: "30%",
      background: "#5d7fa3",
      color: "white",
      padding: "20px",
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
    main: {
      width: "70%",
      padding: "20px",
      background: "#fff",
    },
    photo: {
      width: 100,
      height: 100,
      objectFit: "cover",
      borderRadius: "50%",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "20px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        {photo && <img src={photo} alt="Profile" style={styles.photo} />}

        <h2>{personalData.name}</h2>
        <p>{personalData.email}</p>
        <p>{personalData.phone}</p>
        {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}

        {/* About Me */}
        {about && (
          <div style={{ ...styles.section }}>
            <h3>About Me</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>{about}</p>
          </div>
        )}

        <div style={styles.section}>
          <h3>Skills</h3>
          <p>{skills?.join(", ")}</p>
        </div>

        <div style={styles.section}>
          <h3>Languages</h3>
          <p>{languages?.join(", ")}</p>
        </div>

        {/* Projects */}
        {projects?.some(p => p.name || p.description || p.link) && (
          <div style={styles.section}>
            <h3>Projects</h3>
            {projects.map((p, i) => (
              (p.name || p.description || p.link) && (
                <div key={i} style={{ marginBottom: "10px" }}>
                  {p.name && <strong>{p.name}</strong>}
                  {p.description && (
                    <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{p.description}</p>
                  )}
                  {p.link && (
                    <p style={{ margin: 0 }}>
                      <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
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

      <div style={styles.main}>
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
      </div>
    </div>
  );
}

export default TemplateModernSidebar;

// updated with about me and projects