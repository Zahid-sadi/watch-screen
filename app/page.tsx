"use client";

import { useState } from "react";
import Clock from "@/components/Clock";
import Stopwatch from "@/components/Stopwatch";
import Timer from "@/components/Timer";
import FloatingButtons from "@/components/FloatingButtons";


export default function Home() {
  const [clockStyle, setClockStyle] = useState("Minimal");

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center relative transition-all duration-700 ${
        {
          Minimal: "bg-minimalBg",
          Classic: "bg-classicBg",
          Antique: "bg-antiqueBg",
          Modern: "bg-modernBg",
          Sport: "bg-sportBg",
        }[clockStyle]
      }`}
    >
      <Clock styleType={clockStyle} />

      <Stopwatch styleType={clockStyle} />
      <Timer styleType={clockStyle} />

      <FloatingButtons setClockStyle={setClockStyle} />
    </div>
  );
}
