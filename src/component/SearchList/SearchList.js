import { Play, Heart } from "phosphor-react";
import styles from "./SearchList.module.css";

const SearchList = () => {
  return (
    <div className={styles["search-result"]}>
      <div>
        <p className={styles["album-name"]}>Artic Monkeys</p>
        <p className={styles["song-name"]}>
          She's Thunderstorm <span>(3:45)</span>
        </p>
      </div>
      <div className={styles.icons}>
        <Play className={styles["Play-icon"]} />
        <Heart className={styles["heart-icon"]} />
      </div>
    </div>
  );
};

export default SearchList;
