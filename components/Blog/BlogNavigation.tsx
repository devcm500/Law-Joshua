import Image from "next/image";

import type { Blog } from "@/types";

import { loadBlogs } from "@/lib/getBlogFunctions";
import Link from "next/link";
import { ArrowRightIcon } from "../icons/SvgIcons";

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
                  <ArrowRightIcon className="service__pagination--rotate" />
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
                  <ArrowRightIcon />
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
