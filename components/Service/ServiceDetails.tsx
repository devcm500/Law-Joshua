"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import sal from "sal.js";

import serviceData from "../../data/service.json";
import ServiceSidebar from "./ServiceSidebar";
import { ArrowRightLargeIcon, CheckmarkIcon, QuoteMarksIcon } from "../icons/SvgIcons";

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
                                  <CheckmarkIcon />
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
                                          <ArrowRightLargeIcon />
                                        </Link>
                                      </div>

                                      <div className="service__profile-quote position-absolute bottom-0 end-0">
                                        <QuoteMarksIcon />
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
