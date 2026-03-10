/* eslint-disable @next/next/no-img-element */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document, Block, Inline } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

import React from "react";

interface RichTextRendererProps {
  richTextDocument: Document;
}

interface BlogContentProps {
  blog: {
    description?: Document | string;
  };
}

const RichTextRenderer = ({ richTextDocument }: RichTextRendererProps) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Block | Inline) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h1 id={id}>{text}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: Block | Inline) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h2 id={id}>{text}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: Block | Inline) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h3 id={id}>{text}</h3>;
      },
      [BLOCKS.HEADING_4]: (node: Block | Inline) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h4 id={id}>{text}</h4>;
      },

      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const { file, title, description } = (node as Block).data.target.fields || {};
        const imageUrl = `https:${file?.url}`;

        return (
          <>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={description || title || "Image"}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ) : (
              <p>Image not available </p>
            )}
          </>
        );
      },
    },
  };

  return <div>{documentToReactComponents(richTextDocument, options)}</div>;
};

const BlogContent = ({ blog }: BlogContentProps) => {
  return (
    <>
      {" "}
      <>
        {blog.description && typeof blog.description !== "string" ? (
          <RichTextRenderer richTextDocument={blog.description} />
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default BlogContent;
