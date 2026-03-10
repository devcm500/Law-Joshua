"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";

import SectionHead from "../Header/Section-Head";

import testimonialData from "../../data/team.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import shape from "../../public/images/shape/card-shape-1.png";
import { faStar } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="testimonial law-section-gap">
        <div className="container">
          <div className="row row--15 justify-content-end">
            <SectionHead title="Testimonials" />
            <div className="col-md-9 col-lg-7 col-xxl-6 ms-auto">
              <div
                className="testimonial__head d-sm-flex align-items-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="testimonial__rating">5.0</h4>
                <div className="content">
                  <h3 className="law__text testimonial__text fst-italic mb-0">
                    What Clients Say!
                  </h3>
                  <h2 className="law__title testimonial__title">
                    About Our Services
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row row--15 justify-content-end"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            <div className="col-md-9 col-lg-7 col-xxl-6">
              <Swiper
                className="testimonial__slider"
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroupSkip={1}
                grabCursor={true}
                pagination={true}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
              >
                {testimonialData &&
                  testimonialData.testimonial.map((data, i) => (
                    <SwiperSlide
                      className="card testimonial__card border-0"
                      key={i}
                    >
                      <Image
                        src={shape}
                        width={648}
                        height={338}
                        className="testimonial__card-bg"
                        alt="image"
                      />
                      <div className="card-img-overlay">
                        <ul className="testimonial__card-star">
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                        <p className="testimonial__card-desc">{data.desc}</p>
                        <div className="d-flex align-items-center">
                          <Image
                            className="testimonial__card-person"
                            src={data.img}
                            width={50}
                            height={50}
                            alt="image"
                          />
                          <h5 className="testimonial__card-name">{data.name}</h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
