import { useEffect, useState, useRef } from "react";

const audioFiles = import.meta.glob("/src/assets/dj_samples/*.mp3", {
  eager: true,
});

const RandomAudioPlayer: React.FC = () => {
  const [audioList, setAudioList] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Extract file paths from the imported files
    const files = Object.values(audioFiles).map((mod) => {
      if (typeof mod === "object" && mod !== null && "default" in mod) {
        return mod.default as string;
      }
      return "";
    });

    setAudioList(files.filter((file) => file !== "")); // Filter out empty strings
  }, []);

  const playRandomClip = () => {
    if (audioList.length === 0) return;

    const randomClip = audioList[Math.floor(Math.random() * audioList.length)];

    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = randomClip;
      audioRef.current.load(); // Reload the new source
      audioRef.current.play();
    } else {
      // Create a new audio instance if not initialized
      const newAudio = new Audio(randomClip);
      audioRef.current = newAudio;
      newAudio.play();
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={playRandomClip}
        className="px-4 py-2 bg-katie-yellow text-black rounded-md hover:bg-yellow-400 transition font-[Comic_Neue]"
      >
        Did someone say birthday?
      </button>
    </div>
  );
};

export default RandomAudioPlayer;
