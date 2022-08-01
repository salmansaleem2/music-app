import { useState } from "react";
import { Play, Pause, CaretRight, CaretLeft, Heart } from "phosphor-react";
import context from "../../hooks/useMusic";
import styles from "./Player.module.css";

const Player = () => {
  return (
    <div className={styles["play-section"]}>
      <h1 className={styles["album-title"]}>
        Arctic <br /> Moneys
      </h1>
      <h1 className={styles["song-title"]}>She's Thunderstorm</h1>
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
          <Play className={styles["Play-icon"]} />
        </button>
        <CaretRight className={styles["caret-right"]} />
      </div>
      <Heart className={styles["heart-icon"]} />
    </div>
  );
};

export default Player;
