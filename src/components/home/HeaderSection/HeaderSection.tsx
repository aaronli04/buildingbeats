import Banner from '@/components/shared/Banner/Banner'
import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    const currentBanner: Banner = {
        message: 'New Course: Metro Boomin',
        link: 'https://skool.com/buildingbeats/metro'
    }

    return (
        <div className={styles.liner}>
            <Banner {...currentBanner}/>
        </div>
    )
}

export default HeaderSection