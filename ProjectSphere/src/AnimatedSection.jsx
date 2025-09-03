import React, { useState, useEffect, useRef } from 'react';
import './AnimatedSection.css';

function AnimatedSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.05 }
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

  const sectionClassName = `section-${isVisible ? 'visible' : 'hidden'}`;

  return (
    <div ref={sectionRef} className={sectionClassName}>
      {children}
    </div>
  );
}

export default AnimatedSection;
