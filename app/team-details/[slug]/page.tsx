import React from "react";
import TeamDetails from "@/components/TeamDetails/TeamDetails";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/app/backToTop";

export const metadata = {
  title: "Team Details Page - Law Firm",
  description: "Law Firm",
};

const TeamDetailsPage = () => {
  return (
    <>
      <Header bgDark={true} />
      <TeamDetails />

      <BackToTop />
      <Footer />
    </>
  );
};

export default TeamDetailsPage;
