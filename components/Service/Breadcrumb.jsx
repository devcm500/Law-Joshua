"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

const Breadcrumb = ({ title, subTitle, parentClass }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className={`breadcrumb ${parentClass}`}>
        <div className="container">
          <div className="row">
            {
              subTitle && <h3
                className="law__text breadcrumb__text fst-italic"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                {subTitle}
              </h3>
            }
            <h2
              className="law__title breadcrumb__title mb-sm--0"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
