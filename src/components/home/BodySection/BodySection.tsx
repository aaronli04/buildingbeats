import styles from './BodySection.module.css'
import constants from '@/utils/constants'
import CategoriesComponent from '@/components/shared/Categories/CategoriesComponent'
import FilterComponent from '@/components/shared/Filter/FilterComponent'
import TrendingCourses from './TrendingCourses/TrendingCourses'

const BodySection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.sidebar}>
                <CategoriesComponent categories={constants.CATEGORIES_STRUCTURE} />
                <FilterComponent filters={constants.FILTERS_STRUCTURE} />
            </div>
            <div className={styles.body}>
                <TrendingCourses courses={constants.TRENDING_COURSES} />
            </div>
        </div>
    )
}

export default BodySection