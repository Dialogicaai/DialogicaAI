import classNames from 'classnames';
import styles from './group-final.module.scss';

import Lock from "../../assets/lock-9643502f.png"
import ELI from "../../assets/brain-8b2f2069.png"


export interface GroupUnderMainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GroupFinal = ({ className }: GroupUnderMainProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <div className={styles.divUpper}>
                            <h2 className={styles.h2Left}>Locked and Secure</h2>
                            <p className={styles.paragraphClassLeft}>
                            Backed by the best security methods such as 2FA and Encrpytion.
                            </p>
                        </div>
                        <div className={styles.divLower}>
                            <img
                                src={Lock}
                                alt=""
                                className={styles.imgLower}
                            />
                        </div>
                    </div>
                    <div className={styles.divRight}>
                        <div className={styles.divUpper}>
                            <h2 className={styles.h2right}>Powered By E.L.I</h2>
                            <p className={styles.paragraphClass}>
                            Our live-feed content generation MLM powered exclusively from
                                legal databases, guaranteeing reliability and accuracy.
                            </p>
                        </div>
                        <div className={styles.divLower}>
                            <img
                                src={ELI}
                                alt=""
                                className={styles.imgLower}
                            />
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};
