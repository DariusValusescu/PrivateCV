import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import Cropper from "react-easy-crop";

import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Feedback from "./components/Feedback";

import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";
import Template6 from "./templates/Template6";
import Template7 from "./templates/Template7";
import Template8 from "./templates/Template8";
import Template9 from "./templates/Template9";

import "./App.css";



function App() {
  const [personalData, setPersonalData] = useState({ name: "", email: "", phone: "" });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [template, setTemplate] = useState("template1");

  // ✅ NEW STATE (only addition)
  const [about, setAbout] = useState("");
  const [projects, setProjects] = useState([]);

  // Image states
  const [photo, setPhoto] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCrop, setShowCrop] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
      setShowCrop(true);
    };
    reader.readAsDataURL(file);
  };

  const onCropComplete = (_, pixels) => setCroppedAreaPixels(pixels);

  const getCroppedImg = async () => {
    const image = new Image();
    image.src = photo;
    await new Promise((r) => (image.onload = r));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    setPhoto(canvas.toDataURL("image/jpeg"));
    setShowCrop(false);
  };

  const saveData = () => {
    const data = { personalData, experience, education, skills, languages, photo, template, about, projects };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cv-data.json";
    a.click();
  };

  const loadData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const data = JSON.parse(ev.target.result);
      setPersonalData(data.personalData || {});
      setExperience(data.experience || []);
      setEducation(data.education || []);
      setSkills(data.skills || []);
      setLanguages(data.languages || []);
      setPhoto(data.photo || null);
      setTemplate(data.template || "template1");

      // ✅ NEW LOAD
      setAbout(data.about || "");
      setProjects(data.projects || []);
    };
    reader.readAsText(file);
  };

  const exportPDF = () => {
    const element = document.getElementById("cv-preview");
    html2pdf().from(element).set({
      margin: 0.5,
      filename: "cv.pdf",
      html2canvas: { scale: 2,
        useCORS: true
       },
      jsPDF: { unit: "in", format: "a4",
        orientation:"portrait"
       },
       pagebreak: {
        mode: ["avoid-all", "css", "legacy"]
       }
    }).save();
  };

  // ✅ IMPORTANT: added about + projects
  const cvData = { personalData, experience, education, skills, languages, photo, about, projects };
  return (
    <>
    <div className="app">
      <h1>CV Builder</h1>

      {/* Controls */}
      <div className="controls">
        <button onClick={saveData}>Save</button>
        <input type="file" onChange={loadData} />
        <button onClick={exportPDF}>Export PDF</button>
      </div>

      {/* Template Selector */}
      <div className="template-selector">
        <h3>Select Template</h3>

        <div className="template-grid">
          {[
            { key: "template1", label: "Classic" },
            { key: "template2", label: "Sidebar" },
            { key: "template3", label: "Modern" },
            { key: "template4", label: "Compact" },
            { key: "template5", label: "Header" },
            { key: "template6", label: "Elegant" },
            { key: "template7", label: "Professional" },
            { key: "template8", label: "Creative" },
            { key: "template9", lable: "Bubble(!!EXPERIMENTAL!!"},
          ].map((t) => (
            <div
              key={t.key}
              className={`template-card ${template === t.key ? "active" : ""}`}
              onClick={() => setTemplate(t.key)}
            >
              <div className={`template-preview ${t.key}`}></div>
              <p>{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo upload */}
      <input type="file" accept="image/*" onChange={handlePhotoUpload} />

      {/* Crop UI */}
      {showCrop && (
        <div className="crop-overlay">
          <div className="crop-container">
            <Cropper
              image={photo}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          <div className="crop-controls">
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
            />
            <button onClick={getCroppedImg}>Crop & Save</button>
            <button onClick={() => setShowCrop(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Forms */}
      <PersonalInfo data={personalData} setData={setPersonalData} />

      {/* ✅ NEW */}
      <AboutMe about={about} setAbout={setAbout} />

      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
      <Skills skills={skills} setSkills={setSkills} title="Skills" />
      <Skills skills={languages} setSkills={setLanguages} title="Languages" />

      {/* ✅ NEW */}
      <Projects projects={projects} setProjects={setProjects} />

      {/* Preview */}
      <div id="cv-preview" className="pdf-safe">
        {template === "template1" && <Template1 data={cvData} />}
        {template === "template2" && <Template2 data={cvData} />}
        {template === "template3" && <Template3 data={cvData} />}
        {template === "template4" && <Template4 data={cvData} />}
        {template === "template5" && <Template5 data={cvData} />}
        {template === "template6" && <Template6 data={cvData} />}
        {template === "template7" && <Template7 data={cvData} />}
        {template === "template8" && <Template8 data={cvData} />}
        {template === "template9" && <Template9 data={cvData} />}
      </div>
    </div>
    <Feedback/>
    </>
  );
}

export default App;