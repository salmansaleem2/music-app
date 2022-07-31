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

const Home = () => {
  const { searchRequest } = useMusic();
  console.log("searchRequest", searchRequest);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleOverlay = () => {
    setIsOpen(!isOpen);
  };
  const handleSearchData = () => {};
  return (
    <div className={styles["home-section"]}>
      {/* <div className={styles["header-section"]}>
        <Search />
        <button className={styles.button}>
          {false ? (
            <List className={styles["hamburger"]} onClick={handleToggle} />
          ) : (
            <X
              className={styles["hamburger"]}
              onClick={handleSearchData}
              size={32}
            />
          )}
        </button>
      </div> */}

      <Header handleToggle={handleToggle} handleSearchData={handleSearchData} />

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
