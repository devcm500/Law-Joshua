import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import BackToTop from "../backToTop";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Law Firm",
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
                Privacy Policy
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
                <h2>Privacy Policy - Law Firm</h2>
                <p>Effective Date: December 26, 2024</p>
                <p>
                  Welcome to Law Firm. This Privacy Policy outlines how we
                  collect, use, and protect your information when you interact
                  with our website and services. We are committed to protecting
                  your privacy and ensuring the security of your personal
                  information.
                </p>
                <h4>Information We Collect</h4>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> This includes your
                    name (e.g., John Doe), email address (e.g.,
                    john.doe@example.com), phone number (e.g., +1 555-123-4567),
                    and any other information you provide when contacting us or
                    using our services.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We collect information about
                    how you use our website, including your IP address (e.g.,
                    192.168.1.1), browser type (e.g., Chrome), pages visited,
                    and other usage statistics.
                  </li>
                  <li>
                    <strong>Cookies and Tracking Technologies:</strong> We use
                    cookies and similar technologies to enhance your browsing
                    experience and collect information about your preferences.
                  </li>
                  <li>
                    <strong>Client Information:</strong> When providing
                    services, we may collect business related information,
                    including project details, client feedback, and information
                    necessary for the project completion. For example, company
                    name (e.g. Acme Corp), project description (e.g. Redesigning
                    website), contact person (e.g. Jane Smith), and relevant
                    business documents.
                  </li>
                </ul>
                <h4>How We Use Your Information</h4>
                <p>We use your information for the following purposes:</p>
                <ul>
                  <li>To provide and maintain our services.</li>
                  <li>
                    To communicate with you, including responding to inquiries
                    and providing customer support.
                  </li>
                  <li>To improve our website and services.</li>
                  <li>To personalize your experience.</li>
                  <li>
                    To send you marketing and promotional materials (you can
                    opt-out at any time).
                  </li>
                  <li>To fulfill our contractual obligations.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
                <h4>Sharing Your Information</h4>
                <p>We may share your information with:</p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    assist us in providing our services (e.g., hosting by AWS,
                    analytics by Google Analytics).
                  </li>
                  <li>
                    <strong>Business Partners:</strong> In connection with
                    providing specific services.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or
                    to protect our rights.
                  </li>
                </ul>
                <h4>Data Security</h4>
                <p>
                  We take reasonable measures to protect your information from
                  unauthorized access, use, or disclosure. However, no method of
                  transmission over the internet or electronic storage is
                  completely secure.
                </p>
                <h4>Your Rights</h4>
                <p>You have the following rights:</p>
                <ul>
                  <li>
                    <strong>Access:</strong> You can request access to the
                    personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You can request that we correct
                    any inaccurate or incomplete information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You can request that we delete
                    your personal information.
                  </li>
                  <li>
                    <strong>Opt-out:</strong> You can opt-out of receiving
                    marketing communications.
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the contact
                  information below.
                </p>
                <h4>Cookies</h4>
                <p>
                  We use cookies to improve your browsing experience. You can
                  manage your cookie preferences through your browser settings.
                  For example, we use Google Analytics cookies to track website
                  usage.
                </p>
                <h4>Changes to This Privacy Policy</h4>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page. You are advised to review this Privacy Policy
                  periodically for any changes.
                </p>
                <h4>Contact Us</h4>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <ul>
                  <li>
                    Email:{" "}
                    <Link href={"mailto:frontdesk@allisonlawcop.com"}>
                      frontdesk@allisonlawcop.com
                    </Link>
                  </li>
                  <li>
                    Phone:{" "}
                    <Link href={"callto:+9853025630"}>(985) 302-5630</Link>
                  </li>
                  <li>Address: 506 Water St., Madisonville, Louisiana 70447</li>
                </ul>
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
