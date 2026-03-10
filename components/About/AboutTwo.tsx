"use client";

import { useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";

import aboutData from "../../data/about.json";
import lawOffice from "../../public/images/bg/law-office.png";
import Counter from "./Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPercent } from "@fortawesome/pro-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  faPlus,
  faPercent,
};

const AboutTwo = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <div className="law__about law-section-gap">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 ms-auto"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            <ul className="law__about-head">
              <li>
                <span>About Us</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row row--20">
          <div className="col-lg-5 col-xl-6 text-center text-lg-start mb-4 mb-lg-0"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            <Image
              src={lawOffice}
              width={536}
              height={566}
              unoptimized={true}
              alt="image"
            />
          </div>
          <div className="col-lg-7 col-xl-6 ms-auto">
            <h3
              className="law__text fst-italic mb-0"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              Northshore Civil 
            </h3>
            <h2
              className="law__title"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              Litigation Law Firm.
            </h2>
            <p
              className="law__about-tabs--desc"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              JOSHUA D. ALLISON, A Professional Law Corporation is a civil
              litigation law firm specializing in civil litigation and trial
              advocacy in the areas of business law, family law, and personal
              injury law. The law firm is owned and operated by Joshua
              &quot;Josh&quot; D. Allison with offices in historic Covington and
              Franklinton.
            </p>

            <div
              className="law__about-tabs"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="300"
            >
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {aboutData.aboutTwo.map((data, i) => (
                  <li key={i} className="nav-item m-0" role="presentation">
                    <button
                      className={`nav-link text-capitalize ${
                        data.isActive ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${data.tab}-tab-pane`}
                      type="button"
                      role="tab"
                      aria-controls={`${data.tab}-tab-pane`}
                      aria-selected={data.isActive}
                    >
                      {data.tabTitle}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                {aboutData.aboutTwo.map((data, i) => (
                  <div
                    key={i}
                    className={`tab-pane fade ${
                      data.isActive ? "show active" : ""
                    }`}
                    id={`${data.tab}-tab-pane`}
                    role="tabpanel"
                    tabIndex={0}
                  >
                    <p className="law__about-tabs--desc">{data.desc}</p>
                    <div className="law__about-tabs--list">
                      <ul>
                        {data.list.map((sublist, j) => (
                          <li key={j}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="10"
                              viewBox="0 0 12 10"
                            >
                              <path
                                d="M11.4519 0.231442C8.52691 2.66793 6.10261 6.15163 4.30184 9.92355C4.2537 10.0266 4.10444 10.0243 4.05629 9.92355C2.97053 7.57607 1.83662 5.8518 0.555857 4.94981C0.442715 4.87019 0.514935 4.69677 0.652161 4.71318C2.04367 4.8842 3.56516 5.76275 4.17907 6.66475C5.86187 3.81121 8.21153 1.691 11.2979 0.0182113C11.4399 -0.0590906 11.5747 0.128344 11.4519 0.231442Z"
                                fill="white"
                              />
                            </svg>
                            <span className="law__about-tabs--text">
                              {sublist.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Odometer Section */}
        <div className="row bg--light law-section-gapTop pt-sm--24">
          {aboutData.aboutCard.map((data, i) => (
            <div
              key={i}
              className={`col-sm-6 col-lg-4 ${
                data.isSpace ? "mt-4 mt-sm-0 mb-4 mb-lg-0" : ""
              }`}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 * (i + 1)}
            >
              <div className="card info-card law__about-card">
                <div className="info-card--wrap law__about-card--wrap">
                  <div className="card-imgoverlay">
                    <Image
                      src={data.counterIcon}
                      width={data.counterIconWidth}
                      height={data.counterIconHeight}
                      unoptimized={true}
                      alt="image"
                      className="icon-image"
                    />
                    <div className="info-card--icon law__about-card-num">
                      <div className="d-flex align-items-end">
                        <span className="law__about-card-num--lg">
                          <span className="num-text">{data.num}</span>
                          <FontAwesomeIcon icon={iconMap[data.iClass]} />
                        </span>
                      </div>
                      <div className="d-flex align-items-end position-relative z-2">
                        <span className="law__about-card-num--sm">
                          <Counter value={Number(data.num)} format="(.dd)" />
                        </span>

                        <span className="law__about-card-num--i">
                          <FontAwesomeIcon icon={iconMap[data.iClass]} />
                        </span>
                      </div>
                    </div>
                    <h4 className="info-card--title law__about-card--title">
                      {data.title}
                    </h4>
                    <p className="info-card--desc law__about-card--desc">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
