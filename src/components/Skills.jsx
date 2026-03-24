import React, { useState } from "react";

function Skills({ skills, setSkills, title }) {
  const [input, setInput] = useState("");

  // Add new skill/language
  const addItem = () => {
    if (input.trim() === "") return;
    setSkills([...skills, input.trim()]);
    setInput("");
  };

  // Remove an item
  const removeItem = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={`Add ${title}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>
            {skill} <button onClick={() => removeItem(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;