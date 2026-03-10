import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { Document } from "@contentful/rich-text-types";

interface BlogWithDescription {
  description?: Document;
}

export const readTime = (blog: BlogWithDescription): number => {
  const plainText = documentToPlainTextString(blog?.description as Document);
  const words = plainText.split(/\s+/).length;
  const readingSpeed = 200;
  const time = Math.ceil(words / readingSpeed);
  return time;
};
