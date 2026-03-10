import React from "react";

import BackToTop from "@/app/backToTop";
import TeamPage from "./index";

export const metadata = {
  title: "Our Team Page - Law Firm",
  description: "Law Firm",
};

const TeamDetailsPage = () => {
  return (
    <>
      <TeamPage />

      <BackToTop />
    </>
  );
};

export default TeamDetailsPage;
