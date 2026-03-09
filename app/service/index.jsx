import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServiceCard from "@/components/Info/ServiceCard";

const ServicePage = () => {
  return (
    <>
      <Header bgDark={true} />

      <div className={`breadcrumb breadcrumb-gap`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-8 m-auto">
              <h3 className="law__text breadcrumb__text fst-italic mb-0">
                Legal Service
              </h3>
              <h2 className="law__title breadcrumb__title mb-0">Services</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="info mt--40 mb--40">
        <div className="container">
          <ServiceCard />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
