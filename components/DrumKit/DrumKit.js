import { useState, useEffect } from "react";
import styles from "./DrumKit.module.css";

const playSound = (audio) => {
  audio.currentTime = 0; //rewind audio
  audio.play();
};

const DrumKit = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    setButtons([
      {
        name: "bass",
        keyCode: 65,
        key: "A",
        audio: new Audio("/sounds/BD.wav"),
      },
      {
        name: "hi-hat",
        keyCode: 83,
        key: "S",
        audio: new Audio("/sounds/CH.wav"),
      },
      {
        name: "snare",
        keyCode: 68,
        key: "D",
        audio: new Audio("/sounds/SD.wav"),
      },
    ]);
  }, []);

  useEffect(() => {
    if (!buttons.length) return;

    const triggerSound = (evt) => {
      const btn = buttons.find((b) => b.keyCode === evt.keyCode);

      if (!btn?.audio) return;

      playSound(btn.audio);
    }

    window.addEventListener("keydown", triggerSound);

    return () => {
      window.removeEventListener("keydown", triggerSound);
    };
  }, [buttons]);

  return (
    <div>
      {buttons.map((b) => (
        <button className={styles.key} onClick={() => playSound(b.audio)}>
          <kbd className={styles.kbd}>{b.key}</kbd>
          <span className={styles.sound}>{b.name}</span>
        </button>
      ))}
    </div>
  );
};

export default DrumKit;
