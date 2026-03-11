"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import serviceData from "../../data/service.json";
import { DropdownChevronIcon, DropdownTriangleIcon } from "../icons/SvgIcons";

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
              <DropdownChevronIcon className="ml--8" />
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
                <DropdownTriangleIcon />
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
              <DropdownChevronIcon className="ml--8" />
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
                <DropdownTriangleIcon />
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
