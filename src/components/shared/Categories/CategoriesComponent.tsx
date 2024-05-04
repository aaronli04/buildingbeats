import React from 'react';
import styles from './CategoriesComponent.module.css';
import { Category } from '@/utils/types/Category';
import Link from 'next/link';
import { Roboto } from "next/font/google";

interface CategoriesProps {
    categories: Category[];
}

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

const CategoriesComponent: React.FC<CategoriesProps> = ({ categories }) => {
    return (
        <div className={styles.liner}>
            {categories.map((category, index) => (
                <div key={index} className={styles.categorySection}>
                    <div className={robotoBold.className}>
                        <Link className={styles.category} href={category.main.link}>
                            {category.main.title}
                        </Link>
                    </div>
                    <div className={styles.subCategory}>
                        {category.subcategories && category.subcategories.length > 0 && (
                            category.subcategories.map((subcategory, subIndex) => (
                                <Link key={subIndex} href={subcategory.link}>
                                    {subcategory.title}
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoriesComponent;