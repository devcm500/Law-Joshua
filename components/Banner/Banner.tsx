"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

import sal from "sal.js";

import Header from "../Header/Header";
import bannerContentImg from "../../public/images/banner/banner-content.svg";
import bannerContentImg2 from "../../public/images/banner/banner-content-top.svg";
import bannerHeroImg from "../../public/images/banner/banner-hero.png";
import { BellIcon } from "../icons/SvgIcons";

const Banner = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="banner__wrapper">
        <Header />

        <div className="banner__body">
          <div className="container">
            <div className="row">
              <div
                className="col-xxl-10 col-xl-9 col-md-8 mx-auto me-0 banner__content-width"
                data-sal="fade"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                 <div className="banner__content text-center">
                  {/* <h1 className="banner__title">Let freedom Ring </h1> */}
                  {/* <h1 className="banner__title">exceptional advocacy</h1> */}
                  <BellIcon className="banner__content-img-icon" />
                  <Image className="banner__content-img-top" src={bannerContentImg2} alt="image" width={711} height={139} />
                  <Image
                    className="banner__content-img"
                    src={bannerContentImg}
                    width={1058}
                    height={154}
                    alt="image"
                  />

                  <h3 className="banner__subtitle">GOD BLESS AMERICA
                    <span className="banner__subtitle-span">Celebrating 250 Years of Freedom</span>
                  </h3>
                 </div>
              </div>
            </div>
          </div>
          <Image
            className="banner__hero-img"
            src={bannerHeroImg}
            width={705}
            height={825}
            alt="image"
          />
          <div className="banner__content-round-shape"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
