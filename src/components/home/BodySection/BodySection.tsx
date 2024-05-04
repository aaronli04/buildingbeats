import styles from './BodySection.module.css'
import CategoriesComponent from '@/components/shared/Categories/CategoriesComponent'
import FilterComponent from '@/components/shared/Filter/FilterComponent'
import constants from '@/utils/constants'

const BodySection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.sidebar}>
                <CategoriesComponent categories={constants.CATEGORIES_STRUCTURE} />
                <FilterComponent filters={constants.FILTERS_STRUCTURE} />
            </div>
        </div>
    )
}

export default BodySection