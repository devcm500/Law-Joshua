"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

interface SectionHeadProps {
  title: string;
}

const SectionHead = ({ title }: SectionHeadProps) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="col-12"
        data-sal="slide-up"
        data-sal-duration="800"
        data-sal-delay="200"
      >
        <ul className="law__about-head">
          <li>
            <span>{title}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionHead;
