import React, { useState } from "react";

function WhatsNew() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 99999,
      }}
    >
      {/* Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "10px 15px",
            borderRadius: "20px",
            border: "none",
            background: "#5d7fa3",
            color: "white",
            cursor: "pointer",
          }}
        >
          What’s New
        </button>
      )}

      {/* Popup */}
      {open && (
        <div
          style={{
            width: "280px",
            background: "#111",
            color: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#aaa" }}>
            Build 2
          </h3>

          <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#ccc" }}>
            <p>Added What's New section</p>
            <p>Improved button labels</p>
            <p>Imporved feedback box</p>

          </div>

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

export default WhatsNew;