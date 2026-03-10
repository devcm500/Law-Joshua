"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

import SectionHead from "../Header/Section-Head";
import ServiceCard from "./ServiceCard";

const Info = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <> 
      <div className="info law-section-gap">
        <div className="container">
          <div className="row position-relative z-3">
            <SectionHead title="our Practice area" />

            <div
              className="col-lg-7 col-xl-6 ms-auto"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h3 className="law__text testimonial__text fst-italic mb-0">
                Expert Legal Solutions for 
              </h3>
              <h2 className="law__title testimonial__title">
                Your Peace of Mind
              </h2>
            </div>
          </div>

          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default Info;
