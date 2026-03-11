"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard } from "swiper/modules";

import teamData from "../../data/team.json";

import SectionHead from "../Header/Section-Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";

const Team = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="team law-section-gap" id="ourteam">
        <div className="container">
          <div className="row">
            <SectionHead title="Team Members" />

            <div
              className="col-lg-7 col-xl-6 ms-auto"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h3 className="law__text fst-italic mb-0">
                We Are Knowledgeable &{" "}
              </h3>
              <h2 className="law__title">Compassionate Team</h2>
              <p className="law__about-desc mb-0">
                We believe exceptional representation is achieved through
                aggressive advocacy, client adherence to absolute.
              </p>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-12"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <Swiper
                className="team__card-slider"
                slidesPerView={1.6}
                centeredSlides={false}
                spaceBetween={20}
                slidesPerGroupSkip={1}
                grabCursor={true}
                breakpoints={{
                  991: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                  },
                  576: {
                    slidesPerView: 2.5,
                    slidesPerGroup: 1,
                  },
                  425: {
                    slidesPerView: 2.6,
                    slidesPerGroup: 1,
                  },
                }}
                scrollbar={{ draggable: true }}
                modules={[Keyboard, Scrollbar]}
              >
                {teamData &&
                  teamData.team.map((data, i) => (
                    <SwiperSlide className="text-center text-sm-start" key={i}>
                      <div className="team__card">
                        <div className="team__card-img">
                          {data.hasInfo ? (
                            <Link
                              className="d-flex position-relative z-1"
                              href={
                                data.hasInfo ? `team-details/${data.id}` : "#"
                              }
                            >
                              <Image
                                className="img-fluid"
                                src={data.img}
                                width={312}
                                height={400}
                                alt="image"
                              />
                            </Link>
                          ) : (
                            <Image
                              className="img-fluid"
                              src={data.img}
                              width={312}
                              height={400}
                              alt="image"
                            />
                          )}
                          {data.hasInfo ? (
                            <div className="position-absolute bottom-0 end-0 z-2">
                              <Link
                                href={
                                  data.hasInfo ? `team-details/${data.id}` : "#"
                                }
                                className="team__card-icon"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="team__card-body">
                          {data.hasInfo ? (
                            <Link
                              href={
                                data.hasInfo ? `team-details/${data.id}` : "#"
                              }
                              className="team__card-body--link"
                            >
                              {data.name}
                            </Link>
                          ) : (
                            <h4 className="team__card-body--link">{data.name}</h4>
                          )}
                          <h5 className="team__card-body--text">{data.text}</h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
