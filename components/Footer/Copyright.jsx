import React from "react";
import Link from "next/link";


const Copyright = () => {
  return (
    <div className="law__copyright">
      <div className="container">
        <div className="row text-center">
          <h4 className="law__copyright-text">Copyright © 2025 <Link href="/">Allisonlawcorp</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
