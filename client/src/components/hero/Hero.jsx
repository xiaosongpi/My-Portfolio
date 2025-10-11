import styles from './Hero.module.css'
import Download from '../../assets/download.svg';
import Email from '../../assets/email.svg';
import Phone from '../../assets/phone.svg';
import Linkedin from '../../assets/linkedin.svg';
import Human from '../../assets/human.svg';

function Hero () {
    return (
        <div className={`${styles.hero} ${styles.section}`}>
            <div className={styles['box-left']}>
                <div className={`${styles['box-small']} ${styles['box-float']}`}>
                    <p className={styles['text-big']}>5+</p>
                    <p className={styles['text-small']}>Team Projects Built with Git & GitHub</p>
                </div>
                <div className={`${styles['box-small']} ${styles['box-bottom']}`}>
                    <p className={styles['text-big']}>Hendry</p>
                    <div className={styles.wrap_typer}>
                        <p className={`${styles['text-medium']} ${styles['text-outline']} ${styles['text-typer']}`}>Backend Developer</p>
                    </div>
                </div>
            </div>
            <div className={styles['box-right']}>   
                <div className={`${styles['box-small']} ${styles['box-float']}`}>
                    <p className={`${styles['text-small']} ${styles['text-right']}`}>It's time to know more about me <br /> Download my CV</p>
                    <button className={styles.btn}>
                        <div className={styles.circle}>
                            <img className={styles.icon} src={Download} alt="" />
                        </div>
                        <p className={styles['text-small']}>Download</p>
                    </button>
                </div>
                <div className={`${styles['box-small']} ${styles['box-bottom']}`}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button className={`${styles['btn-square']} ${styles.contact}`}>
                                <p className={`${styles['text-small']} ${styles['text-right']}`}>Phone No.</p>
                                <div className={styles.square}>
                                    <img className={styles.icon} src={Phone} alt="" />
                                </div>
                            </button>
                        </li>
                        <li className={styles.item}>
                            <button className={`${styles['btn-square']} ${styles.contact}`}>
                                <p className={`${styles['text-small']} ${styles['text-right']}`}>Email</p>
                                <div className={styles.square}>
                                    <img className={styles.icon} src={Email} alt="" />
                                </div>
                            </button>
                        </li>
                        <li className={styles.item}>
                            <button className={`${styles['btn-square']} ${styles.contact}`}>
                                <p className={`${styles['text-small']} ${styles['text-right']}`}>LInkedIn</p>
                                <div className={styles.square}>
                                    <img className={styles.icon} src={Linkedin} alt="" />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero