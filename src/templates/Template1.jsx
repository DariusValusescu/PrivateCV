import React from "react";

function Template1({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  return (
    <div style={{ textAlign: "center", overflow: "hidden" }}>
      <h1>CV</h1>

      <div className="profile" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {photo && <img src={photo} alt="Profile" style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }} />}
        
        <div>
          <p><strong>{personalData.name}</strong></p>
          <p>{personalData.email}</p>
          <p>{personalData.phone}</p>
          {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}
        </div>
      </div>

      {/*  About Me */}
      {about && (
        <div style={{ maxWidth: "600px", margin: "20px auto", wordBreak: "break-word", overflowWrap: "break-word" }}>
          <h2>About Me</h2>
          <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
            {about}
          </p>
        </div>
      )}

      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", wordBreak: "break-word", overflowWrap: "break-word" }}>
        
        <h2 style={{ marginTop: "20px" }}>Education</h2>
        {education.map((edu, i) => <p key={i}>{edu.degree} - {edu.school}</p>)}

        <h2 style={{ marginTop: "20px" }}>Experience</h2>
        {experience.map((job, i) => <p key={i}>{job.role} - {job.company}</p>)}

        {/*  Projects */}
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

        <h2 style={{ marginTop: "20px" }}>Skills</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {skills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h2 style={{ marginTop: "20px" }}>Languages</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {languages.map((l, i) => <li key={i}>{l}</li>)}
        </ul>

      </div>
    </div>
  );
}

export default Template1;

// with about me and projects