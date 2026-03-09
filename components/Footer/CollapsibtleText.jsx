import React from "react";
import Link from "next/link";

const CollapsibleText = () => {
  return (
    <div className="law__footer-info-text">
      <div className="container">
        <div className="row">
          <div className="law__footer-info-text-wrapper col-12">
            <Link className="collapse-title has-right-arrow" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              The information on this website is for general information purposes only. Any information found on the Joshua D. Allison, A Professional Law Corporation
            </Link>
            <div className="collapse" id="collapseExample">
              <p className="colllapsible-text">
                A Professional Law Corporation website is not intended to be legal advice and does not create an attorney-client relationship. You should consult an attorney for advice regarding your individual situation. We invite you to contact us and welcome your calls, letters, and electronic mail. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleText;
