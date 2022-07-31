import { XCircle } from "phosphor-react";
import styles from "./ResultNav.css";
import ReactDOM from "react-dom";
import Playlist from "../PlayList/Playlist";
import Header from "../Header/Header";

const ResultNav = () => {
  return ReactDOM.createPortal(
    <div className={`main-nav ${false ? "nav-open" : ""}`}>
      <div className="show-result">
        <Header className="header-margin" />
        <Playlist />
      </div>
    </div>,
    document.body
  );
};

export default ResultNav;
