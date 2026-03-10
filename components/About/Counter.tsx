"use client";
import { useEffect, useState, useRef } from "react";

import dynamic from "next/dynamic";
const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });

interface CounterProps {
  value: number;
  format?: string;
}

const Counter = ({ value, format = "d" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setCount(value);
    }
  }, [isVisible, value]);

  return (
    <span ref={counterRef}>
      <Odometer value={count} format={format} duration={2000} />
    </span>
  );
};

export default Counter;
