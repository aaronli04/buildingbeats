"use client";

import React, { useState } from "react";
import styles from "./BodySection.module.css";
import data from "@/utils/constants";
import CategoriesComponent from "@/components/shared/Categories/CategoriesComponent";
import FilterComponent from "@/components/shared/Filter/FilterComponent";
import TrendingCourses from "./TrendingCourses/TrendingCourses";
import FullCatalog from "./FullCatalog/FullCatalog";

interface CheckboxState {
  [key: string]: boolean;
}

interface Props {
  searchText: string;
}

const BodySection: React.FC<Props> = ({ searchText }) => {
  const [checkedState, setCheckedState] = useState(() => {
    const initialState: CheckboxState = {};
    data.constants.FILTERS_STRUCTURE.forEach((filter) => {
      filter.options.forEach((option) => {
        const key = `${filter.title}:${option}`;
        initialState[key] = false;
      });
    });
    return initialState;
  });

  const handleCheckboxChange = (key: string) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className={styles.liner}>
      <div className={styles.sidebar}>
        <CategoriesComponent categories={data.constants.CATEGORIES_STRUCTURE} />
        <FilterComponent
          filters={data.constants.FILTERS_STRUCTURE}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
      <div className={styles.body}>
        <TrendingCourses courses={data.constants.TRENDING_COURSES} />
        <FullCatalog
          searchText={searchText}
          courses={data.courses.ALL_COURSES}
          filtersState={checkedState}
        />
      </div>
    </div>
  );
};

export default BodySection;
