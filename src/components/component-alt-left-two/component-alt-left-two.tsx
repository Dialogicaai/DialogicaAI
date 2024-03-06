import classNames from 'classnames';
import styles from './component-alt-left-two.module.scss';

import Questions from '../../assets/Questionque.png'

export interface ComponentAltLeftProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ComponentAltLeftTwo = ({ className }: ComponentAltLeftProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <div>
                            <h1 className={styles.h1Class}>Time Track</h1>
                            <p className={styles.paragraph}>
                            Keeping depositions organized and efficient, even with limited time, by using a system that not only tracks time but also prompts you to revisit previous questions if they haven't been answered.
                            </p>
                        </div>
                        <div className={styles.divLine} />
                        <div>
                            <button className={styles.button}>Learn More {"->"} </button>
                        </div>
                    </div>
                    <div className={styles.divRight}>
                        <img
                            src={Questions}
                            alt=""
                            className={styles.imgClass}
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};
