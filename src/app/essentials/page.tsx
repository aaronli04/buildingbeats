import styles from "./page.module.css";
import EssentialsPage from "@/components/essentials/EssentialsPage";

export default function Essentials() {
  return (
    <main className={styles.main}>
        <EssentialsPage />
    </main>
  );
}