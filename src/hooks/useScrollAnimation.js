import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = { threshold: 0.15 };

export const useScrollAnimation = (options = DEFAULT_OPTIONS) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
};
