// RevealOnScroll.jsx
import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // To reveal only once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
