import { User } from "phosphor-react";
import { useEffect, useState } from "react";
import { firebase } from "../../firebase/config";
import styles from "./UserAvatar.module.css";

const UserAvatar = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userImage, SetUserImage] = useState(null);

  const signOut = () => {
    firebase.auth().signOut();
  };
  const res = firebase.auth().currentUser;
  const { displayName, photoURL } = res;

  useEffect(() => {
    setUserFullName(displayName);
    SetUserImage(photoURL);
  }, []);

  return (
    <div className={styles["user-avatar-section"]}>
      <div className={styles["user-avatar"]}>
        {/*  /> */}
        {userImage ? (
          <img src={userImage} style={{ height: "100%" }} />
        ) : (
          <User className={styles["user-img"]} />
        )}
      </div>
      <p className={styles.userName}>{userFullName}</p>
      <button onClick={signOut} className={styles.signout}>
        Sign Out
      </button>
    </div>
  );
};

export default UserAvatar;
