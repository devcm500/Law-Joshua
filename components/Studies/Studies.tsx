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
import { ArrowRightIcon, CheckmarkIcon } from "../icons/SvgIcons";

const Studies = () => {
  const swiperRef = useRef<any>(null);
  const dotNames = ["Family", "Crime", "Business", "Personal"];

  const handleTabClick = (index: number): void => {
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
                    paginationContainer.addEventListener("click", (e: Event) => {
                      const target = e.target as HTMLElement;
                      if (target?.classList.contains("custom-bullet")) {
                        const index = target.getAttribute("data-index");
                        if (index) handleTabClick(parseInt(index));
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
                                  <CheckmarkIcon />
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
                              <ArrowRightIcon />
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="studies__img">
                            <Link href={`case-details/${data.id}`}>
                              <Image
                                src={data.img}
                                width={data.imgWidth}
                                height={data.imgHeight}
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
                <button className="case__slider-btn case__slider-btn--prev" aria-label="Previous slide">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="case__slider-btn case__slider-btn--next" aria-label="Next slide">
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
