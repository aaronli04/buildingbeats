import styles from "./SearchSection.module.css";
import logo from "../../../../public/logolong.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

interface Props {
  setSearchText: (searchText: string) => void;
}

const SearchSection: React.FC<Props> = ({ setSearchText }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className={styles.liner}>
        <Link className={styles.logoSection} href="/">
          <Image
            src={logo}
            alt="Building Beats Logo"
            loading="eager"
            width={452}
            layout="responsive"
          />
        </Link>
      <div className={styles.searchbarSection}>
        <input className={styles.searchbar} onChange={handleInputChange} />
        <IoSearch className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default SearchSection;
