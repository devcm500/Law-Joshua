import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TeamMemberPage from "@/components/Team/TeamPage";

const TeamPage = () => {
  return (
    <>
      <Header bgDark={true} />
      <TeamMemberPage />

      <Footer />
    </>
  );
};

export default TeamPage;
