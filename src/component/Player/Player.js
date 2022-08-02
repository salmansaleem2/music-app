import { useState, useMemo, useRef } from "react";
import Audio from "ts-audio";
import { Play, Pause, CaretRight, CaretLeft, Heart } from "phosphor-react";

import context from "../../hooks/useMusic";
import styles from "./Player.module.css";

const Player = () => {
  const { currentAudio } = context();
  const [play, setPlay] = useState(true);
  const [favourite, setIsFavourite] = useState(false);

  const audio = Audio({
    file: currentAudio?.preview_url,
  });

  const startAudio = () => {
    audio.play();
    setPlay(false);
  };

  const pauseAudio = () => {
    audio.pause();
    setPlay(true);
  };

  console.log(currentAudio);
  return (
    <div className={styles["play-section"]}>
      <h1 className={styles["album-title"]}>
        {/* Arctic <br /> Moneys */}
        {currentAudio?.album?.name}
      </h1>
      <h1 className={styles["song-title"]}>{currentAudio.name}</h1>
      <p className={styles["song-length"]}>03:45</p>
      <input
        id="size-input"
        name="size-input"
        type="range"
        min="0"
        max="100"
        className={styles.rangeInput}
      ></input>
      <p className={styles["song-current-time"]}>00:34</p>
      <div className={styles["play-next-section"]}>
        <CaretLeft className={styles["caret-left"]} />
        <button className={styles["plat-btn"]}>
          {play ? (
            <Play className={styles["Play-icon"]} onClick={startAudio} />
          ) : (
            <Pause className={styles["Pause-icon"]} onClick={pauseAudio} />
          )}
          {/* <Pause className={styles["Pause-icon"]} /> */}
        </button>
        <CaretRight className={styles["caret-right"]} />
      </div>
      {favourite ? (
        <Heart
          className={styles["heart-icon"]}
          onClick={() => setIsFavourite(false)}
        />
      ) : (
        <Heart
          className={styles["heart-icon-favourite"]}
          onClick={() => setIsFavourite(true)}
        />
      )}
    </div>
  );
};

export default Player;
