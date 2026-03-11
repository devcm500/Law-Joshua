"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import studiesData from "../../data/caseStudies.json";

import Breadcrumb from "../Service/Breadcrumb";
import { ArrowRightIcon, CheckmarkIcon, UserIcon, CalendarIcon, ScaleIcon, LocationPinIcon, CaseBudgetIcon } from "../icons/SvgIcons";

const CaseStudiesDetails = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string | string[] | undefined;
  const slugStr = Array.isArray(slug) ? slug[0] : slug ?? "";
  const getId: number = parseInt(slugStr, 10);

  const studies = studiesData.studies;
  const currentIndex = studies.findIndex((study) => study.id === getId);
  const getStudiesData = studies[currentIndex];

  const prevStudy = currentIndex > 0 ? studies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;

  useEffect(() => {
    if (!getStudiesData) {
      router.push("/case-details/1");
    }
  }, [getStudiesData, router]);

  const handleNavigation = (direction: "prev" | "next"): void => {
    if (direction === "prev" && prevStudy) {
      router.push(`/case-details/${prevStudy.id}`);
    } else if (direction === "next" && nextStudy) {
      router.push(`/case-details/${nextStudy.id}`);
    }
  };

  return (
    <>
      {getStudiesData.details.map((data, i) => (
        <div key={i}>
          <Breadcrumb title={data.title} subTitle="Case Details" />
        </div>
      ))}
      <div className="service law-section-gapBottom">
        <div className="container">
          {getStudiesData.details.map((data, i) => (
            <div className="row" key={i}>
              <div className="col-12">
                <h4 className="service__num">00{data.serial}</h4>
                <Image
                  className="service__img"
                  src={data.thumbImg}
                  width={1320}
                  height={600}
                  alt="image"
                />
              </div>
            </div>
          ))}

          <div className="service__wrapper case-details__wrapper border-0">
            <div className="content">
              {getStudiesData.details.map((data, i) => (
                <div
                  className="row justify-content-between position-relative"
                  key={i}
                >
                  <div className="case__sidebar">
                    <div className="col-lg-4 col-xl-3">
                      <ul className="case__sidebar-list">
                        <li>
                          <div className="case__sidebar-icon">
                            <UserIcon />
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Client:{" "}
                            </h6>
                            <span className="case__sidebar-list--text">
                              Kameron Williamson
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <CalendarIcon />
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Duration:{" "}
                            </h6>
                            <span className="case__sidebar-list--text">
                              27 August, 2024
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <ScaleIcon />
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Services Area:
                            </h6>
                            <span className="case__sidebar-list--text">
                              Family Law
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <LocationPinIcon />
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Location:
                            </h6>
                            <span className="case__sidebar-list--text">
                              506 Water St. Madisonville, LA 70447
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <CaseBudgetIcon />
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Case Budget:
                            </h6>
                            <span className="case__sidebar-list--text">
                              Kameron Williamson
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-8 position-relative z-2">
                    <div className="service__body position-relative z-2 mt--52 mt-sm--32">
                      <p className="service__desc mb-0">{data.desc}</p>
                      {(data as Record<string, unknown>).descTwo ? (
                        <p className="service__desc service__desc-bottom">
                          {(data as Record<string, unknown>).descTwo as string}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="col-lg-8 position-relative z-2">
                    <div className="service__body scrollspy-example bg-body-tertiary p-3 rounded-2">
                      {data.card.map((innerData, i) => (
                        <div
                          className="card service__card case-details__card"
                          key={i}
                        >
                          <div className="row align-items-center g-4">
                            <div className="col-md-4">
                              <Image
                                className="service__card-img img-fluid w-100"
                                src={innerData.img}
                                width={312}
                                height={400}
                                alt="image"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body pt-0 pt-md-3">
                                <h5 className="service__card-title position-relative top-0">
                                  {innerData.title}
                                </h5>
                                <p className="service__desc mb--16 mb-lg--8">
                                  {innerData.desc}
                                </p>
                                <ul className="case-details__card-list">
                                  {innerData.list.map((list, i) => (
                                    <li key={i}>
                                      <span>{list.text}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service__process">
                    <div className="service__process-ml">
                      <div className="col-lg-8">
                        <h2 className="service__title">Outcome</h2>
                        <p className="service__desc">{data.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 position-relative z-2">
                    <div className="service__body scrollspy-example bg-body-tertiary p-3 rounded-2">
                      <div className="service__feature" key={i}>
                        <h2 className="service__title">Case Strategy</h2>

                        <div className="col-md-9">
                          <ul className="service__feature-list">
                            {data.outcome_list.map((list, i) => (
                              <li key={i}>
                                <CheckmarkIcon />
                                <span className="service__feature-list--text">
                                  {list.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service__pagination case-details__pagination mt-0">
            <ul className="service__pagination--list law-blog-details-pagination">
              <li
                className="case-details__pagination--border-right"
                onClick={() => handleNavigation("prev")}
                style={{ cursor: prevStudy ? "pointer" : "default" }}
              >
                {prevStudy && (
                  <>
                    <Image className="pagination-blog-img"
                      src={prevStudy.img}
                      width={312}
                      height={120}
                      alt="Previous Case Study"
                    />
                    <div className="pagination-blog-title d-flex align-items-center gap-2">
                      <ArrowRightIcon className="service__pagination--rotate" />
                      <span>Previous Case Study</span>
                    </div>
                  </>
                )}
              </li>

              <li>
                <hr className="blog-details__pagination-hr" />
              </li>

              <li
                onClick={() => handleNavigation("next")}
                style={{ cursor: nextStudy ? "pointer" : "default" }}
              >
                {nextStudy && (
                  <>
                    <div className="pagination-blog-title d-flex align-items-center gap-2">
                      <span>Next Case Study</span>
                      <ArrowRightIcon />
                    </div>
                    <Image className="pagination-blog-img"
                      src={nextStudy.img}
                      width={312}
                      height={120}
                      alt="Next Case Study"
                    />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetails;
