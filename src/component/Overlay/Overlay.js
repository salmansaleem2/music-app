import ReactDOM from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = ({ handleOverlay }) => {
  return ReactDOM.createPortal(
    <div className={styles["backdrop"]} onClick={handleOverlay}></div>,
    document.body
  );
};

export default Overlay;
