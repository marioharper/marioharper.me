import { useState, useEffect } from "react";
import styles from "./DrumKit.module.css";

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

    const playSound = (evt) => {
      const btn = buttons.find((b) => b.keyCode === evt.keyCode);

      if (!btn?.audio) return;

      btn.audio.currentTime = 0; //rewind audio
      btn.audio.play();
    };

    window.addEventListener("keydown", playSound);

    return () => {
      window.removeEventListener("keydown", playSound);
    };
  }, [buttons]);

  return (
    <div>
      {buttons.map((b) => (
        <div className={styles.key}>
          <kbd className={styles.kbd}>{b.key}</kbd>
          <span className={styles.sound}>{b.name}</span>
        </div>
      ))}
    </div>
  );
};

export default DrumKit;
