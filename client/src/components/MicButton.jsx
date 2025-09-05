import React, { useState } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import "./MicButton.css";

const MicButton = () => {
  const [listening, setListening] = useState(false);

  const toggleMic = () => {
    setListening(!listening);
    if (!listening) {
      console.log("🎤 Mic started...");
      // here you can later add SpeechRecognition API
    } else {
      console.log("🛑 Mic stopped.");
    }
  };

  return (
    <button className={`mic-btn ${listening ? "active" : ""}`} onClick={toggleMic}>
      {listening ? <FaStop /> : <FaMicrophone />}
    </button>
  );
};

export default MicButton;
