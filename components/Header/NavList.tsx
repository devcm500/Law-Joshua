"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import serviceData from "../../data/service.json";

const NavList = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string): string =>
    pathname === href || pathname.startsWith(`${href}/`)
      ? "law-mainmenu-active"
      : "";

  return (
    <>
      <nav className="law-mainmenu-nav">
        <ul className="law-mainmenu d-xl-flex">
          <li className="is-dropdown">
            <Link
              className="collapsed"
              href={`${isMobile ? "#collapseServices" : "#"}`}
              role="button"
              data-bs-toggle={`${isMobile ? "collapse" : ""}`}
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-expanded={isMobile ? false : undefined}
              aria-controls={isMobile ? "collapseServices" : undefined}
            >
              Legal Services
              <svg
                className="ml--8"
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={8}
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  d="M0.00010201 0.753739C-0.000797298 0.604893 0.0444011 0.459162 0.129935 0.335125C0.215469 0.211088 0.337463 0.114364 0.480365 0.0572859C0.623266 0.000207965 0.7806 -0.0146384 0.932306 0.0146397C1.08401 0.0439177 1.22322 0.115994 1.33218 0.221678L5.45305 4.1934L9.57392 0.221679C9.7206 0.0805674 9.91955 0.00129191 10.127 0.00129192C10.2297 0.00129192 10.3314 0.0207544 10.4263 0.0585684C10.5212 0.0963824 10.6075 0.151807 10.6801 0.221679C10.7527 0.29155 10.8103 0.374499 10.8496 0.46579C10.8889 0.557081 10.9092 0.654926 10.9092 0.753739C10.9092 0.953301 10.8268 1.14469 10.6801 1.2858L6.00613 5.78209C5.86018 5.92166 5.66274 6 5.45694 6C5.25114 6 5.05371 5.92166 4.90775 5.78209L0.233799 1.2858C0.160193 1.2164 0.101638 1.13363 0.0615224 1.0423C0.0214071 0.950968 0.000530206 0.852887 0.00010201 0.753739Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <ul
              className={`law-mainmenu-dropdown ${isMobile ? "collapse mb-2" : ""
                }`}
              id="collapseServices"
            >
              {serviceData &&
                serviceData.service.map((data, i) => (
                  <li key={i}>
                    <Link
                      href={`/serviceDetails/${data.id}`}
                      className={isActive(`/serviceDetails/${data.id}`)}
                    >
                      {data.heading}
                    </Link>
                  </li>
                ))}

              <span className="law-mainmenu-top__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                >
                  <path
                    d="M9.19204 1.10782C9.59146 0.560134 10.4085 0.560135 10.808 1.10782L19.2333 12.6607C19.7152 13.3215 19.2432 14.2499 18.4253 14.2499H1.57466C0.756772 14.2499 0.284771 13.3215 0.7667 12.6607L9.19204 1.10782Z"
                    fill="var(--color-secondary)"
                  />
                </svg>
              </span>
            </ul>
          </li>
          <li>
            <Link
              href="/team-details/1"
              className={isActive("/team-details/1")}
            >
              Managing Attorney Profile
            </Link>
          </li>
          <li className="is-dropdown">
            <Link
              className="collapsed"
              href={`${isMobile ? "#collapseTeams" : "/ourteam"}`}
              data-bs-toggle={`${isMobile ? "collapse" : ""}`}
              role="button"
              aria-expanded={isMobile ? false : undefined}
              aria-controls={isMobile ? "collapseTeams" : undefined}
            >
              Our Team
              <svg
                className="ml--8"
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={8}
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  d="M0.00010201 0.753739C-0.000797298 0.604893 0.0444011 0.459162 0.129935 0.335125C0.215469 0.211088 0.337463 0.114364 0.480365 0.0572859C0.623266 0.000207965 0.7806 -0.0146384 0.932306 0.0146397C1.08401 0.0439177 1.22322 0.115994 1.33218 0.221678L5.45305 4.1934L9.57392 0.221679C9.7206 0.0805674 9.91955 0.00129191 10.127 0.00129192C10.2297 0.00129192 10.3314 0.0207544 10.4263 0.0585684C10.5212 0.0963824 10.6075 0.151807 10.6801 0.221679C10.7527 0.29155 10.8103 0.374499 10.8496 0.46579C10.8889 0.557081 10.9092 0.654926 10.9092 0.753739C10.9092 0.953301 10.8268 1.14469 10.6801 1.2858L6.00613 5.78209C5.86018 5.92166 5.66274 6 5.45694 6C5.25114 6 5.05371 5.92166 4.90775 5.78209L0.233799 1.2858C0.160193 1.2164 0.101638 1.13363 0.0615224 1.0423C0.0214071 0.950968 0.000530206 0.852887 0.00010201 0.753739Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <ul
              className={`law-mainmenu-dropdown law-mainmenu-dropdown-md ${isMobile ? "collapse mb-2" : ""
                }`}
              id="collapseTeams"
            >
              <li>
                <Link
                  href="/team-details/2"
                  className={isActive("/team-details/2")}
                >
                  Of Counsel Attorney Profile | Jazmine Torres
                </Link>
              </li>
              <li>
                <Link href="/ourteam" className={isActive("/ourteam")}>
                  Paralegal Staff
                </Link>
              </li>

              <span className="law-mainmenu-top__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                >
                  <path
                    d="M9.19204 1.10782C9.59146 0.560134 10.4085 0.560135 10.808 1.10782L19.2333 12.6607C19.7152 13.3215 19.2432 14.2499 18.4253 14.2499H1.57466C0.756772 14.2499 0.284771 13.3215 0.7667 12.6607L9.19204 1.10782Z"
                    fill="var(--color-secondary)"
                  />
                </svg>
              </span>
            </ul>
          </li>
          <li>
            <Link href="/blog" className={isActive("/blog")}>
              News
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact")}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavList;
