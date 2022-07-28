import { MusicNotesSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import Google from "../../assets/google.png";
import styles from "../login/Login.module.css";

const Login = () => {
  return (
    <div className={styles["login-section"]}>
      <div className={styles["music-img-box"]}>
        <MusicNotesSimple className={styles["music-img"]} />
      </div>
      <h2 className={styles["app-title"]}>Music App</h2>
      <Link to="/home">
        <button className={styles["auth-box"]}>
          <p className={styles["login-text"]}>Sign in With Google</p>
          <img className={styles["google-img"]} src={Google} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Login;
