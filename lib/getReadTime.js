import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export const readTime = (blog) => {
  const plainText = documentToPlainTextString(blog?.description);

  // Calculate word count and reading time
  const words = plainText.split(/\s+/).length;
  const readingSpeed = 200; // Average reading speed (words per minute)
  const readTime = Math.ceil(words / readingSpeed); // Time in minutes

  return readTime;
};
