import styles from "./Header.module.css";
import Search from "../Search/Search";
import { List, X } from "phosphor-react";
import { useState, useContext } from "react";
import context from "../../hooks/useMusic";

const Header = ({ handleToggle, handleSearchData }) => {
  const [closeIcon, setCloseIcon] = useState(false);
  const { SearchData } = useContext();
  console.log("SearchResult,SearchResult", SearchData);
  return (
    <div className={styles["header-section"]}>
      <Search />
      <button className={styles.button}>
        {!closeIcon ? (
          <List
            className={styles["hamburger"]}
            onClick={() => {
              handleToggle();
              setCloseIcon(true);
            }}
          />
        ) : (
          <X
            className={styles["hamburger"]}
            onClick={() => {
              handleSearchData();
              setCloseIcon(false);
            }}
            size={32}
          />
        )}
      </button>
      {/* <div className="main-nav"></div> */}
    </div>
  );
};

export default Header;
