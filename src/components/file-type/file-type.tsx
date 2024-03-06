import classNames from 'classnames';
import styles from './file-type.module.scss';

export interface FileTypeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FileType = ({ className }: FileTypeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgClass}
                />
                <h6>Heading 6</h6>
            </div>
        </div>
    );
};
