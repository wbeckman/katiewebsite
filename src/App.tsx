import React from 'react';

// Example side images (adjust paths and quantity as desired)
const leftSideImages = ['/gold_glitter_cupid.gif', '/valentines_day_2_glitter_hearts_pink.gif'];
const rightSideImages = ['/lips.gif', '/happy_valentines_day.gif'];

// Helper to get random rotation between -25 and 25 degrees
function getRandomRotation() {
  return Math.floor(Math.random() * 51) - 25;
}

export default function App() {
  return (
    <main>
      <div className="relative w-full h-screen">
        
        {/* --- Left Column (absolute) --- */}
        <div className="absolute top-0 left-0 w-1/6 h-full flex flex-col items-center justify-evenly p-2">
          {leftSideImages.map((src, idx) => (
            <img
              key={`left-${idx}`}
              src={src}
              alt={`Left ${idx}`}
              // Apply random rotation inline
              style={{ transform: `rotate(${getRandomRotation()}deg)` }}
              className="max-w-[150px] transition-transform duration-300 m-2"
            />
          ))}
        </div>

        {/* --- Right Column (absolute) --- */}
        <div className="absolute top-0 right-0 w-1/6 h-full flex flex-col items-center justify-evenly p-2">
          {rightSideImages.map((src, idx) => (
            <img
              key={`right-${idx}`}
              src={src}
              alt={`Right ${idx}`}
              // Apply random rotation inline
              style={{ transform: `rotate(${getRandomRotation()}deg)` }}
              className="max-w-[150px] transition-transform duration-300 m-2"
            />
          ))}
        </div>

        {/* --- Main Content --- */}
        <div className="flex min-h-screen flex-col items-center justify-between py-24 bg-[url('/cupid_struck.gif')]">
          
          <div>
            

            {/* Welcome Image */}
            <div>
              <img
                className="mx-auto md:w-3/4 w-full bg-pink-200"
                src="/welcome.png"
                alt="Welcome"
              />
            </div>

            {/* Valentine's Edition Image */}
            <div className="flex">
              <img
                className="mx-auto mt-4 md:w-1/4 w-1/2 bg-pink-200"
                src="/valentines_edition.png"
                alt="Valentine's Edition"
              />
            </div>

            {/* AwhoOOOOOOGGhhhAAa */}
            <div>
              <img
                className="mx-auto max-w-60 w-full bg-pink-200 mt-4"
                src="/awoogha1.gif"
                alt="Welcome"
              />
            </div>

            {/* First Text Block */}
            <div className="flex mt-5">
              <p className="text-black mx-auto text-center max-w-2xl bg-pink-200 p-5">
                Uhhhh... hey katie here... did you know? It's valentine's day...
                hope you can give that special someone a kiss ;). Or, if you
                don't have a special someone right now, maybe get an ice cream
                for yourself.
              </p>
            </div>

            {/* Second Text Block */}
            <div>
              <p className="text-black mx-auto text-center max-w-2xl bg-pink-200 p-2">
                okay!! signing off! peace and love
              </p>
            </div>

            {/* Signature */}
            <div>
              <p className="text-black pb-3 mx-auto text-center max-w-2xl bg-pink-200">
                XOXO Katie 😘
              </p>
            </div>

            {/* Audio Element */}
            <div className="mt-4">
              <audio id="song" className="block md:max-w-md max-w-3/6 mx-auto" controls>
                <source src="/awhooga_horn.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
