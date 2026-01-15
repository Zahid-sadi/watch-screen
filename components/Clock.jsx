"use client";
import { useEffect, useState } from "react";

export default function Clock({ styleType }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (t) =>
    `${t.getHours().toString().padStart(2, "0")}:${t
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${t.getSeconds().toString().padStart(2, "0")}`;

  const fontClass = {
    Minimal: "font-minimal text-green-400",
    Classic: "font-classic text-yellow-700",
    Antique: "font-antique text-amber-700",
    Modern: "font-modern text-blue-400",
    Sport: "font-sport text-red-500",
  };

  return (
    <div className={`absolute text-center text-[10vw] select-none ${fontClass[styleType]}`}>
      {formatTime(time)}
    </div>
  );
}
