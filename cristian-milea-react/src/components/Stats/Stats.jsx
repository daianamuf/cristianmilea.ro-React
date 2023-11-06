import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";
import classNames from "classnames";
import useHeadingIntersectionObserver from "../../useHeadingIntersectionObserver";

function Stats({ initialStats }) {
  const [stats, setStats] = useState(initialStats);
  const statsRef = useRef(null);

  // Heading Observer
  const { headingRef, isVisible } = useHeadingIntersectionObserver();
  const headingClass = classNames(styles.heading, {
    [styles.slideIn]: isVisible,
    [styles.slideOut]: !isVisible,
  });

  // Stats Observer
  useEffect(() => {
    const intervals = [];
    const interval = 5000;

    const startCounters = () => {
      stats.forEach((stat, index) => {
        let startValue = 0;
        let endValue = stat.value;
        let duration = Math.floor(interval / endValue);

        const counter = setInterval(() => {
          startValue += 1;
          stat.displayValue = startValue;
          setStats((prevStats) => {
            const newStats = [...prevStats];
            newStats[index].displayValue = startValue;
            return newStats;
          });
          if (startValue === endValue) {
            clearInterval(counter);
          }
        }, duration);
        intervals.push(counter);
      });
    };

    const observerOptions = {
      root: null,
      threshold: 1.0,
      rootMargin: "0px",
    };
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startCounters();
        observer.observe(statsRef.current);
      }
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      intervals.forEach(clearInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <section className="stats-section section">
      <h2 className={headingClass} ref={headingRef}>
        <span> Campion Mondial, European &#351;i Na&#539;ional</span>
        <span> &#238;n K1 la Categoria Lightweight</span>
      </h2>

      <div className={styles["stats-section__statistics"]} ref={statsRef}>
        {stats.map((stat, index) => {
          return (
            <div
              className={styles["stats-section__statistics--elem"]}
              key={index}
              data-val={stat.value}
            >
              <p>{stat.name}</p>
              <span className={styles.number}>{stat.displayValue || 0}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Stats.propTypes = {
  initialStats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      displayValue: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Stats;
