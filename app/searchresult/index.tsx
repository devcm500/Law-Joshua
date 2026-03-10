import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchResult from "@/components/SearchResult/SearchResult";

const SearchResultPage = () => {
  return (
    <>
      <Header bgDark={true} />
      <SearchResult />

      <Footer />
    </>
  );
};

export default SearchResultPage;
