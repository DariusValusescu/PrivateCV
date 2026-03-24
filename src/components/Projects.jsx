import React from "react";

function Projects({ projects, setProjects }) {

  const addProject = () => {
    setProjects([
      ...projects,
      { name: "", description: "", link: "" } // ✅ added link
    ]);
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const removeProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Projects</h2>

      {projects.map((proj, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
          <input
            placeholder="Project Name"
            value={proj.name}
            onChange={(e) => updateProject(idx, "name", e.target.value)}
          />
          <br />

          <textarea
            placeholder="Description"
            value={proj.description}
            onChange={(e) => updateProject(idx, "description", e.target.value)}
          />
          <br />

          {/* ✅ NEW: Link input */}
          <input
            placeholder="Project Link (optional)"
            value={proj.link || ""}
            onChange={(e) => updateProject(idx, "link", e.target.value)}
          />
          <br />

          <button onClick={() => removeProject(idx)}>Remove</button>
        </div>
      ))}

      <button onClick={addProject}>Add Project</button>
    </div>
  );
}

export default Projects;