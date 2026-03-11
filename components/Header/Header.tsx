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
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.6098 13.7314C17.0479 13.2602 13.7526 11.1735 13.2049 11.2693C12.9478 11.3149 12.7511 11.5341 12.2246 12.1622C11.9811 12.4714 11.7137 12.7609 11.4249 13.0281C10.8956 12.9003 10.3834 12.7104 9.89872 12.4624C7.99797 11.537 6.46241 10.001 5.53757 8.1C5.28958 7.61533 5.0997 7.10307 4.97186 6.57386C5.23911 6.28502 5.52865 6.01763 5.83779 5.77414C6.46521 5.24764 6.68507 5.05221 6.73071 4.79379C6.8265 4.24479 4.73786 0.950786 4.26857 0.388929C4.07186 0.156214 3.89314 0 3.66429 0C3.00086 0 0 3.71057 0 4.19143C0 4.23064 0.0642856 8.09357 4.94293 13.0571C9.90643 17.9357 13.7694 18 13.8086 18C14.2894 18 18 14.9991 18 14.3357C18 14.1069 17.8438 13.9281 17.6098 13.7314Z" fill="#FF0000" />
                        <path d="M13.4987 8.35704H14.7845C14.7829 6.99354 14.2406 5.68633 13.2765 4.72219C12.3123 3.75805 11.0051 3.21572 9.6416 3.21419V4.4999C10.6643 4.50092 11.6448 4.90763 12.3679 5.63076C13.091 6.35389 13.4977 7.33438 13.4987 8.35704Z" fill="#FF0000" />
                        <path d="M16.713 8.35714H17.9987C17.9962 6.14147 17.1149 4.01728 15.5482 2.45057C13.9815 0.883854 11.8573 0.00255213 9.6416 0V1.28571C11.5164 1.28793 13.3137 2.03366 14.6394 3.35933C15.9651 4.685 16.7108 6.48236 16.713 8.35714Z" fill="#FF0000" />
                      </svg>
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
