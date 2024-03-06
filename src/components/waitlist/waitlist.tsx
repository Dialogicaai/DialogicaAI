import classNames from 'classnames';
import styles from './waitlist.module.scss';

export interface WaitlistProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Waitlist = ({ className }: WaitlistProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft} />
                    <div className={styles.divRight} />
                </span>
            </div>
        </div>
    );
};
