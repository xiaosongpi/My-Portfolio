import styles from './Navbar.module.css'

function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
                <div className=''></div>
                <p className={styles.nav__brand}>Portfolio</p>
            </div>
            <ul className={styles.menu__list}>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Skill</a>
                </li>
                <li>
                    <a href="">Project</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            <div className={styles.nav__action}>
                <div className={styles.user}>
                    <p className={styles.user__name}>Zhomphilies</p>
                    <div className={`${styles.user__status} ${styles['user__status--small']}`}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;