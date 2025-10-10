import styles from './Navbar.module.css'

function Navbar () {
    return (
        <nav className={styles.nav}>
            <p className={styles.title}>portfolio</p>
            <div className={styles['box--right']}>
                <ul className={styles.list}>
                    <li className={styles.item}>about/</li>
                    <li className={styles.item}>skill/</li>
                    <li className={styles.item}>project/</li>
                    <li className={styles.item}>contact/</li>
                    <div className={styles.circle}></div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar