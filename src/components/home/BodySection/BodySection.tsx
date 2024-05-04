import styles from './BodySection.module.css'
import CategoriesComponent from '@/components/shared/Categories/CategoriesComponent'
import constants from '@/utils/constants'

const BodySection = () => {

    return (
        <div className={styles.liner}>
            <CategoriesComponent categories={constants.CATEGORIES_STRUCTURE} />
        </div>
    )
}

export default BodySection