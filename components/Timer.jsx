"use client";
import { useState, useRef } from "react";

export default function Timer({ styleType }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const alarm = new Audio("/alarm.mp3");

  const start = () => {
    if (!running && time > 0) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((t) => {
          if (t <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            alarm.play();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
  };
  const pause = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };
  const reset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const fontClass = {
    Minimal: "font-minimal",
    Classic: "font-classic",
    Antique: "font-antique",
    Modern: "font-modern",
    Sport: "font-sport",
  };

  return (
    <div className={`absolute bottom-4 right-4 text-white text-lg ${fontClass[styleType]}`}>
      <input
        type="number"
        min="0"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value))}
        className="w-20 px-2 py-1 text-black rounded"
        placeholder="sec"
      />
      <div className="flex mt-1 space-x-1">
        <button onClick={start} className="px-2 py-1 bg-green-500 rounded">▶</button>
        <button onClick={pause} className="px-2 py-1 bg-yellow-500 rounded">⏸</button>
        <button onClick={reset} className="px-2 py-1 bg-red-500 rounded">⏹</button>
      </div>
    </div>
  );
}
