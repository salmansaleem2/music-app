import React from "react";
import styles from "./Overlay.module.css";

const Overlay = ({ handleOverlay }) => {
  return <div className={styles["backdrop"]} onClick={handleOverlay}></div>;
};

export default Overlay;
