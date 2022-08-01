import { CloudLightning, XCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import context from "../../hooks/useMusic";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const [isDataShow, setIsDataShow] = useState(false);
  const { searchData, IsSearchClick, SearchIconClick } = context();

  const href = searchData?.data?.tracks;
  const itemss = href?.items;
  console.log(itemss);

  useEffect(() => {
    setIsDataShow(true);
  }, [SearchIconClick]);

  return (
    <>
      {isDataShow && (
        <div className="favourite-list-section">
          {itemss?.map((items) => (
            <>
              <div className={styles["favourite-list"]}>
                <div className={styles["album-detail"]}>
                  <p className={styles["album-title"]}>Arctic Monkeys</p>
                  <XCircle className={styles["remove-song"]} />
                </div>
                <p className={styles["song-name"]}>{items.name}</p>
                <p className={styles["song-durtaion"]}>3:45</p>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Playlist;
