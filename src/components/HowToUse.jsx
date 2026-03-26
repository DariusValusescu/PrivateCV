import React, { useState } from "react";

function HowToUse() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button (goes near Export PDF) */}
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "8px 12px",
          marginLeft: "10px",
          borderRadius: "6px",
          border: "none",
          background: "#5d7fa3",
          color: "white",
          cursor: "pointer",
        }}
      >
        How to use
      </button>

      {/* Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            background: "#111",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            zIndex: 99999,
          }}
        >
          <h3 style={{ marginTop: 0, color: "#aaa" }}>
            How to use
          </h3>

          <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#ccc" }}>
            If you have the json file with the info you can add it so you dont need to wirte all the info again
            <br /><br />
            1. Fill in your personal information.
            <br /><br />
            2. Add your experience and education.
            <br /><br />
            3. Add skills and languages.
            <br /><br />
            4. (Optional) Add About Me and Projects.
            <br /><br />
            5. Choose a template.
            <br /><br />
            6. Upload and crop your photo.
            <br /><br />
            7. Click "Export PDF" to download your CV.
            <br /><br />
            8. Save the data as a json file.
          </p>

          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: "10px",
              padding: "6px 10px",
              border: "none",
              background: "#5d7fa3",
              color: "white",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default HowToUse;