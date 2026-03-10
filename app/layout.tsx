import { Spectral, Jost } from "next/font/google";
import localFont from "next/font/local";

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

const timesNewRoman = localFont({
  src: [
    {
      path: "../public/fonts/times-new-roman-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/times-new-roman-regular-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/times-new-roman-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/times-new-roman-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-times-new-roman",
  display: "swap",
});

const americanScribe = localFont({
  src: [
    {
      path: "../public/fonts/american-scribe.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-american-scribe",
  display: "swap",
});

const fontVariables = [
  spectral.variable,
  jost.variable,
  timesNewRoman.variable,
  americanScribe.variable,
].join(" ");

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="law-main" suppressHydrationWarning>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
