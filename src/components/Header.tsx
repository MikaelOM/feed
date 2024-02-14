import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteLogo}/>
            <p className={styles.title}>Ignite Feed</p>
        </header>
    )
}