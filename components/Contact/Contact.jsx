"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";

import SectionHead from "../Header/Section-Head";

import personImg from "../../public/images/person/person-2.png";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    casetype: "",
    phoneNumber: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    casetype: "",
    phoneNumber: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors = {
      firstname: "",
      lastname: "",
      email: "",
      casetype: "",
      phoneNumber: "",
      description: "",
    };
    let isValid = true;

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required.";
      isValid = false;
    } else if (!/^[a-zA-Z]/.test(formData.firstname.trim())) {
      newErrors.firstname = "First name must start with a letter.";
      isValid = false;
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required.";
      isValid = false;
    } else if (!/^[a-zA-Z]/.test(formData.lastname.trim())) {
      newErrors.lastname = "Last name must start with a letter.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number.";
      isValid = false;
    }

    if (!formData.casetype.trim()) {
      newErrors.casetype = "Please select a case type.";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Your question is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setStatus("sending");
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setStatus("success");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            tgusername: "",
            casetype: "",
            phoneNumber: "",
            description: "",
          });
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setStatus("error");
      }
    } else {
      setStatus("idle");
    }
  };

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="contact contact-bgImg law-section-gap">
        <div className="container">
          <div className="row row--15 justify-content-center">
            <SectionHead title="Contact Us" />

            <div className="col-lg-5 col-xl-6 position-relative d-none d-xl-block"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <div className="contact__img">
                <Image
                  src={personImg}
                  width={562}
                  height={806}
                  unoptimized={true}
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-8 col-xl-6">
              <h3
                className="law__text fst-italic mb-0"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                Schedule
              </h3>
              <h2
                className="law__title"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                Your Appointment Today
              </h2>
              <p
                className="law__about-desc mb-4"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                We believe exceptional representation is achieved through
                aggressive advocacy, client adherence to absolute.
              </p>

              <form className="contact__form" onSubmit={handleFormSubmit}
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="200"
              >
                <div className="content">
                  <input
                    className="contact__form-inp"
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                  />

                  {errors.firstname && (
                    <span className="contact__form-error d-block mt-1">
                      {errors.firstname}
                    </span>
                  )}
                </div>
                <div className="content">
                  <input
                    className="contact__form-inp"
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />{" "}
                  {errors.lastname && (
                    <span className="contact__form-error d-block mt-1">
                      {errors.lastname}
                    </span>
                  )}
                </div>
                <div className="content">
                  <input
                    className="contact__form-inp"
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />{" "}
                  {errors.email && (
                    <span className="contact__form-error d-block mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="content">
                  <input
                    className="contact__form-inp"
                    type="text"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phoneNumber && (
                    <span className="contact__form-error d-block mt-1">
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>
                <div className="content">
                  <select
                    className="form-select contact__form-select"
                    id="casetype"
                    name="casetype"
                    value={formData.casetype}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="service-type" disabled>Service Type*</option>
                    <option value="business-law">Business Law</option>
                    <option value="family-law">Family Law</option>
                    <option value="personal-injury-law">Personal Injury Law</option>
                    <option value="out-of-state-client">Out of State Clients</option>
                  </select>
                  {errors.casetype && (
                    <span className="contact__form-error d-block mt-1">
                      {errors.casetype}
                    </span>
                  )}
                </div>
                <div className="content">
                  <textarea
                    placeholder="Describe your case"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {errors.description && (
                    <span className="contact__form-error d-block mt-1">
                      {errors.description}
                    </span>
                  )}
                </div>
                <div className="content">
                  <div className="content contact__form-check mt-sm--4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I agree to the Privacy Policy
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="law-btn-group d-inline-block">
                      <button
                        className="law-btn3d law-btn3d-sm"
                        disabled={status === "sending"}
                      >
                        <span className="law-btn3d__shadows"></span>
                        <span className="law-btn3d__text">
                          <span className="btn-text">
                            {status === "sending"
                              ? "Sending..."
                              : "Send Request"}
                          </span>
                          <svg
                            className="law-btn3d-icon-right"
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
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                              fill="white"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                              fill="white"
                            ></path>
                          </svg>
                          <svg
                            className="law-btn3d-icon-left"
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
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7498 5.66003C13.2223 5.66003 10.3398 8.76213 10.3398 12.07V12.82H11.8398V12.07C11.8398 9.55853 14.0824 7.16003 16.7498 7.16003H17.4994V5.66003H16.7498Z"
                              fill="white"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7498 7.16005C13.2223 7.16005 10.3398 4.05791 10.3398 0.75V0H11.8398V0.75C11.8398 3.26158 14.0824 5.66005 16.7498 5.66005H17.4994V7.16005H16.7498Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
