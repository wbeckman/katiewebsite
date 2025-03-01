import React from "react";
import RandomAudioPlayer from "./RandomAudioPlayer";

export default function App() {
  return (
    <main>
      <div className="relative w-full h-screen">
        {/* --- Main Content (center) --- */}
        <div className="flex min-h-screen flex-col items-center justify-between py-24 bg-[url('/happy_birthday_gif.gif')]">
          <div>
            {/* Welcome Image */}
            <div>
              <img
                className="mx-auto md:w-3/4 w-full bg-katie-yellow"
                src="/welcome.png"
                alt="Welcome"
              />
            </div>

            {/* Valentine's Edition Image */}
            <div className="flex">
              <img
                className="mx-auto mt-4 md:w-1/4 w-1/2 bg-katie-yellow"
                src="/birthday_edition.png"
                alt="Valentine's Edition"
              />
            </div>

            {/* Awoogha Image */}
            <div>
              <img
                className="mx-auto max-w-60 w-full bg-katie-yellow mt-4"
                src="/cake_with_candles.gif"
                alt="birthday cake"
              />
            </div>

            {/* First Text Block */}
            <div className="flex mt-5">
              <p className="text-black mx-auto text-center max-w-2xl md:w-2xl w-xs bg-katie-yellow p-5 font-[Comic_neue]">
                Hi there! katie here. it's my birthday again!! ~keeping this one
                short~. if u c me wish me a happy birthday!!
              </p>
            </div>

            {/* Second Text Block */}
            <div>
              <p className="text-black mx-auto text-center max-w-2xl md:w-2xl w-xs bg-katie-yellow p-2 font-[Comic_neue]">
                okay!! signing off! peace and love
              </p>
            </div>

            {/* Signature */}
            <div>
              <p className="text-black pb-3 mx-auto text-center max-w-2xl md:w-2xl w-xs bg-katie-yellow font-[Comic_neue]">
                sincerely, katie
              </p>
            </div>

            {/* Audio Element */}
            <div className="mt-4 block md:max-w-md max-w-3/6 mx-auto">
              <RandomAudioPlayer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
