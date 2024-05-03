import Banner from '@/components/shared/Banner/Banner'
import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    return (
        <div className={styles.liner}>
            <Banner message={"New Course: Metro Boomin"}/>
        </div>
    )
}

export default HeaderSection