import React from "react";
import ServicePage from "./index";
import BackToTop from "../backToTop";

export const metadata = {
  title: "Service Page - Law Firm",
  description: "Law Firm",
};

const ServiceLayout = () => {
  return (
    <>
      <BackToTop />
      <ServicePage />
    </>
  );
};

export default ServiceLayout;
