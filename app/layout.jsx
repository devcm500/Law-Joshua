"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../public/css/plugins/odometer.css";

import { config } from '@fortawesome/fontawesome-svg-core';

import '../styles/fontawesome.css';

config.autoAddCss = false;
// ========= Plugins CSS END =========

import "../public/scss/style.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={`law-main`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
