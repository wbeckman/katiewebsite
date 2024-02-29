import Image from "next/image";

import FireworksManager from "./assets/fireworks_manager";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between py-24  bg-[url('/happy_birthday_candles_with_silver_glitter.gif')]">
        <div>
          <div>
            <Image
              className="mx-auto md:w-3/4 w-full px- bg-katie-yellow"
              src="/welcome.png"
              alt="Welcome"
              width={1}
              height={1}
            />
          </div>
          <div>
            <Image
              className="mx-auto mt-4 md:w-1/4 w-1/2 bg-katie-yellow"
              src="/birthday_edition.png"
              alt="Birthday edition"
              width={10}
              height={10}
            />
          </div>
          <div className="flex mt-5">
            <p
              className={`text-black mx-auto text-center max-w-2xl bg-katie-yellow p-5 ${comicNeue.className}`}
            >
              Umm, hi! My name is Katie and this is my place on the
              internet...... welcome! in case you didn&apos;t realize from all
              the decorations, it&apos;s a very special day (my birthday). Plz
              wish me a happy birthday everyone.... thank you!!!!
            </p>
          </div>
          <div>
            <p
              className={`text-black pb-3 mx-auto text-center max-w-2xl bg-katie-yellow ${comicNeue.className}`}
            >
              XOXO Katie 😘
            </p>
          </div>

          <div className="items-center">
            <FireworksManager />
          </div>

          <div className="mt-4">
            <audio
              id="song"
              className="block md:max-w-md max-w-3/6 mx-auto"
              controls
            >
              <source src="/birthday_bitch.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </main>
  );
}
