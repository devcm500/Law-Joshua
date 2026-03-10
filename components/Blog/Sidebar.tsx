"use client";
import { Link as ScrollLink } from "react-scroll";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M17.6098 13.7314C17.0479 13.2602 13.7526 11.1735 13.2049 11.2693C12.9478 11.3149 12.7511 11.5341 12.2246 12.1622C11.9811 12.4714 11.7137 12.7609 11.4249 13.0281C10.8956 12.9003 10.3834 12.7104 9.89872 12.4624C7.99797 11.537 6.46241 10.001 5.53757 8.1C5.28958 7.61533 5.0997 7.10307 4.97186 6.57386C5.23911 6.28502 5.52865 6.01763 5.83779 5.77414C6.46521 5.24764 6.68507 5.05221 6.73071 4.79379C6.8265 4.24479 4.73786 0.950786 4.26857 0.388929C4.07186 0.156214 3.89314 0 3.66429 0C3.00086 0 0 3.71057 0 4.19143C0 4.23064 0.0642856 8.09357 4.94293 13.0571C9.90643 17.9357 13.7694 18 13.8086 18C14.2894 18 18 14.9991 18 14.3357C18 14.1069 17.8438 13.9281 17.6098 13.7314Z"
              fill="#CBB07D"
            />
            <path
              d="M13.4987 8.35709H14.7845C14.7829 6.99359 14.2406 5.68637 13.2765 4.72223C12.3123 3.75809 11.0051 3.21576 9.6416 3.21423V4.49995C10.6643 4.50097 11.6448 4.90767 12.3679 5.63081C13.091 6.35394 13.4977 7.33443 13.4987 8.35709Z"
              fill="#CBB07D"
            />
            <path
              d="M16.713 8.35714H17.9987C17.9962 6.14147 17.1149 4.01728 15.5482 2.45057C13.9815 0.883854 11.8573 0.00255213 9.6416 0V1.28571C11.5164 1.28793 13.3137 2.03366 14.6394 3.35933C15.9651 4.685 16.7108 6.48236 16.713 8.35714Z"
              fill="#CBB07D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
