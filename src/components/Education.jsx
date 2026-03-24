import React from "react";

function Education({ education, setEducation }) {
  // Add a new empty education entry
  const addEdu = () => {
    setEducation([...education, { school: "", degree: "", start: "", end: "" }]);
  };

  // Update a field
  const updateEdu = (index, field, value) => {
    const newEdu = [...education];
    newEdu[index][field] = value;
    setEducation(newEdu);
  };

  // Remove an entry
  const removeEdu = (index) => {
    const newEdu = [...education];
    newEdu.splice(index, 1);
    setEducation(newEdu);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Education</h2>
      {education.map((edu, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <input
            type="text"
            placeholder="School"
            value={edu.school}
            onChange={(e) => updateEdu(idx, "school", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEdu(idx, "degree", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Start Year"
            value={edu.start}
            onChange={(e) => updateEdu(idx, "start", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="End Year"
            value={edu.end}
            onChange={(e) => updateEdu(idx, "end", e.target.value)}
          />
          <br />
          <button onClick={() => removeEdu(idx)}>Remove</button>
        </div>
      ))}

      <button onClick={addEdu}>Add Education</button>
    </div>
  );
}

export default Education;