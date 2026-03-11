"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";

import SectionHead from "../Header/Section-Head";
import { ArrowRightIcon } from "../icons/SvgIcons";

import personImg from "../../public/images/person/person-2.png";

import type { FormData, FormErrors, FormStatus } from "@/types";

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    casetype: "",
    phoneNumber: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstname: "",
    lastname: "",
    email: "",
    casetype: "",
    phoneNumber: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
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

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (validateForm()) {
      setStatus("sending");
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string,
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
      <div className="col-12 col-xl-10 mx-auto mt--16">
        <div className="contact-bg">
          <div className="col-xxl-8 mx-auto">
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
              Your Consultation Today
            </h2>
            <p
              className="law__about-desc mb--24"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              The information on this website is for general information
              purposes only. Any information found on the Joshua D. Allison, A
              Professional Law Corporation
            </p>
          </div>

          <form className="contact__form" onSubmit={handleFormSubmit}>
            <div className="content">
              <input
                className="contact__form-inp contact__form-bgwhite"
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
                className="contact__form-inp contact__form-bgwhite"
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
                className="contact__form-inp contact__form-bgwhite"
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
                className="contact__form-inp contact__form-bgwhite"
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
              <label htmlFor="casetype" className="visually-hidden">Case Type</label>
              <select
                className="form-select contact__form-select contact__form-bgwhite"
                id="casetype"
                name="casetype"
                value={formData.casetype}
                onChange={handleInputChange}
                required
              >
                <option defaultValue="">Case Type*</option>
                <option value="Divorce">Divorce</option>
                <option value="Criminal Defense">Criminal Defense</option>
                <option value="Business Law">Business Law</option>
              </select>
              {errors.casetype && (
                <span className="contact__form-error d-block mt-1">
                  {errors.casetype}
                </span>
              )}
            </div>
            <div className="content">
              <textarea
                className="bg-color-white"
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
            <div className="content grid-span-2">
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
              <div className="law-btn-group d-inline-block">
                <button
                  className="law-btn3d law-btn3d-xl"
                  disabled={status === "sending"}
                >
                  <span className="law-btn3d__shadows"></span>
                  <span className="law-btn3d__text">
                    <span className="btn-text">
                      {status === "sending" ? "Sending..." : "Send Request"}
                    </span>
                    <ArrowRightIcon className="law-btn3d-icon-right" />
                    <ArrowRightIcon className="law-btn3d-icon-left" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
