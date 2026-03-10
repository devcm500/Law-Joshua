import Image from "next/image";
import Link from "next/link";
import DetailsBreadcrumb from "./DetailsBreadcrumb";

import personImg from "../../public/images/person/person-1.png";

import BlogNavigation from "./BlogNavigation";
import BlogsContent from "./BlogsContent";
import Sidebar from "./Sidebar";
import ShareComponent from "./ShareComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/pro-solid-svg-icons";

const BlogDetails = ({ blog }) => {
  return (
    <>
      <div className="blog-details">
        <DetailsBreadcrumb blog={blog} />
        <div className="container">
          <div className="row row--15">
            <div className="col-lg-9 order-2 order-lg-1 law-blog-content">
              <BlogsContent blog={blog} />

              <div className="blog-details__bottom d-flex flex-wrap justify-content-md-between gap-3">
                <div className="blog-details__bottom-tag flex-wrap">
                  <h4 className="blog-details__bottom-text">Tags:</h4>
                  <ul className="blog-details__list blog-details__bottom-taglist">
                    {blog.tags.map((tag, i) => (
                      <li key={i}>
                        <Link href={`/archive?tag=${tag}`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog-details__bottom-social flex-wrap d-flex gap-2 gap-lg-4">
                  <div className="d-flex blog-details__bottom-tag gap-2">
                    <FontAwesomeIcon icon={faShareNodes} className="blog-details-social--i" />  
                    <h4 className="blog-details__bottom-text">
                      Share this post:
                    </h4>
                  </div>
                  <ShareComponent blog={blog} />
                </div>
              </div>
            </div>

            <div className="col-lg-3 order-1 order-lg-2">
              <Sidebar blog={blog} />
            </div>

            <div className="col-lg-9 order-2">
              <div className="card service__profile position-relative">
                <div className="row align-items-center justify-content-between g-4">
                  <div className="col-md-5 col-lg-5 col-xl-4 text-center">
                    <Image
                      className="service__profile-avatar img-fluid"
                      src={personImg}
                      width={120}
                      height={120}
                      unoptimized={true}
                      alt="image"
                    />
                  </div>
                  <div className="col-md-7 col-lg-7 col-xl-8">
                    <div className="card-body text-center text-md-start p-0">
                      <div className="position-relative z-3">
                        <p className="service__desc service__profile-desc">
                          &quot;Integrating artificial intelligence (AI) into
                          your startup can indeed unlock exponential growth by
                          enhancing billion efficiency, improving
                          decision-making, and providing innovative
                          solutions&quot;
                        </p>
                        <h4 className="service__profile-name">
                          Joshua D. Allison
                        </h4>
                        <h4 className="service__profile-type mb-0">
                          A Professional Law Corporation
                        </h4>
                      </div>

                      <div className="service__profile-quote position-absolute bottom-0 end-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="160"
                          height="120"
                          viewBox="0 0 160 120"
                          fill="none"
                        >
                          <g opacity="0.1">
                            <path
                              d="M38.2678 0C60.4871 0 76.5265 18.6136 76.5259 46.1742C76.3836 86.2181 46.7173 114.53 3.91934 119.967C-0.0512761 120.472 -1.5823 114.89 2.07414 113.241C18.4961 105.831 26.79 96.4286 27.8613 87.1221C28.6616 80.169 24.9367 74.0782 20.2594 72.9377C8.13359 69.981 0.00921589 54.6583 0.00921589 38.8218C0.00921589 17.3811 17.1382 0 38.2678 0Z"
                              fill="#253551"
                            />
                            <path
                              d="M121.741 0C143.961 0 160 18.6136 160 46.1742C159.857 86.2181 130.191 114.53 87.393 119.967C83.4224 120.472 81.8913 114.89 85.5478 113.241C101.97 105.831 110.264 96.4286 111.335 87.1221C112.135 80.169 108.41 74.0782 103.733 72.9377C91.6072 69.981 83.4828 54.6583 83.4828 38.8218C83.4828 17.3811 100.612 0 121.741 0Z"
                              fill="#253551"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BlogNavigation blog={blog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
