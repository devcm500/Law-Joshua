import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/Contact/ContactUs";

const ContactusPage = () => {
  return (
    <>
      <Header bgDark={true} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactusPage;
