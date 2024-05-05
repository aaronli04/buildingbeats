import { Course } from '@/utils/types/Course'
import styles from './FullCatalog.module.css'
import { Roboto } from "next/font/google"
import CourseCard from '@/components/shared/CourseCard/CourseCard'
import { shuffleCatalog } from '@/utils/catalog'

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

interface FullCatalogProps {
    courses: Course[];
}

const FullCatalog: React.FC<FullCatalogProps> = ({ courses }) => {
    const randomizedCatalog = shuffleCatalog(courses)

    return (
        <div className={styles.liner}>
            <div className={styles.titleSection}>
                <div className={robotoBold.className}>
                    <div className={styles.title}>
                        Browse the full catalog
                    </div>
                </div>
                <div className={styles.results}>
                    {randomizedCatalog.length} results
                </div>
            </div>
            <div className={styles.courseSection}>
                {randomizedCatalog.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    )
}

export default FullCatalog