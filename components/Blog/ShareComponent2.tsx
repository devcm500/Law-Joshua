"use client";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import React, { useEffect, useState } from "react";

export default function ShareComponent2({ blog }) {
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(window.location.href);
    }
  }, []);
  return (
    <>
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
    </>
  );
}
