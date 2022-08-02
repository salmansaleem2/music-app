import {
  CloudLightning,
  XCircle,
  Play,
  Pause,
  CaretRight,
  CaretLeft,
  Heart,
} from "phosphor-react";
import { useEffect, useState } from "react";
import context from "../../hooks/useMusic";
import Audio from "ts-audio";
import styles from "./AddToFavoutire.module.css";

const AddToFavoutire = () => {
  const [isDataShow, setIsDataShow] = useState(false);
  const [timeStamp, setTimeStamp] = useState(9462);
  const [isFavourite, setIsFavourite] = useState(false);
  const [song, setSong] = useState({ hour: "00", minutes: "00", second: "00" });
  const {
    searchData,
    IsSearchClick,
    SearchIconClick,

    currentTrack,
    currentAudio,
  } = context();
  // console.log("track", track);
  // console.log("track", currentTrack);

  const href = searchData?.data?.tracks;
  const itemss = href?.items;
  // console.log("itemssRES", itemss);

  useEffect(() => {
    setIsDataShow(true);
  }, [SearchIconClick]);

  const handleSong = (e) => {
    currentTrack(e);
  };

  const handlePlaySong = (e) => {
    const audio = new Audio(e);
    audio.play();
    SearchIconClick(false);
  };

  return (
    <>
      {isDataShow && (
        <div className="favourite-list-section">
          {itemss?.map((items, i) => (
            <>
              <div className={styles["favourite-list"]}>
                <div>
                  <div className={styles["songs-list"]}>
                    <div>
                      {/* <div className={styles["album-detail"]}>
                        <p
                          className={styles["album-title"]}
                          onClick={(e) => handleSong(e)}
                        >
                          {items[i]?.preview_url}
                        </p>
                      </div> */}
                      <div className={styles["album-detail"]}>
                        <p className={styles["song-name"]}>{items.name}</p>
                        <p className={styles["song-durtaion"]}>
                          {/* ({timeStamp2(9462)}){song.hour} */}
                          (3:34)
                        </p>
                        <p className={styles["song-durtaion"]}></p>
                      </div>
                    </div>
                    <div className={styles["action-btn"]}>
                      <button
                        className={styles["plat-btn"]}
                        onClick={(e) => handleSong(items)}
                      >
                        <Play
                          className={styles["Play-icon"]}
                          onClick={() => handlePlaySong(itemss[i]?.preview_url)}
                        ></Play>
                      </button>
                      <Heart className={styles["heart-icon"]} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default AddToFavoutire;
