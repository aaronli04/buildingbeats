import { Course } from '@/utils/types/Course'
import styles from './FullCatalog.module.css'
import { Roboto } from "next/font/google"
import CourseCard from '@/components/shared/CourseCard/CourseCard'

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

interface CheckboxState {
    [key: string]: boolean;
}

interface FullCatalogProps {
    courses: Course[];
    filtersState: CheckboxState;
}

const FullCatalog: React.FC<FullCatalogProps> = ({ courses, filtersState }) => {
    const isAnyFilterActive = Object.values(filtersState).some(value => value)

    const filteredCourses = isAnyFilterActive
        ? courses.filter(course => filtersState['Level:' + course.difficulty] === true)
        : courses

    return (
        <div className={styles.liner}>
            <div className={styles.titleSection}>
                <div className={robotoBold.className}>
                    <div className={styles.title}>
                        Browse the full catalog
                    </div>
                </div>
                <div className={styles.results}>
                    {filteredCourses.length === 0 ? 'No results' :
                        filteredCourses.length === 1 ? '1 result' :
                            `${filteredCourses.length} results`}
                </div>
            </div>
            <div className={styles.courseSection}>
                {filteredCourses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    )
}

export default FullCatalog