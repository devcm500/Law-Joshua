import React from "react";

import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BackToTop from "../backToTop";
import { loadBlogs } from "@/lib/getBlogFunctions";

export const metadata = {
  title: "Blog Page - Law Firm",
  description: "Law Firm",
};

const Blogs = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const filters = await searchParams;
  const pageNumber = filters.page || "1";
  const allBlogs = await loadBlogs({
    skip: Number(pageNumber) * 6 - 6,
    limit: 6,
  });

  return (
    <>
      <Header bgDark={true} />
      <Blog total={allBlogs.total} blogs={allBlogs.blogs} />

      <Footer />
      <BackToTop />
    </>
  );
};

export default Blogs;
