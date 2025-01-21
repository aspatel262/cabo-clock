import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./App.css"; // Your custom styles

const App = () => {
  return (
    <div style={{ textAlign: "center", color: "white", backgroundColor: "black", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", fontSize: "2rem", marginBottom: "20px" }}>
      ✈️🌴🍹🍉⛱️🥥 pack your bags. 🥥⛱️🍉🍹🌴✈️
      </h1>
      <FlipClockCountdown
        to={new Date("2025-03-03T08:55:00-05:00").getTime()}
        labels={["Days", "Hours", "Minutes", "Seconds"]}
        className="flip-clock"
      />
    </div>
  );
};

export default App;
