import React from "react";
import Link from "next/link";
import Image from "next/image";

import teamData from "../../data/team.json";
import signature from "../../public/images/bg/signature.svg";

import Brand from "../Brand/Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";

const TeamMemberPage = () => {
  return (
    <>
      <div className="bg-3">
        <div className={`breadcrumb breadcrumb-gap breadcrumb-2`}>
          <div className="container">
            <div className="row">
              <h3 className="law__text breadcrumb__text fst-italic mb--24"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                Our Team
              </h3>
              <h2 className="law__title breadcrumb__title mb-0"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="200"
              >
                Team members
              </h2>
            </div>
          </div>
        </div>

        <div className="team-details">
          <div className="container">
            {teamData &&
              teamData.team.slice(0, 1).map((data, i) => (
                <div className="row" key={i}>
                  <div className="col-md-6 col-xl-5 text-center"
                    data-sal="slide-up"
                    data-sal-duration="700"
                    data-sal-delay="100"
                  >
                    <Link href={data.hasInfo ? `team-details/${data.id}` : "#"}>
                      <Image
                        className="img-fluid team__img"
                        src={data.img}
                        width={536}
                        height={600}
                        unoptimized={true}
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="col-md-6 col-xl-6 ml--48 ml-lg--0 my-auto"
                    data-sal="slide-up"
                    data-sal-duration="700"
                    data-sal-delay="200"
                  >
                    <div className="information bg-transparent team__bg-light px-0 mt-0">
                      <div className="information__head">
                        <h4 className="information__text-sm mb-3">
                          My Name Is,
                        </h4>
                        <Link
                          href={data.hasInfo ? `team-details/${data.id}` : "#"}
                          className="information__title"
                        >
                          {data.name}
                        </Link>
                        <h5 className="information__type">{data.occupation}</h5>
                        <p className="team__about-desc mb--36 mb-sm--20">
                          {data.descFour}
                        </p>
                        <div className="d-grid">
                          <div className="law-btn-group d-inline-block">
                            <Link
                              href={
                                data.hasInfo ? `team-details/${data.id}` : "#"
                              }
                              className="law-btn3d d-inline-block"
                            >
                              <span className="law-btn3d__shadows"></span>
                              <span className="law-btn3d__text team__btn3d-text">
                                <span className="btn-text">
                                  Know More About Me
                                </span>
                                <svg
                                  className="law-btn3d-icon-right team__btn3d-i"
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
                                <svg
                                  className="law-btn3d-icon-left"
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
                              </span>
                            </Link>
                          </div>

                          <div className="mt--36 mt-md--12">
                            <Image
                              src={signature}
                              width={182}
                              height={103}
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="team law-section-gapTop">
          <div className="container">
            <div className="row pb--52 pb-sm--32">
              <div className="col-12">
                <ul className="law__about-head team__details-head"
                  data-sal="slide-up"
                  data-sal-duration="700"
                  data-sal-delay="100"
                >
                  <li>
                    <span>Paralegal Staff</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-xl-6 ms-auto mt--16"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="200"
              >
                <p className="law__about-desc mb-0">
                  When you hire our law firm, you get more than one lawyer. You
                  get a team of competent and dedicated lawyers, law clerks,
                  paralegals, and legal secretaries. Our team is dedicated to
                  the success of our clients and it shows every day. We are
                  proud of our team!
                </p>
              </div>
            </div>
            <div className="row">
              {teamData &&
                teamData.team.slice(1, 5).map((data, i) => (
                  <div
                    className={`col-sm-6 col-md-6 col-xl-3 text-center text-sm-start ${!data.isGap ? "mb-4 mb-xl-0" : ""
                      }`}
                    key={i}
                    data-sal="slide-up"
                    data-sal-duration="700"
                    data-sal-delay={100 * (i + 1)}
                  >
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
                              className="img-fluid w-100"
                              src={data.img}
                              width={312}
                              height={400}
                              alt="image"
                            />
                          </Link>
                        ) : (
                          <Image
                            className="img-fluid w-100"
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
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Brand parentClass="" />
    </>
  );
};

export default TeamMemberPage;
