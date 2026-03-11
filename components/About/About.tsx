"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import teamData from "../../data/team.json";

import personImg from "../../public/images/person/person-1.png";
import badgeImg from "../../public/images/badge/badge-1.png";
import bgImg from "../../public/images/person/person-bg-1.png";
import SectionHead from "../Header/Section-Head";
import { ArrowRightIcon } from "../icons/SvgIcons";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="law__about law-section-gapBottom">
        <div className="container">
          <div className="row justify-content-between">
            <SectionHead title="Founder's Message" />
            <div
              className="col-lg-6 col-xl-5"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <div className="law__about-img position-relative law-bg-white">
                <div className="position-relative z-index-2">
                  <Image
                    className="w-100"
                    src={personImg}
                    width={528}
                    height={660}
                    alt="image"
                  />
                  <div className="bg-shape">
                    <Image
                    className="w-100 h-100"
                    src={bgImg}
                    width={528}
                    height={660}
                    alt="image"
                  />
                  </div>

                  <div className="position-absolute bottom-0 start-0 pb--12 pl--12">
                    <Image
                      className="law__about-badge"
                      src={badgeImg}
                      width={120}
                      height={180}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {teamData &&
              teamData.team.slice(0, 1).map((data, i) => (
                <div
                  className="col-lg-6 m-lg-auto mt-5 mt-sm--24"
                  data-sal="slide-up"
                  data-sal-duration="700"
                  data-sal-delay="200"
                  key={i}
                >
                  <div className="" key={i}>
                    <h3 className="law__text fst-italic mb-0">
                      {data.subtext}
                    </h3>
                    <h2 className="law__title">{data.title}</h2>

                    <p className="law__about-desc">
                      {data.desc}

                      {showMore ? (
                        ""
                      ) : (
                        <button
                          className="btn btn-primary show-btn"
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </p>

                    <div className={`extra-content ${showMore ? "show" : ""}`}>
                      <p className="law__about-desc">{data.descTwo}</p>
                      <p className="law__about-desc">
                        {data.descThree}

                        {showMore ? (
                          <button
                            className="btn btn-primary show-btn"
                            onClick={() => setShowMore(!showMore)}
                          >
                            {showMore ? "Show Less" : "Show More"}
                          </button>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>

                    {data.brandImg && (
                      <Image
                        className="img-fluid law__about-brand"
                        src={data.brandImg}
                        width={188}
                        height={42}
                        alt="brand image"
                      />
                    )}
                  </div>

                  <div className="d-grid d-sm-flex justify-content-start align-items-center mt-sm--12">
                    <div className="law-btn-group d-inline-block">
                      <Link href="/contact" className="law-btn3d">
                        <span className="law-btn3d__shadows"></span>
                        <span className="law-btn3d__text">
                          <span className="btn-text">Contact With Us</span>
                          <ArrowRightIcon className="law-btn3d-icon-right" />
                          <ArrowRightIcon className="law-btn3d-icon-left" />
                        </span>
                      </Link>
                    </div>

                    {data.signature && (
                      <div className="order-1 order-sm-2 d-none d-md-block">
                        <Image
                          src={data.signature}
                          width={182}
                          height={104}
                          alt="image"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
