
import Navigation from "./Navigation/NavigationBar";
import newsLogo from "../../../public/assets/logoMic.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";



export default function HeaderComponent() {
  return (
    <header>
      <div className={styles["wrapper"]}>
        <div className={styles["onOff"]}>
          <div className={styles["newsLogo"]}>
            <Link to="/">
              <img
                src={newsLogo}
                className={styles["logoPicture"]}
                alt="React logo"
              />
            </Link>
            <Link to="/">
              <p className={styles["logoText"]}>Твоите новини</p>
            </Link>
          </div>
        </div>
        <div className={styles["icons"]}>
          <div className={styles["searchBTN"]}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className={styles["login1"]}>
            <Link to="/login">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
