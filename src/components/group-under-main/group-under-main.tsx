import classNames from 'classnames';
import styles from './group-under-main.module.scss';
import Scale from '../../assets/scale.png'
import DB from '../../assets/courthouse-hi.png'



export interface GroupUnderMainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GroupUnderMain = ({ className }: GroupUnderMainProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <div className={styles.divUpper}>
                            <h2 className={styles.h2Left}>Backed by Attorneys</h2>
                            <p className={styles.paragraphClassLeft}>
                                Our company collaborates closely with attorneys through a board of
                                advisors to ensure that the product is tailored to meet specific
                                needs and jurisdictions.
                            </p>
                        </div>
                        <div className={styles.divLower}>
                            <img
                                src={Scale}
                                alt=""
                                className={styles.imgLower}
                            />
                        </div>
                    </div>
                    <div className={styles.divRight}>
                        <div className={styles.divUpper}>
                            <h2 className={styles.h2right}>Reliable and Accurate</h2>
                            <p className={styles.paragraphClass}>
                                All data utilized for fact-checking is sourced exclusively from
                                legal databases, guaranteeing reliability and accuracy.
                            </p>
                        </div>
                        <div className={styles.divLower}>
                            <img
                                src={DB}
                                alt=""
                                className={styles.imgLowerTwo}
                            />
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};
