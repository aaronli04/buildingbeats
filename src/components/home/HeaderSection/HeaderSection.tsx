import BannerComponent from "@/components/shared/Banner/BannerComponent";
import { Banner } from "@/utils/types/Banner";
import styles from "./HeaderSection.module.css";
import data from "@/utils/constants";

const HeaderSection = () => {
  const currentBanner: Banner = data.constants.BANNER_MESSAGE;

  return (
    <div className={styles.liner}>
      <BannerComponent banner={currentBanner} />
    </div>
  );
};

export default HeaderSection;
