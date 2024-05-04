import styles from './page.module.css'
import HeaderSection from './HeaderSection/HeaderSection'
import SearchSection from './SearchSection/SearchSection'
import BodySection from './BodySection/BodySection'

const HomePage = () => {
  return (
    <div className={styles.liner}>
      <HeaderSection />
      <SearchSection />
      <BodySection />
    </div>
  )
}

export default HomePage