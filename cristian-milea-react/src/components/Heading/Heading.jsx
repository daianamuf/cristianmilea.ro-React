import useHeadingIntersectionObserver from "../../useHeadingIntersectionObserver";
import classNames from "classnames";
import styles from "./Heading.module.css";

// eslint-disable-next-line react/prop-types
function Heading({ style, children }) {
  const { headingRef, isVisible } = useHeadingIntersectionObserver();
  const headingClass = classNames(styles.heading, {
    [styles.slideIn]: isVisible,
    [styles.slideOut]: !isVisible,
  });

  return (
    <h2 ref={headingRef} className={headingClass} style={style}>
      {children}
    </h2>
  );
}

export default Heading;
