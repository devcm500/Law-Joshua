"use client";

import { faArrowUp } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const BackToTop = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressPath = progressRef.current?.querySelector("path");
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;

      const lawProgressParent = progressRef.current;
      if (lawProgressParent) {
        if (scroll > 50) {
          lawProgressParent.classList.add("law-backto-top-active");
        } else {
          lawProgressParent.classList.remove("law-backto-top-active");
        }
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    progressRef.current?.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="law-progress-parent" ref={progressRef}>
      <svg
        className="law-back-circle svg-inner"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <FontAwesomeIcon icon={faArrowUp} className="law-backto-top-icon" />
    </div>
  );
};

export default BackToTop;
