import { User } from "phosphor-react";
import styles from "./UserAvatar.module.css";

const UserAvatar = () => {
  return (
    <div className={styles["user-avatar-section"]}>
      <div className={styles["user-avatar"]}>
        <User className={styles["user-img"]} />
      </div>
      <p className={styles.userName}>Salman Saleem</p>
    </div>
  );
};

export default UserAvatar;
