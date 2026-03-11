"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import logoLight from "../../public/images/logo/logo-light.png";

import MobileMenu from "./MobileMenu";
import NavList from "./NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { PhoneIcon } from "../icons/SvgIcons";

interface HeaderProps {
  bgDark?: boolean;
}

const Header = ({ bgDark }: HeaderProps) => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {}, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`law-header header-sticky ${bgDark ? "law-bg-secondary" : ""
          } ${isSticky ? "law-sticky" : ""}`}
      >
        <div className="law-fullwidth-wrapper">
          <div className="law-header-mainbar">
            <div className="law-header-left">
              <div className="law-header-content">
                <Link className="law-logo" href="/">
                  <Image
                    className="img-fluid header-logo"
                    src={logoLight}
                    width={600}
                    height={110}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="law-header-middle d-none d-xl-block">
              <NavList />
            </div>
            <div className="law-header-right">
              <div className="law-header-content d-none d-xl-block">
                <div className="law-header-info">
                  <Link href="callto:+9853025630" className="law-quick-contact" aria-label="Call for an appointment: (985) 302-5630">
                    <div className="law-quick-contact-icon">
                      <PhoneIcon fill="#FFFFFF" />
                    </div>
                    <div className="content-part">
                      <p>Call for an appointment</p>
                      <p>(985) 302-5630</p>
                    </div>
                  </Link>
                </div>
              </div>
              <button
                className="law-hamburger-btn d-xl-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                onClick={() => setIsSticky(false)}
              >
                <FontAwesomeIcon icon={faBars} />  
              </button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
