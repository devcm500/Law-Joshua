"use client";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import React, { useEffect, useState } from "react";

export default function ShareComponent({ blog }) {
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(window.location.href);
    }
  }, []);
  return (
    <ul className="blog-details__social">
      <li>
        <LinkedinShareButton url={fullUrl}>
          <i className="fa-brands fa-linkedin-in"></i>
        </LinkedinShareButton>
      </li>
      <li>
        <FacebookShareButton
          url={fullUrl}
          quote={blog.title}
          hashtag={blog.tags ? blog.tags[0] : ""}
        >
          <i className="fa-brands fa-facebook-f"></i>
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={fullUrl}
          title={blog.title}
          hashtags={blog.tags}
        >
          <i className="fa-brands fa-twitter"></i>
        </TwitterShareButton>
      </li>
      <li>
        <InstapaperShareButton url={fullUrl} title={blog.title}>
          <i className="fa-brands fa-instagram"></i>
        </InstapaperShareButton>
      </li>
    </ul>
  );
}
