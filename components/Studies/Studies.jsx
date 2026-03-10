"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import studiesData from "../../data/caseStudies.json";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";

import SectionHead from "../Header/Section-Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/pro-solid-svg-icons";

const Studies = () => {
  const swiperRef = useRef(null);
  const dotNames = ["Family", "Crime", "Business", "Personal"];

  const handleTabClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <>
      <div className="studies bg-2 law-section-gap">
        <div className="container">
          <div className="row position-relative z-3">
            <SectionHead title="Case Studies" />

            <div className="col-lg-7 col-xl-6 ms-auto mb--48 mb-sm--0"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <h3 className="law__text testimonial__text fst-italic mb-0">
                We Are Knowledgeable &
              </h3>
              <h2 className="law__title testimonial__title">
                Compassionate Team
              </h2>
            </div>
          </div>
          <div className="row sm_mt--20 md_mt--20 lg_mt--20">
            <div className="col-lg-9 order-2 order-lg-1"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <Swiper
                className="case-swiper-vertical"
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                loop={false}
                slidesPerGroupSkip={1}
                grabCursor={false}
                mousewheel={false}
                scrollbar={{
                  el: ".law-scrollbar",
                  hide: false,
                  draggable: true,
                }}
                navigation={{
                  nextEl: ".case__slider-btn--next",
                  prevEl: ".case__slider-btn--prev",
                }}
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  type: "bullets",
                  renderBullet: (index, className) => {
                    return `
                      <button class="${className} custom-bullet" data-index="${index}">
                        ${dotNames[index]}
                      </button>`;
                    },
                }}
                breakpoints={{
                  991: {
                    direction: "vertical",
                  },
                }}
                modules={[
                  Navigation,
                  Pagination,
                  Autoplay,
                  Scrollbar,
                  Mousewheel,
                ]}
                onInit={(swiper) => {
                  const paginationContainer =
                    document.querySelector(".custom-pagination");
                  if (paginationContainer) {
                    paginationContainer.addEventListener("click", (e) => {
                      if (e.target.classList.contains("custom-bullet")) {
                        const index = e.target.getAttribute("data-index");
                        handleTabClick(parseInt(index));
                      }
                    });
                  }
                }}
              >
                {studiesData &&
                  studiesData.studies.map((data, i) => (
                    <SwiperSlide key={i}>
                      <div className="row align-items-center">
                        <div className="col-md-6 order-2 order-md-0 mt-4 mt-md-0">
                          <h2 className="studies__title">{data.title}</h2>
                          <p className="law__about-tabs--desc studies__desc">
                            {data.desc.split(" ").length > 20
                              ? data.desc.split(" ").slice(0, 20).join(" ") +
                                "..."
                              : data.desc}
                          </p>

                          <div className="law__about-tabs--list studies__list">
                            <ul>
                              {data.list.map((sublist, i) => (
                                <li key={i}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="10"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                  >
                                    <path
                                      d="M11.4519 0.231442C8.52691 2.66793 6.10261 6.15163 4.30184 9.92355C4.2537 10.0266 4.10444 10.0243 4.05629 9.92355C2.97053 7.57607 1.83662 5.8518 0.555857 4.94981C0.442715 4.87019 0.514935 4.69677 0.652161 4.71318C2.04367 4.8842 3.56516 5.76275 4.17907 6.66475C5.86187 3.81121 8.21153 1.691 11.2979 0.0182113C11.4399 -0.0590906 11.5747 0.128344 11.4519 0.231442Z"
                                      fill="white"
                                    />
                                  </svg>
                                  <span className="law__about-tabs--text">
                                    {sublist.text.split(" ").length > 8
                                      ? sublist.text
                                          .split(" ")
                                          .slice(0, 8)
                                          .join(" ") + "..."
                                      : sublist.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="d-flex justify-content-start">
                            <Link
                              className="banner__btn info__btn studies__btn"
                              href={`case-details/${data.id}`}
                            >
                              View Case Studies
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="13"
                                viewBox="0 0 18 13"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.4997 7.16006H0V5.66006H17.4997V7.16006Z"
                                  fill="white"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                                  fill="white"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="studies__img">
                            <Link href={`case-details/${data.id}`}>
                              <Image
                                src={data.img}
                                width={500}
                                height={460}
                                unoptimized={true}
                                alt="image"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="col-lg-2 order-1 order-lg-2 position-relative"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="custom-pagination custom-pagination-vertical style-one"></div>
              <div className="law-scrollbar law-scrollbar-style-one"></div>
              <div className="case__slider-button">
                <button className="case__slider-btn case__slider-btn--prev">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="case__slider-btn case__slider-btn--next">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studies;
