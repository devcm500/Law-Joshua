"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import teamData from "../../data/team.json";

const TeamDetails = () => {
  const router = useRouter();
  const params = useParams();
  const getId = parseInt(params.slug);

  let getTeamMember;
  getTeamMember = JSON.parse(JSON.stringify(teamData.team));

  const checkMatch = getTeamMember.find((member) => member.id === getId);

  useEffect(() => {
    if (!checkMatch) {
      router.push("/team-details/1");
    }
  }, [checkMatch, router]);

  return (
    <>
      <div className={`breadcrumb`}></div>

      <div className="team-details section-space-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              {checkMatch && (
                <div className="h-100">
                  {checkMatch.img ? (
                    <Image
                      className="img-fluid team-details--img"
                      src={checkMatch.img}
                      width={536}
                      height={600}
                      unoptimized={true}
                      alt="image"
                    />
                  ) : null}
                </div>
              )}
            </div>
            {checkMatch && (
              <div className="col-lg-6 d-flex justify-content-end">
                {checkMatch.information &&
                  checkMatch.information.map((childData, i) => (
                    <div
                      className="information px-md--24 px--36 py-md--24"
                      key={i}
                    >
                      <div className="information__head">
                        <h4 className="information__text-sm">My Name Is,</h4>
                        <h3 className="information__title">
                          {checkMatch.name}
                        </h3>
                        <h5 className="information__type mt-0">
                          {checkMatch.occupation}
                        </h5>
                      </div>
                      <div className="information__body">
                        <ul>
                          <li>
                            <span className="information__text">
                              occupation:
                            </span>
                            <span className="information__subtext">
                              {childData && childData.occupation}
                            </span>
                          </li>
                          <li>
                            <span className="information__text">
                              Experience:
                            </span>
                            <span className="information__subtext">
                              {childData && childData.experience}
                            </span>
                          </li>
                          <li>
                            <span className="information__text">
                              Practice Area:
                            </span>
                            <span className="information__subtext">
                              {childData && childData.practiceArea}
                            </span>
                          </li>
                          <li>
                            <span className="information__text">
                              Date of birth:
                            </span>
                            <span className="information__subtext">
                              {childData && childData.dateOfBirth}
                            </span>
                          </li>
                          <li>
                            <span className="information__text">Email:</span>
                            <Link
                              href={`mailto:${childData && childData.email}`}
                              className="information__subtext"
                            >
                              {childData && childData.email}
                            </Link>
                          </li>
                          <li>
                            <span className="information__text">Phone:</span>
                            <Link
                              href={`callto:${childData && childData.phone}`}
                              className="information__subtext"
                            >
                              {childData && childData.phone}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="information__bottom">
                        <h3 className="information__text">follow on:</h3>
                        <ul className="law__social information__social">
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="information__bottom pt--36">
                        <div className="law-btn-group w-100 d-block">
                          <Link
                            className="law-btn3d law-btn3d-xl team-details__wrapper--btn3d text-center"
                            href={`${
                              childData.call ? `callto:${childData.call}` : "/"
                            }`}
                          >
                            <span className="law-btn3d__shadows"></span>
                            <span className="law-btn3d__text">
                              <span className="btn-text">
                                ☎️ Schedule A Consultation
                              </span>
                              <svg
                                className="law-btn3d-icon-right"
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
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="row">
            <div className="col-md-11 col-xl-9 mx-auto mx-lg-0">
              {checkMatch &&
                checkMatch.about.map((innerData, i) => (
                  <div className="team-details__wrapper" key={i}>
                    <p className="team-details__wrapper--desc">
                      {innerData.desc}
                      <Link href="/" className="text-underline ps-1">
                        {innerData.highlightedText}
                      </Link>
                    </p>

                    {innerData.descTwo && (
                      <p className="team-details__wrapper--desc">
                        {innerData.descTwo && innerData.descTwo}
                      </p>
                    )}
                    {innerData.descThree && (
                      <p className="team-details__wrapper--desc">
                        {innerData.descThree && innerData.descThree}
                      </p>
                    )}

                    {innerData.descFour && (
                      <p className="team-details__wrapper--desc">
                        {innerData.descFour && innerData.descFour}
                      </p>
                    )}

                    {innerData.descFive && (
                      <p className="team-details__wrapper--desc">
                        {innerData.descFive && innerData.descFive}
                      </p>
                    )}

                    {innerData.descSix && (
                      <p className="team-details__wrapper--desc">
                        {innerData.descSix && innerData.descSix}
                      </p>
                    )}
                    {innerData.descSeven && (
                      <p className="team-details__wrapper--desc">
                        {innerData.descSeven && innerData.descSeven}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
