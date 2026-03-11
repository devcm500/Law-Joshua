"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import SectionHead from "../Header/Section-Head";

import Pagination from "../comon/Pagination";
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ArrowRightIcon } from "../icons/SvgIcons";
import type { Blog } from "@/types";

interface ArchiveProps {
  blogs: Blog[];
  total: number;
  showFilter?: boolean;
  category?: string;
  searchQuery?: string;
  tag?: string;
}

const Archive = ({
  blogs,
  total,
  showFilter = true,
  category,
  searchQuery,
  tag,
}: ArchiveProps) => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="blog__header">
              <div className="col-md-8 mx-auto text-center">
                <h3 className="law__text breadcrumb__text fst-italic mb-0">
                  Archive
                </h3>
                {category && (
                  <h2 className="h1 mb--0">
                    Category : {decodeURIComponent(category)}
                  </h2>
                )}
                {searchQuery && (
                  <>
                    <h2 className="h1 mb--0">
                      Showing results for : {decodeURIComponent(searchQuery)}
                    </h2>
                    <p>
                      <strong>{total}</strong> results were found
                    </p>
                  </>
                )}
                {tag && (
                  <h2 className="h1 mb--0">Tag : {decodeURIComponent(tag)}</h2>
                )}
                <p className="law__about-desc mb-0">
                  As a domestic litigation law firm, we also regularly handle
                  the unique aspects of this type of litigation, which includes
                  Hearing Officer Conferences, Judge trials, and expedited
                  proceedings.
                </p>

                {showFilter && (
                  <div className="col-sm-6 mx-auto">
                    <form className="blog__search">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search.. crime, politics, business"
                      />
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <SectionHead title="Discover Our Latest News" />
            <div className="blog__wrapper">
              {blogs.map((blog, i) => (
                <div key={i} className="card blog__card mb-3">
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
                        <Link
                          href={`/blog-details/${blog.slug}`}
                          className="blog__card-title"
                        >
                          {blog.title}
                        </Link>
                        {blog?.shortDescription && (
                          <p className="blog__card-desc">
                            {blog?.shortDescription}
                          </p>
                        )}

                        <div className="d-flex">
                          <Link
                            className="banner__btn info__btn blog__card-btn"
                            href={`/blog-details/${blog.slug}`}
                          >
                            Read More
                            <ArrowRightIcon fill="#555C68" />
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
              <div className="blog__wrapper-pagination">
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

export default Archive;
