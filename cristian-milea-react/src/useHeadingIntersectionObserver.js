import { useEffect, useRef, useState } from "react";

function useHeadingIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const currentRef = headingRef.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { root: null, threshold: 0.6 }
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
        observer.disconnect();
      };
    }
  }, []);

  return { headingRef, isVisible };
}
export default useHeadingIntersectionObserver;
