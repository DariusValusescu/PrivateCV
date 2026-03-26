import React, { useState } from "react";
import emailjs from "emailjs-com";

function Feedback() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [lastSent, setLastSent] = useState(0);

  const handleSubmit = () => {
    // Basic validation
    if (!message.trim()) {
      alert("Please write some feedback first.");
      return;
    }

    // Anti-spam (5 seconds cooldown)
    if (Date.now() - lastSent < 5000) {
      alert("Please wait a few seconds before sending again.");
      return;
    }

    // Close 
    setOpen(false);
    

    emailjs.send(
      "service_xlekhf7",   
      "template_cvqrcyp",  
      {
        message: message,
      },
      "S6DVeEG2gFzVeI9q7"   
    ).then(
      () => {
        alert("Feedback sent successfully!");
        setMessage("");
        setOpen(false);
        setLastSent(Date.now());
      },
      (error) => {
        console.error(error);
        alert("Failed to send feedback.");
      }
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 99999,
      }}
    >
      {/* Toggle Button */}
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
          Feedback
        </button>
      )}

      {/* Popup */}
      {open && (
        <div
          style={{
            width: "260px",
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h3 style={{ marginTop: 0,color: "#202727"}}>Feedback</h3>

          <textarea
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              height: "90px",
              marginBottom: "10px",
              padding: "8px",
              
              color: "#fff",
              background: "#0000",
              frontSize: "14px",
              lineHeight: "1.5",

              border:"1px solid #ccc",
              borderRadius: "6px",

              caretColor: "#fff",
              outline: "none",

              resize: "none",

            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: "5px 10px",
                background: "#5d7fa3",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>

            <button
              onClick={() => setOpen(false)}
              style={{
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;