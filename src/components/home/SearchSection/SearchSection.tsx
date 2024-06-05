import styles from './SearchSection.module.css'
import logo from '../../../../public/logolong.png'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5"

interface Props {
    setSearchText: (searchText: string) => void;
}

const SearchSection:React.FC<Props> = ({ setSearchText }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (
        <div className={styles.liner}>
            <div className={styles.logoSection}>
                <Image src={logo} alt='Building Beats Logo' loading="eager" width={452} />
            </div>
            <div className={styles.searchbarSection}>
                <input className={styles.searchbar} onChange={handleInputChange} />
                <IoSearch size={34} />
            </div>
        </div>
    )
}

export default SearchSection