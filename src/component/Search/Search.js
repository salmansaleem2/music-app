import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles["search-container"]}>
      <input type="text" placeholder="Search" className={styles.search} />
    </div>
  );
};

export default Search;
