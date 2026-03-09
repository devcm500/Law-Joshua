import React from "react";
import Link from "next/link";
import Image from "next/image";

import contactData from "../../data/contact.json";

import Breadcrumb from "../Service/Breadcrumb";
import SectionHead from "../Header/Section-Head";

import contactImg from "../../public/images/contactus/contact-img-1.png";
import ContactForm from "./ContactForm";

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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="54"
                          height="54"
                          viewBox="0 0 54 54"
                          fill="none"
                        >
                          <path
                            d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27V54H48V27C48 15.402 38.598 6 27 6C15.402 6 6 15.402 6 27V54H0V27Z"
                            fill="#CBB07D"
                          />
                          <path
                            d="M27 12C18.3015 12 11.25 19.0515 11.25 27.75V54H42.75V27.75C42.75 19.0515 35.6985 12 27 12Z"
                            fill="#CBB07D"
                          />
                        </svg>
                        <h5 className="contactus__card-wrap--title">
                          Main Offices
                        </h5>
                        <p className="contactus__card-wrap--date">
                          Monday - Thursday 8:00 am - 4:00 pm
                        </p>

                        <div className="d-flex justify-content-start contactus__card-wrap--btn">
                          <Link className="banner__btn" href="callto:19853025630">
                            Call to Schedule an Appointment
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="13"
                              viewBox="0 0 18 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.4997 7.16006H0V5.66006H17.4997V7.16006Z"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                        </div>

                        <ul className="contactus__box contactus__card-wrap--box law__hoverlink">
                          <li>
                            <i className="fa-regular fa-phone-rotary"></i>
                            <Link href={`callto:${data.call}`}>
                              {data.phone}
                            </Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M10.9104 4.05809C11.6586 4.20378 12.3462 4.56898 12.8852 5.10696C13.4242 5.64494 13.7901 6.33121 13.9361 7.07795M10.9104 1C12.4648 1.17235 13.9143 1.8671 15.0209 2.97018C16.1275 4.07326 16.8254 5.5191 17 7.0703M16.234 13.1712V15.4648C16.2349 15.6777 16.1912 15.8884 16.1057 16.0835C16.0203 16.2786 15.8949 16.4537 15.7377 16.5977C15.5805 16.7416 15.3949 16.8512 15.1928 16.9194C14.9908 16.9876 14.7766 17.013 14.5642 16.9938C12.2071 16.7382 9.94297 15.9343 7.95371 14.6467C6.10295 13.4729 4.53384 11.9068 3.35779 10.0596C2.06326 8.0651 1.25765 5.79431 1.00622 3.43118C0.987076 3.21976 1.01225 3.00669 1.08014 2.80551C1.14802 2.60434 1.25713 2.41948 1.40052 2.2627C1.54391 2.10592 1.71843 1.98066 1.91298 1.89489C2.10753 1.80912 2.31785 1.76472 2.53053 1.76452H4.82849C5.20022 1.76087 5.56061 1.89226 5.84247 2.13419C6.12433 2.37613 6.30843 2.71211 6.36046 3.0795C6.45745 3.81349 6.63732 4.53418 6.89665 5.22781C6.99971 5.50145 7.02201 5.79884 6.96092 6.08474C6.89983 6.37065 6.7579 6.63308 6.55195 6.84095L5.57915 7.81189C6.66958 9.7259 8.25739 11.3107 10.1751 12.399L11.1479 11.4281C11.3561 11.2225 11.6191 11.0809 11.9055 11.0199C12.192 10.9589 12.4899 10.9812 12.7641 11.084C13.4591 11.3429 14.1811 11.5224 14.9165 11.6192C15.2886 11.6716 15.6284 11.8587 15.8713 12.1448C16.1143 12.431 16.2433 12.7962 16.234 13.1712Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <Link href={`callto:${data.call}`}>
                              {data.phone}
                            </Link>
                          </li>
                          <li>
                            <i className="fa-regular fa-envelope"></i>
                            <Link href={`mailto:${data.email}`}>
                              {data.email}
                            </Link>
                          </li>
                          <li className="align-items-baseline">
                            <i className="fa-regular fa-location-dot"></i>
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
                <svg
                  className="mb--16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <circle cx="15" cy="15" r="15" fill="#CBB07D" />
                  <path
                    d="M15 8C13.6155 8 12.2622 8.41054 11.111 9.17971C9.95987 9.94888 9.06266 11.0421 8.53285 12.3212C8.00303 13.6003 7.86441 15.0078 8.13451 16.3656C8.4046 17.7235 9.07129 18.9708 10.0503 19.9497C11.0292 20.9287 12.2765 21.5954 13.6344 21.8655C14.9922 22.1356 16.3997 21.997 17.6788 21.4672C18.9579 20.9373 20.0511 20.0401 20.8203 18.889C21.5895 17.7378 22 16.3845 22 15C22 14.0807 21.8189 13.1705 21.4672 12.3212C21.1154 11.4719 20.5998 10.7003 19.9497 10.0503C19.2997 9.40024 18.5281 8.88463 17.6788 8.53284C16.8295 8.18106 15.9193 8 15 8ZM15 20.6C13.8924 20.6 12.8097 20.2716 11.8888 19.6562C10.9679 19.0409 10.2501 18.1663 9.82628 17.143C9.40243 16.1198 9.29153 14.9938 9.50761 13.9075C9.72368 12.8212 10.257 11.8234 11.0402 11.0402C11.8234 10.257 12.8212 9.72368 13.9075 9.5076C14.9938 9.29153 16.1198 9.40242 17.143 9.82627C18.1663 10.2501 19.0409 10.9679 19.6562 11.8888C20.2716 12.8097 20.6 13.8924 20.6 15C20.6 16.4852 20.01 17.9096 18.9598 18.9598C17.9096 20.01 16.4852 20.6 15 20.6ZM15.7 14.951V11.5C15.7 11.3143 15.6263 11.1363 15.495 11.005C15.3637 10.8737 15.1857 10.8 15 10.8C14.8144 10.8 14.6363 10.8737 14.505 11.005C14.3738 11.1363 14.3 11.3143 14.3 11.5V15C14.3 15 14.3 15.049 14.3 15.077C14.2828 15.2193 14.3097 15.3635 14.377 15.49L15.427 17.31C15.5198 17.4715 15.673 17.5895 15.8529 17.6381C16.0327 17.6867 16.2245 17.6618 16.386 17.569C16.5475 17.4762 16.6655 17.323 16.7141 17.1431C16.7627 16.9633 16.7378 16.7715 16.645 16.61L15.7 14.951Z"
                    fill="white"
                  />
                </svg>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <circle cx="15" cy="15" r="15" fill="white" />
                                <circle
                                  cx="15"
                                  cy="15"
                                  r="14.5"
                                  stroke="#CBB07D"
                                  strokeOpacity="0.1"
                                />
                                <path
                                  d="M16.4328 11.2936C16.9939 11.4028 17.5096 11.6767 17.9139 12.0802C18.3181 12.4837 18.5926 12.9984 18.702 13.5585M16.4328 9C17.5986 9.12926 18.6857 9.65033 19.5157 10.4776C20.3456 11.3049 20.869 12.3893 21 13.5527M20.4255 18.1284V19.8486C20.4262 20.0083 20.3934 20.1663 20.3293 20.3126C20.2652 20.459 20.1712 20.5903 20.0533 20.6983C19.9354 20.8062 19.7962 20.8884 19.6446 20.9396C19.4931 20.9907 19.3325 21.0097 19.1731 20.9953C17.4053 20.8036 15.7072 20.2007 14.2153 19.235C12.8272 18.3547 11.6504 17.1801 10.7683 15.7947C9.79745 14.2988 9.19324 12.5957 9.00466 10.8234C8.99031 10.6648 9.00919 10.505 9.0601 10.3541C9.11102 10.2033 9.19285 10.0646 9.30039 9.94703C9.40793 9.82944 9.53883 9.73549 9.68474 9.67117C9.83065 9.60684 9.98838 9.57354 10.1479 9.57339H11.8714C12.1502 9.57065 12.4205 9.66919 12.6319 9.85064C12.8432 10.0321 12.9813 10.2841 13.0203 10.5596C13.0931 11.1101 13.228 11.6506 13.4225 12.1709C13.4998 12.3761 13.5165 12.5991 13.4707 12.8136C13.4249 13.028 13.3184 13.2248 13.164 13.3807L12.4344 14.1089C13.2522 15.5444 14.443 16.733 15.8813 17.5493L16.6109 16.8211C16.7671 16.6669 16.9643 16.5607 17.1791 16.5149C17.394 16.4692 17.6175 16.4859 17.8231 16.563C18.3443 16.7572 18.8858 16.8918 19.4374 16.9644C19.7165 17.0037 19.9713 17.144 20.1535 17.3586C20.3357 17.5732 20.4325 17.8472 20.4255 18.1284Z"
                                  stroke="#CBB07D"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <Link
                                className="contactus__box-text"
                                href={`callto:${data.call}`}
                              >
                                {data.phone}
                              </Link>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <circle cx="15" cy="15" r="15" fill="white" />
                                <circle
                                  cx="15"
                                  cy="15"
                                  r="14.5"
                                  stroke="#CBB07D"
                                  strokeOpacity="0.1"
                                />
                                <path
                                  d="M19.9 10H10.1C9.54305 10 9.0089 10.1975 8.61508 10.5492C8.22125 10.9008 8 11.3777 8 11.875V18.125C8 18.6223 8.22125 19.0992 8.61508 19.4508C9.0089 19.8025 9.54305 20 10.1 20H19.9C20.457 20 20.9911 19.8025 21.3849 19.4508C21.7788 19.0992 22 18.6223 22 18.125V11.875C22 11.3777 21.7788 10.9008 21.3849 10.5492C20.9911 10.1975 20.457 10 19.9 10ZM10.1 11.25H19.9C20.0857 11.25 20.2637 11.3158 20.395 11.4331C20.5263 11.5503 20.6 11.7092 20.6 11.875L15 14.925L9.4 11.875C9.4 11.7092 9.47375 11.5503 9.60503 11.4331C9.7363 11.3158 9.91435 11.25 10.1 11.25ZM20.6 18.125C20.6 18.2908 20.5263 18.4497 20.395 18.5669C20.2637 18.6842 20.0857 18.75 19.9 18.75H10.1C9.91435 18.75 9.7363 18.6842 9.60503 18.5669C9.47375 18.4497 9.4 18.2908 9.4 18.125V13.3L14.636 16.1562C14.7424 16.2111 14.8631 16.24 14.986 16.24C15.1089 16.24 15.2296 16.2111 15.336 16.1562L20.6 13.3V18.125Z"
                                  fill="#CBB07D"
                                />
                              </svg>
                              <Link
                                className="contactus__box-text"
                                href={`mailto:${data.email}`}
                              >
                                {data.email}
                              </Link>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <circle cx="15" cy="15" r="15" fill="white" />
                                <circle
                                  cx="15"
                                  cy="15"
                                  r="14.5"
                                  stroke="#CBB07D"
                                  strokeOpacity="0.1"
                                />
                                <path
                                  d="M17.5 14C17.4792 14.7083 17.2396 15.3021 16.7812 15.7812C16.3021 16.2396 15.7083 16.4792 15 16.5C14.2917 16.4792 13.6979 16.2396 13.2188 15.7812C12.7604 15.3021 12.5208 14.7083 12.5 14C12.5208 13.2917 12.7604 12.6979 13.2188 12.2188C13.6979 11.7604 14.2917 11.5208 15 11.5C15.7083 11.5208 16.3021 11.7604 16.7812 12.2188C17.2396 12.6979 17.4792 13.2917 17.5 14ZM15 13C14.7083 13 14.4688 13.0938 14.2812 13.2812C14.0938 13.4688 14 13.7083 14 14C14 14.2917 14.0938 14.5312 14.2812 14.7188C14.4688 14.9062 14.7083 15 15 15C15.2917 15 15.5312 14.9062 15.7188 14.7188C15.9062 14.5312 16 14.2917 16 14C16 13.7083 15.9062 13.4688 15.7188 13.2812C15.5312 13.0938 15.2917 13 15 13ZM21 14C20.9583 14.9375 20.625 16.0208 20 17.25C19.3542 18.4792 18.625 19.6667 17.8125 20.8125C17 21.9792 16.3125 22.9062 15.75 23.5938C15.5417 23.8438 15.2917 23.9688 15 23.9688C14.7083 23.9688 14.4583 23.8438 14.25 23.5938C13.6875 22.9062 12.9896 21.9792 12.1562 20.8125C11.3438 19.6667 10.625 18.4792 10 17.25C9.375 16.0208 9.04167 14.9375 9 14C9.04167 12.2917 9.625 10.875 10.75 9.75C11.875 8.625 13.2917 8.04167 15 8C16.7083 8.04167 18.125 8.625 19.25 9.75C20.375 10.875 20.9583 12.2917 21 14ZM15 9.5C13.7292 9.54167 12.6667 9.97917 11.8125 10.8125C10.9792 11.6667 10.5417 12.7292 10.5 14C10.5 14.3958 10.6562 14.9896 10.9688 15.7812C11.3229 16.5729 11.7708 17.4062 12.3125 18.2812C12.75 19.0104 13.2083 19.6979 13.6875 20.3438C14.1667 21.0104 14.6042 21.6042 15 22.125C15.3958 21.6042 15.8333 21.0208 16.3125 20.375C16.7917 19.7083 17.25 19.0104 17.6875 18.2812C18.2292 17.4062 18.6771 16.5729 19.0312 15.7812C19.3438 14.9896 19.5 14.3958 19.5 14C19.4583 12.7292 19.0208 11.6667 18.1875 10.8125C17.3333 9.97917 16.2708 9.54167 15 9.5Z"
                                  fill="#CBB07D"
                                />
                              </svg>
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
