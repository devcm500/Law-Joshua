"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import studiesData from "../../data/caseStudies.json";

import Breadcrumb from "../Service/Breadcrumb";

const CaseStudiesDetails = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string | string[] | undefined;
  const slugStr = Array.isArray(slug) ? slug[0] : slug ?? "";
  const getId: number = parseInt(slugStr, 10);

  const studies = studiesData.studies;
  const currentIndex = studies.findIndex((study) => study.id === getId);
  const getStudiesData = studies[currentIndex];

  const prevStudy = currentIndex > 0 ? studies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;

  useEffect(() => {
    if (!getStudiesData) {
      router.push("/case-details/1");
    }
  }, [getStudiesData, router]);

  const handleNavigation = (direction: "prev" | "next"): void => {
    if (direction === "prev" && prevStudy) {
      router.push(`/case-details/${prevStudy.id}`);
    } else if (direction === "next" && nextStudy) {
      router.push(`/case-details/${nextStudy.id}`);
    }
  };

  return (
    <>
      {getStudiesData.details.map((data, i) => (
        <div key={i}>
          <Breadcrumb title={data.title} subTitle="Case Details" />
        </div>
      ))}
      <div className="service law-section-gapBottom">
        <div className="container">
          {getStudiesData.details.map((data, i) => (
            <div className="row" key={i}>
              <div className="col-12">
                <h4 className="service__num">00{data.serial}</h4>
                <Image
                  className="service__img"
                  src={data.thumbImg}
                  width={1320}
                  height={600}
                  alt="image"
                />
              </div>
            </div>
          ))}

          <div className="service__wrapper case-details__wrapper border-0">
            <div className="content">
              {getStudiesData.details.map((data, i) => (
                <div
                  className="row justify-content-between position-relative"
                  key={i}
                >
                  <div className="case__sidebar">
                    <div className="col-lg-4 col-xl-3">
                      <ul className="case__sidebar-list">
                        <li>
                          <div className="case__sidebar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20 18C21.6569 18 23 16.6568 23 15C23 13.3432 21.6569 12 20 12C18.3431 12 17 13.3432 17 15C17 16.6568 18.3431 18 20 18ZM20 20C22.7614 20 25 17.7614 25 15C25 12.2386 22.7614 10 20 10C17.2386 10 15 12.2386 15 15C15 17.7614 17.2386 20 20 20Z"
                                fill="#253551"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17 24C14.7909 24 13 25.7909 13 28V29C13 29.5523 12.5523 30 12 30C11.4477 30 11 29.5523 11 29V28C11 24.6863 13.6863 22 17 22H23C26.3137 22 29 24.6863 29 28V29C29 29.5523 28.5523 30 28 30C27.4477 30 27 29.5523 27 29V28C27 25.7909 25.2091 24 23 24H17Z"
                                fill="#253551"
                              />
                            </svg>
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Client:{" "}
                            </h6>
                            <span className="case__sidebar-list--text">
                              Kameron Williamson
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M25.0781 18.9844C25.5096 18.9844 25.8594 18.6346 25.8594 18.2031C25.8594 17.7717 25.5096 17.4219 25.0781 17.4219C24.6467 17.4219 24.2969 17.7717 24.2969 18.2031C24.2969 18.6346 24.6467 18.9844 25.0781 18.9844Z"
                                fill="#253551"
                              />
                              <path
                                d="M26.875 11.5625H25.8594V10.7812C25.8594 10.3498 25.5096 10 25.0781 10C24.6466 10 24.2969 10.3498 24.2969 10.7812V11.5625H20.7422V10.7812C20.7422 10.3498 20.3924 10 19.9609 10C19.5295 10 19.1797 10.3498 19.1797 10.7812V11.5625H15.6641V10.7812C15.6641 10.3498 15.3143 10 14.8828 10C14.4513 10 14.1016 10.3498 14.1016 10.7812V11.5625H13.125C11.4019 11.5625 10 12.9644 10 14.6875V26.875C10 28.5981 11.4019 30 13.125 30H19.1016C19.533 30 19.8828 29.6502 19.8828 29.2188C19.8828 28.7873 19.533 28.4375 19.1016 28.4375H13.125C12.2634 28.4375 11.5625 27.7366 11.5625 26.875V14.6875C11.5625 13.8259 12.2634 13.125 13.125 13.125H14.1016V13.9062C14.1016 14.3377 14.4513 14.6875 14.8828 14.6875C15.3143 14.6875 15.6641 14.3377 15.6641 13.9062V13.125H19.1797V13.9062C19.1797 14.3377 19.5295 14.6875 19.9609 14.6875C20.3924 14.6875 20.7422 14.3377 20.7422 13.9062V13.125H24.2969V13.9062C24.2969 14.3377 24.6466 14.6875 25.0781 14.6875C25.5096 14.6875 25.8594 14.3377 25.8594 13.9062V13.125H26.875C27.7366 13.125 28.4375 13.8259 28.4375 14.6875V19.1406C28.4375 19.5721 28.7873 19.9219 29.2188 19.9219C29.6502 19.9219 30 19.5721 30 19.1406V14.6875C30 12.9644 28.5981 11.5625 26.875 11.5625Z"
                                fill="#253551"
                              />
                              <path
                                d="M25.2734 20.5469C22.6672 20.5469 20.5469 22.6672 20.5469 25.2734C20.5469 27.8797 22.6672 30 25.2734 30C27.8797 30 30 27.8797 30 25.2734C30 22.6672 27.8797 20.5469 25.2734 20.5469ZM25.2734 28.4375C23.5288 28.4375 22.1094 27.0181 22.1094 25.2734C22.1094 23.5287 23.5288 22.1094 25.2734 22.1094C27.0181 22.1094 28.4375 23.5287 28.4375 25.2734C28.4375 27.0181 27.0181 28.4375 25.2734 28.4375Z"
                                fill="#253551"
                              />
                              <path
                                d="M26.4062 24.4922H26.0547V23.6719C26.0547 23.2404 25.7049 22.8906 25.2734 22.8906C24.842 22.8906 24.4922 23.2404 24.4922 23.6719V25.2734C24.4922 25.7049 24.842 26.0547 25.2734 26.0547H26.4062C26.8377 26.0547 27.1875 25.7049 27.1875 25.2734C27.1875 24.842 26.8377 24.4922 26.4062 24.4922Z"
                                fill="#253551"
                              />
                              <path
                                d="M21.6797 18.9844C22.1112 18.9844 22.4609 18.6346 22.4609 18.2031C22.4609 17.7717 22.1112 17.4219 21.6797 17.4219C21.2482 17.4219 20.8984 17.7717 20.8984 18.2031C20.8984 18.6346 21.2482 18.9844 21.6797 18.9844Z"
                                fill="#253551"
                              />
                              <path
                                d="M18.2812 22.3828C18.7127 22.3828 19.0625 22.033 19.0625 21.6016C19.0625 21.1701 18.7127 20.8203 18.2812 20.8203C17.8498 20.8203 17.5 21.1701 17.5 21.6016C17.5 22.033 17.8498 22.3828 18.2812 22.3828Z"
                                fill="#253551"
                              />
                              <path
                                d="M14.8828 18.9844C15.3143 18.9844 15.6641 18.6346 15.6641 18.2031C15.6641 17.7717 15.3143 17.4219 14.8828 17.4219C14.4513 17.4219 14.1016 17.7717 14.1016 18.2031C14.1016 18.6346 14.4513 18.9844 14.8828 18.9844Z"
                                fill="#253551"
                              />
                              <path
                                d="M14.8828 22.3828C15.3143 22.3828 15.6641 22.033 15.6641 21.6016C15.6641 21.1701 15.3143 20.8203 14.8828 20.8203C14.4513 20.8203 14.1016 21.1701 14.1016 21.6016C14.1016 22.033 14.4513 22.3828 14.8828 22.3828Z"
                                fill="#253551"
                              />
                              <path
                                d="M14.8828 25.7812C15.3143 25.7812 15.6641 25.4315 15.6641 25C15.6641 24.5685 15.3143 24.2188 14.8828 24.2188C14.4513 24.2188 14.1016 24.5685 14.1016 25C14.1016 25.4315 14.4513 25.7812 14.8828 25.7812Z"
                                fill="#253551"
                              />
                              <path
                                d="M18.2812 25.7812C18.7127 25.7812 19.0625 25.4315 19.0625 25C19.0625 24.5685 18.7127 24.2188 18.2812 24.2188C17.8498 24.2188 17.5 24.5685 17.5 25C17.5 25.4315 17.8498 25.7812 18.2812 25.7812Z"
                                fill="#253551"
                              />
                              <path
                                d="M18.2812 18.9844C18.7127 18.9844 19.0625 18.6346 19.0625 18.2031C19.0625 17.7717 18.7127 17.4219 18.2812 17.4219C17.8498 17.4219 17.5 17.7717 17.5 18.2031C17.5 18.6346 17.8498 18.9844 18.2812 18.9844Z"
                                fill="#253551"
                              />
                              <defs>
                                <clipPath
                                  id="bgblur_0_540_868_clip_path"
                                  transform="translate(9.3 9.3)"
                                >
                                  <circle cx="20" cy="20" r="20" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Duration:{" "}
                            </h6>
                            <span className="case__sidebar-list--text">
                              27 August, 2024
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M25.2734 29.375C25.2734 28.4042 24.4864 27.6172 23.5156 27.6172H16.4844C15.5136 27.6172 14.7266 28.4042 14.7266 29.375V30H25.2734V29.375Z"
                                fill="#253551"
                              />
                              <path
                                d="M28.8281 14.7266V13.5547H21.6499C21.4729 13.0583 21.0823 12.6678 20.5859 12.4907V10H19.4141V12.4907C18.9177 12.6678 18.5271 13.0583 18.3501 13.5547H11.1719V14.7266H12.6369L10 21.1719C10 22.7872 11.3143 24.1016 12.9297 24.1016H14.1016C15.7169 24.1016 17.0312 22.7872 17.0312 21.1719L14.3825 14.7266H18.3502C18.5272 15.223 18.9177 15.6135 19.4141 15.7905V24.1658C18.269 24.4001 17.3631 25.2998 17.1296 26.4453H22.8704C22.637 25.2998 21.7311 24.4001 20.586 24.1658V15.7905C21.0824 15.6135 21.4729 15.223 21.6499 14.7266H25.6057L22.9688 21.1719C22.9688 22.7872 24.2831 24.1016 25.8984 24.1016H27.0703C28.6857 24.1016 30 22.7872 30 21.1719L27.3512 14.7266H28.8281ZM15.5662 20.5859H11.465L13.5156 15.6638L15.5662 20.5859ZM28.535 20.5859H24.4338L26.4844 15.6638L28.535 20.5859Z"
                                fill="#253551"
                              />
                            </svg>
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Services Area:
                            </h6>
                            <span className="case__sidebar-list--text">
                              Family Law
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M23.419 23.5314C25.5984 20.1117 25.3244 20.5383 25.3872 20.4492C26.1806 19.33 26.6 18.0129 26.6 16.64C26.6 12.9992 23.6456 10 20 10C16.3663 10 13.4 12.9933 13.4 16.64C13.4 18.012 13.8282 19.3636 14.6476 20.4978L16.5809 23.5314C14.5139 23.8491 11 24.7957 11 26.88C11 27.6398 11.4959 28.7226 13.8585 29.5664C15.5082 30.1555 17.6892 30.48 20 30.48C24.321 30.48 29 29.2611 29 26.88C29 24.7953 25.4902 23.8497 23.419 23.5314ZM15.65 19.8378C15.6434 19.8275 15.6365 19.8174 15.6293 19.8075C14.9474 18.8694 14.6 17.7576 14.6 16.64C14.6 13.6393 17.0162 11.2 20 11.2C22.9776 11.2 25.4 13.6404 25.4 16.64C25.4 17.7594 25.0592 18.8335 24.4142 19.7468C24.3564 19.8231 24.6579 19.3546 20 26.6636L15.65 19.8378ZM20 29.28C15.2802 29.28 12.2 27.8927 12.2 26.88C12.2 26.1994 13.7827 25.0802 17.2899 24.644L19.494 28.1025C19.6042 28.2754 19.795 28.38 20 28.38C20.205 28.38 20.3958 28.2753 20.5059 28.1025L22.71 24.644C26.2172 25.0802 27.8 26.1994 27.8 26.88C27.8 27.8841 24.7475 29.28 20 29.28Z"
                                fill="#253551"
                              />
                              <path
                                d="M20 13.6401C18.3458 13.6401 17 14.9859 17 16.6401C17 18.2943 18.3458 19.6401 20 19.6401C21.6542 19.6401 23 18.2943 23 16.6401C23 14.9859 21.6542 13.6401 20 13.6401ZM20 18.4401C19.0075 18.4401 18.2 17.6327 18.2 16.6401C18.2 15.6476 19.0075 14.8401 20 14.8401C20.9925 14.8401 21.8 15.6476 21.8 16.6401C21.8 17.6327 20.9925 18.4401 20 18.4401Z"
                                fill="#253551"
                              />
                            </svg>
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Location:
                            </h6>
                            <span className="case__sidebar-list--text">
                              506 Water St. Madisonville, LA 70447
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="case__sidebar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M17.415 26.0326C17.0597 26.0326 16.7705 25.7434 16.7705 25.388C16.7705 25.032 16.482 24.7435 16.126 24.7435C15.77 24.7435 15.4814 25.032 15.4814 25.388C15.4814 26.2308 16.0236 26.9489 16.7774 27.213V27.7773C16.7774 28.1333 17.0659 28.4219 17.4219 28.4219C17.7779 28.4219 18.0665 28.1333 18.0665 27.7773V27.2083C18.813 26.9405 19.3486 26.2258 19.3486 25.388C19.3486 24.3219 18.4812 23.4545 17.415 23.4545C17.0597 23.4545 16.7705 23.1653 16.7705 22.8099C16.7705 22.4544 17.0597 22.1654 17.415 22.1654C17.7704 22.1654 18.0596 22.4544 18.0596 22.8099C18.0596 23.1659 18.3481 23.4545 18.7041 23.4545C19.0601 23.4545 19.3486 23.1659 19.3486 22.8099C19.3486 21.9722 18.813 21.2575 18.0665 20.9895V20.043C18.0665 19.687 17.7779 19.3984 17.4219 19.3984C17.0659 19.3984 16.7774 19.687 16.7774 20.043V20.9848C16.0236 21.2489 15.4814 21.967 15.4814 22.8099C15.4814 23.8761 16.3489 24.7435 17.415 24.7435C17.7704 24.7435 18.0596 25.0325 18.0596 25.388C18.0596 25.7434 17.7704 26.0326 17.415 26.0326Z"
                                fill="#253551"
                              />
                              <path
                                d="M11.6271 29.9474C12.9684 30.6655 14.8098 31 17.4219 31C19.5471 31 21.1467 30.7798 22.3895 30.3115C22.7445 30.7321 23.275 31 23.8672 31H29.0664C30.1326 31 31 30.1326 31 29.0664C31 28.5716 30.8129 28.1198 30.506 27.7773C30.813 27.4349 31 26.9831 31 26.4883C31 25.9935 30.8129 25.5416 30.506 25.1992C30.813 24.8568 31 24.405 31 23.9102C31 23.4153 30.8129 22.9635 30.506 22.6211C30.813 22.2787 31 21.8268 31 21.332C31 20.2659 30.1326 19.3984 29.0664 19.3984H23.8672C23.8044 19.3984 23.7423 19.4016 23.681 19.4077C23.0342 18.6242 22.2762 17.9672 21.441 17.4633C21.7469 17.1213 21.9336 16.6699 21.9336 16.1758C21.9336 15.4055 21.4807 14.7392 20.8273 14.4285L21.9019 11.1335C21.9658 10.9371 21.9319 10.7221 21.8107 10.5551C21.6894 10.3879 21.4955 10.2891 21.2891 10.2891H19.2447C18.9785 9.53879 18.2621 9 17.4219 9C16.5815 9 15.8648 9.53879 15.5987 10.2891H13.5547C13.3482 10.2891 13.1544 10.3879 13.033 10.5551C12.9118 10.7221 12.8779 10.9371 12.9419 11.1335L14.0164 14.4285C13.363 14.7392 12.9102 15.4055 12.9102 16.1758C12.9102 16.6703 13.097 17.1219 13.4035 17.4642C10.8174 19.025 9 21.9893 9 25.1992C9 27.4166 9.88388 29.014 11.6271 29.9474ZM29.7109 23.9102C29.7109 24.2655 29.4217 24.5547 29.0664 24.5547H23.8672C23.5119 24.5547 23.2227 24.2655 23.2227 23.9102C23.2227 23.5548 23.5119 23.2656 23.8672 23.2656H29.0664C29.4217 23.2656 29.7109 23.5548 29.7109 23.9102ZM29.7109 26.4883C29.7109 26.8436 29.4217 27.1328 29.0664 27.1328H23.8672C23.5119 27.1328 23.2227 26.8436 23.2227 26.4883C23.2227 26.1329 23.5119 25.8438 23.8672 25.8438H29.0664C29.4217 25.8438 29.7109 26.1329 29.7109 26.4883ZM29.0664 29.7109H23.8672C23.5119 29.7109 23.2227 29.4217 23.2227 29.0664C23.2227 28.7111 23.5119 28.4219 23.8672 28.4219H29.0664C29.4217 28.4219 29.7109 28.7111 29.7109 29.0664C29.7109 29.4217 29.4217 29.7109 29.0664 29.7109ZM29.7109 21.332C29.7109 21.6874 29.4217 21.9766 29.0664 21.9766H23.8672C23.5119 21.9766 23.2227 21.6874 23.2227 21.332C23.2227 20.9767 23.5119 20.6875 23.8672 20.6875H29.0664C29.4217 20.6875 29.7109 20.9767 29.7109 21.332ZM19.9815 16.8203H14.8624C14.8567 16.8201 14.851 16.8203 14.8453 16.8203H14.8438C14.4884 16.8203 14.1992 16.5311 14.1992 16.1758C14.1992 15.8211 14.4872 15.5324 14.8417 15.5314H14.8436C14.8451 15.5314 14.8466 15.5312 14.8481 15.5312H19.9955C19.997 15.5312 19.9987 15.5314 20.0002 15.5314H20.002C20.3565 15.5324 20.6445 15.8211 20.6445 16.1758C20.6445 16.5311 20.3553 16.8203 20 16.8203H19.998C19.9926 16.8203 19.9871 16.8201 19.9815 16.8203ZM16.1328 11.5781C16.4888 11.5781 16.7773 11.2896 16.7773 10.9336C16.7773 10.5783 17.0665 10.2891 17.4219 10.2891C17.7772 10.2891 18.0664 10.5783 18.0664 10.9336V12.2227C18.0664 12.5787 18.3549 12.8672 18.7109 12.8672C19.0669 12.8672 19.3555 12.5787 19.3555 12.2227V11.5781H20.401L19.5322 14.2422H15.3115L14.4428 11.5781H16.1328ZM14.9695 18.1094H19.8718C20.8478 18.5171 21.7374 19.1591 22.4793 19.9877C22.1419 20.336 21.9336 20.81 21.9336 21.332C21.9336 21.8268 22.1207 22.2787 22.4276 22.6211C22.1207 22.9635 21.9336 23.4153 21.9336 23.9102C21.9336 24.405 22.1207 24.8568 22.4276 25.1992C22.1207 25.5416 21.9336 25.9935 21.9336 26.4883C21.9336 26.9831 22.1207 27.4349 22.4276 27.7773C22.1207 28.1198 21.9336 28.5716 21.9336 29.0664C21.9336 29.0797 21.9343 29.0928 21.9346 29.1059C20.8443 29.5176 19.3921 29.7109 17.4219 29.7109C15.0304 29.7109 13.3823 29.4249 12.2356 28.8109C10.9076 28.0999 10.2891 26.9524 10.2891 25.1992C10.2891 22.1592 12.2079 19.2621 14.9695 18.1094Z"
                                fill="#253551"
                              />
                            </svg>
                          </div>
                          <div className="case__sidebar-content">
                            <h6 className="case__sidebar-list--heading">
                              Case Budget:
                            </h6>
                            <span className="case__sidebar-list--text">
                              Kameron Williamson
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-8 position-relative z-2">
                    <div className="service__body position-relative z-2 mt--52 mt-sm--32">
                      <p className="service__desc mb-0">{data.desc}</p>
                      {(data as Record<string, unknown>).descTwo ? (
                        <p className="service__desc service__desc-bottom">
                          {(data as Record<string, unknown>).descTwo as string}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="col-lg-8 position-relative z-2">
                    <div className="service__body scrollspy-example bg-body-tertiary p-3 rounded-2">
                      {data.card.map((innerData, i) => (
                        <div
                          className="card service__card case-details__card"
                          key={i}
                        >
                          <div className="row align-items-center g-4">
                            <div className="col-md-4">
                              <Image
                                className="service__card-img img-fluid w-100"
                                src={innerData.img}
                                width={312}
                                height={400}
                                alt="image"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body pt-0 pt-md-3">
                                <h5 className="service__card-title position-relative top-0">
                                  {innerData.title}
                                </h5>
                                <p className="service__desc mb--16 mb-lg--8">
                                  {innerData.desc}
                                </p>
                                <ul className="case-details__card-list">
                                  {innerData.list.map((list, i) => (
                                    <li key={i}>
                                      <span>{list.text}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service__process">
                    <div className="service__process-ml">
                      <div className="col-lg-8">
                        <h2 className="service__title">Outcome</h2>
                        <p className="service__desc">{data.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 position-relative z-2">
                    <div className="service__body scrollspy-example bg-body-tertiary p-3 rounded-2">
                      <div className="service__feature" key={i}>
                        <h2 className="service__title">Case Strategy</h2>

                        <div className="col-md-9">
                          <ul className="service__feature-list">
                            {data.outcome_list.map((list, i) => (
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
                                <span className="service__feature-list--text">
                                  {list.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service__pagination case-details__pagination mt-0">
            <ul className="service__pagination--list law-blog-details-pagination">
              <li
                className="case-details__pagination--border-right"
                onClick={() => handleNavigation("prev")}
                style={{ cursor: prevStudy ? "pointer" : "default" }}
              >
                {prevStudy && (
                  <>
                    <Image className="pagination-blog-img"
                      src={prevStudy.img}
                      width={312}
                      height={120}
                      alt="Previous Case Study"
                    />
                    <div className="pagination-blog-title d-flex align-items-center gap-2">
                      <svg
                        className="service__pagination--rotate"
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
                      <span>Previous Case Study</span>
                    </div>
                  </>
                )}
              </li>

              <li>
                <hr className="blog-details__pagination-hr" />
              </li>

              <li
                onClick={() => handleNavigation("next")}
                style={{ cursor: nextStudy ? "pointer" : "default" }}
              >
                {nextStudy && (
                  <>
                    <div className="pagination-blog-title d-flex align-items-center gap-2">
                      <span>Next Case Study</span>
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
                    </div>
                    <Image className="pagination-blog-img"
                      src={nextStudy.img}
                      width={312}
                      height={120}
                      alt="Next Case Study"
                    />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetails;
