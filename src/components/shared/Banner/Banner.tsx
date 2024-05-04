import styles from './Banner.module.css'
import { Banner } from '@/utils/types/Banner'
import Link from 'next/link'


const Banner: React.FC<Banner> = ({ message, link }) => {
    const fullMessage = message.toUpperCase()
    const messages = Array.from({ length: 10 }, () => fullMessage)

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.slidingText}>
                {messages.map((msg, index) => (
                    <Link className={styles.bannerMessage} key={index} href={link}>
                        {msg}
                    </Link>
                ))}
            </div>
            <div className={styles.slidingText}>
                {messages.map((msg, index) => (
                    <Link className={styles.bannerMessage} key={index} href={link}>
                        {msg}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Banner;