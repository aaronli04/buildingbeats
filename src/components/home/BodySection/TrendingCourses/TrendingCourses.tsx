import { Course } from '@/utils/types/Course'
import styles from './TrendingCourses.module.css'
import { Roboto } from "next/font/google"

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

interface TrendingCoursesProps {
    courses: Course[];
}

const TrendingCourses: React.FC<TrendingCoursesProps> = () => {
    return (
        <div className={styles.liner}>
            <div className={robotoBold.className}>
                <div className={styles.title}>
                    Trending Courses
                </div>
            </div>
            <div className={styles.courseSection}>
                Courses
            </div>
        </div>
    )
}

export default TrendingCourses