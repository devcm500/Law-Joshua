import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import BackToTop from "../backToTop";
import Link from "next/link";

export const metadata = {
  title: "Terms Condition Page - Law Firm",
  description: "Law Firm",
};

const TermsCondition = () => {
  return (
    <>
      <Header bgDark={true} />

      <div className={`breadcrumb breadcrumb-gap`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-8 m-auto">
              <h3 className="law__text breadcrumb__text fst-italic mb-0">
                Updated:12 March 2025
              </h3>
              <h2 className="law__title breadcrumb__title mb-0">
                Terms & Condition
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="law-section-gap2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <div className="law-policy-content">
                <h2>Terms and Conditions</h2>
                <p>
                  Welcome to Law Firm! These terms and conditions outline the
                  rules and regulations for the use of our website and services.
                </p>
                <h4>1. Acceptance of Terms</h4>
                <p>
                  By accessing this website, you agree to comply with and be
                  bound by these terms. If you do not agree with any part of
                  these terms, please do not use our website.
                </p>
                <h4>2. Services</h4>
                <p>
                  We offer marketing and website design and development
                  services. The scope, pricing, and details of our services are
                  outlined in individual agreements with clients.
                </p>
                <h4>3. Intellectual Property</h4>
                <p>
                  All content, designs, and materials on this website are the
                  intellectual property of Law Firm and may not be copied,
                  reproduced, or distributed without our consent.
                </p>
                <h4>4. User Responsibilities</h4>
                <p>Users must not:</p>
                <ul>
                  <li>Use our website for any unlawful purpose.</li>
                  <li>Attempt to gain unauthorized access to our systems.</li>
                  <li>Copy or distribute our content without permission.</li>
                </ul>
                <h4>5. Limitation of Liability</h4>
                <p>
                  We are not liable for any damages resulting from the use of
                  our website or services. This includes but is not limited to
                  direct, indirect, incidental, or consequential damages.
                </p>
                <h4>6. Changes to Terms</h4>
                <p>
                  We reserve the right to update or modify these terms at any
                  time. Continued use of our website after changes are posted
                  constitutes acceptance of the new terms.
                </p>
                <h4>7. Governing Law</h4>
                <p>
                  These terms shall be governed by and interpreted under the
                  laws of United States. Any disputes shall be resolved in the
                  appropriate courts.
                </p>
                <h4>8. Contact Information</h4>
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us at{" "}
                  <Link href={"mailto:frontdesk@allisonlawcop.com"}>
                    frontdesk@allisonlawcop.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </>
  );
};

export default TermsCondition;
