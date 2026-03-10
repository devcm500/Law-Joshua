import React from "react";

import About from "@/components/About/About";
import Brand from "@/components/Brand/Brand";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/Tesstimonial/Testimonial";
import Banner from "@/components/Banner/Banner";
import AboutTwo from "@/components/About/AboutTwo";
import Studies from "@/components/Studies/Studies";
import Info from "@/components/Info/Info";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="bg-1">
        <Brand />
        <About />
      </div>

      <Info />
      <AboutTwo />
      <Testimonial />
      <Team />
      <Studies />
      <Contact />

      <Footer />
    </>
  );
};

export default HomePage;
