import React from "react";

function PDFSafeWrapper({ children }) {
  return (
    <div id="pdf-wrapper" style={styles.outer}>
      <div style={styles.page}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  outer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#fff",
  },

  page: {
    width: "794px",          
    minHeight: "1123px",    
    boxSizing: "border-box",
    overflow: "visible",      
    background: "white",
  }
};

export default PDFSafeWrapper;