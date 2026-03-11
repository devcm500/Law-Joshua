import React from "react";
import NavList from "./NavList";
import Image from "next/image";

import logoLight from "../../public/images/logo/logo-light.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/pro-regular-svg-icons";
import { PhoneIcon } from "../icons/SvgIcons";

const MobileMenu = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start mobile-menu__offcanvas"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-inner">
          <div>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <Image src={logoLight} width={600} height={110} alt="logo" className="header-logo-mobile" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faXmark} />  
              </button>
            </div>
            <div className="offcanvas-body">
              <NavList />
            </div>
          </div>
          <Link className="law-quick-contact" href="callto:+9853025630" aria-label="Call for an appointment: (985) 302-5630">
            <div className="law-quick-contact-icon">
              <PhoneIcon />
            </div>
            <div className="content-part">
              <p>Call for an appointment</p>
              <p>(985) 302-5630</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
