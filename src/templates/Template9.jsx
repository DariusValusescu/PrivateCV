import React from "react";

function TemplateBubble({ data }) {
  const { personalData, experience, education, skills, languages, photo, about, projects } = data;

  const styles = {
    container: {
      position: "relative",
      width: "900px",
      height: "1100px",
      margin: "0 auto",
      background: "#f0f4f8",
      fontFamily: "Arial",
      overflow: "hidden"
    },

    bubble: {
      position: "absolute",
      borderRadius: "50%",
      background: "white",
      padding: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      textAlign: "center",
      wordBreak: "break-word",
      overflowWrap: "break-word"
    },

    center: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "260px",
      height: "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },

    top: {
      top: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "300px",
      height: "180px"
    },

    bottom: {
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "320px",
      height: "200px"
    },

    left: {
      top: "50%",
      left: "40px",
      transform: "translateY(-50%)",
      width: "220px",
      height: "200px"
    },

    right: {
      top: "50%",
      right: "40px",
      transform: "translateY(-50%)",
      width: "220px",
      height: "200px"
    },

    topLeft: {
      top: "200px",
      left: "80px",
      width: "200px",
      height: "180px"
    },

    topRight: {
      top: "200px",
      right: "80px",
      width: "200px",
      height: "180px"
    },

    photo: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px"
    },

    text: {
      fontSize: "12px",
      whiteSpace: "pre-wrap"
    }
  };

  return (
    <div style={styles.container}>

      {/* About Me (Top) */}
      {about && (
        <div style={{ ...styles.bubble, ...styles.top }}>
          <h3>About Me</h3>
          <p style={styles.text}>{about}</p>
        </div>
      )}

      {/* Personal Info (Center) */}
      <div style={{ ...styles.bubble, ...styles.center }}>
        {photo && <img src={photo} alt="Profile" style={styles.photo} />}
        <strong>{personalData.name}</strong>
        <p style={styles.text}>{personalData.email}</p>
        <p style={styles.text}>{personalData.phone}</p>
        {personalData.birthday && (<p>Date of birth{" "}{personalData.birthday}</p>)}
      </div>

      {/* Projects (Bottom) */}
      {projects?.some(p => p.name || p.description || p.link) && (
        <div style={{ ...styles.bubble, ...styles.bottom }}>
          <h3>Projects</h3>
          {projects.map((p, i) => (
            (p.name || p.description) && (
              <div key={i}>
                <strong>{p.name}</strong>
                <p style={styles.text}>{p.description}</p>
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      <div style={{ ...styles.bubble, ...styles.left }}>
        <h3>Education</h3>
        {education?.map((edu, i) => (
          <p key={i} style={styles.text}>
            {edu.degree} - {edu.school}
          </p>
        ))}
      </div>

      {/* Experience */}
      <div style={{ ...styles.bubble, ...styles.right }}>
        <h3>Experience</h3>
        {experience?.map((job, i) => (
          <p key={i} style={styles.text}>
            {job.role} @ {job.company}
          </p>
        ))}
      </div>

      {/* Skills */}
      <div style={{ ...styles.bubble, ...styles.topLeft }}>
        <h3>Skills</h3>
        <p style={styles.text}>{skills?.join(", ")}</p>
      </div>

      {/* Languages */}
      <div style={{ ...styles.bubble, ...styles.topRight }}>
        <h3>Languages</h3>
        <p style={styles.text}>{languages?.join(", ")}</p>
      </div>

    </div>
  );
}

export default TemplateBubble;