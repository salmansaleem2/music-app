import styles from "./Header.module.css";
import Search from "../Search/Search";
import { List, X } from "phosphor-react";
import { useState, useContext } from "react";
import context from "../../hooks/useMusic";

const Header = ({ handleToggle }) => {
  const { IsSearchClick, SearchIconClick } = context();
  return (
    <div className={styles["header-section"]}>
      <Search />
      <button className={styles.button}>
        {!IsSearchClick ? (
          <List
            className={styles["hamburger"]}
            onClick={() => {
              handleToggle();
            }}
          />
        ) : (
          <X
            className={styles["hamburger"]}
            onClick={() => {
              SearchIconClick(false);
            }}
            size={32}
          />
        )}
      </button>
    </div>
  );
};

export default Header;
