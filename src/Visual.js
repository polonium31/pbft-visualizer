import React, { useState } from "react";
import "./styles/Visual.css";
import UserImage from "./asserts/user.png";
import MainServerImage from "./asserts/main-server.png";
import SubServerImage from "./asserts/sub-server.png";
import CustomArray from "./components/CustomArray";
import Navbar from "./components/Navbar";
import { redirect } from "react-router-dom";
function Animated() {
  const [pressCount, setPressCount] = useState(0);

  const handleNextButtonClick = () => {
    setPressCount((prevCount) => prevCount + 1);

    switch (pressCount + 1) {
      case 1:
        let message = document.getElementById("message-div");

        message.style.display = "block";
        setTimeout(function () {
          message.style.top = "50.99%";
          message.style.left = "47.22%";
          document.getElementById("status").innerText = "Sending Message";
          setTimeout(function () {
            message.style.display = "none";
            let message1 = document
              .getElementById("message-div")
              .innerText.split(" ");

            let filteredWords = message1.filter((word) => word.trim() !== "");

            let newDiv = document.createElement("div");
            newDiv.id = "message-span-div";
            newDiv.innerHTML = filteredWords
              .map((word, index) => {
                let div = document.createElement("div");
                div.id = "div-span-word-" + index;
                div.style.position = "absolute";
                let span = document.createElement("span");
                span.textContent = word + " ";

                div.appendChild(span);
                return div.outerHTML;
              })
              .join(" ");
            document
              .getElementById("message-div")
              .parentNode.replaceChild(
                newDiv,
                document.getElementById("message-div")
              );
            document.getElementById("message-span-div").style.display = "none";
            document.getElementById("status").innerText =
              "Message send to main server";
          }, 4000);
        }, 2);
        break;

      case 2:
        document.getElementById("custom-array-s1").style.display = "block";
        document.getElementById("custom-array-s2").style.display = "block";
        document.getElementById("custom-array-s3").style.display = "block";
        document.getElementById("custom-array-s4").style.display = "block";
        document.getElementById("status").innerText =
          "Preparing to send message";
        break;
      case 3:
        document.getElementById("custom-array-s1-0").innerText =
          document.getElementById("div-span-word-0").innerText;
        document.getElementById("custom-array-s2-0").innerText =
          document.getElementById("div-span-word-1").innerText;
        document.getElementById("custom-array-s3-0").innerText =
          document.getElementById("div-span-word-2").innerText;
        document.getElementById("custom-array-s4-0").innerText =
          document.getElementById("div-span-word-3").innerText;

        document.getElementById("status").innerText =
          "Message send to sub server";
        break;

      case 4:
        document.getElementById("custom-array-s2-1").innerText =
          document.getElementById("div-span-word-0").innerText;
        document.getElementById("custom-array-s3-1").innerText =
          document.getElementById("div-span-word-0").innerText;
        document.getElementById("custom-array-s4-1").innerText =
          document.getElementById("div-span-word-0").innerText;
        document.getElementById("status").innerText =
          "Sub server 1 sends message";

        break;

      case 5:
        document.getElementById("custom-array-s1-1").innerText =
          document.getElementById("div-span-word-1").innerText;
        document.getElementById("custom-array-s3-2").innerText =
          document.getElementById("div-span-word-1").innerText;
        document.getElementById("custom-array-s4-2").innerText =
          document.getElementById("div-span-word-1").innerText;
        document.getElementById("status").innerText =
          "Sub server 2 sends message";
        break;
      case 6:
        document.getElementById("custom-array-s1-2").innerText =
          document.getElementById("div-span-word-2").innerText;
        document.getElementById("custom-array-s2-2").innerText =
          document.getElementById("div-span-word-2").innerText;
        document.getElementById("custom-array-s4-3").innerText =
          document.getElementById("div-span-word-2").innerText;
        document.getElementById("status").innerText =
          "Sub server 3 sends message";
        break;
      case 7:
        document.getElementById("custom-array-s1-3").innerText =
          document.getElementById("div-span-word-3").innerText;
        document.getElementById("custom-array-s2-3").innerText =
          document.getElementById("div-span-word-3").innerText;
        document.getElementById("custom-array-s3-3").innerText =
          document.getElementById("div-span-word-3").innerText;
        document.getElementById("status").innerText =
          "Sub server 4 sends message";
        break;
      case 8:
        document.getElementById("custom-array-s1-0").innerText = "My";
        document.getElementById("custom-array-s1-1").innerText = "name";
        document.getElementById("custom-array-s1-2").innerText = "is";
        document.getElementById("custom-array-s1-3").innerText = "John";

        document.getElementById("custom-array-s2-0").innerText = "My";
        document.getElementById("custom-array-s2-1").innerText = "name";
        document.getElementById("custom-array-s2-2").innerText = "is";
        document.getElementById("custom-array-s2-3").innerText = "John";

        document.getElementById("custom-array-s3-0").innerText = "My";
        document.getElementById("custom-array-s3-1").innerText = "name";
        document.getElementById("custom-array-s3-2").innerText = "is";
        document.getElementById("custom-array-s3-3").innerText = "John";

        document.getElementById("custom-array-s4-0").innerText = "My";
        document.getElementById("custom-array-s4-1").innerText = "name";
        document.getElementById("custom-array-s4-2").innerText = "is";
        document.getElementById("custom-array-s4-3").innerText = "John";
        document.getElementById("custom-array-s1").style.backgroundColor =
          "#A5E190";
        document.getElementById("custom-array-s2").style.backgroundColor =
          "#A5E190";
        document.getElementById("custom-array-s3").style.backgroundColor =
          "#A5E190";
        document.getElementById("custom-array-s4").style.backgroundColor =
          "#A5E190";
        document.getElementById("status").innerText = "Message committed";
        break;
      default:
        document.getElementById("custom-array-s1").innerText = "";
        document.getElementById("custom-array-s2").innerText = "";
        document.getElementById("custom-array-s3").innerText = "";
        document.getElementById("custom-array-s4").innerText = "";
        document.getElementById("next-button").innerText = "NO MORE STEPS";
        document.getElementById("next-button").style.fontSize = "12px";
        document.getElementById("next-button").style.backgroundColor =
          "#373737";
        document.getElementById("next-button").disabled = true;
        alert("No more steps, Explore other features!");
        setPressCount(0);

        break;
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <div id="user-image-div">
          <img src={UserImage} alt="" />
        </div>

        <div id="message-div">
          <p>My name is John</p>
        </div>

        <div id="m-r" style={{ position: "absolute" }}>
          <p>Current Status:</p>
          <p id="status">No Process</p>
        </div>
        <div id="main-server-image-div">
          <img src={MainServerImage} alt="" />
        </div>

        <div className="server-image-div-1" id="server-image-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={SubServerImage} alt="" />
            <CustomArray name="s1" length={4} />
          </div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginLeft: "10px",
            }}
          >
            1
          </span>
        </div>
        <div className="server-image-div-2" id="server-image-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={SubServerImage} alt="" />
            <CustomArray name="s2" length={4} />
          </div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginLeft: "10px",
            }}
          >
            2
          </span>
        </div>
        <div className="server-image-div-3" id="server-image-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={SubServerImage} alt="" />
            <CustomArray name="s3" length={4} />
          </div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginLeft: "10px",
            }}
          >
            3
          </span>
        </div>

        <div className="server-image-div-4" id="server-image-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={SubServerImage} alt="" />
            <CustomArray name="s4" length={4} />
          </div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginLeft: "10px",
            }}
          >
            4
          </span>
        </div>

        <div className="next-button-div">
          <button
            className="btn btn-primary lg"
            id="next-button"
            onClick={handleNextButtonClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Animated;
