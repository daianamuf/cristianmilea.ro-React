import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import classNames from "classnames";

function Nav() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTreshold = totalHeight * 0.05;

      setIsScrolling(scrollPosition > scrollTreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClassname = classNames(styles.nav, {
    [styles.sticky]: isScrolling,
  });

  return (
    <>
      <nav className={navClassname}>
        <div className={styles.logo}>THE FASTEST</div>
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
            <NavLink to="/contact" className={styles["nav-list--item"]}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
