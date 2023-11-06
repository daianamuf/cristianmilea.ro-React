import { useState, useEffect, useRef } from "react";

const useInfiniteCarousel = (slidesLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef(null);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === -1) {
        setTransitionEnabled(false);
        setCurrentIndex(slidesLength - 1);
      } else if (currentIndex === slidesLength) {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }
    };
    const currentRef = carouselRef.current;

    if (currentRef) {
      currentRef.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [currentIndex, slidesLength]);

  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 0);
    }
  }, [transitionEnabled]);

  const adjustedIndex = currentIndex % slidesLength;

  const translateX = -(adjustedIndex * (currentIndex - slidesLength));

  console.log("curr", currentIndex);
  console.log("adj", adjustedIndex);

  return {
    currentIndex,
    adjustedIndex,
    carouselRef,
    translateX,
    transitionEnabled,
    next,
    prev,
  };
};

export default useInfiniteCarousel;
