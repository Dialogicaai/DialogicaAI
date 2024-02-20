import classNames from 'classnames';
import styles from './sub-intro.module.scss';

export interface SubIntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SubIntro = ({ className }: SubIntroProps) => {
    return <div className={classNames(styles.root, className)}>
<div  className={styles.divMain}>
<h1 className={styles.h1Class}>Simple, but Powerfull.</h1>
</div>
</div>;
};
