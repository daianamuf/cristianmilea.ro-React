import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import classNames from "classnames";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable-next-line react/prop-types */
function Nav({ isScrolling }) {
  const navClassname = classNames(styles.nav, {
    [styles.sticky]: !isScrolling,
  });

  return (
    <>
      <nav className={navClassname}>
        <div className={`${styles["nav-logo"]} ${styles.logo}`}>
          THE FASTEST
        </div>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list--item"]}>
            <NavLink to="/" className={styles["nav-list--item"]}>
              Despre
            </NavLink>
          </li>
          <li className={styles["nav-list--item"]}>
            <NavLink to="/gallery" className={styles["nav-list--item"]}>
              Galerie
            </NavLink>
          </li>
          <li className={styles["nav-list--item"]}>
            <NavLink to="/videos" className={styles["nav-list--item"]}>
              Meciuri
            </NavLink>
          </li>
          <li className={styles["nav-list--item"]}>
            <button className={styles.btn}>Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
