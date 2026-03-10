/* eslint-disable @next/next/no-img-element */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import React from "react";

const RichTextRenderer = ({ richTextDocument }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h1 id={id}>{text}</h1>;
      },
      [BLOCKS.HEADING_2]: (node) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h2 id={id}>{text}</h2>;
      },
      [BLOCKS.HEADING_3]: (node) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h3 id={id}>{text}</h3>;
      },
      [BLOCKS.HEADING_4]: (node) => {
        const text = node.content
          .map((child) => ("value" in child ? child.value : ""))
          .join("");
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return <h4 id={id}>{text}</h4>;
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title, description } = node.data.target.fields || {};
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

const BlogContent = ({ blog }) => {
  return (
    <>
      {" "}
      <>
        {blog.description ? (
          <RichTextRenderer richTextDocument={blog.description} />
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default BlogContent;
