import { useState } from "react";

import Search from "../../component/Search/Search";
import Player from "../../component/Player/Player";
import Overlay from "../../component/Overlay/Overlay";
import UserAvatar from "../../component/UserAvatar/UserAvatar";
import Playlist from "../../component/PlayList/Playlist";

import { List } from "phosphor-react";

import styles from "./Home.module.css";
import SearchList from "../../component/SearchList/SearchList";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles["home-section"]}>
      <div className={styles["header-section"]}>
        <Search />
        <button className={styles.button} onClick={handleToggle}>
          <List className={styles["hamburger"]} />
        </button>
      </div>
      <Player />

      <div className={`${isOpen ? styles["sidebar"] : null}`}>
        {isOpen && <Overlay handleOverlay={handleOverlay} />}
        {isOpen && <UserAvatar />}
        {isOpen && <h1 style={{ marginBottom: "1.2rem" }}>Favourite List</h1>}
        {isOpen && <Playlist />}
      </div>
    </div>
  );
};

export default Home;
