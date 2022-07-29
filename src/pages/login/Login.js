import { MusicNotesSimple, SignIn } from "phosphor-react";
import { Link } from "react-router-dom";
import Google from "../../assets/google.png";

import { firebase } from "../../firebase/config";

import styles from "../login/Login.module.css";

const Login = () => {
  const SignInWithFirebase = () => {
    let google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles["login-section"]}>
      <div className={styles["music-img-box"]}>
        <MusicNotesSimple className={styles["music-img"]} />
      </div>
      <h2 className={styles["app-title"]}>Music App</h2>
      {/* <Link to="/home"> */}
      <Link to="/">
        <button className={styles["auth-box"]} onClick={SignInWithFirebase}>
          <p className={styles["login-text"]}>Sign in With Google</p>
          <img className={styles["google-img"]} src={Google} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Login;
