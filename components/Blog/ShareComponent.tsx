"use client";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import React, { useEffect, useState } from "react";

import type { Blog } from "@/types";

interface ShareComponentProps {
  blog: Blog;
}

export default function ShareComponent({ blog }: ShareComponentProps) {
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
          <FontAwesomeIcon icon={faLinkedinIn} />  
        </LinkedinShareButton>
      </li>
      <li>
        <FacebookShareButton
          url={fullUrl}
          quote={blog.title}
          hashtag={blog.tags ? blog.tags[0] : ""}
        >
          <FontAwesomeIcon icon={faFacebookF} />  
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={fullUrl}
          title={blog.title}
          hashtags={blog.tags}
        >
          <FontAwesomeIcon icon={faTwitter} />  
        </TwitterShareButton>
      </li>
      <li>
        <InstapaperShareButton url={fullUrl} title={blog.title}>
          <FontAwesomeIcon icon={faInstagram} />  
        </InstapaperShareButton>
      </li>
    </ul>
  );
}
