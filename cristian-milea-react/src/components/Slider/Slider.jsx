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
        // setSlides([data[0], ...data, data[data.length - 1]]);
      } catch (err) {
        console.log("Error getting slides: ", err);
      }
    }
    getSlidesData();
  }, []);

  const {
    carouselRef,
    transitionEnabled,
    // translateX,
    adjustedIndex,
    debouncedNext,
    debouncePrev,
    slideMovement,
    goToSlide,
  } = useInfiniteCarousel(slides.length);

  // const containerStyles = {
  //   transform: `translateX(${0}px)`,
  //   transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
  // };

  const slideStyles = {
    transform: `translateX(${slideMovement}px)`,
    transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
  };

  return (
    <section className={`${styles["slider-container"]} ${styles.section}}`}>
      <h2 className={headingClass} ref={headingRef}>
        Despre mine
      </h2>
      <div className={styles.slider} ref={carouselRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={
              index === adjustedIndex ? styles.activeSlide : styles.slide
            }
            style={slideStyles}
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
        onClick={debouncePrev}
      >
        <ArrowCircleLeft
          className={`${styles.icon} ${styles["icon-arrow-circle-left"]}`}
        ></ArrowCircleLeft>
      </button>
      <button
        className={`${styles.slider__btn} ${styles["slider__btn--right"]}`}
        onClick={debouncedNext}
      >
        <ArrowCircleRight
          className={`${styles.icon} ${styles["icon-arrow-circle-right"]}`}
        ></ArrowCircleRight>
      </button>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              index === adjustedIndex
                ? `${styles["dots__dot"]} ${styles["dots__dot--active"]}`
                : styles["dots__dot"]
            }
            onClick={() => goToSlide(index)}
          />
        ))}
        ;
      </div>
    </section>
  );
}

export default Slider;
