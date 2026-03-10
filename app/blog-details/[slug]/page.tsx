import React from "react";
import BlogDetails from "@/components/Blog/BlogDetails";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/app/backToTop";

import { client } from "@/lib/contentfull";
import { createClient } from "contentful-management";
import Link from "next/link";
import type { Blog } from "@/types";

export const metadata = {
  title: "Blog Details Page - Law Firm",
  description: "Law Firm",
};

interface ContentfulImageField {
  fields?: {
    file?: {
      url?: string;
      details?: {
        image?: {
          height?: number;
          width?: number;
        };
      };
    };
  };
}

async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const fetchBlogPosts = async (): Promise<(Blog & { id: string })[]> => {
    const entries = await client.getEntries({
      content_type: "lowFirmBlogs",
      "fields.slug": slug,
      limit: 1,
    });
    const validateImage = (imageField: ContentfulImageField) => {
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

    return entries.items.map((item) => {
      const fields = item.fields as Record<string, any>;
      return {
        title: fields?.title ?? "Untitled",
        slug: fields?.slug ?? "",
        thumbnail: validateImage(fields?.thumbnail),
        category: {
          title: (fields?.category as any)?.fields?.title,
          ...validateImage((fields?.category as any)?.fields?.thumbnail),
        },
        description: fields?.description ?? "",
        featured: fields?.featured ?? false,
        tags: fields?.tags ?? [],
        shortDescription: fields?.shortDescription ?? "",
        author: {
          name: (fields?.author as any)?.fields?.name,
          ...validateImage((fields?.author as any)?.fields?.avatar),
        },
        createdAt: item.sys.createdAt,
        viewCount: fields?.viewCount ?? 0,
        id: item.sys.id,
      };
    }) as (Blog & { id: string })[];
  };

  const managementClient = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY || "",
  });
  const blogs = await fetchBlogPosts();
  const updateViewCount = async (entryId: string) => {
    try {
      const space = await managementClient.getSpace(
        process.env.CONTENTFUL_SPACE_ID || ""
      );
      const environment = await space.getEnvironment("master");
      const entry = await environment.getEntry(entryId);

      const viewCount = (entry.fields.viewCount as Record<string, number>)["en-US"] || 0;
      (entry.fields.viewCount as Record<string, number>)["en-US"] = viewCount + 1;

      const updatedEntry = await entry.update();
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
