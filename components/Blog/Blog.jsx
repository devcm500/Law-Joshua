"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import SectionHead from "../Header/Section-Head";
import Pagination from "../comon/Pagination";
import SearchBlog from "./SearchBlog";

const Blog = ({ blogs, total, showFilter = true }) => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="blog__header">
              <div className="col-md-8 mx-auto text-center">
                <h3 className="law__text breadcrumb__text fst-italic mb-0">
                  News & Blogs
                </h3>
                <h2 className="law__title breadcrumb__title mb-0">
                  Our Insight
                </h2>
                <p className="law__about-desc mb-0">
                  As a domestic litigation law firm, we also regularly handle
                  the unique aspects of this type of litigation, which includes
                  Hearing Officer Conferences, Judge trials, and expedited
                  proceedings.
                </p>

                <div className="col-sm-10 col-md-12 col-lg-9 col-xl-8 col-xxl-6 mx-auto">
                  <SearchBlog />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <SectionHead title="Discover Our Latest News" />
            <div className="blog__wrapper mt--8">
              {blogs.map((blog, i) => (
                <div key={i} className="card blog__card law-blog-card">
                  <div className="row g-0 justify-content-between">
                    <div className="col-lg-5 order-2 order-lg-1">
                      <div className="card-body px-0">
                        {blog.category?.title && (
                          <h5 className="blog__card-category">
                            <Link
                              href={`/archive?category=${blog.category?.title}`}
                            >
                              {" "}
                              {blog.category?.title}
                            </Link>
                          </h5>
                        )}
                        <h3>
                          <Link
                            href={`/blog-details/${blog.slug}`}
                            className="blog__card-title"
                          >
                            {blog.title}
                          </Link>
                        </h3>
                        {blog?.shortDescription && (
                          <p className="blog__card-desc">
                            {blog?.shortDescription}
                          </p>
                        )}

                        <div className="d-flex">
                          <Link
                            className="banner__btn info__btn blog__card-btn law-blog-card-btn mt--16"
                            href={`/blog-details/${blog.slug}`}
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
                          src={"https:" + blog?.thumbnail.url}
                          width={blog?.thumbnail.width}
                          height={blog?.thumbnail.height}
                          alt="image"
                        />
                      </Link>

                      <div className="blog__card-date">
                        <h4 className="blog__card-date--day">
                          {new Date(blog.createdAt).getDate()}
                        </h4>
                        <span className="blog__card-date--text">
                          {new Date(blog.createdAt).toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="blog__wrapper-pagination mt--48">
                <ul>
                  <Pagination total={total} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
