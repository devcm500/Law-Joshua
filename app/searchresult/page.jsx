import React from "react";

import SearchResult from "./index";
import BackToTop from "../backToTop";

export const metadata = {
  title: "Search Result Page - Law Firm",
  description: "Law Firm",
};
const SearchResultLayout = () => {
  return (
    <>
      <SearchResult />
      <BackToTop />
    </>
  );
};

export default SearchResultLayout;
