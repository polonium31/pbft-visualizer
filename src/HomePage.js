// HomePage.js
import React from "react";
import "./styles/HomePage.css";
import McMasterImage from "./asserts/mcmaster.png";
import GitHub from "./asserts/github.webp";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="content">
        <p>
          Practical Byzantine Fault Tolerance (pBFT) is a consensus algorithm
          designed for distributed systems to achieve fault tolerance and ensure
          consistency in the face of malicious nodes or Byzantine failures. It
          addresses the Byzantine Generals' Problem, where nodes in a network
          need to reach a unanimous decision, even when some nodes may behave
          dishonestly or fail. pBFT enables a set of distributed nodes to agree
          on a single, consistent state by relying on a series of cryptographic
          techniques and communication protocols. The algorithm ensures that the
          network can withstand and recover from Byzantine failures, making it a
          robust solution for maintaining consensus in decentralized systems.
        </p>
        <p>
          pBFT operates through a multi-step process involving leader election,
          message exchange, and voting. Nodes take turns being the designated
          leader, proposing transactions that others validate through a voting
          mechanism. Once a supermajority of nodes agree on the proposed
          transaction, it is considered committed. This fault-tolerant consensus
          mechanism ensures that honest nodes can overcome the influence of
          malicious or failing nodes, providing a high level of reliability and
          consistency in distributed systems.
        </p>
        <h3>
          This website offers dual visualizations of pBFT: the
          <span style={{ color: "Red" }}>Visual</span> section provides a
          simplified and approachable overview, breaking down concepts in a
          naive yet effective manner for a broad audience. In contrast, the{" "}
          <span style={{ color: "blue" }}>Algorithm</span> section delves into
          the precise workings of the pBFT consensus algorithm, catering to
          users seeking a comprehensive understanding through in-depth
          exploration of algorithmic processes and cryptographic techniques.
        </h3>
        <img
          src={McMasterImage}
          alt="McMaster University Logo"
          className="top-left-image"
        />
        <Link
          to="https://github.com/polonium31/pbft-visualizer"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={GitHub}
            alt="GitHub Repo Link"
            className="bottom-right-image"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
