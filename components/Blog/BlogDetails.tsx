import Image from "next/image";
import Link from "next/link";
import DetailsBreadcrumb from "./DetailsBreadcrumb";

import type { Blog } from "@/types";

import personImg from "../../public/images/person/person-1.png";

import BlogNavigation from "./BlogNavigation";
import BlogsContent from "./BlogsContent";
import Sidebar from "./Sidebar";
import ShareComponent from "./ShareComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/pro-solid-svg-icons";
import { QuoteMarksIcon } from "../icons/SvgIcons";

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
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
                        <QuoteMarksIcon />
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
