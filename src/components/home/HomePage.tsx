"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import HeaderSection from "./HeaderSection/HeaderSection";
import SearchSection from "./SearchSection/SearchSection";
import BodySection from "./BodySection/BodySection";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.liner}>
      <HeaderSection />
      <SearchSection setSearchText={setSearchText} />
      <BodySection searchText={searchText} />
    </div>
  );
};

export default HomePage;
