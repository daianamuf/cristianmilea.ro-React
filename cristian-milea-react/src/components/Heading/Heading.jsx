import useHeadingIntersectionObserver from "../../useHeadingIntersectionObserver";
import classNames from "classnames";
import styles from "./Heading.module.css";

// eslint-disable-next-line react/prop-types
function Heading({ children }) {
  const { headingRef, isVisible } = useHeadingIntersectionObserver();
  const headingClass = classNames(styles.heading, {
    [styles.slideIn]: isVisible,
    [styles.slideOut]: !isVisible,
  });

  return (
    <h2 ref={headingRef} className={headingClass}>
      {children}
    </h2>
  );
}

export default Heading;
