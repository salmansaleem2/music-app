import { useState } from "react";

import Search from "../../component/Search/Search";
import Player from "../../component/Player/Player";
import Overlay from "../../component/Overlay/Overlay";
import UserAvatar from "../../component/UserAvatar/UserAvatar";

import { List } from "phosphor-react";

import styles from "./Home.module.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log(setIsOpen(!isOpen));
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
      {isOpen && Overlay}
      {isOpen && UserAvatar}
    </div>
  );
};

export default Home;
