import styles from './Banner.module.css'

interface Props {
    message: string,
}

const Banner: React.FC<Props> = ({ message }) => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.rotatingText}>
                {message}
            </div>
        </div>
    )
}

export default Banner;