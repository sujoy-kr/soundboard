import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <Link href='/'>
            <h1 id={styles.siteTitle}>SoundBoard</h1>
        </Link>
    )
}

export default Header
