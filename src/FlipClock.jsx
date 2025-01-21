import React, { useState, useEffect } from "react";
import "./FlipClock.css";

const FlipClock = ({ targetDateTime }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const target = new Date(targetDateTime);
      const difference = target - now;

      if (difference <= 0) {
        setTimeRemaining({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeRemaining({ hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  const FlipUnit = ({ value, label }) => (
    <div className="flip-unit">
      <div className="flip-card">
        <div className="top">{value}</div>
        <div className="bottom">{value}</div>
      </div>
      <p className="label">{label}</p>
    </div>
  );

  return (
    <div className="flip-clock">
      <FlipUnit value={timeRemaining.hours} label="Hours" />
      <FlipUnit value={timeRemaining.minutes} label="Minutes" />
      <FlipUnit value={timeRemaining.seconds} label="Seconds" />
    </div>
  );
};

export default FlipClock;
