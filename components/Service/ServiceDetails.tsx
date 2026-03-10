"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import sal from "sal.js";

import serviceData from "../../data/service.json";
import ServiceSidebar from "./ServiceSidebar";

import type { ServiceData } from "@/types";

const Service = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string | string[] | undefined;
  const slugStr = Array.isArray(slug) ? slug[0] : slug ?? "";
  const getId: number = parseInt(slugStr, 10);

  const getService: ServiceData[] = JSON.parse(
    JSON.stringify(serviceData.service)
  );

  const checkMatch = getService.find((member) => member.id === getId);

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });

    if (!checkMatch) {
      router.push("/serviceDetails/1");
    }
  }, [checkMatch, router]);

  return (
    <>
      <div className={`breadcrumb `}>
        <div className="container">
          <div className="row">
            <em
              className="breadcrumb__text mb--20"
              data-sal="slide-in"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              {checkMatch && checkMatch.subheading}
            </em>
            <h2
              className="law__title breadcrumb__title mb-0"
              data-sal="slide-in"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              {checkMatch && checkMatch.heading}
            </h2>
          </div>
        </div>
      </div>
      <div className="service law-section-gapBottom">
        <div className="container">
          <div className="row"
            data-sal="fade-in"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="col-12">
              <h4 className="service__num">
                00{checkMatch && checkMatch.serial}
              </h4>
              {checkMatch?.bannerImg && (
                <Image
                  className="service__img service__img-details"
                  src={checkMatch.bannerImg}
                  width={1320}
                  height={600}
                  unoptimized={true}
                  alt="image"
                />
              )}
            </div>
          </div>

          <div className="row justify-content-between"
            data-sal="fade-in"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="col-lg-9 order-2 order-lg-1 mt--48 mt-md--4">
              <div className="service__body scrollspy-example- bg-body-tertiary p-3 rounded-2">
                <div id="description">
                  <p className="service__desc">
                    <Link className="link-text" href="/">
                      {checkMatch && checkMatch.homeLink}
                    </Link>
                    {checkMatch && checkMatch.desc}
                  </p>
                  <p className="service__desc service__desc-bottom">
                    {checkMatch && checkMatch.descTwo}
                  </p>
                  <p className="service__desc service__desc-bottom">
                    {checkMatch && checkMatch.descThree}
                  </p>
                </div>

                {checkMatch &&
                  checkMatch.card.map((innerData, i) => (
                    <div
                      className="card service__card"
                      id="concentration"
                      key={i}
                    >
                      <div className="row g-4 justify-content-between mt_dec--16">
                        <div className="col-xl-5 mt--16">
                          <h5 className="service__card-title mb-lg--0">
                            {innerData.title}
                          </h5>
                        </div>
                        <div className="col-xl-7 mt--16">
                          <div className="card-body pt-0 pt-xl-3">
                            <ul className="service__card-list mt--0">
                              {innerData.list.map((list, i) => (
                                <li key={i}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="10"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                  >
                                    <path
                                      d="M11.4519 0.231442C8.52691 2.66793 6.10261 6.15163 4.30184 9.92355C4.2537 10.0266 4.10444 10.0243 4.05629 9.92355C2.97053 7.57607 1.83662 5.8518 0.555857 4.94981C0.442715 4.87019 0.514935 4.69677 0.652161 4.71318C2.04367 4.8842 3.56516 5.76275 4.17907 6.66475C5.86187 3.81121 8.21153 1.691 11.2979 0.0182113C11.4399 -0.0590906 11.5747 0.128344 11.4519 0.231442Z"
                                      fill="white"
                                    />
                                  </svg>
                                  <span>{list.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                {checkMatch &&
                  checkMatch.feature.map((innerData, i) => (
                    <div
                      className="service__feature"
                      id="bookAppointment"
                      key={i}
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="card service__profile position-relative mt-lg--24">
                            {checkMatch &&
                              checkMatch.profile.map((data, i) => (
                                <div
                                  className="row align-items-center g-4"
                                  key={i}
                                >
                                  <div className="col-md-5 col-lg-5 col-xl-4 text-center">
                                    <Image
                                      className="service__profile-avatar img-fluid"
                                      src={data.img}
                                      width={220}
                                      height={220}
                                      alt="image"
                                    />
                                  </div>
                                  <div className="col-md-7 col-lg-7 col-xl-8">
                                    <div className="card-body text-center text-md-start p-0">
                                      <div className="position-relative z-3">
                                        <p className="service__desc service__profile-desc">
                                          {data.desc}
                                        </p>
                                        <h4 className="service__profile-name">
                                          {data.name}
                                        </h4>
                                        <h4 className="service__profile-type mb-0">
                                          {data.type}
                                        </h4>
                                        <Link
                                          className="banner__btn service__card-btn"
                                          href="callto:+19853025630"
                                        >
                                          Book Your Appointment Today
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M20.7497 12.75H3.25V11.25H20.7497V12.75Z"
                                              fill="#253551"
                                            />
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M19.9998 11.25C16.4723 11.25 13.5898 14.3521 13.5898 17.66V18.41H15.0898V17.66C15.0898 15.1485 17.3324 12.75 19.9998 12.75H20.7494V11.25H19.9998Z"
                                              fill="#253551"
                                            />
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M19.9998 12.75C16.4723 12.75 13.5898 9.64788 13.5898 6.33997V5.58997H15.0898V6.33997C15.0898 8.85155 17.3324 11.25 19.9998 11.25H20.7494V12.75H19.9998Z"
                                              fill="#253551"
                                            />
                                          </svg>
                                        </Link>
                                      </div>

                                      <div className="service__profile-quote position-absolute bottom-0 end-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="160"
                                          height="120"
                                          viewBox="0 0 160 120"
                                          fill="none"
                                        >
                                          <g opacity="0.1">
                                            <path
                                              d="M38.2678 0C60.4871 0 76.5265 18.6136 76.5259 46.1742C76.3836 86.2181 46.7173 114.53 3.91934 119.967C-0.0512761 120.472 -1.5823 114.89 2.07414 113.241C18.4961 105.831 26.79 96.4286 27.8613 87.1221C28.6616 80.169 24.9367 74.0782 20.2594 72.9377C8.13359 69.981 0.00921589 54.6583 0.00921589 38.8218C0.00921589 17.3811 17.1382 0 38.2678 0Z"
                                              fill="#253551"
                                            />
                                            <path
                                              d="M121.741 0C143.961 0 160 18.6136 160 46.1742C159.857 86.2181 130.191 114.53 87.393 119.967C83.4224 120.472 81.8913 114.89 85.5478 113.241C101.97 105.831 110.264 96.4286 111.335 87.1221C112.135 80.169 108.41 74.0782 103.733 72.9377C91.6072 69.981 83.4828 54.6583 83.4828 38.8218C83.4828 17.3811 100.612 0 121.741 0Z"
                                              fill="#253551"
                                            />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-3 col-xl-2 order-1 order-lg-2 mt--48 mt-md--4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
