import React from "react";

function CustomArray({ name, length }) {
  return (
    <div
      id={`custom-array-${name}`}
      style={{
        marginLeft: "6%",
        display: "block",
        backgroundColor: "#E19090",
        width: "100%",
        whiteSpace: "nowrap", // Prevent line breaks
        overflow: "hidden", // Hide any overflowing content
        textAlign: "center",
        display: "none",
      }}
    >
      {Array.from({ length: length }, (_, index) => (
        <span
          key={index}
          id={`custom-array-${name}-${index}`}
          style={{
            border: "1px solid black",
            fontSize: "24px",
            padding: "5px",
            width: "85px",
            boxSizing: "border-box", // Include padding and border in the width
            display: "inline-block", // Make spans inline-block to be in a single row
          }}
        ></span>
      ))}
    </div>
  );
}

export default CustomArray;
