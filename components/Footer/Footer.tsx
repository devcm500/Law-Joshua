import React from "react";
import Link from "next/link";
import Image from "next/image";

import footerData from "../../data/footer.json";
import serviceData from "../../data/service.json";

import Copyright from "./Copyright";
import CollapsibleText from "./CollapsibtleText";

import logoDark from "../../public/images/logo/logo-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/pro-regular-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  faLocationDot,
};

const Footer = () => {
  return (
    <>
      <footer className="law__footer law-section-gapTop">
        <div className="container">
          <div className="row row--15 z-3 position-relative justify-content-between">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <Link href="#">
                <Image
                  className="img-fluid footer-logo"
                  src={logoDark}
                  width={600}
                  height={110}
                  alt="logo"
                />
              </Link>
              <p className="law__footer-desc">
                We believe exceptional representation is achieved through
                aggressive advocacy, client adherence to absolute highest
                standards.
              </p>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row mt_dec--24 justify-content-between">
                <div className="col-sm-6 col-lg-4 col-xl-4 mt--24 mt-md-0">
                  <h3 className="law__footer-heading">Office Time</h3>
                  <ul className="law__footer-list">
                    <li>
                      <p className="law__footer-subtext fw-bold mb--8">
                        Monday - Thursday:{" "}
                      </p>
                      <p className="law__footer-subtext">
                        8:00 am - 4:00 pm{" "}
                      </p>
                    </li>
                    <li>
                      <p className="law__footer-subtext fw-bold mb--8">
                        Closed From:{" "}
                      </p>
                      <p className="law__footer-subtext">
                        12:00 pm - 1:00 pm{" "}
                      </p>
                    </li>
                    <li>
                      <p className="law__footer-subtext fw-bold mb--8">
                        Friday:{" "}
                      </p>
                      <p className="law__footer-subtext">
                        8:00 am - 12:00 pm{" "}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-4 col-lg-2 col-xl-3 mt--24 mt-lg-0">
                  <h3 className="law__footer-heading">Service Areas</h3>
                  <ul className="law__footer-list">
                    {serviceData &&
                      serviceData.service.map((data, i) => (
                        <li key={i}>
                          <Link href={`/serviceDetails/${data.id}`}>
                            {data.heading}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4 mt--24 mt-xl-0">
                  <h3 className="law__footer-heading">Contact Us</h3>
                  <ul className="law__footer-list">
                    {footerData &&
                      footerData.contact.map((data, i) => (
                        <li key={i}>
                          <span className="law__footer-subtext fw-bold">
                            {data.text}
                          </span>
                          <br />
                          {data.mail ? (
                            <Link href={`mailto:${data.mail}`}>{data.mail}</Link>
                          ) : (
                            <Link href={`callto:${data.call}`}>{data.number}</Link>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="z-3 position-relative law__footer-address--wrap mt-sm--32">
            <div className="row mt_dec--24">
              {footerData &&
                footerData.address.map((data, i) => (
                  <div className="col-12 col-md-6 col-lg-4 pr-sm-0 mt--24 mt-sm--12" key={i}>
                    <div className="law__footer-address">
                      <div className="icon-circle">
                        <FontAwesomeIcon icon={iconMap[data.iClass]} className="icon-circle-icon" />
                      </div>
                      <h4 className="law__footer-address--title">{data.text}</h4>
                      <p className="law__footer-address--desc">{data.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <CollapsibleText />
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
