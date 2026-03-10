import { Spectral, Jost } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../public/css/plugins/odometer.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/fontawesome.css";

config.autoAddCss = false;
// ========= Plugins CSS END =========

import "../public/scss/style.scss";

import BootstrapClient from "../components/BootstrapClient";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${jost.variable}`}>
      <body className="law-main" suppressHydrationWarning>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
