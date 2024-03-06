import classNames from 'classnames';
import styles from './nav-header-dialogica.module.scss';
import Logo from "../../assets/noBackground.png"

export interface NavHeaderDialogicaProps {
    className?: string;
}

export const NavHeaderDialogica = ({ className }: NavHeaderDialogicaProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                <div className={styles.divCenter}>
                        <img
                            src={Logo}
                            alt=""
                            className={styles.logoClass}
                        />
                        <h1 className={styles.h1Class}>Dialogica AI</h1>
                    </div>
                    <div className={styles.divLeft}>
                       
                    </div>
                    
                    <div className={styles.divRight}>
                    <button className={styles.buttonLink}>Home</button>
                        <button className={styles.buttonLink}>How it works</button>
                        <button className={styles.waitlistButton}>Get Notified</button>
                    </div>

                    <div className={styles.divLine}/>
                </span>
            </div>
        </div>
    );
};