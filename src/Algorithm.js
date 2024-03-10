import React, { useEffect, useRef } from "react";
import { ForceGraph2D } from "react-force-graph";
import * as d3 from "d3";
import treeData from "./treeData";
import Navbar from "./components/Navbar";

function Algorithm() {
  const ForceTree = ({ data }) => {
    const fgRef = useRef();

    useEffect(() => {
      fgRef.current.d3Force(
        "collision",
        d3.forceCollide().strength(0.2).radius(50)
      );
    }, []);

    const nodeCanvasObject = (node, ctx, globalScale) => {
      const label = node.module;
      const fontSize = 20 / globalScale;
      const padding = 5;

      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const radius = node.size * globalScale;
      const x = node.x;
      const y = node.y - radius - fontSize - 2 + 40;

      ctx.fillStyle = "rgb(255, 0, 80)";
      ctx.fillRect(
        x - textWidth / 2 - 2 - padding,
        y - padding,
        textWidth + 4 + 2 * padding,
        fontSize + 4 + 2 * padding
      );

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      ctx.fillText(label, x, y + fontSize / 2);
    };

    return (
      <>
        <Navbar style={{ zIndex: 1 }} /> {/* Container Layout */}
        <ForceGraph2D
          height={600}
          ref={fgRef}
          graphData={data}
          dagMode={"lr"}
          dagLevelDistance={150}
          backgroundColor="#ffdada"
          linkColor={() => "#2E2E2E"}
          nodeRelSize={2}
          nodeId="path"
          nodeVal={(node) => 100 / (node.level + 9)}
          nodeAutoColorBy="module"
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={9}
          d3VelocityDecay={0.3}
          nodeCanvasObject={nodeCanvasObject}
          centerAt={(0, 0)}
        />
      </>
    );
  };

  return <ForceTree data={treeData} />;
}

export default Algorithm;
