import React from "react";
import ContactusPage from "./index";
import BackToTop from "../backToTop";

export const metadata = {
  title: "Contact Us Page - Law Firm",
  description: "Law Firm",
};

const ContactusLayout = () => {
  return (
    <>
      <BackToTop />
      <ContactusPage />
    </>
  );
};

export default ContactusLayout;
