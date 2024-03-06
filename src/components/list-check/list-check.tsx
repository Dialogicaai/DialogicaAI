import classNames from 'classnames';
import styles from './list-check.module.scss';

export interface ListCheckProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ListCheck = ({ className }: ListCheckProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <h1 className={styles.h1Class}>Heading 1</h1>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.imgClass}
                    />
                </span>
            </div>
        </div>
    );
};
