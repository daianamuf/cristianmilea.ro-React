import styles from "./Slider.module.css";
import classNames from "classnames";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import useHeadingIntersectionObserver from "../../useHeadingIntersectionObserver";
import useInfiniteCarousel from "../../useInfiniteCarousel";
import { useEffect, useState } from "react";

function Slider() {
  const [slides, setSlides] = useState([]);
  const { headingRef, isVisible } = useHeadingIntersectionObserver();
  const headingClass = classNames(styles.heading, {
    [styles.slideIn]: isVisible,
    [styles.slideOut]: !isVisible,
  });

  useEffect(() => {
    async function getSlidesData() {
      try {
        const res = await fetch("/slides-data.json");
        const data = await res.json();
        setSlides(data);
      } catch (err) {
        console.log("Error getting slides: ", err);
      }
    }
    getSlidesData();
  }, []);

  const {
    carouselRef,
    transitionEnabled,
    next,
    prev,
    adjustedIndex,
    translateX,
  } = useInfiniteCarousel(slides.length);

  const containerStyles = {
    transform: `translateX(${translateX}px)`,
    transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
  };

  return (
    <section className={`${styles["slider-container"]} ${styles.section}}`}>
      <h2 className={headingClass} ref={headingRef}>
        Despre mine
      </h2>
      <div className={styles.slider} ref={carouselRef} style={containerStyles}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={
              index === adjustedIndex ? styles.activeSlide : styles.slide
            }
          >
            <p className={styles["slide-text"]}>{slide.text}</p>

            {slide.list ? (
              <ul className={styles["slide-text-list"]}>
                {slide.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <img className={styles["slide-img"]} src={slide.image} alt="" />
            )}
          </div>
        ))}
      </div>

      <button
        className={`${styles.slider__btn} ${styles["slider__btn--left"]}`}
        onClick={prev}
      >
        <ArrowCircleLeft
          className={`${styles.icon} ${styles["icon-arrow-circle-left"]}`}
        ></ArrowCircleLeft>
      </button>
      <button
        className={`${styles.slider__btn} ${styles["slider__btn--right"]}`}
        onClick={next}
      >
        <ArrowCircleRight
          className={`${styles.icon} ${styles["icon-arrow-circle-right"]}`}
        ></ArrowCircleRight>
      </button>
      <div className={styles.dots}></div>
    </section>
  );
}

export default Slider;
