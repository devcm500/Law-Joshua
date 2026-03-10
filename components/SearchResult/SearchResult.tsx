"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import SectionHead from "../Header/Section-Head";

import blogImg from "../../public/images/blog/blog-img-1.png";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchResult = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="blog__header">
              <div className="col-md-8 mx-auto text-center">
                <h3 className="law__text breadcrumb__text fst-italic mb-0">
                  Search Result
                </h3>
                <h2 className="law__title breadcrumb__title mb-0">Search Result</h2>
                <p className="law__about-desc mb-0">
                  As a domestic litigation law firm, we also regularly handle
                  the unique aspects of this type of litigation, which includes
                  Hearing Officer Conferences, Judge trials, and expedited
                  proceedings.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <SectionHead title="Discover Our Latest News" />
            <div className="blog__wrapper">
              <div className="card blog__card mb-3">
                <div className="row g-0 justify-content-between">
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="card-body px-0">
                      <h5 className="blog__card-category">Advocacy</h5>
                      <Link href="/blog-details/1" className="blog__card-title">
                        Key Trends in Client Service That Lawyers” Need to Know!
                      </Link>
                      <p className="blog__card-desc">
                        We believe exceptional representation is achieved
                        through aggressive advocacy
                      </p>

                      <div className="d-flex">
                        <Link
                          className="banner__btn info__btn blog__card-btn"
                          href="/blog-details/1"
                        >
                          Read More
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
                              fill="#555C68"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                              fill="#555C68"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                              fill="#555C68"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 position-relative">
                    <Link href="/blog-details/1">
                      <Image
                        className="img-fluid blog__card-img"
                        src={blogImg}
                        width={648}
                        height={320}
                        alt="image"
                      />
                    </Link>

                    <div className="blog__card-date">
                      <h4 className="blog__card-date--day">26</h4>
                      <span className="blog__card-date--text">mar</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog__wrapper-pagination">
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    <span>2</span>
                  </li>
                  <li className="d-flex align-items-center gap-1">
                    <span>next</span>
                    <FontAwesomeIcon className="ps-1" icon={faArrowRight} />  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
