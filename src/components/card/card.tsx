import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    title: string;
    description: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, title, description }: CardProps) => {
    return <div className={classNames(styles.root, className)}>
<div  className={styles.divMain}>
<div  className={styles.divLine}/>
<div className={styles.divContent}>
<h1 className={styles.h1Class}>{title}</h1>
<p className={styles.paragraphClass}>{description}</p></div>
</div></div>;
};
