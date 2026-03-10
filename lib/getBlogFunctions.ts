import { fetchBlogs } from "./fetchBlogs";
import type { Blog, BlogResponse } from "@/types";

interface LoadBlogsParams extends Record<string, unknown> {
  limit?: number;
  skip?: number;
}

export const loadBlogs = async ({ limit, skip, ...rest }: LoadBlogsParams): Promise<BlogResponse> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    limit,
    skip,
    ...rest,
  };

  const response = await fetchBlogs(params);
  return { blogs: response.items, total: response.total };
};

export const loadBlogsWithCategory = async ({ limit, skip, category }: { limit?: number; skip?: number; category: string }): Promise<BlogResponse> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    "fields.category.sys.contentType.sys.id": "lowFirmBlogCategories",
    "fields.category.fields.title": decodeURIComponent(category),
    limit,
    skip,
  };

  const response = await fetchBlogs(params);
  return { blogs: response.items, total: response.total };
};

export const loadBlogsWithTag = async ({ limit, skip, tag }: { limit?: number; skip?: number; tag: string }): Promise<BlogResponse> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    "fields.tags[in]": decodeURIComponent(tag),
    limit,
    skip,
  };

  const response = await fetchBlogs(params);
  return { blogs: response.items, total: response.total };
};

export const loadBlogsWithSearchQuery = async ({ limit, skip, searchQuery }: { limit?: number; skip?: number; searchQuery: string }): Promise<BlogResponse> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    "fields.title[match]": decodeURIComponent(searchQuery),
    limit,
    skip,
  };

  const response = await fetchBlogs(params);
  return { blogs: response.items, total: response.total };
};

export const loadBlogsFeatured = async ({ limit }: { limit?: number }): Promise<BlogResponse> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    limit: limit ? limit : 100,
    "fields.featured": true,
  };

  const response = await fetchBlogs(params);
  return { blogs: response.items, total: response.total };
};

export const loadPopulrtBlogs = async (): Promise<Blog[]> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    limit: 3,
    order: "-fields.viewCount",
    skip: 0,
  };
  const response = await fetchBlogs(params);
  return response.items;
};

export const loadAllTags = async (): Promise<string[]> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    select: "fields.tags",
  };

  const response = await fetchBlogs(params);
  const allTags = response.items.flatMap((blog) => blog.tags || []);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags;
};

interface CategoryItem {
  title?: string;
}

export const loadAllCategories = async (): Promise<CategoryItem[]> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    select: "fields.category",
  };

  const response = await fetchBlogs(params);
  const blogs = response.items;

  const allCategories = blogs.map((blog) => blog.category).filter(Boolean);

  const uniquecategories = Array.from(
    new Map(
      allCategories.map((category) => [category.title, category])
    ).values()
  );
  return uniquecategories;
};

export const loadBlogsRelated = async ({ category, tags, slug }: { category: string; tags: string; slug: string }): Promise<BlogResponse> => {
  const params: Record<string, unknown> = {
    content_type: "lowFirmBlogs",
    limit: 2,
    "fields.category.sys.contentType.sys.id": "lowFirmBlogCategories",
    "fields.category.fields.title": category,
    "fields.tags[in]": tags,
    "fields.slug[ne]": slug,
  };

  const response = await fetchBlogs(params);
  return { blogs: response.items, total: response.total };
};
