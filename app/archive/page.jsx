import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Archive from "@/components/Archive/Archive";

import BackToTop from "../backToTop";
import { loadBlogs } from "@/lib/getBlogFunctions";
import Link from "next/link";

export const metadata = {
  title: "Archive Page - Law Firm",
  description: "Law Firm",
};

const BlogArchive = async ({ searchParams }) => {
  const filters = await searchParams;
  const pageNumber = filters.page || 1;
  const category = filters.category || "";
  const tag = filters.tag || "";
  const searchQuery = filters.search || "";

  const loadBlogConfig = {
    skip: Number(pageNumber) * 6 - 6,
    limit: 6,
  };

  if (category) {
    loadBlogConfig["fields.category.sys.contentType.sys.id"] =
      "lowFirmBlogCategories";
    loadBlogConfig["fields.category.fields.title"] =
      decodeURIComponent(category);
  }
  if (searchQuery) {
    loadBlogConfig["fields.title[match]"] = decodeURIComponent(searchQuery);
  }
  if (tag) {
    loadBlogConfig["fields.tags[in]"] = decodeURIComponent(tag);
  }

  console.log(loadBlogConfig);
  const allBlogs = await loadBlogs(loadBlogConfig);

  return (
    <>
      <Header bgDark={true} />
      {allBlogs.blogs.length ? (
        <Archive
          blogs={allBlogs.blogs}
          total={allBlogs.total}
          showFilter={false}
          category={category}
          tag={tag}
          searchQuery={searchQuery}
        />
      ) : (
        <div
          className="container text-center"
          style={{ paddingTop: "90px", paddingBottom: "90px" }}
        >
          <div className="alert alert-danger p-5 rounded">
            <h1 className="display-4">404 - Blog Not Found</h1>
            <p className="lead">
              Sorry, the blog post with{" "}
              {category && (
                <>
                  Category <strong>{decodeURIComponent(category)}</strong>{" "}
                  {searchQuery ? "and" : ""}
                </>
              )}{" "}
              {searchQuery && (
                <>
                  search query{" "}
                  <strong>
                    {decodeURIComponent(decodeURIComponent(searchQuery))}
                  </strong>
                  {tag ? "and" : ""}
                </>
              )}{" "}
              {tag && (
                <>
                  tag{" "}
                  <strong>{decodeURIComponent(decodeURIComponent(tag))}</strong>
                </>
              )}{" "}
              does not exist.
            </p>
            <Link
              href="/blogs"
              className="rbt-btn rbt-btn-sm rbt-btn-rounded rbt-btn-split-2 shadow-none"
            >
              Go Back to Blog Page
            </Link>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogArchive;
