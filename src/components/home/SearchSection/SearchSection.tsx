import styles from './SearchSection.module.css'
import logo from '../../../../public/logolong.png'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5"

const SearchSection = () => {

    return (
        <div className={styles.liner}>
            <div className={styles.logoSection}>
                <Image src={logo} alt='Building Beats Logo' loading="eager" width={452} />
            </div>
            <div className={styles.searchbarSection}>
                <input className={styles.searchbar} />
                <IoSearch size={34} />
            </div>
        </div>
    )
}

export default SearchSection