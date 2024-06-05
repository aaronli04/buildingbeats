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
    searchText: string;
    courses: Course[];
    filtersState: CheckboxState;
}

const FullCatalog: React.FC<FullCatalogProps> = ({ searchText, courses, filtersState }) => {
    const isAnyFilterActive = Object.values(filtersState).some(value => value)

    const filteredCourses = courses.filter(course => {
        // Check if the current filter for the course's difficulty is active, if any filter is active
        const filterMatch = isAnyFilterActive ? filtersState['Level:' + course.difficulty] : true

        // Check if the course title or description contains the searchText
        const searchMatch = course.title.toLowerCase().includes(searchText.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchText.toLowerCase())

        return filterMatch && searchMatch
    })

    const headerText = searchText.length > 0 ? `Courses for "${searchText}"` : "Browse the full catalog"

    return (
        <div className={styles.liner}>
            <div className={styles.titleSection}>
                <div className={robotoBold.className}>
                    <div className={styles.title}>
                        {headerText}
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