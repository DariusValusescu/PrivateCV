import React from "react";

function AboutMe({ about, setAbout }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>About Me</h2>

      <textarea
        placeholder="Write something about yourself...(Optonal)"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        rows={4}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default AboutMe;