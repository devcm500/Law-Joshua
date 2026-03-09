/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ limit = 6, total }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const pageLength = Math.ceil(total / limit);
  const currentPage = params.get("page") ? Number(params.get("page")) : 1;

  const getPages = () => {
    if (pageLength <= 3) {
      return Array.from({ length: pageLength }, (_, index) => index + 1);
    }

    const pages = [1, 2, 3];
    if (currentPage > 4 && currentPage < pageLength) {
      pages.push("...");
    }
    if (currentPage > 3 && currentPage < pageLength) {
      pages.push(currentPage);
    }
    if (currentPage < pageLength - 1) {
      pages.push("...");
    }
    pages.push(pageLength);

    return Array.from(new Set(pages)); // Ensure no duplicates
  };

  const createPageLink = (page) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", page);

    return `${pathname}?${newParams.toString()}`;
  };

  const pages = getPages();

  return (
    <>
      {" "}
      <li className="d-flex align-items-center gap-1">
        <Link
          scroll={false}
          href={createPageLink(currentPage > 1 ? currentPage - 1 : currentPage)}
        >
          <i className="fa-regular fa-arrow-left ps-1"></i> <span>prev</span>
        </Link>
      </li>
      {pages.map((page, index) =>
        typeof page === "number" ? (
          <li key={index}>
            <Link
              scroll={false}
              href={createPageLink(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </Link>
          </li>
        ) : (
          <li key={index}>{page}</li>
        )
      )}
      <li className="d-flex align-items-center gap-1">
        <Link
          scroll={false}
          href={createPageLink(
            currentPage < pageLength ? currentPage + 1 : currentPage
          )}
        >
          <span>next</span> <i className="fa-regular fa-arrow-right ps-1"></i>{" "}
        </Link>
      </li>
    </>
  );
};
export default Pagination;
