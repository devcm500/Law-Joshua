"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { PhoneIcon } from "../icons/SvgIcons";

const ServiceSidebar = () => {
  const [currentSection, setCurrentSection] = useState("introduction");
  const sections = [
    { id: "description", label: "Description" },
    { id: "concentration", label: "Concentration"},
    { id: "bookAppointment", label: "Appointment" },
  ];

  useEffect(() => {
    const sectionIds = ["introduction", "concentration", "bookAppointment"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="law-sidebar-wrapper">
      <div className="service__sidebar">
        <ul className="service__sidebar-list d-flex flex-lg-column mt-0">
          {sections.map((sec, i) => (
            <li key={i}>
              <ScrollLink
                className={`btn service__sidebar-btn ${
                  currentSection === sec.id ? "current" : ""
                }`}
                to={sec.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                {sec.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <button
          className="service__call d-none d-lg-flex"
          onClick={() => (window.location.href = "callto:+19853025630")}
        >
          <span className="service__call-text fst-italic">Call Us</span>
          <span className="service__call-text fw-bold pb-1">Today</span>
          <PhoneIcon />
        </button>
      </div>
    </div>
  );
};

export default ServiceSidebar;
