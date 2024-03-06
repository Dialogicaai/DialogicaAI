import classNames from 'classnames';
import styles from './nav-header.module.scss';

export interface NavHeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavHeader = ({ className }: NavHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <button className={styles.buttonLink}>Home</button>
                        <button className={styles.buttonLink}>About</button>
                        <button className={styles.buttonLink}>Uses</button>
                    </div>
                    <div className={styles.divCenter}>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            alt=""
                            className={styles.logoClass}
                        />
                        <h2 className={styles.h2class}>Dialogica AI</h2>
                    </div>
                    <div className={styles.divRight}>
                        <button className={styles.buttonLink}>Login</button>
                        <button className={styles.waitlistButton}>Waitlist</button>
                    </div>
                </span>
            </div>
        </div>
    );
};
