import { useState, useEffect, useRef } from "react";

const useInfiniteCarousel = (slidesLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [direction, setDirection] = useState("next");
  const [slideMovement, setSlideMovement] = useState(0);
  const carouselRef = useRef(null);

  function debounce(callback, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }

  const next = () => {
    setDirection("next");
    setSlideMovement(-3);
    setCurrentIndex((index) => index + 1);

    setTimeout(() => {
      setSlideMovement(0);
    }, 300);
  };

  const prev = () => {
    setDirection("prev");
    setSlideMovement(3);
    setCurrentIndex((index) => index - 1);

    setTimeout(() => {
      setSlideMovement(0);
    }, 300);
  };

  const goToSlide = (newIndex) => {
    if (newIndex > currentIndex) {
      setDirection("next");
      setSlideMovement(-3);
    } else if (newIndex < currentIndex) {
      setDirection("prev");
      setSlideMovement(3);
    }

    setTimeout(() => {
      setSlideMovement(0);
      setCurrentIndex(newIndex);
    }, 300);
  };

  const debouncedNext = debounce(next, 300);
  const debouncePrev = debounce(prev, 300);

  useEffect(() => {
    const currentRef = carouselRef.current;

    const handleTransitionEnd = () => {
      requestAnimationFrame(() => {
        if (currentIndex === -1) {
          setTransitionEnabled(false);
          setCurrentIndex(slidesLength - 1);
        } else if (currentIndex === slidesLength) {
          setTransitionEnabled(false);
          setCurrentIndex(0);
        }
      });
    };

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
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  // const adjustedIndex = currentIndex % slidesLength;
  const adjustedIndex =
    ((currentIndex % slidesLength) + slidesLength) % slidesLength;

  return {
    currentIndex,
    adjustedIndex,
    carouselRef,
    // translateX,
    transitionEnabled,
    direction,
    next,
    prev,
    debouncedNext,
    debouncePrev,
    slideMovement,
    goToSlide,
  };
};

export default useInfiniteCarousel;
