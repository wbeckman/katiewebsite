"use client";

import { useState } from "react";

export default function Fireworks() {
  const [animationComplete, setAnimationComplete] = useState(true);
  const [fireworksVisible, setFireworksVisible] = useState(true);
  const [xOffset, setXOffset] = useState("");
  const [yOffset, setYOffset] = useState("");
  const yOffsetOptions = [
    "h-1/6 w-12",
    "h-2/6 w-12",
    "h-3/6 w-12",
    "h-4/6 w-12",
    "h-5/6 w-12",
  ];
  const xOffsetOptions = [
    "w-1/12 h-12",
    "w-2/12 h-12",
    "w-3/12 h-12",
    "w-4/12 h-12",
    "w-5/12 h-12",
    "w-6/12 h-12",
    "w-7/12 h-12",
    "w-8/12 h-12",
    "w-9/12 h-12",
    "w-10/12 h-12",
    "w-11/12 h-12",
  ];

  if (animationComplete) {
    setXOffset(
      xOffsetOptions[Math.floor(xOffsetOptions.length * Math.random())]
    );
    setYOffset(
      yOffsetOptions[Math.floor(yOffsetOptions.length * Math.random())]
    );
    setTimeout(() => {
      setFireworksVisible(false);
    }, 2500);
    setTimeout(() => {
      console.log("Setting fireworks in new position");
      setAnimationComplete(true);
    }, 2700);
    setAnimationComplete(false);
    setFireworksVisible(true);
  }

  return (
    <div className="absolute top-0 left-0 items-center overflow-hidden pointer-events-none h-screen w-screen">
      <div className="flex-col w-full h-full">
        <div className={`${yOffset}`}></div>
        <div className="flex">
          <div className={`${xOffset}`}></div>
          <div className={`h-auto md:w-1/6 w-1/2`}>
            {fireworksVisible && (
              <img
                className="h-auto w-full"
                src="/resources/thaidiner_fireworks.gif"
                alt="fireworks"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
