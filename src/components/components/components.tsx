import classNames from 'classnames';
import styles from './components.module.scss';

export interface ComponentsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Components = ({ className }: ComponentsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <div className={styles.divContainerLeft} />
                    </div>
                    <div className={styles.divRight}>
                        <span className={styles.spanSubContainers}>
                            <div className={styles.divContainerRight} />
                            <div />
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
};
