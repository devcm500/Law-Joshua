import React from "react";
import CaseStudiesDetails from "@/components/Studies/CaseStudies-details";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/app/backToTop";

export const metadata = {
  title: "Case Studies Details Page - Law Firm",
  description: "Law Firm",
};

const CaseDetails = () => {
  return (
    <>
      <Header bgDark={true} />
      <CaseStudiesDetails />

      <BackToTop />
      <Footer />
    </>
  );
};

export default CaseDetails;
