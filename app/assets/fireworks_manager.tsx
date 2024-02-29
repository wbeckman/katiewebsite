"use client";

import { useState } from "react";
import Fireworks from "@/app/assets/fireworks";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function FireworksManager() {
  const [fireworksVisible, setFireworksVisible] = useState(false);
  return (
    <div className="mt-5 flex items-center justify-center content-center">
      {fireworksVisible && <Fireworks />}
      <button
        className={`text-black bg-gray-200 border-2 border-gray-500 rounded-md p-2 ml-2 hover:bg-gray-700 active:bg-gray-600 ${comicNeue.className}`}
        onClick={() => setFireworksVisible(!fireworksVisible)}
      >
        {!fireworksVisible ? "Get this party started" : "Stop the party"}
      </button>
    </div>
  );
}
