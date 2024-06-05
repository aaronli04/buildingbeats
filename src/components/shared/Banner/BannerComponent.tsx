import styles from './BannerComponent.module.css'
import { Banner } from '@/utils/types/Banner'
import Link from 'next/link'

interface BannerProps {
    banner: Banner;
}

const BannerComponent: React.FC<BannerProps> = ({ banner }) => {
    const fullMessage = banner.message.toUpperCase()
    const messages = Array.from({ length: 10 }, () => fullMessage)

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.slidingText}>
                {messages.map((msg, index) => (
                    <Link target="_blank" className={styles.bannerMessage} key={index} href={banner.link}>
                        {msg}
                    </Link>
                ))}
            </div>
            <div className={styles.slidingText}>
                {messages.map((msg, index) => (
                    <Link target="_blank" className={styles.bannerMessage} key={index} href={banner.link}>
                        {msg}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BannerComponent;