import React from "react";

function Projects({ projects, setProjects }) {

  const addProject = () => {
    setProjects([
      ...projects,
      { name: "", description: "", link: "" }
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
    <div className="projects-wrapper">

      <h2>Projects</h2>

      <div className="projects-editor">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-editor-item">
            <input
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) => updateProject(idx, "name", e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={proj.description}
              onChange={(e) => updateProject(idx, "description", e.target.value)}
              rows={3}
            />

            <input
              placeholder="Project Link (optional)"
              value={proj.link || ""}
              onChange={(e) => updateProject(idx, "link", e.target.value)}
            />

            <button onClick={() => removeProject(idx)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <button onClick={addProject}>Add Project</button>

      {/* PRINT MODE (THIS IS WHAT PDF USES) */}
      <div className="projects-print">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-item">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            {proj.link && <p>{proj.link}</p>}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;