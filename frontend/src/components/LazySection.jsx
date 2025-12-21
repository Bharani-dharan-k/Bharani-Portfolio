import { useEffect, useRef, useState } from "react";

const LazySection = ({ children, fallback = <div className="min-h-[50vh]"></div>, animation = "fade-up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setHasAnimated(true), 50);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before section comes into view
        threshold: 0.01,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!hasAnimated) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-10";
        case "fade-down":
          return "opacity-0 -translate-y-10";
        case "fade-left":
          return "opacity-0 translate-x-10";
        case "fade-right":
          return "opacity-0 -translate-x-10";
        case "zoom":
          return "opacity-0 scale-95";
        default:
          return "opacity-0 translate-y-10";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div ref={sectionRef}>
      {isVisible ? (
        <div
          className={`transition-all duration-700 ease-out ${getAnimationClass()}`}
        >
          {children}
        </div>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
