import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShareComponent2 from "./ShareComponent2";

const DetailsBreadcrumb = ({ blog }) => {
  return (
    <>
      <div className="blog-details-breadcrumb">
        <div className="container">
          <div className="row px-3 px-md-0">
            <div className="card blog__card blog-details-card pb-0">
              <div className="row g-0 justify-content-between pb-0">
                <div className="col-lg-5 order-2 order-lg-1">
                  <div className="card-body px-md-0 p-lg-0">
                    {blog.category?.title && (
                      <h5 className="blog__card-category">
                        <Link
                          href={`/archive?category=${blog.category?.title}`}
                        >
                          {blog.category?.title}
                        </Link>
                      </h5>
                    )}
                    <Link href="#" className="blog__card-title">
                      {blog.title}
                    </Link>
                    {blog.shortDescription && (
                      <p className="blog__card-desc">{blog.shortDescription}</p>
                    )}
                    <ul className="blog-details__date">
                      {blog.author.name && (
                        <li>
                          <span>By {blog.author.name}</span>
                        </li>
                      )}
                      <li>
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </li>
                    </ul>
                    <ul className="blog-details__social">
                      <ShareComponent2 blog={blog} />
                    </ul>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBreadcrumb;
