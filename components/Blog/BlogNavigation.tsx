import Image from "next/image";

import type { Blog } from "@/types";

import { loadBlogs } from "@/lib/getBlogFunctions";
import Link from "next/link";

interface BlogNavigationProps {
  blog: Blog;
}

export default async function BlogNavigation({ blog }: BlogNavigationProps) {
  const prevBlogs = await loadBlogs({
    "sys.createdAt[lt]": blog.createdAt,
    order: "-sys.createdAt",
    limit: 1,
  });
  const nextBlogs = await loadBlogs({
    "sys.createdAt[gt]": blog.createdAt,
    order: "sys.createdAt",
    limit: 1,
  });

  return (
    <div className="col-12 order-2">
      <div className="service__pagination blog-details__pagination">
        <ul className="service__pagination--list law-blog-details-pagination">
          <li>
            {prevBlogs.blogs[0] && (
              <>
                {prevBlogs.blogs[0]?.thumbnail.url && (
                  <Image className="pagination-blog-img"
                    src={"https:" + prevBlogs.blogs[0]?.thumbnail.url}
                    width={prevBlogs.blogs[0]?.thumbnail.width}
                    height={prevBlogs.blogs[0]?.thumbnail.height}
                    alt="image"
                    style={{ maxWidth: "300px" }}
                  />
                )}
                <Link
                  href={`/blog-details/${prevBlogs.blogs[0]?.slug}`}
                  className="pagination-blog-title d-flex align-items-center gap-2"
                >
                  <svg
                    className="service__pagination--rotate"
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
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-end">{prevBlogs.blogs[0]?.title}</span>
                </Link>
              </>
            )}
          </li>
          <li>
            <hr className="blog-details__pagination-hr" />
          </li>
          <li className="justify-content-end">
            {nextBlogs.blogs[0] && (
              <>
                <Link
                  href={`/blog-details/${nextBlogs.blogs[0].slug}`}
                  className="pagination-blog-title d-flex align-items-center gap-2 order-2 order-sm-0"
                >
                  <span>{nextBlogs.blogs[0]?.title}</span>
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
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                {nextBlogs.blogs[0]?.thumbnail.url && (
                  <Image className="pagination-blog-img"
                    src={"https:" + nextBlogs.blogs[0]?.thumbnail.url}
                    width={nextBlogs.blogs[0]?.thumbnail.width}
                    height={nextBlogs.blogs[0]?.thumbnail.height}
                    alt="image"
                    style={{ maxWidth: "300px" }}
                  />
                )}
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
