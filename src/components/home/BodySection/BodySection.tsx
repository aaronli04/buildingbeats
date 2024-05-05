import styles from './BodySection.module.css'
import data from '@/utils/constants'
import CategoriesComponent from '@/components/shared/Categories/CategoriesComponent'
import FilterComponent from '@/components/shared/Filter/FilterComponent'
import TrendingCourses from './TrendingCourses/TrendingCourses'
import FullCatalog from './FullCatalog/FullCatalog'

const BodySection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.sidebar}>
                <CategoriesComponent categories={data.constants.CATEGORIES_STRUCTURE} />
                <FilterComponent filters={data.constants.FILTERS_STRUCTURE} />
            </div>
            <div className={styles.body}>
                <TrendingCourses courses={data.constants.TRENDING_COURSES} />
                <FullCatalog courses={data.courses.ALL_COURSES} />
            </div>
        </div>
    )
}

export default BodySection