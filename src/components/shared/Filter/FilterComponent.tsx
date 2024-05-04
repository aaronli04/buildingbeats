'use client'

import React, { useState } from 'react'
import styles from './FilterComponent.module.css'
import { Filter } from '@/utils/types/Filter'
import { Roboto } from "next/font/google"

interface FilterProps {
    filters: Filter[];
}

interface CheckboxState {
    [key: string]: boolean;
}

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

const FilterComponent: React.FC<FilterProps> = ({ filters }) => {
    const [checkedState, setCheckedState] = useState(() => {
        const initialState: CheckboxState = {}
        filters.forEach((filter) => {
            filter.options.forEach((option) => {
                const key = `${filter.title}:${option}`
                initialState[key] = false
            })
        })
        return initialState
    })

    const handleCheckboxChange = (key: string) => {
        setCheckedState(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }))
    }

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
                                    <input
                                        className={styles.checkbox}
                                        type="checkbox" id={option}
                                        name={option}
                                        checked={checkedState[option]}
                                        onChange={() => handleCheckboxChange(option)}
                                    />
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
    )
}

export default FilterComponent;