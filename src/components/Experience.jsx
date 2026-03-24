import React from "react";

function Experience({ experience, setExperience }) {
  // Add a new empty job
  const addJob = () => {
    setExperience([
      ...experience,
      { company: "", role: "", start: "", end: "" },
    ]);
  };

  // Update a job field
  const updateJob = (index, field, value) => {
    const newExp = [...experience];
    newExp[index][field] = value;
    setExperience(newExp);
  };

  // Remove a job
  const removeJob = (index) => {
    const newExp = [...experience];
    newExp.splice(index, 1);
    setExperience(newExp);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Experience</h2>
      {experience.map((job, idx) => (
        <div key={idx} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <input
            type="text"
            placeholder="Company"
            value={job.company}
            onChange={(e) => updateJob(idx, "company", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Role"
            value={job.role}
            onChange={(e) => updateJob(idx, "role", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Start Year"
            value={job.start}
            onChange={(e) => updateJob(idx, "start", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="End Year"
            value={job.end}
            onChange={(e) => updateJob(idx, "end", e.target.value)}
          />
          <br />
          <button onClick={() => removeJob(idx)}>Remove</button>
        </div>
      ))}

      <button onClick={addJob}>Add Job</button>
    </div>
  );
}

export default Experience;