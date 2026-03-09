import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/app/backToTop";
import ServiceDetails from "@/components/Service/ServiceDetails";

export const metadata = {
  title: "Service Details Page - Law Firm",
  description: "Law Firm",
};

const ServiceDetailsPage = () => {
  return (
    <>
      <Header bgDark={true} />
      <ServiceDetails />

      <BackToTop />
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
