import React from "react";

function TemplateCreativeCard({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  const styles = {
    container: {
      fontFamily: "sans-serif",
      background: "#f0f2f5",
    },
    header: {
      background: "#5d7fa3",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      objectFit: "cover",
    },
    content: {
      padding: "20px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    card: {
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      wordBreak: "break-word",        
      overflowWrap: "break-word",     
    },
    tag: {
      display: "inline-block",
      background: "#5d7fa3",
      color: "#fff",
      padding: "5px 10px",
      margin: "5px",
      borderRadius: "5px",
      fontSize: "12px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "600" }}>
            {personalData.name}
          </h1>
          <p style={{ marginTop: "8px" }}>
            {personalData.email} | {personalData.phone}
          </p>
          {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}
        </div>

        {photo && <img src={photo} alt="Profile" style={styles.photo} />}
      </div>

      {about && (
        <div style={{ ...styles.card, margin: "20px" }}>
          <h3>About Me</h3>
          <p style={{ margin: 0, whiteSpace: "pre-wrap" }}> 
            {about}
          </p>
        </div>
      )}

      <div style={styles.content}>
        <div style={styles.card}>
          <h3>Education</h3>
          {education?.map((edu, i) => (
            <p key={i}>
              <strong>{edu.degree}</strong> — {edu.school}
            </p>
          ))}
        </div>

        <div style={styles.card}>
          <h3>Experience</h3>
          {experience?.map((job, i) => (
            <p key={i}>
              {job.role} @ {job.company}
            </p>
          ))}
        </div>

        <div style={styles.card}>
          <h3>Skills</h3>
          {skills?.map((s, i) => (
            <span key={i} style={styles.tag}>{s}</span>
          ))}
        </div>

        <div style={styles.card}>
          <h3>Languages</h3>
          <p>{languages?.join(", ")}</p>
        </div>
      </div>

      {projects?.some(p => p.name || p.description || p.link) && (
        <div style={{ ...styles.card, margin: "20px" }}>
          <h3>Projects</h3>

          {projects.map((p, i) => (
            (p.name || p.description || p.link) && (
              <div key={i} style={{ marginBottom: "10px",pageBreakInside: "avoid", breakInside: "block", display: "block" }}>
                {p.name && <strong>{p.name}</strong>}

                {p.description && (
                  <p style={{ margin: 0, whiteSpace: "pre-wrap" }}> 
                    {p.description}
                  </p>
                )}

                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.link}
                  </a>
                )}
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export default TemplateCreativeCard;

// with adout me and projects added