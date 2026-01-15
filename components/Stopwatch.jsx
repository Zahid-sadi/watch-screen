"use client";
import { useState, useRef,  } from "react";

export default function Stopwatch({ styleType }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => setTime((t) => t + 1), 1000);
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

  const formatTime = (t) => {
    const h = Math.floor(t / 3600).toString().padStart(2, "0");
    const m = Math.floor((t % 3600) / 60).toString().padStart(2, "0");
    const s = (t % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const fontClass = {
    Minimal: "font-minimal",
    Classic: "font-classic",
    Antique: "font-antique",
    Modern: "font-modern",
    Sport: "font-sport",
  };

  return (
    <div className={`absolute top-4 left-4 text-white text-lg ${fontClass[styleType]}`}>
      <div>{formatTime(time)}</div>
      <div className="flex mt-1 space-x-1">
        <button onClick={start} className="px-2 py-1 bg-green-500 rounded">▶</button>
        <button onClick={pause} className="px-2 py-1 bg-yellow-500 rounded">⏸</button>
        <button onClick={reset} className="px-2 py-1 bg-red-500 rounded">⏹</button>
      </div>
    </div>
  );
}
