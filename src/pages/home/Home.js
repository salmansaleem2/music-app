import { useState } from "react";
import axios from "axios";
import Search from "../../component/Search/Search";
import Player from "../../component/Player/Player";
import Overlay from "../../component/Overlay/Overlay";
import UserAvatar from "../../component/UserAvatar/UserAvatar";
import Playlist from "../../component/PlayList/Playlist";
import useMusic from "../../hooks/useMusic";
import ResultNav from "../../component/ResultNav/ResultNav";
import Header from "../../component/Header/Header";

import styles from "./Home.module.css";
import SearchList from "../../component/SearchList/SearchList";
import context from "../../hooks/useMusic";

const Home = () => {
  const { SearchIconClick } = context();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["home-section"]}>
      <Header handleToggle={handleToggle} />

      <ResultNav />
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
