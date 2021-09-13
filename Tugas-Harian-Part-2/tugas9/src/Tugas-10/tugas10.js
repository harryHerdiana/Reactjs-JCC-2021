import React, { useState, useEffect } from "react";
import "./assets/tugas10.css";
import Clock from "./clock";

const Tugas10 = () => {
  const [count, setCount] = useState(100);
  const countDown = () => setCount(count - 1);
  let clock = document.getElementById("clockCountdown");
  // Mirip dengan componentDidMount dan componentDidUpdate:
  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    if (count !== 0) {
      setTimeout(countDown, 1000);
    }
    if (count === 0) {
      clock.remove();
    }
  });
  return (
    <div id="clockContainer">
      <div id="clockCountdown">
        <Clock />
        <p>Countdown: {count}</p>
      </div>
    </div>
  );
};

export default Tugas10;
