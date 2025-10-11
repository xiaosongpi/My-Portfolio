import styles from './Player.module.css'
import '../../App'

function Player () {
    return (
        <>
            <div className={`${styles.player} ${styles.section}`}>
                <div className={styles['box-big']}>
                    <div className={styles.player_wrapper}>
                        <p className={styles['text-big']}>TIME TO START</p>
                        <div className={styles.progress_line}>

                        </div>
                        <div className={styles.option_group}>
                            <div className={styles.circle}>

                            </div>
                            <div className={styles.box}>

                            </div>
                            <p>00:00 / 00:00</p>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Player