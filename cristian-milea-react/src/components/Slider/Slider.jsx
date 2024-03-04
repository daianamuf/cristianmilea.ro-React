import { useEffect, useRef, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

import styles from "./Slider.module.css";
import classNames from "classnames";

import Heading from "../heading/Heading";

const touchMedia = window.matchMedia("(max-width: 900px)");

function Slider() {
  const [slides, setSlides] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const maxSlide = slides.length;
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    setCurrSlide(index);
  };

  const nextSlide = () => {
    setCurrSlide(currSlide === maxSlide - 1 ? 0 : currSlide + 1);
  };
  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? maxSlide - 1 : currSlide - 1);
  };

  useEffect(() => {
    async function getSlidesData() {
      try {
        const res = await fetch("/assets/slides-data.json");
        const data = await res.json();
        setSlides(data);
      } catch (err) {
        console.log("Error getting slides: ", err);
      }
    }
    getSlidesData();
  }, []);

  const sliderClassname = classNames(styles.slider, {
    [styles.mobile]: touchMedia.matches,
  });

  useEffect(() => {
    const sliderElement = sliderRef.current;
    let newSlideIndex;

    const calculateNewIndex = () => {
      if (sliderElement) {
        const scrollLeft = sliderElement.scrollLeft;
        const slideWidth = sliderElement.offsetWidth;
        newSlideIndex = Math.round(scrollLeft / slideWidth);
      }
    };

    const handleScroll = () => {
      calculateNewIndex();
      setCurrIndex(newSlideIndex);
      return;
    };

    if (touchMedia.matches) {
      if (sliderElement) {
        sliderElement.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (sliderElement) {
          sliderElement.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <section className={styles["slider-container"]}>
      <Heading>Despre mine</Heading>

      <div className={sliderClassname} ref={sliderRef}>
        {slides.map((slide, index) => {
          const slideClassname = classNames(
            styles.slide,
            styles[`slide-${index + 1}`]
          );
          return (
            <div
              key={slide.id}
              className={slideClassname}
              style={{ transform: `translateX(${100 * (index - currSlide)}%)` }}
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
          );
        })}
      </div>

      <button
        className={`${styles.slider__btn} ${styles["slider__btn--left"]}`}
        onClick={prevSlide}
      >
        <ArrowCircleLeft
          className={`${styles.icon} ${styles["icon-arrow-circle-left"]}`}
        ></ArrowCircleLeft>
      </button>
      <button
        className={`${styles.slider__btn} ${styles["slider__btn--right"]}`}
        onClick={nextSlide}
      >
        <ArrowCircleRight
          className={`${styles.icon} ${styles["icon-arrow-circle-right"]}`}
        ></ArrowCircleRight>
      </button>
      <div className={styles.dots}>
        {slides.map((_, index) => {
          const dotClassname = classNames(
            styles["dots__dot"],
            {
              [styles["dots__dot--active"]]:
                index === currSlide && !touchMedia.matches,
            },
            {
              [styles["dots__dot--active"]]:
                index === currIndex && touchMedia.matches,
            }
          );
          return (
            <span
              key={index}
              className={dotClassname}
              onClick={() => goToSlide(index)}
            />
          );
        })}
        ;
      </div>
    </section>
  );
}

export default Slider;
