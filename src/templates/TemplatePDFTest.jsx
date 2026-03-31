import React from "react";

function TemplatePDFTest() {
  const styles = {
    container: {
      width: "100%",                 
      boxSizing: "border-box",
      fontFamily: "Arial",
      background: "#f5f7fa",
      padding: "0",
      margin: "0"
    },

    header: {
      background: "#4a7bd1",
      color: "white",
      padding: "20px",


      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      boxSizing: "border-box"
    },

    photo: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      objectFit: "cover",
      flexShrink: 0,
      maxWidth: "100%",
      border: "2px solid white"
    },

    section: {
      background: "white",
      margin: "20px",
      padding: "15px",
      borderRadius: "10px",


      boxSizing: "border-box",
      minWidth: 0
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
      width: "100%"
    },

    box: {
      background: "#eef2f7",
      padding: "10px",
      borderRadius: "8px",
      minHeight: "60px",
      wordBreak: "break-word",
      overflowWrap: "break-word"
    },

    line: {
      height: "2px",
      background: "#ddd",
      margin: "10px 0"
    }
  };

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <h1 style={{ margin: 0 }}>TEST CV EXPORT</h1>
          <p style={{ margin: "5px 0 0 0" }}>
            This is a layout debugging template
          </p>
        </div>

        <img
          src="https://placekitten.com/200/200"
          alt="test"
          style={styles.photo}
        />
      </div>

      {/* ABOUT */}
      <div style={styles.section}>
        <h2>About Section</h2>
        <p>
          This is a test paragraph to check spacing, overflow and PDF alignment.
          If this text is cut, your export system is still broken.
        </p>
      </div>

      {/* GRID TEST */}
      <div style={{ ...styles.section, ...styles.grid }}>

        <div style={styles.box}>
          <h3>Left Box</h3>
          <p>Testing grid layout alignment inside PDF export.</p>
        </div>

        <div style={styles.box}>
          <h3>Right Box</h3>
          <p>This checks if right side gets cut or shifted.</p>
        </div>

      </div>

      {/* LINES TEST */}
      <div style={styles.section}>
        <h2>Layout Lines</h2>

        <div style={styles.line}></div>
        <p>Line above should be full width inside page</p>

        <div style={styles.line}></div>
        <p>Another separator test</p>
      </div>

      {/* STRETCH TEST */}
      <div style={styles.section}>
        <h2>Overflow Test</h2>

        <p>
          0123456789 0123456789 0123456789 0123456789 0123456789
          0123456789 0123456789 0123456789 0123456789 0123456789
        </p>

        <p>
          If this text breaks or gets cut → export is still incorrect.
        </p>
      </div>

    </div>
  );
}

export default TemplatePDFTest;