import React from "react";
import HomePage from "./home";
import BackToTop from "./backToTop";

export const metadata = {
  title: "Home Page - Law Firm",
  description: "Law Firm",
};

const HomePagelayout = () => {
  return (
    <>
      <HomePage />
      <BackToTop />
    </>
  );
};

export default HomePagelayout;


