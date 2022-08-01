import { XCircle } from "phosphor-react";
import styles from "./ResultNav.css";
import ReactDOM from "react-dom";
import Playlist from "../PlayList/Playlist";
import AddToFavoutire from "../AddToFavourite/AddToFavoutire";
import Header from "../Header/Header";
import context from "../../hooks/useMusic";

const ResultNav = () => {
  const { IsSearchClick } = context();
  return ReactDOM.createPortal(
    <div className={`main-nav ${IsSearchClick ? "nav-open" : ""}`}>
      <div className="show-result">
        <Header className="header-margin" />
        <AddToFavoutire />
      </div>
    </div>,
    document.body
  );
};

export default ResultNav;
