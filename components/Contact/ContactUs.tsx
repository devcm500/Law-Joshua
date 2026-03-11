import React from "react";
import Link from "next/link";
import Image from "next/image";

import contactData from "../../data/contact.json";

import Breadcrumb from "../Service/Breadcrumb";
import SectionHead from "../Header/Section-Head";

import contactImg from "../../public/images/contactus/contact-img-1.png";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneRotary, faEnvelope, faLocationDot } from "@fortawesome/pro-regular-svg-icons";
import { ArrowRightIcon, OfficeIcon, ClockCircleIcon, PhoneCircleIcon, EmailCircleIcon, LocationCircleIcon, ContactPhoneOutlineIcon } from "../icons/SvgIcons";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb title="Let's Talk" subTitle="" />

      <div className="contactus section-space-top">
        <div className="container">
          <div className="row">
            <div className="card contactus__card-wrap">
              <div className="row mt_dec--24">
                <div className="col-lg-7 col-xxl-8">
                  <Image
                    className="img-fluid contactus__card-wrap--img"
                    src={contactImg}
                    width={872}
                    height={575}
                    unoptimized={true}
                    alt="image"
                  />
                </div>
                <div className="col-lg-5 col-xxl-4 mt-sm--24 mt-md--24">
                  {contactData &&
                    contactData.contact.slice(0, 1).map((data, i) => (
                      <div
                        className="card-body contactus__card-wrap--body"
                        key={i}
                      >
                        <OfficeIcon />
                        <h5 className="contactus__card-wrap--title">
                          Main Offices
                        </h5>
                        <p className="contactus__card-wrap--date">
                          Monday - Thursday 8:00 am - 4:00 pm
                        </p>

                        <div className="d-flex justify-content-start contactus__card-wrap--btn">
                          <Link className="banner__btn" href="callto:19853025630">
                            Call to Schedule an Appointment
                            <ArrowRightIcon />
                          </Link>
                        </div>

                        <ul className="contactus__box contactus__card-wrap--box law__hoverlink">
                          <li>
                            <FontAwesomeIcon icon={faPhoneRotary} />  
                            <Link href={`callto:${data.call}`}>
                              {data.phone}
                            </Link>
                          </li>
                          <li>
                            <ContactPhoneOutlineIcon />
                            <Link href={`callto:${data.call}`}>
                              {data.phone}
                            </Link>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faEnvelope} />  
                            <Link href={`mailto:${data.email}`}>
                              {data.email}
                            </Link>
                          </li>
                          <li className="align-items-baseline">
                            <FontAwesomeIcon icon={faLocationDot} />  
                            <span>{data.address}</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="contact law-section-gapBottom">
            <div className="row">
              <SectionHead title="Get In Touch" />
            </div>
            <ContactForm />
          </div>
          <div className="row">
            <SectionHead title="Office Branch" />
          </div>
          <div className="row justify-content-between contactus__card-mt">
            <div className="col-lg-4 col-xl-3">
              <div className="law-office-hours-area sticky-top">
                <h3 className="contactus__card-text">Office Hours:</h3>
                <ClockCircleIcon className="mb--16" />
                <ul className="law__footer-list contactus__card-list">
                  <li>
                    <span className="law__footer-subtext contactus__card-subtext fw-bold d-block mb-2">
                      Monday - Thursday:{" "}
                    </span>
                    {/* <br /> */}
                    <span className="law__footer-subtext contactus__card-subtext">
                      8:00 am - 4:00 pm{" "}
                    </span>
                  </li>
                  <li>
                    <span className="law__footer-subtext contactus__card-subtext">
                      Closed From: 12:00 pm - 1:00 pm
                    </span>
                  </li>
                  <li>
                    <span className="law__footer-subtext contactus__card-subtext textprimary rbt-color-primary fw-bold d-block mb-2">
                      Friday:{" "}
                    </span>
                    <span className="law__footer-subtext contactus__card-subtext">
                      8:00 am - 12:00 pm
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-sm--24 mt-lg-0">
              {contactData &&
                contactData.contact.map((data, i) => (
                  <div className="card contactus__card" key={i}>
                    <div className="row g-0 justify-content-between">
                      <div className="col-md-6 my-auto">
                        <div className="card-body p-0">
                          <h4 className="contactus__text">{data.title}</h4>
                          <ul className="contactus__box law__hoverlink">
                            <li>
                              <PhoneCircleIcon />
                              <Link
                                className="contactus__box-text"
                                href={`callto:${data.call}`}
                              >
                                {data.phone}
                              </Link>
                            </li>
                            <li>
                              <EmailCircleIcon />
                              <Link
                                className="contactus__box-text"
                                href={`mailto:${data.email}`}
                              >
                                {data.email}
                              </Link>
                            </li>
                            <li>
                              <LocationCircleIcon />
                              <span className="contactus__box-text">
                                {data.address}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5 mt-md-0">
                        <iframe
                          className="contactus__card-map"
                          src={data.mapSrc}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
