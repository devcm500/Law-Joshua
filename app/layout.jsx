"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../public/css/plugins/fontawesome-all.min.css";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../public/css/plugins/odometer.css";
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
