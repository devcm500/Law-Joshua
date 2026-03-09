import React from "react";
import BlogDetails from "@/components/Blog/BlogDetails";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/app/backToTop";

import { client } from "@/lib/contentfull";
import { createClient } from "contentful-management";
import Link from "next/link";
export const metadata = {
  title: "Blog Details Page - Law Firm",
  description: "Law Firm",
};

async function BlogDetailsPage({ params }) {
  const slug = (await params).slug;
  const fetchBlogPosts = async () => {
    const entries = await client.getEntries({
      content_type: "lowFirmBlogs", // Replace with your Contentful content type ID
      "fields.slug": slug,
      limit: 1,
    });
    const validateImage = (imageField) => {
      if (
        !imageField?.fields?.file?.url ||
        !imageField.fields.file.details?.image
      ) {
        return {};
      }
      return {
        url: imageField.fields.file.url,
        height: imageField.fields.file.details.image.height ?? 0,
        width: imageField.fields.file.details.image.width ?? 0,
      };
    };

    return entries.items.map((item) => ({
      title: item.fields?.title ?? "Untitled", // Default title if missing
      slug: item.fields?.slug ?? "",
      thumbnail: validateImage(item.fields?.thumbnail),
      category: {
        title: item.fields?.category?.fields.title,
        ...validateImage(item.fields?.category?.fields.thumbnail),
      },
      description: item.fields?.description ?? "", // Default rich text
      featured: item.fields?.featured ?? false,
      tags: item.fields?.tags ?? [],
      shortDescription: item.fields?.shortDescription ?? "",
      author: {
        name: item.fields?.author?.fields.name,
        ...validateImage(item.fields?.author?.fields.avatar),
      },
      createdAt: item.sys.createdAt,
      viewCount: item.fields?.viewCount ?? 0,

      id: item.sys.id,
    }));
  };

  const managementClient = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY || "",
  });
  const blogs = await fetchBlogPosts();
  const updateViewCount = async (entryId) => {
    try {
      const space = await managementClient.getSpace(
        process.env.CONTENTFUL_SPACE_ID || ""
      );
      const environment = await space.getEnvironment("master");
      const entry = await environment.getEntry(entryId);

      // Increment the view count
      const viewCount = entry.fields.viewCount["en-US"] || 0;
      entry.fields.viewCount["en-US"] = viewCount + 1;

      // Update the entry (no need to pass the sys.version manually)
      const updatedEntry = await entry.update();

      // Publish the entry after updating
      await updatedEntry.publish();

      console.log("View count updated successfully");
    } catch (error) {
      console.error("Error updating view count");
    }
  };

  if (blogs[0]) {
    updateViewCount(blogs[0].id);
  }
  return (
    <>
      <Header bgDark={true} />
      {blogs[0] ? (
        <BlogDetails blog={blogs[0]} />
      ) : (
        <div
          className="container text-center"
          style={{ paddingTop: "90px", paddingBottom: "90px" }}
        >
          <div className="alert alert-danger p-5 rounded">
            <h1 className="display-4">404 - Blog Not Found</h1>
            <p className="lead">
              Sorry, the blog post with slug <strong>{slug}</strong> does not
              exist.
            </p>
            <Link
              href="/"
              className="rbt-btn rbt-btn-sm rbt-btn-rounded rbt-btn-split-2 shadow-none"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      )}
      <BackToTop />
      <Footer />
    </>
  );
}

export default BlogDetailsPage;
