import { Course } from '@/utils/types/Course'
import styles from './TrendingCourses.module.css'
import { Roboto } from "next/font/google"
import CourseCard from '@/components/shared/CourseCard/CourseCard'

const robotoBold = Roboto({
    weight: '500',
    subsets: ["latin"]
})

interface TrendingCoursesProps {
    courses: Course[];
}

const TrendingCourses: React.FC<TrendingCoursesProps> = ({ courses }) => {
    return (
        <div className={styles.liner}>
            <div className={robotoBold.className}>
                <div className={styles.title}>
                    Trending Courses
                </div>
            </div>
            <div className={styles.courseSection}>
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    )
}

export default TrendingCourses