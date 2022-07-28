import { XCircle } from "phosphor-react";
import styles from "./Playlist.module.css";

const Playlist = () => {
  return (
    <div className={styles["favourite-list"]}>
      <div className={styles["album-detail"]}>
        <p className={styles["album-title"]}>Arctic Monkeys</p>
        <XCircle className={styles["remove-song"]} />
      </div>
      <p className={styles["song-name"]}>She's Thunderstorms</p>
      <p className={styles["song-durtaion"]}>3:45</p>
    </div>
  );
};

export default Playlist;
