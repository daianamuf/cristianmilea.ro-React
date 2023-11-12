import styles from "./Slider.module.css";

import useInfiniteCarousel from "../../useInfiniteCarousel";
import { useEffect, useState } from "react";
import classNames from "classnames";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import Heading from "../heading/Heading";

const isMobile = (userAgent) => {
  return !!(
    userAgent.toLowerCase().match(/android/i) ||
    userAgent.toLowerCase().match(/blackberry|bb/i) ||
    userAgent.toLowerCase().match(/iphone|ipad|ipod/i) ||
    userAgent
      .toLowerCase()
      .match(/windows phone|windows mobile|iemobile|wpdesktop/i)
  );
};

const onMobile = isMobile(window.navigator.userAgent);

function Slider() {
  const [slides, setSlides] = useState([]);

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
    adjustedIndex,
    debouncedNext,
    debouncePrev,
    slideMovement,
    goToSlide,
  } = useInfiniteCarousel(slides.length);

  const slideStyles = {
    transform: `translateX(${slideMovement}px)`,
    transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
  };

  const sliderClassname = classNames(styles.slider, {
    [styles.mobile]: onMobile,
  });

  return (
    <section className={`${styles["slider-container"]} ${styles.section}}`}>
      <Heading>Despre mine</Heading>

      <div className={sliderClassname} ref={carouselRef}>
        {slides.map((slide, index) => {
          const slideClassname = classNames(styles.slide, {
            [styles.activeSlide]: index === adjustedIndex,
          });
          return (
            <div key={slide.id} className={slideClassname} style={slideStyles}>
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
          );
        })}
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
