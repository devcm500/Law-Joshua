import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "../icons/SvgIcons";

import bagIcon from "../../public/images/icons/bag.svg";
import parentIcon from "../../public/images/icons/parent.svg";
import handIcon from "../../public/images/icons/hand.svg";

import serviceData from "../../data/service.json";

const ServiceCard = () => {
  return (
    <>
      <div className="row position-relative z-3">
        {serviceData &&
          serviceData.service.slice(0, 1).map((data, i) => (
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0" key={i}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <div className="card info-card p-0">
                <div className="info-card--wrap">
                  <Image
                    src={data.cardImg}
                    width={424}
                    height={466}
                    className="info-card--img w-100"
                    alt="image"
                  />
                  <div className="card-img-overlay">
                    <div className="info-card--icon">
                      <Image src={bagIcon} width={50} height={41} alt="image" />
                    </div>
                    <span className="info-card--num">[00{data.serial}]</span>
                    <h4 className="info-card--title">{data.heading}</h4>
                    <p className="info-card--desc">
                      {" "}
                      {data.desc.split(" ").length > 20
                        ? data.desc.split(" ").slice(0, 20).join(" ") + "..."
                        : data.desc}
                    </p>

                    <Link
                      href={`/serviceDetails/${data.id}`}
                      className="btn-underline"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {serviceData &&
          serviceData.service.slice(1, 2).map((data, i) => (
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0" key={i}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              <div className="card info-card p-0">
                <div className="info-card--wrap">
                  <Image
                    src={data.cardImg}
                    width={424}
                    height={466}
                    className="info-card--img w-100"
                    alt="image"
                  />
                  <div className="card-img-overlay">
                    <div className="info-card--icon">
                      <Image
                        src={parentIcon}
                        width={50}
                        height={41}
                        alt="image"
                      />
                    </div>
                    <span className="info-card--num">[00{data.serial}]</span>
                    <h4 className="info-card--title">{data.heading}</h4>
                    <p className="info-card--desc">
                      {" "}
                      {data.desc.split(" ").length > 20
                        ? data.desc.split(" ").slice(0, 20).join(" ") + "..."
                        : data.desc}
                    </p>

                    <Link
                      href={`/serviceDetails/${data.id}`}
                      className="btn-underline"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {serviceData &&
          serviceData.service.slice(2, 3).map((data, i) => (
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0" key={i}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="300"
            >
              <div className="card info-card p-0">
                <div className="info-card--wrap">
                  <Image
                    src={data.cardImg}
                    width={424}
                    height={466}
                    className="info-card--img w-100"
                    alt="image"
                  />
                  <div className="card-img-overlay">
                    <div className="info-card--icon">
                      <Image
                        src={handIcon}
                        width={50}
                        height={41}
                        alt="image"
                      />
                    </div>
                    <span className="info-card--num"> [00{data.serial}]</span>
                    <h4 className="info-card--title">{data.heading}</h4>
                    <p className="info-card--desc">
                      {" "}
                      {data.desc.split(" ").length > 20
                        ? data.desc.split(" ").slice(0, 20).join(" ") + "..."
                        : data.desc}
                    </p>

                    <Link
                      href={`/serviceDetails/${data.id}`}
                      className="btn-underline"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {serviceData &&
          serviceData.service.slice(3, 4).map((data, i) => (
            <div
              className="col-md-6 col-lg-8 info-card--bottom mb-3 mb-lg-0"
              key={i}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              <div className="info-card info-card--lg d-flex justify-content-end align-items-end position-relative">
                <div className="img col-6 position-absolute bottom-0 start-0 d-none d-lg-block">
                  <Image
                    src={data.cardImg}
                    width={580}
                    height={547}
                    alt="image"
                  />
                </div>
                <div className="content col-lg-6 position-relative z-1">
                  <span className="info-card--num">[00{data.serial}]</span>
                  <h4 className="info-card--title">{data.heading}</h4>
                  <p className="info-card--desc">
                    {data.desc.split(" ").length > 20
                      ? data.desc.split(" ").slice(0, 20).join(" ") + "..."
                      : data.desc}
                  </p>

                  <Link
                    href={`/serviceDetails/${data.id}`}
                    className="btn-underline"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        <div className="col-lg-4 info-card--bottom"
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-delay="500"
        >
          <div className="card info-card--sm">
            <h4 className="info-card--title m-0">Consulting for any case</h4>
            <p className="info-card--desc">
              Joshua &quot;Josh&quot; D. Allison is the owner and managing
              attorney of JOSHUA D. ALLISON
            </p>

            <div className="d-flex justify-content-center">
              <Link className="banner__btn info__btn" href="/contact">
                Book a Consultation
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
