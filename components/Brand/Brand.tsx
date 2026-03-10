"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import sal from "sal.js";

import BrandData from "../../data/brand.json";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Brand = ({ parentClass }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className={`brand law-section-gap ${parentClass || ''}`}>
        <div className="container">
          <div className="row slider">
            {/* <ul className="brand__list slide-track">
              {BrandData?.brand?.map((data, i) => (
                <li
                  className="slide"
                  key={i}
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay={100 * (i + 1)}
                >
                  <div className="single-brand">
                    <Image
                      className="img-fluid"
                      src={data.img}
                      width={data.wdt}
                      height={data.ht}
                      unoptimized={true}
                      alt="brand logo"
                    />
                  </div>
                </li>
              ))}
            </ul> */}

            <Swiper
              className="brand__list"
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={4000}
              loop={true}
              spaceBetween={24}
              breakpoints={{
                320: { slidesPerView: 3.6},
                768: { slidesPerView: 4},
                992: { slidesPerView: 4.5},
                1200: { slidesPerView: 5}
              }}
            >
              {BrandData?.brand?.map((data, i) => (
                <SwiperSlide key={i}>
                  <div className="single-brand">
                    <Image
                      className="img-fluid"
                      src={data.img}
                      width={data.wdt}
                      height={data.ht}
                      unoptimized={true}
                      alt="brand logo"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
