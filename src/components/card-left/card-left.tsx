import classNames from 'classnames';
import styles from './card-left.module.scss';
import image from '../../assets/left_column.png'

export interface CardLeftProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CardLeft = ({ className }: CardLeftProps) => {
    return <div className={classNames(styles.root, className)}>
<div  className={styles.divMain}>
<div  className={styles.divImage}>
<img src={image} alt="" className={styles.imgClass} />
</div>
<div className={styles.divText}>
<h1 className={styles.h1class}>Question Feed. </h1>
<p className={styles.paragraph}>This is a paragraph.</p></div>
</div>
</div>;
};
