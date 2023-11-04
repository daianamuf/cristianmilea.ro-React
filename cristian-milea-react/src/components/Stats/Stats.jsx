import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";
import classNames from "classnames";

function Stats() {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const headingClass = classNames(styles.heading, {
    [styles.slideIn]: isVisible,
    [styles.slideOut]: !isVisible,
  });

  useEffect(() => {
    const currentRef = headingRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [isVisible]);

  // console.log(isVisible);

  return (
    <section className="stats-section section">
      <h2
        // className={`stats-section__heading heading  ${
        //   isVisible === true ? "slide-in" : "slide-out"
        // } `}
        className={headingClass}
        ref={headingRef}
      >
        <span> Campion Mondial, European &#351;i Na&#539;ional</span>
        <span> &#238;n K1 la Categoria Lightweight</span>
      </h2>

      <div className="stats-section__statistics">
        <div className="stats-section__statistics--elem">
          <p>Meciuri</p>
          <span className="number" data-val="97">
            00
          </span>
        </div>
        <div className="stats-section__statistics--elem">
          <p>Victorii</p>
          <span className="number" data-val="77">
            00
          </span>
        </div>
        <div className="stats-section__statistics--elem">
          <p>Knockouts</p>
          <span className="number" data-val="26">
            00
          </span>
        </div>
        <div className="stats-section__statistics--elem">
          <p>&#206;nfr&#226;ngeri</p>
          <span className="number" data-val="20">
            00
          </span>
        </div>
      </div>
    </section>
  );
}

export default Stats;
