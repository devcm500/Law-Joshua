"use client";
import { Link as ScrollLink } from "react-scroll";
import { PhoneIcon } from "../icons/SvgIcons";
import React, { useEffect, useState } from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import type { Document } from "@contentful/rich-text-types";
import type { Blog } from "@/types";

interface HeadingItem {
  level: number;
  text: string;
}

interface ContentNode {
  nodeType: string;
  content?: ContentNode[];
  value?: string;
}

interface SidebarProps {
  blog: Blog;
}

const extractHeadings = (richTextDocument: Document): HeadingItem[] => {
  const headings: HeadingItem[] = [];

  const traverseNodes = (nodes: ContentNode[]) => {
    nodes.forEach((node) => {
      // Check if the node is a heading
      if (
        node.nodeType.startsWith("heading-") &&
        node.nodeType !== "heading-5"
      ) {
        const level = parseInt(node.nodeType.replace("heading-", ""), 10);

        // Extract text content from the heading
        const text = (node.content || [])
          .map((child) => {
            if (child.nodeType === "text") {
              return child.value || "";
            }
            return "";
          })
          .join("")
          .trim();

        // Add the heading to the results
        if (text) {
          headings.push({ level, text });
        }
      }

      // Recursively process child nodes if they exist
      if ("content" in node && Array.isArray(node.content)) {
        traverseNodes(node.content);
      }
    });
  };

  traverseNodes(richTextDocument.content as ContentNode[]);
  return headings;
};

export default function Sidebar({ blog }: SidebarProps) {
  const tableOfContext = blog?.description && typeof blog.description === "object"
    ? extractHeadings(blog.description)
    : [];
  const [activeSection, setActiveSection] = useState<string>("");
  const [sectionIds, setSectionIds] = useState<string[]>(
    tableOfContext.map((elm) => {
      // Clean up the text to create a valid id
      return `${elm.text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}`;
    })
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    console.log(activeSection);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(`${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const blogDescriptionContainer =
        document.querySelector(".law-blog-content");
      if (blogDescriptionContainer) {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleScrollToElement = (e: React.MouseEvent, targetId: string): void => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Convert Rich Text to plain text
  const plainText =
    blog?.description && typeof blog.description === "object"
      ? documentToPlainTextString(blog.description)
      : "";

  // Calculate word count and reading time
  const words = plainText.split(/\s+/).length;
  const readingSpeed = 200; // Average reading speed (words per minute)

  const readTime = Math.ceil(words / readingSpeed); // Time in minutes

  return (
    <div className="law-sidebar-wrapper">
      <h4 className="law-table-content-title">Table of Content</h4>
      <div className="service__sidebar">
        <ul className="service__sidebar-list law-table-of-contents">
          {tableOfContext.map((elm, i) => {
            const targetId = elm.text
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "");

            return (
              <li
                key={i}
                onClick={(e) => handleScrollToElement(e, `${targetId}`)}
              >
                <ScrollLink
                  to={targetId}
                  smooth={true}
                  duration={500}
                  className={
                    activeSection === targetId
                      ? "btn service__sidebar-btn active"
                      : "btn service__sidebar-btn"
                  }
                >
                  {elm.text.replace(/^\d+\.\s*/, "")}
                </ScrollLink>
              </li>
            );
          })}
        </ul>

        <button className="service__call d-none d-lg-flex">
          <span className="service__call-text fst-italic">Call Us</span>
          <span className="service__call-text fw-bold pb-1">Today</span>
          <PhoneIcon />
        </button>
      </div>
    </div>
  );
}
