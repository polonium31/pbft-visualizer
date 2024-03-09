import React from "react";
import Graph from "./Graph";
import "./App.css";
function App() {
  return (
    <>
      <h1 className="heading">
        practical Byzantine Fault Tolerance(pBFT) Visualizer
      </h1>
      <div className="graph">
        <Graph />
      </div>
    </>
  );
}

export default App;
