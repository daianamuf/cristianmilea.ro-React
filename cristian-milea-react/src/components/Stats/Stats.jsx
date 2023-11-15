import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

import Heading from "../heading/Heading";

const statsData = [
  { name: "Meciuri", value: 97, displayValue: 0 },
  { name: "Victorii", value: 77, displayValue: 0 },
  { name: "Knockouts", value: 26, displayValue: 0 },
  { name: "Înfrângeri", value: 20, displayValue: 0 },
];

function Stats() {
  const [stats, setStats] = useState(statsData);
  const statsRef = useRef(null);
  const intervalRef = useRef([]);
  const interval = 5000;

  useEffect(() => {
    const currentIntervalRef = intervalRef.current;
    const updateValue = (index, endValue) => {
      let duration = Math.floor(interval / endValue);
      intervalRef.current[index] = setInterval(() => {
        setStats((prevStats) => {
          const nextValue = prevStats[index].displayValue + 1;
          if (nextValue === endValue) {
            clearInterval(intervalRef.current[index]);
          }
          return prevStats.map((stat, i) => {
            if (i === index) {
              return { ...stat, displayValue: nextValue };
            }
            return stat;
          });
        });
      }, duration);
    };

    const observerStats = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => updateValue(index, stat.value));
            observerStats.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 1 }
    );

    if (statsRef.current) {
      observerStats.observe(statsRef.current);
    }

    return () => {
      currentIntervalRef.forEach(clearInterval);
      observerStats.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="stats-section section">
      <Heading>
        <span> Campion Mondial, European &#351;i Na&#539;ional</span>
        <span> &#238;n K1 la Categoria Lightweight</span>
      </Heading>

      <div className={styles["stats-section__statistics"]} ref={statsRef}>
        {stats.map((stat, index) => {
          return (
            <div
              className={styles["stats-section__statistics--elem"]}
              key={index}
              data-val={stat.value}
            >
              <p>{stat.name}</p>
              <span className={styles.number}>{stat.displayValue}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
