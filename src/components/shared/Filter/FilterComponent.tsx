import React, { useState } from 'react';
import styles from './FilterComponent.module.css';
import { Filter } from '@/utils/types/Filter';
import { Roboto } from "next/font/google";

interface FilterProps {
    filters: Filter[];
}

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

const FilterComponent: React.FC<FilterProps> = ({ filters }) => {
    return (
        <div className={styles.liner}>
            <div className={robotoBold.className}>
                <div className={styles.title}>
                    Filters
                </div>
            </div>
            {filters.map((filter, index) => (
                <div key={index} className={styles.filterSection}>
                    <div className={robotoBold.className}>
                        <div className={styles.filterTitle}>
                            {filter.title}
                        </div>
                    </div>
                    <div className={styles.optionSection}>
                        {filter.options && filter.options.length > 0 && (
                            filter.options.map((option, subIndex) => (
                                <div key={subIndex} className={styles.option} >
                                    <input className={styles.checkbox} type="checkbox" id={option} name={option} />
                                    <span>
                                        {option}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilterComponent;